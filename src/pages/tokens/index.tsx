import React from 'react'
import Image from 'next/image'


import { SEO } from '../../components/shared/SEO'

import { GlobalLayout } from '../../components/layouts/GlobalLayout'
import { ProjectSection } from '../../components/home/ProjectSection'

const Tokens = () => {
  return (
    <>
        {/* <SEO title='Token'> */}
        <GlobalLayout>
        <div className='xl:mt-10 mt-5 sm:mt-6 md:mt-7'>

        <div className="relative flex-row items-center w-full bg-white bg-opacity-80 px-2 h-80 font-sans text-white">
        <img
        // layout='fill'
        src="images/trigan-concept-art-001.jpg"
        
        className="absolute -z-10 inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full"

      />

            <div className=" text-center h-auto flex justify-center items-center"><img 
            src="https://uploads-ssl.webflow.com/62b42d68bf74cf04cd20f5c7/62c03712ad9536dc3ada4ebd_trian%20nation%20logo%20black.svg"
             loading="lazy" 
            alt="" className=" md:w-1/6 w-1/2 sm:w-1/3   md:pt-10 text-center " /></div>
    </div>
   

</div>

{/* new section with a background image */}
{/* <section className="relative inset-0 bg-gradient-to-b from-black to-black opacity-50 z-0"> */}
{/* create a linear-gradient(180deg, rgba(0, 0, 0, 0.83), rgba(0, 0, 0, 0.83)), 
 */}

 <section className="relative ">

  <img
    className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full "
    src="https://uploads-ssl.webflow.com/62b42d68bf74cf04cd20f5c7/62b4cfee9778cd91c4bec07d_triganconcept.png"
    alt="Couple on a bed with a dog"
  />

  <div className=" block inset-0 absolute bg-gradient-to-b from-black to-black opacity-80 z-0"></div>

  <div className="relative px-4 py-32 mx-auto max-w-screen-xl lg:h-screen text-center  lg:items-center lg:flex">
    <div className=" text-center flex w-full justify-center items-center ">
      <h2
      className=" md:max-w-4xl font-light  py-5 pt-3 text-lg  text-[#e4e4e4]  sm:text-3xl">

Your Future in your Own Hands.<strong>The Trigan Nation</strong> is a new interpretation of a Decentralised Autonomous Organisation <strong>(DAO)</strong> with one major difference - we believe that payments have no place in an honest democratic voting system. Trigan Nation <strong>empowers people and communities</strong> to change how people can live their lives. Please consider joining to help us build a better future together, today.We have a <strong>new consensus approach with reputation</strong> as an important factor. This means that everyone in our community will have their own <strong>individual identity</strong>, which we call the <strong>Trigan Citizenship NFT Passport.</strong> These will provide <strong>voting rights, access to our Universal Basic Income implementation (UBI) and support services</strong> to provide personalised opportunities for growth and self-improvement.For a very limited time, those who pre-register their interest in joining the Trigan Nation will be entitled to claim <strong>their own Trigan Citizenship NFT Passport for free!</strong>

      </h2>

   

    
    </div>
  </div>
</section>

 {/* a world from our leader */}
<section className="relative ">

<img
  className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full "
  src="https://uploads-ssl.webflow.com/62b42d68bf74cf04cd20f5c7/62b47c03d5dbdefc838d83bf_trigan%20concept%202%20copy.jpg"
  alt="Couple on a bed with a dog"
/>

<div className=" block inset-0 absolute bg-gradient-to-b from-white to-[#e4e4e4] opacity-90  z-0"></div>

<div className="relative px-4 py-28 mx-auto max-w-screen-xl lg:h-auto text-center  lg:items-center lg:flex">
  <div className=" text-center flex flex-col w-full justify-center items-center ">
  
  {/* head text */}
  <div className=' pb-10 text-dark text-xl text-center'>
    <strong className='font-bold'>A Word from our founder</strong>
  </div>

    <div
    className=" md:max-w-4xl pb-10  leading-relaxed  font-light sm:font-medium px-3   text-[#3b3b3b]  text-xl">

The current market seems to ‘bear’ (sorry!) out our concerns about PoS. Basing a financial system’s ultimate trust on whoever has the most money seems insane. 
Building other systems on top of that even crazier. 
Add leveraged trading to crazy money and you get something like a crypto bomb. <br/>
<br/>We’re very different in design, architecture, solution and soul. <br/>
<br/>PoW feels like it came from someone with heart. It was deeply flawed (wasteful, ability to throw money at hardware to win at mining) 
but tried to be fair. PoS feels like the old corrupt national currencies but without the trust gained via a backing country’s reputation. Hardly future money. 
<br/><br/>Last October I was in front of a big electro-mechanical whiteboard figuring out why I hated existing consensus mechanisms so much and came up with 
the earliest version of the platform solution we have today. From the beginning of this year until today we’ve gone from a team of 1 to a team of over 30.
 As a pre-revenue and pre-funding startup, we are all working purely on belief in our shared dream and vision for Trigan and the Trigan Nation.
  &nbsp;We have a well reasoned approach to a radically different blockchain technology which actually facilitates a true liquid democracy. 
  It won’t just be fair, it will help people in real-world communities anywhere to live better - this is blockchain for the people and not the few. 
  <br/><br/>The first urban blockchain is the static foundation of our solution. It will grow sideways and be the backbone of our human economy. <br/><br/>
  It will be FaF, reliable and secure, using our novel real-world-relevant approach to consensus. &nbsp;
  <br/><br/>The technologies built on top of this enable everything else. We have an evolutionary amalgamation of the best bits of human and machine decision-making built
   to be able to spread anywhere in the world with just a few clicks. An actual caring system designed to compete to protect to protect and enable its community to succeed. We want to build cities - everyone has their own view of utopia and we would love to show you ours, but we also want to enable any city 
   (or community, from a building or a remote village to a travelling community or even a refugee camp!) to be better for the people who live in it. 
   <br/><br/>
   <strong className='pb-10 text-dark text-2xl text-center font-bold'>We will be releasing some papers regarding our solution shortly. </strong><br/><br/>-- <strong className='text-dark text-xl text-center font-bold'><em>Aaron S, </em></strong>
   <em>CEO &amp; CTO<br/></em><a className='text-primary hover:text-black underline' href="https://trigan.org/"><em>Trigan</em></a>




    </div>

 

  
  </div>
</div>
</section>




      </GlobalLayout>
        {/* </SEO> */}
   
    </>
  )
}
export default Tokens
