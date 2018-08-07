export const ISignatureValidator = 
{
  "contractName": "ISignatureValidator",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "hash",
          "type": "bytes32"
        },
        {
          "name": "signerAddress",
          "type": "address"
        },
        {
          "name": "signature",
          "type": "bytes"
        }
      ],
      "name": "preSign",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "validatorAddress",
          "type": "address"
        },
        {
          "name": "approval",
          "type": "bool"
        }
      ],
      "name": "setSignatureValidatorApproval",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "hash",
          "type": "bytes32"
        },
        {
          "name": "signerAddress",
          "type": "address"
        },
        {
          "name": "signature",
          "type": "bytes"
        }
      ],
      "name": "isValidSignature",
      "outputs": [
        {
          "name": "isValid",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "/*\n\n  Copyright 2018 ZeroEx Intl.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n\n*/\n\npragma solidity ^0.4.24;\n\ncontract ISignatureValidator {\n\n    /// @dev Approves a hash on-chain using any valid signature type.\n    ///      After presigning a hash, the preSign signature type will become valid for that hash and signer.\n    /// @param signerAddress Address that should have signed the given hash.\n    /// @param signature Proof that the hash has been signed by signer.\n    function preSign(\n        bytes32 hash,\n        address signerAddress,\n        bytes signature\n    )\n        external;\n    \n    /// @dev Approves/unnapproves a Validator contract to verify signatures on signer's behalf.\n    /// @param validatorAddress Address of Validator contract.\n    /// @param approval Approval or disapproval of  Validator contract.\n    function setSignatureValidatorApproval(\n        address validatorAddress,\n        bool approval\n    )\n        external;\n\n    /// @dev Verifies that a signature is valid.\n    /// @param hash Message hash that is signed.\n    /// @param signerAddress Address of signer.\n    /// @param signature Proof of signing.\n    /// @return Validity of order signature.\n    function isValidSignature(\n        bytes32 hash,\n        address signerAddress,\n        bytes memory signature\n    )\n        public\n        view\n        returns (bool isValid);\n}\n",
  "sourcePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/external/0x/Exchange/interfaces/ISignatureValidator.sol",
  "ast": {
    "absolutePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/external/0x/Exchange/interfaces/ISignatureValidator.sol",
    "exportedSymbols": {
      "ISignatureValidator": [
        2825
      ]
    },
    "id": 2826,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 2797,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "580:24:23"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": false,
        "id": 2825,
        "linearizedBaseContracts": [
          2825
        ],
        "name": "ISignatureValidator",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": "@dev Approves a hash on-chain using any valid signature type.\n      After presigning a hash, the preSign signature type will become valid for that hash and signer.\n @param signerAddress Address that should have signed the given hash.\n @param signature Proof that the hash has been signed by signer.",
            "id": 2806,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "preSign",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2804,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2799,
                  "name": "hash",
                  "nodeType": "VariableDeclaration",
                  "scope": 2806,
                  "src": "996:12:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 2798,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "996:7:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2801,
                  "name": "signerAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 2806,
                  "src": "1018:21:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2800,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1018:7:23",
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
                  "id": 2803,
                  "name": "signature",
                  "nodeType": "VariableDeclaration",
                  "scope": 2806,
                  "src": "1049:15:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 2802,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1049:5:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "986:84:23"
            },
            "payable": false,
            "returnParameters": {
              "id": 2805,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1087:0:23"
            },
            "scope": 2825,
            "src": "970:118:23",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": "@dev Approves/unnapproves a Validator contract to verify signatures on signer's behalf.\n @param validatorAddress Address of Validator contract.\n @param approval Approval or disapproval of  Validator contract.",
            "id": 2813,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setSignatureValidatorApproval",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2811,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2808,
                  "name": "validatorAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 2813,
                  "src": "1377:24:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2807,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1377:7:23",
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
                  "id": 2810,
                  "name": "approval",
                  "nodeType": "VariableDeclaration",
                  "scope": 2813,
                  "src": "1411:13:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 2809,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1411:4:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1367:63:23"
            },
            "payable": false,
            "returnParameters": {
              "id": 2812,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1447:0:23"
            },
            "scope": 2825,
            "src": "1329:119:23",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": "@dev Verifies that a signature is valid.\n @param hash Message hash that is signed.\n @param signerAddress Address of signer.\n @param signature Proof of signing.\n @return Validity of order signature.",
            "id": 2824,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isValidSignature",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2820,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2815,
                  "name": "hash",
                  "nodeType": "VariableDeclaration",
                  "scope": 2824,
                  "src": "1723:12:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 2814,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1723:7:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2817,
                  "name": "signerAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 2824,
                  "src": "1745:21:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2816,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1745:7:23",
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
                  "id": 2819,
                  "name": "signature",
                  "nodeType": "VariableDeclaration",
                  "scope": 2824,
                  "src": "1776:22:23",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 2818,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1776:5:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1713:91:23"
            },
            "payable": false,
            "returnParameters": {
              "id": 2823,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2822,
                  "name": "isValid",
                  "nodeType": "VariableDeclaration",
                  "scope": 2824,
                  "src": "1850:12:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 2821,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1850:4:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1849:14:23"
            },
            "scope": 2825,
            "src": "1688:176:23",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 2826,
        "src": "606:1260:23"
      }
    ],
    "src": "580:1287:23"
  },
  "legacyAST": {
    "absolutePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/external/0x/Exchange/interfaces/ISignatureValidator.sol",
    "exportedSymbols": {
      "ISignatureValidator": [
        2825
      ]
    },
    "id": 2826,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 2797,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "580:24:23"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": false,
        "id": 2825,
        "linearizedBaseContracts": [
          2825
        ],
        "name": "ISignatureValidator",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": "@dev Approves a hash on-chain using any valid signature type.\n      After presigning a hash, the preSign signature type will become valid for that hash and signer.\n @param signerAddress Address that should have signed the given hash.\n @param signature Proof that the hash has been signed by signer.",
            "id": 2806,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "preSign",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2804,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2799,
                  "name": "hash",
                  "nodeType": "VariableDeclaration",
                  "scope": 2806,
                  "src": "996:12:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 2798,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "996:7:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2801,
                  "name": "signerAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 2806,
                  "src": "1018:21:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2800,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1018:7:23",
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
                  "id": 2803,
                  "name": "signature",
                  "nodeType": "VariableDeclaration",
                  "scope": 2806,
                  "src": "1049:15:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 2802,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1049:5:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "986:84:23"
            },
            "payable": false,
            "returnParameters": {
              "id": 2805,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1087:0:23"
            },
            "scope": 2825,
            "src": "970:118:23",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": "@dev Approves/unnapproves a Validator contract to verify signatures on signer's behalf.\n @param validatorAddress Address of Validator contract.\n @param approval Approval or disapproval of  Validator contract.",
            "id": 2813,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setSignatureValidatorApproval",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2811,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2808,
                  "name": "validatorAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 2813,
                  "src": "1377:24:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2807,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1377:7:23",
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
                  "id": 2810,
                  "name": "approval",
                  "nodeType": "VariableDeclaration",
                  "scope": 2813,
                  "src": "1411:13:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 2809,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1411:4:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1367:63:23"
            },
            "payable": false,
            "returnParameters": {
              "id": 2812,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1447:0:23"
            },
            "scope": 2825,
            "src": "1329:119:23",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": "@dev Verifies that a signature is valid.\n @param hash Message hash that is signed.\n @param signerAddress Address of signer.\n @param signature Proof of signing.\n @return Validity of order signature.",
            "id": 2824,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isValidSignature",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2820,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2815,
                  "name": "hash",
                  "nodeType": "VariableDeclaration",
                  "scope": 2824,
                  "src": "1723:12:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 2814,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1723:7:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2817,
                  "name": "signerAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 2824,
                  "src": "1745:21:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2816,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1745:7:23",
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
                  "id": 2819,
                  "name": "signature",
                  "nodeType": "VariableDeclaration",
                  "scope": 2824,
                  "src": "1776:22:23",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 2818,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1776:5:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1713:91:23"
            },
            "payable": false,
            "returnParameters": {
              "id": 2823,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2822,
                  "name": "isValid",
                  "nodeType": "VariableDeclaration",
                  "scope": 2824,
                  "src": "1850:12:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 2821,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1850:4:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1849:14:23"
            },
            "scope": 2825,
            "src": "1688:176:23",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 2826,
        "src": "606:1260:23"
      }
    ],
    "src": "580:1287:23"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.0",
  "updatedAt": "2018-08-07T02:05:30.496Z"
}