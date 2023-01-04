import React from 'react'
import {GlobalLayout} from '../components/layouts/GlobalLayout'
// import HorizontalSlideShow from '../HeroSection/HorizontalSlideShow'
import HorizontalSlideShow from '../components/home/HeroSection/HorizontalSlideShow'

const newpage = () => {
  return (
    <div>
      {/* <SEO title= "Homepage" /> */}
      <div className="relative overflow-x-hidden bg-black bg-opacity-30">
        <GlobalLayout>
          <div className="relative w-screen">
            <div className="px-8 md:px-16">
              <div className=" ">
                <div className="text-white">
                  <h1 className=" text-[2rem]"> Blockchain</h1>
                  <br />
                  <br />
                  <p className="text-xl lg:text-3xl leading-relaxed">
                  Trigan has developed a unique layer 1 blockchain that serves as the data facilitation layer for our smart city operating system. Our approach to blockchain is focused on practical objectives and transparency, and we are fully doxxed as a socially responsible enterprise. We have created a novel consensus mechanism that is tailored for real-world environments, allowing us to tackle larger problems than would be possible with current technologies.
                  <br />
                  <br />
Our blockchain facilitates the safe and economic storage of data with integrated urban data validation, and supports both immutable and mutable data storage. This enables a new level of integration between our digital and physical selves, facilitated by our utility NFT-based and validated Trigan Citizenship. Trigan Citizenship is required to ensure that each unique person has only one active identity, which is critical for fair processes such as universal basic income initiatives and democratic voting.
<br />
                  <br />
The Trigan Real-world Urban Operating System (TruOS) is a revolutionary platform that has the potential to transform cities into smarter, safer, and more connected places. By leveraging the power of our blockchain technology and Trigan Citizenship, we are working to create a brighter future for urban communities everywhere. Join us in this journey and be a part of something special as we work to improve quality of life, increase sustainability, and drive economic development in cities around the world.
                  </p>
                  <br />
                  <br />
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
                  At Trigan, we are driven by a strong belief in the potential of every person to learn, earn, and live a better quality of life. We recognize that many urban communities are held back by disconnected economies that contribute to widespread poverty, inequality, and deprivation. These missed opportunities to create thriving, productive communities are a significant challenge that we are committed to addressing.
                  <br />
                  <br />
That's why we are working to create a new kind of economy that is more connected, inclusive, and equitable. By bringing people together and empowering them to succeed, we believe that we can create a brighter future for urban communities around the world. Our goal is to build a more sustainable, equitable, and prosperous future for everyone, and we are dedicated to using every tool at our disposal to achieve this vision. Join us in this effort and be a part of something special as we work to create a brighter future for urban communities everywhere.
                  </p>
                  <br />
                  <br />
                </div>
                <div className=' text-white'>
                  <h1 className=' text-[2rem]'>Digital Twinning</h1>
                  <br />
                  <h1 className="text-[1.8rem]">
                  Using digital twins to create a brighter future for urban communities.
                  </h1>
                  <br />
                  <br />
                  <p className="text-xl lg:text-3xl leading-relaxed">
                  At Trigan, we are using digital twins to create a brighter future for urban communities. Digital twins are virtual representations of real-world situations or environments that can be used to identify and solve problems. While they are often used on a small scale for production and logistics, we are taking a more comprehensive approach to creating smart, connected towns and cities.
                  <br />
                <br />
Our virtual reality development team is working to create a new kind of data-enabled experience where people can live, work, and socialize in a 3D virtual world that is both helpful and entertaining. By building on our urban blockchain technology and using historical and real-time data, we are creating digital twins of real-world communities that can inform urban planners and administrators about the issues that affect their cities.
<br />
                <br />
We believe that the metaverse should be community-focused, so we are also providing tools for people to personalise and improve their virtual communities. Join us on this journey and be a part of something special as we work to create a better world for everyone through the power of digital twins and urban innovation
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
                  At Trigan, we believe that city data represents a wealth of opportunity for urban communities. It can help inform important decisions in fields like construction, urban planning, and more, ultimately leading to better health outcomes and a higher quality of life for citizens. However, the smart city space is currently fragmented, with many disconnected islands of data and varying approaches to data management.
                  <br />
                  <br />
That's why we are working to create a more connected and cohesive city infrastructure. By providing easier access to data and standardizing its organization, we can help cities make better, more informed decisions and create a brighter future for their citizens. Join us in this effort to bring data to the forefront of urban development and create a brighter future for all.</p><br></br>                 
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
