import * as chai from "chai";
import * as _ from "lodash";
import * as ethUtil from "ethereumjs-util";

import * as ABIDecoder from "abi-decoder";
import { BigNumber } from "bignumber.js";

// Types
import { Address, Bytes32, Log, UInt } from "../../../../types/common.js";
import { ZeroExSignature, ZeroExOrderHeader, ZeroExOrder } from "../../../../types/zeroEx";

// Contract types
import { MockZeroExOrderDataHandlerLibraryContract } from "../../../../types/generated/mock_zero_ex_order_data_handler_library";

// Artifacts
const MockZeroExOrderDataHandlerLibrary = artifacts.require("MockZeroExOrderDataHandlerLibrary");

import {
  bufferZeroExOrder,
  createZeroExOrder,
  getZeroExOrderLengthFromBuffer,
  generateStandardZeroExOrderBytesArray,
} from "../../../utils/zeroExExchangeWrapper";

// Testing Set up
import { BigNumberSetup } from "../../../config/bigNumberSetup";
import ChaiSetup from "../../../config/chaiSetup";
BigNumberSetup.configure();
ChaiSetup.configure();
const { expect, assert } = chai;

import {
  DEFAULT_GAS,
} from "../../../utils/constants";
 
contract("MockZeroExOrderDataHandlerLibrary", (accounts) => {
  const [ownerAccount, takerAddress, feeRecipientAddress, senderAddress] = accounts;
  let zeroExExchangeWrapper: MockZeroExOrderDataHandlerLibraryContract;

  // Signature
  let signature: ZeroExSignature = "ABCDEFgiHIJKLMNOPQRSTUVWXYZ";

  // 0x Order Subject Data
  let fillAmount = new BigNumber(5);

  let makerAssetAmount = new BigNumber(1);
  let takerAssetAmount = new BigNumber(2);
  let makerFee = new BigNumber(3);
  let takerFee = new BigNumber(4);
  let expirationTimeSeconds = new BigNumber(5);
  let salt = new BigNumber(6);
  let makerAssetData = "ABC";
  let takerAssetData = "XYZ";

  let zeroExOrder: ZeroExOrder = createZeroExOrder(
    ownerAccount,
    takerAddress,
    feeRecipientAddress,
    senderAddress,
    makerAssetAmount,
    takerAssetAmount,
    makerFee,
    takerFee,
    expirationTimeSeconds,
    salt,
    makerAssetData,
    takerAssetData,
  );

  beforeEach(async () => {
    const zeroExExchangeWrapperInstance = await MockZeroExOrderDataHandlerLibrary.new(
      { from: ownerAccount, gas: DEFAULT_GAS },
    );

    zeroExExchangeWrapper = new MockZeroExOrderDataHandlerLibraryContract(
      web3.eth.contract(zeroExExchangeWrapperInstance.abi).at(zeroExExchangeWrapperInstance.address),
      { from: ownerAccount },
    );
  });

  describe("#parseOrderDataHeader", async () => {
    // Header Subject Data
    let signatureLength: UInt;
    let zeroExOrderLength: BigNumber;
    let makerAssetDataLength: BigNumber;
    let takerAssetDataLength: BigNumber;


    let subjectOrderData: Bytes32;

    beforeEach(async () => {
      subjectOrderData = generateStandardZeroExOrderBytesArray(
        zeroExOrder,
        signature,
        fillAmount,
      );

      const zeroExOrderBuffer = bufferZeroExOrder(zeroExOrder);
      zeroExOrderLength = getZeroExOrderLengthFromBuffer(zeroExOrderBuffer);

      signatureLength = new BigNumber(signature.length);
      makerAssetDataLength = new BigNumber(makerAssetData.length);
      takerAssetDataLength = new BigNumber(takerAssetData.length);
    });

    async function subject(): Promise<any> {
      return zeroExExchangeWrapper.parseOrderDataHeader.callAsync(subjectOrderData);
    }

    it("should correctly parse the order data header", async () => {
      const [sigLen, zeroExOrderLen, makerAssetDataLen, takerAssetDataLen ] = await subject();

      expect(sigLen).to.bignumber.equal(signatureLength);
      expect(zeroExOrderLen).to.bignumber.equal(zeroExOrderLength);
      expect(makerAssetDataLen).to.bignumber.equal(makerAssetDataLength);
      expect(takerAssetDataLen).to.bignumber.equal(takerAssetDataLength);
    });
  });

  describe("#parseFillAmount", async () => {
    let subjectOrderData: Bytes32;

    beforeEach(async () => {
      subjectOrderData = generateStandardZeroExOrderBytesArray(
        zeroExOrder,
        signature,
        fillAmount,
      );
    });

    async function subject(): Promise<any> {
      return zeroExExchangeWrapper.parseFillAmount.callAsync(subjectOrderData);
    }

    it("correctly parse the fill amount", async () => {
      const fillAmountResult = await subject();
      expect(fillAmountResult).to.be.bignumber.equal(fillAmount);
    });
  });

  describe("#parseSignature", async () => {
    let subjectOrderData: Bytes32;

    beforeEach(async () => {
      subjectOrderData = generateStandardZeroExOrderBytesArray(
        zeroExOrder,
        signature,
        fillAmount,
      );
    });

    async function subject(): Promise<any> {
      return zeroExExchangeWrapper.parseSignature.callAsync(subjectOrderData);
    }

    it("should correctly parse the signature", async () => {
      const signatureResult = await subject();
      expect(web3.toAscii(signatureResult)).to.equal(signature);
    });
  });

  describe("#parseZeroExOrderData", async () => {
    let subjectOrderData: Bytes32;

    beforeEach(async () => {
      subjectOrderData = generateStandardZeroExOrderBytesArray(
        zeroExOrder,
        signature,
        fillAmount,
      );
    });

    async function subject(): Promise<any> {
      return zeroExExchangeWrapper.parseZeroExOrderData.callAsync(subjectOrderData);
    }

    it("should correctly parse the zeroEx order", async () => {
      const [addresses, uints, makerAssetDataResult, takerAssetDataResult] = await subject();
      
      const [makerResult, takerResult, feeRecipientResult, senderResult] = addresses;
      const [
        makerAssetAmountResult,
        takerAssetAmountResult,
        makerFeeResult,
        takerFeeResult,
        expirationResult,
        saltResult,
      ] = uints;

      expect(ownerAccount).to.equal(makerResult);
      expect(takerAddress).to.equal(takerResult);
      expect(feeRecipientAddress).to.equal(feeRecipientResult);
      expect(senderAddress).to.equal(senderResult);
      expect(makerAssetAmount).to.be.bignumber.equal(makerAssetAmountResult);
      expect(takerAssetAmount).to.be.bignumber.equal(takerAssetAmountResult);
      expect(makerFee).to.be.bignumber.equal(makerFeeResult);
      expect(takerFee).to.be.bignumber.equal(takerFeeResult);
      expect(expirationTimeSeconds).to.be.bignumber.equal(expirationResult);
      expect(salt).to.be.bignumber.equal(saltResult);
      expect(makerAssetData).to.equal(web3.toAscii(makerAssetDataResult));
      expect(takerAssetData).to.equal(web3.toAscii(takerAssetDataResult));
    });
  });
});
