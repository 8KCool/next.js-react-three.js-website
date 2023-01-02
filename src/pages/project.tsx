import React from 'react'
import {GlobalLayout} from '../components/layouts/GlobalLayout'
// import HorizontalSlideShow from '../HeroSection/HorizontalSlideShow'
import HorizontalSlideShow from '../components/home/HeroSection/HorizontalSlideShow'

const newpage = () => {
  return (
    <div>
      {/* <SEO title= "Homepage" /> */}
      <div className="relative overflow-x-hidden bg-black">
        <GlobalLayout>
          <div className="relative w-screen">
            <div className="px-8 md:px-16">
              <div className=" ">
                <div className="text-white">
                  <h1 className=" text-[2rem]"> Blockchain</h1>
                  <br />
                  <br />
                  <p className="text-xl lg:text-3xl leading-relaxed">
                    Our new layer 1 blockchain is the data facilitation layer of our smart city operating system.
                    We have taken a new approach to blockchain, which leans more
                    towards the original ideals of the Bitcoin White-paper and
                    away from the more recent Proof of Stake projects. However,
                    we don’t use Proof of Work and have created our novel
                    consensus mechanism for real-world environments, which has
                    far greater potential than existing solutions. This allows
                    us a broader scope to tackle more significant problems than
                    would otherwise be possible due to the constraints of
                    current technologies.
                  </p>
                  <br />
                  <br />

                  <p className="text-xl lg:text-3xl leading-relaxed">
                  We are a technology company that is focused on practical objectives and transparency. Unlike many other Web3 startups, we are fully doxxed and committed to being a socially responsible enterprise. We are hard-coding protections to ensure that our platform is fair, equitable, and reasonable for everyone, regardless of their background.
                  <br></br><br></br>Our blockchain is the foundation of our smart city operating system, designed to facilitate the safe and economic storage of data with integrated urban data validation. It allows for both immutable and mutable data storage, enabling a new level of integration between our real and digital selves.

This integration is facilitated by our utility NFT-based and validated Trigan Citizenship, which is required to ensure that each unique person has only one active identity in order to ensure fair processes. For example, we are introducing a new kind of universal basic income and other local economy-enhancing initiatives that rely on this system. It is also critical for fully democratic voting processes.

By leveraging the power of our blockchain technology and Trigan Citizenship, we are working to create a brighter future for urban communities everywhere.</p><br></br>
                  <p className="text-xl lg:text-3xl leading-relaxed">
                  The Trigan Real-world Urban Operating System (TruOS) is a revolutionary platform that has the potential to transform cities into smarter, safer, and more connected places. With its advanced technology and innovative approach to data storage and validation, TruOS is poised to create a brighter future for urban communities everywhere.

Whether it's improving quality of life, increasing sustainability, or driving economic development, TruOS is designed to make a positive impact on cities around the world. Join us on this journey and be a part of something special as we work to create a brighter future for all."
                  </p>
                  <br></br>
                </div>

                <div className="image h-[auto]"><img src="/images/3.png" />
                </div>
                <br></br>
                <div className="text-white">
                  <h1 className="text-[2rem]">Trigan Economy</h1>
                  <h1 className="text-[1.8rem]">
                    The community-centric, caring economy.
                  </h1>
                  <br />
                  <br />
                  <p className="text-xl lg:text-3xl leading-relaxed">
                  We believe that every person deserves the chance to learn, earn, and enjoy a better quality of life.

Unfortunately, many urban communities suffer from disconnected economies that contribute to higher levels of poverty, inequality, and deprivation. This missed opportunity to create happier, more productive communities is one of the biggest challenges facing our world today.

That's why we are working to create a new kind of economy that is more connected, inclusive, and equitable. By bringing people together and empowering them to succeed, we believe that we can create a brighter future for urban communities everywhere.
                  </p>
                  <br />
                  <br />
                </div>
                <div className=' text-white'>
                  <h1 className=' text-[2rem]'>Digital Twinning</h1>
                  <br />
                  <p className="text-xl lg:text-3xl leading-relaxed">
                  Using digital twins to create a brighter future for urban communities.

A digital twin is a virtual representation of a real-world situation or environment that can be used to identify and solve problems. While they are often used on a relatively small scale for production and logistical issues, we are taking a more comprehensive approach to creating caring, cognitive towns and cities.

Our virtual reality development team is creating a new kind of data-enabled experience where people can live, work, and socialize in a 3D virtual world that is both helpful and entertaining.<br /><br />By building on our urban blockchain technology and using historical and real-time data, we are creating digital twins of real-world communities that can inform urban planners and administrators about the issues that affect their cities.

We believe that the metaverse should be community-focused, so we are also providing tools for people to personalize and improve their virtual communities. Join us on this journey and be a part of something special as we work to create a better world for everyone.
                  </p>
                  <br></br>
                </div>

                <div className="image h-[auto]"><img src="/images/1.png" />
                </div>
                <br />
                <br />
                <div className=' text-white'>
                  <h1 className='text-[2rem]'>City Infrastructure</h1>
                  <br />
                  <br />
                  <p className="text-xl lg:text-3xl leading-relaxed">
                    City data represent the digital wealth of cities but also represent opportunity, sadly underutilised until now. Failure to capture and sufficiently analyse population data will lead to avoidable deaths and poorer health outcomes. More informed decisions are likely to have positive results, whether in construction, urban planning or any other data-driven decision in an urban community.
                  </p>
                  <br />
                  <br />
                  <p className="text-xl lg:text-3xl leading-relaxed">
                    Despite technology advancing quickly, the smart city space remains fragmented. There are islands of data primarily disconnected, and all smart urban communities have different approaches. While there may be a wealth of potentially available data, it is typically not accessible. If it is available, access can be challenging to arrange, and data will be organised in many bespoke, different ways.
                  </p><br></br>
                  <p className="text-xl lg:text-3xl leading-relaxed">
                  That's why we are working to create a more connected and cohesive city infrastructure. By providing easier access to data and standardising its organisation, we can help cities to make better, more informed decisions and create a brighter future for their citizens."
                  </p><br></br>                 
                  <div className="image h-[auto]"><img src="/images/2.png" /></div>
                </div>

              </div>
              <div className="space--10 gap-4 "></div>
              <button className=" mt-3 rounded-full border content-center bg-transparent py-2 px-4 font-m_plus_rounded_1c  font-bold text-white hover:bg-gray-400">
                <a href="/">Return to Homepage</a>
              </button>
              {/*      <SupportersSection></SupportersSection> */}
            </div>
          </div>
          <HorizontalSlideShow />
        </GlobalLayout>
      </div>
    </div>
  )
}

export default newpage
