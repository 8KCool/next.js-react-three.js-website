import { AnimatePresence, motion } from 'framer-motion'
import Image from "next/legacy/image"
import { useRouter } from 'next/router'
import React, { ReactNode, Suspense, useEffect, useState, lazy } from 'react'
import { FaAngleDown } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdClose } from 'react-icons/io'
import { SocialLinks } from './SocialLinks'
import { LINKS } from './constants'

import { Canvas } from '@react-three/fiber'
import useEarlyAccessModal from '../../../hooks/useEarlyAccessModal'
import { EarlyAccessButton } from './EarlyAccessButton'
import { ToggleMode } from '../ToggleMode'
import { useTheme } from 'next-themes'

const Stars = lazy(() => import('@react-three/drei').then(({ Stars }) => ({ default: Stars })))
const Model = lazy(() => import('../../../../public/EarthTexture/Static').then(({ default: Model }) => ({ default: Model })))



interface NavbarProps {
  children?: ReactNode
}
const Navbar: React.FC<NavbarProps> = () => {
  const router = useRouter()
  const [isDark, setIsDark] = useState(false)
  // for showing a different bg for navbar when scrolling
  const [windowTop, setWindowTop] = useState<number>(0)
  // for small screen
  const [showLinks, setShowLinks] = useState(false)
  const { setModal } = useEarlyAccessModal()
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme

  const [isTop, setIsTop] = useState(true);
  const [isScrollTop, setIsScrollTop] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY);

   
      if (window.scrollY > 150) {
        setIsScrollTop(false);
      } else {
        setIsScrollTop(true);
      }
    }
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  useEffect(() => {
    function handleMouseMove(event: any) {
      const cursorY = event.clientY;
      
    
  
      if (cursorY <= 300) {
        setIsTop(true);
      } else {
        setIsTop(false);

      }
    }
  
    document.addEventListener('mousemove', handleMouseMove);
  
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);


  useEffect(() => {
    if (currentTheme === 'dark') {
      setIsDark(true)
    } else {
      setIsDark(false)
    }
  }, [currentTheme])
  
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
    el?.scrollIntoView({ behavior: 'smooth' })
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

      prevScrollpos = currentScrollPos
      if (window.scrollY > 300) {
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
  
  
  return (
    <>
   <div> 
      <div className="fixed top-0 left-0 w-screen h-screen bg-black -z-10">
        <Suspense fallback={<div>Loading...</div>}>
          <Canvas>
            <ambientLight intensity={0.01} color="#ffffff" />
            <Stars
              radius={300}
              depth={60}
              count={1000}
              factor={7}
              saturation={0}
            />
            <directionalLight args={['#c8d5e3', 3]} position={[-10, 5, -1]} />
            <Model />
          </Canvas>
        </Suspense>
      </div>
      {isScrollTop || isTop ? (
        <nav className={`fixed z-50 w-full ${ isTop ? 'bg-black' : 'bg-transparent'} `}>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
          exit={{ opacity: 0, transition: { duration: 1 } }}
        >
        <div
          id="navbar"
          className={`sticky top-0 left-0 z-30 w-full bg-transparent text-white dark:text-black transition-all md:px-0`}
        >
          <div className="relative px-4 sm:px-6 md:px-8 lg:px-4 2xl:px-16 dark:bg-white">
            <div className="flex items-center justify-between ">
              <div>
                <motion.div
                  initial={{ x: '-100%' }}
                  animate={{ x: 0 }}
                  className="relative w-48 h-16 lg:h-20 lg:w-56"
                >
                  <button
                    onClick={() => router.push('/')}
                    className="p-0 transition duration-300"
                  >
                    <Image  
                      layout="fill"
                      src={isDark ? '/images/trigan logo v dark.svg' : '/images/trigan logo v.svg'}
                      alt="Logo"
                    />

                  </button>
                </motion.div>
              </div>
              {/* Navigation Links (Big Screen) */}
              <div
                className={`font-roboto relative hidden items-center font-medium md:flex `}
              >
               {/* <ToggleMode classname={''} /> */}
                {LINKS.map((link, i) => {
                  if (!link.additionalLinks) {
                    return (
                      <button
                        key={i}
                        className="lg:text-md text-red cursor-pointer rounded-md  px-1.5 font-thin uppercase  md:text-sm lg:px-5 xl:text-lg 2xl:text-xl dark:bg-white dark:text-black"
                        onClick={() => handleNavClick(link.link)}
                      >
                        <div className="ml-8 mr-8">{link.title}</div>
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
                        className="semibold lg:text-md flex cursor-pointer items-center gap-2 border-b border-transparent px-1.5 text-lg font-thin uppercase transition duration-500 md:text-sm lg:px-5 xl:text-lg 2xl:text-xl"
                        onClick={() => handleNavClick(link.link || '')}
                      >
                        {link.title} <FaAngleDown className="w-4 h-5" />
                      </button>
                      {hovered == link.title && link.additionalLinks && (
                        <div className="absolute flex flex-col items-center justify-center bg-white rounded-md ">
                          <div className="flex flex-col items-center justify-center text-black truncate rounded-b-md">
                            {link.additionalLinks.map((adLink) => {
                              return (
                                <button
                                  onClick={() => router.push(adLink.link)}
                                  className="w-full flex flex-col items-center justify-center pt-2 pb-2 pl-10 pr-5 text-sm uppercase opacity-100 semibold md:text-md hover:bg-black hover:text-white "
                                  key={adLink.title}
                                >
                                  <div className="mr-8">{adLink.title}</div>
                                </button>
                              )
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
              
              <EarlyAccessButton
                style={{ width: '125px' } as React.CSSProperties}
                className="invisible lg:visible md:visible h-10 font-bold text-white bg-red-600 border rounded-full lg:text-md hover:bg-red-700 md:ml-2 md:w-28 md:px-2 md:py-1 md:text-[10px] lg:w-36 lg:px-4 lg:py-2"
              />

              {/* Hamburger Menu */}
              <motion.button
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                onClick={() => setShowLinks(true)}
                className="block md:hidden"
              >
                <GiHamburgerMenu className={'h-7 w-7'} />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
      </nav>
      ) : "" }
      {/* Navigation Links (small screen) */}
      <AnimatePresence>
        {showLinks && (
          <motion.div
            key="mobile-nav"
            initial={{ y: '-100%', opacity: 0 }}
            animate={{ y: '0', opacity: 5 }}
            exit={{ y: '-100%', opacity: 0, transition: { duration: 15.0 } }}
            transition={{ duration: 5, ease: 'easeOut' }}
            className="fixed top-0 left-0 z-40 w-full h-screen overflow-y-hidden text-white bg-white"
          >
            <div className="flex justify-end">
              <div onClick={() => setShowLinks(false)} className="mt-8 mr-8">
                <IoMdClose className="inline-block h-7 w-7 text-zinc-900" />
              </div>
            </div>
            <div className="flex flex-col justify-between h-full pb-10">
              <div className={'grow'}>
                {LINKS.map((link, i) => {
                  if (!link.additionalLinks) {
                    return (
                      <button
                        key={i}
                        className="block w-3/4 px-4 py-2 mx-auto my-5 text-center rounded-lg cursor-pointer bg-primary md:w-1/2 lg:w-1/2 xl:w-1/2"
                        onClick={() => handleNavClick(link.link || '')}
                      >
                        {link.title}
                      </button>
                    )
                  }
                  return (
                    <div className="w-full" key={i}>
                      <button
                        key={i}
                        className="flex items-center justify-center w-3/4 gap-2 px-4 py-2 mx-auto my-5 text-center rounded-lg cursor-pointer bg-primary md:w-1/2 lg:w-1/2 xl:w-1/2"
                        onClick={() =>
                          setShowAdditionalLinks(!showAdditionalLinks)
                        }
                      >
                        {link.title} <FaAngleDown />
                      </button>
                      {showAdditionalLinks && (
                        <div>
                          {link.additionalLinks.map((link) => {
                            return (
                              <button
                                className="w-full p-1 text-dark"
                                key={link.title}
                                onClick={() => {
                                  router.push(link.link)
                                  setShowLinks(false)
                                }}
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
              
          
              <EarlyAccessButton
                className="block w-3/4 px-4 py-2 mx-auto my-5 text-center rounded-lg cursor-pointer bg-red-600 border lg:text-md hover:bg-red-700 md:w-1/2 lg:w-1/2 xl:w-1/2"
              />

              <div className="flex justify-center w-full min-w-full py-5 res_nav">
                <SocialLinks />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </>
  )
}
export default Navbar