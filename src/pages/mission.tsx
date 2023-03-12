import Image from "next/legacy/image"
import 'react-lazy-load-image-component/src/effects/blur.css'
import React, { lazy, Suspense } from 'react'
import GlobalLayout from '../components/layouts/GlobalLayout';
import { SEO } from '../components/shared/SEO'

const IntroductionPage = () => {
  return (
    <div>
      <SEO
        title="Empowering Charities and the Third Sector with Trigan: A Game-Changing Blockchain Solution"
        description="Trigan's innovative blockchain technology offers a new way for charities and third sector organisations to operate more effectively and achieve greater impact. Find out how Trigan can transform your organisation's operations and make a real difference in the world."
      />
      <div className="relative overflow-x-hidden bg-black bg-opacity-75">
        <GlobalLayout>
          <div className="relative w-screen">
            <div className="sm:px-4 sm:px-8 md:px-8 md:px-20 lg:px-32">
              <div className="grid justify-items-center">
                <div>
                  <button className="btn rounded-full bg-slate-100 bg-opacity-25 py-1 px-3 text-sm text-white">
                    #Introduction
                  </button>
                </div>
                <div className="mt-5">
                  <p className="text-center font-sans text-2xl font-medium text-white sm:text-3xl md:text-4xl lg:text-5xl">
                    Welcome to Trigan: Empowering Emergency and Disaster
                    Services{' '}
                    {/* <span className="text-violet-600">Opportunity</span> */}
                  </p>
                </div>
                <div className="mt-3 px-4">
                  <p className="text-center font-sans leading-snug text-slate-400 sm:text-sm md:text-lg md:leading-relaxed">
                    At Trigan, we understand the vital role that emergency and
                    disaster services play in keeping our communities safe and
                    secure. That's why we are committed to helping these
                    organisations access the resources and support they need to
                    do their jobs effectively.
                  </p>
                </div>
                <div className="mt-5">
                  <button
                    role="button"
                    className="lg:text-md rounded-full border bg-red-600 px-4 py-1 text-sm font-bold text-white hover:bg-red-700 md:ml-2 md:text-sm lg:py-2"
                  >
                    Start Explore Now
                  </button>
                </div>
              </div>

              <div className="mt-32 mb-6 sm:px-2">
                <div className="text-center md:text-left">
                  <button className="btn rounded-full bg-slate-100 bg-opacity-25 py-1 px-3 text-sm text-white sm:text-center md:text-left">
                    #Trigan Difference
                  </button>
                </div>
                <div className="mt-5 text-center md:text-left">
                  <p className="font-sans text-2xl font-medium text-white sm:text-3xl md:text-4xl lg:text-5xl">
                    <span className="text-violet-600">
                      The Power of Blockchain:
                    </span>{' '}
                    Secure and Transparent Systems{' '}
                  </p>
                  <div className="mt-3 ">
                    <p className="text-left font-sans leading-snug text-slate-400 sm:text-sm md:text-lg md:leading-relaxed">
                      Trigan's decentralised, distributed database stores a
                      continuously growing list of records called blocks, each
                      of which contains a timestamp and link to the previous
                      block. This forms a chain of blocks that is secured
                      through cryptography, making it resistant to tampering and
                      revision.
                      <br />
                      <br />
                      But our blockchain isn't just about security. It's also
                      about practicality and transparency. We've developed a
                      novel consensus mechanism that is tailored for real-world
                      environments, allowing us to tackle larger problems than
                      would be possible with current technologies. Our
                      blockchain facilitates the safe and economic exchange of
                      vital resources and information, helping emergency and
                      disaster services to respond more quickly and effectively
                      to crises.
                    </p>
                  </div>
                </div>
                <div className="mt-5 flex flex-col md:flex-row">
                  <div className="flex w-full items-center justify-center md:w-5/12">
                    <div className="w-3/5">
                      <Image
                        src="/images/trigan-symbol-white.svg"
                        alt="trigan-symbol"
                        width={100}
                        height={50}
                        layout="responsive"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-7/12">
                    <div className="flex flex-row items-start px-8">
                      <div>
                        <svg
                          className="text-white-500 mt-3 h-10 w-10 fill-white"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                            clipRule="evenodd"
                          ></path>
                          <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path>
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="mb-2 mt-3 text-base font-medium tracking-tight text-white">
                          Trigan Citizenship: Connecting and Empowering
                          Communities
                        </p>
                        <p className="mb-3 text-sm font-normal leading-relaxed text-gray-500 text-gray-400">
                          Trigan Citizenship is more than just a way to access
                          our platform. It's a way to connect with and empower
                          communities around the world. By participating in our
                          community-centric, caring economy, emergency and
                          disaster services can not only access the resources
                          they need but also contribute to the well-being of
                          others.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-row items-start px-8">
                      <div>
                        <svg
                          className="mt-3 h-10 w-10 fill-white"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                            clipRule="evenodd"
                          ></path>
                          <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path>
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="mb-2 mt-3 text-base font-medium tracking-tight text-white">
                          Impactful Approach to Blockchain
                        </p>
                        <p className="mb-3 text-sm font-normal leading-relaxed text-gray-500 text-gray-400">
                          Our unique approach to blockchain technology and
                          Trigan Citizenship is poised to transform cities into
                          smarter, safer, and more connected places, improving
                          the quality of life for all who live and work in them.
                          But our impact doesn't stop there.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-row items-start px-8">
                      <div>
                        <svg
                          className="mt-3 h-10 w-10 fill-white"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                            clipRule="evenodd"
                          ></path>
                          <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path>
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="mb-2 mt-3 text-base font-medium tracking-tight text-white">
                          Tackle Global Issues
                        </p>
                        <p className="mb-3 text-sm font-normal leading-relaxed text-gray-500 text-gray-400">
                          By leveraging the power of our platform, we can also
                          tackle larger global issues such as poverty,
                          deprivation, corruption, and inequality.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-10 w-full px-3 md:px-6">
                  <div className="bg-white-800 rounded-3xl bg-zinc-800 bg-opacity-80 shadow-md sm:py-6 sm:px-8 md:py-12 md:px-28">
                    <div className="flex flex-col md:flex-row">
                      <div className="sm:md-full p-4 md:w-8/12">
                        <p className="mb-2 text-xs font-extralight text-white sm:text-base">
                          TEAM
                        </p>
                        <h5 className="mb-2 text-lg font-medium tracking-tight text-white md:text-2xl">
                          Join Us
                        </h5>
                        <p className="mb-3 text-sm font-normal leading-relaxed text-gray-500 text-gray-400">
                          Join us on this journey and be a part of something
                          special as we work to create a brighter future for
                          all. Whether you're an individual looking to make a
                          positive impact in your community, or a business or
                          institution looking to partner with us, there are
                          countless ways to get involved with Trigan. By signing
                          up for early access, you can be among the first to
                          experience the benefits of our platform and contribute
                          to its development. Or, if you're ready to take things
                          to the next level, we welcome you to contact us and
                          explore the possibilities for investment and
                          participation in our project. The future is bright,
                          and the possibilities are endless. Take the first step
                          towards a better tomorrow and join us on this journey.
                        </p>
                      </div>
                      <div className="flex flex-row items-center p-4 sm:w-full md:w-4/12">
                        <button
                          role="button"
                          className="lg:text-md rounded-full border bg-red-600 px-4 py-1 text-sm font-bold text-white hover:bg-red-700 md:ml-6 lg:py-2"
                        >
                          Try Now
                        </button>
                        <button
                          role="button"
                          className="lg:text-md ml-6 rounded-full border px-4 py-1 text-sm font-bold text-white lg:py-2"
                        >
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </GlobalLayout>
      </div>
    </div>
  )
}

export default IntroductionPage
