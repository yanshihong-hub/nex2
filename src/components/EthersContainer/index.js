import { ethers } from 'ethers';
import { EIP_EVENTS, useNode, useNodeFull } from './constant';
import { MetaMaskWallet} from '@/components/EthersContainer/wallet/metamask';
import { OkxWallet} from '@/components/EthersContainer/wallet/okx';
import { TpWallet} from '@/components/EthersContainer/wallet/tp';
import { CoinBaseWallet} from '@/components/EthersContainer/wallet/coinbase';
import { clearStorage, formatAmountN, hexToDecimal, toEth } from '@/components/EthersContainer/utils/index';
import { NEXContractAddress, buypoolContractAddress } from '@/components/EthersContainer/address'
import { buypoolAbi, NEXAbi } from '@/components/EthersContainer/abi'
import BigNumber from 'bignumber.js'
import { Notify } from 'vant';


// 钱包枚举
export const WalletType = {
  MetaMaskWallet: 'MetaMaskWallet',
  OkxWallet: 'OkxWallet',
  TpWallet: 'TpWallet',
  CoinBaseWallet: 'CoinBaseWallet',
}


export const EthersContainer = {
    walletType: null,
    provider:null,
    signer:null,
    wallet:null,
    address:'',
    chainId:-1,
    isLoad:false,
    conn: null
};

async function  resetEthers() {

   EthersContainer.walletType = null;
   EthersContainer.provider = null;
   EthersContainer.signer = null;
   EthersContainer.wallet = null;
   EthersContainer.address = '';
   EthersContainer.chainId = -1;
   EthersContainer.conn = null;

   unSubscribeWallet();
   clearStorage();
};


function onConnect(params) {

    console.log('钱包建立连接', params);
 };

function onDisconnect(error) {
    console.log('钱包断开连接', error);
    sessionStorage.setItem('address', '');
    EthersContainer.address = '';
    if (error === 1000) {
       // wallet connect主动断开连接
       resetEthers();
    }
};
 // 钱包切换账户
async function onAccountsChanged(accounts) {

  if (accounts.length == 0) {
    resetEthers()
    return
   }
   console.log('钱包切换账户', accounts);
   let address = accounts[0] ? accounts[0] : '';
   sessionStorage.setItem('address', address);
   EthersContainer.address = '';


};
// 钱包切换链
async function onChainChanged(chainId) {

    const chainIdInt = Number.parseInt(chainId, 16);
    console.log('钱包切换链', chainIdInt);
    EthersContainer.chainId = chainIdInt;
    sessionStorage.setItem(
          'chainId',
          chainIdInt.toString()
        );

     if (chainId !==  '0x' + useNode.toString(16)) {


     let provider = EthersContainer.conn ? EthersContainer.conn : window.ethereum;
      provider.request({
                 method: 'wallet_switchEthereumChain',
                  params: [{ chainId:  '0x' + useNode.toString(16) }],
     }).then((res) => {
                       console.log(res, '切换网络')
                   }).catch((err) => {
                       console.log('44',err)
                       // message 添加节点
                        if (err.code===4902) {
                          let errormsg=
                          Notify({ type: 'danger', message: '请先添加网络 chainId=' + useNode});
                           console.log('请先添加网络 chainId=' + useNode)
                            wallet.request({
                                               jsonrpc: '2.0',
                                               method: 'wallet_addEthereumChain',
                                               params: [
                                                   {
                                                       chainId: '0x' + useNode.toString(16),
                                                       chainName: useNodeFull.name,
                                                       rpcUrls: [useNodeFull.url],
                                                   }
                                               ]
                                    })
                        }
                       if (err.code===-32002) {
                       // 用户在申请连接时既没有取消也没有同意钱包的绑定需要手动打开小狐狸钱包的插件进行绑定
                        console.log('用户在申请连接时既没有取消也没有同意钱包的绑定需要手动打开小狐狸钱包的插件进行绑定')
                        Notify({ type: 'danger', message:'请先处理钱包请求'});
                       }
                       if (err.code == 4001) {
                           console.log('用户拒绝连接')
                           Notify({ type: 'danger', message:'用户拒绝连接'});
                       }
                   })


     };
};
      // 钱包推送消息
