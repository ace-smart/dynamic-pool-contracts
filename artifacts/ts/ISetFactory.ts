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
  "source": "/*\n    Copyright 2018 Set Labs Inc.\n\n    Licensed under the Apache License, Version 2.0 (the \"License\");\n    you may not use this file except in compliance with the License.\n    You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n    Unless required by applicable law or agreed to in writing, software\n    distributed under the License is distributed on an \"AS IS\" BASIS,\n    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n    See the License for the specific language governing permissions and\n    limitations under the License.\n*/\n\npragma solidity 0.4.24;\n\n\n/**\n * @title ISetFactory\n * @author Set Protocol\n *\n * The ISetFactory interface provides operability for authorized contracts\n * to interact with SetTokenFactory\n */\ninterface ISetFactory {\n\n    /* ============ External Functions ============ */\n\n    /**\n     * Return core address\n     *\n     * @return address        core address\n     */\n    function core() external returns (address);\n\n    /**\n     * Deploys a new Set Token and adds it to the valid list of SetTokens\n     *\n     * @param  _components           The address of component tokens\n     * @param  _units                The units of each component token\n     * @param  _naturalUnit          The minimum unit to be issued or redeemed\n     * @param  _name                 The name of the new Set\n     * @param  _symbol               The symbol of the new Set\n     * @return setTokenAddress       The address of the new Set\n     */\n    function create(\n        address[] _components,\n        uint[] _units,\n        uint256 _naturalUnit,\n        string _name,\n        string _symbol\n    )\n        external\n        returns (address);\n}\n",
  "sourcePath": "/Users/alexsoong/Source/set-protocol/set-protocol-contracts/contracts/core/interfaces/ISetFactory.sol",
  "ast": {
    "absolutePath": "/Users/alexsoong/Source/set-protocol/set-protocol-contracts/contracts/core/interfaces/ISetFactory.sol",
    "exportedSymbols": {
      "ISetFactory": [
        3626
      ]
    },
    "id": 3627,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 3603,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "597:23:19"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": "@title ISetFactory\n@author Set Protocol\n * The ISetFactory interface provides operability for authorized contracts\nto interact with SetTokenFactory",
        "fullyImplemented": false,
        "id": 3626,
        "linearizedBaseContracts": [
          3626
        ],
        "name": "ISetFactory",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": "Return core address\n     * @return address        core address",
            "id": 3608,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "core",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3604,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "982:2:19"
            },
            "payable": false,
            "returnParameters": {
              "id": 3607,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3606,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 3608,
                  "src": "1003:7:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3605,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1003:7:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1002:9:19"
            },
            "scope": 3626,
            "src": "969:43:19",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": "Deploys a new Set Token and adds it to the valid list of SetTokens\n     * @param  _components           The address of component tokens\n@param  _units                The units of each component token\n@param  _naturalUnit          The minimum unit to be issued or redeemed\n@param  _name                 The name of the new Set\n@param  _symbol               The symbol of the new Set\n@return setTokenAddress       The address of the new Set",
            "id": 3625,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "create",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3621,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3611,
                  "name": "_components",
                  "nodeType": "VariableDeclaration",
                  "scope": 3625,
                  "src": "1547:21:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 3609,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1547:7:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 3610,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "1547:9:19",
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
                  "id": 3614,
                  "name": "_units",
                  "nodeType": "VariableDeclaration",
                  "scope": 3625,
                  "src": "1578:13:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 3612,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "1578:4:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 3613,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "1578:6:19",
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
                  "id": 3616,
                  "name": "_naturalUnit",
                  "nodeType": "VariableDeclaration",
                  "scope": 3625,
                  "src": "1601:20:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3615,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1601:7:19",
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
                  "id": 3618,
                  "name": "_name",
                  "nodeType": "VariableDeclaration",
                  "scope": 3625,
                  "src": "1631:12:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 3617,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1631:6:19",
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
                  "id": 3620,
                  "name": "_symbol",
                  "nodeType": "VariableDeclaration",
                  "scope": 3625,
                  "src": "1653:14:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 3619,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1653:6:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1537:136:19"
            },
            "payable": false,
            "returnParameters": {
              "id": 3624,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3623,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 3625,
                  "src": "1708:7:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3622,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1708:7:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1707:9:19"
            },
            "scope": 3626,
            "src": "1522:195:19",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 3627,
        "src": "791:928:19"
      }
    ],
    "src": "597:1123:19"
  },
  "legacyAST": {
    "absolutePath": "/Users/alexsoong/Source/set-protocol/set-protocol-contracts/contracts/core/interfaces/ISetFactory.sol",
    "exportedSymbols": {
      "ISetFactory": [
        3626
      ]
    },
    "id": 3627,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 3603,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "597:23:19"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": "@title ISetFactory\n@author Set Protocol\n * The ISetFactory interface provides operability for authorized contracts\nto interact with SetTokenFactory",
        "fullyImplemented": false,
        "id": 3626,
        "linearizedBaseContracts": [
          3626
        ],
        "name": "ISetFactory",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": "Return core address\n     * @return address        core address",
            "id": 3608,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "core",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3604,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "982:2:19"
            },
            "payable": false,
            "returnParameters": {
              "id": 3607,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3606,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 3608,
                  "src": "1003:7:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3605,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1003:7:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1002:9:19"
            },
            "scope": 3626,
            "src": "969:43:19",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": "Deploys a new Set Token and adds it to the valid list of SetTokens\n     * @param  _components           The address of component tokens\n@param  _units                The units of each component token\n@param  _naturalUnit          The minimum unit to be issued or redeemed\n@param  _name                 The name of the new Set\n@param  _symbol               The symbol of the new Set\n@return setTokenAddress       The address of the new Set",
            "id": 3625,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "create",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3621,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3611,
                  "name": "_components",
                  "nodeType": "VariableDeclaration",
                  "scope": 3625,
                  "src": "1547:21:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 3609,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1547:7:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 3610,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "1547:9:19",
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
                  "id": 3614,
                  "name": "_units",
                  "nodeType": "VariableDeclaration",
                  "scope": 3625,
                  "src": "1578:13:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 3612,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "1578:4:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 3613,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "1578:6:19",
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
                  "id": 3616,
                  "name": "_naturalUnit",
                  "nodeType": "VariableDeclaration",
                  "scope": 3625,
                  "src": "1601:20:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3615,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1601:7:19",
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
                  "id": 3618,
                  "name": "_name",
                  "nodeType": "VariableDeclaration",
                  "scope": 3625,
                  "src": "1631:12:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 3617,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1631:6:19",
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
                  "id": 3620,
                  "name": "_symbol",
                  "nodeType": "VariableDeclaration",
                  "scope": 3625,
                  "src": "1653:14:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 3619,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1653:6:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1537:136:19"
            },
            "payable": false,
            "returnParameters": {
              "id": 3624,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3623,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 3625,
                  "src": "1708:7:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3622,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1708:7:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1707:9:19"
            },
            "scope": 3626,
            "src": "1522:195:19",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 3627,
        "src": "791:928:19"
      }
    ],
    "src": "597:1123:19"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.0",
  "updatedAt": "2018-08-10T21:21:49.357Z"
}