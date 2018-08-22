export const IERC20 = 
{
  "contractName": "IERC20",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        },
        {
          "name": "_spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
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
          "name": "_quantity",
          "type": "uint256"
        }
      ],
      "name": "transfer",
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
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_quantity",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_quantity",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "name": "",
          "type": "bool"
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
  "source": "/*\n    Copyright 2018 Set Labs Inc.\n\n    Licensed under the Apache License, Version 2.0 (the \"License\");\n    you may not use this file except in compliance with the License.\n    You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n    Unless required by applicable law or agreed to in writing, software\n    distributed under the License is distributed on an \"AS IS\" BASIS,\n    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n    See the License for the specific language governing permissions and\n    limitations under the License.\n*/\n\npragma solidity 0.4.24;\n\n\n/**\n * @title GeneralERC20\n * @author Set Protocol\n *\n * Interface for using ERC20 Tokens. This interface is needed to interact with tokens that are not\n * fully ERC20 compliant and return something other than true on successful transfers.\n */\ninterface IERC20 {\n    function balanceOf(\n        address _owner\n    )\n        external\n        view\n        returns (uint256);\n\n    function allowance(\n        address _owner,\n        address _spender\n    )\n        external\n        view\n        returns (uint256);\n\n    function transfer(\n        address _to,\n        uint256 _quantity\n    )\n        external;\n\n    function transferFrom(\n        address _from,\n        address _to,\n        uint256 _quantity\n    )\n        external;\n\n    function approve(\n        address _spender,\n        uint256 _quantity\n    )\n        external\n        returns (bool);\n}\n",
  "sourcePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/lib/IERC20.sol",
  "ast": {
    "absolutePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/lib/IERC20.sol",
    "exportedSymbols": {
      "IERC20": [
        7241
      ]
    },
    "id": 7242,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 7199,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "597:23:53"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": "@title GeneralERC20\n@author Set Protocol\n * Interface for using ERC20 Tokens. This interface is needed to interact with tokens that are not\nfully ERC20 compliant and return something other than true on successful transfers.",
        "fullyImplemented": false,
        "id": 7241,
        "linearizedBaseContracts": [
          7241
        ],
        "name": "IERC20",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 7206,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7202,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7201,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 7206,
                  "src": "918:14:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7200,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "918:7:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "908:30:53"
            },
            "payable": false,
            "returnParameters": {
              "id": 7205,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7204,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 7206,
                  "src": "986:7:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7203,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "986:7:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "985:9:53"
            },
            "scope": 7241,
            "src": "890:105:53",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 7215,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "allowance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7211,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7208,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 7215,
                  "src": "1029:14:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7207,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1029:7:53",
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
                  "id": 7210,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 7215,
                  "src": "1053:16:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7209,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1053:7:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1019:56:53"
            },
            "payable": false,
            "returnParameters": {
              "id": 7214,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7213,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 7215,
                  "src": "1123:7:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7212,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1123:7:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1122:9:53"
            },
            "scope": 7241,
            "src": "1001:131:53",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 7222,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7220,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7217,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 7222,
                  "src": "1165:11:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7216,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1165:7:53",
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
                  "id": 7219,
                  "name": "_quantity",
                  "nodeType": "VariableDeclaration",
                  "scope": 7222,
                  "src": "1186:17:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7218,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1186:7:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1155:54:53"
            },
            "payable": false,
            "returnParameters": {
              "id": 7221,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1226:0:53"
            },
            "scope": 7241,
            "src": "1138:89:53",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 7231,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7229,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7224,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 7231,
                  "src": "1264:13:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7223,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1264:7:53",
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
                  "id": 7226,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 7231,
                  "src": "1287:11:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7225,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1287:7:53",
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
                  "id": 7228,
                  "name": "_quantity",
                  "nodeType": "VariableDeclaration",
                  "scope": 7231,
                  "src": "1308:17:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7227,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1308:7:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1254:77:53"
            },
            "payable": false,
            "returnParameters": {
              "id": 7230,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1348:0:53"
            },
            "scope": 7241,
            "src": "1233:116:53",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 7240,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7236,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7233,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 7240,
                  "src": "1381:16:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7232,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1381:7:53",
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
                  "id": 7235,
                  "name": "_quantity",
                  "nodeType": "VariableDeclaration",
                  "scope": 7240,
                  "src": "1407:17:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7234,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1407:7:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1371:59:53"
            },
            "payable": false,
            "returnParameters": {
              "id": 7239,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7238,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 7240,
                  "src": "1465:4:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 7237,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1465:4:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1464:6:53"
            },
            "scope": 7241,
            "src": "1355:116:53",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 7242,
        "src": "867:606:53"
      }
    ],
    "src": "597:877:53"
  },
  "legacyAST": {
    "absolutePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/lib/IERC20.sol",
    "exportedSymbols": {
      "IERC20": [
        7241
      ]
    },
    "id": 7242,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 7199,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "597:23:53"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": "@title GeneralERC20\n@author Set Protocol\n * Interface for using ERC20 Tokens. This interface is needed to interact with tokens that are not\nfully ERC20 compliant and return something other than true on successful transfers.",
        "fullyImplemented": false,
        "id": 7241,
        "linearizedBaseContracts": [
          7241
        ],
        "name": "IERC20",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 7206,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7202,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7201,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 7206,
                  "src": "918:14:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7200,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "918:7:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "908:30:53"
            },
            "payable": false,
            "returnParameters": {
              "id": 7205,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7204,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 7206,
                  "src": "986:7:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7203,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "986:7:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "985:9:53"
            },
            "scope": 7241,
            "src": "890:105:53",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 7215,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "allowance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7211,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7208,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 7215,
                  "src": "1029:14:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7207,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1029:7:53",
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
                  "id": 7210,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 7215,
                  "src": "1053:16:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7209,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1053:7:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1019:56:53"
            },
            "payable": false,
            "returnParameters": {
              "id": 7214,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7213,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 7215,
                  "src": "1123:7:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7212,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1123:7:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1122:9:53"
            },
            "scope": 7241,
            "src": "1001:131:53",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 7222,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7220,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7217,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 7222,
                  "src": "1165:11:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7216,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1165:7:53",
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
                  "id": 7219,
                  "name": "_quantity",
                  "nodeType": "VariableDeclaration",
                  "scope": 7222,
                  "src": "1186:17:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7218,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1186:7:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1155:54:53"
            },
            "payable": false,
            "returnParameters": {
              "id": 7221,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1226:0:53"
            },
            "scope": 7241,
            "src": "1138:89:53",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 7231,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7229,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7224,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 7231,
                  "src": "1264:13:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7223,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1264:7:53",
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
                  "id": 7226,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 7231,
                  "src": "1287:11:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7225,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1287:7:53",
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
                  "id": 7228,
                  "name": "_quantity",
                  "nodeType": "VariableDeclaration",
                  "scope": 7231,
                  "src": "1308:17:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7227,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1308:7:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1254:77:53"
            },
            "payable": false,
            "returnParameters": {
              "id": 7230,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1348:0:53"
            },
            "scope": 7241,
            "src": "1233:116:53",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 7240,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7236,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7233,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 7240,
                  "src": "1381:16:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7232,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1381:7:53",
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
                  "id": 7235,
                  "name": "_quantity",
                  "nodeType": "VariableDeclaration",
                  "scope": 7240,
                  "src": "1407:17:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7234,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1407:7:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1371:59:53"
            },
            "payable": false,
            "returnParameters": {
              "id": 7239,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7238,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 7240,
                  "src": "1465:4:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 7237,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1465:4:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1464:6:53"
            },
            "scope": 7241,
            "src": "1355:116:53",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 7242,
        "src": "867:606:53"
      }
    ],
    "src": "597:877:53"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.0",
  "updatedAt": "2018-08-22T08:07:49.205Z"
}