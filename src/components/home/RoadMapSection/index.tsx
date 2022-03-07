import Image from 'next/image'
import { ReactNode } from 'react'
import { Title } from '../../shared/Title'
interface RoadMapSectionProps {
  children?: ReactNode
}

const ROAD_MAPS = [
  {
    range: 'Q1',
    image: '/images/trigan-logo.svg',
    data: [
      {
        title: 'Presale 1: 15th March',
        description: 'Presale round 1 at the lowest price, for early adopters',
        date: '15th March, 2022',
      },
      {
        title: 'Presale 2: 20th March',
        description: 'Presale round 2 at a lower price, for early adopters',
        date: '20th March, 2022',
      },
      {
        title: 'Presale 3: 25th March',
        description: 'Presale round 3, still early!',
        date: '25th March, 2022',
      },
      {
        title: 'Pancakeswap Launch',
        description: 'Launch of our token on Pancakeswap, for later migration.',
        date: '30th March, 2022',
      },
      {
        title: 'Uniswap Launch',
        description: 'Launch of our token on Uniswap, for later migration.',
        date: '30th March, 2022',
      },
      {
        title: 'ERC-20 token launch',
        description: 'Ethereum ERC-20 network token launch',
        date: '31th March, 2022',
      },
      {
        title: 'BEP-20 token launch',
        description: 'Binance Smart Chain BEP-20 network token launch',
        date: '31th March, 2022',
      },
    ],
  },
  {
    range: 'Q2',
    image: '/images/trigan-logo.svg',
    data: [
      {
        title: 'Trigan Event',
        description: 'A live event broadcast from Scotland.',
        date: '15th April, 2022',
      },
      {
        title: 'Concepts',
        description: 'Release of Virtual City and Smartest City concepts.',
        date: '6th June, 2022',
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
        date: '9th September, 2022',
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

      <div className="absolute top-0 left-20 mt-20 ml-16">
        <h3 className="mt-5 text-4xl font-bold md:text-6xl">2022</h3>
      </div>

      <div className="py-10 md:py-16">
        {ROAD_MAPS.map((roadMap) => {
          return (
            <div
              key={roadMap.range}
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
                      <h4 className="z-30 pl-20 tracking-wide text-white md:pl-36 md:text-xl">
                        {roadMapData.title}
                      </h4>
                      <p className="z-30 pl-20 text-sm tracking-wide text-white md:pl-36 md:text-lg">
                        {roadMapData.description}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
