/**
 * @description infura远程节点key，用于wallet connect连接
 * @todo 需要更换成官方申请的key, https://infura.io/
 * @deprecated infura不支持BSC
 */
// export const INFURA_KEY = '30a6a4f3236744509d4bf8633a4a9bdc';

/**
 * @description 配置wallet connect的远程rpc节点，用于wallet connect连接
 * @description chain list https://chainlist.org/zh
 */

export const WALLETCONNECT_RPC_NODE_SIM = {
   1: "https://cloudflare-eth.com",
   56: "https://bsc-dataseed1.defibit.io",
   5: "https://rpc.ankr.com/eth_goerli",
   666: "http://172.16.2.6:8087",
   97: "wss://bsc-testnet-rpc.publicnode.com",
   713715:"https://evm-rpc-arctic-1.sei-apis.com"
 };

export const WALLETCONNECT_RPC_NODE = [
{"id": 1, "url": "https://cloudflare-eth.com", "name": "BSCTEST"},
{"id": 56, "url": "https://bsc-dataseed1.defibit.io", "name": "BSCTEST"},
{"id": 5, "url": "https://rpc.ankr.com/eth_goerli", "name": "BSCTEST"},
{"id": 97, "url": "https://data-seed-prebsc-1-s3.bnbchain.org:8545", "name": "BSCTEST"},
{"id": 713715, "url": "https://evm-rpc-arctic-1.sei-apis.com", "name": "BSCTEST"},
];

// bsc
export const useNodeFull = WALLETCONNECT_RPC_NODE[3]
export const useNode = useNodeFull.id

/**
 * @description eip-1193是provider的API标准，metamask和wallet connect都按照标准实现了这些api
 */
export const EIP_EVENTS = {
  CONNECT: 'connect',
  DISCONNECT: 'disconnect',
  ACCOUNTS_CHANGED: 'accountsChanged',
  CHAIN_CHANGED: 'chainChanged',
  MESSAGE: 'message',
  SESSIONUPDATE: 'sessionUpdate'
}
;
