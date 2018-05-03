export const SafeMath = 
{
  "contractName": "SafeMath",
  "abi": [],
  "bytecode": "0x604c602c600b82828239805160001a60731460008114601c57601e565bfe5b5030600052607381538281f30073000000000000000000000000000000000000000030146080604052600080fd00a165627a7a7230582080cfc7d4684a0dc3e72f8a3d9682b8bb06d375ce97357746e8c53a56917706710029",
  "deployedBytecode": "0x73000000000000000000000000000000000000000030146080604052600080fd00a165627a7a7230582080cfc7d4684a0dc3e72f8a3d9682b8bb06d375ce97357746e8c53a56917706710029",
  "sourceMap": "117:1021:10:-;;132:2:-1;166:7;155:9;146:7;137:37;252:7;246:14;243:1;238:23;232:4;229:33;270:1;265:20;;;;222:63;;265:20;274:9;222:63;;298:9;295:1;288:20;328:4;319:7;311:22;352:7;343;336:24",
  "deployedSourceMap": "117:1021:10:-;;;;;;;;",
  "source": "pragma solidity ^0.4.18;\n\n\n/**\n * @title SafeMath\n * @dev Math operations with safety checks that throw on error\n */\nlibrary SafeMath {\n\n  /**\n  * @dev Multiplies two numbers, throws on overflow.\n  */\n  function mul(uint256 a, uint256 b) internal pure returns (uint256) {\n    if (a == 0) {\n      return 0;\n    }\n    uint256 c = a * b;\n    assert(c / a == b);\n    return c;\n  }\n\n  /**\n  * @dev Integer division of two numbers, truncating the quotient.\n  */\n  function div(uint256 a, uint256 b) internal pure returns (uint256) {\n    // assert(b > 0); // Solidity automatically throws when dividing by 0\n    uint256 c = a / b;\n    // assert(a == b * c + a % b); // There is no case in which this doesn't hold\n    return c;\n  }\n\n  /**\n  * @dev Subtracts two numbers, throws on overflow (i.e. if subtrahend is greater than minuend).\n  */\n  function sub(uint256 a, uint256 b) internal pure returns (uint256) {\n    assert(b <= a);\n    return a - b;\n  }\n\n  /**\n  * @dev Adds two numbers, throws on overflow.\n  */\n  function add(uint256 a, uint256 b) internal pure returns (uint256) {\n    uint256 c = a + b;\n    assert(c >= a);\n    return c;\n  }\n}\n",
  "sourcePath": "zeppelin-solidity/contracts/math/SafeMath.sol",
  "ast": {
    "absolutePath": "zeppelin-solidity/contracts/math/SafeMath.sol",
    "exportedSymbols": {
      "SafeMath": [
        1993
      ]
    },
    "id": 1994,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1897,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".18"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:10"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": "@title SafeMath\n@dev Math operations with safety checks that throw on error",
        "fullyImplemented": true,
        "id": 1993,
        "linearizedBaseContracts": [
          1993
        ],
        "name": "SafeMath",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 1929,
              "nodeType": "Block",
              "src": "270:106:10",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 1908,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 1906,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1899,
                      "src": "280:1:10",
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
                      "id": 1907,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "285:1:10",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "280:6:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 1912,
                  "nodeType": "IfStatement",
                  "src": "276:35:10",
                  "trueBody": {
                    "id": 1911,
                    "nodeType": "Block",
                    "src": "288:23:10",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 1909,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "303:1:10",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "functionReturnParameters": 1905,
                        "id": 1910,
                        "nodeType": "Return",
                        "src": "296:8:10"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    1914
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1914,
                      "name": "c",
                      "nodeType": "VariableDeclaration",
                      "scope": 1930,
                      "src": "316:9:10",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1913,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "316:7:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1918,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 1917,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 1915,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1899,
                      "src": "328:1:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "*",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 1916,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1901,
                      "src": "332:1:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "328:5:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "316:17:10"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 1924,
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
                          "id": 1922,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 1920,
                            "name": "c",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1914,
                            "src": "346:1:10",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "/",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 1921,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1899,
                            "src": "350:1:10",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "346:5:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 1923,
                          "name": "b",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1901,
                          "src": "355:1:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "346:10:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 1919,
                      "name": "assert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2599,
                      "src": "339:6:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_assert_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 1925,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "339:18:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1926,
                  "nodeType": "ExpressionStatement",
                  "src": "339:18:10"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1927,
                    "name": "c",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1914,
                    "src": "370:1:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 1905,
                  "id": 1928,
                  "nodeType": "Return",
                  "src": "363:8:10"
                }
              ]
            },
            "documentation": "@dev Multiplies two numbers, throws on overflow.",
            "id": 1930,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "mul",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1902,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1899,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 1930,
                  "src": "216:9:10",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1898,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "216:7:10",
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
                  "id": 1901,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 1930,
                  "src": "227:9:10",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1900,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "227:7:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "215:22:10"
            },
            "payable": false,
            "returnParameters": {
              "id": 1905,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1904,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1930,
                  "src": "261:7:10",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1903,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "261:7:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "260:9:10"
            },
            "scope": 1993,
            "src": "203:173:10",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1947,
              "nodeType": "Block",
              "src": "525:198:10",
              "statements": [
                {
                  "assignments": [
                    1940
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1940,
                      "name": "c",
                      "nodeType": "VariableDeclaration",
                      "scope": 1948,
                      "src": "605:9:10",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1939,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "605:7:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1944,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 1943,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 1941,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1932,
                      "src": "617:1:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "/",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 1942,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1934,
                      "src": "621:1:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "617:5:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "605:17:10"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1945,
                    "name": "c",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1940,
                    "src": "717:1:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 1938,
                  "id": 1946,
                  "nodeType": "Return",
                  "src": "710:8:10"
                }
              ]
            },
            "documentation": "@dev Integer division of two numbers, truncating the quotient.",
            "id": 1948,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "div",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1935,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1932,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 1948,
                  "src": "471:9:10",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1931,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "471:7:10",
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
                  "id": 1934,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 1948,
                  "src": "482:9:10",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1933,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "482:7:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "470:22:10"
            },
            "payable": false,
            "returnParameters": {
              "id": 1938,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1937,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1948,
                  "src": "516:7:10",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1936,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "516:7:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "515:9:10"
            },
            "scope": 1993,
            "src": "458:265:10",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1967,
              "nodeType": "Block",
              "src": "902:43:10",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 1960,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 1958,
                          "name": "b",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1952,
                          "src": "915:1:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 1959,
                          "name": "a",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1950,
                          "src": "920:1:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "915:6:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 1957,
                      "name": "assert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2599,
                      "src": "908:6:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_assert_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 1961,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "908:14:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1962,
                  "nodeType": "ExpressionStatement",
                  "src": "908:14:10"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 1965,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 1963,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1950,
                      "src": "935:1:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 1964,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1952,
                      "src": "939:1:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "935:5:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 1956,
                  "id": 1966,
                  "nodeType": "Return",
                  "src": "928:12:10"
                }
              ]
            },
            "documentation": "@dev Subtracts two numbers, throws on overflow (i.e. if subtrahend is greater than minuend).",
            "id": 1968,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "sub",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1953,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1950,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 1968,
                  "src": "848:9:10",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1949,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "848:7:10",
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
                  "id": 1952,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 1968,
                  "src": "859:9:10",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1951,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "859:7:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "847:22:10"
            },
            "payable": false,
            "returnParameters": {
              "id": 1956,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1955,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1968,
                  "src": "893:7:10",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1954,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "893:7:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "892:9:10"
            },
            "scope": 1993,
            "src": "835:110:10",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1991,
              "nodeType": "Block",
              "src": "1074:62:10",
              "statements": [
                {
                  "assignments": [
                    1978
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1978,
                      "name": "c",
                      "nodeType": "VariableDeclaration",
                      "scope": 1992,
                      "src": "1080:9:10",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1977,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1080:7:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1982,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 1981,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 1979,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1970,
                      "src": "1092:1:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "+",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 1980,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1972,
                      "src": "1096:1:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1092:5:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1080:17:10"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 1986,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 1984,
                          "name": "c",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1978,
                          "src": "1110:1:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 1985,
                          "name": "a",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1970,
                          "src": "1115:1:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1110:6:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 1983,
                      "name": "assert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2599,
                      "src": "1103:6:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_assert_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 1987,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1103:14:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1988,
                  "nodeType": "ExpressionStatement",
                  "src": "1103:14:10"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1989,
                    "name": "c",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1978,
                    "src": "1130:1:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 1976,
                  "id": 1990,
                  "nodeType": "Return",
                  "src": "1123:8:10"
                }
              ]
            },
            "documentation": "@dev Adds two numbers, throws on overflow.",
            "id": 1992,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "add",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1973,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1970,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 1992,
                  "src": "1020:9:10",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1969,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1020:7:10",
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
                  "id": 1972,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 1992,
                  "src": "1031:9:10",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1971,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1031:7:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1019:22:10"
            },
            "payable": false,
            "returnParameters": {
              "id": 1976,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1975,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1992,
                  "src": "1065:7:10",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1974,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1065:7:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1064:9:10"
            },
            "scope": 1993,
            "src": "1007:129:10",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 1994,
        "src": "117:1021:10"
      }
    ],
    "src": "0:1139:10"
  },
  "legacyAST": {
    "absolutePath": "zeppelin-solidity/contracts/math/SafeMath.sol",
    "exportedSymbols": {
      "SafeMath": [
        1993
      ]
    },
    "id": 1994,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1897,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".18"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:10"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": "@title SafeMath\n@dev Math operations with safety checks that throw on error",
        "fullyImplemented": true,
        "id": 1993,
        "linearizedBaseContracts": [
          1993
        ],
        "name": "SafeMath",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 1929,
              "nodeType": "Block",
              "src": "270:106:10",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 1908,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 1906,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1899,
                      "src": "280:1:10",
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
                      "id": 1907,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "285:1:10",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "280:6:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 1912,
                  "nodeType": "IfStatement",
                  "src": "276:35:10",
                  "trueBody": {
                    "id": 1911,
                    "nodeType": "Block",
                    "src": "288:23:10",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 1909,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "303:1:10",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "functionReturnParameters": 1905,
                        "id": 1910,
                        "nodeType": "Return",
                        "src": "296:8:10"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    1914
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1914,
                      "name": "c",
                      "nodeType": "VariableDeclaration",
                      "scope": 1930,
                      "src": "316:9:10",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1913,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "316:7:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1918,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 1917,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 1915,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1899,
                      "src": "328:1:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "*",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 1916,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1901,
                      "src": "332:1:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "328:5:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "316:17:10"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 1924,
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
                          "id": 1922,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 1920,
                            "name": "c",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1914,
                            "src": "346:1:10",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "/",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 1921,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1899,
                            "src": "350:1:10",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "346:5:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 1923,
                          "name": "b",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1901,
                          "src": "355:1:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "346:10:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 1919,
                      "name": "assert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2599,
                      "src": "339:6:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_assert_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 1925,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "339:18:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1926,
                  "nodeType": "ExpressionStatement",
                  "src": "339:18:10"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1927,
                    "name": "c",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1914,
                    "src": "370:1:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 1905,
                  "id": 1928,
                  "nodeType": "Return",
                  "src": "363:8:10"
                }
              ]
            },
            "documentation": "@dev Multiplies two numbers, throws on overflow.",
            "id": 1930,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "mul",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1902,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1899,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 1930,
                  "src": "216:9:10",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1898,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "216:7:10",
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
                  "id": 1901,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 1930,
                  "src": "227:9:10",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1900,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "227:7:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "215:22:10"
            },
            "payable": false,
            "returnParameters": {
              "id": 1905,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1904,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1930,
                  "src": "261:7:10",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1903,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "261:7:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "260:9:10"
            },
            "scope": 1993,
            "src": "203:173:10",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1947,
              "nodeType": "Block",
              "src": "525:198:10",
              "statements": [
                {
                  "assignments": [
                    1940
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1940,
                      "name": "c",
                      "nodeType": "VariableDeclaration",
                      "scope": 1948,
                      "src": "605:9:10",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1939,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "605:7:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1944,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 1943,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 1941,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1932,
                      "src": "617:1:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "/",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 1942,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1934,
                      "src": "621:1:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "617:5:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "605:17:10"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1945,
                    "name": "c",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1940,
                    "src": "717:1:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 1938,
                  "id": 1946,
                  "nodeType": "Return",
                  "src": "710:8:10"
                }
              ]
            },
            "documentation": "@dev Integer division of two numbers, truncating the quotient.",
            "id": 1948,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "div",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1935,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1932,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 1948,
                  "src": "471:9:10",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1931,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "471:7:10",
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
                  "id": 1934,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 1948,
                  "src": "482:9:10",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1933,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "482:7:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "470:22:10"
            },
            "payable": false,
            "returnParameters": {
              "id": 1938,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1937,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1948,
                  "src": "516:7:10",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1936,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "516:7:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "515:9:10"
            },
            "scope": 1993,
            "src": "458:265:10",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1967,
              "nodeType": "Block",
              "src": "902:43:10",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 1960,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 1958,
                          "name": "b",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1952,
                          "src": "915:1:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 1959,
                          "name": "a",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1950,
                          "src": "920:1:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "915:6:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 1957,
                      "name": "assert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2599,
                      "src": "908:6:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_assert_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 1961,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "908:14:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1962,
                  "nodeType": "ExpressionStatement",
                  "src": "908:14:10"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 1965,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 1963,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1950,
                      "src": "935:1:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 1964,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1952,
                      "src": "939:1:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "935:5:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 1956,
                  "id": 1966,
                  "nodeType": "Return",
                  "src": "928:12:10"
                }
              ]
            },
            "documentation": "@dev Subtracts two numbers, throws on overflow (i.e. if subtrahend is greater than minuend).",
            "id": 1968,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "sub",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1953,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1950,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 1968,
                  "src": "848:9:10",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1949,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "848:7:10",
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
                  "id": 1952,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 1968,
                  "src": "859:9:10",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1951,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "859:7:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "847:22:10"
            },
            "payable": false,
            "returnParameters": {
              "id": 1956,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1955,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1968,
                  "src": "893:7:10",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1954,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "893:7:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "892:9:10"
            },
            "scope": 1993,
            "src": "835:110:10",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1991,
              "nodeType": "Block",
              "src": "1074:62:10",
              "statements": [
                {
                  "assignments": [
                    1978
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1978,
                      "name": "c",
                      "nodeType": "VariableDeclaration",
                      "scope": 1992,
                      "src": "1080:9:10",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1977,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1080:7:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1982,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 1981,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 1979,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1970,
                      "src": "1092:1:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "+",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 1980,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1972,
                      "src": "1096:1:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1092:5:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1080:17:10"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 1986,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 1984,
                          "name": "c",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1978,
                          "src": "1110:1:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 1985,
                          "name": "a",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1970,
                          "src": "1115:1:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1110:6:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 1983,
                      "name": "assert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2599,
                      "src": "1103:6:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_assert_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 1987,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1103:14:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1988,
                  "nodeType": "ExpressionStatement",
                  "src": "1103:14:10"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1989,
                    "name": "c",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1978,
                    "src": "1130:1:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 1976,
                  "id": 1990,
                  "nodeType": "Return",
                  "src": "1123:8:10"
                }
              ]
            },
            "documentation": "@dev Adds two numbers, throws on overflow.",
            "id": 1992,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "add",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1973,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1970,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 1992,
                  "src": "1020:9:10",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1969,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1020:7:10",
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
                  "id": 1972,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 1992,
                  "src": "1031:9:10",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1971,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1031:7:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1019:22:10"
            },
            "payable": false,
            "returnParameters": {
              "id": 1976,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1975,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1992,
                  "src": "1065:7:10",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1974,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1065:7:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1064:9:10"
            },
            "scope": 1993,
            "src": "1007:129:10",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 1994,
        "src": "117:1021:10"
      }
    ],
    "src": "0:1139:10"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.23+commit.124ca40d.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.0",
  "updatedAt": "2018-05-03T07:27:33.016Z"
}