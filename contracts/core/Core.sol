/*
    Copyright 2018 Set Labs Inc.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/

pragma solidity 0.4.24;

import { Ownable } from "zeppelin-solidity/contracts/ownership/Ownable.sol";
import { SafeMath } from "zeppelin-solidity/contracts/math/SafeMath.sol";
import { CoreInternal } from "./extensions/CoreInternal.sol";
import { CoreIssuance } from "./extensions/CoreIssuance.sol";
import { CoreState } from "./lib/CoreState.sol";
import { ISetFactory } from "./interfaces/ISetFactory.sol";
import { ITransferProxy } from "./interfaces/ITransferProxy.sol";
import { IVault } from "./interfaces/IVault.sol";


/**
 * @title Core
 * @author Set Protocol
 *
 * The Core contract acts as a coordinator handling issuing, redeeming, and
 * creating Sets, as well as all collateral flows throughout the system.
 */
contract Core is
    CoreIssuance,
    CoreInternal
{
    // Use SafeMath library for all uint256 arithmetic
    using SafeMath for uint256;

    /* ============ Constants ============ */

    string constant ADDRESSES_MISSING = "Addresses must not be empty.";
    string constant BATCH_INPUT_MISMATCH = "Addresses and quantities must be the same length.";
    string constant INVALID_FACTORY = "Factory is disabled or does not exist.";
    string constant QUANTITES_MISSING = "Quantities must not be empty.";

    /* ============ Events ============ */

    event SetTokenCreated(
        address indexed _setTokenAddress,
        address _factoryAddress,
        address[] _components,
        uint[] _units,
        uint _naturalUnit,
        string _name,
        string _symbol
    );

    /* ============ Modifiers ============ */

    modifier isValidFactory(address _factoryAddress) {
        require(
            state.validFactories[_factoryAddress],
            INVALID_FACTORY
        );
        _;
    }

    // Confirm that all inputs are valid for batch transactions
    modifier isValidBatchTransaction(address[] _tokenAddresses, uint[] _quantities) {
        // Confirm an empty _addresses array is not passed
        require(
            _tokenAddresses.length > 0,
            ADDRESSES_MISSING
        );

        // Confirm an empty _quantities array is not passed
        require(
            _quantities.length > 0,
            QUANTITES_MISSING
        );

        // Confirm there is one quantity for every token address
        require(
            _tokenAddresses.length == _quantities.length,
            BATCH_INPUT_MISMATCH
        );
        _;
    }

    /* ============ No Constructor ============ */

    /* ============ Public Functions ============ */

    /**
     * Deposit multiple tokens to the vault. Quantities should be in the
     * order of the addresses of the tokens being deposited.
     *
     * @param  _tokenAddresses   Array of the addresses of the ERC20 tokens
     * @param  _quantities       Array of the number of tokens to deposit
     */
    function batchDeposit(
        address[] _tokenAddresses,
        uint[] _quantities
    )
        public
        isValidBatchTransaction(_tokenAddresses, _quantities)
    {
        // For each token and quantity pair, run deposit function
        for (uint i = 0; i < _tokenAddresses.length; i++) {
            deposit(
                _tokenAddresses[i],
                _quantities[i]
            );
        }
    }

    /**
     * Withdraw multiple tokens from the vault. Quantities should be in the
     * order of the addresses of the tokens being withdrawn.
     *
     * @param  _tokenAddresses    Array of the addresses of the ERC20 tokens
     * @param  _quantities        Array of the number of tokens to withdraw
     */
    function batchWithdraw(
        address[] _tokenAddresses,
        uint[] _quantities
    )
        public
        isValidBatchTransaction(_tokenAddresses, _quantities)
    {
        // For each token and quantity pair, run withdraw function
        for (uint i = 0; i < _tokenAddresses.length; i++) {
            withdraw(
                _tokenAddresses[i],
                _quantities[i]
            );
        }
    }

    /**
     * Deposit any quantity of tokens into the vault.
     *
     * @param  _tokenAddress    The address of the ERC20 token
     * @param  _quantity        The number of tokens to deposit
     */
    function deposit(
        address _tokenAddress,
        uint _quantity
    )
        public
        isPositive(_quantity)
    {
        // Call TransferProxy contract to transfer user tokens to Vault
        ITransferProxy(state.transferProxyAddress).transferToVault(
            msg.sender,
            _tokenAddress,
            _quantity
        );

        // Call Vault contract to attribute deposited tokens to user
        IVault(state.vaultAddress).incrementTokenOwner(
            msg.sender,
            _tokenAddress,
            _quantity
        );
    }

    /**
     * Withdraw a quantity of tokens from the vault.
     *
     * @param  _tokenAddress    The address of the ERC20 token
     * @param  _quantity        The number of tokens to withdraw
     */
    function withdraw(
        address _tokenAddress,
        uint _quantity
    )
        public
    {
        // Call Vault contract to deattribute tokens to user
        IVault(state.vaultAddress).decrementTokenOwner(
            msg.sender,
            _tokenAddress,
            _quantity
        );

        // Call Vault to withdraw tokens from Vault to user
        IVault(state.vaultAddress).withdrawTo(
            _tokenAddress,
            msg.sender,
            _quantity
        );
    }

    /**
     * Deploys a new Set Token and adds it to the valid list of SetTokens
     *
     * @param  _factoryAddress  address       The address of the Factory to create from
     * @param  _components      address[]     The address of component tokens
     * @param  _units           uint[]        The units of each component token
     * @param  _naturalUnit     uint          The minimum unit to be issued or redeemed
     * @param  _name            string        The name of the new Set
     * @param  _symbol          string        The symbol of the new Set
     * @return setTokenAddress address        The address of the new Set
     */
    function create(
        address _factoryAddress,
        address[] _components,
        uint[] _units,
        uint _naturalUnit,
        string _name,
        string _symbol
    )
        public
        isValidFactory(_factoryAddress)
        returns (address)
    {
        // Create the Set
        address newSetTokenAddress = ISetFactory(_factoryAddress).create(
            _components,
            _units,
            _naturalUnit,
            _name,
            _symbol
        );

        // Add Set to the list of tracked Sets
        state.validSets[newSetTokenAddress] = true;

        emit SetTokenCreated(
            newSetTokenAddress,
            _factoryAddress,
            _components,
            _units,
            _naturalUnit,
            _name,
            _symbol
        );

        return newSetTokenAddress;
    }
}
