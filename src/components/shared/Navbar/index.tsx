import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { ReactNode, useEffect, useState } from 'react'
import { FaArrowDown } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdClose } from 'react-icons/io'
import { SocialLinks } from '../../footer/SocialLinks'
import { ToggleMode } from '../ToggleMode'
import { LINKS } from './constants'

interface NavbarProps {
  children?: ReactNode
}

export const Navbar: React.FC<NavbarProps> = () => {
  const router = useRouter()
  // for showing a different bg for navbar when scrolling
  const [windowTop, setWindowTop] = useState<number>(0)

  // for small screen
  const [showLinks, setShowLinks] = useState(false)

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
    await router.push('/')
    setShowLinks(false)
    const el = document.getElementById(link)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  // controlling navbar hover elememts to show popup
  const [hovered, setHovered] = useState<string | null>(null)

  // for mobile navigation
  const [showAdditionalLinks, setShowAdditionalLinks] = useState(false)

  return (
    <>
      <nav className="max-w-screen h-[80px] bg-primary md:h-[90px]">
        <div
          className={`top-0 left-0 z-10 w-full bg-primary py-8 text-white md:px-0 ${
            windowTop > 80 ? 'fixed bg-primary opacity-80 dark:bg-primary' : ''
          }`}
        >
          <div className="px-5">
            <div className="flex items-center justify-around ">
              {/* Logo And Title */}
              <div className="flex items-center ">
                <motion.div
                  initial={{ x: '-100%' }}
                  animate={{ x: 0 }}
                  className="relative h-8 w-36 md:h-12 md:w-60"
                >
                  <button
                    onClick={() => router.push('/')}
                    className="-mt-3 p-0 font-blanka text-xl tracking-[0.3em] transition duration-300 md:text-2xl lg:text-4xl xl:ml-2"
                  >
                    <Image
                      layout="fill"
                      src="/images/trigan logo v.svg"
                      className="fill-white"
                      alt="Logo"
                    />
                  </button>
                </motion.div>
              </div>

              {/* Navigation Links (Big Screen) */}
              <div className="relative hidden font-sans font-semibold md:block">
                {/* <ToggleMode classname="" /> */}
                {LINKS.map((link, i) => {
                  if (!link.additionalLinks) {
                    return (
                      <button
                        key={i}
                        className="lg:text-md cursor-pointer rounded-md  px-1.5 text-lg uppercase hover:border-b-2 hover:border-special md:text-sm lg:px-5"
                        onClick={() => handleNavClick(link.link)}
                      >
                        {link.title}
                      </button>
                    )
                  }
                  return (
                    <div
                      key={i}
                      className="inline-block"
                      onMouseEnter={() => setHovered(link.title)}
                      onMouseLeave={() => setHovered(null)}
                    >
                      <button
                        className="semibold lg:text-md flex cursor-pointer items-center gap-2 border-b border-transparent px-1.5 text-lg uppercase transition duration-300 md:text-sm lg:px-5"
                        onClick={() => handleNavClick(link.link)}
                      >
                        {link.title} <FaArrowDown className="h-3 w-3" />
                      </button>
                      {hovered && link.additionalLinks && (
                        <div className="absolute left-16 z-50 bg-light ">
                          <div className="flex flex-col text-dark  ">
                            {link.additionalLinks.map((adLink) => {
                              return (
                                <button
                                  onClick={() =>
                                    router.push('/projects/' + adLink.link)
                                  }
                                  className="semibold p-2 text-lg uppercase opacity-100 hover:bg-dark hover:text-white md:text-sm lg:text-xs"
                                  key={adLink.title}
                                >
                                  {adLink.title}
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

              {/* Hamburger Menu */}
              <motion.button
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                onClick={() => setShowLinks(true)}
                className="block md:hidden"
              >
                <GiHamburgerMenu />
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
            initial={{ y: '-100%', opacity: 0 }}
            animate={{ y: '0', opacity: 1 }}
            exit={{ y: '-100%', opacity: 0, transition: { duration: 0.1 } }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="fixed top-0 left-0 z-40 h-screen w-full overflow-y-hidden bg-white text-white"
          >
            <div className="flex justify-end">
              <button
                onClick={() => setShowLinks(false)}
                className="m-5 rounded-lg bg-primary px-4 py-2"
              >
                Close <IoMdClose className="inline-block" />
              </button>
            </div>
            {LINKS.map((link, i) => {
              if (!link.additionalLinks) {
                return (
                  <button
                    key={i}
                    className="my-5 mx-auto block w-1/2 cursor-pointer rounded-lg bg-primary px-4 py-2 text-center"
                    onClick={() => handleNavClick(link.link)}
                  >
                    {link.title}
                  </button>
                )
              }
              return (
                <div className="w-full" key={i}>
                  <button
                    key={i}
                    className="my-5 mx-auto flex w-1/2 cursor-pointer items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-center"
                    onClick={() => setShowAdditionalLinks(!showAdditionalLinks)}
                  >
                    {link.title} <FaArrowDown />
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
            <div className="py-5">
              <SocialLinks />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
