import { ReactNode } from 'react'
import { Title } from '../../shared/Title'
interface RoadMapSectionProps {
  children?: ReactNode
}

const roadMaps = [
  {
    range: 'Q1',
    image: '/images/trigan_logo_bigger.svg',
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
    image: '/images/trigan_logo_bigger.svg',
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
    image: '/images/trigan_logo_bigger.svg',
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
    image: '/images/trigan_logo_bigger.svg',
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
    <section id="roadmap" className="">
      <Title title="RoadMap" classes="py-0" />
    </section>
  )
}
