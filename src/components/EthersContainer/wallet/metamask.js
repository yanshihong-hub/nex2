import { IsMobile } from '@/components/EthersContainer/utils/index.js'
import { Notify } from 'vant';

function onAnnouncement(event) {
      console.log(event.currentTarget.ethereum.providerMap)
      //event 就是对应的已经安装的浏览器钱包插件实例。
      //具体包括uuid、name、icon、walletId  以及 对应的插件实例
}



export function MetaMaskWallet () {
  return new Promise(async (resolve, reject) => {
    try {
      console.log(provider)
     window.addEventListener("eip6963:announceProvider", onAnnouncement)
     window.dispatchEvent(new Event("eip6963:requestProvider"))
      console.log("mesak")
      // @ts-ignore
      if (!window.ethereum) {
       if  (!IsMobile()) {
           window.open('https://metamask.io/');
       } else {
          window.open(
            `https://metamask.app.link/dapp/${window.location.host}`,
            '_blank'
        );
       }
        // message
        Notify({ type: 'danger', message: 'Please install Metamask.' });
        reject('Please install Metamask.');
        return;
      }
      // @ts-ignore
      if (window.ethereum) {
          const {ethereum} = window;
        let wallet;
        if (ethereum.isMetaMask) {
          wallet = ethereum;
        }

         console.log(ethereum.providers)

         //ethereum.providers.forEach(async (p) => {

        //        if (p.isMetaMask) provider = p;
        //      });


        if (ethereum.providerMap) {
          wallet = ethereum.providerMap.get('MetaMask');
        }
        await wallet.request({ method: 'eth_requestAccounts' });
        //        await wallet.request({ method: "eth_accounts" });
        resolve(wallet);
      }
    } catch (error) {
      // message.error(error.message);
       Notify({ type: 'danger', message:  error.message});
      reject(error);
    }
  })
}
