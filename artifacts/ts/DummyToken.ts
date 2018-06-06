export const DummyToken = 
{
  "contractName": "DummyToken",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "mintingFinished",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
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
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_value",
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
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
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
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "mint",
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
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_subtractedValue",
          "type": "uint256"
        }
      ],
      "name": "decreaseApproval",
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
      "constant": false,
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "finishMinting",
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
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
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
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
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
      "constant": false,
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_addedValue",
          "type": "uint256"
        }
      ],
      "name": "increaseApproval",
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
          "name": "_newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
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
          "type": "uint256"
        },
        {
          "name": "_totalSupply",
          "type": "uint256"
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
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Mint",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "MintFinished",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "previousOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipRenounced",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
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
      "constant": false,
      "inputs": [
        {
          "name": "_target",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "setBalance",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x60806040526000600360146101000a81548160ff0219169083151502179055503480156200002c57600080fd5b5060405162001d5b38038062001d5b8339810180604052810190808051820192919060200180518201929190602001805190602001909291908051906020019092919050505033600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508360049080519060200190620000cb92919062000140565b508260059080519060200190620000e492919062000140565b508160068190555080600181905550806000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555050505050620001ef565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200018357805160ff1916838001178555620001b4565b82800160010185558215620001b4579182015b82811115620001b357825182559160200191906001019062000196565b5b509050620001c39190620001c7565b5090565b620001ec91905b80821115620001e8576000816000905550600101620001ce565b5090565b90565b611b5c80620001ff6000396000f3006080604052600436106100fc576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806305d2035b1461010157806306fdde0314610130578063095ea7b3146101c057806318160ddd1461022557806323b872dd14610250578063313ce567146102d557806340c10f1914610300578063661884631461036557806370a08231146103ca578063715018a6146104215780637d64bcb4146104385780638da5cb5b1461046757806395d89b41146104be578063a9059cbb1461054e578063d73dd623146105b3578063dd62ed3e14610618578063e30443bc1461068f578063f2fde38b146106dc575b600080fd5b34801561010d57600080fd5b5061011661071f565b604051808215151515815260200191505060405180910390f35b34801561013c57600080fd5b50610145610732565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561018557808201518184015260208101905061016a565b50505050905090810190601f1680156101b25780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156101cc57600080fd5b5061020b600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506107d0565b604051808215151515815260200191505060405180910390f35b34801561023157600080fd5b5061023a6108c2565b6040518082815260200191505060405180910390f35b34801561025c57600080fd5b506102bb600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506108cc565b604051808215151515815260200191505060405180910390f35b3480156102e157600080fd5b506102ea610c86565b6040518082815260200191505060405180910390f35b34801561030c57600080fd5b5061034b600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610c8c565b604051808215151515815260200191505060405180910390f35b34801561037157600080fd5b506103b0600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610e72565b604051808215151515815260200191505060405180910390f35b3480156103d657600080fd5b5061040b600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611103565b6040518082815260200191505060405180910390f35b34801561042d57600080fd5b5061043661114b565b005b34801561044457600080fd5b5061044d611250565b604051808215151515815260200191505060405180910390f35b34801561047357600080fd5b5061047c611318565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156104ca57600080fd5b506104d361133e565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156105135780820151818401526020810190506104f8565b50505050905090810190601f1680156105405780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561055a57600080fd5b50610599600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506113dc565b604051808215151515815260200191505060405180910390f35b3480156105bf57600080fd5b506105fe600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506115fb565b604051808215151515815260200191505060405180910390f35b34801561062457600080fd5b50610679600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506117f7565b6040518082815260200191505060405180910390f35b34801561069b57600080fd5b506106da600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061187e565b005b3480156106e857600080fd5b5061071d600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611997565b005b600360149054906101000a900460ff1681565b60048054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156107c85780601f1061079d576101008083540402835291602001916107c8565b820191906000526020600020905b8154815290600101906020018083116107ab57829003601f168201915b505050505081565b600081600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b6000600154905090565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415151561090957600080fd5b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561095657600080fd5b600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482111515156109e157600080fd5b610a32826000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546119ff90919063ffffffff16565b6000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610ac5826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611a1890919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610b9682600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546119ff90919063ffffffff16565b600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190509392505050565b60065481565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610cea57600080fd5b600360149054906101000a900460ff16151515610d0657600080fd5b610d1b82600154611a1890919063ffffffff16565b600181905550610d72826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611a1890919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff167f0f6798a560793a54c3bcfe86a93cde1e73087d944c0ea20544137d4121396885836040518082815260200191505060405180910390a28273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b600080600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905080831115610f83576000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550611017565b610f9683826119ff90919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b8373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a3600191505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156111a757600080fd5b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167ff8df31144d9c2f0f6b59d69b8b98abd5459d07f2742c4df920b25aae33c6482060405160405180910390a26000600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156112ae57600080fd5b600360149054906101000a900460ff161515156112ca57600080fd5b6001600360146101000a81548160ff0219169083151502179055507fae5184fba832cb2b1f702aca6117b8d265eaf03ad33eb133f19dde0f5920fa0860405160405180910390a16001905090565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60058054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156113d45780601f106113a9576101008083540402835291602001916113d4565b820191906000526020600020905b8154815290600101906020018083116113b757829003601f168201915b505050505081565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415151561141957600080fd5b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561146657600080fd5b6114b7826000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546119ff90919063ffffffff16565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061154a826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611a1890919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b600061168c82600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611a1890919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a36001905092915050565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156118dc57600080fd5b6118e583611103565b9050808210156119215761191661190583836119ff90919063ffffffff16565b6001546119ff90919063ffffffff16565b60018190555061194f565b61194861193782846119ff90919063ffffffff16565b600154611a1890919063ffffffff16565b6001819055505b816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156119f357600080fd5b6119fc81611a34565b50565b6000828211151515611a0d57fe5b818303905092915050565b60008183019050828110151515611a2b57fe5b80905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515611a7057600080fd5b8073ffffffffffffffffffffffffffffffffffffffff16600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505600a165627a7a7230582066bfafd74ab0efc0b5d896a8b2bf257c575387f5dc4d73712d4ff3a34507e7080029",
  "deployedBytecode": "0x6080604052600436106100fc576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806305d2035b1461010157806306fdde0314610130578063095ea7b3146101c057806318160ddd1461022557806323b872dd14610250578063313ce567146102d557806340c10f1914610300578063661884631461036557806370a08231146103ca578063715018a6146104215780637d64bcb4146104385780638da5cb5b1461046757806395d89b41146104be578063a9059cbb1461054e578063d73dd623146105b3578063dd62ed3e14610618578063e30443bc1461068f578063f2fde38b146106dc575b600080fd5b34801561010d57600080fd5b5061011661071f565b604051808215151515815260200191505060405180910390f35b34801561013c57600080fd5b50610145610732565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561018557808201518184015260208101905061016a565b50505050905090810190601f1680156101b25780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156101cc57600080fd5b5061020b600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506107d0565b604051808215151515815260200191505060405180910390f35b34801561023157600080fd5b5061023a6108c2565b6040518082815260200191505060405180910390f35b34801561025c57600080fd5b506102bb600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506108cc565b604051808215151515815260200191505060405180910390f35b3480156102e157600080fd5b506102ea610c86565b6040518082815260200191505060405180910390f35b34801561030c57600080fd5b5061034b600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610c8c565b604051808215151515815260200191505060405180910390f35b34801561037157600080fd5b506103b0600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610e72565b604051808215151515815260200191505060405180910390f35b3480156103d657600080fd5b5061040b600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611103565b6040518082815260200191505060405180910390f35b34801561042d57600080fd5b5061043661114b565b005b34801561044457600080fd5b5061044d611250565b604051808215151515815260200191505060405180910390f35b34801561047357600080fd5b5061047c611318565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156104ca57600080fd5b506104d361133e565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156105135780820151818401526020810190506104f8565b50505050905090810190601f1680156105405780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561055a57600080fd5b50610599600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506113dc565b604051808215151515815260200191505060405180910390f35b3480156105bf57600080fd5b506105fe600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506115fb565b604051808215151515815260200191505060405180910390f35b34801561062457600080fd5b50610679600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506117f7565b6040518082815260200191505060405180910390f35b34801561069b57600080fd5b506106da600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061187e565b005b3480156106e857600080fd5b5061071d600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611997565b005b600360149054906101000a900460ff1681565b60048054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156107c85780601f1061079d576101008083540402835291602001916107c8565b820191906000526020600020905b8154815290600101906020018083116107ab57829003601f168201915b505050505081565b600081600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b6000600154905090565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415151561090957600080fd5b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561095657600080fd5b600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482111515156109e157600080fd5b610a32826000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546119ff90919063ffffffff16565b6000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610ac5826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611a1890919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610b9682600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546119ff90919063ffffffff16565b600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190509392505050565b60065481565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610cea57600080fd5b600360149054906101000a900460ff16151515610d0657600080fd5b610d1b82600154611a1890919063ffffffff16565b600181905550610d72826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611a1890919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff167f0f6798a560793a54c3bcfe86a93cde1e73087d944c0ea20544137d4121396885836040518082815260200191505060405180910390a28273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b600080600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905080831115610f83576000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550611017565b610f9683826119ff90919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b8373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a3600191505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156111a757600080fd5b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167ff8df31144d9c2f0f6b59d69b8b98abd5459d07f2742c4df920b25aae33c6482060405160405180910390a26000600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156112ae57600080fd5b600360149054906101000a900460ff161515156112ca57600080fd5b6001600360146101000a81548160ff0219169083151502179055507fae5184fba832cb2b1f702aca6117b8d265eaf03ad33eb133f19dde0f5920fa0860405160405180910390a16001905090565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60058054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156113d45780601f106113a9576101008083540402835291602001916113d4565b820191906000526020600020905b8154815290600101906020018083116113b757829003601f168201915b505050505081565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415151561141957600080fd5b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561146657600080fd5b6114b7826000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546119ff90919063ffffffff16565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061154a826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611a1890919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b600061168c82600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611a1890919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a36001905092915050565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156118dc57600080fd5b6118e583611103565b9050808210156119215761191661190583836119ff90919063ffffffff16565b6001546119ff90919063ffffffff16565b60018190555061194f565b61194861193782846119ff90919063ffffffff16565b600154611a1890919063ffffffff16565b6001819055505b816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156119f357600080fd5b6119fc81611a34565b50565b6000828211151515611a0d57fe5b818303905092915050565b60008183019050828110151515611a2b57fe5b80905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515611a7057600080fd5b8073ffffffffffffffffffffffffffffffffffffffff16600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505600a165627a7a7230582066bfafd74ab0efc0b5d896a8b2bf257c575387f5dc4d73712d4ff3a34507e7080029",
  "sourceMap": "210:727:7:-;;;548:5:16;518:35;;;;;;;;;;;;;;;;;;;;349:252:7;8:9:-1;5:2;;;30:1;27;20:12;5:2;349:252:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;575:10:11;567:5;;:18;;;;;;;;;;;;;;;;;;469:5:7;462:4;:12;;;;;;;;;;;;:::i;:::-;;489:7;480:6;:16;;;;;;;;;;;;:::i;:::-;;513:9;502:8;:20;;;;543:12;528;:27;;;;584:12;561:8;:20;570:10;561:20;;;;;;;;;;;;;;;:35;;;;349:252;;;;210:727;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
  "deployedSourceMap": "210:727:7:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;518:35:16;;8:9:-1;5:2;;;30:1;27;20:12;5:2;518:35:16;;;;;;;;;;;;;;;;;;;;;;;;;;;278:18:7;;8:9:-1;5:2;;;30:1;27;20:12;5:2;278:18:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;278:18:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1829:188:17;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1829:188:17;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;371:83:12;;8:9:-1;5:2;;;30:1;27;20:12;5:2;371:83:12;;;;;;;;;;;;;;;;;;;;;;;736:470:17;;8:9:-1;5:2;;;30:1;27;20:12;5:2;736:470:17;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;324:20:7;;8:9:-1;5:2;;;30:1;27;20:12;5:2;324:20:7;;;;;;;;;;;;;;;;;;;;;;;936:312:16;;8:9:-1;5:2;;;30:1;27;20:12;5:2;936:312:16;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3701:425:17;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3701:425:17;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1131:99:12;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1131:99:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;827:111:11;;8:9:-1;5:2;;;30:1;27;20:12;5:2;827:111:11;;;;;;1362:140:16;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1362:140:16;;;;;;;;;;;;;;;;;;;;;;;;;;;238:20:11;;8:9:-1;5:2;;;30:1;27;20:12;5:2;238:20:11;;;;;;;;;;;;;;;;;;;;;;;;;;;300::7;;8:9:-1;5:2;;;30:1;27;20:12;5:2;300:20:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;300:20:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;608:321:12;;8:9:-1;5:2;;;30:1;27;20:12;5:2;608:321:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2946:293:17;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2946:293:17;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2336:153;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2336:153:17;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;605:330:7;;8:9:-1;5:2;;;30:1;27;20:12;5:2;605:330:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1100:103:11;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1100:103:11;;;;;;;;;;;;;;;;;;;;;;;;;;;;518:35:16;;;;;;;;;;;;;:::o;278:18:7:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1829:188:17:-;1896:4;1940:6;1908:7;:19;1916:10;1908:19;;;;;;;;;;;;;;;:29;1928:8;1908:29;;;;;;;;;;;;;;;:38;;;;1978:8;1957:38;;1966:10;1957:38;;;1988:6;1957:38;;;;;;;;;;;;;;;;;;2008:4;2001:11;;1829:188;;;;:::o;371:83:12:-;415:7;437:12;;430:19;;371:83;:::o;736:470:17:-;842:4;879:1;864:17;;:3;:17;;;;856:26;;;;;;;;906:8;:15;915:5;906:15;;;;;;;;;;;;;;;;896:6;:25;;888:34;;;;;;;;946:7;:14;954:5;946:14;;;;;;;;;;;;;;;:26;961:10;946:26;;;;;;;;;;;;;;;;936:6;:36;;928:45;;;;;;;;998:27;1018:6;998:8;:15;1007:5;998:15;;;;;;;;;;;;;;;;:19;;:27;;;;:::i;:::-;980:8;:15;989:5;980:15;;;;;;;;;;;;;;;:45;;;;1047:25;1065:6;1047:8;:13;1056:3;1047:13;;;;;;;;;;;;;;;;:17;;:25;;;;:::i;:::-;1031:8;:13;1040:3;1031:13;;;;;;;;;;;;;;;:41;;;;1107:38;1138:6;1107:7;:14;1115:5;1107:14;;;;;;;;;;;;;;;:26;1122:10;1107:26;;;;;;;;;;;;;;;;:30;;:38;;;;:::i;:::-;1078:7;:14;1086:5;1078:14;;;;;;;;;;;;;;;:26;1093:10;1078:26;;;;;;;;;;;;;;;:67;;;;1172:3;1156:28;;1165:5;1156:28;;;1177:6;1156:28;;;;;;;;;;;;;;;;;;1197:4;1190:11;;736:470;;;;;:::o;324:20:7:-;;;;:::o;936:312:16:-;1050:4;682:5;;;;;;;;;;;668:19;;:10;:19;;;660:28;;;;;;;;593:15;;;;;;;;;;;592:16;584:25;;;;;;;;1079;1096:7;1079:12;;:16;;:25;;;;:::i;:::-;1064:12;:40;;;;1126:26;1144:7;1126:8;:13;1135:3;1126:13;;;;;;;;;;;;;;;;:17;;:26;;;;:::i;:::-;1110:8;:13;1119:3;1110:13;;;;;;;;;;;;;;;:42;;;;1168:3;1163:18;;;1173:7;1163:18;;;;;;;;;;;;;;;;;;1213:3;1192:34;;1209:1;1192:34;;;1218:7;1192:34;;;;;;;;;;;;;;;;;;1239:4;1232:11;;936:312;;;;:::o;3701:425:17:-;3804:4;3818:13;3834:7;:19;3842:10;3834:19;;;;;;;;;;;;;;;:29;3854:8;3834:29;;;;;;;;;;;;;;;;3818:45;;3892:8;3873:16;:27;3869:164;;;3942:1;3910:7;:19;3918:10;3910:19;;;;;;;;;;;;;;;:29;3930:8;3910:29;;;;;;;;;;;;;;;:33;;;;3869:164;;;3996:30;4009:16;3996:8;:12;;:30;;;;:::i;:::-;3964:7;:19;3972:10;3964:19;;;;;;;;;;;;;;;:29;3984:8;3964:29;;;;;;;;;;;;;;;:62;;;;3869:164;4064:8;4043:61;;4052:10;4043:61;;;4074:7;:19;4082:10;4074:19;;;;;;;;;;;;;;;:29;4094:8;4074:29;;;;;;;;;;;;;;;;4043:61;;;;;;;;;;;;;;;;;;4117:4;4110:11;;3701:425;;;;;:::o;1131:99:12:-;1187:7;1209:8;:16;1218:6;1209:16;;;;;;;;;;;;;;;;1202:23;;1131:99;;;:::o;827:111:11:-;719:5;;;;;;;;;;;705:19;;:10;:19;;;697:28;;;;;;;;903:5;;;;;;;;;;;884:25;;;;;;;;;;;;931:1;915:5;;:18;;;;;;;;;;;;;;;;;;827:111::o;1362:140:16:-;1421:4;719:5:11;;;;;;;;;;;705:19;;:10;:19;;;697:28;;;;;;;;593:15:16;;;;;;;;;;;592:16;584:25;;;;;;;;1451:4;1433:15;;:22;;;;;;;;;;;;;;;;;;1466:14;;;;;;;;;;1493:4;1486:11;;1362:140;:::o;238:20:11:-;;;;;;;;;;;;;:::o;300::7:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;608:321:12:-;671:4;706:1;691:17;;:3;:17;;;;683:26;;;;;;;;733:8;:20;742:10;733:20;;;;;;;;;;;;;;;;723:6;:30;;715:39;;;;;;;;784:32;809:6;784:8;:20;793:10;784:20;;;;;;;;;;;;;;;;:24;;:32;;;;:::i;:::-;761:8;:20;770:10;761:20;;;;;;;;;;;;;;;:55;;;;838:25;856:6;838:8;:13;847:3;838:13;;;;;;;;;;;;;;;;:17;;:25;;;;:::i;:::-;822:8;:13;831:3;822:13;;;;;;;;;;;;;;;:41;;;;895:3;874:33;;883:10;874:33;;;900:6;874:33;;;;;;;;;;;;;;;;;;920:4;913:11;;608:321;;;;:::o;2946:293:17:-;3044:4;3098:46;3132:11;3098:7;:19;3106:10;3098:19;;;;;;;;;;;;;;;:29;3118:8;3098:29;;;;;;;;;;;;;;;;:33;;:46;;;;:::i;:::-;3058:7;:19;3066:10;3058:19;;;;;;;;;;;;;;;:29;3078:8;3058:29;;;;;;;;;;;;;;;:87;;;;3177:8;3156:61;;3165:10;3156:61;;;3187:7;:19;3195:10;3187:19;;;;;;;;;;;;;;;:29;3207:8;3187:29;;;;;;;;;;;;;;;;3156:61;;;;;;;;;;;;;;;;;;3230:4;3223:11;;2946:293;;;;:::o;2336:153::-;2435:7;2459;:15;2467:6;2459:15;;;;;;;;;;;;;;;:25;2475:8;2459:25;;;;;;;;;;;;;;;;2452:32;;2336:153;;;;:::o;605:330:7:-;678:16;719:5:11;;;;;;;;;;;705:19;;:10;:19;;;697:28;;;;;;;;:18:7;707:7;697:9;:18::i;:::-;678:37;;734:11;725:6;:20;721:178;;;772:41;789:23;805:6;789:11;:15;;:23;;;;:::i;:::-;772:12;;:16;;:41;;;;:::i;:::-;757:12;:56;;;;721:178;;;851:41;868:23;879:11;868:6;:10;;:23;;;;:::i;:::-;851:12;;:16;;:41;;;;:::i;:::-;836:12;:56;;;;721:178;924:6;904:8;:17;913:7;904:17;;;;;;;;;;;;;;;:26;;;;605:330;;;:::o;1100:103:11:-;719:5;;;;;;;;;;;705:19;;:10;:19;;;697:28;;;;;;;;1169:29;1188:9;1169:18;:29::i;:::-;1100:103;:::o;1042:110:10:-;1100:7;1127:1;1122;:6;;1115:14;;;;;;1146:1;1142;:5;1135:12;;1042:110;;;;:::o;1214:123::-;1272:9;1297:1;1293;:5;1289:9;;1316:1;1311;:6;;1304:14;;;;;;1331:1;1324:8;;1214:123;;;;:::o;1338:171:11:-;1429:1;1408:23;;:9;:23;;;;1400:32;;;;;;;;1471:9;1443:38;;1464:5;;;;;;;;;;;1443:38;;;;;;;;;;;;1495:9;1487:5;;:17;;;;;;;;;;;;;;;;;;1338:171;:::o",
  "source": "pragma solidity 0.4.23;\n\nimport \"zeppelin-solidity/contracts/token/ERC20/MintableToken.sol\";\nimport \"zeppelin-solidity/contracts/math/SafeMath.sol\";\nimport \"zeppelin-solidity/contracts/ownership/Ownable.sol\";\n\ncontract DummyToken is MintableToken {\n  using SafeMath for uint;\n  string public name;\n  string public symbol;\n  uint public decimals;\n\n  constructor(\n    string _name,\n    string _symbol,\n    uint _decimals,\n    uint _totalSupply)\n    public\n  {\n    name = _name;\n    symbol = _symbol;\n    decimals = _decimals;\n    totalSupply_ = _totalSupply;\n    balances[msg.sender] = _totalSupply;\n  }\n\n  function setBalance(address _target, uint _value) public onlyOwner {\n    uint currBalance = balanceOf(_target);\n    if (_value < currBalance) {\n        totalSupply_ = totalSupply_.sub(currBalance.sub(_value));\n    } else {\n        totalSupply_ = totalSupply_.add(_value.sub(currBalance));\n    }\n    balances[_target] = _value;\n  }\n}\n",
  "sourcePath": "/Users/alexsoong/Source/set-protocol/set-protocol-contracts/contracts/test/DummyToken.sol",
  "ast": {
    "absolutePath": "/Users/alexsoong/Source/set-protocol/set-protocol-contracts/contracts/test/DummyToken.sol",
    "exportedSymbols": {
      "DummyToken": [
        1787
      ]
    },
    "id": 1788,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1689,
        "literals": [
          "solidity",
          "0.4",
          ".23"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:7"
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/token/ERC20/MintableToken.sol",
        "file": "zeppelin-solidity/contracts/token/ERC20/MintableToken.sol",
        "id": 1690,
        "nodeType": "ImportDirective",
        "scope": 1788,
        "sourceUnit": 2553,
        "src": "25:67:7",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/math/SafeMath.sol",
        "file": "zeppelin-solidity/contracts/math/SafeMath.sol",
        "id": 1691,
        "nodeType": "ImportDirective",
        "scope": 1788,
        "sourceUnit": 2156,
        "src": "93:55:7",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/ownership/Ownable.sol",
        "file": "zeppelin-solidity/contracts/ownership/Ownable.sol",
        "id": 1692,
        "nodeType": "ImportDirective",
        "scope": 1788,
        "sourceUnit": 2242,
        "src": "149:59:7",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 1693,
              "name": "MintableToken",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 2552,
              "src": "233:13:7",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_MintableToken_$2552",
                "typeString": "contract MintableToken"
              }
            },
            "id": 1694,
            "nodeType": "InheritanceSpecifier",
            "src": "233:13:7"
          }
        ],
        "contractDependencies": [
          2241,
          2337,
          2414,
          2446,
          2552,
          2799
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 1787,
        "linearizedBaseContracts": [
          1787,
          2552,
          2241,
          2799,
          2337,
          2414,
          2446
        ],
        "name": "DummyToken",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 1697,
            "libraryName": {
              "contractScope": null,
              "id": 1695,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 2155,
              "src": "257:8:7",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$2155",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "251:24:7",
            "typeName": {
              "id": 1696,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "270:4:7",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "constant": false,
            "id": 1699,
            "name": "name",
            "nodeType": "VariableDeclaration",
            "scope": 1787,
            "src": "278:18:7",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 1698,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "278:6:7",
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
            "id": 1701,
            "name": "symbol",
            "nodeType": "VariableDeclaration",
            "scope": 1787,
            "src": "300:20:7",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 1700,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "300:6:7",
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
            "id": 1703,
            "name": "decimals",
            "nodeType": "VariableDeclaration",
            "scope": 1787,
            "src": "324:20:7",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 1702,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "324:4:7",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1737,
              "nodeType": "Block",
              "src": "456:145:7",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1716,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 1714,
                      "name": "name",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1699,
                      "src": "462:4:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 1715,
                      "name": "_name",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1705,
                      "src": "469:5:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "462:12:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 1717,
                  "nodeType": "ExpressionStatement",
                  "src": "462:12:7"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1720,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 1718,
                      "name": "symbol",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1701,
                      "src": "480:6:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 1719,
                      "name": "_symbol",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1707,
                      "src": "489:7:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "480:16:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 1721,
                  "nodeType": "ExpressionStatement",
                  "src": "480:16:7"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1724,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 1722,
                      "name": "decimals",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1703,
                      "src": "502:8:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 1723,
                      "name": "_decimals",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1709,
                      "src": "513:9:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "502:20:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 1725,
                  "nodeType": "ExpressionStatement",
                  "src": "502:20:7"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1728,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 1726,
                      "name": "totalSupply_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2256,
                      "src": "528:12:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 1727,
                      "name": "_totalSupply",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1711,
                      "src": "543:12:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "528:27:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 1729,
                  "nodeType": "ExpressionStatement",
                  "src": "528:27:7"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1735,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 1730,
                        "name": "balances",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2254,
                        "src": "561:8:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 1733,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 1731,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2814,
                          "src": "570:3:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 1732,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "570:10:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "561:20:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 1734,
                      "name": "_totalSupply",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1711,
                      "src": "584:12:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "561:35:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 1736,
                  "nodeType": "ExpressionStatement",
                  "src": "561:35:7"
                }
              ]
            },
            "documentation": null,
            "id": 1738,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1712,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1705,
                  "name": "_name",
                  "nodeType": "VariableDeclaration",
                  "scope": 1738,
                  "src": "366:12:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 1704,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "366:6:7",
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
                  "id": 1707,
                  "name": "_symbol",
                  "nodeType": "VariableDeclaration",
                  "scope": 1738,
                  "src": "384:14:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 1706,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "384:6:7",
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
                  "id": 1709,
                  "name": "_decimals",
                  "nodeType": "VariableDeclaration",
                  "scope": 1738,
                  "src": "404:14:7",
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
                    "src": "404:4:7",
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
                  "id": 1711,
                  "name": "_totalSupply",
                  "nodeType": "VariableDeclaration",
                  "scope": 1738,
                  "src": "424:17:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1710,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "424:4:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "360:82:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 1713,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "456:0:7"
            },
            "scope": 1787,
            "src": "349:252:7",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1785,
              "nodeType": "Block",
              "src": "672:263:7",
              "statements": [
                {
                  "assignments": [
                    1748
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1748,
                      "name": "currBalance",
                      "nodeType": "VariableDeclaration",
                      "scope": 1786,
                      "src": "678:16:7",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1747,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "678:4:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1752,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1750,
                        "name": "_target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1740,
                        "src": "707:7:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 1749,
                      "name": "balanceOf",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        2336
                      ],
                      "referencedDeclaration": 2336,
                      "src": "697:9:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (address) view returns (uint256)"
                      }
                    },
                    "id": 1751,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "697:18:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "678:37:7"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 1755,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 1753,
                      "name": "_value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1742,
                      "src": "725:6:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 1754,
                      "name": "currBalance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1748,
                      "src": "734:11:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "725:20:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 1777,
                    "nodeType": "Block",
                    "src": "826:73:7",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 1775,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 1767,
                            "name": "totalSupply_",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2256,
                            "src": "836:12:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "id": 1772,
                                    "name": "currBalance",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 1748,
                                    "src": "879:11:7",
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
                                    "id": 1770,
                                    "name": "_value",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 1742,
                                    "src": "868:6:7",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "id": 1771,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "sub",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 2130,
                                  "src": "868:10:7",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                  }
                                },
                                "id": 1773,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "868:23:7",
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
                                "id": 1768,
                                "name": "totalSupply_",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 2256,
                                "src": "851:12:7",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 1769,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "add",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 2154,
                              "src": "851:16:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 1774,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "851:41:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "836:56:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 1776,
                        "nodeType": "ExpressionStatement",
                        "src": "836:56:7"
                      }
                    ]
                  },
                  "id": 1778,
                  "nodeType": "IfStatement",
                  "src": "721:178:7",
                  "trueBody": {
                    "id": 1766,
                    "nodeType": "Block",
                    "src": "747:73:7",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 1764,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 1756,
                            "name": "totalSupply_",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2256,
                            "src": "757:12:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "id": 1761,
                                    "name": "_value",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 1742,
                                    "src": "805:6:7",
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
                                    "id": 1759,
                                    "name": "currBalance",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 1748,
                                    "src": "789:11:7",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "id": 1760,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "sub",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 2130,
                                  "src": "789:15:7",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                  }
                                },
                                "id": 1762,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "789:23:7",
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
                                "id": 1757,
                                "name": "totalSupply_",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 2256,
                                "src": "772:12:7",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 1758,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sub",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 2130,
                              "src": "772:16:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 1763,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "772:41:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "757:56:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 1765,
                        "nodeType": "ExpressionStatement",
                        "src": "757:56:7"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1783,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 1779,
                        "name": "balances",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2254,
                        "src": "904:8:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 1781,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 1780,
                        "name": "_target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1740,
                        "src": "913:7:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "904:17:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 1782,
                      "name": "_value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1742,
                      "src": "924:6:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "904:26:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 1784,
                  "nodeType": "ExpressionStatement",
                  "src": "904:26:7"
                }
              ]
            },
            "documentation": null,
            "id": 1786,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 1745,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 1744,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 2189,
                  "src": "662:9:7",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "662:9:7"
              }
            ],
            "name": "setBalance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1743,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1740,
                  "name": "_target",
                  "nodeType": "VariableDeclaration",
                  "scope": 1786,
                  "src": "625:15:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1739,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "625:7:7",
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
                  "id": 1742,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 1786,
                  "src": "642:11:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1741,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "642:4:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "624:30:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 1746,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "672:0:7"
            },
            "scope": 1787,
            "src": "605:330:7",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 1788,
        "src": "210:727:7"
      }
    ],
    "src": "0:938:7"
  },
  "legacyAST": {
    "absolutePath": "/Users/alexsoong/Source/set-protocol/set-protocol-contracts/contracts/test/DummyToken.sol",
    "exportedSymbols": {
      "DummyToken": [
        1787
      ]
    },
    "id": 1788,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1689,
        "literals": [
          "solidity",
          "0.4",
          ".23"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:7"
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/token/ERC20/MintableToken.sol",
        "file": "zeppelin-solidity/contracts/token/ERC20/MintableToken.sol",
        "id": 1690,
        "nodeType": "ImportDirective",
        "scope": 1788,
        "sourceUnit": 2553,
        "src": "25:67:7",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/math/SafeMath.sol",
        "file": "zeppelin-solidity/contracts/math/SafeMath.sol",
        "id": 1691,
        "nodeType": "ImportDirective",
        "scope": 1788,
        "sourceUnit": 2156,
        "src": "93:55:7",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/ownership/Ownable.sol",
        "file": "zeppelin-solidity/contracts/ownership/Ownable.sol",
        "id": 1692,
        "nodeType": "ImportDirective",
        "scope": 1788,
        "sourceUnit": 2242,
        "src": "149:59:7",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 1693,
              "name": "MintableToken",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 2552,
              "src": "233:13:7",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_MintableToken_$2552",
                "typeString": "contract MintableToken"
              }
            },
            "id": 1694,
            "nodeType": "InheritanceSpecifier",
            "src": "233:13:7"
          }
        ],
        "contractDependencies": [
          2241,
          2337,
          2414,
          2446,
          2552,
          2799
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 1787,
        "linearizedBaseContracts": [
          1787,
          2552,
          2241,
          2799,
          2337,
          2414,
          2446
        ],
        "name": "DummyToken",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 1697,
            "libraryName": {
              "contractScope": null,
              "id": 1695,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 2155,
              "src": "257:8:7",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$2155",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "251:24:7",
            "typeName": {
              "id": 1696,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "270:4:7",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "constant": false,
            "id": 1699,
            "name": "name",
            "nodeType": "VariableDeclaration",
            "scope": 1787,
            "src": "278:18:7",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 1698,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "278:6:7",
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
            "id": 1701,
            "name": "symbol",
            "nodeType": "VariableDeclaration",
            "scope": 1787,
            "src": "300:20:7",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 1700,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "300:6:7",
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
            "id": 1703,
            "name": "decimals",
            "nodeType": "VariableDeclaration",
            "scope": 1787,
            "src": "324:20:7",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 1702,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "324:4:7",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1737,
              "nodeType": "Block",
              "src": "456:145:7",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1716,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 1714,
                      "name": "name",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1699,
                      "src": "462:4:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 1715,
                      "name": "_name",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1705,
                      "src": "469:5:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "462:12:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 1717,
                  "nodeType": "ExpressionStatement",
                  "src": "462:12:7"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1720,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 1718,
                      "name": "symbol",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1701,
                      "src": "480:6:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 1719,
                      "name": "_symbol",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1707,
                      "src": "489:7:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "480:16:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 1721,
                  "nodeType": "ExpressionStatement",
                  "src": "480:16:7"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1724,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 1722,
                      "name": "decimals",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1703,
                      "src": "502:8:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 1723,
                      "name": "_decimals",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1709,
                      "src": "513:9:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "502:20:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 1725,
                  "nodeType": "ExpressionStatement",
                  "src": "502:20:7"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1728,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 1726,
                      "name": "totalSupply_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2256,
                      "src": "528:12:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 1727,
                      "name": "_totalSupply",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1711,
                      "src": "543:12:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "528:27:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 1729,
                  "nodeType": "ExpressionStatement",
                  "src": "528:27:7"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1735,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 1730,
                        "name": "balances",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2254,
                        "src": "561:8:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 1733,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 1731,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2814,
                          "src": "570:3:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 1732,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "570:10:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "561:20:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 1734,
                      "name": "_totalSupply",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1711,
                      "src": "584:12:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "561:35:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 1736,
                  "nodeType": "ExpressionStatement",
                  "src": "561:35:7"
                }
              ]
            },
            "documentation": null,
            "id": 1738,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1712,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1705,
                  "name": "_name",
                  "nodeType": "VariableDeclaration",
                  "scope": 1738,
                  "src": "366:12:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 1704,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "366:6:7",
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
                  "id": 1707,
                  "name": "_symbol",
                  "nodeType": "VariableDeclaration",
                  "scope": 1738,
                  "src": "384:14:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 1706,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "384:6:7",
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
                  "id": 1709,
                  "name": "_decimals",
                  "nodeType": "VariableDeclaration",
                  "scope": 1738,
                  "src": "404:14:7",
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
                    "src": "404:4:7",
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
                  "id": 1711,
                  "name": "_totalSupply",
                  "nodeType": "VariableDeclaration",
                  "scope": 1738,
                  "src": "424:17:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1710,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "424:4:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "360:82:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 1713,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "456:0:7"
            },
            "scope": 1787,
            "src": "349:252:7",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1785,
              "nodeType": "Block",
              "src": "672:263:7",
              "statements": [
                {
                  "assignments": [
                    1748
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1748,
                      "name": "currBalance",
                      "nodeType": "VariableDeclaration",
                      "scope": 1786,
                      "src": "678:16:7",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1747,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "678:4:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1752,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1750,
                        "name": "_target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1740,
                        "src": "707:7:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 1749,
                      "name": "balanceOf",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        2336
                      ],
                      "referencedDeclaration": 2336,
                      "src": "697:9:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (address) view returns (uint256)"
                      }
                    },
                    "id": 1751,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "697:18:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "678:37:7"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 1755,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 1753,
                      "name": "_value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1742,
                      "src": "725:6:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 1754,
                      "name": "currBalance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1748,
                      "src": "734:11:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "725:20:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 1777,
                    "nodeType": "Block",
                    "src": "826:73:7",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 1775,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 1767,
                            "name": "totalSupply_",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2256,
                            "src": "836:12:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "id": 1772,
                                    "name": "currBalance",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 1748,
                                    "src": "879:11:7",
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
                                    "id": 1770,
                                    "name": "_value",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 1742,
                                    "src": "868:6:7",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "id": 1771,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "sub",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 2130,
                                  "src": "868:10:7",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                  }
                                },
                                "id": 1773,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "868:23:7",
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
                                "id": 1768,
                                "name": "totalSupply_",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 2256,
                                "src": "851:12:7",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 1769,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "add",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 2154,
                              "src": "851:16:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 1774,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "851:41:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "836:56:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 1776,
                        "nodeType": "ExpressionStatement",
                        "src": "836:56:7"
                      }
                    ]
                  },
                  "id": 1778,
                  "nodeType": "IfStatement",
                  "src": "721:178:7",
                  "trueBody": {
                    "id": 1766,
                    "nodeType": "Block",
                    "src": "747:73:7",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 1764,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 1756,
                            "name": "totalSupply_",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2256,
                            "src": "757:12:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "id": 1761,
                                    "name": "_value",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 1742,
                                    "src": "805:6:7",
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
                                    "id": 1759,
                                    "name": "currBalance",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 1748,
                                    "src": "789:11:7",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "id": 1760,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "sub",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 2130,
                                  "src": "789:15:7",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                  }
                                },
                                "id": 1762,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "789:23:7",
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
                                "id": 1757,
                                "name": "totalSupply_",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 2256,
                                "src": "772:12:7",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 1758,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sub",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 2130,
                              "src": "772:16:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 1763,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "772:41:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "757:56:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 1765,
                        "nodeType": "ExpressionStatement",
                        "src": "757:56:7"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1783,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 1779,
                        "name": "balances",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2254,
                        "src": "904:8:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 1781,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 1780,
                        "name": "_target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1740,
                        "src": "913:7:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "904:17:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 1782,
                      "name": "_value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1742,
                      "src": "924:6:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "904:26:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 1784,
                  "nodeType": "ExpressionStatement",
                  "src": "904:26:7"
                }
              ]
            },
            "documentation": null,
            "id": 1786,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 1745,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 1744,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 2189,
                  "src": "662:9:7",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "662:9:7"
              }
            ],
            "name": "setBalance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1743,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1740,
                  "name": "_target",
                  "nodeType": "VariableDeclaration",
                  "scope": 1786,
                  "src": "625:15:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1739,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "625:7:7",
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
                  "id": 1742,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 1786,
                  "src": "642:11:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1741,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "642:4:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "624:30:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 1746,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "672:0:7"
            },
            "scope": 1787,
            "src": "605:330:7",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 1788,
        "src": "210:727:7"
      }
    ],
    "src": "0:938:7"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.23+commit.124ca40d.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.0",
  "updatedAt": "2018-06-06T22:54:27.579Z"
}