function onMessage(...params) {
   console.log('钱包推送消息', params);
};


export function subscribeWallet(connector) {
     console.log("subscribeWallet")
      connector.on(EIP_EVENTS.CONNECT, onConnect);
      connector.on(EIP_EVENTS.DISCONNECT, onDisconnect);
      connector.on(EIP_EVENTS.ACCOUNTS_CHANGED, onAccountsChanged);
      connector.on(EIP_EVENTS.CHAIN_CHANGED, onChainChanged);
      connector.on(EIP_EVENTS.MESSAGE, onMessage);
      return connector;
};


export function unSubscribeWallet() {
     console.log("unSubscribeWallet")
      const connector = EthersContainer.conn;
      if(!connector) return;
      connector.removeListener(EIP_EVENTS.CONNECT, onConnect);
      connector.removeListener(EIP_EVENTS.DISCONNECT, onDisconnect);
      connector.removeListener(EIP_EVENTS.ACCOUNTS_CHANGED,onAccountsChanged);
      connector.removeListener(EIP_EVENTS.CHAIN_CHANGED, onChainChanged);
      connector.removeListener(EIP_EVENTS.MESSAGE, onMessage);
};


export const initEthers = (wallet, walletType) => {

    return new Promise(async (resolve) => {

      if(!wallet) {
          return
      }
      console.log("initEthers")

      EthersContainer.conn = subscribeWallet(wallet);
      const provider = new ethers.providers.Web3Provider(wallet);
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      let res2 = await provider.getNetwork();
      sessionStorage.setItem('chainId', res2.chainId);
      sessionStorage.setItem('address', address);
      sessionStorage.setItem('walletType', walletType);
      EthersContainer.walletType = walletType;
      EthersContainer.provider = provider;
      EthersContainer.signer = signer;
      EthersContainer.wallet = wallet;
      EthersContainer.address = address;
      EthersContainer.chainId = res2.chainId;
      console.log(useNode)
      console.log(useNode.toString(16))

      wallet.request({
               method: 'wallet_switchEthereumChain',
               params: [{ chainId:  '0x' + useNode.toString(16) }],
      }).then((res) => {
                console.log(res, '切换网络')
            }).catch((err) => {
                console.log('44',err)
                // message 添加节点
                 if (err.code===4902) {
                    console.log('请先添加网络 chainId=' + useNode)
                      Notify({ type: 'danger', message: '请先添加网络 chainId=' + useNode});
                     wallet.request({
                                        jsonrpc: '2.0',
                                        method: 'wallet_addEthereumChain',
                                        params: [
                                            {
                                                chainId: '0x' + useNode.toString(16),
                                                chainName: useNodeFull.name,
                                                rpcUrls: [useNodeFull.url],
                                            }
                                        ]
                             })
                 }
                if (err.code===-32002) {
                // 用户在申请连接时既没有取消也没有同意钱包的绑定需要手动打开小狐狸钱包的插件进行绑定
                       console.log('用户在申请连接时既没有取消也没有同意钱包的绑定需要手动打开小狐狸钱包的插件进行绑定')
                       Notify({ type: 'danger',message: '请先处理钱包请求'});
                }
                if (err.code == 4001) {
                    console.log('用户拒绝连接')
                     Notify({ type: 'danger', message: '用户拒绝连接'});
                }
            })
      resolve(true);
    });
  };


 export async function getWallet(walletType) {
    let provider;
    switch (walletType) {
       case WalletType.MetaMaskWallet:
         provider = await MetaMaskWallet();
         break;
       case WalletType.CoinBaseWallet:
         provider = await CoinBaseWallet();
         break;
       case WalletType.OkxWallet:
         provider = await OkxWallet();
         break;
       case WalletType.TpWallet:
         provider = await TpWallet();
         break;
       default: {
         provider = await MetaMaskWallet();
         break;
       }
     }
       return provider;
}

 //todo index->onload使用
 export async function initWallet() {
    console.log("初始化钱包")
    let addressStr = sessionStorage.getItem('address') ? sessionStorage.getItem('address') : '';
    if (addressStr) {
      EthersContainer.address = addressStr;
      EthersContainer.isLoad = true;

      let walletType = sessionStorage.getItem('walletType') ? sessionStorage.getItem('walletType') : '';
      if (walletType) {
        EthersContainer.walletType = walletType;
        let wallet = await getWallet(walletType);
        if (wallet) {
          await initEthers(wallet, walletType);
        }
      }
    } else {
         EthersContainer.isLoad = false;
    }
  };


 export const getContract = async (address,abi, walletType) => {
   let provider = await getWallet(walletType);
   console.log(provider)
   const _ethers = new ethers.providers.Web3Provider(provider);
   const signer = _ethers.getSigner();
   return new ethers.Contract(address, abi, signer);
 };



