/* eslint-disable */
import Web3 from 'web3'
import WalletConnectProvider from '@walletconnect/web3-provider'
import { mobileAndTabletCheck } from './functions'

// FOR DEVELOPMENT SHOULD BE REMOVED !!!
declare global {
  interface Window {
    ethereum?: any
    web3: any
  }
}
//--------------------------------------

const getWeb3 = () =>
  new Promise((resolve, reject) => {
    // Wait for loading completion to avoid race conditions with web3 injection timing.
    window.addEventListener('load', async () => {
      // Modern dapp browsers...
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum)
        try {
          // Request account access if needed
          await window.ethereum.enable()
          console.log('ETH network detected')
          // Accounts now exposed
          resolve(web3)
        } catch (error) {
          reject(error)
        }

        window.ethereum.on('accountsChanged', function (accounts: Array<any>) {
          // mobile and table already handled by WalletConnectProvider
          // so we should ignore it to avoind infinite loading
          console.log('accountsChanged: ' + mobileAndTabletCheck())

          if (!mobileAndTabletCheck()) {
            location.reload()
          }
        })

        window.ethereum.on('networkChanged', function (networkId: number) {
          // mobile and table already handled by WalletConnectProvider
          // so we should ignore it to avoind infinite loading
          console.log('networkChanged: ' + mobileAndTabletCheck())
          if (!mobileAndTabletCheck()) {
            location.reload()
          }
        })
      }
      // Legacy dapp browsers...
      else if (window.web3) {
        // Use Mist/MetaMask's provider.
        const web3 = window.web3
        console.log('Injected web3 detected.')
        resolve(web3)
      }
      // Fallback to localhost; use dev console port by default...
      else {
        const provider = new WalletConnectProvider({
          rpc: {
            1: 'https://mainnet.infura.io/v3/9bf494a3c8dc454a8f451534d96a63ea',
            4: 'https://rinkeby.infura.io/v3/9bf494a3c8dc454a8f451534d96a63ea',
            56: 'https://bsc-dataseed1.binance.org',
            97: 'https://data-seed-prebsc-1-s1.binance.org:8545',
            1337: 'http://127.0.0.1:7545',
          },
        })

        // Subscribe to accounts change
        provider.on('accountsChanged', (accounts: string[]) => {
          console.log(`accounts were changed to ${accounts[0] ?? 'empty'}`)
        })

        // Subscribe to chainId change
        provider.on('chainChanged', (chainId: number) => {
          console.log(`chainId were changed to ${chainId}`)
        })

        // Subscribe to session disconnection
        provider.on('disconnect', (code: number, reason: string) => {
          console.log(code, reason)
          location.reload()
        })

        //  Enable session (triggers QR Code modal)
        await provider.enable()

        const web3 = new Web3(<any>provider)
        console.log('No web3 instance found, detect for mobile.')
        resolve(web3)
      }
    })
  })

export default getWeb3
