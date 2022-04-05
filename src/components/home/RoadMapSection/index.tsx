import { motion } from 'framer-motion'
import Image from 'next/image'
import { ReactNode } from 'react'
import { FadeInWhenVisible } from '../../shared/FadeInWhenVisible'
import { Title } from '../../shared/Title'
interface RoadMapSectionProps {
  children?: ReactNode
}

const ROAD_MAPS = [
  {
    range: 'Q2',
    image: '/images/trigan-logo.svg',
    data: [
      {
        title: 'Presale Round 1',
        description: 'Presale round 1 at the lowest price, for early adopters',
        date: 'TBC',
      },
      {
        title: 'Presale Round 2',
        description: 'Presale round 2 at a lower price, for early adopters',
        date: 'TBC',
      },
      {
        title: 'Presale Round 3',
        description: 'Presale round 3, still early!',
        date: 'TBC',
      },
      {
        title: 'Pancakeswap Launch',
        description: 'Launch of our token on Pancakeswap, for later migration.',
        date: 'TBC',
      },
      {
        title: 'Uniswap Launch',
        description: 'Launch of our token on Uniswap, for later migration.',
        date: 'TBC',
      },
      {
        title: 'ERC-20 token launch',
        description: 'Ethereum ERC-20 network token launch',
        date: 'TBC',
      },
      {
        title: 'BEP-20 token launch',
        description: 'Binance Smart Chain BEP-20 network token launch',
        date: 'TBC',
      },
      {
        title: 'Trigan Event',
        description: 'A live event broadcast from Scotland.',
        date: '15th April, 2022',
      },
    ],
  },
  {
    range: 'Q3',
    image: '/images/trigan-logo.svg',
    data: [
      {
        title: 'Research & Development',
        description:
          'Software / hardware development and Virtual Experience testing.',
        date: 'TBC',
      },
      {
        title: 'Concepts',
        description: 'Release of Virtual City and Smartest City concepts.',
        date: '6th June, 2022',
      },
    ],
  },
  {
    range: 'Q4',
    image: '/images/trigan-logo.svg',
    data: [

      {
        title: 'Virtual City Alpha',
        description:
          'Alpha testing of our Virtual City Alpha metaverse experience.',
        date: '31st December, 2022',
      },
      {
        title: 'Pilot Planning',
        description: 'Physical Smartest City pilot planning.',
        date: '31st December, 2022',
      },
    ],
  },
]

export const RoadMapSection: React.FC<RoadMapSectionProps> = () => {
  return (
    <section id="roadmap" className="relative h-full w-full overflow-hidden">
      <Title title="RoadMap" classes="py-0" />

      <div className="ml-16">
        <motion.h3
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-5 text-2xl font-bold md:text-4xl"
        >
          RoadMap for 2022
        </motion.h3>
      </div>

      <div className="py-10 md:py-12">
        {ROAD_MAPS.map((roadMap, i) => {
          return (
            <FadeInWhenVisible duration={0.2 * i} key={roadMap.range}>
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                transition={{ duration: 0.4 * i }}
                className="relative h-full w-full space-y-5 py-2 text-center"
              >
                <div className="absolute top-0 left-10 z-10 h-full border-l border-dotted border-light md:left-20" />
                <div className="absolute top-0 left-2 z-20 flex h-16 w-16 justify-center rounded-full bg-primary md:left-12">
                  <Image
                    src={roadMap.image}
                    layout={'fill'}
                    className="filter-secondary object-cover p-2"
                    alt={roadMap.data[0].title}
                  />
                </div>

                <h2 className="z-30 pl-20 text-left text-3xl tracking-wide text-white md:pl-36 md:text-5xl">
                  {roadMap.range}
                </h2>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-2 lg:grid-cols-3">
                  {roadMap.data.map((roadMapData) => {
                    return (
                      <div
                        key={roadMapData.title}
                        className="relative py-4 text-left md:py-8"
                      >
                        <div className="absolute top-0 left-0 ml-20 rounded-full bg-white p-2 md:ml-36" />
                        <h4 className="pl-20 tracking-wide text-white md:pl-36 md:text-xl">
                          {roadMapData.title}
                        </h4>
                        <p className="pl-20 text-sm tracking-wide text-white md:pl-36 md:text-lg">
                          {roadMapData.description}
                        </p>
                      </div>
                    )
                  })}
                </div>
              </motion.div>
            </FadeInWhenVisible>
          )
        })}
      </div>
    </section>
  )
}
