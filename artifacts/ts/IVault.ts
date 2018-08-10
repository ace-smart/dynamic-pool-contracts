export const IVault = 
{
  "contractName": "IVault",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "_token",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_quantity",
          "type": "uint256"
        }
      ],
      "name": "withdrawTo",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        },
        {
          "name": "_token",
          "type": "address"
        },
        {
          "name": "_quantity",
          "type": "uint256"
        }
      ],
      "name": "incrementTokenOwner",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        },
        {
          "name": "_token",
          "type": "address"
        },
        {
          "name": "_quantity",
          "type": "uint256"
        }
      ],
      "name": "decrementTokenOwner",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_token",
          "type": "address"
        },
        {
          "name": "_quantity",
          "type": "uint256"
        }
      ],
      "name": "transferBalance",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        },
        {
          "name": "_token",
          "type": "address"
        }
      ],
      "name": "getOwnerBalance",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "/*\n    Copyright 2018 Set Labs Inc.\n\n    Licensed under the Apache License, Version 2.0 (the \"License\");\n    you may not use this file except in compliance with the License.\n    You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n    Unless required by applicable law or agreed to in writing, software\n    distributed under the License is distributed on an \"AS IS\" BASIS,\n    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n    See the License for the specific language governing permissions and\n    limitations under the License.\n*/\n\npragma solidity 0.4.24;\n\n/**\n * @title IVault\n * @author Set Protocol\n *\n * The IVault interface provides a light-weight, structured way to interact with the Vault\n * contract from another contract.\n */\ninterface IVault {\n\n    /*\n     * Withdraws user's unassociated tokens to user account. Can only be\n     * called by authorized core contracts.\n     *\n     * @param  _token          The address of the ERC20 token\n     * @param  _to             The address to transfer token to\n     * @param  _quantity       The number of tokens to transfer\n     */\n    function withdrawTo(\n        address _token,\n        address _to,\n        uint256 _quantity\n    )\n        external;\n\n    /*\n     * Increment quantity owned of a token for a given address. Can\n     * only be called by authorized core contracts.\n     *\n     * @param  _owner           The address of the token owner\n     * @param  _token           The address of the ERC20 token\n     * @param  _quantity        The number of tokens to attribute to owner\n     */\n    function incrementTokenOwner(\n        address _owner,\n        address _token,\n        uint256 _quantity\n    )\n        external;\n\n    /*\n     * Decrement quantity owned of a token for a given address. Can only\n     * be called by authorized core contracts.\n     *\n     * @param  _owner           The address of the token owner\n     * @param  _token           The address of the ERC20 token\n     * @param  _quantity        The number of tokens to deattribute to owner\n     */\n    function decrementTokenOwner(\n        address _owner,\n        address _token,\n        uint256 _quantity\n    )\n        external;\n\n    /**\n     * Transfers tokens associated with one account to another account in the vault\n     *\n     * @param  _to             Address token being transferred to\n     * @param  _from           Address token being transferred from\n     * @param  _token          Address of token being transferred\n     * @param  _quantity       Amount of tokens being transferred\n     */\n\n    function transferBalance(\n        address _to,\n        address _from,\n        address _token,\n        uint256 _quantity\n    )\n        external;\n\n    /*\n     * Get balance of particular contract for owner.\n     *\n     * @param  _owner    The address of the token owner\n     * @param  _token    The address of the ERC20 token\n     */\n    function getOwnerBalance(\n        address _owner,\n        address _token\n    )\n        external\n        returns (uint256);\n}\n",
  "sourcePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/core/interfaces/IVault.sol",
  "ast": {
    "absolutePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/core/interfaces/IVault.sol",
    "exportedSymbols": {
      "IVault": [
        3740
      ]
    },
    "id": 3741,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 3692,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "597:23:22"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": "@title IVault\n@author Set Protocol\n * The IVault interface provides a light-weight, structured way to interact with the Vault\ncontract from another contract.",
        "fullyImplemented": false,
        "id": 3740,
        "linearizedBaseContracts": [
          3740
        ],
        "name": "IVault",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 3701,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "withdrawTo",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3699,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3694,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 3701,
                  "src": "1182:14:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3693,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1182:7:22",
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
                  "id": 3696,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 3701,
                  "src": "1206:11:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3695,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1206:7:22",
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
                  "id": 3698,
                  "name": "_quantity",
                  "nodeType": "VariableDeclaration",
                  "scope": 3701,
                  "src": "1227:17:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3697,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1227:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1172:78:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 3700,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1267:0:22"
            },
            "scope": 3740,
            "src": "1153:115:22",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 3710,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "incrementTokenOwner",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3708,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3703,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 3710,
                  "src": "1655:14:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3702,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1655:7:22",
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
                  "id": 3705,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 3710,
                  "src": "1679:14:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3704,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1679:7:22",
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
                  "id": 3707,
                  "name": "_quantity",
                  "nodeType": "VariableDeclaration",
                  "scope": 3710,
                  "src": "1703:17:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3706,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1703:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1645:81:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 3709,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1743:0:22"
            },
            "scope": 3740,
            "src": "1617:127:22",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 3719,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "decrementTokenOwner",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3717,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3712,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 3719,
                  "src": "2133:14:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3711,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2133:7:22",
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
                  "id": 3714,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 3719,
                  "src": "2157:14:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3713,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2157:7:22",
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
                  "id": 3716,
                  "name": "_quantity",
                  "nodeType": "VariableDeclaration",
                  "scope": 3719,
                  "src": "2181:17:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3715,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2181:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2123:81:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 3718,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2221:0:22"
            },
            "scope": 3740,
            "src": "2095:127:22",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": "Transfers tokens associated with one account to another account in the vault\n     * @param  _to             Address token being transferred to\n@param  _from           Address token being transferred from\n@param  _token          Address of token being transferred\n@param  _quantity       Amount of tokens being transferred",
            "id": 3730,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferBalance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3728,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3721,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 3730,
                  "src": "2636:11:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3720,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2636:7:22",
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
                  "id": 3723,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 3730,
                  "src": "2657:13:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3722,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2657:7:22",
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
                  "id": 3725,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 3730,
                  "src": "2680:14:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3724,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2680:7:22",
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
                  "id": 3727,
                  "name": "_quantity",
                  "nodeType": "VariableDeclaration",
                  "scope": 3730,
                  "src": "2704:17:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3726,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2704:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2626:101:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 3729,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2744:0:22"
            },
            "scope": 3740,
            "src": "2602:143:22",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 3739,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "getOwnerBalance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3735,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3732,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 3739,
                  "src": "2972:14:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3731,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2972:7:22",
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
                  "id": 3734,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 3739,
                  "src": "2996:14:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3733,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2996:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2962:54:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 3738,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3737,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 3739,
                  "src": "3051:7:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3736,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3051:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3050:9:22"
            },
            "scope": 3740,
            "src": "2938:122:22",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 3741,
        "src": "800:2262:22"
      }
    ],
    "src": "597:2466:22"
  },
  "legacyAST": {
    "absolutePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/core/interfaces/IVault.sol",
    "exportedSymbols": {
      "IVault": [
        3740
      ]
    },
    "id": 3741,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 3692,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "597:23:22"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": "@title IVault\n@author Set Protocol\n * The IVault interface provides a light-weight, structured way to interact with the Vault\ncontract from another contract.",
        "fullyImplemented": false,
        "id": 3740,
        "linearizedBaseContracts": [
          3740
        ],
        "name": "IVault",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 3701,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "withdrawTo",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3699,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3694,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 3701,
                  "src": "1182:14:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3693,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1182:7:22",
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
                  "id": 3696,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 3701,
                  "src": "1206:11:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3695,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1206:7:22",
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
                  "id": 3698,
                  "name": "_quantity",
                  "nodeType": "VariableDeclaration",
                  "scope": 3701,
                  "src": "1227:17:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3697,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1227:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1172:78:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 3700,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1267:0:22"
            },
            "scope": 3740,
            "src": "1153:115:22",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 3710,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "incrementTokenOwner",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3708,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3703,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 3710,
                  "src": "1655:14:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3702,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1655:7:22",
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
                  "id": 3705,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 3710,
                  "src": "1679:14:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3704,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1679:7:22",
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
                  "id": 3707,
                  "name": "_quantity",
                  "nodeType": "VariableDeclaration",
                  "scope": 3710,
                  "src": "1703:17:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3706,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1703:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1645:81:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 3709,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1743:0:22"
            },
            "scope": 3740,
            "src": "1617:127:22",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 3719,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "decrementTokenOwner",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3717,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3712,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 3719,
                  "src": "2133:14:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3711,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2133:7:22",
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
                  "id": 3714,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 3719,
                  "src": "2157:14:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3713,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2157:7:22",
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
                  "id": 3716,
                  "name": "_quantity",
                  "nodeType": "VariableDeclaration",
                  "scope": 3719,
                  "src": "2181:17:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3715,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2181:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2123:81:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 3718,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2221:0:22"
            },
            "scope": 3740,
            "src": "2095:127:22",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": "Transfers tokens associated with one account to another account in the vault\n     * @param  _to             Address token being transferred to\n@param  _from           Address token being transferred from\n@param  _token          Address of token being transferred\n@param  _quantity       Amount of tokens being transferred",
            "id": 3730,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferBalance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3728,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3721,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 3730,
                  "src": "2636:11:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3720,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2636:7:22",
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
                  "id": 3723,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 3730,
                  "src": "2657:13:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3722,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2657:7:22",
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
                  "id": 3725,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 3730,
                  "src": "2680:14:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3724,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2680:7:22",
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
                  "id": 3727,
                  "name": "_quantity",
                  "nodeType": "VariableDeclaration",
                  "scope": 3730,
                  "src": "2704:17:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3726,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2704:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2626:101:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 3729,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2744:0:22"
            },
            "scope": 3740,
            "src": "2602:143:22",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 3739,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "getOwnerBalance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3735,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3732,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 3739,
                  "src": "2972:14:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3731,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2972:7:22",
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
                  "id": 3734,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 3739,
                  "src": "2996:14:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3733,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2996:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2962:54:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 3738,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3737,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 3739,
                  "src": "3051:7:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3736,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3051:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3050:9:22"
            },
            "scope": 3740,
            "src": "2938:122:22",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 3741,
        "src": "800:2262:22"
      }
    ],
    "src": "597:2466:22"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.0",
  "updatedAt": "2018-08-10T03:42:05.763Z"
}