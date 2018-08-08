export const ISetFactory = 
{
  "contractName": "ISetFactory",
  "abi": [
    {
      "constant": false,
      "inputs": [],
      "name": "core",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_components",
          "type": "address[]"
        },
        {
          "name": "_units",
          "type": "uint256[]"
        },
        {
          "name": "_naturalUnit",
          "type": "uint256"
        },
        {
          "name": "_name",
          "type": "string"
        },
        {
          "name": "_symbol",
          "type": "string"
        }
      ],
      "name": "create",
      "outputs": [
        {
          "name": "",
          "type": "address"
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
  "source": "/*\n    Copyright 2018 Set Labs Inc.\n\n    Licensed under the Apache License, Version 2.0 (the \"License\");\n    you may not use this file except in compliance with the License.\n    You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n    Unless required by applicable law or agreed to in writing, software\n    distributed under the License is distributed on an \"AS IS\" BASIS,\n    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n    See the License for the specific language governing permissions and\n    limitations under the License.\n*/\n\npragma solidity 0.4.24;\n\n\n/**\n * @title ISetFactory\n * @author Set Protocol\n *\n * The ISetFactory interface provides operability for authorized contracts\n * to interact with SetTokenFactory\n */\ninterface ISetFactory {\n\n    /* ============ External Functions ============ */\n\n    /**\n     * Return core address\n     *\n     * @return address        core address\n     */\n    function core() external returns (address);\n\n    /**\n     * Deploys a new Set Token and adds it to the valid list of SetTokens\n     *\n     * @param  _components           The address of component tokens\n     * @param  _units                The units of each component token\n     * @param  _naturalUnit          The minimum unit to be issued or redeemed\n     * @param  _name                 The name of the new Set\n     * @param  _symbol               The symbol of the new Set\n     * @return setTokenAddress       The address of the new Set\n     */\n    function create(\n        address[] _components,\n        uint[] _units,\n        uint _naturalUnit,\n        string _name,\n        string _symbol\n    )\n        external\n        returns (address);\n}\n",
  "sourcePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/core/interfaces/ISetFactory.sol",
  "ast": {
    "absolutePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/core/interfaces/ISetFactory.sol",
    "exportedSymbols": {
      "ISetFactory": [
        2520
      ]
    },
    "id": 2521,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 2497,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "597:23:12"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": "@title ISetFactory\n@author Set Protocol\n * The ISetFactory interface provides operability for authorized contracts\nto interact with SetTokenFactory",
        "fullyImplemented": false,
        "id": 2520,
        "linearizedBaseContracts": [
          2520
        ],
        "name": "ISetFactory",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": "Return core address\n     * @return address        core address",
            "id": 2502,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "core",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2498,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "982:2:12"
            },
            "payable": false,
            "returnParameters": {
              "id": 2501,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2500,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2502,
                  "src": "1003:7:12",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2499,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1003:7:12",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1002:9:12"
            },
            "scope": 2520,
            "src": "969:43:12",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": "Deploys a new Set Token and adds it to the valid list of SetTokens\n     * @param  _components           The address of component tokens\n@param  _units                The units of each component token\n@param  _naturalUnit          The minimum unit to be issued or redeemed\n@param  _name                 The name of the new Set\n@param  _symbol               The symbol of the new Set\n@return setTokenAddress       The address of the new Set",
            "id": 2519,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "create",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2515,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2505,
                  "name": "_components",
                  "nodeType": "VariableDeclaration",
                  "scope": 2519,
                  "src": "1547:21:12",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 2503,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1547:7:12",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 2504,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "1547:9:12",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2508,
                  "name": "_units",
                  "nodeType": "VariableDeclaration",
                  "scope": 2519,
                  "src": "1578:13:12",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 2506,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "1578:4:12",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 2507,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "1578:6:12",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2510,
                  "name": "_naturalUnit",
                  "nodeType": "VariableDeclaration",
                  "scope": 2519,
                  "src": "1601:17:12",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2509,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1601:4:12",
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
                  "id": 2512,
                  "name": "_name",
                  "nodeType": "VariableDeclaration",
                  "scope": 2519,
                  "src": "1628:12:12",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 2511,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1628:6:12",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2514,
                  "name": "_symbol",
                  "nodeType": "VariableDeclaration",
                  "scope": 2519,
                  "src": "1650:14:12",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 2513,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1650:6:12",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1537:133:12"
            },
            "payable": false,
            "returnParameters": {
              "id": 2518,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2517,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2519,
                  "src": "1705:7:12",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2516,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1705:7:12",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1704:9:12"
            },
            "scope": 2520,
            "src": "1522:192:12",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 2521,
        "src": "791:925:12"
      }
    ],
    "src": "597:1120:12"
  },
  "legacyAST": {
    "absolutePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/core/interfaces/ISetFactory.sol",
    "exportedSymbols": {
      "ISetFactory": [
        2520
      ]
    },
    "id": 2521,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 2497,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "597:23:12"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": "@title ISetFactory\n@author Set Protocol\n * The ISetFactory interface provides operability for authorized contracts\nto interact with SetTokenFactory",
        "fullyImplemented": false,
        "id": 2520,
        "linearizedBaseContracts": [
          2520
        ],
        "name": "ISetFactory",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": "Return core address\n     * @return address        core address",
            "id": 2502,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "core",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2498,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "982:2:12"
            },
            "payable": false,
            "returnParameters": {
              "id": 2501,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2500,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2502,
                  "src": "1003:7:12",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2499,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1003:7:12",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1002:9:12"
            },
            "scope": 2520,
            "src": "969:43:12",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": "Deploys a new Set Token and adds it to the valid list of SetTokens\n     * @param  _components           The address of component tokens\n@param  _units                The units of each component token\n@param  _naturalUnit          The minimum unit to be issued or redeemed\n@param  _name                 The name of the new Set\n@param  _symbol               The symbol of the new Set\n@return setTokenAddress       The address of the new Set",
            "id": 2519,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "create",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2515,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2505,
                  "name": "_components",
                  "nodeType": "VariableDeclaration",
                  "scope": 2519,
                  "src": "1547:21:12",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 2503,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1547:7:12",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 2504,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "1547:9:12",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2508,
                  "name": "_units",
                  "nodeType": "VariableDeclaration",
                  "scope": 2519,
                  "src": "1578:13:12",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 2506,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "1578:4:12",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 2507,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "1578:6:12",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2510,
                  "name": "_naturalUnit",
                  "nodeType": "VariableDeclaration",
                  "scope": 2519,
                  "src": "1601:17:12",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2509,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1601:4:12",
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
                  "id": 2512,
                  "name": "_name",
                  "nodeType": "VariableDeclaration",
                  "scope": 2519,
                  "src": "1628:12:12",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 2511,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1628:6:12",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2514,
                  "name": "_symbol",
                  "nodeType": "VariableDeclaration",
                  "scope": 2519,
                  "src": "1650:14:12",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 2513,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1650:6:12",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1537:133:12"
            },
            "payable": false,
            "returnParameters": {
              "id": 2518,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2517,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2519,
                  "src": "1705:7:12",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2516,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1705:7:12",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1704:9:12"
            },
            "scope": 2520,
            "src": "1522:192:12",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 2521,
        "src": "791:925:12"
      }
    ],
    "src": "597:1120:12"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.0",
  "updatedAt": "2018-08-08T05:31:02.861Z"
}