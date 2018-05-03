export const Set = 
{
  "contractName": "Set",
  "abi": [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_sender",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_quantity",
          "type": "uint256"
        }
      ],
      "name": "LogIssuance",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_sender",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_quantity",
          "type": "uint256"
        }
      ],
      "name": "LogRedemption",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "quantity",
          "type": "uint256"
        }
      ],
      "name": "issue",
      "outputs": [
        {
          "name": "success",
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
          "name": "quantity",
          "type": "uint256"
        }
      ],
      "name": "redeem",
      "outputs": [
        {
          "name": "success",
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
  "source": "pragma solidity 0.4.23;\n\n\n/**\n * @title Set interface\n */\ncontract Set {\n  function issue(uint quantity) public returns (bool success);\n  function redeem(uint quantity) public returns (bool success);\n\n  event LogIssuance(\n    address indexed _sender,\n    uint indexed _quantity\n  );\n\n  event LogRedemption(\n    address indexed _sender,\n    uint indexed _quantity\n  );\n}\n",
  "sourcePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/lib/Set.sol",
  "ast": {
    "absolutePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/lib/Set.sol",
    "exportedSymbols": {
      "Set": [
        1734
      ]
    },
    "id": 1735,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1707,
        "literals": [
          "solidity",
          "0.4",
          ".23"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:6"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": "@title Set interface",
        "fullyImplemented": false,
        "id": 1734,
        "linearizedBaseContracts": [
          1734
        ],
        "name": "Set",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 1714,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "issue",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1710,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1709,
                  "name": "quantity",
                  "nodeType": "VariableDeclaration",
                  "scope": 1714,
                  "src": "90:13:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1708,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "90:4:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "89:15:6"
            },
            "payable": false,
            "returnParameters": {
              "id": 1713,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1712,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 1714,
                  "src": "121:12:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 1711,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "121:4:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "120:14:6"
            },
            "scope": 1734,
            "src": "75:60:6",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 1721,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "redeem",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1717,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1716,
                  "name": "quantity",
                  "nodeType": "VariableDeclaration",
                  "scope": 1721,
                  "src": "154:13:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1715,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "154:4:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "153:15:6"
            },
            "payable": false,
            "returnParameters": {
              "id": 1720,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1719,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 1721,
                  "src": "185:12:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 1718,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "185:4:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "184:14:6"
            },
            "scope": 1734,
            "src": "138:61:6",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 1727,
            "name": "LogIssuance",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 1726,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1723,
                  "indexed": true,
                  "name": "_sender",
                  "nodeType": "VariableDeclaration",
                  "scope": 1727,
                  "src": "226:23:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1722,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "226:7:6",
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
                  "id": 1725,
                  "indexed": true,
                  "name": "_quantity",
                  "nodeType": "VariableDeclaration",
                  "scope": 1727,
                  "src": "255:22:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1724,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "255:4:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "220:61:6"
            },
            "src": "203:79:6"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 1733,
            "name": "LogRedemption",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 1732,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1729,
                  "indexed": true,
                  "name": "_sender",
                  "nodeType": "VariableDeclaration",
                  "scope": 1733,
                  "src": "311:23:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1728,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "311:7:6",
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
                  "id": 1731,
                  "indexed": true,
                  "name": "_quantity",
                  "nodeType": "VariableDeclaration",
                  "scope": 1733,
                  "src": "340:22:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1730,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "340:4:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "305:61:6"
            },
            "src": "286:81:6"
          }
        ],
        "scope": 1735,
        "src": "58:311:6"
      }
    ],
    "src": "0:370:6"
  },
  "legacyAST": {
    "absolutePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/lib/Set.sol",
    "exportedSymbols": {
      "Set": [
        1734
      ]
    },
    "id": 1735,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1707,
        "literals": [
          "solidity",
          "0.4",
          ".23"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:6"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": "@title Set interface",
        "fullyImplemented": false,
        "id": 1734,
        "linearizedBaseContracts": [
          1734
        ],
        "name": "Set",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 1714,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "issue",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1710,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1709,
                  "name": "quantity",
                  "nodeType": "VariableDeclaration",
                  "scope": 1714,
                  "src": "90:13:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1708,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "90:4:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "89:15:6"
            },
            "payable": false,
            "returnParameters": {
              "id": 1713,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1712,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 1714,
                  "src": "121:12:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 1711,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "121:4:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "120:14:6"
            },
            "scope": 1734,
            "src": "75:60:6",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 1721,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "redeem",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1717,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1716,
                  "name": "quantity",
                  "nodeType": "VariableDeclaration",
                  "scope": 1721,
                  "src": "154:13:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1715,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "154:4:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "153:15:6"
            },
            "payable": false,
            "returnParameters": {
              "id": 1720,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1719,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 1721,
                  "src": "185:12:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 1718,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "185:4:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "184:14:6"
            },
            "scope": 1734,
            "src": "138:61:6",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 1727,
            "name": "LogIssuance",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 1726,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1723,
                  "indexed": true,
                  "name": "_sender",
                  "nodeType": "VariableDeclaration",
                  "scope": 1727,
                  "src": "226:23:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1722,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "226:7:6",
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
                  "id": 1725,
                  "indexed": true,
                  "name": "_quantity",
                  "nodeType": "VariableDeclaration",
                  "scope": 1727,
                  "src": "255:22:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1724,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "255:4:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "220:61:6"
            },
            "src": "203:79:6"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 1733,
            "name": "LogRedemption",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 1732,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1729,
                  "indexed": true,
                  "name": "_sender",
                  "nodeType": "VariableDeclaration",
                  "scope": 1733,
                  "src": "311:23:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1728,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "311:7:6",
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
                  "id": 1731,
                  "indexed": true,
                  "name": "_quantity",
                  "nodeType": "VariableDeclaration",
                  "scope": 1733,
                  "src": "340:22:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1730,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "340:4:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "305:61:6"
            },
            "src": "286:81:6"
          }
        ],
        "scope": 1735,
        "src": "58:311:6"
      }
    ],
    "src": "0:370:6"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.23+commit.124ca40d.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.0",
  "updatedAt": "2018-05-03T07:27:33.015Z"
}