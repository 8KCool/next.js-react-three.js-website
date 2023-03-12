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
                        <p className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white font-sans text-center'>A New Kind of Investment <span className='text-violet-600'>Opportunity</span></p>
                    </div>
                    <div className='mt-3 px-4'>
                        <p className='text-slate-400 leading-snug md:leading-relaxed text-center sm:text-sm md:text-lg font-sans'>
                            Web3 investors are always on the lookout for the next big thing, and Trigan represents a truly unique and innovative Opportunity. Our Urban Blockchain
                            solution is the first of its kind, combining the power of blockchain technology with real-world applications that have the potential to transfer cities into 
                            smarter, safer and more connected places. This isn't just a project - It's a movement, and we invite you to be a part of it.
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
                        <button className='btn bg-slate-100 bg-opacity-25 text-white rounded-full py-1 px-3 text-sm sm:text-center md:text-left'>
                            #Trigan Difference
                        </button>
                    </div>
                    <div className='mt-5 text-center md:text-left'>
                        <p className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white font-sans'>Combining <span className='text-violet-600'>Web3 and Web2</span></p>
                    </div>
                    <div className='flex flex-col md:flex-row mt-5'>
                        <div className='w-full md:w-5/12 flex justify-center items-center'>
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
                        <div className='w-full md:w-7/12'>
                            <div className='flex flex-row items-start px-8'>
                                <div>
                                    <svg className="w-10 h-10 text-white-500 mt-3" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clipRule="evenodd"></path><path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path></svg>
                                </div>
                                <div className='ml-3'>
                                    <p className="mb-2 text-base font-medium tracking-tight text-white mt-3">More than just a cryptocurrency or a smart contract</p>
                                    <p className="mb-3 font-normal text-gray-500 text-gray-400 text-sm leading-relaxed">
                                        It's a new kind of Urban Blockchain that has the potential to revolutionize the way we live and work in cities 
                                    </p>
                                </div>
                            </div>

                            <div className='flex flex-row items-start px-8'>
                                <div>
                                    <svg className="w-10 h-10 text-white-500 mt-3" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clipRule="evenodd"></path><path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path></svg>
                                </div>
                                <div className='ml-3'>
                                    <p className="mb-2 text-base font-medium tracking-tight text-white mt-3">Bringing together best aspect of Web 3 and Web 2</p>
                                    <p className="mb-3 font-normal text-gray-500 text-gray-400 text-sm leading-relaxed">
                                        By bringing together the best aspect of Web3 and Web2, Trigan is bridging the gap between the online and ofline worlds in a way that has never been done before
                                    </p>
                                </div>
                            </div>

                            <div className='flex flex-row items-start px-8'>
                                <div>
                                    <svg className="w-10 h-10 text-white-500 mt-3" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clipRule="evenodd"></path><path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path></svg>
                                </div>
                                <div className='ml-3'>
                                    <p className="mb-2 text-base font-medium tracking-tight text-white mt-3">Practical, transparent, and secure</p>
                                    <p className="mb-3 font-normal text-gray-500 text-gray-400 text-sm leading-relaxed">
                                        leveraging yhe power of blockchain to tackle larger global issues such as poverty, deprivation, corruption and inequality
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='grid justify-items-center mt-16'>
                    <div>
                        <button className='btn bg-slate-100 bg-opacity-25 text-white rounded-full py-1 px-3 text-sm'>
                            #Why Choose Us
                        </button>
                    </div>
                    <div className='mt-5'>
                        <p className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white font-sans'>Benifit Will  <span className='text-violet-600'>You Get</span></p>
                    </div>
                    <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 mt-10">
                        <div className="mx-3 max-w-sm p-6 bg-zinc-800 bg-opacity-80 border border-gray-400 rounded-xl shadow-md bg-white-800">
                            <svg className="w-10 h-10 mb-2 text-white-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clipRule="evenodd"></path><path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path></svg>
                            <h5 className="mb-2 text-lg md:text-2xl font-medium tracking-tight text-white mt-3">High Potential</h5>
                            <p className="mb-3 font-normal text-gray-500 text-gray-400 text-sm leading-relaxed">
                                The potential for growth and return on Investment is one of the main reasons to consider Trigan as part of your portfolio. 
                            </p>
                            <a href="#" className="inline-flex items-center text-violet-600 mt-3">
                                See Explained
                                <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
                            </a>
                        </div>

                        <div className="mx-3 max-w-sm p-6 bg-zinc-800 bg-opacity-80 border border-gray-400 rounded-xl shadow-md bg-white-800">
                            <svg className="w-10 h-10 mb-2 text-white-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clipRule="evenodd"></path><path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path></svg>
                            <h5 className="mb-2 text-lg sm:text-2xl font-medium tracking-tight text-white mt-3">Unique Position</h5>
                            <p className="mb-3 font-normal text-gray-500 text-gray-400 text-sm leading-relaxed">
                                Our innovative approach has already garnered attention from major players in the tech and investment worlds and with no direct competition 
                            </p>
                            <a href="#" className="inline-flex items-center text-violet-600 mt-3">
                                See Explained
                                <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
                            </a>
                        </div>

                        <div className="mx-3 max-w-sm p-6 bg-zinc-800 bg-opacity-80 border border-gray-400 rounded-xl shadow-md bg-white-800">
                            <svg className="w-10 h-10 mb-2 text-white-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clipRule="evenodd"></path><path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path></svg>
                            <h5 className="mb-2 text-lg md:text-2xl font-medium tracking-tight text-white mt-3">Strong Partnerships</h5>
                            <p className="mb-3 font-normal text-gray-500 text-gray-400 text-sm leading-relaxed">
                                The potential for growth and return on Investment is one of the main reasons to consider Trigan as part of your portfolio. 
                            </p>
                            <a href="#" className="inline-flex items-center text-violet-600 mt-3">
                                See Explained
                                <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
                            </a>
                        </div>
                    </div>

                    <div className="mt-10 w-full px-3 md:px-6">
                        <div className="sm:py-6 md:py-12 sm:px-8 md:px-28 bg-zinc-800 bg-opacity-80 rounded-3xl shadow-md bg-white-800">
                            <div className='flex flex-col md:flex-row'>
                                <div className='sm:md-full md:w-8/12 p-4'>
                                    <p className="mb-2 text-sm sm:text-base font-extralight text-white">Let's Join us</p>
                                    <h5 className="mb-2 text-lg md:text-2xl font-medium tracking-tight text-white">Contact Our Team</h5>
                                    <p className="mb-3 font-normal text-gray-500 text-gray-400 text-sm leading-relaxed">
                                        The potential for growth and return on Investment is one of the main reasons to consider Trigan as part of your portfolio. 
                                    </p>
                                </div>
                                <div className='flex flex-row sm:w-full md:w-4/12 p-4 items-center'>
                                    <button role="button"
                                            className="bg-red-600 hover:bg-red-700 px-4 lg:py-2 py-1 lg:text-md text-sm md:ml-6 font-bold text-white border rounded-full">
                                    Try Now
                                    </button>
                                    <button role="button"
                                            className="px-4 lg:py-2 py-1 lg:text-md text-sm ml-6 font-bold text-white border rounded-full">
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