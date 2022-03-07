import Image from 'next/image'
import { useRouter } from 'next/router'
import { ReactNode, useEffect, useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

interface NavbarProps {
  children?: ReactNode
}

export const LINKS = [
  'About',
  'Project',
  'Roadmap',
  'The Team',
  'FAQ',
  'Contact',
]

export const Navbar: React.FC<NavbarProps> = () => {
  const router = useRouter()
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

  return (
    <nav className="relative h-[90px] md:h-[100px]">
      <div
        className={`fixed top-0 left-0 z-10 w-full py-3 text-light md:px-0 ${
          windowTop > 80 ? 'bg-black opacity-70' : ''
        }`}
      >
        <div className="relative px-5">
          <div className="flex items-center justify-between xl:px-5">
            {/* Logo And Title */}
            <div className="flex items-center space-x-2">
              <div className="relative h-10 w-10 md:h-16 md:w-16">
                <Image
                  layout="fill"
                  src="/images/trigan-logo.svg"
                  className=""
                  alt="Logo"
                />
              </div>

              <button
                onClick={() => router.push('/')}
                className="-mt-3 p-0 font-blanka text-xl tracking-[0.3em] transition duration-300 hover:text-primary md:text-2xl lg:text-4xl xl:ml-2"
              >
                TRIGAN
              </button>
            </div>

            {/* Navigation Links (Big Screen) */}
            <div className="hidden font-roboto font-medium md:block">
              {LINKS.map((link) => {
                return (
                  <button
                    key={link}
                    className="cursor-pointer px-1.5 text-xs transition duration-300 hover:text-primary md:text-xl lg:px-5 lg:text-2xl"
                    onClick={() => handleNavClick(link.toLowerCase())}
                  >
                    {link}
                  </button>
                )
              })}
            </div>

            {/* Hamburger Menu */}
            <button
              onClick={() => setShowLinks(!showLinks)}
              className="block md:hidden"
            >
              {showLinks ? <GiHamburgerMenu /> : <GiHamburgerMenu />}
            </button>
          </div>
        </div>

        {/* Navigation Links (small screen) */}
        {showLinks && (
          <div className="flex h-screen w-full flex-col bg-black">
            {LINKS.map((link) => {
              return (
                <button
                  key={link}
                  className="cursor-pointer border-b border-dotted border-white px-4 py-2 text-center"
                  onClick={() => handleNavClick(link.toLowerCase())}
                >
                  {link}
                </button>
              )
            })}
          </div>
        )}
      </div>
    </nav>
  )
}

// :class="{ 'bg-black opacity-70': windowTop > 80 || showLinks, }"
