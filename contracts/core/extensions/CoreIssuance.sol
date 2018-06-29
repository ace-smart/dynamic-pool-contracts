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

import { SafeMath } from "zeppelin-solidity/contracts/math/SafeMath.sol";
import { CoreModifiers } from "../lib/CoreSharedModifiers.sol";
import { CoreState } from "../lib/CoreState.sol";
import { ISetToken } from "../interfaces/ISetToken.sol";
import { ITransferProxy } from "../interfaces/ITransferProxy.sol";
import { IVault } from "../interfaces/IVault.sol";


/**
 * @title Core Issuance
 * @author Set Protocol
 *
 * The CoreIssuance contract contains public set token operations
 */
contract CoreIssuance is
    CoreState,
    CoreModifiers
{
    // Use SafeMath library for all uint256 arithmetic
    using SafeMath for uint256;

    /* ============ Events ============ */

    event IssuanceComponentDeposited(
        address indexed _setToken,
        address indexed _component,
        uint _quantity
    );

    /* ============ Public Functions ============ */

    /**
     * Exchanges components for Set Tokens
     *
     * @param  _setAddress   Address of set to issue
     * @param  _quantity     Quantity of set to issue
     */
    function issue(
        address _setAddress,
        uint _quantity
    )
        external
        isValidSet(_setAddress)
        isPositiveQuantity(_quantity)
        isNaturalUnitMultiple(_quantity, _setAddress)
    {
        // Run issueInternal
        issueInternal(msg.sender, _setAddress, _quantity);
    }

    /**
     * Function to convert Set Tokens into underlying components
     *
     * @param _setAddress   The address of the Set token
     * @param _quantity     The number of tokens to redeem
     */
    function redeem(
        address _setAddress,
        uint _quantity
    )
        external
        isValidSet(_setAddress)
        isPositiveQuantity(_quantity)
        isNaturalUnitMultiple(_quantity, _setAddress)
    {
        // Burn the Set token (thereby decrementing the SetToken balance)
        ISetToken(_setAddress).burn(msg.sender, _quantity);

        uint naturalUnit = ISetToken(_setAddress).naturalUnit();

        // Transfer the underlying tokens to the corresponding token balances
        address[] memory components = ISetToken(_setAddress).getComponents();
        uint[] memory units = ISetToken(_setAddress).getUnits();
        for (uint16 i = 0; i < components.length; i++) {
            address currentComponent = components[i];
            uint currentUnit = units[i];

            uint tokenValue = calculateTransferValue(
                currentUnit,
                naturalUnit,
                _quantity
            );

            // Decrement the Set amount
            IVault(state.vaultAddress).decrementTokenOwner(
                _setAddress,
                currentComponent,
                tokenValue
            );

            // Increment the component amount
            IVault(state.vaultAddress).incrementTokenOwner(
                msg.sender,
                currentComponent,
                tokenValue
            );
        }
    }

    /* ============ Private Functions ============ */

    /**
     * Function to calculate the transfer value of a component given quantity of Set
     *
     * @param _componentUnits   The units of the component token
     * @param _naturalUnit      The natural unit of the Set token
     * @param _quantity         The number of tokens being redeem
     */
    function calculateTransferValue(
        uint _componentUnits,
        uint _naturalUnit,
        uint _quantity
    )
        pure
        internal
        returns(uint)
    {
        return _quantity.div(_naturalUnit).mul(_componentUnits);
    }

    /* ============ Internal Functions ============ */

    /**
     * Exchanges components for Set Tokens, accepting any owner
     *
     * @param _owner         Address to issue set to
     * @param  _setAddress   Address of set to issue
     * @param  _quantity     Quantity of set to issue
     */
    function issueInternal(
        address _owner,
        address _setAddress,
        uint _quantity
    )
        internal
    {
        // Fetch set token components
        address[] memory components = ISetToken(_setAddress).getComponents();
        // Fetch set token component units
        uint[] memory units = ISetToken(_setAddress).getUnits();

        // Inspect vault for required component quantity
        for (uint16 i = 0; i < components.length; i++) {
            address component = components[i];
            uint unit = units[i];

            // Calculate required component quantity
            uint requiredComponentQuantity = calculateTransferValue(
                unit,
                ISetToken(_setAddress).naturalUnit(),
                _quantity
            );

            // Fetch component quantity in vault
            uint vaultBalance = IVault(state.vaultAddress).getOwnerBalance(_owner, component);
            if (vaultBalance >= requiredComponentQuantity) {
                // Decrement vault balance by the required component quantity
                IVault(state.vaultAddress).decrementTokenOwner(
                    _owner,
                    component,
                    requiredComponentQuantity
                );
            } else {
                // User has less than required amount, decrement the vault by full balance
                if (vaultBalance > 0) {
                    IVault(state.vaultAddress).decrementTokenOwner(
                        _owner,
                        component,
                        vaultBalance
                    );
                }

                // Calculate remainder to deposit
                uint amountToDeposit = requiredComponentQuantity.sub(vaultBalance);

                // Transfer the remainder component quantity required to vault
                ITransferProxy(state.transferProxyAddress).transferToVault(
                    _owner,
                    component,
                    requiredComponentQuantity.sub(vaultBalance)
                );

                // Log transfer of component from issuer waller
                emit IssuanceComponentDeposited(
                    _setAddress,
                    component,
                    amountToDeposit
                );
            }

            // Increment the vault balance of the set token for the component
            IVault(state.vaultAddress).incrementTokenOwner(
                _setAddress,
                component,
                requiredComponentQuantity
            );
        }

        // Issue set token
        ISetToken(_setAddress).mint(_owner, _quantity);
    }
}
