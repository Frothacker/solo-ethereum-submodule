import web3 from './web3';

const ABI = [
  {
    constant: true,
    inputs: [],
    name: 'donationCount',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [{ name: '', type: 'uint256' }],
    name: 'contributors',
    outputs: [{ name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'manager',
    outputs: [{ name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: false,
    inputs: [],
    name: 'giveMoney',
    outputs: [],
    payable: true,
    stateMutability: 'payable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [],
    name: 'withdrawMoney',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'getContributors',
    outputs: [{ name: '', type: 'address[]' }],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor'
  }
];
const address = '0xe7C064bC86c8b18ab9AF8cC302e8af2Db7ED2B4E';

export default new web3.eth.Contract(ABI, address);
