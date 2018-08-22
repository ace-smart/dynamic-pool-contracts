export const ERC20 = 
{
  "contractName": "ERC20",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
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
          "name": "who",
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
      "constant": false,
      "inputs": [
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "owner",
          "type": "address"
        },
        {
          "name": "spender",
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
          "name": "from",
          "type": "address"
        },
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "name": "",
          "type": "bool"
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
          "name": "spender",
          "type": "address"
        },
        {
          "name": "value",
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
  "source": "pragma solidity ^0.4.24;\n\nimport \"./ERC20Basic.sol\";\n\n\n/**\n * @title ERC20 interface\n * @dev see https://github.com/ethereum/EIPs/issues/20\n */\ncontract ERC20 is ERC20Basic {\n  function allowance(address owner, address spender)\n    public view returns (uint256);\n\n  function transferFrom(address from, address to, uint256 value)\n    public returns (bool);\n\n  function approve(address spender, uint256 value) public returns (bool);\n  event Approval(\n    address indexed owner,\n    address indexed spender,\n    uint256 value\n  );\n}\n",
  "sourcePath": "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
  "ast": {
    "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
    "exportedSymbols": {
      "ERC20": [
        9013
      ]
    },
    "id": 9014,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 8972,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:71"
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20Basic.sol",
        "file": "./ERC20Basic.sol",
        "id": 8973,
        "nodeType": "ImportDirective",
        "scope": 9014,
        "sourceUnit": 9046,
        "src": "26:26:71",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 8974,
              "name": "ERC20Basic",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 9045,
              "src": "162:10:71",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20Basic_$9045",
                "typeString": "contract ERC20Basic"
              }
            },
            "id": 8975,
            "nodeType": "InheritanceSpecifier",
            "src": "162:10:71"
          }
        ],
        "contractDependencies": [
          9045
        ],
        "contractKind": "contract",
        "documentation": "@title ERC20 interface\n@dev see https://github.com/ethereum/EIPs/issues/20",
        "fullyImplemented": false,
        "id": 9013,
        "linearizedBaseContracts": [
          9013,
          9045
        ],
        "name": "ERC20",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 8984,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "allowance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8980,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8977,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 8984,
                  "src": "196:13:71",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8976,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "196:7:71",
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
                  "id": 8979,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 8984,
                  "src": "211:15:71",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8978,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "211:7:71",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "195:32:71"
            },
            "payable": false,
            "returnParameters": {
              "id": 8983,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8982,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8984,
                  "src": "253:7:71",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8981,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "253:7:71",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "252:9:71"
            },
            "scope": 9013,
            "src": "177:85:71",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8995,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8991,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8986,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 8995,
                  "src": "288:12:71",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8985,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "288:7:71",
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
                  "id": 8988,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 8995,
                  "src": "302:10:71",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8987,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "302:7:71",
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
                  "id": 8990,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 8995,
                  "src": "314:13:71",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8989,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "314:7:71",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "287:41:71"
            },
            "payable": false,
            "returnParameters": {
              "id": 8994,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8993,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8995,
                  "src": "349:4:71",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8992,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "349:4:71",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "348:6:71"
            },
            "scope": 9013,
            "src": "266:89:71",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9004,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9000,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8997,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 9004,
                  "src": "376:15:71",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8996,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "376:7:71",
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
                  "id": 8999,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 9004,
                  "src": "393:13:71",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8998,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "393:7:71",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "375:32:71"
            },
            "payable": false,
            "returnParameters": {
              "id": 9003,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9002,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9004,
                  "src": "424:4:71",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 9001,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "424:4:71",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "423:6:71"
            },
            "scope": 9013,
            "src": "359:71:71",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 9012,
            "name": "Approval",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 9011,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9006,
                  "indexed": true,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 9012,
                  "src": "453:21:71",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9005,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "453:7:71",
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
                  "id": 9008,
                  "indexed": true,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 9012,
                  "src": "480:23:71",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9007,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "480:7:71",
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
                  "id": 9010,
                  "indexed": false,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 9012,
                  "src": "509:13:71",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9009,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "509:7:71",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "447:79:71"
            },
            "src": "433:94:71"
          }
        ],
        "scope": 9014,
        "src": "144:385:71"
      }
    ],
    "src": "0:530:71"
  },
  "legacyAST": {
    "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
    "exportedSymbols": {
      "ERC20": [
        9013
      ]
    },
    "id": 9014,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 8972,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:71"
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20Basic.sol",
        "file": "./ERC20Basic.sol",
        "id": 8973,
        "nodeType": "ImportDirective",
        "scope": 9014,
        "sourceUnit": 9046,
        "src": "26:26:71",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 8974,
              "name": "ERC20Basic",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 9045,
              "src": "162:10:71",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20Basic_$9045",
                "typeString": "contract ERC20Basic"
              }
            },
            "id": 8975,
            "nodeType": "InheritanceSpecifier",
            "src": "162:10:71"
          }
        ],
        "contractDependencies": [
          9045
        ],
        "contractKind": "contract",
        "documentation": "@title ERC20 interface\n@dev see https://github.com/ethereum/EIPs/issues/20",
        "fullyImplemented": false,
        "id": 9013,
        "linearizedBaseContracts": [
          9013,
          9045
        ],
        "name": "ERC20",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 8984,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "allowance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8980,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8977,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 8984,
                  "src": "196:13:71",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8976,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "196:7:71",
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
                  "id": 8979,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 8984,
                  "src": "211:15:71",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8978,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "211:7:71",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "195:32:71"
            },
            "payable": false,
            "returnParameters": {
              "id": 8983,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8982,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8984,
                  "src": "253:7:71",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8981,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "253:7:71",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "252:9:71"
            },
            "scope": 9013,
            "src": "177:85:71",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8995,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8991,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8986,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 8995,
                  "src": "288:12:71",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8985,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "288:7:71",
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
                  "id": 8988,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 8995,
                  "src": "302:10:71",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8987,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "302:7:71",
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
                  "id": 8990,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 8995,
                  "src": "314:13:71",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8989,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "314:7:71",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "287:41:71"
            },
            "payable": false,
            "returnParameters": {
              "id": 8994,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8993,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8995,
                  "src": "349:4:71",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8992,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "349:4:71",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "348:6:71"
            },
            "scope": 9013,
            "src": "266:89:71",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9004,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9000,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8997,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 9004,
                  "src": "376:15:71",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8996,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "376:7:71",
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
                  "id": 8999,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 9004,
                  "src": "393:13:71",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8998,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "393:7:71",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "375:32:71"
            },
            "payable": false,
            "returnParameters": {
              "id": 9003,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9002,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9004,
                  "src": "424:4:71",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 9001,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "424:4:71",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "423:6:71"
            },
            "scope": 9013,
            "src": "359:71:71",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 9012,
            "name": "Approval",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 9011,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9006,
                  "indexed": true,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 9012,
                  "src": "453:21:71",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9005,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "453:7:71",
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
                  "id": 9008,
                  "indexed": true,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 9012,
                  "src": "480:23:71",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9007,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "480:7:71",
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
                  "id": 9010,
                  "indexed": false,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 9012,
                  "src": "509:13:71",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9009,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "509:7:71",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "447:79:71"
            },
            "src": "433:94:71"
          }
        ],
        "scope": 9014,
        "src": "144:385:71"
      }
    ],
    "src": "0:530:71"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.0",
  "updatedAt": "2018-08-22T08:07:49.224Z"
}