import Image from "next/legacy/image"
import Link from 'next/link'
import { ReactNode } from 'react'
import  GlobalLayout  from '../components/layouts/GlobalLayout'
import { SEO } from '../components/shared/SEO'
import { ThemeProvider } from 'next-themes'
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

interface TokenomicsProps {
  children?: ReactNode
}

const Tokenomics: React.FC<TokenomicsProps> = () => {
  return (
    <ThemeProvider attribute="class" enableSystem={true}>
      <>
        <SEO title="Tokenomics" description="Trigan Tokenomics" />
        <GlobalLayout>
          <div className="mx-auto mb-5 max-w-2xl py-5">
            <h2 className="text-center text-4xl font-semibold">Tokenomics</h2>

            <div className="py-5">
              <p>
                We will mint 750,000,000 BEP-20 and 750,000,000 ERC-20 tokens.
                Unsold tokens from the presale will be sent to a burn wallet. We
                are offering the ability to buy via both chains separately.
                These tokens are migratory and are therefore sold on the
                understanding that holders will later be migrated to our layer 1
                blockchain on a 1:1 basis when it is ready.
              </p>

              <div className="relative mx-auto my-2 h-96 w-96">
              <LazyLoadImage
                    alt={'Tokenomics'}
                    effect="blur"
                    src={'/images/new_tokenomics.jpg'} />

                {/* <Image
                  src="/images/new_tokenomics.jpg"
                  layout="fill"
                  alt="Tokenomics"
                /> */}
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
                Migratory token taxes will be as follows: 6% buy tax, split
                equally between marketing, liquidity and the team. 18% sell tax,
                split the same.
              </p>
            </div>

            <div className="relative mx-auto my-2 h-96 w-96">
            <LazyLoadImage
                    alt={'Tokenomics'}
                    effect="blur"
                    src={'/images/token_distribution.png'} />

              {/* <Image
                src="/images/token_distribution.png"
                layout="fill"
                alt="Tokenomics"
              /> */}
            </div>
          </div>

          <Link passHref href="/buy">
            <button className="primary-btn my-5">Buy Now</button>
          </Link>
        </GlobalLayout>
      </>
    </ThemeProvider>
  )
}

export default Tokenomics;