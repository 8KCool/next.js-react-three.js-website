import {AnimatePresence, motion} from 'framer-motion'
import Image from 'next/image'
import {useRouter} from 'next/router'
import React, {ReactNode, Suspense, useEffect, useState} from 'react'
import {FaArrowDown} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {SocialLinks} from '../../footer/SocialLinks'
import {LINKS} from './constants'
import {Stars} from '@react-three/drei';
import {Canvas} from '@react-three/fiber';
import Model from '../../../../public/EarthTexture/Static';
import useEarlyAccessModal from "../../../hooks/useEarlyAccessModal";

interface NavbarProps {
  children?: ReactNode
}

export const Navbar: React.FC<NavbarProps> = () => {
  const router = useRouter()
  // for showing a different bg for navbar when scrolling
  const [windowTop, setWindowTop] = useState<number>(0)

  // for small screen
  const [showLinks, setShowLinks] = useState(false)


  const {setModal} = useEarlyAccessModal()

  const onScroll = () => {
    if (window) {
      setWindowTop(window.top?.scrollY || 0)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)

    return function cleanup() {
      window.removeEventListener('scroll', onScroll)
    }
  })

  const handleNavClick = async (link: string) => {
    await router.push(`/${link}`)
    setShowLinks(false)
    const el = document.getElementById(link)
    el?.scrollIntoView({behavior: 'smooth'})
  }

  // controlling navbar hover elements to show popup
  const [hovered, setHovered] = useState<string | null>(null)

  // for mobile navigation
  const [showAdditionalLinks, setShowAdditionalLinks] = useState(false)

  // Limit
  const [reactLimit, setReactLimit] = useState(false)

  const [navBg, setNavBg] = useState(false)

  // Checking
  useEffect(() => {
    let prevScrollpos = window.pageYOffset

    function checkingHandler() {
      const currentScrollPos = window.pageYOffset
      if (prevScrollpos > currentScrollPos) {
        document.getElementById('navbar')!.style.top = '0'
      } else {
        document.getElementById('navbar')!.style.top = '-130px'
      }
      prevScrollpos = currentScrollPos

      if (window.scrollY > 70) {
        setReactLimit(true)
      } else {
        setReactLimit(false)
      }

      if (window.scrollY > window.screen.height) setNavBg(true)
      else setNavBg(false)
    }

    window.addEventListener('scroll', checkingHandler)

    return () => window.removeEventListener('scroll', checkingHandler)
  }, [])

  // bg-primary
  return (
    <>
      <div className='fixed top-0 left-0 h-screen w-screen bg-black -z-10'>
        <Canvas>
          <Suspense fallback={null}>
            <ambientLight intensity={0.01} color='#ffffff'/>
            <Stars radius={300} depth={60} count={1000} factor={7} saturation={0}/>
            <directionalLight args={['#c8d5e3', 3]} position={[-10, 5, -1]}/>
            <Model/>
          </Suspense>
        </Canvas>
      </div>

      <nav className='max-w-screen h-[80px] bg-transparent md:h-[128px] relative mb-28'>
        <div
          id="navbar"
          className={`bg-transparent fixed top-0 left-0 z-30 w-full py-3 text-white transition-all md:px-0 border-b-2`}
        >
          <div className="x-5 relative lg:px-16 md:px-8 sm:px-6 px-4">
            <div className="flex items-center justify-between">
              {/* Logo And Title */}
              {/* <div
                className={`transition duration-500 ${
                  reactLimit
                    ? 'relative'
                    : 'relative  lg:absolute lg:top-[10rem] lg:left-[13rem]'
                }`}
              > */}
              <div>
                <motion.div
                  initial={{x: '-100%'}}
                  animate={{x: 0}}
                  className="relative h-16 w-48 lg:h-20 lg:w-56"
                >
                  <button
                    onClick={() => router.push('/')}
                    className="p-0 transition duration-300"
                  >
                    <Image
                      layout="fill"
                      src="/images/trigan logo v.svg"
                      alt="Logo"
                    />
                  </button>
                </motion.div>
              </div>

              {/* Navigation Links (Big Screen) */}
              <div
                className={`relative hidden items-center font-roboto font-medium md:flex `}
              >
                {/* <ToggleMode classname="" />  */}
                {LINKS.map((link, i) => {
                  if (!link.additionalLinks) {
                    return (
                      <button
                        key={i}
                        className="lg:text-md text-red cursor-pointer  rounded-md px-1.5 uppercase  md:text-sm lg:px-5 xl:text-lg 2xl:text-xl"
                        onClick={() => handleNavClick(link.link)}
                      >
                        {link.title}
                      </button>
                    )
                  }
                  return (
                    <div
                      key={i}
                      className="inline-block md:mr-2"
                      onMouseEnter={() => setHovered(link.title)}
                      onMouseLeave={() => setHovered(null)}
                    >
                      <button
                        className="semibold lg:text-md flex cursor-pointer items-center gap-2 border-b border-transparent px-1.5 text-lg uppercase transition duration-300 md:text-sm lg:px-5 xl:text-lg 2xl:text-xl"
                        onClick={() => handleNavClick(link.link || "")}
                      >
                        {link.title} <FaArrowDown className="h-3 w-3"/>
                      </button>
                      {(hovered == link.title) && link.additionalLinks && (
                        <div className=" flex flex-col items-center justify-center absolute bg-white ml-4 rounded-md ">
                          <div className="flex flex-col items-center justify-center text-black truncate ">
                            {link.additionalLinks.map((adLink) => {
                              return (
                                <button
                                  onClick={() =>
                                    router.push(adLink.link)
                                  }
                                  className="semibold pl-4 pr-4 pt-2 pb-2 w-full  text-sm uppercase opacity-100 hover:bg-black hover:text-white md:text-md "
                                  key={adLink.title}
                                >

                                  {adLink.title}


                                </button>
                              )
                            })}
                          </div>
                        </div>
                      )}
                      {/* )} */}
                      {/* {(hovered == link.title) && link.additionalLinks && (
                        <div className="absolute left-16 z-50 bg-light ">
                          <div className="flex flex-col text-dark ">
                            {link.additionalLinks.map((adLink) => {
                              return (
                                <button
                                  onClick={() =>
                                    router.push(adLink.link)
                                  }
                                  className="semibold p-2 text-lg uppercase opacity-100 hover:bg-dark hover:text-white md:text-sm xl:text-lg 2xl:text-xl"
                                  key={adLink.title}
                                >
                                  {adLink.title}
                                </button>
                              )
                            })}
                          </div>
                        </div>
                      )} */}

                    </div>
                  )
                })}

                <button role="button"
                        className="bg-red-600 hover:bg-red-700 lg:px-4 md:px-2 lg:py-2 md:py-1 lg:w-36 md:w-28 lg:text-md md:text-sm md:ml-2 font-bold text-white border rounded-full"
                        onClick={() => setModal({open: true, type: 'create', size: ''})}>
                  Early Access
                </button>
              </div>

              {/* Hamburger Menu */}
              <motion.button
                initial={{scale: 1.1}}
                animate={{scale: 1}}
                onClick={() => setShowLinks(true)}
                className="block md:hidden"
              >
                <GiHamburgerMenu className={'h-7 w-7'}/>
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Navigation Links (small screen) */}
      <AnimatePresence>
        {showLinks && (
          <motion.div
            key="mobile-nav"
            initial={{y: '-100%', opacity: 0}}
            animate={{y: '0', opacity: 1}}
            exit={{y: '-100%', opacity: 0, transition: {duration: 0.1}}}
            transition={{duration: 1, ease: 'easeOut'}}
            className="fixed top-0 left-0 z-40 h-screen w-full overflow-y-hidden bg-white text-white"
          >
            <div className="flex justify-end">
              <div
                onClick={() => setShowLinks(false)}
                className="mt-8 mr-8"
              >
                <IoMdClose className="inline-block text-zinc-900 w-7 h-7"/>
              </div>
            </div>
            <div className='flex flex-col justify-between h-full pb-10'>
              <div className={'grow'}>
                {LINKS.map((link, i) => {
                  if (!link.additionalLinks) {
                    return (
                      <button
                        key={i}
                        className="mx-auto my-5 block xl:w-1/2 lg:w-1/2 md:w-1/2 w-3/4 cursor-pointer rounded-lg bg-primary px-4 py-2 text-center"
                        onClick={() => handleNavClick(link.link || "")}
                      >
                        {link.title}
                      </button>
                    )
                  }
                  return (
                    <div className="w-full" key={i}>
                      <button
                        key={i}
                        className="mx-auto my-5 flex xl:w-1/2 lg:w-1/2 md:w-1/2 w-3/4 cursor-pointer items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-center"
                        onClick={() => setShowAdditionalLinks(!showAdditionalLinks)}
                      >
                        {link.title} <FaArrowDown/>
                      </button>
                      {showAdditionalLinks && (
                        <div>
                          {link.additionalLinks.map((link) => {
                            return (
                              <button
                                className="w-full p-1 text-dark"
                                key={link.title}
                              >
                                {link.title}
                              </button>
                            )
                          })}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
              <div className="py-5 flex justify-center w-full min-w-full">
                <SocialLinks/>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
};
