export const ISetToken = 
{
  "contractName": "ISetToken",
  "abi": [
    {
      "constant": false,
      "inputs": [],
      "name": "naturalUnit",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "getComponents",
      "outputs": [
        {
          "name": "",
          "type": "address[]"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "getUnits",
      "outputs": [
        {
          "name": "",
          "type": "uint256[]"
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
          "name": "_issuer",
          "type": "address"
        },
        {
          "name": "_quantity",
          "type": "uint256"
        }
      ],
      "name": "mint",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_quantity",
          "type": "uint256"
        }
      ],
      "name": "burn",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "/*\n    Copyright 2018 Set Labs Inc.\n\n    Licensed under the Apache License, Version 2.0 (the \"License\");\n    you may not use this file except in compliance with the License.\n    You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n    Unless required by applicable law or agreed to in writing, software\n    distributed under the License is distributed on an \"AS IS\" BASIS,\n    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n    See the License for the specific language governing permissions and\n    limitations under the License.\n*/\n\npragma solidity 0.4.24;\n\n/**\n * @title ISetToken\n * @author Set Protocol\n *\n * The ISetToken interface provides a light-weight, structured way to interact with the\n * SetToken contract from another contract.\n */\ninterface ISetToken {\n    function naturalUnit()\n        external\n        returns (uint);\n\n    function getComponents()\n        external\n        returns(address[]);\n\n    function getUnits()\n        external\n        returns(uint[]);\n\n    function mint(\n        address _issuer,\n        uint _quantity\n    )\n        external;\n\n    function burn(\n        address _from,\n        uint _quantity\n    )\n        external;\n}\n",
  "sourcePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/core/interfaces/ISetToken.sol",
  "ast": {
    "absolutePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/core/interfaces/ISetToken.sol",
    "exportedSymbols": {
      "ISetToken": [
        2839
      ]
    },
    "id": 2840,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 2807,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "597:23:18"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": "@title ISetToken\n@author Set Protocol\n * The ISetToken interface provides a light-weight, structured way to interact with the\nSetToken contract from another contract.",
        "fullyImplemented": false,
        "id": 2839,
        "linearizedBaseContracts": [
          2839
        ],
        "name": "ISetToken",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 2812,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "naturalUnit",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2808,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "855:2:18"
            },
            "payable": false,
            "returnParameters": {
              "id": 2811,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2810,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2812,
                  "src": "892:4:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2809,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "892:4:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "891:6:18"
            },
            "scope": 2839,
            "src": "835:63:18",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 2818,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "getComponents",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2813,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "926:2:18"
            },
            "payable": false,
            "returnParameters": {
              "id": 2817,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2816,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2818,
                  "src": "962:9:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 2814,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "962:7:18",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 2815,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "962:9:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "961:11:18"
            },
            "scope": 2839,
            "src": "904:69:18",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 2824,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "getUnits",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2819,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "996:2:18"
            },
            "payable": false,
            "returnParameters": {
              "id": 2823,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2822,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2824,
                  "src": "1032:6:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 2820,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "1032:4:18",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 2821,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "1032:6:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1031:8:18"
            },
            "scope": 2839,
            "src": "979:61:18",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 2831,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "mint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2829,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2826,
                  "name": "_issuer",
                  "nodeType": "VariableDeclaration",
                  "scope": 2831,
                  "src": "1069:15:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2825,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1069:7:18",
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
                  "id": 2828,
                  "name": "_quantity",
                  "nodeType": "VariableDeclaration",
                  "scope": 2831,
                  "src": "1094:14:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2827,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1094:4:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1059:55:18"
            },
            "payable": false,
            "returnParameters": {
              "id": 2830,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1131:0:18"
            },
            "scope": 2839,
            "src": "1046:86:18",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 2838,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "burn",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2836,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2833,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 2838,
                  "src": "1161:13:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2832,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1161:7:18",
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
                  "id": 2835,
                  "name": "_quantity",
                  "nodeType": "VariableDeclaration",
                  "scope": 2838,
                  "src": "1184:14:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2834,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1184:4:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1151:53:18"
            },
            "payable": false,
            "returnParameters": {
              "id": 2837,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1221:0:18"
            },
            "scope": 2839,
            "src": "1138:84:18",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 2840,
        "src": "809:415:18"
      }
    ],
    "src": "597:628:18"
  },
  "legacyAST": {
    "absolutePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/core/interfaces/ISetToken.sol",
    "exportedSymbols": {
      "ISetToken": [
        2839
      ]
    },
    "id": 2840,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 2807,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "597:23:18"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": "@title ISetToken\n@author Set Protocol\n * The ISetToken interface provides a light-weight, structured way to interact with the\nSetToken contract from another contract.",
        "fullyImplemented": false,
        "id": 2839,
        "linearizedBaseContracts": [
          2839
        ],
        "name": "ISetToken",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 2812,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "naturalUnit",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2808,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "855:2:18"
            },
            "payable": false,
            "returnParameters": {
              "id": 2811,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2810,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2812,
                  "src": "892:4:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2809,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "892:4:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "891:6:18"
            },
            "scope": 2839,
            "src": "835:63:18",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 2818,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "getComponents",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2813,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "926:2:18"
            },
            "payable": false,
            "returnParameters": {
              "id": 2817,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2816,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2818,
                  "src": "962:9:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 2814,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "962:7:18",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 2815,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "962:9:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "961:11:18"
            },
            "scope": 2839,
            "src": "904:69:18",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 2824,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "getUnits",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2819,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "996:2:18"
            },
            "payable": false,
            "returnParameters": {
              "id": 2823,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2822,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2824,
                  "src": "1032:6:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 2820,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "1032:4:18",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 2821,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "1032:6:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1031:8:18"
            },
            "scope": 2839,
            "src": "979:61:18",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 2831,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "mint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2829,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2826,
                  "name": "_issuer",
                  "nodeType": "VariableDeclaration",
                  "scope": 2831,
                  "src": "1069:15:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2825,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1069:7:18",
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
                  "id": 2828,
                  "name": "_quantity",
                  "nodeType": "VariableDeclaration",
                  "scope": 2831,
                  "src": "1094:14:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2827,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1094:4:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1059:55:18"
            },
            "payable": false,
            "returnParameters": {
              "id": 2830,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1131:0:18"
            },
            "scope": 2839,
            "src": "1046:86:18",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 2838,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "burn",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2836,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2833,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 2838,
                  "src": "1161:13:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2832,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1161:7:18",
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
                  "id": 2835,
                  "name": "_quantity",
                  "nodeType": "VariableDeclaration",
                  "scope": 2838,
                  "src": "1184:14:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2834,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1184:4:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1151:53:18"
            },
            "payable": false,
            "returnParameters": {
              "id": 2837,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1221:0:18"
            },
            "scope": 2839,
            "src": "1138:84:18",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 2840,
        "src": "809:415:18"
      }
    ],
    "src": "597:628:18"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.0",
  "updatedAt": "2018-07-08T01:11:15.196Z"
}