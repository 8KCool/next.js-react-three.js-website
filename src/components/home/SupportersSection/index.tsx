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
  useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";

interface SupportersSectionProps {
  children?: ReactNode
}

interface ParallaxProps {
  children: string;
  baseVelocity: number;
}

export const SupportersSection: React.FC<SupportersSectionProps> = () => {
  const [top, setTop] = useState<boolean>(true)
  const baseVelocity = 1.5; 
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });


      // Scroll infinitely to the right
      const x = useTransform(baseX, (v) => `${wrap(-60, 60, v)}%`);
  
      const directionFactor = useRef<number>(1);
      useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    
        /**
         * This is what changes the direction of the scroll once we
         * switch scrolling directions.
         */
        if (velocityFactor.get() < 0) {
          directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
          directionFactor.current = 1;
        }
    
        moveBy += directionFactor.current * moveBy * velocityFactor.get();
    
        baseX.set(baseX.get() + moveBy);
      });

  useEffect(() => {
    AOS.init({ offset: 150 })
  })

  // const supporters repeating logos while not adjusting infinite scroll. Note: Temporary solution
  const supporters = [
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
      <motion.div className={`parallax overflow-hidden cursor-grab supporter_sec bg-gradient-to-r from-gradient-grey-1 to-gradient-grey-2 relative z-20 flex w-full flex-wrap items-center justify-center gap-5 px-5 mt-5 ${!top && 'bg-gradient-to-r from-gradient-dark-grey-1 to-gradient-dark-grey-3'}`}>
        <div>
          <h1 className={`w-full w-screen text-center text-2xl mt-5 ${!top && 'text-white'}`}>
            Our Supporters
          </h1>
        </div>
        <div>
        <motion.div style={{ x }}
          className="scroller sup_logos flex min-w-[120px] flex-1 flex-col items-center justify-center gap-5 sm:min-w-[192px] md:flex-row xl:flex-row"
        >
        {supporters.map((supporter) => (
          <SupporterCard
            link={supporter.link}
            alt={supporter.alt}
            key={supporter.name}
            src={supporter.img}
            aos={supporter.aos}
            baseVelocity={-20}
          />
        ))}
        </motion.div>
        </div>
      </motion.div>
    </>

  )
}

