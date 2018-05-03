export const SafeMathUint256 = 
{
  "contractName": "SafeMathUint256",
  "abi": [],
  "bytecode": "0x604c602c600b82828239805160001a60731460008114601c57601e565bfe5b5030600052607381538281f30073000000000000000000000000000000000000000030146080604052600080fd00a165627a7a72305820fda443fae1c0539ddbeef602ac2e584e1d153e2942243a32e030fdfdce8179610029",
  "deployedBytecode": "0x73000000000000000000000000000000000000000030146080604052600080fd00a165627a7a72305820fda443fae1c0539ddbeef602ac2e584e1d153e2942243a32e030fdfdce8179610029",
  "sourceMap": "187:1061:4:-;;132:2:-1;166:7;155:9;146:7;137:37;252:7;246:14;243:1;238:23;232:4;229:33;270:1;265:20;;;;222:63;;265:20;274:9;222:63;;298:9;295:1;288:20;328:4;319:7;311:22;352:7;343;336:24",
  "deployedSourceMap": "187:1061:4:-;;;;;;;;",
  "source": "pragma solidity 0.4.23;\n\nimport \"zeppelin-solidity/contracts/math/SafeMath.sol\";\n\n/**\n * @title SafeMathUint256\n * @dev Uint256 math operations with safety checks that throw on error\n */\nlibrary SafeMathUint256 {\n    using SafeMath for uint256;\n\n    function min(uint256 a, uint256 b) internal pure returns (uint256) {\n        if (a <= b) {\n            return a;\n        } else {\n            return b;\n        }\n    }\n\n    function max(uint256 a, uint256 b) internal pure returns (uint256) {\n        if (a >= b) {\n            return a;\n        } else {\n            return b;\n        }\n    }\n\n    function getUint256Min() internal pure returns (uint256) {\n        return 0;\n    }\n\n    function getUint256Max() internal pure returns (uint256) {\n        return 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff;\n    }\n\n    function isMultipleOf(uint256 a, uint256 b) internal pure returns (bool) {\n        return a % b == 0;\n    }\n\n    // Float [fixed point] Operations\n    function fxpMul(uint256 a, uint256 b, uint256 base) internal pure returns (uint256) {\n        return a.mul(b).div(base);\n    }\n\n    function fxpDiv(uint256 a, uint256 b, uint256 base) internal pure returns (uint256) {\n        return a.mul(base).div(b);\n    }\n}",
  "sourcePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/external/SafeMathUint256.sol",
  "ast": {
    "absolutePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/external/SafeMathUint256.sol",
    "exportedSymbols": {
      "SafeMathUint256": [
        1674
      ]
    },
    "id": 1675,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1557,
        "literals": [
          "solidity",
          "0.4",
          ".23"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:4"
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/math/SafeMath.sol",
        "file": "zeppelin-solidity/contracts/math/SafeMath.sol",
        "id": 1558,
        "nodeType": "ImportDirective",
        "scope": 1675,
        "sourceUnit": 1994,
        "src": "25:55:4",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": "@title SafeMathUint256\n@dev Uint256 math operations with safety checks that throw on error",
        "fullyImplemented": true,
        "id": 1674,
        "linearizedBaseContracts": [
          1674
        ],
        "name": "SafeMathUint256",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 1561,
            "libraryName": {
              "contractScope": null,
              "id": 1559,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1993,
              "src": "223:8:4",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$1993",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "217:27:4",
            "typeName": {
              "id": 1560,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "236:7:4",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "body": {
              "id": 1580,
              "nodeType": "Block",
              "src": "317:100:4",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 1572,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 1570,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1563,
                      "src": "331:1:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<=",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 1571,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1565,
                      "src": "336:1:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "331:6:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 1578,
                    "nodeType": "Block",
                    "src": "378:33:4",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 1576,
                          "name": "b",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1565,
                          "src": "399:1:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "functionReturnParameters": 1569,
                        "id": 1577,
                        "nodeType": "Return",
                        "src": "392:8:4"
                      }
                    ]
                  },
                  "id": 1579,
                  "nodeType": "IfStatement",
                  "src": "327:84:4",
                  "trueBody": {
                    "id": 1575,
                    "nodeType": "Block",
                    "src": "339:33:4",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 1573,
                          "name": "a",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1563,
                          "src": "360:1:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "functionReturnParameters": 1569,
                        "id": 1574,
                        "nodeType": "Return",
                        "src": "353:8:4"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": null,
            "id": 1581,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "min",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1566,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1563,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 1581,
                  "src": "263:9:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1562,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "263:7:4",
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
                  "id": 1565,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 1581,
                  "src": "274:9:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1564,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "274:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "262:22:4"
            },
            "payable": false,
            "returnParameters": {
              "id": 1569,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1568,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1581,
                  "src": "308:7:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1567,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "308:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "307:9:4"
            },
            "scope": 1674,
            "src": "250:167:4",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1600,
              "nodeType": "Block",
              "src": "490:100:4",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 1592,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 1590,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1583,
                      "src": "504:1:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">=",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 1591,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1585,
                      "src": "509:1:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "504:6:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 1598,
                    "nodeType": "Block",
                    "src": "551:33:4",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 1596,
                          "name": "b",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1585,
                          "src": "572:1:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "functionReturnParameters": 1589,
                        "id": 1597,
                        "nodeType": "Return",
                        "src": "565:8:4"
                      }
                    ]
                  },
                  "id": 1599,
                  "nodeType": "IfStatement",
                  "src": "500:84:4",
                  "trueBody": {
                    "id": 1595,
                    "nodeType": "Block",
                    "src": "512:33:4",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 1593,
                          "name": "a",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1583,
                          "src": "533:1:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "functionReturnParameters": 1589,
                        "id": 1594,
                        "nodeType": "Return",
                        "src": "526:8:4"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": null,
            "id": 1601,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "max",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1586,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1583,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 1601,
                  "src": "436:9:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1582,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "436:7:4",
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
                  "id": 1585,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 1601,
                  "src": "447:9:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1584,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "447:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "435:22:4"
            },
            "payable": false,
            "returnParameters": {
              "id": 1589,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1588,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1601,
                  "src": "481:7:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1587,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "481:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "480:9:4"
            },
            "scope": 1674,
            "src": "423:167:4",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1608,
              "nodeType": "Block",
              "src": "653:25:4",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "30",
                    "id": 1606,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "670:1:4",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "functionReturnParameters": 1605,
                  "id": 1607,
                  "nodeType": "Return",
                  "src": "663:8:4"
                }
              ]
            },
            "documentation": null,
            "id": 1609,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getUint256Min",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1602,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "618:2:4"
            },
            "payable": false,
            "returnParameters": {
              "id": 1605,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1604,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1609,
                  "src": "644:7:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1603,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "644:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "643:9:4"
            },
            "scope": 1674,
            "src": "596:82:4",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1616,
              "nodeType": "Block",
              "src": "741:90:4",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "307866666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666",
                    "id": 1614,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "758:66:4",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639935_by_1",
                      "typeString": "int_const 1157...(70 digits omitted)...9935"
                    },
                    "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                  },
                  "functionReturnParameters": 1613,
                  "id": 1615,
                  "nodeType": "Return",
                  "src": "751:73:4"
                }
              ]
            },
            "documentation": null,
            "id": 1617,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getUint256Max",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1610,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "706:2:4"
            },
            "payable": false,
            "returnParameters": {
              "id": 1613,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1612,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1617,
                  "src": "732:7:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1611,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "732:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "731:9:4"
            },
            "scope": 1674,
            "src": "684:147:4",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1632,
              "nodeType": "Block",
              "src": "910:34:4",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 1630,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 1628,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "id": 1626,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1619,
                        "src": "927:1:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "%",
                      "rightExpression": {
                        "argumentTypes": null,
                        "id": 1627,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1621,
                        "src": "931:1:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "927:5:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 1629,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "936:1:4",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "927:10:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 1625,
                  "id": 1631,
                  "nodeType": "Return",
                  "src": "920:17:4"
                }
              ]
            },
            "documentation": null,
            "id": 1633,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isMultipleOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1622,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1619,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 1633,
                  "src": "859:9:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1618,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "859:7:4",
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
                  "id": 1621,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 1633,
                  "src": "870:9:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1620,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "870:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "858:22:4"
            },
            "payable": false,
            "returnParameters": {
              "id": 1625,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1624,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1633,
                  "src": "904:4:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 1623,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "904:4:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "903:6:4"
            },
            "scope": 1674,
            "src": "837:107:4",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1652,
              "nodeType": "Block",
              "src": "1072:42:4",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1649,
                        "name": "base",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1639,
                        "src": "1102:4:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 1646,
                            "name": "b",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1637,
                            "src": "1095:1:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 1644,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1635,
                            "src": "1089:1:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 1645,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "mul",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 1930,
                          "src": "1089:5:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 1647,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1089:8:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 1648,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "div",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1948,
                      "src": "1089:12:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 1650,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1089:18:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 1643,
                  "id": 1651,
                  "nodeType": "Return",
                  "src": "1082:25:4"
                }
              ]
            },
            "documentation": null,
            "id": 1653,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "fxpMul",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1640,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1635,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 1653,
                  "src": "1004:9:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1634,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1004:7:4",
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
                  "id": 1637,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 1653,
                  "src": "1015:9:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1636,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1015:7:4",
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
                  "id": 1639,
                  "name": "base",
                  "nodeType": "VariableDeclaration",
                  "scope": 1653,
                  "src": "1026:12:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1638,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1026:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1003:36:4"
            },
            "payable": false,
            "returnParameters": {
              "id": 1643,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1642,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1653,
                  "src": "1063:7:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1641,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1063:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1062:9:4"
            },
            "scope": 1674,
            "src": "988:126:4",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1672,
              "nodeType": "Block",
              "src": "1204:42:4",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1669,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1657,
                        "src": "1237:1:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 1666,
                            "name": "base",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1659,
                            "src": "1227:4:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 1664,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1655,
                            "src": "1221:1:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 1665,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "mul",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 1930,
                          "src": "1221:5:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 1667,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1221:11:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 1668,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "div",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1948,
                      "src": "1221:15:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 1670,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1221:18:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 1663,
                  "id": 1671,
                  "nodeType": "Return",
                  "src": "1214:25:4"
                }
              ]
            },
            "documentation": null,
            "id": 1673,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "fxpDiv",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1660,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1655,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 1673,
                  "src": "1136:9:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1654,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1136:7:4",
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
                  "id": 1657,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 1673,
                  "src": "1147:9:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1656,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1147:7:4",
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
                  "id": 1659,
                  "name": "base",
                  "nodeType": "VariableDeclaration",
                  "scope": 1673,
                  "src": "1158:12:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1658,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1158:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1135:36:4"
            },
            "payable": false,
            "returnParameters": {
              "id": 1663,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1662,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1673,
                  "src": "1195:7:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1661,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1195:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1194:9:4"
            },
            "scope": 1674,
            "src": "1120:126:4",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 1675,
        "src": "187:1061:4"
      }
    ],
    "src": "0:1248:4"
  },
  "legacyAST": {
    "absolutePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/external/SafeMathUint256.sol",
    "exportedSymbols": {
      "SafeMathUint256": [
        1674
      ]
    },
    "id": 1675,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1557,
        "literals": [
          "solidity",
          "0.4",
          ".23"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:4"
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/math/SafeMath.sol",
        "file": "zeppelin-solidity/contracts/math/SafeMath.sol",
        "id": 1558,
        "nodeType": "ImportDirective",
        "scope": 1675,
        "sourceUnit": 1994,
        "src": "25:55:4",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": "@title SafeMathUint256\n@dev Uint256 math operations with safety checks that throw on error",
        "fullyImplemented": true,
        "id": 1674,
        "linearizedBaseContracts": [
          1674
        ],
        "name": "SafeMathUint256",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 1561,
            "libraryName": {
              "contractScope": null,
              "id": 1559,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1993,
              "src": "223:8:4",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$1993",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "217:27:4",
            "typeName": {
              "id": 1560,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "236:7:4",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "body": {
              "id": 1580,
              "nodeType": "Block",
              "src": "317:100:4",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 1572,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 1570,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1563,
                      "src": "331:1:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<=",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 1571,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1565,
                      "src": "336:1:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "331:6:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 1578,
                    "nodeType": "Block",
                    "src": "378:33:4",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 1576,
                          "name": "b",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1565,
                          "src": "399:1:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "functionReturnParameters": 1569,
                        "id": 1577,
                        "nodeType": "Return",
                        "src": "392:8:4"
                      }
                    ]
                  },
                  "id": 1579,
                  "nodeType": "IfStatement",
                  "src": "327:84:4",
                  "trueBody": {
                    "id": 1575,
                    "nodeType": "Block",
                    "src": "339:33:4",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 1573,
                          "name": "a",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1563,
                          "src": "360:1:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "functionReturnParameters": 1569,
                        "id": 1574,
                        "nodeType": "Return",
                        "src": "353:8:4"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": null,
            "id": 1581,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "min",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1566,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1563,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 1581,
                  "src": "263:9:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1562,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "263:7:4",
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
                  "id": 1565,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 1581,
                  "src": "274:9:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1564,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "274:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "262:22:4"
            },
            "payable": false,
            "returnParameters": {
              "id": 1569,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1568,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1581,
                  "src": "308:7:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1567,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "308:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "307:9:4"
            },
            "scope": 1674,
            "src": "250:167:4",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1600,
              "nodeType": "Block",
              "src": "490:100:4",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 1592,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 1590,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1583,
                      "src": "504:1:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">=",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 1591,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1585,
                      "src": "509:1:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "504:6:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 1598,
                    "nodeType": "Block",
                    "src": "551:33:4",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 1596,
                          "name": "b",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1585,
                          "src": "572:1:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "functionReturnParameters": 1589,
                        "id": 1597,
                        "nodeType": "Return",
                        "src": "565:8:4"
                      }
                    ]
                  },
                  "id": 1599,
                  "nodeType": "IfStatement",
                  "src": "500:84:4",
                  "trueBody": {
                    "id": 1595,
                    "nodeType": "Block",
                    "src": "512:33:4",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 1593,
                          "name": "a",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1583,
                          "src": "533:1:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "functionReturnParameters": 1589,
                        "id": 1594,
                        "nodeType": "Return",
                        "src": "526:8:4"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": null,
            "id": 1601,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "max",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1586,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1583,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 1601,
                  "src": "436:9:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1582,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "436:7:4",
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
                  "id": 1585,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 1601,
                  "src": "447:9:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1584,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "447:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "435:22:4"
            },
            "payable": false,
            "returnParameters": {
              "id": 1589,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1588,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1601,
                  "src": "481:7:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1587,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "481:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "480:9:4"
            },
            "scope": 1674,
            "src": "423:167:4",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1608,
              "nodeType": "Block",
              "src": "653:25:4",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "30",
                    "id": 1606,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "670:1:4",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "functionReturnParameters": 1605,
                  "id": 1607,
                  "nodeType": "Return",
                  "src": "663:8:4"
                }
              ]
            },
            "documentation": null,
            "id": 1609,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getUint256Min",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1602,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "618:2:4"
            },
            "payable": false,
            "returnParameters": {
              "id": 1605,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1604,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1609,
                  "src": "644:7:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1603,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "644:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "643:9:4"
            },
            "scope": 1674,
            "src": "596:82:4",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1616,
              "nodeType": "Block",
              "src": "741:90:4",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "307866666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666",
                    "id": 1614,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "758:66:4",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639935_by_1",
                      "typeString": "int_const 1157...(70 digits omitted)...9935"
                    },
                    "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                  },
                  "functionReturnParameters": 1613,
                  "id": 1615,
                  "nodeType": "Return",
                  "src": "751:73:4"
                }
              ]
            },
            "documentation": null,
            "id": 1617,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getUint256Max",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1610,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "706:2:4"
            },
            "payable": false,
            "returnParameters": {
              "id": 1613,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1612,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1617,
                  "src": "732:7:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1611,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "732:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "731:9:4"
            },
            "scope": 1674,
            "src": "684:147:4",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1632,
              "nodeType": "Block",
              "src": "910:34:4",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 1630,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 1628,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "id": 1626,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1619,
                        "src": "927:1:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "%",
                      "rightExpression": {
                        "argumentTypes": null,
                        "id": 1627,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1621,
                        "src": "931:1:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "927:5:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 1629,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "936:1:4",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "927:10:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 1625,
                  "id": 1631,
                  "nodeType": "Return",
                  "src": "920:17:4"
                }
              ]
            },
            "documentation": null,
            "id": 1633,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isMultipleOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1622,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1619,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 1633,
                  "src": "859:9:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1618,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "859:7:4",
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
                  "id": 1621,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 1633,
                  "src": "870:9:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1620,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "870:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "858:22:4"
            },
            "payable": false,
            "returnParameters": {
              "id": 1625,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1624,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1633,
                  "src": "904:4:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 1623,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "904:4:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "903:6:4"
            },
            "scope": 1674,
            "src": "837:107:4",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1652,
              "nodeType": "Block",
              "src": "1072:42:4",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1649,
                        "name": "base",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1639,
                        "src": "1102:4:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 1646,
                            "name": "b",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1637,
                            "src": "1095:1:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 1644,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1635,
                            "src": "1089:1:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 1645,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "mul",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 1930,
                          "src": "1089:5:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 1647,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1089:8:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 1648,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "div",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1948,
                      "src": "1089:12:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 1650,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1089:18:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 1643,
                  "id": 1651,
                  "nodeType": "Return",
                  "src": "1082:25:4"
                }
              ]
            },
            "documentation": null,
            "id": 1653,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "fxpMul",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1640,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1635,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 1653,
                  "src": "1004:9:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1634,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1004:7:4",
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
                  "id": 1637,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 1653,
                  "src": "1015:9:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1636,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1015:7:4",
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
                  "id": 1639,
                  "name": "base",
                  "nodeType": "VariableDeclaration",
                  "scope": 1653,
                  "src": "1026:12:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1638,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1026:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1003:36:4"
            },
            "payable": false,
            "returnParameters": {
              "id": 1643,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1642,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1653,
                  "src": "1063:7:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1641,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1063:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1062:9:4"
            },
            "scope": 1674,
            "src": "988:126:4",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1672,
              "nodeType": "Block",
              "src": "1204:42:4",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1669,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1657,
                        "src": "1237:1:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 1666,
                            "name": "base",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1659,
                            "src": "1227:4:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 1664,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1655,
                            "src": "1221:1:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 1665,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "mul",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 1930,
                          "src": "1221:5:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 1667,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1221:11:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 1668,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "div",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1948,
                      "src": "1221:15:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 1670,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1221:18:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 1663,
                  "id": 1671,
                  "nodeType": "Return",
                  "src": "1214:25:4"
                }
              ]
            },
            "documentation": null,
            "id": 1673,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "fxpDiv",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1660,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1655,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 1673,
                  "src": "1136:9:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1654,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1136:7:4",
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
                  "id": 1657,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 1673,
                  "src": "1147:9:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1656,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1147:7:4",
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
                  "id": 1659,
                  "name": "base",
                  "nodeType": "VariableDeclaration",
                  "scope": 1673,
                  "src": "1158:12:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1658,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1158:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1135:36:4"
            },
            "payable": false,
            "returnParameters": {
              "id": 1663,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1662,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1673,
                  "src": "1195:7:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1661,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1195:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1194:9:4"
            },
            "scope": 1674,
            "src": "1120:126:4",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 1675,
        "src": "187:1061:4"
      }
    ],
    "src": "0:1248:4"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.23+commit.124ca40d.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.0",
  "updatedAt": "2018-05-03T07:27:33.014Z"
}