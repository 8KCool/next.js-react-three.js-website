import React from 'react'
import Card from './Card'
const itemdata = [
  {
    name: 'Coming Soon!',
    imageUrl: '',
    date: '...',
  },
  {
    name: 'Coming Soon!',
    imageUrl: '',
    date: '...',
  },
  {
    name: 'Coming Soon!',
    imageUrl: '',
    date: '...',
  },
  {
    name: 'Coming Soon!',
    imageUrl: '',
    date: '...',
  },
  {
    name: 'Coming Soon!',
    imageUrl: '',
    date: '...',
  },
  {
    name: 'Coming Soon!',
    imageUrl: '',
    date: '...',
  }, /*
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
  }, */
]

const ReactMapSectionComponent = () => {
  return (
    <>
      {itemdata.map(({ name, date, imageUrl }, index) => {
        if (index % 2 === 0) {
          return (
            <Card key={index}
             index={index}
             name={name} date={date} imageUrl={imageUrl} />
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
            />
          )
        }
      })}
    </>
  )
}

export default ReactMapSectionComponent
