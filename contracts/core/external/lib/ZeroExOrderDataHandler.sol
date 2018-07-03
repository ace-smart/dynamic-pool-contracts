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
pragma experimental "ABIEncoderV2";

import { SafeMath } from "zeppelin-solidity/contracts/math/SafeMath.sol";
import { LibBytes } from "../../../external/LibBytes.sol";


/**
 * @title ZeroExOrderDataHandler
 * @author Set Protocol
 *
 * This library contains functions and structs to assist with parsing exchange orders data
 */
library ZeroExOrderDataHandler {
    using SafeMath for uint256;
    using LibBytes for bytes;

    // ============ Structs ============

    struct Order {
        address makerAddress;           // Address that created the order.
        address takerAddress;           // Address that is allowed to fill the order.
        address feeRecipientAddress;    // Address that will recieve fees when order is filled.
        address senderAddress;          // Address that is allowed to call Exchange contract.
        uint256 makerAssetAmount;       // Amount of makerAsset being offered by maker.
        uint256 takerAssetAmount;       // Amount of takerAsset being bid on by maker.
        uint256 makerFee;               // Amount of ZRX paid to feeRecipient by maker
        uint256 takerFee;               // Amount of ZRX paid to feeRecipient by taker
        uint256 expirationTimeSeconds;  // Timestamp in seconds at which order expires.
        uint256 salt;                   // Number to facilitate uniqueness of the order's hash.
        bytes makerAssetData;           // Encoded data when transferring makerAsset.
        bytes takerAssetData;           // Encoded data when transferring takerAsset.
    }

    struct ZeroExHeader {
        uint256 signatureLength;
        uint256 orderLength;
        uint256 makerAssetDataLength;
        uint256 takerAssetDataLength;
    }

    // ============ Internal Functions ============

    // We construct the following to allow calling fillOrder on ZeroEx V2 Exchange
    // The layout of this orderData is in the table below.
    // 
    // | Section | Data                  | Offset              | Length          | Contents                      |
    // |---------|-----------------------|---------------------|-----------------|-------------------------------|
    // | Header  | signatureLength       | 0                   | 32              | Num Bytes of 0x Signature     |
    // |         | orderLength           | 32                  | 32              | Num Bytes of 0x Order         |
    // |         | makerAssetDataLength  | 64                  | 32              | Num Bytes of maker asset data |
    // |         | takerAssetDataLength  | 96                  | 32              | Num Bytes of taker asset data |
    // | Body    | fillAmount            | 128                 | 32              | taker asset fill amouint      |
    // |         | signature             | 160                 | signatureLength | signature in bytes            |
    // |         | order                 | 160+signatureLength | orderLength     | ZeroEx Order                  |

    /*
     * Parses the header of the orderData
     * Can only be called by authorized contracts.
     *
     * @param  _orderData   
     * @return ZeroExHeader
     */
    function parseOrderHeader(bytes _orderData)
        internal
        pure
        returns (ZeroExHeader)
    {
        ZeroExHeader memory header;

        uint256 orderDataAddr = _orderData.contentAddress();

        assembly {
            mstore(header,          mload(orderDataAddr)) // signatureLength
            mstore(add(header, 32), mload(add(orderDataAddr, 32))) // orderLength
            mstore(add(header, 64), mload(add(orderDataAddr, 64))) // makerAssetDataLength
            mstore(add(header, 96), mload(add(orderDataAddr, 96))) // takerAssetDataLength
        }

        return header;
    }

    function parseFillAmount(bytes _orderData)
        internal
        pure
        returns (uint256)
    {
        uint256 orderDataAddr = _orderData.contentAddress();
        uint256 fillAmount;

        assembly {
            fillAmount := mload(add(orderDataAddr, 128))
        }

        return fillAmount;
    }

    function sliceSignature(bytes _orderData, uint _signatureLength)
        internal
        pure
        returns (bytes)
    {
        bytes memory signature = _orderData.slice(160, _signatureLength.add(160));
        return signature;
    }

    function sliceZeroExOrder(bytes _orderData, uint _signatureLength, uint _orderLength)
        internal
        pure
        returns (bytes)
    {
        uint256 orderDataAddr = _orderData.contentAddress();
        uint256 orderStartAddress = orderDataAddr.add(_signatureLength);
        bytes memory order = _orderData.slice(
            orderStartAddress,
            orderStartAddress.add(_orderLength)
        );
        return order;
    }

    function parseZeroExOrder(
        bytes _zeroExOrder,
        uint _makerAssetDataLength,
        uint _takerAssetDataLength
    )
        internal
        pure
        returns (Order memory)
    {
        Order memory order;
        uint256 orderDataAddr = _zeroExOrder.contentAddress();

        // | Data                       | Location | Length |
        // |----------------------------|----------|--------|
        // | maker                      | 0        |        |
        // | taker                      | 32       |        |
        // | feeRecipient               | 64       |        |
        // | senderAddress              | 96       |        |
        // | makerAssetAmount           | 128      |        |
        // | takerAssetAmount           | 160      |        |
        // | makerFee                   | 192      |        |
        // | takerFee                   | 224      |        |
        // | expirationUnixTimeStampSec | 256      |        |
        // | salt                       | 288      |        |
        // | makerAssetData             | 320      | **     |
        // | takerAssetData             | 320 + ** | ***    |
        // ** - Maker Asset Data Length
        // *** - Taker Asset Data Length
        assembly {
            mstore(order,           mload(orderDataAddr))  // maker
            mstore(add(order, 32),  mload(add(orderDataAddr, 32)))  // taker
            mstore(add(order, 64),  mload(add(orderDataAddr, 64)))  // feeRecipient
            mstore(add(order, 96),  mload(add(orderDataAddr, 96)))  // senderAddress
            mstore(add(order, 128),  mload(add(orderDataAddr, 128))) // makerAssetAmount
            mstore(add(order, 160), mload(add(orderDataAddr, 160))) // takerAssetAmount
            mstore(add(order, 192), mload(add(orderDataAddr, 192))) // makerFee
            mstore(add(order, 224), mload(add(orderDataAddr, 224))) // takerFee
            mstore(add(order, 256), mload(add(orderDataAddr, 256))) // expirationUnixTimestampSec
            mstore(add(order, 288), mload(add(orderDataAddr, 288))) // salt
        }

        order.makerAssetData = _zeroExOrder.slice(320, _makerAssetDataLength.add(320));
        order.takerAssetData = _zeroExOrder.slice(
            _makerAssetDataLength.add(320),
            _makerAssetDataLength.add(320).add(_takerAssetDataLength)
        );

        return order;       
    }

    function parseZeroExOrderData(bytes _orderData)
        internal
        pure
        returns(Order memory)
    {
        ZeroExHeader memory header = parseOrderHeader(_orderData);

        Order memory order = parseZeroExOrder(
            sliceZeroExOrder(_orderData, header.signatureLength, header.orderLength),
            header.makerAssetDataLength,
            header.takerAssetDataLength
        );

        return order;
    }
}
