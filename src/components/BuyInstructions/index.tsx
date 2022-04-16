import { motion } from 'framer-motion'
import { ReactNode, useState } from 'react'
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'
import { FadeInWhenVisible } from '../shared/FadeInWhenVisible'

interface BuyInstructionsProps {
  children?: ReactNode
}

export const BuyInstructions: React.FC<BuyInstructionsProps> = () => {
  const [expandMetamask, setExpandMetamask] = useState(false)
  const [expandWebsite, setExpandWebsite] = useState(false)
  return (
    <div className="mx-auto max-w-md lg:max-w-2xl">
      {/* How to Buy Trigan Tokens (TED) Via the Metamask Wallet */}
      <div className="my-5">
        <button
          onClick={() => setExpandMetamask(!expandMetamask)}
          className="flex items-center gap-5 text-xl font-semibold"
        >
          {expandMetamask ? <AiOutlineArrowDown /> : <AiOutlineArrowUp />} How
          to Buy Trigan Tokens (TED) Via the Metamask Wallet
        </button>
        {expandMetamask && (
          <FadeInWhenVisible>
            <motion.ul
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              className="mt-2 ml-10"
            >
              <li>
                1. First thing is to add the Binance smart chain Mainnet to your
                metamask wallet (You can find the guide{' '}
                <a
                  target="_blank"
                  className="text-primary underline"
                  rel="noreferrer"
                  href="https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain"
                >
                  here
                </a>
                )
              </li>
              <li>2. Select the smart chain Mainnet</li>
              <li>
                3. Go to{' '}
                <a
                  target="_blank"
                  className="text-primary underline"
                  rel="noreferrer"
                  href="https://trigan.org/buy"
                >
                  https://trigan.org/buy
                </a>{' '}
                on your Metamask DAPP Browser
              </li>
              <li>
                4. Click on Authorize Wallet address (f you can&#39;t authorize
                wallet, kindly use the contact section below on the site to
                submit your BSC wallet address for it to be added to the system)
              </li>
              <li>
                5. Once your wallet has been authorized, select how much worth
                of TED tokens you want to buy
              </li>
              <li>6. Click on Buy now</li>
              <li>7. Congratulations on buying TED</li>
            </motion.ul>
          </FadeInWhenVisible>
        )}
      </div>

      {/* How to Buy Trigan Tokens (TED) Via it’s Website */}
      <div className="my-5">
        <button
          onClick={() => setExpandWebsite(!expandWebsite)}
          className="flex items-center gap-5 text-xl font-semibold"
        >
          {expandWebsite ? <AiOutlineArrowDown /> : <AiOutlineArrowUp />} How to
          Buy Trigan Tokens (TED) Via it&#39;s Website
        </button>
        {expandWebsite && (
          <FadeInWhenVisible>
            <motion.ul
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              className="mt-2 ml-10"
            >
              <li>
                1. Go to{' '}
                <a
                  target="_blank"
                  className="text-primary underline"
                  rel="noreferrer"
                  href="https://trigan.org/buy"
                >
                  https://trigan.org/buy
                </a>{' '}
                on your Browser
              </li>
              <li>2. Click on Buy now</li>
              <li>
                3. This will take you to a page with a QR scanner, scan to
                connect your wallet or manually connect your wallet
              </li>
              <li>
                4. Click on Authorize Wallet address (f you can&#39;t authorize
                wallet, kindly use the contact section below on the site to
                submit your BSC wallet address for it to be added to the system)
              </li>
              <li>
                5. Once your wallet has been authorized, select how much worth
                of TED tokens you want to buy
              </li>
              <li>6. Click on Buy now</li>
              <li>7. Congratulations on buying TED</li>
            </motion.ul>
          </FadeInWhenVisible>
        )}
      </div>
    </div>
  )
}
