export const buypoolAbi = [
                          	{
                          		inputs: [
                          			{
                          				internalType: 'contract IERC20',
                          				name: '_token',
                          				type: 'address'
                          			}
                          		],
                          		stateMutability: 'nonpayable',
                          		type: 'constructor'
                          	},
                          	{
                          		anonymous: false,
                          		inputs: [
                          			{
                          				indexed: true,
                          				internalType: 'address',
                          				name: 'previousOwner',
                          				type: 'address'
                          			},
                          			{
                          				indexed: true,
                          				internalType: 'address',
                          				name: 'newOwner',
                          				type: 'address'
                          			}
                          		],
                          		name: 'OwnershipTransferred',
                          		type: 'event'
                          	},
                          	{
                          		inputs: [],
                          		name: 'NEXtoken',
                          		outputs: [
                          			{
                          				internalType: 'contract IERC20',
                          				name: '',
                          				type: 'address'
                          			}
                          		],
                          		stateMutability: 'view',
                          		type: 'function'
                          	},
                          	{
                          		inputs: [
                          			{
                          				internalType: 'uint256',
                          				name: '_starttime',
                          				type: 'uint256'
                          			},
                          			{
                          				internalType: 'uint256',
                          				name: '_price',
                          				type: 'uint256'
                          			},
                          			{
                          				internalType: 'uint256',
                          				name: '_totalAmount',
                          				type: 'uint256'
                          			},
                          			{
                          				internalType: 'uint256',
                          				name: '_currentAmount',
                          				type: 'uint256'
                          			},
                          			{
                          				internalType: 'address',
                          				name: '_dev',
                          				type: 'address'
                          			}
                          		],
                          		name: 'addpool',
                          		outputs: [],
                          		stateMutability: 'nonpayable',
                          		type: 'function'
                          	},
                          	{
                          		inputs: [
                          			{
                          				internalType: 'uint256',
                          				name: '_pid',
                          				type: 'uint256'
                          			},
                          			{
                          				internalType: 'uint256',
                          				name: 'amount',
                          				type: 'uint256'
                          			}
                          		],
                          		name: 'buy',
                          		outputs: [
                          			{
                          				internalType: 'bool',
                          				name: '',
                          				type: 'bool'
                          			}
                          		],
                          		stateMutability: 'payable',
                          		type: 'function'
                          	},
                          	{
                          		inputs: [],
                          		name: 'getpool',
                          		outputs: [
                          			{
                          				components: [
                          					{
                          						internalType: 'uint256',
                          						name: 'starttime',
                          						type: 'uint256'
                          					},
                          					{
                          						internalType: 'uint256',
                          						name: 'price',
                          						type: 'uint256'
                          					},
                          					{
                          						internalType: 'uint256',
                          						name: 'totalAmount',
                          						type: 'uint256'
                          					},
                          					{
                          						internalType: 'uint256',
                          						name: 'currentAmount',
                          						type: 'uint256'
                          					},
                          					{
                          						internalType: 'uint256',
                          						name: 'minBuyAmount',
                          						type: 'uint256'
                          					},
                          					{
                          						internalType: 'address',
                          						name: 'dev',
                          						type: 'address'
                          					}
                          				],
                          				internalType: 'struct BuyPool.PoolInfo[]',
                          				name: '',
                          				type: 'tuple[]'
                          			}
                          		],
                          		stateMutability: 'view',
                          		type: 'function'
                          	},
                          	{
                          		inputs: [],
                          		name: 'owner',
                          		outputs: [
                          			{
                          				internalType: 'address',
                          				name: '',
                          				type: 'address'
                          			}
                          		],
                          		stateMutability: 'view',
                          		type: 'function'
                          	},
                          	{
                          		inputs: [
                          			{
                          				internalType: 'uint256',
                          				name: '',
                          				type: 'uint256'
                          			}
                          		],
                          		name: 'poolinfo',
                          		outputs: [
                          			{
                          				internalType: 'uint256',
                          				name: 'starttime',
                          				type: 'uint256'
                          			},
                          			{
                          				internalType: 'uint256',
                          				name: 'price',
                          				type: 'uint256'
                          			},
                          			{
                          				internalType: 'uint256',
                          				name: 'totalAmount',
                          				type: 'uint256'
                          			},
                          			{
                          				internalType: 'uint256',
                          				name: 'currentAmount',
                          				type: 'uint256'
                          			},
                          			{
                          				internalType: 'uint256',
                          				name: 'minBuyAmount',
                          				type: 'uint256'
                          			},
                          			{
                          				internalType: 'address',
                          				name: 'dev',
                          				type: 'address'
                          			}
                          		],
                          		stateMutability: 'view',
                          		type: 'function'
                          	},
                          	{
                          		inputs: [],
                          		name: 'renounceOwnership',
                          		outputs: [],
                          		stateMutability: 'nonpayable',
                          		type: 'function'
                          	},
                          	{
                          		inputs: [
                          			{
                          				internalType: 'address',
                          				name: 'newOwner',
                          				type: 'address'
                          			}
                          		],
                          		name: 'transferOwnership',
                          		outputs: [],
                          		stateMutability: 'nonpayable',
                          		type: 'function'
                          	},
                          	{
                          		inputs: [
                          			{
                          				internalType: 'uint256',
                          				name: '',
                          				type: 'uint256'
                          			},
                          			{
                          				internalType: 'address',
                          				name: '',
                          				type: 'address'
                          			}
                          		],
                          		name: 'users',
                          		outputs: [
                          			{
                          				internalType: 'uint256',
                          				name: 'NEXamount',
                          				type: 'uint256'
                          			},
                          			{
                          				internalType: 'uint256',
                          				name: 'ETHamount',
                          				type: 'uint256'
                          			}
                          		],
                          		stateMutability: 'view',
                          		type: 'function'
                          	}
];
export const NEXAbi = [
                      	{
                      		inputs: [
                      			{
                      				internalType: 'uint256',
                      				name: 'initialSupply',
                      				type: 'uint256'
                      			},
                      			{
                      				internalType: 'string',
                      				name: 'name',
                      				type: 'string'
                      			},
                      			{
                      				internalType: 'string',
                      				name: 'symbol',
                      				type: 'string'
                      			}
                      		],
                      		stateMutability: 'nonpayable',
                      		type: 'constructor'
                      	},
                      	{
                      		anonymous: false,
                      		inputs: [
                      			{
                      				indexed: true,
                      				internalType: 'address',
                      				name: 'owner',
                      				type: 'address'
                      			},
                      			{
                      				indexed: true,
                      				internalType: 'address',
                      				name: 'spender',
                      				type: 'address'
                      			},
                      			{
                      				indexed: false,
                      				internalType: 'uint256',
                      				name: 'value',
                      				type: 'uint256'
                      			}
                      		],
                      		name: 'Approval',
                      		type: 'event'
                      	},
                      	{
                      		anonymous: false,
                      		inputs: [
                      			{
                      				indexed: true,
                      				internalType: 'address',
                      				name: 'from',
                      				type: 'address'
                      			},
                      			{
                      				indexed: true,
                      				internalType: 'address',
                      				name: 'to',
                      				type: 'address'
                      			},
                      			{
                      				indexed: false,
                      				internalType: 'uint256',
                      				name: 'value',
                      				type: 'uint256'
                      			}
                      		],
                      		name: 'Transfer',
                      		type: 'event'
                      	},
                      	{
                      		inputs: [
                      			{
                      				internalType: 'address',
                      				name: 'owner',
                      				type: 'address'
                      			},
                      			{
                      				internalType: 'address',
                      				name: 'spender',
                      				type: 'address'
                      			}
                      		],
                      		name: 'allowance',
                      		outputs: [
                      			{
                      				internalType: 'uint256',
                      				name: '',
                      				type: 'uint256'
                      			}
                      		],
                      		stateMutability: 'view',
                      		type: 'function'
                      	},
                      	{
                      		inputs: [
                      			{
                      				internalType: 'address',
                      				name: 'spender',
                      				type: 'address'
                      			},
                      			{
                      				internalType: 'uint256',
                      				name: 'amount',
                      				type: 'uint256'
                      			}
                      		],
                      		name: 'approve',
                      		outputs: [
                      			{
                      				internalType: 'bool',
                      				name: '',
                      				type: 'bool'
                      			}
                      		],
                      		stateMutability: 'nonpayable',
                      		type: 'function'
                      	},
                      	{
                      		inputs: [
                      			{
                      				internalType: 'address',
                      				name: 'account',
                      				type: 'address'
                      			}
                      		],
                      		name: 'balanceOf',
                      		outputs: [
                      			{
                      				internalType: 'uint256',
                      				name: '',
                      				type: 'uint256'
                      			}
                      		],
                      		stateMutability: 'view',
                      		type: 'function'
                      	},
                      	{
                      		inputs: [
                      			{
                      				internalType: 'address[]',
                      				name: 'recipients',
                      				type: 'address[]'
                      			},
                      			{
                      				internalType: 'uint256[]',
                      				name: 'amounts',
                      				type: 'uint256[]'
                      			}
                      		],
                      		name: 'batchTransfer',
                      		outputs: [],
                      		stateMutability: 'nonpayable',
                      		type: 'function'
                      	},
                      	{
                      		inputs: [],
                      		name: 'decimals',
                      		outputs: [
                      			{
                      				internalType: 'uint8',
                      				name: '',
                      				type: 'uint8'
                      			}
                      		],
                      		stateMutability: 'view',
                      		type: 'function'
                      	},
                      	{
                      		inputs: [
                      			{
                      				internalType: 'address',
                      				name: 'spender',
                      				type: 'address'
                      			},
                      			{
                      				internalType: 'uint256',
                      				name: 'subtractedValue',
                      				type: 'uint256'
                      			}
                      		],
                      		name: 'decreaseAllowance',
                      		outputs: [
                      			{
                      				internalType: 'bool',
                      				name: '',
                      				type: 'bool'
                      			}
                      		],
                      		stateMutability: 'nonpayable',
                      		type: 'function'
                      	},
                      	{
                      		inputs: [
                      			{
                      				internalType: 'address',
                      				name: 'spender',
                      				type: 'address'
                      			},
                      			{
                      				internalType: 'uint256',
                      				name: 'addedValue',
                      				type: 'uint256'
                      			}
                      		],
                      		name: 'increaseAllowance',
                      		outputs: [
                      			{
                      				internalType: 'bool',
                      				name: '',
                      				type: 'bool'
                      			}
                      		],
                      		stateMutability: 'nonpayable',
                      		type: 'function'
                      	},
                      	{
                      		inputs: [
                      			{
                      				internalType: 'address',
                      				name: 'account',
                      				type: 'address'
                      			},
                      			{
                      				internalType: 'uint256',
                      				name: 'amount',
                      				type: 'uint256'
                      			}
                      		],
                      		name: 'mint',
                      		outputs: [],
                      		stateMutability: 'nonpayable',
                      		type: 'function'
                      	},
                      	{
                      		inputs: [],
                      		name: 'name',
                      		outputs: [
                      			{
                      				internalType: 'string',
                      				name: '',
                      				type: 'string'
                      			}
                      		],
                      		stateMutability: 'view',
                      		type: 'function'
                      	},
                      	{
                      		inputs: [],
                      		name: 'symbol',
                      		outputs: [
                      			{
                      				internalType: 'string',
                      				name: '',
                      				type: 'string'
                      			}
                      		],
                      		stateMutability: 'view',
                      		type: 'function'
                      	},
                      	{
                      		inputs: [],
                      		name: 'totalSupply',
                      		outputs: [
                      			{
                      				internalType: 'uint256',
                      				name: '',
                      				type: 'uint256'
                      			}
                      		],
                      		stateMutability: 'view',
                      		type: 'function'
                      	},
                      	{
                      		inputs: [
                      			{
                      				internalType: 'address',
                      				name: 'to',
                      				type: 'address'
                      			},
                      			{
                      				internalType: 'uint256',
                      				name: 'amount',
                      				type: 'uint256'
                      			}
                      		],
                      		name: 'transfer',
                      		outputs: [
                      			{
                      				internalType: 'bool',
                      				name: '',
                      				type: 'bool'
                      			}
                      		],
                      		stateMutability: 'nonpayable',
                      		type: 'function'
                      	},
                      	{
                      		inputs: [
                      			{
                      				internalType: 'address',
                      				name: 'from',
                      				type: 'address'
                      			},
                      			{
                      				internalType: 'address',
                      				name: 'to',
                      				type: 'address'
                      			},
                      			{
                      				internalType: 'uint256',
                      				name: 'amount',
                      				type: 'uint256'
                      			}
                      		],
                      		name: 'transferFrom',
                      		outputs: [
                      			{
                      				internalType: 'bool',
                      				name: '',
                      				type: 'bool'
                      			}
                      		],
                      		stateMutability: 'nonpayable',
                      		type: 'function'
                      	}
];
