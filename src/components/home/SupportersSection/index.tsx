import { support } from 'jquery'
import { ReactNode } from 'react'
import SupporterCard from './SupporterCard'

interface SupportersSectionProps {
  children?: ReactNode
}

export const SupportersSection: React.FC<SupportersSectionProps> = () => {
  const supporters = [
  /*  {
      name: 'Bai Communications',
      img: 'icons/logos/bai-logo.svg',
      alt: 'Bai Communications',
      link: 'https://www.baicommunications.com/',
    },
    {
      name: 'SUNDERLAND City Council',
      img: 'icons/logos/sc-logo.png',
      alt: 'SUNDERLAND City Council',
      link: 'https://www.sunderland.gov.uk/',
    }, */
    {
      name: 'South of Scotland Enterprise',
      img: 'icons/logos/sose-logo.png',
      alt: 'South of Scotland Enterprise',
      link: 'https://www.southofscotlandenterprise.com/',
    }, 
    {
      name: 'Sunderland 5G & IoT Accelerator',
      img: 'icons/logos/iot-5g-accelerator.svg',
      alt: 'Sunderland 5G & IoT Accelerator',
      link: 'https://www.sunderlandiotaccelerator.com/',
    },
    
    /*
    {
      name: 'Sunderland Software City',
      img: 'icons/logos/ssc-logo.svg',
      alt: 'Sunderland Software City',
      link: 'https://www.sunderlandsoftwarecity.com/',
    }, */
  ]

  return (
    <section className="relative z-20 flex flex-col items-center justify-center gap-10 py-20">
      <h2 className="text-[2rem] font-bold text-white md2:text-[3rem]">
        Our Supporters
      </h2>
      <div className="grid w-10/12 grid-cols-2 grid-rows-2 flex-wrap items-center justify-center md2:flex md2:justify-center md2:gap-14 ">
        {supporters.map((supporter) => (
          <SupporterCard
            link={supporter.link}
            alt={supporter.alt}
            key={supporter.name}
            src={supporter.img}
          />
        ))}

        {/* <button className="mt-4 h-[150px] w-[250px] rounded-xl bg-sky-600 text-lg font-semibold text-white shadow-xl hover:bg-sky-500">
          Become <br />a Supporter
        </button> */}
      </div>
    </section>
  )
}
