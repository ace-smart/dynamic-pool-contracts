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
  "source": "pragma solidity ^0.4.18;\n\nimport \"./ERC20.sol\";\n\n\ncontract DetailedERC20 is ERC20 {\n  string public name;\n  string public symbol;\n  uint8 public decimals;\n\n  function DetailedERC20(string _name, string _symbol, uint8 _decimals) public {\n    name = _name;\n    symbol = _symbol;\n    decimals = _decimals;\n  }\n}\n",
  "sourcePath": "zeppelin-solidity/contracts/token/ERC20/DetailedERC20.sol",
  "ast": {
    "absolutePath": "zeppelin-solidity/contracts/token/ERC20/DetailedERC20.sol",
    "exportedSymbols": {
      "DetailedERC20": [
        2179
      ]
    },
    "id": 2180,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 2147,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".18"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:13"
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
        "file": "./ERC20.sol",
        "id": 2148,
        "nodeType": "ImportDirective",
        "scope": 2180,
        "sourceUnit": 2223,
        "src": "26:21:13",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 2149,
              "name": "ERC20",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 2222,
              "src": "76:5:13",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20_$2222",
                "typeString": "contract ERC20"
              }
            },
            "id": 2150,
            "nodeType": "InheritanceSpecifier",
            "src": "76:5:13"
          }
        ],
        "contractDependencies": [
          2222,
          2254
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": false,
        "id": 2179,
        "linearizedBaseContracts": [
          2179,
          2222,
          2254
        ],
        "name": "DetailedERC20",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 2152,
            "name": "name",
            "nodeType": "VariableDeclaration",
            "scope": 2179,
            "src": "86:18:13",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 2151,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "86:6:13",
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
            "id": 2154,
            "name": "symbol",
            "nodeType": "VariableDeclaration",
            "scope": 2179,
            "src": "108:20:13",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 2153,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "108:6:13",
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
            "id": 2156,
            "name": "decimals",
            "nodeType": "VariableDeclaration",
            "scope": 2179,
            "src": "132:21:13",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint8",
              "typeString": "uint8"
            },
            "typeName": {
              "id": 2155,
              "name": "uint8",
              "nodeType": "ElementaryTypeName",
              "src": "132:5:13",
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
              "id": 2177,
              "nodeType": "Block",
              "src": "235:71:13",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 2167,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 2165,
                      "name": "name",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2152,
                      "src": "241:4:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 2166,
                      "name": "_name",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2158,
                      "src": "248:5:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "241:12:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 2168,
                  "nodeType": "ExpressionStatement",
                  "src": "241:12:13"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 2171,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 2169,
                      "name": "symbol",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2154,
                      "src": "259:6:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 2170,
                      "name": "_symbol",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2160,
                      "src": "268:7:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "259:16:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 2172,
                  "nodeType": "ExpressionStatement",
                  "src": "259:16:13"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 2175,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 2173,
                      "name": "decimals",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2156,
                      "src": "281:8:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 2174,
                      "name": "_decimals",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2162,
                      "src": "292:9:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "src": "281:20:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "id": 2176,
                  "nodeType": "ExpressionStatement",
                  "src": "281:20:13"
                }
              ]
            },
            "documentation": null,
            "id": 2178,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "DetailedERC20",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2163,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2158,
                  "name": "_name",
                  "nodeType": "VariableDeclaration",
                  "scope": 2178,
                  "src": "181:12:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 2157,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "181:6:13",
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
                  "id": 2160,
                  "name": "_symbol",
                  "nodeType": "VariableDeclaration",
                  "scope": 2178,
                  "src": "195:14:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 2159,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "195:6:13",
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
                  "id": 2162,
                  "name": "_decimals",
                  "nodeType": "VariableDeclaration",
                  "scope": 2178,
                  "src": "211:15:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 2161,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "211:5:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "180:47:13"
            },
            "payable": false,
            "returnParameters": {
              "id": 2164,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "235:0:13"
            },
            "scope": 2179,
            "src": "158:148:13",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 2180,
        "src": "50:258:13"
      }
    ],
    "src": "0:309:13"
  },
  "legacyAST": {
    "absolutePath": "zeppelin-solidity/contracts/token/ERC20/DetailedERC20.sol",
    "exportedSymbols": {
      "DetailedERC20": [
        2179
      ]
    },
    "id": 2180,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 2147,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".18"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:13"
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
        "file": "./ERC20.sol",
        "id": 2148,
        "nodeType": "ImportDirective",
        "scope": 2180,
        "sourceUnit": 2223,
        "src": "26:21:13",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 2149,
              "name": "ERC20",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 2222,
              "src": "76:5:13",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20_$2222",
                "typeString": "contract ERC20"
              }
            },
            "id": 2150,
            "nodeType": "InheritanceSpecifier",
            "src": "76:5:13"
          }
        ],
        "contractDependencies": [
          2222,
          2254
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": false,
        "id": 2179,
        "linearizedBaseContracts": [
          2179,
          2222,
          2254
        ],
        "name": "DetailedERC20",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 2152,
            "name": "name",
            "nodeType": "VariableDeclaration",
            "scope": 2179,
            "src": "86:18:13",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 2151,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "86:6:13",
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
            "id": 2154,
            "name": "symbol",
            "nodeType": "VariableDeclaration",
            "scope": 2179,
            "src": "108:20:13",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 2153,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "108:6:13",
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
            "id": 2156,
            "name": "decimals",
            "nodeType": "VariableDeclaration",
            "scope": 2179,
            "src": "132:21:13",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint8",
              "typeString": "uint8"
            },
            "typeName": {
              "id": 2155,
              "name": "uint8",
              "nodeType": "ElementaryTypeName",
              "src": "132:5:13",
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
              "id": 2177,
              "nodeType": "Block",
              "src": "235:71:13",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 2167,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 2165,
                      "name": "name",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2152,
                      "src": "241:4:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 2166,
                      "name": "_name",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2158,
                      "src": "248:5:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "241:12:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 2168,
                  "nodeType": "ExpressionStatement",
                  "src": "241:12:13"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 2171,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 2169,
                      "name": "symbol",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2154,
                      "src": "259:6:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 2170,
                      "name": "_symbol",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2160,
                      "src": "268:7:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "259:16:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 2172,
                  "nodeType": "ExpressionStatement",
                  "src": "259:16:13"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 2175,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 2173,
                      "name": "decimals",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2156,
                      "src": "281:8:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 2174,
                      "name": "_decimals",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2162,
                      "src": "292:9:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "src": "281:20:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "id": 2176,
                  "nodeType": "ExpressionStatement",
                  "src": "281:20:13"
                }
              ]
            },
            "documentation": null,
            "id": 2178,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "DetailedERC20",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2163,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2158,
                  "name": "_name",
                  "nodeType": "VariableDeclaration",
                  "scope": 2178,
                  "src": "181:12:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 2157,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "181:6:13",
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
                  "id": 2160,
                  "name": "_symbol",
                  "nodeType": "VariableDeclaration",
                  "scope": 2178,
                  "src": "195:14:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 2159,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "195:6:13",
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
                  "id": 2162,
                  "name": "_decimals",
                  "nodeType": "VariableDeclaration",
                  "scope": 2178,
                  "src": "211:15:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 2161,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "211:5:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "180:47:13"
            },
            "payable": false,
            "returnParameters": {
              "id": 2164,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "235:0:13"
            },
            "scope": 2179,
            "src": "158:148:13",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 2180,
        "src": "50:258:13"
      }
    ],
    "src": "0:309:13"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.23+commit.124ca40d.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.0",
  "updatedAt": "2018-05-03T07:27:33.017Z"
}