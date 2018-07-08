export const ZeroExOrderDataHandler = 
{
  "contractName": "ZeroExOrderDataHandler",
  "abi": [],
  "bytecode": "0x605a602c600b82828239805160001a60731460008114601c57601e565bfe5b5030600052607381538281f30073000000000000000000000000000000000000000030146080604052600080fd00a265627a7a72305820a99dc39582cf9265bb98e99e3f5bcb62e2fd883171429d5697d8f7278bec3f986c6578706572696d656e74616cf50037",
  "deployedBytecode": "0x73000000000000000000000000000000000000000030146080604052600080fd00a265627a7a72305820a99dc39582cf9265bb98e99e3f5bcb62e2fd883171429d5697d8f7278bec3f986c6578706572696d656e74616cf50037",
  "sourceMap": "1031:7122:7:-;;132:2:-1;166:7;155:9;146:7;137:37;252:7;246:14;243:1;238:23;232:4;229:33;270:1;265:20;;;;222:63;;265:20;274:9;222:63;;298:9;295:1;288:20;328:4;319:7;311:22;352:7;343;336:24",
  "deployedSourceMap": "1031:7122:7:-;;;;;;;;",
  "source": "/*\n    Copyright 2018 Set Labs Inc.\n\n    Licensed under the Apache License, Version 2.0 (the \"License\");\n    you may not use this file except in compliance with the License.\n    You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n    Unless required by applicable law or agreed to in writing, software\n    distributed under the License is distributed on an \"AS IS\" BASIS,\n    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n    See the License for the specific language governing permissions and\n    limitations under the License.\n*/\n\npragma solidity 0.4.24;\npragma experimental \"ABIEncoderV2\";\n\nimport { SafeMath } from \"zeppelin-solidity/contracts/math/SafeMath.sol\";\nimport { LibBytes } from \"../../../external/0x/LibBytes.sol\";\nimport { LibOrder } from \"../../../external/0x/Exchange/libs/LibOrder.sol\";\n\n\n/**\n * @title ZeroExOrderDataHandler\n * @author Set Protocol\n *\n * This library contains functions and structs to assist with parsing exchange orders data\n */\nlibrary ZeroExOrderDataHandler {\n    using SafeMath for uint256;\n    using LibBytes for bytes;\n\n    // ============ Constants ============\n\n    bytes4 constant ERC20_SELECTOR = bytes4(keccak256(\"ERC20Token(address)\"));\n\n    string constant INVALID_TOKEN_ADDRESS = 'Address is not for ERC20 asset.';\n\n    // ============ Structs ============\n\n    struct ZeroExHeader {\n        uint256 signatureLength;\n        uint256 orderLength;\n        uint256 makerAssetDataLength;\n        uint256 takerAssetDataLength;\n    }\n\n    struct AssetDataAddresses {\n        address makerTokenAddress;\n        address takerTokenAddress;\n    }\n\n    // ============ Internal Functions ============\n\n    // We construct the following to allow calling fillOrder on ZeroEx V2 Exchange\n    // The layout of this orderData is in the table below.\n    // \n    // | Section | Data                  | Offset              | Length          | Contents                      |\n    // |---------|-----------------------|---------------------|-----------------|-------------------------------|\n    // | Header  | signatureLength       | 0                   | 32              | Num Bytes of 0x Signature     |\n    // |         | orderLength           | 32                  | 32              | Num Bytes of 0x Order         |\n    // |         | makerAssetDataLength  | 64                  | 32              | Num Bytes of maker asset data |\n    // |         | takerAssetDataLength  | 96                  | 32              | Num Bytes of taker asset data |\n    // | Body    | fillAmount            | 128                 | 32              | taker asset fill amouint      |\n    // |         | signature             | 160                 | signatureLength | signature in bytes            |\n    // |         | order                 | 160+signatureLength | orderLength     | ZeroEx Order                  |\n\n    /*\n     * Parses the header of the orderData\n     * Can only be called by authorized contracts.\n     *\n     * @param  _orderData   \n     * @return ZeroExHeader\n     */\n    function parseOrderHeader(bytes _orderData)\n        internal\n        pure\n        returns (ZeroExHeader)\n    {\n        ZeroExHeader memory header;\n\n        uint256 orderDataAddr = _orderData.contentAddress();\n\n        assembly {\n            mstore(header,          mload(orderDataAddr)) // signatureLength\n            mstore(add(header, 32), mload(add(orderDataAddr, 32))) // orderLength\n            mstore(add(header, 64), mload(add(orderDataAddr, 64))) // makerAssetDataLength\n            mstore(add(header, 96), mload(add(orderDataAddr, 96))) // takerAssetDataLength\n        }\n\n        return header;\n    }\n\n    function parseFillAmount(bytes _orderData)\n        internal\n        pure\n        returns (uint256)\n    {\n        uint256 orderDataAddr = _orderData.contentAddress();\n        uint256 fillAmount;\n\n        assembly {\n            fillAmount := mload(add(orderDataAddr, 128))\n        }\n\n        return fillAmount;\n    }\n\n    function sliceSignature(bytes _orderData)\n        internal\n        pure\n        returns (bytes)\n    {\n        uint256 orderDataAddr = _orderData.contentAddress();\n        uint256 signatureLength;\n        assembly {\n            signatureLength := mload(orderDataAddr)\n        }\n\n        bytes memory signature = _orderData.slice(160, signatureLength.add(160));\n        return signature;\n    }\n\n    function sliceZeroExOrder(bytes _orderData, uint _signatureLength, uint _orderLength)\n        internal\n        pure\n        returns (bytes)\n    {\n        uint256 orderDataAddr = _orderData.contentAddress();\n        uint256 orderStartAddress = orderDataAddr.add(_signatureLength);\n        bytes memory order = _orderData.slice(\n            orderStartAddress,\n            orderStartAddress.add(_orderLength)\n        );\n        return order;\n    }\n\n    function constructZeroExOrder(\n        bytes _zeroExOrder,\n        uint _makerAssetDataLength,\n        uint _takerAssetDataLength\n    )\n        internal\n        pure\n        returns (LibOrder.Order memory)\n    {\n        LibOrder.Order memory order;\n        uint256 orderDataAddr = _zeroExOrder.contentAddress();\n\n        // | Data                       | Location | Length |\n        // |----------------------------|----------|--------|\n        // | maker                      | 0        |        |\n        // | taker                      | 32       |        |\n        // | feeRecipient               | 64       |        |\n        // | senderAddress              | 96       |        |\n        // | makerAssetAmount           | 128      |        |\n        // | takerAssetAmount           | 160      |        |\n        // | makerFee                   | 192      |        |\n        // | takerFee                   | 224      |        |\n        // | expirationUnixTimeStampSec | 256      |        |\n        // | salt                       | 288      |        |\n        // | makerAssetData             | 320      | **     |\n        // | takerAssetData             | 320 + ** | ***    |\n        // ** - Maker Asset Data Length\n        // *** - Taker Asset Data Length\n        assembly {\n            mstore(order,           mload(orderDataAddr))           // maker\n            mstore(add(order, 32),  mload(add(orderDataAddr, 32)))  // taker\n            mstore(add(order, 64),  mload(add(orderDataAddr, 64)))  // feeRecipient\n            mstore(add(order, 96),  mload(add(orderDataAddr, 96)))  // senderAddress\n            mstore(add(order, 128), mload(add(orderDataAddr, 128))) // makerAssetAmount\n            mstore(add(order, 160), mload(add(orderDataAddr, 160))) // takerAssetAmount\n            mstore(add(order, 192), mload(add(orderDataAddr, 192))) // makerFee\n            mstore(add(order, 224), mload(add(orderDataAddr, 224))) // takerFee\n            mstore(add(order, 256), mload(add(orderDataAddr, 256))) // expirationUnixTimestampSec\n            mstore(add(order, 288), mload(add(orderDataAddr, 288))) // salt\n        }\n\n        order.makerAssetData = _zeroExOrder.slice(320, _makerAssetDataLength.add(320));\n        order.takerAssetData = _zeroExOrder.slice(\n            _makerAssetDataLength.add(320),\n            _makerAssetDataLength.add(320).add(_takerAssetDataLength)\n        );\n\n        return order;       \n    }\n\n    function parseZeroExOrder(bytes _orderData)\n        internal\n        pure\n        returns(LibOrder.Order memory)\n    {\n        ZeroExHeader memory header = parseOrderHeader(_orderData);\n\n        LibOrder.Order memory order = constructZeroExOrder(\n            sliceZeroExOrder(_orderData, header.signatureLength, header.orderLength),\n            header.makerAssetDataLength,\n            header.takerAssetDataLength\n        );\n\n        return order;\n    }\n\n    function parseERC20TokenAddress(bytes _assetData)\n        internal\n        pure\n        returns(address)\n    {\n        // Ensure that the asset is ERC20\n        bytes4 assetType = _assetData.readBytes4(0);\n        require(\n            ERC20_SELECTOR == assetType,\n            INVALID_TOKEN_ADDRESS\n        );\n\n        address tokenAddress = address(_assetData.readBytes32(4));\n\n        return tokenAddress;\n    }\n}\n",
  "sourcePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/core/exchange-wrappers/lib/ZeroExOrderDataHandler.sol",
  "ast": {
    "absolutePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/core/exchange-wrappers/lib/ZeroExOrderDataHandler.sol",
    "exportedSymbols": {
      "ZeroExOrderDataHandler": [
        1288
      ]
    },
    "id": 1289,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1016,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "597:23:7"
      },
      {
        "id": 1017,
        "literals": [
          "experimental",
          "ABIEncoderV2"
        ],
        "nodeType": "PragmaDirective",
        "src": "621:35:7"
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/math/SafeMath.sol",
        "file": "zeppelin-solidity/contracts/math/SafeMath.sol",
        "id": 1019,
        "nodeType": "ImportDirective",
        "scope": 1289,
        "sourceUnit": 5804,
        "src": "658:73:7",
        "symbolAliases": [
          {
            "foreign": 1018,
            "local": null
          }
        ],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/external/0x/LibBytes.sol",
        "file": "../../../external/0x/LibBytes.sol",
        "id": 1021,
        "nodeType": "ImportDirective",
        "scope": 1289,
        "sourceUnit": 4144,
        "src": "732:61:7",
        "symbolAliases": [
          {
            "foreign": 1020,
            "local": null
          }
        ],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/external/0x/Exchange/libs/LibOrder.sol",
        "file": "../../../external/0x/Exchange/libs/LibOrder.sol",
        "id": 1023,
        "nodeType": "ImportDirective",
        "scope": 1289,
        "sourceUnit": 3995,
        "src": "794:75:7",
        "symbolAliases": [
          {
            "foreign": 1022,
            "local": null
          }
        ],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": "@title ZeroExOrderDataHandler\n@author Set Protocol\n * This library contains functions and structs to assist with parsing exchange orders data",
        "fullyImplemented": true,
        "id": 1288,
        "linearizedBaseContracts": [
          1288
        ],
        "name": "ZeroExOrderDataHandler",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 1026,
            "libraryName": {
              "contractScope": null,
              "id": 1024,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 5803,
              "src": "1074:8:7",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$5803",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "1068:27:7",
            "typeName": {
              "id": 1025,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1087:7:7",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "id": 1029,
            "libraryName": {
              "contractScope": null,
              "id": 1027,
              "name": "LibBytes",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 4143,
              "src": "1106:8:7",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_LibBytes_$4143",
                "typeString": "library LibBytes"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "1100:25:7",
            "typeName": {
              "id": 1028,
              "name": "bytes",
              "nodeType": "ElementaryTypeName",
              "src": "1119:5:7",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes_storage_ptr",
                "typeString": "bytes"
              }
            }
          },
          {
            "constant": true,
            "id": 1036,
            "name": "ERC20_SELECTOR",
            "nodeType": "VariableDeclaration",
            "scope": 1288,
            "src": "1175:73:7",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes4",
              "typeString": "bytes4"
            },
            "typeName": {
              "id": 1030,
              "name": "bytes4",
              "nodeType": "ElementaryTypeName",
              "src": "1175:6:7",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes4",
                "typeString": "bytes4"
              }
            },
            "value": {
              "argumentTypes": null,
              "arguments": [
                {
                  "argumentTypes": null,
                  "arguments": [
                    {
                      "argumentTypes": null,
                      "hexValue": "4552433230546f6b656e286164647265737329",
                      "id": 1033,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "string",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1225:21:7",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_stringliteral_f47261b06eedbfce68afd46d0f3c27c60b03faad319eaf33103611cf8f6456ad",
                        "typeString": "literal_string \"ERC20Token(address)\""
                      },
                      "value": "ERC20Token(address)"
                    }
                  ],
                  "expression": {
                    "argumentTypes": [
                      {
                        "typeIdentifier": "t_stringliteral_f47261b06eedbfce68afd46d0f3c27c60b03faad319eaf33103611cf8f6456ad",
                        "typeString": "literal_string \"ERC20Token(address)\""
                      }
                    ],
                    "id": 1032,
                    "name": "keccak256",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 6350,
                    "src": "1215:9:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                      "typeString": "function () pure returns (bytes32)"
                    }
                  },
                  "id": 1034,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "functionCall",
                  "lValueRequested": false,
                  "names": [],
                  "nodeType": "FunctionCall",
                  "src": "1215:32:7",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  }
                }
              ],
              "expression": {
                "argumentTypes": [
                  {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  }
                ],
                "id": 1031,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "lValueRequested": false,
                "nodeType": "ElementaryTypeNameExpression",
                "src": "1208:6:7",
                "typeDescriptions": {
                  "typeIdentifier": "t_type$_t_bytes4_$",
                  "typeString": "type(bytes4)"
                },
                "typeName": "bytes4"
              },
              "id": 1035,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "typeConversion",
              "lValueRequested": false,
              "names": [],
              "nodeType": "FunctionCall",
              "src": "1208:40:7",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes4",
                "typeString": "bytes4"
              }
            },
            "visibility": "internal"
          },
          {
            "constant": true,
            "id": 1039,
            "name": "INVALID_TOKEN_ADDRESS",
            "nodeType": "VariableDeclaration",
            "scope": 1288,
            "src": "1255:73:7",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory",
              "typeString": "string"
            },
            "typeName": {
              "id": 1037,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "1255:6:7",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "41646472657373206973206e6f7420666f722045524332302061737365742e",
              "id": 1038,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1295:33:7",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_86bd15f736bfc35ffa26d5b270c6a610858a1cd544a317069255ba4a0f5dda71",
                "typeString": "literal_string \"Address is not for ERC20 asset.\""
              },
              "value": "Address is not for ERC20 asset."
            },
            "visibility": "internal"
          },
          {
            "canonicalName": "ZeroExOrderDataHandler.ZeroExHeader",
            "id": 1048,
            "members": [
              {
                "constant": false,
                "id": 1041,
                "name": "signatureLength",
                "nodeType": "VariableDeclaration",
                "scope": 1048,
                "src": "1407:23:7",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 1040,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1407:7:7",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 1043,
                "name": "orderLength",
                "nodeType": "VariableDeclaration",
                "scope": 1048,
                "src": "1440:19:7",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 1042,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1440:7:7",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 1045,
                "name": "makerAssetDataLength",
                "nodeType": "VariableDeclaration",
                "scope": 1048,
                "src": "1469:28:7",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 1044,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1469:7:7",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 1047,
                "name": "takerAssetDataLength",
                "nodeType": "VariableDeclaration",
                "scope": 1048,
                "src": "1507:28:7",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 1046,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1507:7:7",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "ZeroExHeader",
            "nodeType": "StructDefinition",
            "scope": 1288,
            "src": "1377:165:7",
            "visibility": "public"
          },
          {
            "canonicalName": "ZeroExOrderDataHandler.AssetDataAddresses",
            "id": 1053,
            "members": [
              {
                "constant": false,
                "id": 1050,
                "name": "makerTokenAddress",
                "nodeType": "VariableDeclaration",
                "scope": 1053,
                "src": "1584:25:7",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 1049,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "1584:7:7",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 1052,
                "name": "takerTokenAddress",
                "nodeType": "VariableDeclaration",
                "scope": 1053,
                "src": "1619:25:7",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 1051,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "1619:7:7",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "AssetDataAddresses",
            "nodeType": "StructDefinition",
            "scope": 1288,
            "src": "1548:103:7",
            "visibility": "public"
          },
          {
            "body": {
              "id": 1072,
              "nodeType": "Block",
              "src": "3177:500:7",
              "statements": [
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1061,
                      "name": "header",
                      "nodeType": "VariableDeclaration",
                      "scope": 1073,
                      "src": "3187:26:7",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_ZeroExHeader_$1048_memory_ptr",
                        "typeString": "struct ZeroExOrderDataHandler.ZeroExHeader"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 1060,
                        "name": "ZeroExHeader",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 1048,
                        "src": "3187:12:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ZeroExHeader_$1048_storage_ptr",
                          "typeString": "struct ZeroExOrderDataHandler.ZeroExHeader"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1062,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3187:26:7"
                },
                {
                  "assignments": [
                    1064
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1064,
                      "name": "orderDataAddr",
                      "nodeType": "VariableDeclaration",
                      "scope": 1073,
                      "src": "3224:21:7",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1063,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3224:7:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1068,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "argumentTypes": null,
                        "id": 1065,
                        "name": "_orderData",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1055,
                        "src": "3248:10:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "id": 1066,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "contentAddress",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4010,
                      "src": "3248:25:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$_t_uint256_$bound_to$_t_bytes_memory_ptr_$",
                        "typeString": "function (bytes memory) pure returns (uint256)"
                      }
                    },
                    "id": 1067,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3248:27:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3224:51:7"
                },
                {
                  "externalReferences": [
                    {
                      "header": {
                        "declaration": 1061,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "3316:6:7",
                        "valueSize": 1
                      }
                    },
                    {
                      "orderDataAddr": {
                        "declaration": 1064,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "3339:13:7",
                        "valueSize": 1
                      }
                    },
                    {
                      "header": {
                        "declaration": 1061,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "3397:6:7",
                        "valueSize": 1
                      }
                    },
                    {
                      "orderDataAddr": {
                        "declaration": 1064,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "3420:13:7",
                        "valueSize": 1
                      }
                    },
                    {
                      "header": {
                        "declaration": 1061,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "3479:6:7",
                        "valueSize": 1
                      }
                    },
                    {
                      "orderDataAddr": {
                        "declaration": 1064,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "3502:13:7",
                        "valueSize": 1
                      }
                    },
                    {
                      "header": {
                        "declaration": 1061,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "3570:6:7",
                        "valueSize": 1
                      }
                    },
                    {
                      "orderDataAddr": {
                        "declaration": 1064,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "3593:13:7",
                        "valueSize": 1
                      }
                    }
                  ],
                  "id": 1069,
                  "nodeType": "InlineAssembly",
                  "operations": "{\n    mstore(header, mload(orderDataAddr))\n    mstore(add(header, 32), mload(add(orderDataAddr, 32)))\n    mstore(add(header, 64), mload(add(orderDataAddr, 64)))\n    mstore(add(header, 96), mload(add(orderDataAddr, 96)))\n}",
                  "src": "3286:377:7"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1070,
                    "name": "header",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1061,
                    "src": "3664:6:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_ZeroExHeader_$1048_memory_ptr",
                      "typeString": "struct ZeroExOrderDataHandler.ZeroExHeader memory"
                    }
                  },
                  "functionReturnParameters": 1059,
                  "id": 1071,
                  "nodeType": "Return",
                  "src": "3657:13:7"
                }
              ]
            },
            "documentation": null,
            "id": 1073,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "parseOrderHeader",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1056,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1055,
                  "name": "_orderData",
                  "nodeType": "VariableDeclaration",
                  "scope": 1073,
                  "src": "3094:16:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1054,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "3094:5:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3093:18:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 1059,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1058,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1073,
                  "src": "3159:12:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_ZeroExHeader_$1048_memory_ptr",
                    "typeString": "struct ZeroExOrderDataHandler.ZeroExHeader"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 1057,
                    "name": "ZeroExHeader",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 1048,
                    "src": "3159:12:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_ZeroExHeader_$1048_storage_ptr",
                      "typeString": "struct ZeroExOrderDataHandler.ZeroExHeader"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3158:14:7"
            },
            "scope": 1288,
            "src": "3068:609:7",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1092,
              "nodeType": "Block",
              "src": "3786:211:7",
              "statements": [
                {
                  "assignments": [
                    1081
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1081,
                      "name": "orderDataAddr",
                      "nodeType": "VariableDeclaration",
                      "scope": 1093,
                      "src": "3796:21:7",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1080,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3796:7:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1085,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "argumentTypes": null,
                        "id": 1082,
                        "name": "_orderData",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1075,
                        "src": "3820:10:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "id": 1083,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "contentAddress",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4010,
                      "src": "3820:25:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$_t_uint256_$bound_to$_t_bytes_memory_ptr_$",
                        "typeString": "function (bytes memory) pure returns (uint256)"
                      }
                    },
                    "id": 1084,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3820:27:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3796:51:7"
                },
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1087,
                      "name": "fillAmount",
                      "nodeType": "VariableDeclaration",
                      "scope": 1093,
                      "src": "3857:18:7",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1086,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3857:7:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1088,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3857:18:7"
                },
                {
                  "externalReferences": [
                    {
                      "fillAmount": {
                        "declaration": 1087,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "3909:10:7",
                        "valueSize": 1
                      }
                    },
                    {
                      "orderDataAddr": {
                        "declaration": 1081,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "3933:13:7",
                        "valueSize": 1
                      }
                    }
                  ],
                  "id": 1089,
                  "nodeType": "InlineAssembly",
                  "operations": "{\n    fillAmount := mload(add(orderDataAddr, 128))\n}",
                  "src": "3886:93:7"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1090,
                    "name": "fillAmount",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1087,
                    "src": "3980:10:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 1079,
                  "id": 1091,
                  "nodeType": "Return",
                  "src": "3973:17:7"
                }
              ]
            },
            "documentation": null,
            "id": 1093,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "parseFillAmount",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1076,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1075,
                  "name": "_orderData",
                  "nodeType": "VariableDeclaration",
                  "scope": 1093,
                  "src": "3708:16:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1074,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "3708:5:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3707:18:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 1079,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1078,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1093,
                  "src": "3773:7:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1077,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3773:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3772:9:7"
            },
            "scope": 1288,
            "src": "3683:314:7",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1123,
              "nodeType": "Block",
              "src": "4103:291:7",
              "statements": [
                {
                  "assignments": [
                    1101
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1101,
                      "name": "orderDataAddr",
                      "nodeType": "VariableDeclaration",
                      "scope": 1124,
                      "src": "4113:21:7",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1100,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4113:7:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1105,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "argumentTypes": null,
                        "id": 1102,
                        "name": "_orderData",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1095,
                        "src": "4137:10:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "id": 1103,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "contentAddress",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4010,
                      "src": "4137:25:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$_t_uint256_$bound_to$_t_bytes_memory_ptr_$",
                        "typeString": "function (bytes memory) pure returns (uint256)"
                      }
                    },
                    "id": 1104,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4137:27:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4113:51:7"
                },
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1107,
                      "name": "signatureLength",
                      "nodeType": "VariableDeclaration",
                      "scope": 1124,
                      "src": "4174:23:7",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1106,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4174:7:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1108,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4174:23:7"
                },
                {
                  "externalReferences": [
                    {
                      "signatureLength": {
                        "declaration": 1107,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "4230:15:7",
                        "valueSize": 1
                      }
                    },
                    {
                      "orderDataAddr": {
                        "declaration": 1101,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "4255:13:7",
                        "valueSize": 1
                      }
                    }
                  ],
                  "id": 1109,
                  "nodeType": "InlineAssembly",
                  "operations": "{\n    signatureLength := mload(orderDataAddr)\n}",
                  "src": "4207:87:7"
                },
                {
                  "assignments": [
                    1111
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1111,
                      "name": "signature",
                      "nodeType": "VariableDeclaration",
                      "scope": 1124,
                      "src": "4289:22:7",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 1110,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "4289:5:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1120,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "313630",
                        "id": 1114,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4331:3:7",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_160_by_1",
                          "typeString": "int_const 160"
                        },
                        "value": "160"
                      },
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "hexValue": "313630",
                            "id": 1117,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "4356:3:7",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_160_by_1",
                              "typeString": "int_const 160"
                            },
                            "value": "160"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_rational_160_by_1",
                              "typeString": "int_const 160"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 1115,
                            "name": "signatureLength",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1107,
                            "src": "4336:15:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 1116,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "add",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 5802,
                          "src": "4336:19:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 1118,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4336:24:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_rational_160_by_1",
                          "typeString": "int_const 160"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 1112,
                        "name": "_orderData",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1095,
                        "src": "4314:10:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "id": 1113,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "slice",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4142,
                      "src": "4314:16:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$_t_uint256_$_t_uint256_$returns$_t_bytes_memory_ptr_$bound_to$_t_bytes_memory_ptr_$",
                        "typeString": "function (bytes memory,uint256,uint256) pure returns (bytes memory)"
                      }
                    },
                    "id": 1119,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4314:47:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4289:72:7"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1121,
                    "name": "signature",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1111,
                    "src": "4378:9:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "functionReturnParameters": 1099,
                  "id": 1122,
                  "nodeType": "Return",
                  "src": "4371:16:7"
                }
              ]
            },
            "documentation": null,
            "id": 1124,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "sliceSignature",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1096,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1095,
                  "name": "_orderData",
                  "nodeType": "VariableDeclaration",
                  "scope": 1124,
                  "src": "4027:16:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1094,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "4027:5:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4026:18:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 1099,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1098,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1124,
                  "src": "4092:5:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1097,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "4092:5:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4091:7:7"
            },
            "scope": 1288,
            "src": "4003:391:7",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1161,
              "nodeType": "Block",
              "src": "4544:300:7",
              "statements": [
                {
                  "assignments": [
                    1136
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1136,
                      "name": "orderDataAddr",
                      "nodeType": "VariableDeclaration",
                      "scope": 1162,
                      "src": "4554:21:7",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1135,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4554:7:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1140,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "argumentTypes": null,
                        "id": 1137,
                        "name": "_orderData",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1126,
                        "src": "4578:10:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "id": 1138,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "contentAddress",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4010,
                      "src": "4578:25:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$_t_uint256_$bound_to$_t_bytes_memory_ptr_$",
                        "typeString": "function (bytes memory) pure returns (uint256)"
                      }
                    },
                    "id": 1139,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4578:27:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4554:51:7"
                },
                {
                  "assignments": [
                    1142
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1142,
                      "name": "orderStartAddress",
                      "nodeType": "VariableDeclaration",
                      "scope": 1162,
                      "src": "4615:25:7",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1141,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4615:7:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1147,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1145,
                        "name": "_signatureLength",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1128,
                        "src": "4661:16:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 1143,
                        "name": "orderDataAddr",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1136,
                        "src": "4643:13:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 1144,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "add",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5802,
                      "src": "4643:17:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 1146,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4643:35:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4615:63:7"
                },
                {
                  "assignments": [
                    1149
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1149,
                      "name": "order",
                      "nodeType": "VariableDeclaration",
                      "scope": 1162,
                      "src": "4688:18:7",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 1148,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "4688:5:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1158,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1152,
                        "name": "orderStartAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1142,
                        "src": "4739:17:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 1155,
                            "name": "_orderLength",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1130,
                            "src": "4792:12:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 1153,
                            "name": "orderStartAddress",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1142,
                            "src": "4770:17:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 1154,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "add",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 5802,
                          "src": "4770:21:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 1156,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4770:35:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 1150,
                        "name": "_orderData",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1126,
                        "src": "4709:10:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "id": 1151,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "slice",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4142,
                      "src": "4709:16:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$_t_uint256_$_t_uint256_$returns$_t_bytes_memory_ptr_$bound_to$_t_bytes_memory_ptr_$",
                        "typeString": "function (bytes memory,uint256,uint256) pure returns (bytes memory)"
                      }
                    },
                    "id": 1157,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4709:106:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4688:127:7"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1159,
                    "name": "order",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1149,
                    "src": "4832:5:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "functionReturnParameters": 1134,
                  "id": 1160,
                  "nodeType": "Return",
                  "src": "4825:12:7"
                }
              ]
            },
            "documentation": null,
            "id": 1162,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "sliceZeroExOrder",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1131,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1126,
                  "name": "_orderData",
                  "nodeType": "VariableDeclaration",
                  "scope": 1162,
                  "src": "4426:16:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1125,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "4426:5:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1128,
                  "name": "_signatureLength",
                  "nodeType": "VariableDeclaration",
                  "scope": 1162,
                  "src": "4444:21:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1127,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "4444:4:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1130,
                  "name": "_orderLength",
                  "nodeType": "VariableDeclaration",
                  "scope": 1162,
                  "src": "4467:17:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1129,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "4467:4:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4425:60:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 1134,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1133,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1162,
                  "src": "4533:5:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1132,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "4533:5:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4532:7:7"
            },
            "scope": 1288,
            "src": "4400:444:7",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1219,
              "nodeType": "Block",
              "src": "5060:2214:7",
              "statements": [
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1176,
                      "name": "order",
                      "nodeType": "VariableDeclaration",
                      "scope": 1220,
                      "src": "5070:27:7",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Order_$3986_memory_ptr",
                        "typeString": "struct LibOrder.Order"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 1175,
                        "name": "LibOrder.Order",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 3986,
                        "src": "5070:14:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Order_$3986_storage_ptr",
                          "typeString": "struct LibOrder.Order"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1177,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5070:27:7"
                },
                {
                  "assignments": [
                    1179
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1179,
                      "name": "orderDataAddr",
                      "nodeType": "VariableDeclaration",
                      "scope": 1220,
                      "src": "5107:21:7",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1178,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5107:7:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1183,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "argumentTypes": null,
                        "id": 1180,
                        "name": "_zeroExOrder",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1164,
                        "src": "5131:12:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "id": 1181,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "contentAddress",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4010,
                      "src": "5131:27:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$_t_uint256_$bound_to$_t_bytes_memory_ptr_$",
                        "typeString": "function (bytes memory) pure returns (uint256)"
                      }
                    },
                    "id": 1182,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5131:29:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5107:53:7"
                },
                {
                  "externalReferences": [
                    {
                      "order": {
                        "declaration": 1176,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "6150:5:7",
                        "valueSize": 1
                      }
                    },
                    {
                      "orderDataAddr": {
                        "declaration": 1179,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "6173:13:7",
                        "valueSize": 1
                      }
                    },
                    {
                      "order": {
                        "declaration": 1176,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "6231:5:7",
                        "valueSize": 1
                      }
                    },
                    {
                      "orderDataAddr": {
                        "declaration": 1179,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "6254:13:7",
                        "valueSize": 1
                      }
                    },
                    {
                      "order": {
                        "declaration": 1176,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "6308:5:7",
                        "valueSize": 1
                      }
                    },
                    {
                      "orderDataAddr": {
                        "declaration": 1179,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "6331:13:7",
                        "valueSize": 1
                      }
                    },
                    {
                      "order": {
                        "declaration": 1176,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "6653:5:7",
                        "valueSize": 1
                      }
                    },
                    {
                      "order": {
                        "declaration": 1176,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "6392:5:7",
                        "valueSize": 1
                      }
                    },
                    {
                      "order": {
                        "declaration": 1176,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "6477:5:7",
                        "valueSize": 1
                      }
                    },
                    {
                      "orderDataAddr": {
                        "declaration": 1179,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "6415:13:7",
                        "valueSize": 1
                      }
                    },
                    {
                      "order": {
                        "declaration": 1176,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "6565:5:7",
                        "valueSize": 1
                      }
                    },
                    {
                      "orderDataAddr": {
                        "declaration": 1179,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "6588:13:7",
                        "valueSize": 1
                      }
                    },
                    {
                      "orderDataAddr": {
                        "declaration": 1179,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "6500:13:7",
                        "valueSize": 1
                      }
                    },
                    {
                      "order": {
                        "declaration": 1176,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "6911:5:7",
                        "valueSize": 1
                      }
                    },
                    {
                      "orderDataAddr": {
                        "declaration": 1179,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "6934:13:7",
                        "valueSize": 1
                      }
                    },
                    {
                      "order": {
                        "declaration": 1176,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "6733:5:7",
                        "valueSize": 1
                      }
                    },
                    {
                      "orderDataAddr": {
                        "declaration": 1179,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "6676:13:7",
                        "valueSize": 1
                      }
                    },
                    {
                      "order": {
                        "declaration": 1176,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "6813:5:7",
                        "valueSize": 1
                      }
                    },
                    {
                      "orderDataAddr": {
                        "declaration": 1179,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "6756:13:7",
                        "valueSize": 1
                      }
                    },
                    {
                      "orderDataAddr": {
                        "declaration": 1179,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "6836:13:7",
                        "valueSize": 1
                      }
                    }
                  ],
                  "id": 1184,
                  "nodeType": "InlineAssembly",
                  "operations": "{\n    mstore(order, mload(orderDataAddr))\n    mstore(add(order, 32), mload(add(orderDataAddr, 32)))\n    mstore(add(order, 64), mload(add(orderDataAddr, 64)))\n    mstore(add(order, 96), mload(add(orderDataAddr, 96)))\n    mstore(add(order, 128), mload(add(orderDataAddr, 128)))\n    mstore(add(order, 160), mload(add(orderDataAddr, 160)))\n    mstore(add(order, 192), mload(add(orderDataAddr, 192)))\n    mstore(add(order, 224), mload(add(orderDataAddr, 224)))\n    mstore(add(order, 256), mload(add(orderDataAddr, 256)))\n    mstore(add(order, 288), mload(add(orderDataAddr, 288)))\n}",
                  "src": "6120:868:7"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1196,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 1185,
                        "name": "order",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1176,
                        "src": "6983:5:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Order_$3986_memory_ptr",
                          "typeString": "struct LibOrder.Order memory"
                        }
                      },
                      "id": 1187,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "makerAssetData",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 3983,
                      "src": "6983:20:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory",
                        "typeString": "bytes memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "333230",
                          "id": 1190,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "7025:3:7",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_320_by_1",
                            "typeString": "int_const 320"
                          },
                          "value": "320"
                        },
                        {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "333230",
                              "id": 1193,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "7056:3:7",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_320_by_1",
                                "typeString": "int_const 320"
                              },
                              "value": "320"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_320_by_1",
                                "typeString": "int_const 320"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "id": 1191,
                              "name": "_makerAssetDataLength",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1166,
                              "src": "7030:21:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 1192,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "add",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 5802,
                            "src": "7030:25:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 1194,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7030:30:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_320_by_1",
                            "typeString": "int_const 320"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "id": 1188,
                          "name": "_zeroExOrder",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1164,
                          "src": "7006:12:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        },
                        "id": 1189,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "slice",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 4142,
                        "src": "7006:18:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$_t_uint256_$_t_uint256_$returns$_t_bytes_memory_ptr_$bound_to$_t_bytes_memory_ptr_$",
                          "typeString": "function (bytes memory,uint256,uint256) pure returns (bytes memory)"
                        }
                      },
                      "id": 1195,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7006:55:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes memory"
                      }
                    },
                    "src": "6983:78:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory",
                      "typeString": "bytes memory"
                    }
                  },
                  "id": 1197,
                  "nodeType": "ExpressionStatement",
                  "src": "6983:78:7"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1215,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 1198,
                        "name": "order",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1176,
                        "src": "7071:5:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Order_$3986_memory_ptr",
                          "typeString": "struct LibOrder.Order memory"
                        }
                      },
                      "id": 1200,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "takerAssetData",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 3985,
                      "src": "7071:20:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory",
                        "typeString": "bytes memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "333230",
                              "id": 1205,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "7152:3:7",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_320_by_1",
                                "typeString": "int_const 320"
                              },
                              "value": "320"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_320_by_1",
                                "typeString": "int_const 320"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "id": 1203,
                              "name": "_makerAssetDataLength",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1166,
                              "src": "7126:21:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 1204,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "add",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 5802,
                            "src": "7126:25:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 1206,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7126:30:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 1212,
                              "name": "_takerAssetDataLength",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1168,
                              "src": "7205:21:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "hexValue": "333230",
                                  "id": 1209,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "7196:3:7",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_320_by_1",
                                    "typeString": "int_const 320"
                                  },
                                  "value": "320"
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_rational_320_by_1",
                                    "typeString": "int_const 320"
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 1207,
                                  "name": "_makerAssetDataLength",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 1166,
                                  "src": "7170:21:7",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "id": 1208,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "add",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 5802,
                                "src": "7170:25:7",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                  "typeString": "function (uint256,uint256) pure returns (uint256)"
                                }
                              },
                              "id": 1210,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "7170:30:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 1211,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "add",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 5802,
                            "src": "7170:34:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 1213,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7170:57:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "id": 1201,
                          "name": "_zeroExOrder",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1164,
                          "src": "7094:12:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        },
                        "id": 1202,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "slice",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 4142,
                        "src": "7094:18:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$_t_uint256_$_t_uint256_$returns$_t_bytes_memory_ptr_$bound_to$_t_bytes_memory_ptr_$",
                          "typeString": "function (bytes memory,uint256,uint256) pure returns (bytes memory)"
                        }
                      },
                      "id": 1214,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7094:143:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes memory"
                      }
                    },
                    "src": "7071:166:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory",
                      "typeString": "bytes memory"
                    }
                  },
                  "id": 1216,
                  "nodeType": "ExpressionStatement",
                  "src": "7071:166:7"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1217,
                    "name": "order",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1176,
                    "src": "7255:5:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Order_$3986_memory_ptr",
                      "typeString": "struct LibOrder.Order memory"
                    }
                  },
                  "functionReturnParameters": 1172,
                  "id": 1218,
                  "nodeType": "Return",
                  "src": "7248:12:7"
                }
              ]
            },
            "documentation": null,
            "id": 1220,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "constructZeroExOrder",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1169,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1164,
                  "name": "_zeroExOrder",
                  "nodeType": "VariableDeclaration",
                  "scope": 1220,
                  "src": "4889:18:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1163,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "4889:5:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1166,
                  "name": "_makerAssetDataLength",
                  "nodeType": "VariableDeclaration",
                  "scope": 1220,
                  "src": "4917:26:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1165,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "4917:4:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1168,
                  "name": "_takerAssetDataLength",
                  "nodeType": "VariableDeclaration",
                  "scope": 1220,
                  "src": "4953:26:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1167,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "4953:4:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4879:106:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 1172,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1171,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1220,
                  "src": "5033:14:7",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Order_$3986_memory_ptr",
                    "typeString": "struct LibOrder.Order"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 1170,
                    "name": "LibOrder.Order",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 3986,
                    "src": "5033:14:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Order_$3986_storage_ptr",
                      "typeString": "struct LibOrder.Order"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5032:23:7"
            },
            "scope": 1288,
            "src": "4850:2424:7",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1253,
              "nodeType": "Block",
              "src": "7397:336:7",
              "statements": [
                {
                  "assignments": [
                    1228
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1228,
                      "name": "header",
                      "nodeType": "VariableDeclaration",
                      "scope": 1254,
                      "src": "7407:26:7",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_ZeroExHeader_$1048_memory_ptr",
                        "typeString": "struct ZeroExOrderDataHandler.ZeroExHeader"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 1227,
                        "name": "ZeroExHeader",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 1048,
                        "src": "7407:12:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ZeroExHeader_$1048_storage_ptr",
                          "typeString": "struct ZeroExOrderDataHandler.ZeroExHeader"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1232,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1230,
                        "name": "_orderData",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1222,
                        "src": "7453:10:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 1229,
                      "name": "parseOrderHeader",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1073,
                      "src": "7436:16:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$_t_struct$_ZeroExHeader_$1048_memory_ptr_$",
                        "typeString": "function (bytes memory) pure returns (struct ZeroExOrderDataHandler.ZeroExHeader memory)"
                      }
                    },
                    "id": 1231,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7436:28:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_ZeroExHeader_$1048_memory_ptr",
                      "typeString": "struct ZeroExOrderDataHandler.ZeroExHeader memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7407:57:7"
                },
                {
                  "assignments": [
                    1236
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1236,
                      "name": "order",
                      "nodeType": "VariableDeclaration",
                      "scope": 1254,
                      "src": "7475:27:7",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Order_$3986_memory_ptr",
                        "typeString": "struct LibOrder.Order"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 1235,
                        "name": "LibOrder.Order",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 3986,
                        "src": "7475:14:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Order_$3986_storage_ptr",
                          "typeString": "struct LibOrder.Order"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1250,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 1239,
                            "name": "_orderData",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1222,
                            "src": "7556:10:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 1240,
                              "name": "header",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1228,
                              "src": "7568:6:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_ZeroExHeader_$1048_memory_ptr",
                                "typeString": "struct ZeroExOrderDataHandler.ZeroExHeader memory"
                              }
                            },
                            "id": 1241,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "signatureLength",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 1041,
                            "src": "7568:22:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 1242,
                              "name": "header",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1228,
                              "src": "7592:6:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_ZeroExHeader_$1048_memory_ptr",
                                "typeString": "struct ZeroExOrderDataHandler.ZeroExHeader memory"
                              }
                            },
                            "id": 1243,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "orderLength",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 1043,
                            "src": "7592:18:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 1238,
                          "name": "sliceZeroExOrder",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1162,
                          "src": "7539:16:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$_t_uint256_$_t_uint256_$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function (bytes memory,uint256,uint256) pure returns (bytes memory)"
                          }
                        },
                        "id": 1244,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "7539:72:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 1245,
                          "name": "header",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1228,
                          "src": "7625:6:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_ZeroExHeader_$1048_memory_ptr",
                            "typeString": "struct ZeroExOrderDataHandler.ZeroExHeader memory"
                          }
                        },
                        "id": 1246,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "makerAssetDataLength",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 1045,
                        "src": "7625:27:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 1247,
                          "name": "header",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1228,
                          "src": "7666:6:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_ZeroExHeader_$1048_memory_ptr",
                            "typeString": "struct ZeroExOrderDataHandler.ZeroExHeader memory"
                          }
                        },
                        "id": 1248,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "takerAssetDataLength",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 1047,
                        "src": "7666:27:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 1237,
                      "name": "constructZeroExOrder",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1220,
                      "src": "7505:20:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$_t_uint256_$_t_uint256_$returns$_t_struct$_Order_$3986_memory_ptr_$",
                        "typeString": "function (bytes memory,uint256,uint256) pure returns (struct LibOrder.Order memory)"
                      }
                    },
                    "id": 1249,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7505:198:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Order_$3986_memory_ptr",
                      "typeString": "struct LibOrder.Order memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7475:228:7"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1251,
                    "name": "order",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1236,
                    "src": "7721:5:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Order_$3986_memory_ptr",
                      "typeString": "struct LibOrder.Order memory"
                    }
                  },
                  "functionReturnParameters": 1226,
                  "id": 1252,
                  "nodeType": "Return",
                  "src": "7714:12:7"
                }
              ]
            },
            "documentation": null,
            "id": 1254,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "parseZeroExOrder",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1223,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1222,
                  "name": "_orderData",
                  "nodeType": "VariableDeclaration",
                  "scope": 1254,
                  "src": "7306:16:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1221,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "7306:5:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "7305:18:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 1226,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1225,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1254,
                  "src": "7370:14:7",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Order_$3986_memory_ptr",
                    "typeString": "struct LibOrder.Order"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 1224,
                    "name": "LibOrder.Order",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 3986,
                    "src": "7370:14:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Order_$3986_storage_ptr",
                      "typeString": "struct LibOrder.Order"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "7369:23:7"
            },
            "scope": 1288,
            "src": "7280:453:7",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1286,
              "nodeType": "Block",
              "src": "7848:303:7",
              "statements": [
                {
                  "assignments": [
                    1262
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1262,
                      "name": "assetType",
                      "nodeType": "VariableDeclaration",
                      "scope": 1287,
                      "src": "7900:16:7",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      },
                      "typeName": {
                        "id": 1261,
                        "name": "bytes4",
                        "nodeType": "ElementaryTypeName",
                        "src": "7900:6:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1267,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "30",
                        "id": 1265,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "7941:1:7",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 1263,
                        "name": "_assetData",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1256,
                        "src": "7919:10:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "id": 1264,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "readBytes4",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4033,
                      "src": "7919:21:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$_t_uint256_$returns$_t_bytes4_$bound_to$_t_bytes_memory_ptr_$",
                        "typeString": "function (bytes memory,uint256) pure returns (bytes4)"
                      }
                    },
                    "id": 1266,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7919:24:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7900:43:7"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        },
                        "id": 1271,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 1269,
                          "name": "ERC20_SELECTOR",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1036,
                          "src": "7974:14:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes4",
                            "typeString": "bytes4"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 1270,
                          "name": "assetType",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1262,
                          "src": "7992:9:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes4",
                            "typeString": "bytes4"
                          }
                        },
                        "src": "7974:27:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1272,
                        "name": "INVALID_TOKEN_ADDRESS",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1039,
                        "src": "8015:21:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_string_memory",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 1268,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        6359,
                        6360
                      ],
                      "referencedDeclaration": 6360,
                      "src": "7953:7:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 1273,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7953:93:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1274,
                  "nodeType": "ExpressionStatement",
                  "src": "7953:93:7"
                },
                {
                  "assignments": [
                    1276
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1276,
                      "name": "tokenAddress",
                      "nodeType": "VariableDeclaration",
                      "scope": 1287,
                      "src": "8057:20:7",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 1275,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "8057:7:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1283,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "hexValue": "34",
                            "id": 1280,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8111:1:7",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_4_by_1",
                              "typeString": "int_const 4"
                            },
                            "value": "4"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_rational_4_by_1",
                              "typeString": "int_const 4"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 1278,
                            "name": "_assetData",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1256,
                            "src": "8088:10:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          },
                          "id": 1279,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "readBytes32",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 4060,
                          "src": "8088:22:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$_t_uint256_$returns$_t_bytes32_$bound_to$_t_bytes_memory_ptr_$",
                            "typeString": "function (bytes memory,uint256) pure returns (bytes32)"
                          }
                        },
                        "id": 1281,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8088:25:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 1277,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "8080:7:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_address_$",
                        "typeString": "type(address)"
                      },
                      "typeName": "address"
                    },
                    "id": 1282,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8080:34:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "8057:57:7"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1284,
                    "name": "tokenAddress",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1276,
                    "src": "8132:12:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 1260,
                  "id": 1285,
                  "nodeType": "Return",
                  "src": "8125:19:7"
                }
              ]
            },
            "documentation": null,
            "id": 1287,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "parseERC20TokenAddress",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1257,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1256,
                  "name": "_assetData",
                  "nodeType": "VariableDeclaration",
                  "scope": 1287,
                  "src": "7771:16:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1255,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "7771:5:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "7770:18:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 1260,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1259,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1287,
                  "src": "7835:7:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1258,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7835:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "7834:9:7"
            },
            "scope": 1288,
            "src": "7739:412:7",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 1289,
        "src": "1031:7122:7"
      }
    ],
    "src": "597:7557:7"
  },
  "legacyAST": {
    "absolutePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/core/exchange-wrappers/lib/ZeroExOrderDataHandler.sol",
    "exportedSymbols": {
      "ZeroExOrderDataHandler": [
        1288
      ]
    },
    "id": 1289,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1016,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "597:23:7"
      },
      {
        "id": 1017,
        "literals": [
          "experimental",
          "ABIEncoderV2"
        ],
        "nodeType": "PragmaDirective",
        "src": "621:35:7"
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/math/SafeMath.sol",
        "file": "zeppelin-solidity/contracts/math/SafeMath.sol",
        "id": 1019,
        "nodeType": "ImportDirective",
        "scope": 1289,
        "sourceUnit": 5804,
        "src": "658:73:7",
        "symbolAliases": [
          {
            "foreign": 1018,
            "local": null
          }
        ],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/external/0x/LibBytes.sol",
        "file": "../../../external/0x/LibBytes.sol",
        "id": 1021,
        "nodeType": "ImportDirective",
        "scope": 1289,
        "sourceUnit": 4144,
        "src": "732:61:7",
        "symbolAliases": [
          {
            "foreign": 1020,
            "local": null
          }
        ],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/external/0x/Exchange/libs/LibOrder.sol",
        "file": "../../../external/0x/Exchange/libs/LibOrder.sol",
        "id": 1023,
        "nodeType": "ImportDirective",
        "scope": 1289,
        "sourceUnit": 3995,
        "src": "794:75:7",
        "symbolAliases": [
          {
            "foreign": 1022,
            "local": null
          }
        ],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": "@title ZeroExOrderDataHandler\n@author Set Protocol\n * This library contains functions and structs to assist with parsing exchange orders data",
        "fullyImplemented": true,
        "id": 1288,
        "linearizedBaseContracts": [
          1288
        ],
        "name": "ZeroExOrderDataHandler",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 1026,
            "libraryName": {
              "contractScope": null,
              "id": 1024,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 5803,
              "src": "1074:8:7",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$5803",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "1068:27:7",
            "typeName": {
              "id": 1025,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1087:7:7",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "id": 1029,
            "libraryName": {
              "contractScope": null,
              "id": 1027,
              "name": "LibBytes",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 4143,
              "src": "1106:8:7",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_LibBytes_$4143",
                "typeString": "library LibBytes"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "1100:25:7",
            "typeName": {
              "id": 1028,
              "name": "bytes",
              "nodeType": "ElementaryTypeName",
              "src": "1119:5:7",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes_storage_ptr",
                "typeString": "bytes"
              }
            }
          },
          {
            "constant": true,
            "id": 1036,
            "name": "ERC20_SELECTOR",
            "nodeType": "VariableDeclaration",
            "scope": 1288,
            "src": "1175:73:7",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes4",
              "typeString": "bytes4"
            },
            "typeName": {
              "id": 1030,
              "name": "bytes4",
              "nodeType": "ElementaryTypeName",
              "src": "1175:6:7",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes4",
                "typeString": "bytes4"
              }
            },
            "value": {
              "argumentTypes": null,
              "arguments": [
                {
                  "argumentTypes": null,
                  "arguments": [
                    {
                      "argumentTypes": null,
                      "hexValue": "4552433230546f6b656e286164647265737329",
                      "id": 1033,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "string",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1225:21:7",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_stringliteral_f47261b06eedbfce68afd46d0f3c27c60b03faad319eaf33103611cf8f6456ad",
                        "typeString": "literal_string \"ERC20Token(address)\""
                      },
                      "value": "ERC20Token(address)"
                    }
                  ],
                  "expression": {
                    "argumentTypes": [
                      {
                        "typeIdentifier": "t_stringliteral_f47261b06eedbfce68afd46d0f3c27c60b03faad319eaf33103611cf8f6456ad",
                        "typeString": "literal_string \"ERC20Token(address)\""
                      }
                    ],
                    "id": 1032,
                    "name": "keccak256",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 6350,
                    "src": "1215:9:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                      "typeString": "function () pure returns (bytes32)"
                    }
                  },
                  "id": 1034,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "functionCall",
                  "lValueRequested": false,
                  "names": [],
                  "nodeType": "FunctionCall",
                  "src": "1215:32:7",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  }
                }
              ],
              "expression": {
                "argumentTypes": [
                  {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  }
                ],
                "id": 1031,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "lValueRequested": false,
                "nodeType": "ElementaryTypeNameExpression",
                "src": "1208:6:7",
                "typeDescriptions": {
                  "typeIdentifier": "t_type$_t_bytes4_$",
                  "typeString": "type(bytes4)"
                },
                "typeName": "bytes4"
              },
              "id": 1035,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "typeConversion",
              "lValueRequested": false,
              "names": [],
              "nodeType": "FunctionCall",
              "src": "1208:40:7",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes4",
                "typeString": "bytes4"
              }
            },
            "visibility": "internal"
          },
          {
            "constant": true,
            "id": 1039,
            "name": "INVALID_TOKEN_ADDRESS",
            "nodeType": "VariableDeclaration",
            "scope": 1288,
            "src": "1255:73:7",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory",
              "typeString": "string"
            },
            "typeName": {
              "id": 1037,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "1255:6:7",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "41646472657373206973206e6f7420666f722045524332302061737365742e",
              "id": 1038,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1295:33:7",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_86bd15f736bfc35ffa26d5b270c6a610858a1cd544a317069255ba4a0f5dda71",
                "typeString": "literal_string \"Address is not for ERC20 asset.\""
              },
              "value": "Address is not for ERC20 asset."
            },
            "visibility": "internal"
          },
          {
            "canonicalName": "ZeroExOrderDataHandler.ZeroExHeader",
            "id": 1048,
            "members": [
              {
                "constant": false,
                "id": 1041,
                "name": "signatureLength",
                "nodeType": "VariableDeclaration",
                "scope": 1048,
                "src": "1407:23:7",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 1040,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1407:7:7",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 1043,
                "name": "orderLength",
                "nodeType": "VariableDeclaration",
                "scope": 1048,
                "src": "1440:19:7",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 1042,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1440:7:7",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 1045,
                "name": "makerAssetDataLength",
                "nodeType": "VariableDeclaration",
                "scope": 1048,
                "src": "1469:28:7",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 1044,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1469:7:7",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 1047,
                "name": "takerAssetDataLength",
                "nodeType": "VariableDeclaration",
                "scope": 1048,
                "src": "1507:28:7",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 1046,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1507:7:7",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "ZeroExHeader",
            "nodeType": "StructDefinition",
            "scope": 1288,
            "src": "1377:165:7",
            "visibility": "public"
          },
          {
            "canonicalName": "ZeroExOrderDataHandler.AssetDataAddresses",
            "id": 1053,
            "members": [
              {
                "constant": false,
                "id": 1050,
                "name": "makerTokenAddress",
                "nodeType": "VariableDeclaration",
                "scope": 1053,
                "src": "1584:25:7",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 1049,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "1584:7:7",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 1052,
                "name": "takerTokenAddress",
                "nodeType": "VariableDeclaration",
                "scope": 1053,
                "src": "1619:25:7",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 1051,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "1619:7:7",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "AssetDataAddresses",
            "nodeType": "StructDefinition",
            "scope": 1288,
            "src": "1548:103:7",
            "visibility": "public"
          },
          {
            "body": {
              "id": 1072,
              "nodeType": "Block",
              "src": "3177:500:7",
              "statements": [
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1061,
                      "name": "header",
                      "nodeType": "VariableDeclaration",
                      "scope": 1073,
                      "src": "3187:26:7",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_ZeroExHeader_$1048_memory_ptr",
                        "typeString": "struct ZeroExOrderDataHandler.ZeroExHeader"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 1060,
                        "name": "ZeroExHeader",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 1048,
                        "src": "3187:12:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ZeroExHeader_$1048_storage_ptr",
                          "typeString": "struct ZeroExOrderDataHandler.ZeroExHeader"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1062,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3187:26:7"
                },
                {
                  "assignments": [
                    1064
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1064,
                      "name": "orderDataAddr",
                      "nodeType": "VariableDeclaration",
                      "scope": 1073,
                      "src": "3224:21:7",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1063,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3224:7:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1068,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "argumentTypes": null,
                        "id": 1065,
                        "name": "_orderData",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1055,
                        "src": "3248:10:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "id": 1066,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "contentAddress",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4010,
                      "src": "3248:25:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$_t_uint256_$bound_to$_t_bytes_memory_ptr_$",
                        "typeString": "function (bytes memory) pure returns (uint256)"
                      }
                    },
                    "id": 1067,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3248:27:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3224:51:7"
                },
                {
                  "externalReferences": [
                    {
                      "header": {
                        "declaration": 1061,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "3316:6:7",
                        "valueSize": 1
                      }
                    },
                    {
                      "orderDataAddr": {
                        "declaration": 1064,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "3339:13:7",
                        "valueSize": 1
                      }
                    },
                    {
                      "header": {
                        "declaration": 1061,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "3397:6:7",
                        "valueSize": 1
                      }
                    },
                    {
                      "orderDataAddr": {
                        "declaration": 1064,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "3420:13:7",
                        "valueSize": 1
                      }
                    },
                    {
                      "header": {
                        "declaration": 1061,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "3479:6:7",
                        "valueSize": 1
                      }
                    },
                    {
                      "orderDataAddr": {
                        "declaration": 1064,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "3502:13:7",
                        "valueSize": 1
                      }
                    },
                    {
                      "header": {
                        "declaration": 1061,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "3570:6:7",
                        "valueSize": 1
                      }
                    },
                    {
                      "orderDataAddr": {
                        "declaration": 1064,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "3593:13:7",
                        "valueSize": 1
                      }
                    }
                  ],
                  "id": 1069,
                  "nodeType": "InlineAssembly",
                  "operations": "{\n    mstore(header, mload(orderDataAddr))\n    mstore(add(header, 32), mload(add(orderDataAddr, 32)))\n    mstore(add(header, 64), mload(add(orderDataAddr, 64)))\n    mstore(add(header, 96), mload(add(orderDataAddr, 96)))\n}",
                  "src": "3286:377:7"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1070,
                    "name": "header",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1061,
                    "src": "3664:6:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_ZeroExHeader_$1048_memory_ptr",
                      "typeString": "struct ZeroExOrderDataHandler.ZeroExHeader memory"
                    }
                  },
                  "functionReturnParameters": 1059,
                  "id": 1071,
                  "nodeType": "Return",
                  "src": "3657:13:7"
                }
              ]
            },
            "documentation": null,
            "id": 1073,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "parseOrderHeader",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1056,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1055,
                  "name": "_orderData",
                  "nodeType": "VariableDeclaration",
                  "scope": 1073,
                  "src": "3094:16:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1054,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "3094:5:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3093:18:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 1059,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1058,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1073,
                  "src": "3159:12:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_ZeroExHeader_$1048_memory_ptr",
                    "typeString": "struct ZeroExOrderDataHandler.ZeroExHeader"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 1057,
                    "name": "ZeroExHeader",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 1048,
                    "src": "3159:12:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_ZeroExHeader_$1048_storage_ptr",
                      "typeString": "struct ZeroExOrderDataHandler.ZeroExHeader"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3158:14:7"
            },
            "scope": 1288,
            "src": "3068:609:7",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1092,
              "nodeType": "Block",
              "src": "3786:211:7",
              "statements": [
                {
                  "assignments": [
                    1081
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1081,
                      "name": "orderDataAddr",
                      "nodeType": "VariableDeclaration",
                      "scope": 1093,
                      "src": "3796:21:7",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1080,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3796:7:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1085,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "argumentTypes": null,
                        "id": 1082,
                        "name": "_orderData",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1075,
                        "src": "3820:10:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "id": 1083,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "contentAddress",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4010,
                      "src": "3820:25:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$_t_uint256_$bound_to$_t_bytes_memory_ptr_$",
                        "typeString": "function (bytes memory) pure returns (uint256)"
                      }
                    },
                    "id": 1084,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3820:27:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3796:51:7"
                },
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1087,
                      "name": "fillAmount",
                      "nodeType": "VariableDeclaration",
                      "scope": 1093,
                      "src": "3857:18:7",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1086,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3857:7:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1088,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3857:18:7"
                },
                {
                  "externalReferences": [
                    {
                      "fillAmount": {
                        "declaration": 1087,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "3909:10:7",
                        "valueSize": 1
                      }
                    },
                    {
                      "orderDataAddr": {
                        "declaration": 1081,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "3933:13:7",
                        "valueSize": 1
                      }
                    }
                  ],
                  "id": 1089,
                  "nodeType": "InlineAssembly",
                  "operations": "{\n    fillAmount := mload(add(orderDataAddr, 128))\n}",
                  "src": "3886:93:7"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1090,
                    "name": "fillAmount",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1087,
                    "src": "3980:10:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 1079,
                  "id": 1091,
                  "nodeType": "Return",
                  "src": "3973:17:7"
                }
              ]
            },
            "documentation": null,
            "id": 1093,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "parseFillAmount",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1076,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1075,
                  "name": "_orderData",
                  "nodeType": "VariableDeclaration",
                  "scope": 1093,
                  "src": "3708:16:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1074,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "3708:5:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3707:18:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 1079,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1078,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1093,
                  "src": "3773:7:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1077,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3773:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3772:9:7"
            },
            "scope": 1288,
            "src": "3683:314:7",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1123,
              "nodeType": "Block",
              "src": "4103:291:7",
              "statements": [
                {
                  "assignments": [
                    1101
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1101,
                      "name": "orderDataAddr",
                      "nodeType": "VariableDeclaration",
                      "scope": 1124,
                      "src": "4113:21:7",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1100,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4113:7:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1105,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "argumentTypes": null,
                        "id": 1102,
                        "name": "_orderData",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1095,
                        "src": "4137:10:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "id": 1103,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "contentAddress",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4010,
                      "src": "4137:25:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$_t_uint256_$bound_to$_t_bytes_memory_ptr_$",
                        "typeString": "function (bytes memory) pure returns (uint256)"
                      }
                    },
                    "id": 1104,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4137:27:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4113:51:7"
                },
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1107,
                      "name": "signatureLength",
                      "nodeType": "VariableDeclaration",
                      "scope": 1124,
                      "src": "4174:23:7",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1106,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4174:7:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1108,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4174:23:7"
                },
                {
                  "externalReferences": [
                    {
                      "signatureLength": {
                        "declaration": 1107,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "4230:15:7",
                        "valueSize": 1
                      }
                    },
                    {
                      "orderDataAddr": {
                        "declaration": 1101,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "4255:13:7",
                        "valueSize": 1
                      }
                    }
                  ],
                  "id": 1109,
                  "nodeType": "InlineAssembly",
                  "operations": "{\n    signatureLength := mload(orderDataAddr)\n}",
                  "src": "4207:87:7"
                },
                {
                  "assignments": [
                    1111
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1111,
                      "name": "signature",
                      "nodeType": "VariableDeclaration",
                      "scope": 1124,
                      "src": "4289:22:7",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 1110,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "4289:5:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1120,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "313630",
                        "id": 1114,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4331:3:7",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_160_by_1",
                          "typeString": "int_const 160"
                        },
                        "value": "160"
                      },
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "hexValue": "313630",
                            "id": 1117,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "4356:3:7",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_160_by_1",
                              "typeString": "int_const 160"
                            },
                            "value": "160"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_rational_160_by_1",
                              "typeString": "int_const 160"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 1115,
                            "name": "signatureLength",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1107,
                            "src": "4336:15:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 1116,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "add",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 5802,
                          "src": "4336:19:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 1118,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4336:24:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_rational_160_by_1",
                          "typeString": "int_const 160"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 1112,
                        "name": "_orderData",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1095,
                        "src": "4314:10:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "id": 1113,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "slice",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4142,
                      "src": "4314:16:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$_t_uint256_$_t_uint256_$returns$_t_bytes_memory_ptr_$bound_to$_t_bytes_memory_ptr_$",
                        "typeString": "function (bytes memory,uint256,uint256) pure returns (bytes memory)"
                      }
                    },
                    "id": 1119,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4314:47:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4289:72:7"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1121,
                    "name": "signature",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1111,
                    "src": "4378:9:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "functionReturnParameters": 1099,
                  "id": 1122,
                  "nodeType": "Return",
                  "src": "4371:16:7"
                }
              ]
            },
            "documentation": null,
            "id": 1124,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "sliceSignature",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1096,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1095,
                  "name": "_orderData",
                  "nodeType": "VariableDeclaration",
                  "scope": 1124,
                  "src": "4027:16:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1094,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "4027:5:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4026:18:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 1099,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1098,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1124,
                  "src": "4092:5:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1097,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "4092:5:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4091:7:7"
            },
            "scope": 1288,
            "src": "4003:391:7",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1161,
              "nodeType": "Block",
              "src": "4544:300:7",
              "statements": [
                {
                  "assignments": [
                    1136
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1136,
                      "name": "orderDataAddr",
                      "nodeType": "VariableDeclaration",
                      "scope": 1162,
                      "src": "4554:21:7",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1135,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4554:7:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1140,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "argumentTypes": null,
                        "id": 1137,
                        "name": "_orderData",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1126,
                        "src": "4578:10:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "id": 1138,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "contentAddress",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4010,
                      "src": "4578:25:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$_t_uint256_$bound_to$_t_bytes_memory_ptr_$",
                        "typeString": "function (bytes memory) pure returns (uint256)"
                      }
                    },
                    "id": 1139,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4578:27:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4554:51:7"
                },
                {
                  "assignments": [
                    1142
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1142,
                      "name": "orderStartAddress",
                      "nodeType": "VariableDeclaration",
                      "scope": 1162,
                      "src": "4615:25:7",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1141,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4615:7:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1147,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1145,
                        "name": "_signatureLength",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1128,
                        "src": "4661:16:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 1143,
                        "name": "orderDataAddr",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1136,
                        "src": "4643:13:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 1144,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "add",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5802,
                      "src": "4643:17:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 1146,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4643:35:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4615:63:7"
                },
                {
                  "assignments": [
                    1149
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1149,
                      "name": "order",
                      "nodeType": "VariableDeclaration",
                      "scope": 1162,
                      "src": "4688:18:7",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 1148,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "4688:5:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1158,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1152,
                        "name": "orderStartAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1142,
                        "src": "4739:17:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 1155,
                            "name": "_orderLength",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1130,
                            "src": "4792:12:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 1153,
                            "name": "orderStartAddress",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1142,
                            "src": "4770:17:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 1154,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "add",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 5802,
                          "src": "4770:21:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 1156,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4770:35:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 1150,
                        "name": "_orderData",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1126,
                        "src": "4709:10:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "id": 1151,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "slice",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4142,
                      "src": "4709:16:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$_t_uint256_$_t_uint256_$returns$_t_bytes_memory_ptr_$bound_to$_t_bytes_memory_ptr_$",
                        "typeString": "function (bytes memory,uint256,uint256) pure returns (bytes memory)"
                      }
                    },
                    "id": 1157,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4709:106:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4688:127:7"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1159,
                    "name": "order",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1149,
                    "src": "4832:5:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "functionReturnParameters": 1134,
                  "id": 1160,
                  "nodeType": "Return",
                  "src": "4825:12:7"
                }
              ]
            },
            "documentation": null,
            "id": 1162,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "sliceZeroExOrder",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1131,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1126,
                  "name": "_orderData",
                  "nodeType": "VariableDeclaration",
                  "scope": 1162,
                  "src": "4426:16:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1125,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "4426:5:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1128,
                  "name": "_signatureLength",
                  "nodeType": "VariableDeclaration",
                  "scope": 1162,
                  "src": "4444:21:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1127,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "4444:4:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1130,
                  "name": "_orderLength",
                  "nodeType": "VariableDeclaration",
                  "scope": 1162,
                  "src": "4467:17:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1129,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "4467:4:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4425:60:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 1134,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1133,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1162,
                  "src": "4533:5:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1132,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "4533:5:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4532:7:7"
            },
            "scope": 1288,
            "src": "4400:444:7",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1219,
              "nodeType": "Block",
              "src": "5060:2214:7",
              "statements": [
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1176,
                      "name": "order",
                      "nodeType": "VariableDeclaration",
                      "scope": 1220,
                      "src": "5070:27:7",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Order_$3986_memory_ptr",
                        "typeString": "struct LibOrder.Order"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 1175,
                        "name": "LibOrder.Order",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 3986,
                        "src": "5070:14:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Order_$3986_storage_ptr",
                          "typeString": "struct LibOrder.Order"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1177,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5070:27:7"
                },
                {
                  "assignments": [
                    1179
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1179,
                      "name": "orderDataAddr",
                      "nodeType": "VariableDeclaration",
                      "scope": 1220,
                      "src": "5107:21:7",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1178,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5107:7:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1183,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "argumentTypes": null,
                        "id": 1180,
                        "name": "_zeroExOrder",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1164,
                        "src": "5131:12:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "id": 1181,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "contentAddress",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4010,
                      "src": "5131:27:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$_t_uint256_$bound_to$_t_bytes_memory_ptr_$",
                        "typeString": "function (bytes memory) pure returns (uint256)"
                      }
                    },
                    "id": 1182,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5131:29:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5107:53:7"
                },
                {
                  "externalReferences": [
                    {
                      "order": {
                        "declaration": 1176,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "6150:5:7",
                        "valueSize": 1
                      }
                    },
                    {
                      "orderDataAddr": {
                        "declaration": 1179,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "6173:13:7",
                        "valueSize": 1
                      }
                    },
                    {
                      "order": {
                        "declaration": 1176,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "6231:5:7",
                        "valueSize": 1
                      }
                    },
                    {
                      "orderDataAddr": {
                        "declaration": 1179,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "6254:13:7",
                        "valueSize": 1
                      }
                    },
                    {
                      "order": {
                        "declaration": 1176,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "6308:5:7",
                        "valueSize": 1
                      }
                    },
                    {
                      "orderDataAddr": {
                        "declaration": 1179,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "6331:13:7",
                        "valueSize": 1
                      }
                    },
                    {
                      "order": {
                        "declaration": 1176,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "6653:5:7",
                        "valueSize": 1
                      }
                    },
                    {
                      "order": {
                        "declaration": 1176,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "6392:5:7",
                        "valueSize": 1
                      }
                    },
                    {
                      "order": {
                        "declaration": 1176,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "6477:5:7",
                        "valueSize": 1
                      }
                    },
                    {
                      "orderDataAddr": {
                        "declaration": 1179,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "6415:13:7",
                        "valueSize": 1
                      }
                    },
                    {
                      "order": {
                        "declaration": 1176,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "6565:5:7",
                        "valueSize": 1
                      }
                    },
                    {
                      "orderDataAddr": {
                        "declaration": 1179,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "6588:13:7",
                        "valueSize": 1
                      }
                    },
                    {
                      "orderDataAddr": {
                        "declaration": 1179,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "6500:13:7",
                        "valueSize": 1
                      }
                    },
                    {
                      "order": {
                        "declaration": 1176,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "6911:5:7",
                        "valueSize": 1
                      }
                    },
                    {
                      "orderDataAddr": {
                        "declaration": 1179,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "6934:13:7",
                        "valueSize": 1
                      }
                    },
                    {
                      "order": {
                        "declaration": 1176,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "6733:5:7",
                        "valueSize": 1
                      }
                    },
                    {
                      "orderDataAddr": {
                        "declaration": 1179,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "6676:13:7",
                        "valueSize": 1
                      }
                    },
                    {
                      "order": {
                        "declaration": 1176,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "6813:5:7",
                        "valueSize": 1
                      }
                    },
                    {
                      "orderDataAddr": {
                        "declaration": 1179,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "6756:13:7",
                        "valueSize": 1
                      }
                    },
                    {
                      "orderDataAddr": {
                        "declaration": 1179,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "6836:13:7",
                        "valueSize": 1
                      }
                    }
                  ],
                  "id": 1184,
                  "nodeType": "InlineAssembly",
                  "operations": "{\n    mstore(order, mload(orderDataAddr))\n    mstore(add(order, 32), mload(add(orderDataAddr, 32)))\n    mstore(add(order, 64), mload(add(orderDataAddr, 64)))\n    mstore(add(order, 96), mload(add(orderDataAddr, 96)))\n    mstore(add(order, 128), mload(add(orderDataAddr, 128)))\n    mstore(add(order, 160), mload(add(orderDataAddr, 160)))\n    mstore(add(order, 192), mload(add(orderDataAddr, 192)))\n    mstore(add(order, 224), mload(add(orderDataAddr, 224)))\n    mstore(add(order, 256), mload(add(orderDataAddr, 256)))\n    mstore(add(order, 288), mload(add(orderDataAddr, 288)))\n}",
                  "src": "6120:868:7"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1196,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 1185,
                        "name": "order",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1176,
                        "src": "6983:5:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Order_$3986_memory_ptr",
                          "typeString": "struct LibOrder.Order memory"
                        }
                      },
                      "id": 1187,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "makerAssetData",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 3983,
                      "src": "6983:20:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory",
                        "typeString": "bytes memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "333230",
                          "id": 1190,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "7025:3:7",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_320_by_1",
                            "typeString": "int_const 320"
                          },
                          "value": "320"
                        },
                        {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "333230",
                              "id": 1193,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "7056:3:7",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_320_by_1",
                                "typeString": "int_const 320"
                              },
                              "value": "320"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_320_by_1",
                                "typeString": "int_const 320"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "id": 1191,
                              "name": "_makerAssetDataLength",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1166,
                              "src": "7030:21:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 1192,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "add",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 5802,
                            "src": "7030:25:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 1194,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7030:30:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_320_by_1",
                            "typeString": "int_const 320"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "id": 1188,
                          "name": "_zeroExOrder",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1164,
                          "src": "7006:12:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        },
                        "id": 1189,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "slice",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 4142,
                        "src": "7006:18:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$_t_uint256_$_t_uint256_$returns$_t_bytes_memory_ptr_$bound_to$_t_bytes_memory_ptr_$",
                          "typeString": "function (bytes memory,uint256,uint256) pure returns (bytes memory)"
                        }
                      },
                      "id": 1195,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7006:55:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes memory"
                      }
                    },
                    "src": "6983:78:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory",
                      "typeString": "bytes memory"
                    }
                  },
                  "id": 1197,
                  "nodeType": "ExpressionStatement",
                  "src": "6983:78:7"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1215,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 1198,
                        "name": "order",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1176,
                        "src": "7071:5:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Order_$3986_memory_ptr",
                          "typeString": "struct LibOrder.Order memory"
                        }
                      },
                      "id": 1200,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "takerAssetData",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 3985,
                      "src": "7071:20:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory",
                        "typeString": "bytes memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "333230",
                              "id": 1205,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "7152:3:7",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_320_by_1",
                                "typeString": "int_const 320"
                              },
                              "value": "320"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_320_by_1",
                                "typeString": "int_const 320"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "id": 1203,
                              "name": "_makerAssetDataLength",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1166,
                              "src": "7126:21:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 1204,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "add",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 5802,
                            "src": "7126:25:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 1206,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7126:30:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 1212,
                              "name": "_takerAssetDataLength",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1168,
                              "src": "7205:21:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "hexValue": "333230",
                                  "id": 1209,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "7196:3:7",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_320_by_1",
                                    "typeString": "int_const 320"
                                  },
                                  "value": "320"
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_rational_320_by_1",
                                    "typeString": "int_const 320"
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 1207,
                                  "name": "_makerAssetDataLength",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 1166,
                                  "src": "7170:21:7",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "id": 1208,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "add",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 5802,
                                "src": "7170:25:7",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                  "typeString": "function (uint256,uint256) pure returns (uint256)"
                                }
                              },
                              "id": 1210,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "7170:30:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 1211,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "add",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 5802,
                            "src": "7170:34:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 1213,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7170:57:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "id": 1201,
                          "name": "_zeroExOrder",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1164,
                          "src": "7094:12:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        },
                        "id": 1202,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "slice",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 4142,
                        "src": "7094:18:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$_t_uint256_$_t_uint256_$returns$_t_bytes_memory_ptr_$bound_to$_t_bytes_memory_ptr_$",
                          "typeString": "function (bytes memory,uint256,uint256) pure returns (bytes memory)"
                        }
                      },
                      "id": 1214,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7094:143:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes memory"
                      }
                    },
                    "src": "7071:166:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory",
                      "typeString": "bytes memory"
                    }
                  },
                  "id": 1216,
                  "nodeType": "ExpressionStatement",
                  "src": "7071:166:7"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1217,
                    "name": "order",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1176,
                    "src": "7255:5:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Order_$3986_memory_ptr",
                      "typeString": "struct LibOrder.Order memory"
                    }
                  },
                  "functionReturnParameters": 1172,
                  "id": 1218,
                  "nodeType": "Return",
                  "src": "7248:12:7"
                }
              ]
            },
            "documentation": null,
            "id": 1220,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "constructZeroExOrder",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1169,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1164,
                  "name": "_zeroExOrder",
                  "nodeType": "VariableDeclaration",
                  "scope": 1220,
                  "src": "4889:18:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1163,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "4889:5:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1166,
                  "name": "_makerAssetDataLength",
                  "nodeType": "VariableDeclaration",
                  "scope": 1220,
                  "src": "4917:26:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1165,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "4917:4:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1168,
                  "name": "_takerAssetDataLength",
                  "nodeType": "VariableDeclaration",
                  "scope": 1220,
                  "src": "4953:26:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1167,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "4953:4:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4879:106:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 1172,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1171,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1220,
                  "src": "5033:14:7",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Order_$3986_memory_ptr",
                    "typeString": "struct LibOrder.Order"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 1170,
                    "name": "LibOrder.Order",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 3986,
                    "src": "5033:14:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Order_$3986_storage_ptr",
                      "typeString": "struct LibOrder.Order"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5032:23:7"
            },
            "scope": 1288,
            "src": "4850:2424:7",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1253,
              "nodeType": "Block",
              "src": "7397:336:7",
              "statements": [
                {
                  "assignments": [
                    1228
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1228,
                      "name": "header",
                      "nodeType": "VariableDeclaration",
                      "scope": 1254,
                      "src": "7407:26:7",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_ZeroExHeader_$1048_memory_ptr",
                        "typeString": "struct ZeroExOrderDataHandler.ZeroExHeader"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 1227,
                        "name": "ZeroExHeader",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 1048,
                        "src": "7407:12:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ZeroExHeader_$1048_storage_ptr",
                          "typeString": "struct ZeroExOrderDataHandler.ZeroExHeader"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1232,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1230,
                        "name": "_orderData",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1222,
                        "src": "7453:10:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 1229,
                      "name": "parseOrderHeader",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1073,
                      "src": "7436:16:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$_t_struct$_ZeroExHeader_$1048_memory_ptr_$",
                        "typeString": "function (bytes memory) pure returns (struct ZeroExOrderDataHandler.ZeroExHeader memory)"
                      }
                    },
                    "id": 1231,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7436:28:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_ZeroExHeader_$1048_memory_ptr",
                      "typeString": "struct ZeroExOrderDataHandler.ZeroExHeader memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7407:57:7"
                },
                {
                  "assignments": [
                    1236
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1236,
                      "name": "order",
                      "nodeType": "VariableDeclaration",
                      "scope": 1254,
                      "src": "7475:27:7",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Order_$3986_memory_ptr",
                        "typeString": "struct LibOrder.Order"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 1235,
                        "name": "LibOrder.Order",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 3986,
                        "src": "7475:14:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Order_$3986_storage_ptr",
                          "typeString": "struct LibOrder.Order"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1250,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 1239,
                            "name": "_orderData",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1222,
                            "src": "7556:10:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 1240,
                              "name": "header",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1228,
                              "src": "7568:6:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_ZeroExHeader_$1048_memory_ptr",
                                "typeString": "struct ZeroExOrderDataHandler.ZeroExHeader memory"
                              }
                            },
                            "id": 1241,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "signatureLength",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 1041,
                            "src": "7568:22:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 1242,
                              "name": "header",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1228,
                              "src": "7592:6:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_ZeroExHeader_$1048_memory_ptr",
                                "typeString": "struct ZeroExOrderDataHandler.ZeroExHeader memory"
                              }
                            },
                            "id": 1243,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "orderLength",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 1043,
                            "src": "7592:18:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 1238,
                          "name": "sliceZeroExOrder",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1162,
                          "src": "7539:16:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$_t_uint256_$_t_uint256_$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function (bytes memory,uint256,uint256) pure returns (bytes memory)"
                          }
                        },
                        "id": 1244,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "7539:72:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 1245,
                          "name": "header",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1228,
                          "src": "7625:6:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_ZeroExHeader_$1048_memory_ptr",
                            "typeString": "struct ZeroExOrderDataHandler.ZeroExHeader memory"
                          }
                        },
                        "id": 1246,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "makerAssetDataLength",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 1045,
                        "src": "7625:27:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 1247,
                          "name": "header",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1228,
                          "src": "7666:6:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_ZeroExHeader_$1048_memory_ptr",
                            "typeString": "struct ZeroExOrderDataHandler.ZeroExHeader memory"
                          }
                        },
                        "id": 1248,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "takerAssetDataLength",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 1047,
                        "src": "7666:27:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 1237,
                      "name": "constructZeroExOrder",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1220,
                      "src": "7505:20:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$_t_uint256_$_t_uint256_$returns$_t_struct$_Order_$3986_memory_ptr_$",
                        "typeString": "function (bytes memory,uint256,uint256) pure returns (struct LibOrder.Order memory)"
                      }
                    },
                    "id": 1249,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7505:198:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Order_$3986_memory_ptr",
                      "typeString": "struct LibOrder.Order memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7475:228:7"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1251,
                    "name": "order",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1236,
                    "src": "7721:5:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Order_$3986_memory_ptr",
                      "typeString": "struct LibOrder.Order memory"
                    }
                  },
                  "functionReturnParameters": 1226,
                  "id": 1252,
                  "nodeType": "Return",
                  "src": "7714:12:7"
                }
              ]
            },
            "documentation": null,
            "id": 1254,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "parseZeroExOrder",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1223,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1222,
                  "name": "_orderData",
                  "nodeType": "VariableDeclaration",
                  "scope": 1254,
                  "src": "7306:16:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1221,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "7306:5:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "7305:18:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 1226,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1225,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1254,
                  "src": "7370:14:7",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Order_$3986_memory_ptr",
                    "typeString": "struct LibOrder.Order"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 1224,
                    "name": "LibOrder.Order",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 3986,
                    "src": "7370:14:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Order_$3986_storage_ptr",
                      "typeString": "struct LibOrder.Order"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "7369:23:7"
            },
            "scope": 1288,
            "src": "7280:453:7",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1286,
              "nodeType": "Block",
              "src": "7848:303:7",
              "statements": [
                {
                  "assignments": [
                    1262
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1262,
                      "name": "assetType",
                      "nodeType": "VariableDeclaration",
                      "scope": 1287,
                      "src": "7900:16:7",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      },
                      "typeName": {
                        "id": 1261,
                        "name": "bytes4",
                        "nodeType": "ElementaryTypeName",
                        "src": "7900:6:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1267,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "30",
                        "id": 1265,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "7941:1:7",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 1263,
                        "name": "_assetData",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1256,
                        "src": "7919:10:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "id": 1264,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "readBytes4",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4033,
                      "src": "7919:21:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$_t_uint256_$returns$_t_bytes4_$bound_to$_t_bytes_memory_ptr_$",
                        "typeString": "function (bytes memory,uint256) pure returns (bytes4)"
                      }
                    },
                    "id": 1266,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7919:24:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7900:43:7"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        },
                        "id": 1271,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 1269,
                          "name": "ERC20_SELECTOR",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1036,
                          "src": "7974:14:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes4",
                            "typeString": "bytes4"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 1270,
                          "name": "assetType",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1262,
                          "src": "7992:9:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes4",
                            "typeString": "bytes4"
                          }
                        },
                        "src": "7974:27:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1272,
                        "name": "INVALID_TOKEN_ADDRESS",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1039,
                        "src": "8015:21:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_string_memory",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 1268,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        6359,
                        6360
                      ],
                      "referencedDeclaration": 6360,
                      "src": "7953:7:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 1273,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7953:93:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1274,
                  "nodeType": "ExpressionStatement",
                  "src": "7953:93:7"
                },
                {
                  "assignments": [
                    1276
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1276,
                      "name": "tokenAddress",
                      "nodeType": "VariableDeclaration",
                      "scope": 1287,
                      "src": "8057:20:7",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 1275,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "8057:7:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1283,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "hexValue": "34",
                            "id": 1280,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8111:1:7",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_4_by_1",
                              "typeString": "int_const 4"
                            },
                            "value": "4"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_rational_4_by_1",
                              "typeString": "int_const 4"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 1278,
                            "name": "_assetData",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1256,
                            "src": "8088:10:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          },
                          "id": 1279,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "readBytes32",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 4060,
                          "src": "8088:22:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$_t_uint256_$returns$_t_bytes32_$bound_to$_t_bytes_memory_ptr_$",
                            "typeString": "function (bytes memory,uint256) pure returns (bytes32)"
                          }
                        },
                        "id": 1281,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8088:25:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 1277,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "8080:7:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_address_$",
                        "typeString": "type(address)"
                      },
                      "typeName": "address"
                    },
                    "id": 1282,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8080:34:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "8057:57:7"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1284,
                    "name": "tokenAddress",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1276,
                    "src": "8132:12:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 1260,
                  "id": 1285,
                  "nodeType": "Return",
                  "src": "8125:19:7"
                }
              ]
            },
            "documentation": null,
            "id": 1287,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "parseERC20TokenAddress",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1257,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1256,
                  "name": "_assetData",
                  "nodeType": "VariableDeclaration",
                  "scope": 1287,
                  "src": "7771:16:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1255,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "7771:5:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "7770:18:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 1260,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1259,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1287,
                  "src": "7835:7:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1258,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7835:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "7834:9:7"
            },
            "scope": 1288,
            "src": "7739:412:7",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 1289,
        "src": "1031:7122:7"
      }
    ],
    "src": "597:7557:7"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.0",
  "updatedAt": "2018-07-08T01:11:15.189Z"
}