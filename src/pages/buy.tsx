/* eslint-disable */
// @ts-nocheck
import { Component } from 'react'
import { GlobalLayout } from '../components/layouts/GlobalLayout'
import KycContract from '../contracts/KycContract.json'
import TriganDaoERC20ForSale from '../contracts/TriganDaoERC20ForSale.json'
import TriganDaoERC20Token from '../contracts/TriganDaoERC20Token.json'
import { BSC_NETWORK_IDS, TKNBITS, TOKEN_LIMIT, TOKEN_MULTIPLE } from '../util/constants'
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

  state = {
    purchaseBtnText: 'Buy ETH based',
    loaded: false,
    kycAddress: '0x12345',
    tokenSaleAddress: null,
    userTokens: 0,
    buyToken: 100,
    rate: 50000,
    wei: 0,
    buyableToken: 1,
    currentStep: 1
  }


  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      this.web3 = await getWeb3()

      // Use web3 to get the user's accounts.
      this.accounts = await this.web3.eth.getAccounts()

      // Get the contract instance.
      this.networkId = await this.web3.eth.net.getId()

      if (BSC_NETWORK_IDS.includes(this.networkId)) {
        this.setState({ rate: 10000, purchaseBtnText: 'Buy BNB based' })
      }

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

      await this.walletAuthorized();
      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.listenToTokenTransfer()
      await this.updateUserTokens()
      this.setState(
        {
          loaded: true,
          tokenSaleAddress:
            TriganDaoERC20ForSale.networks[this.networkId].address,
          // wei: (TKNBITS * TOKEN_MULTIPLE) / this.state.rate,
          kycAddress: this.accounts[0]
        }
      )
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`
      )
      console.error(error)
    }
  }

  updateUserTokens = async () => {
    const userTokens = await this.TokenInstance.methods
      .balanceOf(this.accounts[0])
      .call()
    
    const weiBalance = await this.web3.eth.getBalance(this.accounts[0])

    let buyableTokens = Math.floor((weiBalance / this.state.rate)/100) * 100
    const quota = TOKEN_LIMIT - (userTokens / TKNBITS)

    if (buyableTokens > quota) {
      buyableTokens = quota
    }

    buyableTokens = (buyableTokens * 100) / 94
    buyableTokens = Math.floor(buyableTokens / 100 ) * 100

    this.setState({ userTokens: userTokens / TKNBITS, buyableToken: buyableTokens / 100, buyToken: buyableTokens / 100 })
  }

  walletAuthorized = async () => {
    let authorized = await this.KycContractInstance.methods.kycStatus(this.accounts[0]).call()
    
    if(authorized) {
      // this.setState({currentStep: 2})
    }
  }


  listenToTokenTransfer = () => {
    this.TokenInstance.events
      .Transfer({ to: this.accounts[0] })
      .on('data', this.updateUserTokens)
  }

  handleMoreTokensPurchase = async () => {
    await this.TokenSaleInstance.methods.buyTokens(this.accounts[0]).send({
      from: this.accounts[0],
      value: this.web3.utils.toWei(this.web3.utils.toBN(this.state.wei), 'wei'),
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
    await this.KycContractInstance.methods
      .setKycCompleted(this.state.kycAddress)
      .send({ from: this.accounts[0] })
    
      this.setState({ currentStep: 2 })
  }

  // onBuyTokenChanged = async (event: any) => {
  //   const target = event.target
  //   const value = target.value
  //   const actualBuyValue = value * TOKEN_MULTIPLE
  //   const newWei = (actualBuyValue * TKNBITS) / this.state.rate

  //   this.setState({
  //     buyToken: value,
  //     wei: newWei,
  //   })
  // }

  onSliderChanged = async (event: any) => {
    const value = event.max
    
    const newWei = (value * TOKEN_MULTIPLE * TKNBITS) / this.state.rate
    this.setState({ buyToken: value * TOKEN_MULTIPLE, wei: newWei })
  }

  renderWalletAuthorizePage = () => {
    return (
      <div className='mt-8'>        
        {/* <p className="text-left text-md font-medium pt-4 ml-6">
          1. Authorise your wallet
          <br />
          2. Select the number of tokens to buy
          <br />
          3. Complete payment using your wallet
        </p> */}
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
              <button
                className="primary-btn"
                type="button"
                onClick={this.handleKycWhitelisting}
              >
                Authorise
              </button>
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
          <button
            className="primary-btn"
            type="button"
            onClick={this.handleMoreTokensPurchase}
          >
            {this.state.purchaseBtnText}
          </button>
          <p className='py-2'>
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
