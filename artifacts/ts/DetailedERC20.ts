export const DetailedERC20 = 
{
  "contractName": "DetailedERC20",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "name": "",
          "type": "string"
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
    },
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
      "constant": true,
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "name": "",
          "type": "uint8"
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
      "constant": true,
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "name": "",
          "type": "string"
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
      "inputs": [
        {
          "name": "_name",
          "type": "string"
        },
        {
          "name": "_symbol",
          "type": "string"
        },
        {
          "name": "_decimals",
          "type": "uint8"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
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
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "pragma solidity ^0.4.23;\n\nimport \"./ERC20.sol\";\n\n\n/**\n * @title DetailedERC20 token\n * @dev The decimals are only for visualization purposes.\n * All the operations are done using the smallest and indivisible token unit,\n * just as on Ethereum all the operations are done in wei.\n */\ncontract DetailedERC20 is ERC20 {\n  string public name;\n  string public symbol;\n  uint8 public decimals;\n\n  constructor(string _name, string _symbol, uint8 _decimals) public {\n    name = _name;\n    symbol = _symbol;\n    decimals = _decimals;\n  }\n}\n",
  "sourcePath": "zeppelin-solidity/contracts/token/ERC20/DetailedERC20.sol",
  "ast": {
    "absolutePath": "zeppelin-solidity/contracts/token/ERC20/DetailedERC20.sol",
    "exportedSymbols": {
      "DetailedERC20": [
        6918
      ]
    },
    "id": 6919,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 6886,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".23"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:64"
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
        "file": "./ERC20.sol",
        "id": 6887,
        "nodeType": "ImportDirective",
        "scope": 6919,
        "sourceUnit": 6962,
        "src": "26:21:64",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 6888,
              "name": "ERC20",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 6961,
              "src": "309:5:64",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20_$6961",
                "typeString": "contract ERC20"
              }
            },
            "id": 6889,
            "nodeType": "InheritanceSpecifier",
            "src": "309:5:64"
          }
        ],
        "contractDependencies": [
          6961,
          6993
        ],
        "contractKind": "contract",
        "documentation": "@title DetailedERC20 token\n@dev The decimals are only for visualization purposes.\nAll the operations are done using the smallest and indivisible token unit,\njust as on Ethereum all the operations are done in wei.",
        "fullyImplemented": false,
        "id": 6918,
        "linearizedBaseContracts": [
          6918,
          6961,
          6993
        ],
        "name": "DetailedERC20",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 6891,
            "name": "name",
            "nodeType": "VariableDeclaration",
            "scope": 6918,
            "src": "319:18:64",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 6890,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "319:6:64",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 6893,
            "name": "symbol",
            "nodeType": "VariableDeclaration",
            "scope": 6918,
            "src": "341:20:64",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 6892,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "341:6:64",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 6895,
            "name": "decimals",
            "nodeType": "VariableDeclaration",
            "scope": 6918,
            "src": "365:21:64",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint8",
              "typeString": "uint8"
            },
            "typeName": {
              "id": 6894,
              "name": "uint8",
              "nodeType": "ElementaryTypeName",
              "src": "365:5:64",
              "typeDescriptions": {
                "typeIdentifier": "t_uint8",
                "typeString": "uint8"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 6916,
              "nodeType": "Block",
              "src": "457:71:64",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 6906,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 6904,
                      "name": "name",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6891,
                      "src": "463:4:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 6905,
                      "name": "_name",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6897,
                      "src": "470:5:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "463:12:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 6907,
                  "nodeType": "ExpressionStatement",
                  "src": "463:12:64"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 6910,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 6908,
                      "name": "symbol",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6893,
                      "src": "481:6:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 6909,
                      "name": "_symbol",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6899,
                      "src": "490:7:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "481:16:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 6911,
                  "nodeType": "ExpressionStatement",
                  "src": "481:16:64"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 6914,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 6912,
                      "name": "decimals",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6895,
                      "src": "503:8:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 6913,
                      "name": "_decimals",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6901,
                      "src": "514:9:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "src": "503:20:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "id": 6915,
                  "nodeType": "ExpressionStatement",
                  "src": "503:20:64"
                }
              ]
            },
            "documentation": null,
            "id": 6917,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6902,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6897,
                  "name": "_name",
                  "nodeType": "VariableDeclaration",
                  "scope": 6917,
                  "src": "403:12:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 6896,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "403:6:64",
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
                  "id": 6899,
                  "name": "_symbol",
                  "nodeType": "VariableDeclaration",
                  "scope": 6917,
                  "src": "417:14:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 6898,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "417:6:64",
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
                  "id": 6901,
                  "name": "_decimals",
                  "nodeType": "VariableDeclaration",
                  "scope": 6917,
                  "src": "433:15:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 6900,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "433:5:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "402:47:64"
            },
            "payable": false,
            "returnParameters": {
              "id": 6903,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "457:0:64"
            },
            "scope": 6918,
            "src": "391:137:64",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 6919,
        "src": "283:247:64"
      }
    ],
    "src": "0:531:64"
  },
  "legacyAST": {
    "absolutePath": "zeppelin-solidity/contracts/token/ERC20/DetailedERC20.sol",
    "exportedSymbols": {
      "DetailedERC20": [
        6918
      ]
    },
    "id": 6919,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 6886,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".23"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:64"
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
        "file": "./ERC20.sol",
        "id": 6887,
        "nodeType": "ImportDirective",
        "scope": 6919,
        "sourceUnit": 6962,
        "src": "26:21:64",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 6888,
              "name": "ERC20",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 6961,
              "src": "309:5:64",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20_$6961",
                "typeString": "contract ERC20"
              }
            },
            "id": 6889,
            "nodeType": "InheritanceSpecifier",
            "src": "309:5:64"
          }
        ],
        "contractDependencies": [
          6961,
          6993
        ],
        "contractKind": "contract",
        "documentation": "@title DetailedERC20 token\n@dev The decimals are only for visualization purposes.\nAll the operations are done using the smallest and indivisible token unit,\njust as on Ethereum all the operations are done in wei.",
        "fullyImplemented": false,
        "id": 6918,
        "linearizedBaseContracts": [
          6918,
          6961,
          6993
        ],
        "name": "DetailedERC20",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 6891,
            "name": "name",
            "nodeType": "VariableDeclaration",
            "scope": 6918,
            "src": "319:18:64",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 6890,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "319:6:64",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 6893,
            "name": "symbol",
            "nodeType": "VariableDeclaration",
            "scope": 6918,
            "src": "341:20:64",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 6892,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "341:6:64",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 6895,
            "name": "decimals",
            "nodeType": "VariableDeclaration",
            "scope": 6918,
            "src": "365:21:64",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint8",
              "typeString": "uint8"
            },
            "typeName": {
              "id": 6894,
              "name": "uint8",
              "nodeType": "ElementaryTypeName",
              "src": "365:5:64",
              "typeDescriptions": {
                "typeIdentifier": "t_uint8",
                "typeString": "uint8"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 6916,
              "nodeType": "Block",
              "src": "457:71:64",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 6906,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 6904,
                      "name": "name",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6891,
                      "src": "463:4:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 6905,
                      "name": "_name",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6897,
                      "src": "470:5:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "463:12:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 6907,
                  "nodeType": "ExpressionStatement",
                  "src": "463:12:64"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 6910,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 6908,
                      "name": "symbol",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6893,
                      "src": "481:6:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 6909,
                      "name": "_symbol",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6899,
                      "src": "490:7:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "481:16:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 6911,
                  "nodeType": "ExpressionStatement",
                  "src": "481:16:64"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 6914,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 6912,
                      "name": "decimals",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6895,
                      "src": "503:8:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 6913,
                      "name": "_decimals",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6901,
                      "src": "514:9:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "src": "503:20:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "id": 6915,
                  "nodeType": "ExpressionStatement",
                  "src": "503:20:64"
                }
              ]
            },
            "documentation": null,
            "id": 6917,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6902,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6897,
                  "name": "_name",
                  "nodeType": "VariableDeclaration",
                  "scope": 6917,
                  "src": "403:12:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 6896,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "403:6:64",
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
                  "id": 6899,
                  "name": "_symbol",
                  "nodeType": "VariableDeclaration",
                  "scope": 6917,
                  "src": "417:14:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 6898,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "417:6:64",
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
                  "id": 6901,
                  "name": "_decimals",
                  "nodeType": "VariableDeclaration",
                  "scope": 6917,
                  "src": "433:15:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 6900,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "433:5:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "402:47:64"
            },
            "payable": false,
            "returnParameters": {
              "id": 6903,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "457:0:64"
            },
            "scope": 6918,
            "src": "391:137:64",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 6919,
        "src": "283:247:64"
      }
    ],
    "src": "0:531:64"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.0",
  "updatedAt": "2018-07-27T04:20:39.856Z"
}