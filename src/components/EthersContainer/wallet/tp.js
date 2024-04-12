import { IsMobile } from '@/components/EthersContainer/utils/index.js'
import { EIP_EVENTS, useNode } from '../constant';
import { Notify } from 'vant';

//https://www.okx.com/cn/web3-docs/cn/extension/sdk
export function TpWallet() {
  return new Promise(async (resolve, reject) => {

    // @ts-ignore
    if (!(window.tokenpocket || window.ethereum.isTokenPocket)) {

         if  (!IsMobile()) {
                  window.open('https://www.tokenpocket.pro/');
             } else {
                window.open(
                  'https://www.tokenpocket.pro/',
                  '_blank'
           );
           }
        // message
      //message.error('Please install Okx Wallet.');
      console.log('Please install TokenPocket Wallet.');
      Notify({ type: 'danger', message: 'Please install Okx Wallet.' });
      reject();
      return;
    }
    // @ts-ignore
    if (window.tokenpocket || window.ethereum.isTokenPocket) {
      // @ts-ignore
      let wallet = window.tokenpocket.ethereum
      try {
        await wallet.request({method: 'eth_requestAccounts'})
        resolve(wallet);

      } catch (error) {
        // message.error(error.message);
         Notify({ type: 'danger', message: error.message });
         console.log(error)
        reject(error);
      }
    }
  });
}
