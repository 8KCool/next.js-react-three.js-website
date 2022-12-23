import React from 'react'
import { AboutSection } from '../components/home/AboutSection'
import { SupportersSection } from '../components/home/SupportersSection'
import { GlobalLayout } from '../components/layouts/GlobalLayout'
import { SEO } from '../components/shared/SEO'

const newpage = () => {
  return (
    <div>
      {/* <SEO title= "Homepage" /> */}
      <div className="relative overflow-x-hidden bg-black">
        <GlobalLayout>
          <div className="container relative w-screen">
            <div className=" ml-[24%] mt-[10%] mr-[2%]">
              <div className=" ">
                <div className="text-white">
                  <h1 className=" text-[2rem]"> Blockchain</h1>
                  <br />
                  <br />

                  <p>
                    We are developing a new layer 1 blockchain as the data
                    facilitation layer of our smart city operating system. We
                    have taken a new approach to blockchain, which leans more
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
              
                  <p>
                    So what do we do differently? We are more a technology
                    company than a typical Web3 startup, so we are building with
                    practical objectives and are not anonymous - we are fully
                    doxxed. Philosophically, we are a Social Enterprise as,
                    although we are not registered as one, we will hard-code
                    protections to ensure a fair, equitable and reasonable
                    solution for everyone, regardless of background.Our
                    blockchain is the base layer of our smart city operating
                    system. It is designed for data facilitation - to store data
                    as safely and economically as possible and with integrated
                    urban data validation. It will keep both immutable and
                    mutable data while enabling a new kind of integration
                    between our real and digital selves, facilitated by our
                    utility NFT-based and validated Trigan Citizenship. This
                    access NFT is required to ensure that there is only one
                    active identity per unique person to enable fair processes.
                    For example, we are introducing a new kind of universal
                    basic income and other local economy-related enablements. It
                    is also essential for fully democratic voting processes.
                  </p>
                  <br />
                  <br />            
                  <p>
                    Trigan Real-world Urban Operating System (TruOS) has the
                    potential to make cities smarter, safer, and more connected
                    than ever before.
                  </p>
                  <br></br>
                </div>

                <div className="image h-[auto]"><img src="/images/3.png" />
</div>
<br></br>
                <div className="text-white">
                  <h1 className="text-[2rem]">Trigan Economy</h1>
                  <h1 className="text-[1.2rem]">
                    The community-centric, caring economy.
                  </h1>
                  <br />
                  <br />
                  <p>
                    We live in urban communities with disconnected economies
                    which lead to higher levels of poverty, inequality and
                    deprivation. There is a missed opportunity to make
                    communities happier and more productive while helping
                    everyone to engage and succeed.
                  </p>
                  <br />
                  <br />
                  <p>
                    We define a community as a geo-located place where people
                    live or spend time together. A community can be a house, a
                    hotel, a business, a street or more.
                  </p>
                  <br />
                  <br />
                  <p>
                    There are huge issues worldwide preventing fair, equitable
                    access to opportunities - everyone deserves the chance to
                    learn, earn and enjoy a better quality of life.
                  </p>
                  <br />
                  <br />
                  <p className=" text-[1rem]">
                    Trigan Real-world Urban Operating System (TruOS)
                  </p>

                  <br />
                  <br />
                  <p className="text-[1.5rem] italic">
                 - "We combine human and artificial intelligence to improve
                    towns and cities so people can live better, healthier and
                    more fulfilling lives."
                  </p>
                  <br />
                  <br />
                  <br />
                </div>
                <div className=' text-white'>
                  <h1 className=' text-[1.8rem]'>Digital Twinning</h1>
                  <br />
                  <p>
                    A digital twin is a virtual representation of a situation or
                    environment which can be used to identify and solve problems
                    in the real world. They are often utilised relatively small
                    scale for production and logistical issues. We are taking a
                    more comprehensive approach as part of our solution to more
                    caring, cognitive towns and cities.
                  </p>
                  <br />
                  <br />
                  <p>
                    imagine a multifaceted 3D virtual experience designed to be
                    genuinely helpful and entertaining. Our virtual reality
                    development team are creating a new kind of data-enabled
                    experience where people can live, work and socialise.
                    Building on our urban blockchain technology, we use
                    historical and real-time data to inform digital twins of
                    real-world communities. A new groundbreaking approach to
                    identifying and solving issues affecting urban communities,
                    helping urban planners and administrators to improve their
                    cities for the good of the people who live there.
                  </p>
                  <br />
                  <br />
                  <p>
                    We have a community-focused approach to the metaverse and
                    will provide tools for people to personalise and improve
                    their virtual communities.
                  </p>
                  <br></br>
                </div>

                <div className="image h-[auto]"><img src="/images/1.png" />
                </div>
                <br />
                <br />
                <div className=' text-white'>
                  <h1 className='text-[1.8rem]'>City Infrastructure</h1>
                  <br />
                  <br />
                  <p>
                  City data represent the digital wealth of cities but also represent opportunity, sadly underutilised until now. Failure to capture and sufficiently analyse population data will lead to avoidable deaths and poorer health outcomes. More informed decisions are likely to have positive results, whether in construction, urban planning or any other data-driven decision in an urban community.
                  </p>
                  <br />
                  <br />
                  <p>
                  Despite technology advancing quickly, the smart city space remains fragmented. There are islands of data primarily disconnected, and all smart urban communities have different approaches. While there may be a wealth of potentially available data, it is typically not accessible. If it is available, access can be challenging to arrange, and data will be organised in many bespoke, different ways.
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
        </GlobalLayout>
      </div>
    </div>
  )
}

export default newpage
