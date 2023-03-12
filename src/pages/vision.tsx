import Image from "next/legacy/image"
import React from 'react'
import 'react-lazy-load-image-component/src/effects/blur.css'
import GlobalLayout from '../components/layouts/GlobalLayout';
import { SEO } from '../components/shared/SEO'

const VisionPage = () => {
  return (
    <div>
      <SEO
        title="Empowering Charities and the Third Sector with Trigan: A Game-Changing Blockchain Solution"
        description="Trigan's innovative blockchain technology offers a new way for charities and third sector organisations to operate more effectively and achieve greater impact. Find out how Trigan can transform your organisation's operations and make a real difference in the world."
      />
      <div className="relative overflow-x-hidden bg-black bg-opacity-75">
        <GlobalLayout>
          <div className="relative w-screen">
            <div className="sm:px-4 md:px-8 lg:px-32">
              <div className="grid justify-items-center">
                <div>
                  {/* <button className="btn rounded-full bg-slate-100 bg-opacity-25 py-1 px-3 text-sm text-white">
                    #VISION
                  </button> */}
                </div>
                <div className="mt-5 px-12">
                  <p className="text-center font-sans text-2xl font-medium text-white sm:text-3xl md:text-4xl lg:text-5xl">
                    Small Businesses and Local Organisations:{' '}
                    <span className="text-violet-600">
                      A New Era of Growth and Security
                    </span>
                  </p>
                </div>
                <div className="mt-3 px-4">
                  <p className="text-justify font-sans leading-snug  text-slate-400 sm:text-sm md:text-center md:text-lg md:leading-relaxed">
                    Trigan's unique community funding mechanism and real-world relevant
                    smart contracts are poised to revolutionise the way small
                    businesses and local organisations operate and secure
                    funding. Here's how:
                  </p>
                </div>
                <div className="mt-5">
                  <button
                    role="button"
                    className="lg:text-md rounded-full border bg-red-600 px-4 py-1 text-sm font-bold text-white hover:bg-red-700 md:ml-2 md:text-sm lg:py-2"
                  >
                    Start Exploring
                  </button>
                </div>
              </div>
              {/* Section #1 */}

              <div className="mt-32 mb-6 sm:px-2">
                <div className="text-center md:text-left">
                  <button className="btn ml-2 rounded-full bg-slate-100 bg-opacity-25 py-1 px-3 text-sm text-white">
                    #TRUST
                  </button>
                </div>
                <div className="mt-5 text-center md:text-left">
                  <p className="px-3 font-sans text-2xl font-medium text-white sm:text-3xl md:text-4xl lg:text-5xl">
                  Building Trust{' '}
                    <span className="text-violet-600">Through Decentralisation</span>
                  </p>
                </div>
                <div className="flex flex-col md:mt-5 md:flex-row">
                  <div className="w-full text-justify md:w-8/12 md:text-left">
                    <div className="px-4 md:px-4">
                      <p className="my-8 text-sm font-normal leading-relaxed text-gray-400">
                      Trigan's platform is built on blockchain technology, which means it operates on a decentralized network. This eliminates the need for intermediaries and allows transactions to be more secure and transparent. By using Trigan, small businesses and local organisations can build trust with their stakeholders, including customers, investors, and partners.
                      </p>

                      <div className="mt-5 text-center md:text-left">
                        <button
                          role="button"
                          className="lg:text-md rounded-full border bg-red-600 px-4 py-1 text-sm font-bold text-white hover:bg-red-700  lg:py-2"
                        >
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="hidden w-full items-center justify-center md:flex md:w-4/12">
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
                </div>
              </div>

              {/* Section #2 */}

              <div className="mt-32 mb-6 sm:px-2">
                <div className="text-center md:text-right">
                  <button className="btn mr-2 rounded-full bg-slate-100 bg-opacity-25 py-1 px-3 text-sm text-white">
                    #LOCALINTEGRATION
                  </button>
                </div>
                <div className="mt-5 text-center md:text-right">
                  <p className="px-3 font-sans text-2xl font-medium text-white sm:text-3xl md:text-4xl lg:text-5xl">
                    <span className="text-violet-600">Empowering Local </span>
                    Communities
                  </p>
                </div>
                <div className="flex flex-col md:mt-5 md:flex-row">
                  <div className="hidden w-full items-center justify-center md:flex md:w-4/12">
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
                  <div className="w-full text-justify md:w-8/12 md:text-right">
                    <div className="px-4 md:px-8">
                      <p className="my-8 text-sm font-normal leading-relaxed text-gray-400">
                      Trigan's unique approach to community funding integrates with local towns and cities, creating a new level of community collaboration and economic empowerment. By connecting local businesses and organisations with the wider community, Trigan is helping to create sustainable and thriving local economies. With the ability to access funding from within the community and beyond, businesses can take advantage of new opportunities for growth and expansion, while communities benefit from the positive impact of a stronger local economy.
                      </p>

                      <div className="mt-5 text-center md:text-right">
                        <button
                          role="button"
                          className="lg:text-md rounded-full border bg-red-600 px-4 py-1 text-sm font-bold text-white hover:bg-red-700 md:ml-6 lg:py-2"
                        >
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-32 mb-6 sm:px-2">
                <div className="text-center md:text-left">
                  <button className="btn ml-2 rounded-full bg-slate-100 bg-opacity-25 py-1 px-3 text-sm text-white">
                    #COMMUNITY
                  </button>
                </div>
                <div className="mt-5 text-center md:text-left">
                  <p className="px-3 font-sans text-2xl font-medium text-white sm:text-3xl md:text-4xl lg:text-5xl">
                    Harnessing the Power of{' '}
                    <span className="text-violet-600">Community Funding</span>
                  </p>
                </div>
                <div className="flex flex-col md:mt-5 md:flex-row">
                  <div className="w-full text-justify md:w-8/12 md:text-left">
                    <div className="px-4 md:px-4">
                      <p className="my-8 text-sm font-normal leading-relaxed text-gray-400">
                        Trigan's community funding mechanism allows small
                        businesses and local organisations to raise funds
                        through democratic decision-making. Funds can come from
                        within the local community and from other interested
                        communities, companies, and organisations. This opens up
                        new opportunities for growth and expansion that may have
                        previously been out of reach.
                      </p>

                      <div className="mt-5 text-center md:text-left">
                        <button
                          role="button"
                          className="lg:text-md rounded-full border bg-red-600 px-4 py-1 text-sm font-bold text-white hover:bg-red-700  lg:py-2"
                        >
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="hidden w-full items-center justify-center md:flex md:w-4/12">
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
                </div>
              </div>

              {/* Section #2 */}

              <div className="mt-32 mb-6 sm:px-2">
                <div className="text-center md:text-right">
                  <button className="btn mr-2 rounded-full bg-slate-100 bg-opacity-25 py-1 px-3 text-sm text-white">
                    #SECURE
                  </button>
                </div>
                <div className="mt-5 text-center md:text-right">
                  <p className="px-3 font-sans text-2xl font-medium text-white sm:text-3xl md:text-4xl lg:text-5xl">
                    <span className="text-violet-600">Protection </span>
                    from Economic Uncertainty
                  </p>
                </div>
                <div className="flex flex-col md:mt-5 md:flex-row">
                  <div className="hidden w-full items-center justify-center md:flex md:w-4/12">
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
                  <div className="w-full text-justify md:w-8/12 md:text-right">
                    <div className="px-4 md:px-8">
                      <p className="my-8 text-sm font-normal leading-relaxed text-gray-400">
                        Trigan's innovative funding solutions protect small businesses and local organisations from economic uncertainty. With a secure funding mechanism, you can focus on growing your business or organisation without worrying about market volatility.
                      </p>

                      <div className="mt-5 text-center md:text-right">
                        <button
                          role="button"
                          className="lg:text-md rounded-full border bg-red-600 px-4 py-1 text-sm font-bold text-white hover:bg-red-700 md:ml-6 lg:py-2"
                        >
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section #3 */}

              <div className="mt-32 mb-6 sm:px-2">
                <div className="text-center md:text-left">
                  <button className="btn ml-2 rounded-full bg-slate-100 bg-opacity-25 py-1 px-3 text-sm text-white">
                    #OPPORTUNITY
                  </button>
                </div>
                <div className="mt-5 text-center md:text-left">
                  <p className="px-3 font-sans text-2xl font-medium text-white sm:text-3xl md:text-4xl lg:text-5xl">
                    Expanding your{' '}
                    <span className="text-violet-600">Reach</span>
                  </p>
                </div>
                <div className="flex flex-col md:mt-5 md:flex-row">
                  <div className="w-full text-justify md:w-8/12 md:text-left">
                    <div className="px-4 md:px-4">
                      <p className="my-8 text-sm font-normal leading-relaxed text-gray-400">
                        Trigan's community structure allows small businesses and local organisations to tap into new markets and customer bases. As part of a larger community, businesses and organisations can gain access to a broader range of funding sources and networking opportunities. Expand your reach and grow your business or organisation like never before.
                      </p>

                      <div className="mt-5 text-center md:text-left">
                        <button
                          role="button"
                          className="lg:text-md rounded-full border bg-red-600 px-4 py-1 text-sm font-bold text-white hover:bg-red-700  lg:py-2"
                        >
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="hidden w-full items-center justify-center md:flex md:w-4/12">
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
                </div>
              </div>

              {/* Section #4 */}

              <div className="mt-32 mb-6 sm:px-2">
                <div className="text-center md:text-right">
                  <button className="btn mr-2 rounded-full bg-slate-100 bg-opacity-25 py-1 px-3 text-sm text-white">
                    #REVOLUTIONARY
                  </button>
                </div>
                <div className="mt-5 text-center md:text-right">
                  <p className="px-3 font-sans text-2xl font-medium text-white sm:text-3xl md:text-4xl lg:text-5xl">
                    <span className="text-violet-600">The Future </span>
                    is now
                  </p>
                </div>
                <div className="flex flex-col md:mt-5 md:flex-row">
                  <div className="hidden w-full items-center justify-center md:flex md:w-4/12">
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
                  <div className="w-full text-justify md:w-8/12 md:text-right">
                    <div className="px-4 md:px-8">
                      <p className="my-8 text-sm font-normal leading-relaxed text-gray-400">
                        Trigan's community funding mechanism and real-world relevant smart contracts offer a glimpse into the future of small business and local organisation growth and security. By joining Trigan, you can be a part of this exciting new era and take your business or organisation to new heights. The future is now - join Trigan today!
                      </p>

                      <div className="mt-5 text-center md:text-right">
                        <button
                          role="button"
                          className="lg:text-md rounded-full border bg-red-600 px-4 py-1 text-sm font-bold text-white hover:bg-red-700 md:ml-6 lg:py-2"
                        >
                          Early Access
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

export default VisionPage
