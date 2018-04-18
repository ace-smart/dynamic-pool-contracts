export const SafeMathUint256 = 
{
  "contractName": "SafeMathUint256",
  "abi": [],
  "bytecode": "0x604c602c600b82828239805160001a60731460008114601c57601e565bfe5b5030600052607381538281f30073000000000000000000000000000000000000000030146060604052600080fd00a165627a7a72305820e215af55ab9818a4cfbf6534bc28c734a3b8e29f160920e211a47bf4d41c907b0029",
  "deployedBytecode": "0x73000000000000000000000000000000000000000030146060604052600080fd00a165627a7a72305820e215af55ab9818a4cfbf6534bc28c734a3b8e29f160920e211a47bf4d41c907b0029",
  "sourceMap": "187:1061:2:-;;132:2:-1;166:7;155:9;146:7;137:37;252:7;246:14;243:1;238:23;232:4;229:33;270:1;265:20;;;;222:63;;265:20;274:9;222:63;;298:9;295:1;288:20;328:4;319:7;311:22;352:7;343;336:24",
  "deployedSourceMap": "187:1061:2:-;;;;;;;;",
  "source": "pragma solidity 0.4.21;\n\nimport \"zeppelin-solidity/contracts/math/SafeMath.sol\";\n\n/**\n * @title SafeMathUint256\n * @dev Uint256 math operations with safety checks that throw on error\n */\nlibrary SafeMathUint256 {\n    using SafeMath for uint256;\n\n    function min(uint256 a, uint256 b) internal pure returns (uint256) {\n        if (a <= b) {\n            return a;\n        } else {\n            return b;\n        }\n    }\n\n    function max(uint256 a, uint256 b) internal pure returns (uint256) {\n        if (a >= b) {\n            return a;\n        } else {\n            return b;\n        }\n    }\n\n    function getUint256Min() internal pure returns (uint256) {\n        return 0;\n    }\n\n    function getUint256Max() internal pure returns (uint256) {\n        return 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff;\n    }\n\n    function isMultipleOf(uint256 a, uint256 b) internal pure returns (bool) {\n        return a % b == 0;\n    }\n\n    // Float [fixed point] Operations\n    function fxpMul(uint256 a, uint256 b, uint256 base) internal pure returns (uint256) {\n        return a.mul(b).div(base);\n    }\n\n    function fxpDiv(uint256 a, uint256 b, uint256 base) internal pure returns (uint256) {\n        return a.mul(base).div(b);\n    }\n}",
  "sourcePath": "/Users/felixfeng/Dapps/set-protocol-contracts/contracts/external/SafeMathUint256.sol",
  "ast": {
    "absolutePath": "/Users/felixfeng/Dapps/set-protocol-contracts/contracts/external/SafeMathUint256.sol",
    "exportedSymbols": {
      "SafeMathUint256": [
        863
      ]
    },
    "id": 864,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 746,
        "literals": [
          "solidity",
          "0.4",
          ".21"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:2"
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/math/SafeMath.sol",
        "file": "zeppelin-solidity/contracts/math/SafeMath.sol",
        "id": 747,
        "nodeType": "ImportDirective",
        "scope": 864,
        "sourceUnit": 1033,
        "src": "25:55:2",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": "@title SafeMathUint256\n@dev Uint256 math operations with safety checks that throw on error",
        "fullyImplemented": true,
        "id": 863,
        "linearizedBaseContracts": [
          863
        ],
        "name": "SafeMathUint256",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 750,
            "libraryName": {
              "contractScope": null,
              "id": 748,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1032,
              "src": "223:8:2",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$1032",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "217:27:2",
            "typeName": {
              "id": 749,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "236:7:2",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "body": {
              "id": 769,
              "nodeType": "Block",
              "src": "317:100:2",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 761,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 759,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 752,
                      "src": "331:1:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<=",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 760,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 754,
                      "src": "336:1:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "331:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 767,
                    "nodeType": "Block",
                    "src": "378:33:2",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 765,
                          "name": "b",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 754,
                          "src": "399:1:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "functionReturnParameters": 758,
                        "id": 766,
                        "nodeType": "Return",
                        "src": "392:8:2"
                      }
                    ]
                  },
                  "id": 768,
                  "nodeType": "IfStatement",
                  "src": "327:84:2",
                  "trueBody": {
                    "id": 764,
                    "nodeType": "Block",
                    "src": "339:33:2",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 762,
                          "name": "a",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 752,
                          "src": "360:1:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "functionReturnParameters": 758,
                        "id": 763,
                        "nodeType": "Return",
                        "src": "353:8:2"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": null,
            "id": 770,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "min",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 755,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 752,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 770,
                  "src": "263:9:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 751,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "263:7:2",
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
                  "id": 754,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 770,
                  "src": "274:9:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 753,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "274:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "262:22:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 758,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 757,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 770,
                  "src": "308:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 756,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "308:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "307:9:2"
            },
            "scope": 863,
            "src": "250:167:2",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 789,
              "nodeType": "Block",
              "src": "490:100:2",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 781,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 779,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 772,
                      "src": "504:1:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">=",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 780,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 774,
                      "src": "509:1:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "504:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 787,
                    "nodeType": "Block",
                    "src": "551:33:2",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 785,
                          "name": "b",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 774,
                          "src": "572:1:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "functionReturnParameters": 778,
                        "id": 786,
                        "nodeType": "Return",
                        "src": "565:8:2"
                      }
                    ]
                  },
                  "id": 788,
                  "nodeType": "IfStatement",
                  "src": "500:84:2",
                  "trueBody": {
                    "id": 784,
                    "nodeType": "Block",
                    "src": "512:33:2",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 782,
                          "name": "a",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 772,
                          "src": "533:1:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "functionReturnParameters": 778,
                        "id": 783,
                        "nodeType": "Return",
                        "src": "526:8:2"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": null,
            "id": 790,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "max",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 775,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 772,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 790,
                  "src": "436:9:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 771,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "436:7:2",
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
                  "id": 774,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 790,
                  "src": "447:9:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 773,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "447:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "435:22:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 778,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 777,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 790,
                  "src": "481:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 776,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "481:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "480:9:2"
            },
            "scope": 863,
            "src": "423:167:2",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 797,
              "nodeType": "Block",
              "src": "653:25:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "30",
                    "id": 795,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "670:1:2",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "functionReturnParameters": 794,
                  "id": 796,
                  "nodeType": "Return",
                  "src": "663:8:2"
                }
              ]
            },
            "documentation": null,
            "id": 798,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getUint256Min",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 791,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "618:2:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 794,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 793,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 798,
                  "src": "644:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 792,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "644:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "643:9:2"
            },
            "scope": 863,
            "src": "596:82:2",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 805,
              "nodeType": "Block",
              "src": "741:90:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "307866666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666",
                    "id": 803,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "758:66:2",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639935_by_1",
                      "typeString": "int_const 1157...(70 digits omitted)...9935"
                    },
                    "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                  },
                  "functionReturnParameters": 802,
                  "id": 804,
                  "nodeType": "Return",
                  "src": "751:73:2"
                }
              ]
            },
            "documentation": null,
            "id": 806,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getUint256Max",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 799,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "706:2:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 802,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 801,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 806,
                  "src": "732:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 800,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "732:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "731:9:2"
            },
            "scope": 863,
            "src": "684:147:2",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 821,
              "nodeType": "Block",
              "src": "910:34:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 819,
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
                      "id": 817,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "id": 815,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 808,
                        "src": "927:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "%",
                      "rightExpression": {
                        "argumentTypes": null,
                        "id": 816,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 810,
                        "src": "931:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "927:5:2",
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
                      "id": 818,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "936:1:2",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "927:10:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 814,
                  "id": 820,
                  "nodeType": "Return",
                  "src": "920:17:2"
                }
              ]
            },
            "documentation": null,
            "id": 822,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isMultipleOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 811,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 808,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 822,
                  "src": "859:9:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 807,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "859:7:2",
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
                  "id": 810,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 822,
                  "src": "870:9:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 809,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "870:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "858:22:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 814,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 813,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 822,
                  "src": "904:4:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 812,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "904:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "903:6:2"
            },
            "scope": 863,
            "src": "837:107:2",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 841,
              "nodeType": "Block",
              "src": "1072:42:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 838,
                        "name": "base",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 828,
                        "src": "1102:4:2",
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
                            "id": 835,
                            "name": "b",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 826,
                            "src": "1095:1:2",
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
                            "id": 833,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 824,
                            "src": "1089:1:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 834,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "mul",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 969,
                          "src": "1089:5:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 836,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1089:8:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 837,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "div",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 987,
                      "src": "1089:12:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 839,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1089:18:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 832,
                  "id": 840,
                  "nodeType": "Return",
                  "src": "1082:25:2"
                }
              ]
            },
            "documentation": null,
            "id": 842,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "fxpMul",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 829,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 824,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 842,
                  "src": "1004:9:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 823,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1004:7:2",
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
                  "id": 826,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 842,
                  "src": "1015:9:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 825,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1015:7:2",
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
                  "id": 828,
                  "name": "base",
                  "nodeType": "VariableDeclaration",
                  "scope": 842,
                  "src": "1026:12:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 827,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1026:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1003:36:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 832,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 831,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 842,
                  "src": "1063:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 830,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1063:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1062:9:2"
            },
            "scope": 863,
            "src": "988:126:2",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 861,
              "nodeType": "Block",
              "src": "1204:42:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 858,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 846,
                        "src": "1237:1:2",
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
                            "id": 855,
                            "name": "base",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 848,
                            "src": "1227:4:2",
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
                            "id": 853,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 844,
                            "src": "1221:1:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 854,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "mul",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 969,
                          "src": "1221:5:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 856,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1221:11:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 857,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "div",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 987,
                      "src": "1221:15:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 859,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1221:18:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 852,
                  "id": 860,
                  "nodeType": "Return",
                  "src": "1214:25:2"
                }
              ]
            },
            "documentation": null,
            "id": 862,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "fxpDiv",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 849,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 844,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 862,
                  "src": "1136:9:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 843,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1136:7:2",
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
                  "id": 846,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 862,
                  "src": "1147:9:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 845,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1147:7:2",
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
                  "id": 848,
                  "name": "base",
                  "nodeType": "VariableDeclaration",
                  "scope": 862,
                  "src": "1158:12:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 847,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1158:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1135:36:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 852,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 851,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 862,
                  "src": "1195:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 850,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1195:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1194:9:2"
            },
            "scope": 863,
            "src": "1120:126:2",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 864,
        "src": "187:1061:2"
      }
    ],
    "src": "0:1248:2"
  },
  "legacyAST": {
    "absolutePath": "/Users/felixfeng/Dapps/set-protocol-contracts/contracts/external/SafeMathUint256.sol",
    "exportedSymbols": {
      "SafeMathUint256": [
        863
      ]
    },
    "id": 864,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 746,
        "literals": [
          "solidity",
          "0.4",
          ".21"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:2"
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/math/SafeMath.sol",
        "file": "zeppelin-solidity/contracts/math/SafeMath.sol",
        "id": 747,
        "nodeType": "ImportDirective",
        "scope": 864,
        "sourceUnit": 1033,
        "src": "25:55:2",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": "@title SafeMathUint256\n@dev Uint256 math operations with safety checks that throw on error",
        "fullyImplemented": true,
        "id": 863,
        "linearizedBaseContracts": [
          863
        ],
        "name": "SafeMathUint256",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 750,
            "libraryName": {
              "contractScope": null,
              "id": 748,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1032,
              "src": "223:8:2",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$1032",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "217:27:2",
            "typeName": {
              "id": 749,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "236:7:2",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "body": {
              "id": 769,
              "nodeType": "Block",
              "src": "317:100:2",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 761,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 759,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 752,
                      "src": "331:1:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<=",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 760,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 754,
                      "src": "336:1:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "331:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 767,
                    "nodeType": "Block",
                    "src": "378:33:2",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 765,
                          "name": "b",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 754,
                          "src": "399:1:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "functionReturnParameters": 758,
                        "id": 766,
                        "nodeType": "Return",
                        "src": "392:8:2"
                      }
                    ]
                  },
                  "id": 768,
                  "nodeType": "IfStatement",
                  "src": "327:84:2",
                  "trueBody": {
                    "id": 764,
                    "nodeType": "Block",
                    "src": "339:33:2",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 762,
                          "name": "a",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 752,
                          "src": "360:1:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "functionReturnParameters": 758,
                        "id": 763,
                        "nodeType": "Return",
                        "src": "353:8:2"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": null,
            "id": 770,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "min",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 755,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 752,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 770,
                  "src": "263:9:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 751,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "263:7:2",
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
                  "id": 754,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 770,
                  "src": "274:9:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 753,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "274:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "262:22:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 758,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 757,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 770,
                  "src": "308:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 756,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "308:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "307:9:2"
            },
            "scope": 863,
            "src": "250:167:2",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 789,
              "nodeType": "Block",
              "src": "490:100:2",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 781,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 779,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 772,
                      "src": "504:1:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">=",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 780,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 774,
                      "src": "509:1:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "504:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 787,
                    "nodeType": "Block",
                    "src": "551:33:2",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 785,
                          "name": "b",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 774,
                          "src": "572:1:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "functionReturnParameters": 778,
                        "id": 786,
                        "nodeType": "Return",
                        "src": "565:8:2"
                      }
                    ]
                  },
                  "id": 788,
                  "nodeType": "IfStatement",
                  "src": "500:84:2",
                  "trueBody": {
                    "id": 784,
                    "nodeType": "Block",
                    "src": "512:33:2",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 782,
                          "name": "a",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 772,
                          "src": "533:1:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "functionReturnParameters": 778,
                        "id": 783,
                        "nodeType": "Return",
                        "src": "526:8:2"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": null,
            "id": 790,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "max",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 775,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 772,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 790,
                  "src": "436:9:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 771,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "436:7:2",
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
                  "id": 774,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 790,
                  "src": "447:9:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 773,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "447:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "435:22:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 778,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 777,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 790,
                  "src": "481:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 776,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "481:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "480:9:2"
            },
            "scope": 863,
            "src": "423:167:2",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 797,
              "nodeType": "Block",
              "src": "653:25:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "30",
                    "id": 795,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "670:1:2",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "functionReturnParameters": 794,
                  "id": 796,
                  "nodeType": "Return",
                  "src": "663:8:2"
                }
              ]
            },
            "documentation": null,
            "id": 798,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getUint256Min",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 791,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "618:2:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 794,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 793,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 798,
                  "src": "644:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 792,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "644:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "643:9:2"
            },
            "scope": 863,
            "src": "596:82:2",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 805,
              "nodeType": "Block",
              "src": "741:90:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "307866666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666",
                    "id": 803,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "758:66:2",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639935_by_1",
                      "typeString": "int_const 1157...(70 digits omitted)...9935"
                    },
                    "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                  },
                  "functionReturnParameters": 802,
                  "id": 804,
                  "nodeType": "Return",
                  "src": "751:73:2"
                }
              ]
            },
            "documentation": null,
            "id": 806,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getUint256Max",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 799,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "706:2:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 802,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 801,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 806,
                  "src": "732:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 800,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "732:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "731:9:2"
            },
            "scope": 863,
            "src": "684:147:2",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 821,
              "nodeType": "Block",
              "src": "910:34:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 819,
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
                      "id": 817,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "id": 815,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 808,
                        "src": "927:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "%",
                      "rightExpression": {
                        "argumentTypes": null,
                        "id": 816,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 810,
                        "src": "931:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "927:5:2",
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
                      "id": 818,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "936:1:2",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "927:10:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 814,
                  "id": 820,
                  "nodeType": "Return",
                  "src": "920:17:2"
                }
              ]
            },
            "documentation": null,
            "id": 822,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isMultipleOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 811,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 808,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 822,
                  "src": "859:9:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 807,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "859:7:2",
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
                  "id": 810,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 822,
                  "src": "870:9:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 809,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "870:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "858:22:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 814,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 813,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 822,
                  "src": "904:4:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 812,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "904:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "903:6:2"
            },
            "scope": 863,
            "src": "837:107:2",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 841,
              "nodeType": "Block",
              "src": "1072:42:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 838,
                        "name": "base",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 828,
                        "src": "1102:4:2",
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
                            "id": 835,
                            "name": "b",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 826,
                            "src": "1095:1:2",
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
                            "id": 833,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 824,
                            "src": "1089:1:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 834,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "mul",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 969,
                          "src": "1089:5:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 836,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1089:8:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 837,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "div",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 987,
                      "src": "1089:12:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 839,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1089:18:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 832,
                  "id": 840,
                  "nodeType": "Return",
                  "src": "1082:25:2"
                }
              ]
            },
            "documentation": null,
            "id": 842,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "fxpMul",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 829,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 824,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 842,
                  "src": "1004:9:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 823,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1004:7:2",
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
                  "id": 826,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 842,
                  "src": "1015:9:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 825,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1015:7:2",
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
                  "id": 828,
                  "name": "base",
                  "nodeType": "VariableDeclaration",
                  "scope": 842,
                  "src": "1026:12:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 827,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1026:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1003:36:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 832,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 831,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 842,
                  "src": "1063:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 830,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1063:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1062:9:2"
            },
            "scope": 863,
            "src": "988:126:2",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 861,
              "nodeType": "Block",
              "src": "1204:42:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 858,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 846,
                        "src": "1237:1:2",
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
                            "id": 855,
                            "name": "base",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 848,
                            "src": "1227:4:2",
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
                            "id": 853,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 844,
                            "src": "1221:1:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 854,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "mul",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 969,
                          "src": "1221:5:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 856,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1221:11:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 857,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "div",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 987,
                      "src": "1221:15:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 859,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1221:18:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 852,
                  "id": 860,
                  "nodeType": "Return",
                  "src": "1214:25:2"
                }
              ]
            },
            "documentation": null,
            "id": 862,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "fxpDiv",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 849,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 844,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 862,
                  "src": "1136:9:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 843,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1136:7:2",
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
                  "id": 846,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 862,
                  "src": "1147:9:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 845,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1147:7:2",
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
                  "id": 848,
                  "name": "base",
                  "nodeType": "VariableDeclaration",
                  "scope": 862,
                  "src": "1158:12:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 847,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1158:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1135:36:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 852,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 851,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 862,
                  "src": "1195:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 850,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1195:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1194:9:2"
            },
            "scope": 863,
            "src": "1120:126:2",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 864,
        "src": "187:1061:2"
      }
    ],
    "src": "0:1248:2"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.21+commit.dfe3193c.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.0",
  "updatedAt": "2018-04-17T18:30:28.872Z"
}