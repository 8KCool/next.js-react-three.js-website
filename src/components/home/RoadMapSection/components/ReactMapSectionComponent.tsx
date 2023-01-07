import React, { useMemo } from 'react'
import Card from './Card'
export const itemdata = [
  {
    name: 'Phase 1',
    imageUrl: '',
    date: 'Development of the first urban blockchain',
    detailPhase: [
      'Research and development of the urban blockchain technology',
      'Design and implementation of the blockchain infrastructure',
      'Testing and debugging of the urban blockchain',
    ],
  },
  {
    name: 'Phase 2',
    imageUrl: '',
    date: 'Launch of AI-enabled real-world communities',
    detailPhase: [
      'Development of AI technology for community management and optimization',
      'Integration of AI technology into real-world communities',
      'Launch of the first pilot communities',
    ],
  },
  {
    name: 'Phase 3',
    imageUrl: '',
    date: 'Creation of the community plus metaverse',
    detailPhase: [
      'Research and development of the community plus metaverse technology',
      'Design and implementation of the community plus infrastructure',
      'Testing and debugging of the community plus metaverse',
    ],
    active: true,
  },
  {
    name: 'Phase 4',
    imageUrl: '',
    date: 'Introduction of NFT ID system',
    detailPhase: [
      'Development of NFT ID technology',
      'Integration of NFT ID system into urban blockchain and community plus metaverse',
      'Testing and debugging of the NFT ID system',
    ],
  },
  {
    name: 'Phase 5',
    imageUrl: '',
    date: 'Implementation of Universal Basic Income',
    detailPhase: [
      'Research and development of universal basic income distribution model',
      'Integration of universal basic income into urban blockchain and community plus metaverse',
      'Testing and debugging of universal basic income system',
    ],
  },
  {
    name: 'Phase 6',
    imageUrl: '',
    date: 'Expansion of real-world work opportunities',
    detailPhase: [
      'Research and development of new work opportunities for individuals within the urban blockchain and community plus metaverse',
      'Implementation of new work opportunities',
      'Testing and debugging of new work opportunities system',
    ],
  } /*
  {
    name: 'Vietnam',
    imageUrl:
      'http://asia.vasilis-tsirimokos.com/img/banners/vietnam-small.jpg',
    date: '28 April - 20 May',
  },
  {
    name: 'Cambodia',
    imageUrl:
      'http://asia.vasilis-tsirimokos.com/img/banners/cambodia-small.jpg',
    date: '20 May - 29 May',
  },
  {
    name: 'Thailand',
    imageUrl:
      'http://asia.vasilis-tsirimokos.com/img/banners/thailand-small.jpg',
    date: '29 May - 19 June',
  },
  {
    name: 'Malaysia',
    imageUrl:
      'http://asia.vasilis-tsirimokos.com/img/banners/malaysia-small.jpg',
    date: '19 June - 3 July',
  },
  {
    name: 'Indonesia',
    imageUrl:
      'http://asia.vasilis-tsirimokos.com/img/banners/indonesia-small.jpg',
    date: '3 July - 28 July',
  },
  {
    name: 'Greece',
    imageUrl: 'http://asia.vasilis-tsirimokos.com/img/banners/greece-small.jpg',
    date: '28 July - 3 August',
  }, */,
]

const ReactMapSectionComponent = () => {
  const currentMilestoneIndex = useMemo(() => {
    const index = itemdata.findIndex(({ active }) => active)
    return index
  }, [itemdata])
  return (
    <>
      {itemdata.map(({ name, date, imageUrl, detailPhase, active }, index) => {
        if (index % 2 === 0) {
          return (
            <Card
              rotate={false}
              key={index}
              index={index}
              name={name}
              date={date}
              imageUrl={imageUrl}
              detailPhase={detailPhase}
              active={active}
              isCompleteMilestone={currentMilestoneIndex >= index}
            />
          )
        }
        if (index % 1 === 0) {
          return (
            <Card
              rotate={true}
              key={index}
              index={index}
              name={name}
              date={date}
              imageUrl={imageUrl}
              detailPhase={detailPhase}
              active={active}
              isCompleteMilestone={currentMilestoneIndex >= index}
            />
          )
        }
      })}
    </>
  )
}

export default ReactMapSectionComponent
