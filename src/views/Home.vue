<template>
  <div>
    <top-header />
    <button @click="handleConnect" class="btn btn-lg">链接钱包</button>
      <button @click="nexBalanceOf" class="btn btn-lg">NEX余额</button>
      <button @click="balanceOf" class="btn btn-lg">余额</button>
      <button @click="pool" class="btn btn-lg">私募</button>
      <button @click="buy" class="btn btn-lg">buy</button>
  </div>
</template>
<script>

import { MetaMaskWallet } from '@/components/EthersContainer/wallet/metamask'
import { OkxWallet } from '@/components/EthersContainer/wallet/okx'
import { TpWallet } from '@/components/EthersContainer/wallet/tp'
import { CoinBaseWallet} from '@/components/EthersContainer/wallet/coinbase';
import { NEXContractAddress, buypoolContractAddress } from '@/components/EthersContainer/address'
import { buypoolAbi, NEXAbi } from '@/components/EthersContainer/abi'
import {buy, WalletType, EthersContainer, initEthers, initWallet, balanceOf, nexBalanceOf, pool } from '@/components/EthersContainer/index'
import TopHeader from '@/components/TopHeader.vue'

export default {
  name: 'Home-Page',
  components: { TopHeader },
   mounted(){
     initWallet()
    },
     methods:{
            handleConnect () {
          this.connect(MetaMaskWallet, WalletType.MetaMaskWallet);
            //   this.connect(OkxWallet, WalletType.OkxWallet);
          //  this.connect(TpWallet, WalletType.TpWallet);
               //    this.connect(CoinBaseWallet, WalletType.CoinBaseWallet);
            },

           async connect(getWallet, walletType){
            console.log(EthersContainer)
                // @ts-ignore
                if (EthersContainer.isLoad) return;
                EthersContainer.isLoad = true
                try {
                  const wallet = await getWallet();
                  await initEthers(wallet, walletType);
                  EthersContainer.conn = wallet;
                } catch (error) {
                  if (error.code === -32002) {
                    // message.error(error.message);
                  } else {
                    // message.warning("pleaseConnectWallet");
                  }
                } finally {
                    EthersContainer.isLoad = false
                }

                return null;
         },

        async nexBalanceOf() {
           let address = EthersContainer.address;
           let walletType = EthersContainer.walletTypess
           if(!(address && walletType)) {

            address = sessionStorage.getItem("address")
            walletType = sessionStorage.getItem("walletType")
           }

            if(!(address && walletType)) {
              //message()
              console.log("请先链接钱包")
              return
            }

           const balance = await nexBalanceOf(NEXContractAddress, NEXAbi, walletType, address)
           console.log("nex balance=" + balance)
           },

           async balanceOf() {
                 let address = EthersContainer.address;
                 let walletType = EthersContainer.walletTypess
                 if(!(address && walletType)) {

                         address = sessionStorage.getItem("address")
                         walletType = sessionStorage.getItem("walletType")
                 }

                 if(!(address && walletType)) {
                      //message()
                      console.log("请先链接钱包")
                      return
                 }

                 const balance = await balanceOf(address, walletType)
                 console.log("balance=" + balance)
           },
               async pool() {
               console.log(EthersContainer)
                            let address = EthersContainer.address;
                            let walletType = EthersContainer.walletType
                            if(!(address && walletType)) {

                                    address = sessionStorage.getItem("address")
                                    walletType = sessionStorage.getItem("walletType")
                            }

                            if(!(address && walletType)) {
                                 //message()
                                 console.log("请先链接钱包")
                                 return
                            }

                           const poolList = await pool(walletType)
                           console.log(poolList)
                      }
                      ,


                       async buy() {
                              let address = EthersContainer.address;
                              let walletType = EthersContainer.walletTypess
                              if(!(address && walletType)) {

                                     address = sessionStorage.getItem("address")
                                     walletType = sessionStorage.getItem("walletType")
                              }

                              if(!(address && walletType)) {
                                  //message()
                                  console.log("请先链接钱包")
                                  return
                             }

                              const re = await buy(address, walletType, null)
                           }
        }
}
</script>
