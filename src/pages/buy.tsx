/* eslint-disable */
// @ts-nocheck
import { Component } from 'react'
import { GlobalLayout } from '../components/layouts/GlobalLayout'
import KycContract from '../contracts/KycContract.json'
import TriganDaoERC20ForSale from '../contracts/TriganDaoERC20ForSale.json'
import TriganDaoERC20Token from '../contracts/TriganDaoERC20Token.json'
import { BNB_TOKEN_RATE, BSC_NETWORK_IDS, ETH_TOKEN_RATE, TKNBITS, TOKEN_LIMIT, TOKEN_MULTIPLE } from '../util/constants'
import getWeb3 from '../util/getWeb3'
import MultiRangeSlider from '../components/shared/RangeSlider'
import Stepper from '../components/shared/Stepper'

class Buy extends Component {
  // to avoid typescript errors
  web3: any
  accounts: any
  networkId: any
  TokenInstance: any
  TokenSaleInstance: any
  KycContractInstance: any
  purchaseBtnText: any
  buyableToken: any
  currentStep: number
  authorizing: boolean
  canBuy: boolean
  wrongChainNotif: any

  state = {
    purchaseBtnText: 'PAY',
    loaded: false,
    kycAddress: '0x12345',
    tokenSaleAddress: null,
    userTokens: 0,
    buyToken: 100,
    rate: ETH_TOKEN_RATE,
    wei: 0,
    buyableToken: 1,
    currentStep: 1,
    authorizing: false,
    canBuy: true,
    wrongChainNotif: '',
  }


  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      this.web3 = await getWeb3()

      // Use web3 to get the user's accounts.
      this.accounts = await this.web3.eth.getAccounts()

      // Get the contract instance.
      this.networkId = await this.web3.eth.net.getId()

      this.updateRate()

      this.TokenInstance = new this.web3.eth.Contract(
        TriganDaoERC20Token.abi,
        TriganDaoERC20Token.networks[this.networkId] &&
          TriganDaoERC20Token.networks[this.networkId].address
      )

      this.TokenSaleInstance = new this.web3.eth.Contract(
        TriganDaoERC20ForSale.abi,
        TriganDaoERC20ForSale.networks[this.networkId] &&
          TriganDaoERC20ForSale.networks[this.networkId].address
      )

      this.KycContractInstance = new this.web3.eth.Contract(
        KycContract.abi,
        KycContract.networks[this.networkId] &&
          KycContract.networks[this.networkId].address
      )

