/* eslint-disable */
// @ts-nocheck
import { Component } from 'react'
import { GlobalLayout } from '../components/layouts/GlobalLayout'
import { Slider } from '../components/shared/Slider'
import KycContract from '../contracts/KycContract.json'
import TriganDaoERC20ForSale from '../contracts/TriganDaoERC20ForSale.json'
import TriganDaoERC20Token from '../contracts/TriganDaoERC20Token.json'
import { BSC_NETWORK_IDS, TKNBITS, TOKEN_LIMIT } from '../util/constants'
import getWeb3 from '../util/getWeb3'

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

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.listenToTokenTransfer()
      await this.updateUserTokens()
      this.setState({
        loaded: true,
        tokenSaleAddress:
          TriganDaoERC20ForSale.networks[this.networkId].address,
        // wei: (TKNBITS * TOKEN_MULTIPLE) / this.state.rate,
        kycAddress: this.accounts[0],
      })
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

    let buyableTokens = Math.floor(weiBalance / this.state.rate / 100) * 100
    const quota = TOKEN_LIMIT - userTokens / TKNBITS

    if (buyableTokens > quota) {
      buyableTokens = quota
    }

    buyableTokens = (buyableTokens * 100) / 94
    buyableTokens = Math.floor(buyableTokens / 100) * 100

    this.setState({
      userTokens: userTokens / TKNBITS,
      buyableToken: buyableTokens / 100,
      buyToken: buyableTokens / 100,
    })
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
    alert('KYC for ' + this.state.kycAddress + ' is completed')
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

  onSliderChanged = (value: number, index: number) => {
    console.log(`onChange: ${JSON.stringify({ value, index })}`)
    // const value = event.max

    const newWei = (value * TOKEN_MULTIPLE * TKNBITS) / this.state.rate
    this.setState({ buyToken: value * TOKEN_MULTIPLE, wei: newWei })
  }

  render() {
    if (!this.state.loaded) {
      return <div>Loading Web3, accounts, and contract...</div>
    }
    return (
      <GlobalLayout>
        <div className="mx-auto max-w-lg p-2.5">
          <h1 className="text-center text-2xl font-semibold">
            TriganDao (TDE) Token Sale
          </h1>
          <p className="text-center text-xl font-medium">
            Get your tokens today!
          </p>
          <div className="my-5">
            <p className="pb-4">
              The purchase token amount must be multiples of 100. We just
              automatically did it for you.
            </p>
            <div className="py-4">
              <p>
                <b>TAX</b>
              </p>
              <ul>
                <li>6% on buyer</li>
                <li>18% on seller</li>
              </ul>
            </div>

            <b className="py-4">KYC Whitelisting</b>
            <p className="pb-4">Your account address is: {this.accounts[0]}</p>
            <p>
              Address to allow:
              <input
                type="text"
                className="mx-2 rounded-lg border bg-transparent px-3 py-1 font-semibold focus:border-primary focus:outline-none"
                name="kycAddress"
                value={this.state.kycAddress}
                onChange={this.handleInputChange}
              />
              <button
                className="rounded-lg bg-primary px-4 py-2"
                type="button"
                onClick={this.handleKycWhitelisting}
              >
                Authorise Wallet
              </button>
            </p>
          </div>
          <hr className="py-4" />
          <b className="pb-4">BUY TOKENS</b>
          <p>
            If you want to buy tokens, send wei to this address:{' '}
            {this.state.tokenSaleAddress}{' '}
          </p>
          <p className="py-4">
            ¥ou currently have {Number(this.state.userTokens).toLocaleString()}{' '}
            TDE
          </p>
          <div className="my-5">
            <p>
              Total token to buy: {Number(this.state.buyToken).toLocaleString()}
            </p>
            {/* <MultiRangeSlider
              min="0"
              max={this.state.buyableToken}
              onChange={ this.onSliderChanged }
            /> */}
            <Slider
              disabled={false}
              max={this.state.buyableToken}
              // max={100}
              min={0}
              step={1}
              onChange={this.onSliderChanged}
            />
            <p>Tax: {Number(this.state.buyToken * 0.06).toLocaleString()}</p>
            <p>
              Actual got: {Number(this.state.buyToken * 0.94).toLocaleString()}
            </p>

            <button
              className="primary-btn"
              type="button"
              onClick={this.handleMoreTokensPurchase}
            >
              {this.state.purchaseBtnText}
            </button>
            <p className="py-2">
              <i>* Transaction might take upto 24 hours to finish!</i>
            </p>
          </div>
        </div>
      </GlobalLayout>
    )
  }
}

export default Buy