// 大数转数值
export const formWei = (val, num) => {
  return ethers.utils.formatUnits(val +'', num);
};

 export const nexBalanceOf = async (
  ContractAddress, //合约地址
  abi,
  walletType,
  userAddress //用户钱包地址
) => {
  var contract = await getContract(ContractAddress, abi, walletType);
  var transaction = await contract.balanceOf(userAddress);
  // transaction  = Number(ethers.utils.formatEther(transaction));
  transaction = ethers.utils.formatEther(transaction + '')
  transaction = formatAmountN(transaction, 4)
  console.log(transaction)

  // return formWei(transaction, 4);
  return transaction;
};



export const balanceOf = async(address, walletType) => {
  const _ethers = new ethers.providers.Web3Provider(walletType);
  var balance = await _ethers.getBalance(address);
  return formatAmountN(formWei(balance), 4);
};

export const pool = async(walletType) => {
  let contract = await getContract(buypoolContractAddress,buypoolAbi, walletType);
  let pool = await contract.getpool();
  let poolList = []
  for (let index in pool) {
   console.log(pool[index]);
     let currentAmount = new BigNumber(hexToDecimal(pool[index].currentAmount));
     let minBuyAmount = new BigNumber(hexToDecimal(pool[index].minBuyAmount));
     let price = new BigNumber(hexToDecimal(pool[index].price));
     let starttime = hexToDecimal(pool[index].starttime);
     let totalAmount = new BigNumber(hexToDecimal(pool[index].totalAmount));
     console.log(currentAmount, minBuyAmount, price, totalAmount, starttime);
     let nexCoin = new BigNumber(Math.pow(1*10,18)).div(minBuyAmount).times(price).toNumber()
     nexCoin = BigInt(nexCoin).toString()

     console.log('nexCoin=' + formWei(nexCoin))
     poolList.push({
     'id': index,
     'currentAmount': formWei(currentAmount),
     'minBuyAmount': formWei(minBuyAmount),
     'price': formWei(price),
     'totalAmount': formWei(totalAmount),
     'nexCoin': formWei(nexCoin),
     'starttime': starttime,
     })
  }
  return poolList;
};



export const buy = async(address, walletType, amount) => {
  EthersContainer.isLoad = true
  console.log(amount)
  let provider = await getWallet(walletType);
  const _ethers = new ethers.providers.Web3Provider(provider);
  let contract = await getContract(buypoolContractAddress, buypoolAbi, walletType);
  amount = ethers.utils.parseUnits("0.001", "ether");
  const gasPrice = await _ethers.getGasPrice();
  const value = {"value": amount, "gasPrice": gasPrice}
  const result = await contract.buy(0, amount, value)
  .catch((err) => {
//            message.error("fail");
            Notify({ type: 'danger', message:'fail'});
           EthersContainer.isLoad = false
          });
  await result.wait()
  console.log(result);
  EthersContainer.isLoad = false
};
