import * as chai from "chai";
import * as _ from "lodash";

import * as ABIDecoder from "abi-decoder";
import { BigNumber } from "bignumber.js";
import { ether, gWei } from "./utils/units";

// Types
import { Address, Log, UInt } from "../types/common.js";

// Contract types
import { TransferProxyContract } from "../types/generated/transfer_proxy";
import { StandardTokenMockContract } from "../types/generated/standard_token_mock";

// Artifacts
const StandardTokenMock = artifacts.require("StandardTokenMock");
const TransferProxy = artifacts.require("TransferProxy");

// Testing Set up
import { BigNumberSetup } from "./config/bignumber_setup";
import ChaiSetup from "./config/chai_setup";
BigNumberSetup.configure();
ChaiSetup.configure();
const { expect, assert } = chai;

import {
  assertTokenBalance,
  expectRevertError,
} from "./utils/tokenAssertions";
import {
  STANDARD_INITIAL_TOKENS,
  UNLIMITED_ALLOWANCE_IN_BASE_UNITS,
} from "./constants/constants";

contract("TransferProxy", (accounts) => {
  const [owner, authorized, vault, other, unauthorized] = accounts;
  const TX_DEFAULTS = { from: owner, gas: 7000000 };

  let mockToken: StandardTokenMockContract;
  let transferProxy: TransferProxyContract;

  const deployToken = async (initialAccount: Address, from: Address = owner) => {
    mockToken = null;

    const truffleMockToken = await StandardTokenMock.new(
      initialAccount,
      STANDARD_INITIAL_TOKENS,
      "Mock Token",
      "MOCK",
      { from, gas: 7000000 },
    );

    const mockTokenWeb3Contract = web3.eth
      .contract(truffleMockToken.abi)
      .at(truffleMockToken.address);

    mockToken = new StandardTokenMockContract(
      mockTokenWeb3Contract,
      { from },
    );
  };

  const deployTransferProxy = async (vaultAddress: Address, from: Address = owner) => {
    const truffleTransferProxy = await TransferProxy.new(
      vaultAddress,
      { from, gas: 7000000 },
    );

    const transferProxyWeb3Contract = web3.eth
      .contract(truffleTransferProxy.abi)
      .at(truffleTransferProxy.address);

    transferProxy = new TransferProxyContract(
      transferProxyWeb3Contract,
      { from, gas: 7000000 },
    );
  };

  const approveTransfer = async (to: Address, from: Address = owner) => {
    await mockToken.approve.sendTransactionAsync(
      to,
      UNLIMITED_ALLOWANCE_IN_BASE_UNITS,
      { from },
    );
  };

  const addAuthorizedAddress = async (toAuthorize: Address, from: Address = owner) => {
    await transferProxy.addAuthorizedAddress.sendTransactionAsync(
      toAuthorize,
      { from },
    );
  };

  before(async () => {
    ABIDecoder.addABI(TransferProxy.abi);
  });

  after(async () => {
    ABIDecoder.removeABI(TransferProxy.abi);
  });

  describe("#transferToVault", async () => {
    // Setup parameters
    let approver: Address = owner;
    let authorizedContract: Address = authorized;
    let tokenOwner: Address = owner;

    beforeEach(async () => {
      await deployToken(tokenOwner);
      await deployTransferProxy(vault);
      await approveTransfer(transferProxy.address, approver);
      await addAuthorizedAddress(authorizedContract);
    });

    const amountToTransfer = STANDARD_INITIAL_TOKENS;

    async function subject(): Promise<string> {
      return transferProxy.transferToVault.sendTransactionAsync(
        owner,
        mockToken.address,
        amountToTransfer,
        { from: authorizedContract },
      );
    }

    it("should decerement the balance of the user", async () => {
      await subject();

      assertTokenBalance(mockToken, new BigNumber(0), owner);
    });

    it("should increment the balance of the vault", async () => {
      await subject();

      assertTokenBalance(mockToken, amountToTransfer, vault);
    });

    describe("when the owner of the token is not the user", async () => {
      before(async () => {
        tokenOwner = other;
      });

      it("should revert", async () => {
        await expectRevertError(subject());
      });
    });

    describe("when the caller is not authorized", async () => {
      before(async () => {
        authorizedContract = unauthorized;
      });

      it("should revert", async () => {
        await expectRevertError(subject());
      });
    });

    describe("when the token is not approved for transfer", async () => {
      before(async () => {
        approver = other;
      });

      it("should revert", async () => {
        await expectRevertError(subject());
      });
    });
  });
});
