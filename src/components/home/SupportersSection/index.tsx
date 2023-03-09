import React, { useEffect, useRef, useState } from 'react'
import { ReactNode } from 'react'
import SupporterCard from './SupporterCard'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from 'framer-motion'
import { wrap } from '@motionone/utils'
import { useTheme } from 'next-themes'

interface SupportersSectionProps {
  children?: ReactNode
}

interface ParallaxProps {
  children: string
  baseVelocity: number
}

export const SupportersSection: React.FC<SupportersSectionProps> = () => {
  const [top, setTop] = useState<boolean>(true)
  const baseVelocity = 1.5
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  })
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  })

  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme

  // Scroll infinitely to the right
  const x = useTransform(baseX, (v) => `${wrap(-60, 60, v)}%`)

  const directionFactor = useRef<number>(1)
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000)

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get()

    baseX.set(baseX.get() + moveBy)
  })

  useEffect(() => {
    AOS.init({ offset: 250 })
  })

  // const supporters repeating logos while not adjusting infinite scroll. Note: Temporary solution
  const supporters = [
    {
      name: 'Microsoft for Startups',
      img: 'icons/logos/microsoft-for-startups-logo.png',
      alt: 'Microsoft for Startups',
    },
    {
      name: 'South of Scotland Enterprise',
      img: 'icons/logos/sose-logo.png',
      alt: 'South of Scotland Enterprise',
      link: 'https://www.southofscotlandenterprise.com/',
      aos: 'flip-up',
    },
    {
      name: 'Sunderland 5G & IoT Accelerator',
      img: 'icons/logos/iot-5g-accelerator.svg',
      alt: 'Sunderland 5G & IoT Accelerator',
      link: 'https://www.sunderlandiotaccelerator.com/',
      aos: 'flip-up',
    },
    {
      name: 'AWS Activate',
      img: 'icons/logos/aws-activate-logo.png',
      alt: 'AWS Activate',
      link: '',
      aos: 'flip-up',
    },
  ]

  useEffect(() => {
    const scrollHandler = () => {
      setTop(window.pageYOffset <= 5)
    }
    window.addEventListener('scroll', scrollHandler)

    // Explicit call so that the navbar gets blurred when component mounts
    scrollHandler()

    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  return (
    <>
      <motion.div
        style={ { marginTop: '50px' } }
        className={` parallax supporter_sec from-gradient-grey-1 flex h-[180px] w-full cursor-grab flex-wrap  overflow-hidden  bg-gradient-to-r to-gradient-grey-2 px-5 ${
          !top &&
          'from-gradient-dark-grey-1 to-gradient-dark-grey-3 bg-gradient-to-r'
        }`}
      >
        {/* <div> */}
        {/* <h1
            className={`mt-5 w-full w-screen text-center text-2xl ${
              !top && 'text-white'
            }`}
          >
            Our Supporters
          </h1> */}
        {/* </div> */}
        <div className="flex">
          <motion.div
            style={{ x }}
            className="scroller flex min-w-[100px] flex-1 flex-row  items-center justify-center gap-4  md:min-w-[120px] md:flex-row xl:flex-row"
          >
            {supporters.map((supporter) => (
              <SupporterCard
                link={supporter.link}
                alt={supporter.alt}
                key={supporter.name}
                src={supporter.img}
                aos={supporter.aos}
                baseVelocity={-20}
                theme={currentTheme === 'dark' ? 'dark' : 'light'}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}