import { IsMobile } from '@/components/EthersContainer/utils/index.js'
import { EIP_EVENTS, useNode } from '../constant';
import { Notify } from 'vant';
//https://www.okx.com/cn/web3-docs/cn/extension/sdk
export function CoinBaseWallet() {
  return new Promise(async (resolve, reject) => {
    // @ts-ignore
    if (!(window.CoinbaseWalletSDK)) {

         if  (!IsMobile()) {
                  window.open('https://www.coinbase.com/');
             } else {
                window.open(
                  'https://www.coinbase.com/',
                  '_blank'
           );
           }
        // message
      //message.error('Please install Okx Wallet.');

      console.log('Please install CoinBase Wallet.');
      Notify({ type: 'danger', message: 'Please install CoinBase Wallet.' });

      reject();
      return;
    }
    // @ts-ignore
    if (window.CoinbaseWalletSDK) {
      // @ts-ignore
      try {
        const sdk = new CoinbaseWalletSDK({
          appName: "NEX",
          appLogoUrl: "",
          chainIds: "0x" + useNode.toString(16),
        });
        const provider = sdk.makeWeb3Provider();
        await provider.request({method: 'eth_requestAccounts',});

        resolve(provider);

      } catch (error) {
         Notify({ type: 'danger', message: error.message });
        // message.error(error.message);
         console.log(error)
        reject(error);
      }
    }
  });
}
