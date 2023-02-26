import React, { lazy, Suspense } from 'react'
import GlobalLayout from '../components/layouts/GlobalLayout';
// import HorizontalSlideShow from '../HeroSection/HorizontalSlideShow'
import HorizontalSlideShow from '../components/home/HeroSection/HorizontalSlideShow'
import { SEO } from '../components/shared/SEO'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import ProjectContent from '../components/project/projectContent'
import { ThemeProvider } from 'next-themes'

const newpage = () => {
  return (
    <div>
     <ThemeProvider attribute="class" enableSystem={true}> 
      <SEO title="Project" description="Trigan Project" />
      <div className="relative overflow-x-hidden bg-black dark:bg-white bg-opacity-75">
        <GlobalLayout>
        <div className='grid justify-items-center'>
            <div className=" w-full px-3">
              <div className="px-2 rounded-3xl shadow-md bg-white-800">
                <div className='mt-[200px] flex flex-row'>
                  <div className='w-full p-1 sm:p-4'>
                    <h5 className="text-2xl md:text-4xl font-medium tracking-tight text-white dark:text-black text-center lg:text-left ">Blockchain</h5>
                    <p className="mb-3 font-normal text-gray-500 text-xl leading-relaxed text-justify">
                    A blockchain is a decentralised, distributed database that
                    stores a continuously growing list of records called blocks.
                    Each block contains a timestamp and a link to the previous
                    block, forming a chain of blocks. The database is secured
                    through cryptography, which makes it resistant to tampering
                    and revision. One way to think about a blockchain is to
                    compare it with living systems since it functions as a
                    decentralised network. In a decentralised network, there is
                    no central authority or single control point. Instead, the
                    network comprises a group of interconnected nodes that
                    validate and record transactions. This is similar to how a
                    group of cells in a living organism can work together to
                    perform a specific function. Another way to think about the
                    relationship between blockchain and living systems is in
                    terms of adaptability and resilience. The decentralised
                    nature of a blockchain allows it to be highly adaptable, as
                    the network can continue to function even if one or more
                    nodes fail. This is similar to how a living system can
                    continue to work even if one or more cells are damaged or
                    destroyed. In both cases, the decentralised nature of the
                    system allows it to be more resilient and withstand external
                    challenges.
                    <br />
                    <br />
                    Trigan has developed a unique layer 1 blockchain that serves
                    as the data facilitation layer for our smart city operating
                    system. Our approach to blockchain is focused on practical
                    objectives and transparency, and we are fully doxxed as a
                    socially responsible enterprise. We have created a novel
                    consensus mechanism that is tailored for real-world
                    environments, allowing us to tackle larger problems than
                    would be possible with current technologies.
                    <br />
                    <br />
                    Our blockchain facilitates the safe and economic storage of
                    data with integrated urban data validation, and supports
                    both immutable and mutable data storage. This enables a new
                    level of integration between our digital and physical
                    selves, facilitated by our utility NFT-based and validated
                    Trigan Citizenship. Trigan Citizenship is required to ensure
                    that each unique person has only one active identity, which
                    is critical for fair processes such as universal basic
                    income initiatives and democratic voting.
                    <br />
                    <br />
                    The Trigan Real-world Urban Operating System (TruOS) is a
                    revolutionary platform that has the potential to transform
                    cities into smarter, safer, and more connected places. By
                    leveraging the power of our blockchain technology and Trigan
                    Citizenship, we are working to create a brighter future for
                    urban communities everywhere. Join us in this journey and be
                    a part of something special as we work to improve quality of
                    life, increase sustainability, and drive economic
                    development in cities around the world.
                    </p>
                  </div>
              </div>
            </div>
          </div>
        </div>

        <div className='grid justify-items-center mt-16'>
        <div className="mt-10 w-full px-4">
          <div className="py-6 px-2 rounded-3xl shadow-md bg-white-800">
              <div className='flex flex-row'>
                <div className='w-full p-1 sm:p-4 text-center lg:text-right'>
                  <h5 className="my-2 text-2xl md:text-4xl font-medium tracking-tight text-white">Trigan Economy</h5>
                  <h5 className="mb-2 text-2xl md:text-4xl font-medium tracking-tight text-violet-600">The community-centric, caring economy.</h5>
                  <p className="mb-3 font-normal text-gray-500 text-gray-400 text-xl leading-relaxed text-justify">
                    Economies are an integral part of society and are shaped by
                    the interactions and relationships between individuals,
                    businesses, and institutions. In a market-based economy,
                    individuals and businesses engage in the production,
                    distribution, and exchange of goods and services in order to
                    satisfy their own needs and desires, as well as those of
                    others. As people engage in economic activities, there may
                    be individuals or businesses that are willing to engage in
                    unethical or illegal activities in order to increase their
                    own profits or gain an advantage over their competitors. If
                    there are no consequences for these types of behaviors, or
                    if the rewards for engaging in them are greater than the
                    potential risks, then it is likely that they will continue
                    to occur.
                    <br />
                    In the long term, such behaviors can have negative
                    consequences for society as a whole, as they can erode trust
                    and undermine the integrity of economic systems.
                    Moreover, even when individuals do act with integrity and
                    try to do what is right, they may still be disadvantaged by
                    factors such as discrimination or systemic biases. This can
                    create a sense of unfairness and undermine trust in the
                    system as a whole.
                    <br />
                    In order to prevent these types of behaviors from being
                    rewarded and enabled, it is important for societies to have
                    strong systems of laws and regulations that protect
                    individuals and businesses from exploitation and ensure that
                    economic activities are conducted fairly and ethically. It
                    is also important for individuals and businesses to act with
                    integrity and to hold themselves accountable for their
                    actions, as this can help to create a stronger, more
                    sustainable economic system for everyone.
                    <br />
                    However, any system that is solely reliant on human
                    implementation or management is susceptible to corruption
                    and unfairness. This is because humans are not infallible
                    and can be swayed by their own self-interest or personal
                    gain. If a system does not have adequate checks and balances
                    in place to prevent corruption and unfairness, then it is
                    likely that these problems will arise.
                    <br />
                    <br />
                    At Trigan, we are driven by a strong belief in the potential
                    of every person to learn, earn, and live a better quality of
                    life. We recognize that many urban communities are held back
                    by disconnected economies that contribute to widespread
                    poverty, inequality, and deprivation. These missed
                    opportunities to create thriving, productive communities are
                    a significant challenge that we are committed to addressing.
                    <br />
                    <br />
                    That's why we are working to create a new kind of economy
                    that is more connected, inclusive, and equitable. By
                    bringing people together and empowering them to succeed, we
                    believe that we can create a brighter future for urban
                    communities around the world. Our goal is to build a more
                    sustainable, equitable, and prosperous future for everyone,
                    and we are dedicated to using every tool at our disposal to
                    achieve this vision. Join us in this effort and be a part of
                    something special as we work to create a brighter future for
                    urban communities everywhere.
                  </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='grid justify-items-center'>
            <div className="mt-6 w-full px-3">
              <div className="py-6 px-2 rounded-3xl shadow-md bg-white-800">
                <div className='flex flex-row'>
                  <div className='w-full p-1 sm:p-4'>
                    <h5 className="my-2 text-2xl md:text-4xl font-medium tracking-tight text-white text-center lg:text-left">Using digital twins </h5>
                    <h5 className="mb-2 text-2xl md:text-4xl font-medium tracking-tight text-violet-600">To create a brighter future for urban communities.</h5>
                    <p className="mb-3 font-normal text-gray-500 text-gray-400 text-xl leading-relaxed text-justify">
                    At Trigan, we are using digital twins to create a brighter
                    future for urban communities. Digital twins are virtual
                    representations of real-world situations or environments
                    that can be used to identify and solve problems. While they
                    are often used on a small scale for production and
                    logistics, we are taking a more comprehensive approach to
                    creating smart, connected towns and cities.
                    <br />
                    <br />
                    Our virtual reality development team is working to create a
                    new kind of data-enabled experience where people can live,
                    work, and socialize in a 3D virtual world that is both
                    helpful and entertaining. By building on our urban
                    blockchain technology and using historical and real-time
                    data, we are creating digital twins of real-world
                    communities that can inform urban planners and
                    administrators about the issues that affect their cities.
                    <br />
                    <br />
                    We believe that the metaverse should be community-focused,
                    so we are also providing tools for people to personalise and
                    improve their virtual communities. Join us on this journey
                    and be a part of something special as we work to create a
                    better world for everyone through the power of digital twins
                    and urban innovation
                    </p>
                  </div>
              </div>
            </div>
          </div>
        </div>

        <div className='grid justify-items-center mt-16'>
        <div className="mt-10 w-full px-4">
          <div className="py-6 px-2 rounded-3xl shadow-md bg-white-800">
              <div className='flex flex-row'>
              <div className='w-full p-1 sm:p-4'>
                  <h5 className="my-2 text-2xl md:text-4xl font-medium tracking-tight text-white text-center lg:text-left">City Infrastructure</h5>
                  <p className="mb-3 font-normal text-gray-500 text-gray-400 text-xl leading-relaxed text-justify">
                    At Trigan, we believe that city data represents a wealth of
                    opportunity for urban communities. It can help inform
                    important decisions in fields like construction, urban
                    planning, and more, ultimately leading to better health
                    outcomes and a higher quality of life for citizens. However,
                    the smart city space is currently fragmented, with many
                    disconnected islands of data and varying approaches to data
                    management.
                    <br />
                    import projectContent from
                    '../components/project/projectContent';
                    <br />
                    That's why we are working to create a more connected and
                    cohesive city infrastructure. By providing easier access to
                    data and standardizing its organization, we can help cities
                    make better, more informed decisions and create a brighter
                    future for their citizens. Join us in this effort to bring
                    data to the forefront of urban development and create a
                    brighter future for all.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
          
        <HorizontalSlideShow />
        </GlobalLayout>
        
      </div>
      </ThemeProvider>
    </div>
  )
}

export default newpage





