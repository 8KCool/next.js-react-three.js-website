import Image from "next/legacy/image";
import 'react-lazy-load-image-component/src/effects/blur.css';
import React, { lazy, Suspense } from 'react'
import GlobalLayout from '../components/layouts/GlobalLayout';
import { SEO } from '../components/shared/SEO';

const IntroductionPage = () => {
    return (
        <div>
      <SEO title="Empowering Charities and the Third Sector with Trigan: A Game-Changing Blockchain Solution" description="Trigan's innovative blockchain technology offers a new way for charities and third sector organisations to operate more effectively and achieve greater impact. Find out how Trigan can transform your organisation's operations and make a real difference in the world." />
      <div className="relative overflow-x-hidden bg-black bg-opacity-75">
        <GlobalLayout>
        <div className="relative w-screen">
            <div className="sm:px-4 md:px-8 sm:px-8 md:px-20 lg:px-32">
                <div className='grid justify-items-center'>
                    <div>
                        <button className='btn bg-slate-100 bg-opacity-25 text-white rounded-full py-1 px-3 text-sm'>
                            #Introduction
                        </button>
                    </div>
                    <div className='mt-5'>
                        <p className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white font-sans text-center'>The Future of <span className='text-violet-600'>Social Impact</span></p>
                    </div>
                    <div className='mt-3 px-4'>
                        <p className='text-slate-400 leading-snug md:leading-relaxed  text-justify md:text-center sm:text-sm md:text-lg font-sans'>
                            Trigan is more than just a technology company. We are a team of passionate individuals committed to making a positive impact in the world. 
                            That’s why we’ve developed a platform that has the potential to transform the way charities and third sector organizations operate, 
                            enabling them to make a bigger difference in the lives of those they serve.
                        </p>
                    </div>
                    <div className='mt-5'>
                    <button role="button"
                            className="bg-red-600 hover:bg-red-700 px-4 lg:py-2 py-1 text-sm lg:text-md md:text-sm md:ml-2 font-bold text-white border rounded-full">
                    Start Explore Now
                    </button>
                    </div>
                </div>

                <div className='mt-32 mb-6 sm:px-2'>
                    <div className='text-center md:text-left'>
                        <button className='btn bg-slate-100 bg-opacity-25 text-white rounded-full py-1 px-3 text-sm'>
                            #Power Blockchain
                        </button>
                    </div>
                    <div className='mt-5 text-center md:text-left'>
                        <p className='text-2xl px-3 sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white font-sans'>Increased <span className='text-violet-600'>Transparency and Trust</span></p>
                    </div>
                    <div className='flex flex-col md:flex-row md:mt-5'>
                    <div className='w-full md:w-4/12 flex justify-center items-center'>
                            <div className='w-3/5'>
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
                        <div className='w-full md:w-8/12 text-justify md:text-left'>
                            <div className='px-4 md:px-8'>
                                <p className="my-8 font-normal text-gray-500 text-gray-400 text-sm leading-relaxed">
                                    Blockchain technology is known for its security and transparency. By leveraging the power of our decentralized, distributed database, 
                                    charities and  third sector organizations can have confidence that their resources are being used in the most efficient and effective 
                                    manner possible. This not only helps to increase trust in the organizations themselves, but also helps to build trust in the broader sector as a whole.
                                </p>

                                <div className='mt-5 text-center md:text-left'>
                                    <button role="button"
                                        className="bg-red-600 hover:bg-red-700 px-4 lg:py-2 py-1 lg:text-md text-sm md:ml-6 font-bold text-white border rounded-full">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='grid justify-items-center mt-16'>
                    <div className="mt-10 w-full px-4">
                        <div className="py-6 px-2 md:px-28 bg-gradient-to-tl from-neutral-900 to-neutral-700 rounded-3xl shadow-md bg-white-800">
                            <div className='flex flex-row'>
                                <div className='w-full p-4 text-right'>
                                    <button className='btn bg-slate-100 bg-opacity-25 text-white rounded-full py-1 px-3 text-xs'>
                                        #Introduction
                                    </button>
                                    <h5 className="my-2 text-lg md:text-2xl font-medium tracking-tight text-white">Empowering</h5>
                                    <h5 className="mb-2 text-lg md:text-2xl font-medium tracking-tight text-violet-600">Communities and Individuals</h5>
                                    <p className="mb-3 font-normal text-gray-500 text-gray-400 text-sm leading-relaxed text-justify sm:text-right">
                                        Trigan Citizenship is more than just a concept. It’s a way of life that embodies  the value of community, 
                                        compassion, and collaboration. By becoming a Trigan Citizen, individuals and organizations can join a global 
                                        movement of like-minded individuals committed to making a positive difference in the world. This not only helps 
                                        to increase the impact of individual organizations, but also helps to create a sense of shared purpose and common goals.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='grid justify-items-center'>
                    <div className="mt-6 w-full px-3">
                        <div className="py-6 px-2 md:px-28 bg-gradient-to-tl from-neutral-900 to-neutral-700 rounded-3xl shadow-md bg-white-800">
                            <div className='flex flex-row'>
                                <div className='w-full p-4'>
                                    <button className='btn bg-slate-100 bg-opacity-25 text-white rounded-full py-1 px-3 text-xs'>
                                        #Solving Real-World Problems
                                    </button>
                                    <h5 className="my-2 text-lg md:text-2xl font-medium tracking-tight text-white">From <span className='text-violet-600'>Poverty to Inequality</span></h5>
                                    <p className="mb-3 font-normal text-gray-500 text-gray-400 text-sm leading-relaxed text-justify sm:text-left">
                                    Trigan is more than just a platform. It’s a solution to some of the most pressing problems facing our world today. From poverty and deprivation 
                                    to corruption  and inequality, Trigan is uniquely positioned to tackle these challenges head on. By leveraging the power of our blockchain technology 
                                    and Trigan Citizenship, we can create a more equitable, sustainable, and prosperous society for all.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='grid justify-items-center'>
                    <div className="mt-8 w-full px-3">
                        <div className="py-12 px-2 md:px-28 bg-gradient-to-tl from-neutral-900 to-neutral-700 rounded-3xl shadow-md bg-white-800">
                            <div className='flex flex-col md:flex-row'>
                                <div className='w-full md:w-8/12 p-4'>
                                    <p className="mb-2 text-base font-extralight text-white">Let’s Join Us Movement</p>
                                    <h5 className="mb-2 text-2xl font-medium tracking-tight text-white">Contact Our Team</h5>
                                    <p className="mb-3 font-normal text-gray-500 text-gray-400 text-sm leading-relaxed">
                                    Whether you’re a charity or third sector organization looking to enhance your impact, 
                                    or an individual looking to make a difference in your community, there are countless ways 
                                    to get involved with Trigan 
                                    </p>
                                </div>
                                <div className='flex flex-row sm:w-full md:w-4/12 p-4 items-center'>
                                    <button role="button"
                                            className="bg-red-600 hover:bg-red-700 px-4 lg:py-2 py-1 lg:text-md text-sm ml-3 font-bold text-white border rounded-full">
                                    Try Now
                                    </button>
                                    <button role="button"
                                            className="px-4 lg:py-2 py-1 lg:text-md text-sm ml-3 font-bold text-white border rounded-full">
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

export default IntroductionPage;