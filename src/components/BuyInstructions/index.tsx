import { ReactNode } from 'react'

interface BuyInstructionsProps {
  children?: ReactNode
}

export const BuyInstructions: React.FC<BuyInstructionsProps> = () => {
  return (
    <div className="mx-auto max-w-md lg:max-w-2xl">
      {/* How to Buy Trigan Tokens (TED) Via the Metamask Wallet */}
      <div className="my-5">
        <p className="text-xl font-semibold">
          How to Buy Trigan Tokens (TED) Via the Metamask Wallet
        </p>
        <ul className="mt-2">
          <li>
            1. First thing is to add the Binance smart chain Mainnet to your
            metamask wallet (You can find the guide{' '}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain"
            >
              here
            </a>
            )
          </li>
          <li>2. Select the smart chain Mainnet</li>
          <li>3. Go to https://trigan.org/buy on your Metamask DAPP Browser</li>
          <li>
            4. Click on Authorize Wallet address (f you can&#39;t authorize
            wallet, kindly use the contact section below on the site to submit
            your BSC wallet address for it to be added to the system)
          </li>
          <li>
            5. Once your wallet has been authorized, select how much worth of
            TED tokens you want to buy
          </li>
          <li>6. Click on Buy now</li>
          <li>7. Congratulations on buying TED</li>
        </ul>
      </div>

      {/* How to Buy Trigan Tokens (TED) Via it’s Website */}
      <div className="my-5">
        <p className="text-xl font-semibold">
          How to Buy Trigan Tokens (TED) Via it&#39;s Website
        </p>
        <ul className="mt-2">
          <li>1. 1. Go to https://trigan.org/buy on your Browser</li>
          <li>2. Click on Buy now</li>
          <li>
            3. This will take you to a page with a QR scanner, scan to connect
            your wallet or manually connect your wallet
          </li>
          <li>
            4. Click on Authorize Wallet address (f you can&#39;t authorize
            wallet, kindly use the contact section below on the site to submit
            your BSC wallet address for it to be added to the system)
          </li>
          <li>
            5. Once your wallet has been authorized, select how much worth of
            TED tokens you want to buy
          </li>
          <li>6. Click on Buy now</li>
          <li>Congratulations on buying TED</li>
        </ul>
      </div>
    </div>
  )
}
