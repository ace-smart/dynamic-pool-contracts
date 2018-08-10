export const ExchangeHandler = 
{
  "contractName": "ExchangeHandler",
  "abi": [],
  "bytecode": "0x605a602c600b82828239805160001a60731460008114601c57601e565bfe5b5030600052607381538281f30073000000000000000000000000000000000000000030146080604052600080fd00a265627a7a72305820fbcc5a0d851c9211035ac849cef186f9f09b875b8614f4c4ac2f2724501917fb6c6578706572696d656e74616cf50037",
  "deployedBytecode": "0x73000000000000000000000000000000000000000030146080604052600080fd00a265627a7a72305820fbcc5a0d851c9211035ac849cef186f9f09b875b8614f4c4ac2f2724501917fb6c6578706572696d656e74616cf50037",
  "sourceMap": "945:1398:24:-;;132:2:-1;166:7;155:9;146:7;137:37;252:7;246:14;243:1;238:23;232:4;229:33;270:1;265:20;;;;222:63;;265:20;274:9;222:63;;298:9;295:1;288:20;328:4;319:7;311:22;352:7;343;336:24",
  "deployedSourceMap": "945:1398:24:-;;;;;;;;",
  "source": "/*\n    Copyright 2018 Set Labs Inc.\n\n    Licensed under the Apache License, Version 2.0 (the \"License\");\n    you may not use this file except in compliance with the License.\n    You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n    Unless required by applicable law or agreed to in writing, software\n    distributed under the License is distributed on an \"AS IS\" BASIS,\n    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n    See the License for the specific language governing permissions and\n    limitations under the License.\n*/\n\npragma solidity 0.4.24;\npragma experimental \"ABIEncoderV2\";\n\nimport { LibBytes } from \"../../external/0x/LibBytes.sol\";\nimport { SafeMath } from \"zeppelin-solidity/contracts/math/SafeMath.sol\";\n\n\n/**\n * @title ExchangeHandler\n * @author Set Protocol\n *\n * This library contains functions and structs to assist with parsing exchange orders data\n */\nlibrary ExchangeHandler {\n    using LibBytes for bytes;\n    using SafeMath for uint256;\n\n    // ============ Structs ============\n\n    struct ExchangeHeader {\n        uint8 exchange;\n        uint8 orderCount;\n        address makerTokenAddress;\n        uint256 makerTokenAmount;\n        uint256 totalOrdersLength;\n    }\n\n    // ============ Internal Functions ============\n\n    /**\n     * Function to convert bytes into ExchangeHeader\n     *\n     * @param _headerData      Bytes representing the order body information\n     * @return ExchangeHeader  Struct containing data for a batch of exchange orders\n     */\n    function parseExchangeHeader(\n        bytes _headerData,\n        uint256 _offset\n    )\n        internal\n        pure\n        returns (ExchangeHeader memory)\n    {\n        ExchangeHeader memory header;\n\n        uint256 headerDataStart = _headerData.contentAddress().add(_offset);\n\n        assembly {\n            mstore(header,          mload(headerDataStart))            // exchange\n            mstore(add(header, 32), mload(add(headerDataStart, 32)))   // orderCount\n            mstore(add(header, 64), mload(add(headerDataStart, 64)))   // makerTokenAddress\n            mstore(add(header, 96), mload(add(headerDataStart, 96)))   // makerTokenAmount\n            mstore(add(header, 128), mload(add(headerDataStart, 128))) // totalOrdersLength\n        }\n\n        return header;\n    }\n}\n",
  "sourcePath": "/Users/alexsoong/Source/set-protocol/set-protocol-contracts/contracts/core/lib/ExchangeHandler.sol",
  "ast": {
    "absolutePath": "/Users/alexsoong/Source/set-protocol/set-protocol-contracts/contracts/core/lib/ExchangeHandler.sol",
    "exportedSymbols": {
      "ExchangeHandler": [
        3913
      ]
    },
    "id": 3914,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 3865,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "597:23:24"
      },
      {
        "id": 3866,
        "literals": [
          "experimental",
          "ABIEncoderV2"
        ],
        "nodeType": "PragmaDirective",
        "src": "621:35:24"
      },
      {
        "absolutePath": "/Users/alexsoong/Source/set-protocol/set-protocol-contracts/contracts/external/0x/LibBytes.sol",
        "file": "../../external/0x/LibBytes.sol",
        "id": 3868,
        "nodeType": "ImportDirective",
        "scope": 3914,
        "sourceUnit": 4854,
        "src": "658:58:24",
        "symbolAliases": [
          {
            "foreign": 3867,
            "local": null
          }
        ],
        "unitAlias": ""
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/math/SafeMath.sol",
        "file": "zeppelin-solidity/contracts/math/SafeMath.sol",
        "id": 3870,
        "nodeType": "ImportDirective",
        "scope": 3914,
        "sourceUnit": 6746,
        "src": "717:73:24",
        "symbolAliases": [
          {
            "foreign": 3869,
            "local": null
          }
        ],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": "@title ExchangeHandler\n@author Set Protocol\n * This library contains functions and structs to assist with parsing exchange orders data",
        "fullyImplemented": true,
        "id": 3913,
        "linearizedBaseContracts": [
          3913
        ],
        "name": "ExchangeHandler",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 3873,
            "libraryName": {
              "contractScope": null,
              "id": 3871,
              "name": "LibBytes",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 4853,
              "src": "981:8:24",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_LibBytes_$4853",
                "typeString": "library LibBytes"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "975:25:24",
            "typeName": {
              "id": 3872,
              "name": "bytes",
              "nodeType": "ElementaryTypeName",
              "src": "994:5:24",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes_storage_ptr",
                "typeString": "bytes"
              }
            }
          },
          {
            "id": 3876,
            "libraryName": {
              "contractScope": null,
              "id": 3874,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 6745,
              "src": "1011:8:24",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$6745",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "1005:27:24",
            "typeName": {
              "id": 3875,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1024:7:24",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "canonicalName": "ExchangeHandler.ExchangeHeader",
            "id": 3887,
            "members": [
              {
                "constant": false,
                "id": 3878,
                "name": "exchange",
                "nodeType": "VariableDeclaration",
                "scope": 3887,
                "src": "1112:14:24",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint8",
                  "typeString": "uint8"
                },
                "typeName": {
                  "id": 3877,
                  "name": "uint8",
                  "nodeType": "ElementaryTypeName",
                  "src": "1112:5:24",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 3880,
                "name": "orderCount",
                "nodeType": "VariableDeclaration",
                "scope": 3887,
                "src": "1136:16:24",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint8",
                  "typeString": "uint8"
                },
                "typeName": {
                  "id": 3879,
                  "name": "uint8",
                  "nodeType": "ElementaryTypeName",
                  "src": "1136:5:24",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 3882,
                "name": "makerTokenAddress",
                "nodeType": "VariableDeclaration",
                "scope": 3887,
                "src": "1162:25:24",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 3881,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "1162:7:24",
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
                "id": 3884,
                "name": "makerTokenAmount",
                "nodeType": "VariableDeclaration",
                "scope": 3887,
                "src": "1197:24:24",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 3883,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1197:7:24",
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
                "id": 3886,
                "name": "totalOrdersLength",
                "nodeType": "VariableDeclaration",
                "scope": 3887,
                "src": "1231:25:24",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 3885,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1231:7:24",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "ExchangeHeader",
            "nodeType": "StructDefinition",
            "scope": 3913,
            "src": "1080:183:24",
            "visibility": "public"
          },
          {
            "body": {
              "id": 3911,
              "nodeType": "Block",
              "src": "1721:620:24",
              "statements": [
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 3897,
                      "name": "header",
                      "nodeType": "VariableDeclaration",
                      "scope": 3912,
                      "src": "1731:28:24",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_ExchangeHeader_$3887_memory_ptr",
                        "typeString": "struct ExchangeHandler.ExchangeHeader"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 3896,
                        "name": "ExchangeHeader",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 3887,
                        "src": "1731:14:24",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ExchangeHeader_$3887_storage_ptr",
                          "typeString": "struct ExchangeHandler.ExchangeHeader"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 3898,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1731:28:24"
                },
                {
                  "assignments": [
                    3900
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 3900,
                      "name": "headerDataStart",
                      "nodeType": "VariableDeclaration",
                      "scope": 3912,
                      "src": "1770:23:24",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 3899,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1770:7:24",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 3907,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3905,
                        "name": "_offset",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3891,
                        "src": "1829:7:24",
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
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "expression": {
                            "argumentTypes": null,
                            "id": 3901,
                            "name": "_headerData",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3889,
                            "src": "1796:11:24",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          },
                          "id": 3902,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "contentAddress",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 4720,
                          "src": "1796:26:24",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$_t_uint256_$bound_to$_t_bytes_memory_ptr_$",
                            "typeString": "function (bytes memory) pure returns (uint256)"
                          }
                        },
                        "id": 3903,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1796:28:24",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 3904,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "add",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6744,
                      "src": "1796:32:24",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 3906,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1796:41:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1770:67:24"
                },
                {
                  "externalReferences": [
                    {
                      "header": {
                        "declaration": 3897,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "1878:6:24",
                        "valueSize": 1
                      }
                    },
                    {
                      "headerDataStart": {
                        "declaration": 3900,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "1901:15:24",
                        "valueSize": 1
                      }
                    },
                    {
                      "header": {
                        "declaration": 3897,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "1965:6:24",
                        "valueSize": 1
                      }
                    },
                    {
                      "headerDataStart": {
                        "declaration": 3900,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "1988:15:24",
                        "valueSize": 1
                      }
                    },
                    {
                      "header": {
                        "declaration": 3897,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "2050:6:24",
                        "valueSize": 1
                      }
                    },
                    {
                      "headerDataStart": {
                        "declaration": 3900,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "2073:15:24",
                        "valueSize": 1
                      }
                    },
                    {
                      "header": {
                        "declaration": 3897,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "2142:6:24",
                        "valueSize": 1
                      }
                    },
                    {
                      "header": {
                        "declaration": 3897,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "2233:6:24",
                        "valueSize": 1
                      }
                    },
                    {
                      "headerDataStart": {
                        "declaration": 3900,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "2165:15:24",
                        "valueSize": 1
                      }
                    },
                    {
                      "headerDataStart": {
                        "declaration": 3900,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "2257:15:24",
                        "valueSize": 1
                      }
                    }
                  ],
                  "id": 3908,
                  "nodeType": "InlineAssembly",
                  "operations": "{\n    mstore(header, mload(headerDataStart))\n    mstore(add(header, 32), mload(add(headerDataStart, 32)))\n    mstore(add(header, 64), mload(add(headerDataStart, 64)))\n    mstore(add(header, 96), mload(add(headerDataStart, 96)))\n    mstore(add(header, 128), mload(add(headerDataStart, 128)))\n}",
                  "src": "1848:479:24"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 3909,
                    "name": "header",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 3897,
                    "src": "2328:6:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_ExchangeHeader_$3887_memory_ptr",
                      "typeString": "struct ExchangeHandler.ExchangeHeader memory"
                    }
                  },
                  "functionReturnParameters": 3895,
                  "id": 3910,
                  "nodeType": "Return",
                  "src": "2321:13:24"
                }
              ]
            },
            "documentation": "Function to convert bytes into ExchangeHeader\n     * @param _headerData      Bytes representing the order body information\n@return ExchangeHeader  Struct containing data for a batch of exchange orders",
            "id": 3912,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "parseExchangeHeader",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3892,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3889,
                  "name": "_headerData",
                  "nodeType": "VariableDeclaration",
                  "scope": 3912,
                  "src": "1598:17:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 3888,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1598:5:24",
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
                  "id": 3891,
                  "name": "_offset",
                  "nodeType": "VariableDeclaration",
                  "scope": 3912,
                  "src": "1625:15:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3890,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1625:7:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1588:58:24"
            },
            "payable": false,
            "returnParameters": {
              "id": 3895,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3894,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 3912,
                  "src": "1694:14:24",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_ExchangeHeader_$3887_memory_ptr",
                    "typeString": "struct ExchangeHandler.ExchangeHeader"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 3893,
                    "name": "ExchangeHeader",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 3887,
                    "src": "1694:14:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_ExchangeHeader_$3887_storage_ptr",
                      "typeString": "struct ExchangeHandler.ExchangeHeader"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1693:23:24"
            },
            "scope": 3913,
            "src": "1560:781:24",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 3914,
        "src": "945:1398:24"
      }
    ],
    "src": "597:1747:24"
  },
  "legacyAST": {
    "absolutePath": "/Users/alexsoong/Source/set-protocol/set-protocol-contracts/contracts/core/lib/ExchangeHandler.sol",
    "exportedSymbols": {
      "ExchangeHandler": [
        3913
      ]
    },
    "id": 3914,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 3865,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "597:23:24"
      },
      {
        "id": 3866,
        "literals": [
          "experimental",
          "ABIEncoderV2"
        ],
        "nodeType": "PragmaDirective",
        "src": "621:35:24"
      },
      {
        "absolutePath": "/Users/alexsoong/Source/set-protocol/set-protocol-contracts/contracts/external/0x/LibBytes.sol",
        "file": "../../external/0x/LibBytes.sol",
        "id": 3868,
        "nodeType": "ImportDirective",
        "scope": 3914,
        "sourceUnit": 4854,
        "src": "658:58:24",
        "symbolAliases": [
          {
            "foreign": 3867,
            "local": null
          }
        ],
        "unitAlias": ""
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/math/SafeMath.sol",
        "file": "zeppelin-solidity/contracts/math/SafeMath.sol",
        "id": 3870,
        "nodeType": "ImportDirective",
        "scope": 3914,
        "sourceUnit": 6746,
        "src": "717:73:24",
        "symbolAliases": [
          {
            "foreign": 3869,
            "local": null
          }
        ],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": "@title ExchangeHandler\n@author Set Protocol\n * This library contains functions and structs to assist with parsing exchange orders data",
        "fullyImplemented": true,
        "id": 3913,
        "linearizedBaseContracts": [
          3913
        ],
        "name": "ExchangeHandler",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 3873,
            "libraryName": {
              "contractScope": null,
              "id": 3871,
              "name": "LibBytes",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 4853,
              "src": "981:8:24",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_LibBytes_$4853",
                "typeString": "library LibBytes"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "975:25:24",
            "typeName": {
              "id": 3872,
              "name": "bytes",
              "nodeType": "ElementaryTypeName",
              "src": "994:5:24",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes_storage_ptr",
                "typeString": "bytes"
              }
            }
          },
          {
            "id": 3876,
            "libraryName": {
              "contractScope": null,
              "id": 3874,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 6745,
              "src": "1011:8:24",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$6745",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "1005:27:24",
            "typeName": {
              "id": 3875,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1024:7:24",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "canonicalName": "ExchangeHandler.ExchangeHeader",
            "id": 3887,
            "members": [
              {
                "constant": false,
                "id": 3878,
                "name": "exchange",
                "nodeType": "VariableDeclaration",
                "scope": 3887,
                "src": "1112:14:24",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint8",
                  "typeString": "uint8"
                },
                "typeName": {
                  "id": 3877,
                  "name": "uint8",
                  "nodeType": "ElementaryTypeName",
                  "src": "1112:5:24",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 3880,
                "name": "orderCount",
                "nodeType": "VariableDeclaration",
                "scope": 3887,
                "src": "1136:16:24",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint8",
                  "typeString": "uint8"
                },
                "typeName": {
                  "id": 3879,
                  "name": "uint8",
                  "nodeType": "ElementaryTypeName",
                  "src": "1136:5:24",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 3882,
                "name": "makerTokenAddress",
                "nodeType": "VariableDeclaration",
                "scope": 3887,
                "src": "1162:25:24",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 3881,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "1162:7:24",
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
                "id": 3884,
                "name": "makerTokenAmount",
                "nodeType": "VariableDeclaration",
                "scope": 3887,
                "src": "1197:24:24",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 3883,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1197:7:24",
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
                "id": 3886,
                "name": "totalOrdersLength",
                "nodeType": "VariableDeclaration",
                "scope": 3887,
                "src": "1231:25:24",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 3885,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1231:7:24",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "ExchangeHeader",
            "nodeType": "StructDefinition",
            "scope": 3913,
            "src": "1080:183:24",
            "visibility": "public"
          },
          {
            "body": {
              "id": 3911,
              "nodeType": "Block",
              "src": "1721:620:24",
              "statements": [
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 3897,
                      "name": "header",
                      "nodeType": "VariableDeclaration",
                      "scope": 3912,
                      "src": "1731:28:24",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_ExchangeHeader_$3887_memory_ptr",
                        "typeString": "struct ExchangeHandler.ExchangeHeader"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 3896,
                        "name": "ExchangeHeader",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 3887,
                        "src": "1731:14:24",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ExchangeHeader_$3887_storage_ptr",
                          "typeString": "struct ExchangeHandler.ExchangeHeader"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 3898,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1731:28:24"
                },
                {
                  "assignments": [
                    3900
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 3900,
                      "name": "headerDataStart",
                      "nodeType": "VariableDeclaration",
                      "scope": 3912,
                      "src": "1770:23:24",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 3899,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1770:7:24",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 3907,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3905,
                        "name": "_offset",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3891,
                        "src": "1829:7:24",
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
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "expression": {
                            "argumentTypes": null,
                            "id": 3901,
                            "name": "_headerData",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3889,
                            "src": "1796:11:24",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          },
                          "id": 3902,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "contentAddress",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 4720,
                          "src": "1796:26:24",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$_t_uint256_$bound_to$_t_bytes_memory_ptr_$",
                            "typeString": "function (bytes memory) pure returns (uint256)"
                          }
                        },
                        "id": 3903,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1796:28:24",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 3904,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "add",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6744,
                      "src": "1796:32:24",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 3906,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1796:41:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1770:67:24"
                },
                {
                  "externalReferences": [
                    {
                      "header": {
                        "declaration": 3897,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "1878:6:24",
                        "valueSize": 1
                      }
                    },
                    {
                      "headerDataStart": {
                        "declaration": 3900,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "1901:15:24",
                        "valueSize": 1
                      }
                    },
                    {
                      "header": {
                        "declaration": 3897,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "1965:6:24",
                        "valueSize": 1
                      }
                    },
                    {
                      "headerDataStart": {
                        "declaration": 3900,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "1988:15:24",
                        "valueSize": 1
                      }
                    },
                    {
                      "header": {
                        "declaration": 3897,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "2050:6:24",
                        "valueSize": 1
                      }
                    },
                    {
                      "headerDataStart": {
                        "declaration": 3900,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "2073:15:24",
                        "valueSize": 1
                      }
                    },
                    {
                      "header": {
                        "declaration": 3897,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "2142:6:24",
                        "valueSize": 1
                      }
                    },
                    {
                      "header": {
                        "declaration": 3897,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "2233:6:24",
                        "valueSize": 1
                      }
                    },
                    {
                      "headerDataStart": {
                        "declaration": 3900,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "2165:15:24",
                        "valueSize": 1
                      }
                    },
                    {
                      "headerDataStart": {
                        "declaration": 3900,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "2257:15:24",
                        "valueSize": 1
                      }
                    }
                  ],
                  "id": 3908,
                  "nodeType": "InlineAssembly",
                  "operations": "{\n    mstore(header, mload(headerDataStart))\n    mstore(add(header, 32), mload(add(headerDataStart, 32)))\n    mstore(add(header, 64), mload(add(headerDataStart, 64)))\n    mstore(add(header, 96), mload(add(headerDataStart, 96)))\n    mstore(add(header, 128), mload(add(headerDataStart, 128)))\n}",
                  "src": "1848:479:24"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 3909,
                    "name": "header",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 3897,
                    "src": "2328:6:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_ExchangeHeader_$3887_memory_ptr",
                      "typeString": "struct ExchangeHandler.ExchangeHeader memory"
                    }
                  },
                  "functionReturnParameters": 3895,
                  "id": 3910,
                  "nodeType": "Return",
                  "src": "2321:13:24"
                }
              ]
            },
            "documentation": "Function to convert bytes into ExchangeHeader\n     * @param _headerData      Bytes representing the order body information\n@return ExchangeHeader  Struct containing data for a batch of exchange orders",
            "id": 3912,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "parseExchangeHeader",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3892,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3889,
                  "name": "_headerData",
                  "nodeType": "VariableDeclaration",
                  "scope": 3912,
                  "src": "1598:17:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 3888,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1598:5:24",
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
                  "id": 3891,
                  "name": "_offset",
                  "nodeType": "VariableDeclaration",
                  "scope": 3912,
                  "src": "1625:15:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3890,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1625:7:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1588:58:24"
            },
            "payable": false,
            "returnParameters": {
              "id": 3895,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3894,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 3912,
                  "src": "1694:14:24",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_ExchangeHeader_$3887_memory_ptr",
                    "typeString": "struct ExchangeHandler.ExchangeHeader"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 3893,
                    "name": "ExchangeHeader",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 3887,
                    "src": "1694:14:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_ExchangeHeader_$3887_storage_ptr",
                      "typeString": "struct ExchangeHandler.ExchangeHeader"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1693:23:24"
            },
            "scope": 3913,
            "src": "1560:781:24",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 3914,
        "src": "945:1398:24"
      }
    ],
    "src": "597:1747:24"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.0",
  "updatedAt": "2018-08-10T21:21:49.367Z"
}