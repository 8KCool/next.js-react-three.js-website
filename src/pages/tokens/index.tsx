import React from 'react'
import Image from 'next/image'


import { SEO } from '../../components/shared/SEO'

import { GlobalLayout } from '../../components/layouts/GlobalLayout'
import { ProjectSection } from '../../components/home/ProjectSection'

const Tokens = () => {
  return (
    <div>
        {/* <SEO title='Token'> */}
        <GlobalLayout>
        <div className='xl:mt-10 mt-5 sm:mt-6 md:mt-7'>

        <div className="relative flex-row items-center bg-white bg-opacity-80 px-2 h-80 font-sans text-white">
        <img
        // layout='fill'
        src="images/trigan-concept-art-001.jpg"
        className="absolute -z-10 h-full w-full object- content-center"
      />

            <div className=" text-center h-auto flex justify-center items-center"><img 
            src="https://uploads-ssl.webflow.com/62b42d68bf74cf04cd20f5c7/62c03712ad9536dc3ada4ebd_trian%20nation%20logo%20black.svg"
             loading="lazy" 
            alt="" className=" md:w-1/6 w-1/2 sm:w-1/3   md:pt-10 text-center " /></div>
    </div>
    <div className="wording wf-section">
        <div className="w-container">
            <div className="text-block-12">Your Future in your Own Hands.<strong>The Trigan Nation</strong> is a new interpretation of a Decentralised Autonomous Organisation <strong>(DAO)</strong> with one major difference - we believe that payments have no place in an honest democratic
                voting system. Trigan Nation <strong>empowers people and communities</strong> to change how people can live their lives. Please consider joining to help us build a better future together, today.We have a <strong>new consensus approach with reputation</strong>                as an important factor. This means that everyone in our community will have their own <strong>individual identity</strong>, which we call the <strong>Trigan Citizenship NFT Passport.</strong> These will provide <strong>voting rights, access to our Universal Basic Income implementation (UBI) and support services</strong>                to provide personalised opportunities for growth and self-improvement.For a very limited time, those who pre-register their interest in joining the Trigan Nation will be entitled to claim <strong>their own Trigan Citizenship NFT Passport for free!</strong></div>
        </div>
    </div>

</div>

      </GlobalLayout>
        {/* </SEO> */}
   
    </div>
  )
}
export default Tokens