      this.walletAuthorized()
      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.listenToTokenTransfer()
      await this.updateUserTokens()
      this.setState(
        {
          loaded: true,
          tokenSaleAddress: TriganDaoERC20ForSale.networks[this.networkId].address,
          // wei: (TKNBITS * TOKEN_MULTIPLE) / this.state.rate,
          kycAddress: this.accounts[0]
        }
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

  updateUserTokens = async () => {
    const userTokens = await this.TokenInstance.methods
      .balanceOf(this.accounts[0])
      .call()
    
    const weiBalance = await this.web3.eth.getBalance(this.accounts[0])

    let buyableTokens = Math.floor((weiBalance * this.state.rate)/1e20) * 100
    let quota = TOKEN_LIMIT - (userTokens / TKNBITS)
    let quotaIncludesTax = Math.floor(((quota * 100) / 94) / 100) * 100

    if (buyableTokens > quotaIncludesTax) {
      buyableTokens = quotaIncludesTax
    }

    this.setState({ userTokens: userTokens / TKNBITS, buyableToken: buyableTokens / 100, buyToken: buyableTokens })
  }

  walletAuthorized = async () => {
    this.KycContractInstance.methods.kycStatus(this.accounts[0]).call().then((authoirized) => {
      if(authoirized) {
        this.setState({currentStep: 2})
      }
    })
  }

  listenToTokenTransfer = () => {
    this.TokenInstance.events
      .Transfer({ to: this.accounts[0] })
      .on('data', this.updateUserTokens)
  }

  handleMoreTokensPurchase = async () => {
    await this.TokenSaleInstance.methods.buyTokens(this.accounts[0])
      .send({
        from: this.accounts[0],
        value: this.web3.utils.toWei(this.web3.utils.toBN(this.state.wei), 'wei'),
      })
      .once('sending', (payload) => {
        this.setState({ canBuy: false, purchaseBtnText: 'Submitting' })
      })
      .once('transactionHash', (hash) => {
        this.setState({ canBuy: false, purchaseBtnText: 'Transaction submitted. Kindly wait until completed to make another transaction.' })
      })
      .once('receipt', async (recept) => {
        location.reload()
        // await this.updateUserTokens()
        // this.setState({ canBuy: true, purchaseBtnText: 'PAY' })
      })
      .on('error', (err) => {
        console.log(err.message)
        this.setState({ canBuy: true, purchaseBtnText: 'PAY' })
      })
  }

  handleInputChange = (event: any) => {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }

  handleKycWhitelisting = async () => {
    this.setState({ authorizing: true })
    await this.KycContractInstance.methods
      .setKycCompleted(this.state.kycAddress)
      .send({ from: this.accounts[0] }, (err, result) => { 
        this.setState({ authorizing: false })

        if(err) {
          return;
        }

        this.setState({ currentStep: 2 })
      })

  }

  onSliderChanged = async (event: any) => {
    const value = event.max
    
    const newWei = (value * TOKEN_MULTIPLE * TKNBITS) / this.state.rate
    this.setState({ buyToken: value * TOKEN_MULTIPLE, wei: newWei })
  }

  renderAuthoizeButton= () => {
    if (this.state.authorizing) {
      return (
        <button className='primary-btn' type="button" disabled>
          <svg role="status" className="inline mr-3 w-6 h-6 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
          </svg> 
          Authorising
        </button>
      )
    }

    return (<button className='primary-btn' type="button" onClick={this.handleKycWhitelisting}>Authorise</button>)
  }

  renderBuyButton = () => {
    if(this.state.canBuy) {
      return (
        <button className="primary-btn w-28 justify-center" type="button" onClick={this.handleMoreTokensPurchase}>
          {this.state.purchaseBtnText}
        </button>
      )
    }

    return (
      <div className="flex items-center justify-center">
        <span className="relative inline-flex">
          <button 
            type="button" 
            className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-sky-500 bg-white dark:bg-slate-800 transition ease-in-out duration-150 cursor-not-allowed ring-1 ring-slate-900/10 dark:ring-slate-200/20" 
            disabled
            >
            {this.state.purchaseBtnText}
          </button>
          <span className="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
          </span>
        </span>
      </div>
    )
  }

  renderWalletAuthorizePage = () => {
    return (
      <div className='mt-8'>        
        <div className="my-5">
          <div>
            <p className='text-2xl text-center py-8'>Authorise Wallet</p>
            <p className='text-xl text-center pb-8'>
              <span>Address:</span>
              <input
                type="text"
                className="ml-4 rounded-lg border bg-transparent px-3 py-1 focus:border-primary focus:outline-none"
                name="kycAddress"
                value={this.state.kycAddress}
                onChange={this.handleInputChange}
              />
            </p>
            <p>
              {this.renderAuthoizeButton()}
            </p>
          </div>
        </div>
      </div>
    )
  }

  renderBuyPage = () => {
    return (
      <div className='mt-8'>
        <p className='text-center text-3xl pb-8'>
          <b>Buy</b>
        </p>
        <p className='text-left'>
          Your wallet is currently set to { BSC_NETWORK_IDS.includes(this.networkId) ? 'BNB' : 'ETH' }. We can also accept payment in { BSC_NETWORK_IDS.includes(this.networkId) ? 'Ethereum' : 'Binance Smart Chain' }.
        </p>
        <p className="py-4 text-center">
          ¥ou currently have {Number(this.state.userTokens).toLocaleString()}{' '} TDE
        </p>
        <div className="my-5">
          <p className='text-center'>
            Buy {Number(this.state.buyToken).toLocaleString()} TDE (Receive {Number(this.state.buyToken * 0.94).toLocaleString()} after buy tax)
          </p>
          <div className='flex items-center justify-center'>
            <MultiRangeSlider
              min="0"
              max={this.state.buyableToken}
              onChange={ this.onSliderChanged }
            />
          </div>
          <p className='text-center'>
            ({Number(this.state.wei / TKNBITS).toLocaleString()} { BSC_NETWORK_IDS.includes(this.networkId) ? 'BNB' : 'ETH' })
          </p>
          {this.renderBuyButton()}
          <p className='py-4'>
            <i>There is a 6% buy tax on token purchases.</i>
            <br />
            <i>Blockchain transactions may take up to 24 hours to complete.</i>
          </p>
        </div>
      </div>
    )
  }

  render() {
    if (!this.state.loaded) {
      return <div>Loading Web3, accounts, and contract...</div>
    }
    if(this.state.wrongChainNotif !== '') {
      return (
        <GlobalLayout>
        <div className="mx-auto max-w-lg p-2.5 h-48 mt-14">
          <div className="flex items-center justify-center">
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
          </div>
        </div>
        </GlobalLayout>
      )
    }

    let content = this.state.currentStep === 1 ? this.renderWalletAuthorizePage() : this.renderBuyPage()
    return (
      <GlobalLayout>
        <div className="mx-auto max-w-lg p-2.5">
          <h1 className="text-center text-2xl font-semibold">
            TriganDao (TDE) Token Sale
          </h1>
          <Stepper
            steps={['Wallet Authorize', 'Buy']}
            currentStepNumber={this.state.currentStep}
          />
          { content }
        </div>
      </GlobalLayout>
    )
  }
}

export default Buy
