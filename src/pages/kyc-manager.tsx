/* eslint-disable */
// @ts-nocheck
import { Component } from 'react'
import React, { lazy, Suspense } from 'react'
import GlobalLayout from '../components/layouts/GlobalLayout';
import KycContract from '../contracts/KycContract.json'
import TriganDaoERC20ForSale from '../contracts/TriganDaoERC20ForSale.json'
// import TriganDaoERC20Token from '../contracts/TriganDaoERC20Token.json'
import { BNB_TOKEN_RATE, BSC_NETWORK_IDS, ETH_TOKEN_RATE, TKNBITS, TOKEN_LIMIT, TOKEN_MULTIPLE } from '../util/constants'
import getWeb3 from '../util/getWeb3'
import { mobileAndTabletCheck } from '../util/functions'
import { SEO } from '../components/shared/SEO'

class KycManager extends Component {
  // to avoid typescript errors
  web3: any
  accounts: any
  networkId: any
  TokenInstance: any
  TokenSaleInstance: any
  KycContractInstance: any
  wrongChainNotif: any
  deployerAddress: any
  validAddress: boolean
  status: any

  state = {
    loaded: false,
    kycAddress: '0x12345',
    wrongChainNotif: '',
    deployerAddress: '',
    validAddress: false,
    status: '',
    rate: 0,
  }


  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      this.web3 = await getWeb3()

      // Use web3 to get the user's accounts.
      this.accounts = await this.web3.eth.getAccounts()

      // Get the contract instance.
      this.networkId = await this.web3.eth.net.getId()

      this.KycContractInstance = new this.web3.eth.Contract(
        KycContract.abi,
        KycContract.networks[this.networkId] &&
        KycContract.networks[this.networkId].address
      )

      this.TokenSaleInstance = new this.web3.eth.Contract(
        TriganDaoERC20ForSale.abi,
        TriganDaoERC20ForSale.networks[this.networkId] &&
        TriganDaoERC20ForSale.networks[this.networkId].address
      )

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      const owner = await this.KycContractInstance.methods.owner().call()
      this.setState(
        {
          loaded: true,
          deployerAddress: owner,
        },
        this.updateRate()
      )
    } catch (error) {
      // Catch any errors for any of the above operations.
      this.setState({ loaded: true, wrongChainNotif: 'You are in unsupported network. We support Ethereum Mainnet and Binance Smart Chain networks. Kindly set wallet network to correct one!' })

      console.error(error)
    }
  }

  updateRate = () => {
    if (BSC_NETWORK_IDS.includes(this.networkId)) {
      this.setState({ rate: BNB_TOKEN_RATE })
      return;
    }

    this.setState({ rate: ETH_TOKEN_RATE })
    return
  }

  checkKyc = async () => {
    this.setState({ status: 'checking...' })
    this.KycContractInstance.methods.kycStatus(this.state.kycAddress).call({ from: this.accounts[0] }, (err, result) => {
      if (err) {
        this.setState({ status: `err...${err.message}` })
        return
      }
      console.log(result);

      if (result) {
        this.setState({ status: 'added' })
        return
      }

      this.setState({ status: 'not add yet.' })
    })
  }

  addKyc = async () => {
    this.setState({ status: 'adding...' })
    await this.KycContractInstance.methods
      .setKycCompleted(this.state.kycAddress)
      .send({ from: this.accounts[0] }, (err, result) => {

        if (err) {
          this.setState({ status: `err...${err.message}` })
          return;
        }
        console.log(result)

        this.setState({ status: 'added' })
      })
  }

  delKyc = async () => {
    this.setState({ status: 'deleting...' })
    await this.KycContractInstance.methods
      .removeKycRevoked(this.state.kycAddress)
      .send({ from: this.accounts[0] }, (err, result) => {
        if (err) {
          this.setState({ status: `err...${err.message}` })
          return
        }
        console.log(result)

        this.setState({ status: 'deleted' })
      })
  }

  logoutWallet = () => {
    this.web3.currentProvider.disconnect()
  }

  addressValid = (value) => {
    return this.web3.utils.isAddress(value)
  }

  handleInputChange = (event: any) => {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    this.setState({
      [name]: value,
      validAddress: this.addressValid(value)
    })
  }

  rateChanged = (event: any) => {
    this.setState({ rate: event.target.value })
  }

  setRate = () => {
    console.log('rate', this.state.rate);

    this.TokenSaleInstance.methods.setRate(this.web3.utils.toBN(this.state.rate)).send({ from: this.accounts[0] }, (err, result) => {
      if (err) {
        return console.log(err)
      }
      console.log(JSON.stringify(result));
    })
  }

  render() {
    if (!this.state.loaded) {
      return <div>Loading Web3, accounts, and contract...</div>
    }

    if (this.accounts[0] !== this.state.deployerAddress) {
      return <div>Only ownwer can access this page</div>
    }

    if (this.state.wrongChainNotif !== '') {
      return (
        <GlobalLayout>
          <div className="mx-auto max-w-lg p-2.5 h-48 my-14">
            <div className="flex items-center justify-center flex-col">
              <span className="relative inline-flex">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-sky-500 bg-white dark:bg-slate-800 transition ease-in-out duration-150 cursor-not-allowed ring-1 ring-slate-900/10 dark:ring-slate-200/20"
                  disabled
                >
                  {this.state.wrongChainNotif}
                </button>
                <span className="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                </span>
              </span>
              {
                mobileAndTabletCheck() &&
                <div className='text-center'>
                  <span className='text-2xl'>↓</span>
                  <button className="primary-btn justify-center" type="button" onClick={this.logoutWallet}>
                    Logout from current wallet
                  </button>
                </div>
              }
            </div>
          </div>
        </GlobalLayout>
      )
    }

    return (
      <GlobalLayout>
          <SEO title="KYC Manager" description='Trigan KYC Manager'/>
        <div className="mx-auto max-w-lg p-2.5 h-48 my-14">
          <div className="rate-setting">
            <label htmlFor="rate">Rate</label>
            <input
              type="text"
              className="ml-4 rounded-lg border bg-transparent px-3 py-1 focus:border-primary focus:outline-none"
              name="rate"
              onChange={this.rateChanged}
              value={this.state.rate}
            >
            </input>
            <button type="button" className='primary-btn' onClick={this.setRate}>Send</button>
          </div>

          {/* <div className='text-xl text-center pb-8'>
            <div className="status">{this.state.status}</div>
            <span>Address:</span>
            <input
              type="text"
              className="ml-4 rounded-lg border bg-transparent px-3 py-1 focus:border-primary focus:outline-none"
              name="kycAddress"
              value={this.state.kycAddress}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="actions flex flex-row">
            <button className="primary-btn" type="button" onClick={this.addKyc} disabled={!this.state.validAddress}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add
            </button>
            <button className={`default-btn ${ this.state.validAddress ? '' : 'cursor-not-allowed' }`} type="button" onClick={this.checkKyc} disabled={!this.state.validAddress}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Check
            </button>
            <button className="danger-btn" type="button" onClick={this.delKyc} disabled={!this.state.validAddress}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Remove
            </button>
          </div> */}
        </div>
      </GlobalLayout>
    )
  }
}

export default KycManager
