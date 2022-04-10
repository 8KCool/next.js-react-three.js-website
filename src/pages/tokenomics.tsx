import Image from 'next/image'
import { ReactNode } from 'react'
import { GlobalLayout } from '../components/layouts/GlobalLayout'
import { SEO } from '../components/shared/SEO'

interface TokenomicsProps {
  children?: ReactNode
}

const Tokenomics: React.FC<TokenomicsProps> = () => {
  return (
    <>
      <SEO title="Tokenomics" description="Trigan Tokenomics" />
      <GlobalLayout>
        <div className="mx-auto mb-5 max-w-2xl py-5">
          <h2 className="text-center text-4xl font-semibold">Tokenomics</h2>

          <div className="py-5">
            <p>
              750,000,000 BEP-20 tokens in total, with unsold tokens from the
              presale will be burnt. While we will offer an equivalent amount in
              ERC-20, we don&#39;t really expect this to gain much traction if
              at all.
            </p>

            <div className="relative mx-auto my-2 h-96 w-96">
              <Image
                src="/images/tokenomics.jpg"
                layout="fill"
                alt="Tokenomics"
              />
            </div>

            <ul className="ml-5 list-disc py-5">
              <li>0.25% private sale</li>
              <li>25% presale</li>
              <li>7.5% co-founders</li>
              <li>2.5% team</li>
              <li>10% liquidity</li>
              <li>15% marketing</li>
              <li>19.75% treasury</li>
              <li>20% project</li>
            </ul>

            <p>
              Our assumptions on ongoing tokenomics, which we have given some
              attention to during this stage of development, are as follows: 6%
              buy tax, split equally between marketing, liquidity and the team.
              18% sell tax, split the same.
            </p>
          </div>

          <div className="relative mx-auto my-2 h-96 w-96">
            <Image
              src="/images/token_distribution.png"
              layout="fill"
              alt="Tokenomics"
            />
          </div>
        </div>
      </GlobalLayout>
    </>
  )
}

export default Tokenomics
