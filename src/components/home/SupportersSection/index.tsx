import React, { useEffect, useState } from 'react'
import { ReactNode } from 'react'
import SupporterCard from './SupporterCard'
import AOS from 'aos'
import 'aos/dist/aos.css'

interface SupportersSectionProps {
  children?: ReactNode
}
export const SupportersSection: React.FC<SupportersSectionProps> = () => {
  const [top, setTop] = useState<boolean>(true)

  useEffect(() => {
    AOS.init({ offset: 150 })
  })
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

    <section className={`supporter_sec bg-gradient-to-r from-gradient-grey to-gradient-grey-2 relative z-20 flex w-full flex-wrap items-center justify-center gap-10 px-10 ${!top && 'bg-gradient-to-r from-gradient-dark-grey to-gradient-dark-grey-2'}`}>
      <h2 className="text-center text-2xl">Our Supporters</h2>
      <div className="sup_logos flex min-w-[120px] flex-1 flex-col items-center justify-center gap-5 sm:min-w-[192px] md:flex-row xl:flex-row">
        {supporters.map((supporter) => (
          <SupporterCard
            link={supporter.link}
            alt={supporter.alt}
            key={supporter.name}
            src={supporter.img}
            aos={supporter.aos}
          />
        ))}
      </div>
    </section>
  )
}
