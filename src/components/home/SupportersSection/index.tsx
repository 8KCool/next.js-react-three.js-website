import React, { useEffect } from 'react'
import { ReactNode } from 'react'
import SupporterCard from './SupporterCard'
import AOS from 'aos';
import 'aos/dist/aos.css';

interface SupportersSectionProps {
  children?: ReactNode
}
export const SupportersSection: React.FC<SupportersSectionProps> = () => {
  useEffect(()=>{
    AOS.init({ offset: 150});
  });
  const supporters = [
    {
      name: 'South of Scotland Enterprise',
      img: 'icons/logos/sose-logo.png',
      alt: 'South of Scotland Enterprise',
      link: 'https://www.southofscotlandenterprise.com/',
      aos : "flip-up"
    }, 
    {
      name: 'Sunderland 5G & IoT Accelerator',
      img: 'icons/logos/iot-5g-accelerator.svg',
      alt: 'Sunderland 5G & IoT Accelerator',
      link: 'https://www.sunderlandiotaccelerator.com/',
      aos : "flip-up"
    },
  ]
  return (
    <section style={{"width":"100%" , "padding-top":"2rem"}}className="relative py-10 px-10 z-20 flex flex items-center gap-10">
      <h2 style={{"width":"20%" , "font-size":"30px", "textAlign":"center"}} className="text-[1rem]  text-white md2:text-[3rem]">
        Our Supporters
      </h2>
      <div style={{"width":"55%"}} className="grid w-10/12 grid-cols-2 grid-rows-2 flex-wrap items-center md2:flex md2:justify-center md2:gap-14 ">
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
