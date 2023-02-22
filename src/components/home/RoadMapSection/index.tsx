import { motion } from 'framer-motion'
import { ReactNode, useMemo } from 'react'
import ReactMapSectionComponent, {
  itemdata,
} from './components/ReactMapSectionComponent'
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
  const lineCompletedHeight = useMemo(() => {
    const index = itemdata.findIndex(({ active }) => active)
    switch (index) {
      case 0:
        return 'after:h-[130px]'
      case 1:
        return 'after:h-[300px]'
      case 2:
        return 'after:h-[450px]'
      case 3:
        return 'after:h-[630px]'
      case 4:
        return 'after:h-[800px]'
      case 5:
        return 'after:h-[1116px]'
    }
  }, [itemdata])

  return (
    <section
      id="roadmap"
      className="bg-roadMapSection relative overflow-hidden"
    >
      {/* <Title title="RoadMap" classes="!py-0" className="border-none" /> */}

      <div className="mt-[180px] container mx-auto py-8 text-center ">
        <motion.h3
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          transition={{ duration: 0.4 }}
          className="headingStyle text-2xl font-bold text-white md:text-4xl"
        >
          Phases
        </motion.h3>
      </div>

      <div className=" relative z-0  py-10 before:absolute before:left-2/4 before:top-0 before:z-10 before:clear-both before:-ml-[19.5px] before:h-0 before:w-0 before:border-l-[20px] before:border-r-[20px] before:border-t-[20px] before:border-solid before:border-l-transparent before:border-r-transparent before:border-t-white before:content-[''] after:absolute after:top-0 after:left-2/4 after:-z-[2px] after:-ml-[1.5px] after:h-full after:w-[3px] after:bg-[#dddddd] after:content-[''] md:py-12">
        {lineCompletedHeight && (
          <div
            className={`${lineCompletedHeight} absolute top-0 left-[50%] z-10 py-10 before:absolute before:left-2/4 before:top-0 before:z-10 before:clear-both before:-ml-[19.5px] before:h-0 before:w-0 before:border-l-[20px] before:border-r-[20px] before:border-t-[20px] before:border-solid before:border-l-transparent before:border-r-transparent before:border-t-[green] before:content-[''] 
            after:absolute after:top-0 after:left-1/2 after:-z-[2px] after:-ml-[1.5px] after:w-[3px] after:bg-[green] after:content-[''] after:animate-lineH md:py-12`}
          ></div>
        )}
        {/* {ROAD_MAPS.map((roadMap, i) => {
          return (
            <FadeInWhenVisible duration={0.2 * i} key={roadMap.range}>
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                transition={{ duration: 0.4 * i }}
                className="relative w-full h-full py-2 space-y-5 text-center"
              >
                <div className="absolute top-0 z-10 h-full border-l border-dotted left-10 border-dark dark:border-light md:left-20" />
                <div className="absolute top-0 z-20 flex justify-center w-16 h-16 rounded-full left-2 bg-primary md:left-12">
                  <Image
                    src={roadMap.image}
                    layout={'fill'}
                    className="object-cover p-2 filter-secondary"
                    alt={roadMap.data[0].title}
                  />
                </div>
                <h2 className="z-30 pl-20 text-3xl tracking-wide text-left dark:text-white md:pl-36 md:text-5xl">
                  {roadMap.range}
                </h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-2 lg:grid-cols-3">
                  {roadMap.data.map((roadMapData) => {
                    return (
                      <div
                        key={roadMapData.title}
                        className="relative py-4 text-left md:py-8"
                      >
                        <div className="absolute top-0 left-0 p-2 ml-20 rounded-full bg-dark dark:bg-white md:ml-36" />
                        <h4 className="pl-20 tracking-wide dark:text-white md:pl-36 md:text-xl">
                          {roadMapData.title}
                        </h4>
                        <p className="pl-20 text-sm tracking-wide dark:text-white md:pl-36 md:text-lg">
                          {roadMapData.description}
                        </p>
                      </div>
                    )
                  })}
                </div>
              </motion.div>
            </FadeInWhenVisible>
          )
        })} */}
        <div
          className="container mx-auto before:table before:content-[''] after:clear-both after:table after:content-[''] xl:px-5"
          style={{ position: 'relative' }}
        >
          <ReactMapSectionComponent />
        </div>
      </div>
    </section>
  )
}
