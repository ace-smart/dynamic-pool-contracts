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
  "source": "pragma solidity ^0.4.18;\n\nimport \"./ERC20Basic.sol\";\n\n\n/**\n * @title ERC20 interface\n * @dev see https://github.com/ethereum/EIPs/issues/20\n */\ncontract ERC20 is ERC20Basic {\n  function allowance(address owner, address spender) public view returns (uint256);\n  function transferFrom(address from, address to, uint256 value) public returns (bool);\n  function approve(address spender, uint256 value) public returns (bool);\n  event Approval(address indexed owner, address indexed spender, uint256 value);\n}\n",
  "sourcePath": "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
  "ast": {
    "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
    "exportedSymbols": {
      "ERC20": [
        734
      ]
    },
    "id": 735,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 693,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".18"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:7"
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20Basic.sol",
        "file": "./ERC20Basic.sol",
        "id": 694,
        "nodeType": "ImportDirective",
        "scope": 735,
        "sourceUnit": 767,
        "src": "26:26:7",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": [],
            "baseName": {
              "contractScope": null,
              "id": 695,
              "name": "ERC20Basic",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 766,
              "src": "162:10:7",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20Basic_$766",
                "typeString": "contract ERC20Basic"
              }
            },
            "id": 696,
            "nodeType": "InheritanceSpecifier",
            "src": "162:10:7"
          }
        ],
        "contractDependencies": [
          766
        ],
        "contractKind": "contract",
        "documentation": "@title ERC20 interface\n@dev see https://github.com/ethereum/EIPs/issues/20",
        "fullyImplemented": false,
        "id": 734,
        "linearizedBaseContracts": [
          734,
          766
        ],
        "name": "ERC20",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 705,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "allowance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 701,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 698,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 705,
                  "src": "196:13:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 697,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "196:7:7",
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
                  "id": 700,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 705,
                  "src": "211:15:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 699,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "211:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "195:32:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 704,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 703,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 705,
                  "src": "249:7:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 702,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "249:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "248:9:7"
            },
            "scope": 734,
            "src": "177:81:7",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 716,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 712,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 707,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 716,
                  "src": "283:12:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 706,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "283:7:7",
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
                  "id": 709,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 716,
                  "src": "297:10:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 708,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "297:7:7",
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
                  "id": 711,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 716,
                  "src": "309:13:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 710,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "309:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "282:41:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 715,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 714,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 716,
                  "src": "340:4:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 713,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "340:4:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "339:6:7"
            },
            "scope": 734,
            "src": "261:85:7",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 725,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 721,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 718,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 725,
                  "src": "366:15:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 717,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "366:7:7",
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
                  "id": 720,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 725,
                  "src": "383:13:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 719,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "383:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "365:32:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 724,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 723,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 725,
                  "src": "414:4:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 722,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "414:4:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "413:6:7"
            },
            "scope": 734,
            "src": "349:71:7",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 733,
            "name": "Approval",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 732,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 727,
                  "indexed": true,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 733,
                  "src": "438:21:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 726,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "438:7:7",
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
                  "id": 729,
                  "indexed": true,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 733,
                  "src": "461:23:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 728,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "461:7:7",
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
                  "id": 731,
                  "indexed": false,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 733,
                  "src": "486:13:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 730,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "486:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "437:63:7"
            },
            "src": "423:78:7"
          }
        ],
        "scope": 735,
        "src": "144:359:7"
      }
    ],
    "src": "0:504:7"
  },
  "legacyAST": {
    "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
    "exportedSymbols": {
      "ERC20": [
        734
      ]
    },
    "id": 735,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 693,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".18"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:7"
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20Basic.sol",
        "file": "./ERC20Basic.sol",
        "id": 694,
        "nodeType": "ImportDirective",
        "scope": 735,
        "sourceUnit": 767,
        "src": "26:26:7",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": [],
            "baseName": {
              "contractScope": null,
              "id": 695,
              "name": "ERC20Basic",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 766,
              "src": "162:10:7",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20Basic_$766",
                "typeString": "contract ERC20Basic"
              }
            },
            "id": 696,
            "nodeType": "InheritanceSpecifier",
            "src": "162:10:7"
          }
        ],
        "contractDependencies": [
          766
        ],
        "contractKind": "contract",
        "documentation": "@title ERC20 interface\n@dev see https://github.com/ethereum/EIPs/issues/20",
        "fullyImplemented": false,
        "id": 734,
        "linearizedBaseContracts": [
          734,
          766
        ],
        "name": "ERC20",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 705,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "allowance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 701,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 698,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 705,
                  "src": "196:13:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 697,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "196:7:7",
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
                  "id": 700,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 705,
                  "src": "211:15:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 699,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "211:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "195:32:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 704,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 703,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 705,
                  "src": "249:7:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 702,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "249:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "248:9:7"
            },
            "scope": 734,
            "src": "177:81:7",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 716,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 712,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 707,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 716,
                  "src": "283:12:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 706,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "283:7:7",
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
                  "id": 709,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 716,
                  "src": "297:10:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 708,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "297:7:7",
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
                  "id": 711,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 716,
                  "src": "309:13:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 710,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "309:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "282:41:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 715,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 714,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 716,
                  "src": "340:4:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 713,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "340:4:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "339:6:7"
            },
            "scope": 734,
            "src": "261:85:7",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 725,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 721,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 718,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 725,
                  "src": "366:15:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 717,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "366:7:7",
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
                  "id": 720,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 725,
                  "src": "383:13:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 719,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "383:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "365:32:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 724,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 723,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 725,
                  "src": "414:4:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 722,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "414:4:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "413:6:7"
            },
            "scope": 734,
            "src": "349:71:7",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 733,
            "name": "Approval",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 732,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 727,
                  "indexed": true,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 733,
                  "src": "438:21:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 726,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "438:7:7",
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
                  "id": 729,
                  "indexed": true,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 733,
                  "src": "461:23:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 728,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "461:7:7",
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
                  "id": 731,
                  "indexed": false,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 733,
                  "src": "486:13:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 730,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "486:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "437:63:7"
            },
            "src": "423:78:7"
          }
        ],
        "scope": 735,
        "src": "144:359:7"
      }
    ],
    "src": "0:504:7"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.21+commit.dfe3193c.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.0",
  "updatedAt": "2018-04-09T06:08:42.802Z"
}