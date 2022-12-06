/* eslint-disable @next/next/no-img-element */
import { ReactNode } from 'react'
import { GlobalLayout } from '../../components/layouts/GlobalLayout'
import Parallax from '../ProjectHero/asset/Parallax'

interface NewLifeProps {
    children?: ReactNode
}

const Section1: React.FC<NewLifeProps> = () => {
    return (
        <GlobalLayout>
            <header className="relative h-[100vh] w-full overflow-hidden ">
                <video
                    className="fixed -z-50 h-[100vh] max-h-full w-auto min-w-full object-cover"
                    width="618"
                    height="347"
                    autoPlay
                    loop
                    muted
                    preload="auto"
                >
                    <source src="/videos/live-free.mp4" type="video/mp4" />
                </video>

                <div className="absolute -z-10  grid h-full w-full grid-cols-1 items-center bg-dark bg-opacity-30 py-36 text-center xl:py-48 2xl:py-20 2xl:pt-48">
                    <div className="mx-auto grid grid-cols-1 items-center justify-center px-2 text-white sm:px-5 2xl:w-1/2 2xl:py-6">
                        <div
                            className={`text-4xl font-extralight md:text-6xl lg:text-7xl 2xl:py-5`}
                        >
                            <Parallax
                                translateX={0}
                                translateY={-2.5}
                                speed={0.5}
                                scale={1}
                                translateZ={0}
                                className={''}
                            >
                                <h1>Trigan Blockchain</h1>
                            </Parallax>
                        </div>
                        <div className="whitespace-normal text-4xl md:mt-[12px] md:text-6xl lg:mt-[16px] lg:text-7xl 2xl:mt-[36px]">
                            <Parallax
                                translateX={0.8}
                                translateY={1}
                                speed={0.5}
                                scale={1}
                                translateZ={0}
                                className={''}
                            >
                                <h2>Lead the Life you deserve.</h2>
                            </Parallax>
                        </div>
                    </div>
                </div>
            </header>

            <section className=" center align-center relative flex w-full flex-col flex-wrap justify-center overflow-hidden py-10">
                <div className="absolute -z-20 h-full w-full bg-white" />

                <div className="self-center bg-white px-5 md:w-[100%]">
                    <h1 className="h-[2em] whitespace-normal text-center text-4xl">
                    We are developing a new layer 1 blockchain as the data facilitation layer of our smart city operating system.
                    </h1>
                    <p>
                    We have taken a new approach to blockchain which leans more towards the original ideals of the Bitcoin Whitepaper and away from the more recent Proof of Stake projects. However, we don’t use Proof of Work and have instead created our own novel consensus mechanism for real world environments, which has far greater potential than existing solutions. This allows us a wider scope to tackle bigger problems than would otherwise be possible due to the constraints of existing technologies.
                    </p>
                    <br></br>
                    <h2>So what do we do differently?</h2>
                    <br></br>
                    <p>
                    We are more a technology company than a typical Web3 startup, so we are building with practical objectives in mind and are not anonymous - we are fully doxxed. Philosophically we are basically a Social Enterprise as, although we are not registered as one, we will hard-code protections to ensure a fair, equitable and good solution for everyone, regardless of background.
                    </p>
                    <br></br>
                    <p>
                    Our blockchain is the base layer of our smart city operating system. It is designed for data facilitation - to store data as safely and economically as possible and with integrated urban data validation. It will store both immutable and mutable data while enabling a new kind of integration between our real and digital selves, facilitated by our utility NFT-based and validated Trigan Citizenship. This is required to ensure that there is only one active identity per person as we are introducing a new kind of universal basic income and other local economy related enablements in addition to fully democratic voting. 
                    </p>
                    <br></br>
                    <p>
                    We believe that the Trigan urban OS has the potential to make cities smarter, safer, and more connected than ever before. 
                    </p>
                
                </div>
            </section>
        </GlobalLayout>
    )
}

export default Section1
