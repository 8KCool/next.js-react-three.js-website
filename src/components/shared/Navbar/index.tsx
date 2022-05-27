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
      <nav className="h-[80px] md:h-[90px]">
        <div
          className={`top-0 left-0 z-10 w-full py-3 text-dark dark:text-light md:px-0 ${
            windowTop > 80 ? 'fixed bg-light opacity-70 dark:bg-grey' : ''
          }`}
        >
          <div className="px-5">
            <div className="flex items-center justify-between xl:px-5">
              {/* Logo And Title */}
              <div className="flex items-center space-x-2">
                <motion.div
                  initial={{ x: '-100%' }}
                  animate={{ x: 0 }}
                  className="relative h-10 w-10 rounded-full bg-primary dark:bg-transparent md:h-12 md:w-12 "
                >
                  <Image
                    layout="fill"
                    src="/images/trigan-logo.svg"
                    className=""
                    alt="Logo"
                  />
                </motion.div>

                <button
                  onClick={() => router.push('/')}
                  className="-mt-3 p-0 font-blanka text-xl tracking-[0.3em] transition duration-300 hover:text-primary md:text-2xl lg:text-4xl xl:ml-2"
                >
                  TRIGAN
                </button>
              </div>

              {/* Navigation Links (Big Screen) */}
              <div className="relative hidden font-roboto font-medium md:block">
                <ToggleMode classname="" />
                {LINKS.map((link, i) => {
                  if (!link.additionalLinks) {
                    return (
                      <button
                        key={i}
                        className="cursor-pointer px-1.5 text-xs transition duration-300 hover:border-b hover:border-primary hover:text-primary md:text-xl lg:px-5 lg:text-2xl"
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
                        className="flex cursor-pointer items-center gap-2 border-b border-transparent px-1.5 text-xs transition duration-300 hover:border-primary hover:text-primary md:text-xl lg:px-5 lg:text-2xl"
                        onClick={() => handleNavClick(link.link)}
                      >
                        {link.title} <FaArrowDown className="h-4 w-4" />
                      </button>
                      {hovered && link.additionalLinks && (
                        <div className="absolute left-16 z-50 bg-light p-2 dark:bg-dark">
                          <div className="flex flex-col text-dark dark:text-white">
                            {link.additionalLinks.map((adLink) => {
                              return (
                                <button
                                  onClick={() =>
                                    router.push('/projects/' + adLink.link)
                                  }
                                  className="p-2 hover:text-primary"
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
            className="fixed top-0 left-0 z-40 h-screen w-full overflow-y-hidden bg-dark"
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
                          <button className="w-full p-1" key={link.title}>
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
