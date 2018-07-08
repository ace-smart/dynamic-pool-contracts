export const ExchangeHandler = 
{
  "contractName": "ExchangeHandler",
  "abi": [],
  "bytecode": "0x605a602c600b82828239805160001a60731460008114601c57601e565bfe5b5030600052607381538281f30073000000000000000000000000000000000000000030146080604052600080fd00a265627a7a72305820fff4eff355cc38b6e4107c0402e6605f5b4d7f19acb7013573fb7e0e427acbed6c6578706572696d656e74616cf50037",
  "deployedBytecode": "0x73000000000000000000000000000000000000000030146080604052600080fd00a265627a7a72305820fff4eff355cc38b6e4107c0402e6605f5b4d7f19acb7013573fb7e0e427acbed6c6578706572696d656e74616cf50037",
  "sourceMap": "811:1102:24:-;;132:2:-1;166:7;155:9;146:7;137:37;252:7;246:14;243:1;238:23;232:4;229:33;270:1;265:20;;;;222:63;;265:20;274:9;222:63;;298:9;295:1;288:20;328:4;319:7;311:22;352:7;343;336:24",
  "deployedSourceMap": "811:1102:24:-;;;;;;;;",
  "source": "/*\n    Copyright 2018 Set Labs Inc.\n\n    Licensed under the Apache License, Version 2.0 (the \"License\");\n    you may not use this file except in compliance with the License.\n    You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n    Unless required by applicable law or agreed to in writing, software\n    distributed under the License is distributed on an \"AS IS\" BASIS,\n    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n    See the License for the specific language governing permissions and\n    limitations under the License.\n*/\n\npragma solidity 0.4.24;\npragma experimental \"ABIEncoderV2\";\n\n\n/**\n * @title ExchangeHandler\n * @author Set Protocol\n *\n * This library contains functions and structs to assist with parsing exchange orders data\n */\nlibrary ExchangeHandler {\n\n    // ============ Structs ============\n\n    struct ExchangeHeader {\n        uint8 exchange;\n        address makerTokenAddress;\n        uint256 makerTokenAmount;\n        uint256 totalOrdersLength;\n    }\n\n    // ============ Internal Functions ============\n\n    /**\n     * Function to convert bytes into ExchangeHeader\n     *\n     * @param _headerData      Bytes representing the order body information\n     * @return ExchangeHeader  Struct containing data for a batch of exchange orders\n     */\n    function parseExchangeHeader(\n        bytes _headerData\n    )\n        internal\n        pure\n        returns (ExchangeHeader memory)\n    {\n        ExchangeHeader memory header;\n\n        assembly {\n            mstore(header,          mload(add(_headerData, 32)))  // exchange\n            mstore(add(header, 32), mload(add(_headerData, 64)))  // makerTokenAddress\n            mstore(add(header, 64), mload(add(_headerData, 96)))  // makerTokenAmount\n            mstore(add(header, 96), mload(add(_headerData, 128))) // totalOrdersLength\n        }\n\n        return header;\n    }\n}\n",
  "sourcePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/core/lib/ExchangeHandler.sol",
  "ast": {
    "absolutePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/core/lib/ExchangeHandler.sol",
    "exportedSymbols": {
      "ExchangeHandler": [
        3287
      ]
    },
    "id": 3288,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 3262,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "597:23:24"
      },
      {
        "id": 3263,
        "literals": [
          "experimental",
          "ABIEncoderV2"
        ],
        "nodeType": "PragmaDirective",
        "src": "621:35:24"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": "@title ExchangeHandler\n@author Set Protocol\n * This library contains functions and structs to assist with parsing exchange orders data",
        "fullyImplemented": true,
        "id": 3287,
        "linearizedBaseContracts": [
          3287
        ],
        "name": "ExchangeHandler",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "canonicalName": "ExchangeHandler.ExchangeHeader",
            "id": 3272,
            "members": [
              {
                "constant": false,
                "id": 3265,
                "name": "exchange",
                "nodeType": "VariableDeclaration",
                "scope": 3272,
                "src": "916:14:24",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint8",
                  "typeString": "uint8"
                },
                "typeName": {
                  "id": 3264,
                  "name": "uint8",
                  "nodeType": "ElementaryTypeName",
                  "src": "916:5:24",
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
                "id": 3267,
                "name": "makerTokenAddress",
                "nodeType": "VariableDeclaration",
                "scope": 3272,
                "src": "940:25:24",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 3266,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "940:7:24",
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
                "id": 3269,
                "name": "makerTokenAmount",
                "nodeType": "VariableDeclaration",
                "scope": 3272,
                "src": "975:24:24",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 3268,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "975:7:24",
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
                "id": 3271,
                "name": "totalOrdersLength",
                "nodeType": "VariableDeclaration",
                "scope": 3272,
                "src": "1009:25:24",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 3270,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1009:7:24",
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
            "scope": 3287,
            "src": "884:157:24",
            "visibility": "public"
          },
          {
            "body": {
              "id": 3285,
              "nodeType": "Block",
              "src": "1474:437:24",
              "statements": [
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 3280,
                      "name": "header",
                      "nodeType": "VariableDeclaration",
                      "scope": 3286,
                      "src": "1484:28:24",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_ExchangeHeader_$3272_memory_ptr",
                        "typeString": "struct ExchangeHandler.ExchangeHeader"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 3279,
                        "name": "ExchangeHeader",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 3272,
                        "src": "1484:14:24",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ExchangeHeader_$3272_storage_ptr",
                          "typeString": "struct ExchangeHandler.ExchangeHeader"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 3281,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1484:28:24"
                },
                {
                  "externalReferences": [
                    {
                      "_headerData": {
                        "declaration": 3274,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "1580:11:24",
                        "valueSize": 1
                      }
                    },
                    {
                      "header": {
                        "declaration": 3280,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "1553:6:24",
                        "valueSize": 1
                      }
                    },
                    {
                      "header": {
                        "declaration": 3280,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "1635:6:24",
                        "valueSize": 1
                      }
                    },
                    {
                      "_headerData": {
                        "declaration": 3274,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "1658:11:24",
                        "valueSize": 1
                      }
                    },
                    {
                      "header": {
                        "declaration": 3280,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "1722:6:24",
                        "valueSize": 1
                      }
                    },
                    {
                      "header": {
                        "declaration": 3280,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "1808:6:24",
                        "valueSize": 1
                      }
                    },
                    {
                      "_headerData": {
                        "declaration": 3274,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "1745:11:24",
                        "valueSize": 1
                      }
                    },
                    {
                      "_headerData": {
                        "declaration": 3274,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "1831:11:24",
                        "valueSize": 1
                      }
                    }
                  ],
                  "id": 3282,
                  "nodeType": "InlineAssembly",
                  "operations": "{\n    mstore(header, mload(add(_headerData, 32)))\n    mstore(add(header, 32), mload(add(_headerData, 64)))\n    mstore(add(header, 64), mload(add(_headerData, 96)))\n    mstore(add(header, 96), mload(add(_headerData, 128)))\n}",
                  "src": "1523:374:24"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 3283,
                    "name": "header",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 3280,
                    "src": "1898:6:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_ExchangeHeader_$3272_memory_ptr",
                      "typeString": "struct ExchangeHandler.ExchangeHeader memory"
                    }
                  },
                  "functionReturnParameters": 3278,
                  "id": 3284,
                  "nodeType": "Return",
                  "src": "1891:13:24"
                }
              ]
            },
            "documentation": "Function to convert bytes into ExchangeHeader\n     * @param _headerData      Bytes representing the order body information\n@return ExchangeHeader  Struct containing data for a batch of exchange orders",
            "id": 3286,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "parseExchangeHeader",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3275,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3274,
                  "name": "_headerData",
                  "nodeType": "VariableDeclaration",
                  "scope": 3286,
                  "src": "1376:17:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 3273,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1376:5:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1366:33:24"
            },
            "payable": false,
            "returnParameters": {
              "id": 3278,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3277,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 3286,
                  "src": "1447:14:24",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_ExchangeHeader_$3272_memory_ptr",
                    "typeString": "struct ExchangeHandler.ExchangeHeader"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 3276,
                    "name": "ExchangeHeader",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 3272,
                    "src": "1447:14:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_ExchangeHeader_$3272_storage_ptr",
                      "typeString": "struct ExchangeHandler.ExchangeHeader"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1446:23:24"
            },
            "scope": 3287,
            "src": "1338:573:24",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 3288,
        "src": "811:1102:24"
      }
    ],
    "src": "597:1317:24"
  },
  "legacyAST": {
    "absolutePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/core/lib/ExchangeHandler.sol",
    "exportedSymbols": {
      "ExchangeHandler": [
        3287
      ]
    },
    "id": 3288,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 3262,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "597:23:24"
      },
      {
        "id": 3263,
        "literals": [
          "experimental",
          "ABIEncoderV2"
        ],
        "nodeType": "PragmaDirective",
        "src": "621:35:24"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": "@title ExchangeHandler\n@author Set Protocol\n * This library contains functions and structs to assist with parsing exchange orders data",
        "fullyImplemented": true,
        "id": 3287,
        "linearizedBaseContracts": [
          3287
        ],
        "name": "ExchangeHandler",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "canonicalName": "ExchangeHandler.ExchangeHeader",
            "id": 3272,
            "members": [
              {
                "constant": false,
                "id": 3265,
                "name": "exchange",
                "nodeType": "VariableDeclaration",
                "scope": 3272,
                "src": "916:14:24",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint8",
                  "typeString": "uint8"
                },
                "typeName": {
                  "id": 3264,
                  "name": "uint8",
                  "nodeType": "ElementaryTypeName",
                  "src": "916:5:24",
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
                "id": 3267,
                "name": "makerTokenAddress",
                "nodeType": "VariableDeclaration",
                "scope": 3272,
                "src": "940:25:24",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 3266,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "940:7:24",
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
                "id": 3269,
                "name": "makerTokenAmount",
                "nodeType": "VariableDeclaration",
                "scope": 3272,
                "src": "975:24:24",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 3268,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "975:7:24",
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
                "id": 3271,
                "name": "totalOrdersLength",
                "nodeType": "VariableDeclaration",
                "scope": 3272,
                "src": "1009:25:24",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 3270,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1009:7:24",
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
            "scope": 3287,
            "src": "884:157:24",
            "visibility": "public"
          },
          {
            "body": {
              "id": 3285,
              "nodeType": "Block",
              "src": "1474:437:24",
              "statements": [
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 3280,
                      "name": "header",
                      "nodeType": "VariableDeclaration",
                      "scope": 3286,
                      "src": "1484:28:24",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_ExchangeHeader_$3272_memory_ptr",
                        "typeString": "struct ExchangeHandler.ExchangeHeader"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 3279,
                        "name": "ExchangeHeader",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 3272,
                        "src": "1484:14:24",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ExchangeHeader_$3272_storage_ptr",
                          "typeString": "struct ExchangeHandler.ExchangeHeader"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 3281,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1484:28:24"
                },
                {
                  "externalReferences": [
                    {
                      "_headerData": {
                        "declaration": 3274,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "1580:11:24",
                        "valueSize": 1
                      }
                    },
                    {
                      "header": {
                        "declaration": 3280,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "1553:6:24",
                        "valueSize": 1
                      }
                    },
                    {
                      "header": {
                        "declaration": 3280,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "1635:6:24",
                        "valueSize": 1
                      }
                    },
                    {
                      "_headerData": {
                        "declaration": 3274,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "1658:11:24",
                        "valueSize": 1
                      }
                    },
                    {
                      "header": {
                        "declaration": 3280,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "1722:6:24",
                        "valueSize": 1
                      }
                    },
                    {
                      "header": {
                        "declaration": 3280,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "1808:6:24",
                        "valueSize": 1
                      }
                    },
                    {
                      "_headerData": {
                        "declaration": 3274,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "1745:11:24",
                        "valueSize": 1
                      }
                    },
                    {
                      "_headerData": {
                        "declaration": 3274,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "1831:11:24",
                        "valueSize": 1
                      }
                    }
                  ],
                  "id": 3282,
                  "nodeType": "InlineAssembly",
                  "operations": "{\n    mstore(header, mload(add(_headerData, 32)))\n    mstore(add(header, 32), mload(add(_headerData, 64)))\n    mstore(add(header, 64), mload(add(_headerData, 96)))\n    mstore(add(header, 96), mload(add(_headerData, 128)))\n}",
                  "src": "1523:374:24"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 3283,
                    "name": "header",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 3280,
                    "src": "1898:6:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_ExchangeHeader_$3272_memory_ptr",
                      "typeString": "struct ExchangeHandler.ExchangeHeader memory"
                    }
                  },
                  "functionReturnParameters": 3278,
                  "id": 3284,
                  "nodeType": "Return",
                  "src": "1891:13:24"
                }
              ]
            },
            "documentation": "Function to convert bytes into ExchangeHeader\n     * @param _headerData      Bytes representing the order body information\n@return ExchangeHeader  Struct containing data for a batch of exchange orders",
            "id": 3286,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "parseExchangeHeader",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3275,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3274,
                  "name": "_headerData",
                  "nodeType": "VariableDeclaration",
                  "scope": 3286,
                  "src": "1376:17:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 3273,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1376:5:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1366:33:24"
            },
            "payable": false,
            "returnParameters": {
              "id": 3278,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3277,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 3286,
                  "src": "1447:14:24",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_ExchangeHeader_$3272_memory_ptr",
                    "typeString": "struct ExchangeHandler.ExchangeHeader"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 3276,
                    "name": "ExchangeHeader",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 3272,
                    "src": "1447:14:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_ExchangeHeader_$3272_storage_ptr",
                      "typeString": "struct ExchangeHandler.ExchangeHeader"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1446:23:24"
            },
            "scope": 3287,
            "src": "1338:573:24",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 3288,
        "src": "811:1102:24"
      }
    ],
    "src": "597:1317:24"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.0",
  "updatedAt": "2018-07-08T01:11:15.198Z"
}