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

/**
 * @title ICoreIssuance
 * @author Set Protocol
 *
 * The ICoreIssuance Contract defines all the functions exposed in the CoreIssuance
 * extension.
 */

contract ICoreIssuance {

    /**
     * Issue
     *
     * @param  _setAddress   Address of set to issue
     * @param  _quantity     Quantity of set to issue
     */
    function issue(
        address _setAddress,
        uint _quantity
    )
        external;

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
        external;

    /**
     * Issue internally. Can define who to issue to.
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
        internal;
}