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

pragma solidity 0.4.25;
pragma experimental "ABIEncoderV2";

import { LibBytes } from "../../external/0x/LibBytes.sol";
import { SafeMath } from "openzeppelin-solidity/contracts/math/SafeMath.sol";


/**
 * @title ExchangeHandler
 * @author Set Protocol
 *
 * This library contains functions and structs to assist with parsing exchange orders data
 */
library ExchangeHandler {
    using LibBytes for bytes;
    using SafeMath for uint256;

    // ============ Structs ============

    struct ExchangeHeader {
        uint8 exchange;
        uint8 orderCount;
        uint256 makerTokenAmount;
        uint256 orderDataBytesLength;
    }

    // ============ Internal Functions ============

    /**
     * Function to convert bytes into ExchangeHeader
     *
     * @param _headerData      Bytes representing the order body information
     * @return ExchangeHeader  Struct containing data for a batch of exchange orders
     */
    function parseExchangeHeader(
        bytes _headerData,
        uint256 _offset
    )
        internal
        pure
        returns (ExchangeHeader memory)
    {
        ExchangeHeader memory header;

        uint256 headerDataStart = _headerData.contentAddress().add(_offset);

        assembly {
            mstore(header,          mload(headerDataStart))            // exchange
            mstore(add(header, 32), mload(add(headerDataStart, 32)))   // orderCount
            mstore(add(header, 64), mload(add(headerDataStart, 64)))   // makerTokenAmount
            mstore(add(header, 96), mload(add(headerDataStart, 96)))   // orderDataBytesLength
        }

        return header;
    }
}
