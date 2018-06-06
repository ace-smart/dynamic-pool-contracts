export const ERC20Basic = 
{
  "contractName": "ERC20Basic",
  "abi": [
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
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "pragma solidity ^0.4.23;\n\n\n/**\n * @title ERC20Basic\n * @dev Simpler version of ERC20 interface\n * @dev see https://github.com/ethereum/EIPs/issues/179\n */\ncontract ERC20Basic {\n  function totalSupply() public view returns (uint256);\n  function balanceOf(address who) public view returns (uint256);\n  function transfer(address to, uint256 value) public returns (bool);\n  event Transfer(address indexed from, address indexed to, uint256 value);\n}\n",
  "sourcePath": "zeppelin-solidity/contracts/token/ERC20/ERC20Basic.sol",
  "ast": {
    "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20Basic.sol",
    "exportedSymbols": {
      "ERC20Basic": [
        2446
      ]
    },
    "id": 2447,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 2416,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".23"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:15"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": "@title ERC20Basic\n@dev Simpler version of ERC20 interface\n@dev see https://github.com/ethereum/EIPs/issues/179",
        "fullyImplemented": false,
        "id": 2446,
        "linearizedBaseContracts": [
          2446
        ],
        "name": "ERC20Basic",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 2421,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2417,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "199:2:15"
            },
            "payable": false,
            "returnParameters": {
              "id": 2420,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2419,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2421,
                  "src": "223:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2418,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "223:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "222:9:15"
            },
            "scope": 2446,
            "src": "179:53:15",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 2428,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2424,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2423,
                  "name": "who",
                  "nodeType": "VariableDeclaration",
                  "scope": 2428,
                  "src": "254:11:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2422,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "254:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "253:13:15"
            },
            "payable": false,
            "returnParameters": {
              "id": 2427,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2426,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2428,
                  "src": "288:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2425,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "288:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "287:9:15"
            },
            "scope": 2446,
            "src": "235:62:15",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 2437,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2433,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2430,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 2437,
                  "src": "318:10:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2429,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "318:7:15",
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
                  "id": 2432,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 2437,
                  "src": "330:13:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2431,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "330:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "317:27:15"
            },
            "payable": false,
            "returnParameters": {
              "id": 2436,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2435,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2437,
                  "src": "361:4:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 2434,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "361:4:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "360:6:15"
            },
            "scope": 2446,
            "src": "300:67:15",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 2445,
            "name": "Transfer",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 2444,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2439,
                  "indexed": true,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 2445,
                  "src": "385:20:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2438,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "385:7:15",
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
                  "id": 2441,
                  "indexed": true,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 2445,
                  "src": "407:18:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2440,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "407:7:15",
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
                  "id": 2443,
                  "indexed": false,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 2445,
                  "src": "427:13:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2442,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "427:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "384:57:15"
            },
            "src": "370:72:15"
          }
        ],
        "scope": 2447,
        "src": "155:289:15"
      }
    ],
    "src": "0:445:15"
  },
  "legacyAST": {
    "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20Basic.sol",
    "exportedSymbols": {
      "ERC20Basic": [
        2446
      ]
    },
    "id": 2447,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 2416,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".23"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:15"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": "@title ERC20Basic\n@dev Simpler version of ERC20 interface\n@dev see https://github.com/ethereum/EIPs/issues/179",
        "fullyImplemented": false,
        "id": 2446,
        "linearizedBaseContracts": [
          2446
        ],
        "name": "ERC20Basic",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 2421,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2417,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "199:2:15"
            },
            "payable": false,
            "returnParameters": {
              "id": 2420,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2419,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2421,
                  "src": "223:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2418,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "223:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "222:9:15"
            },
            "scope": 2446,
            "src": "179:53:15",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 2428,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2424,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2423,
                  "name": "who",
                  "nodeType": "VariableDeclaration",
                  "scope": 2428,
                  "src": "254:11:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2422,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "254:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "253:13:15"
            },
            "payable": false,
            "returnParameters": {
              "id": 2427,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2426,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2428,
                  "src": "288:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2425,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "288:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "287:9:15"
            },
            "scope": 2446,
            "src": "235:62:15",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 2437,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2433,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2430,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 2437,
                  "src": "318:10:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2429,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "318:7:15",
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
                  "id": 2432,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 2437,
                  "src": "330:13:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2431,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "330:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "317:27:15"
            },
            "payable": false,
            "returnParameters": {
              "id": 2436,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2435,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2437,
                  "src": "361:4:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 2434,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "361:4:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "360:6:15"
            },
            "scope": 2446,
            "src": "300:67:15",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 2445,
            "name": "Transfer",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 2444,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2439,
                  "indexed": true,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 2445,
                  "src": "385:20:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2438,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "385:7:15",
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
                  "id": 2441,
                  "indexed": true,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 2445,
                  "src": "407:18:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2440,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "407:7:15",
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
                  "id": 2443,
                  "indexed": false,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 2445,
                  "src": "427:13:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2442,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "427:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "384:57:15"
            },
            "src": "370:72:15"
          }
        ],
        "scope": 2447,
        "src": "155:289:15"
      }
    ],
    "src": "0:445:15"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.23+commit.124ca40d.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.0",
  "updatedAt": "2018-06-06T22:54:27.588Z"
}