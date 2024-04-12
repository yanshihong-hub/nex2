import { IsMobile } from '@/components/EthersContainer/utils/index.js'
import { EIP_EVENTS, useNode } from '../constant';
import { Notify } from 'vant';

//https://www.okx.com/cn/web3-docs/cn/extension/sdk
export function OkxWallet() {
  return new Promise(async (resolve, reject) => {
    // @ts-ignore
    if (!(window.okxwallet || window.okexchain)) {

         if  (!IsMobile()) {
                  window.open('https://www.okx.com/cn/web3');
             } else {
                window.open(
                  'https://www.okx.com/cn/web3',
                  '_blank'
           );
           }
        // message
      //message.error('Please install Okx Wallet.');
       Notify({ type: 'danger', message: 'Please install Okx Wallet.' });
      console.log('Please install Okx Wallet.');

      reject();
      return;
    }
    // @ts-ignore
    if (window.okxwallet || window.okexchain) {
      // @ts-ignore
      let wallet = window.okxwallet || window.okexchain
      try {
        await wallet.request({method: 'eth_requestAccounts',});
        resolve(wallet);
      } catch (error) {
        Notify({ type: 'danger', message:  error.message});
        // message.error(error.message);
         console.log(error)
        reject(error);
      }
    }
  });
}
