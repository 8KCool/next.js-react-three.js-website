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
    <section  style={{"width":"100%", "background": "linear-gradient(126.08deg, rgba(255, 255, 255, 0.3) 13.84%, rgba(255, 255, 255, 0.1) 74.14%)"}as React.CSSProperties}
    className="supporter_sec relative px-10 z-20 flex items-center gap-10 backdrop-blur-md">
      <h2 style={{"width":"20%" , "font-size":"30px", "textAlign":"center"} as React.CSSProperties} className="text-[1rem]  text-white md2:text-[3rem]">
        Our Supporters
      </h2>
      <div style={{"width":"55%"}as React.CSSProperties} className="sup_logos flex justify-around">
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
