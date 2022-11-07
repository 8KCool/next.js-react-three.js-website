import React, { useEffect, createRef, useRef, useState } from 'react'
import ScrollingSlideShowElement from './scrollingSlideShowElement'

const scrollingSlideShow = () => {
  const cards = [
    {
      id: 1,
      headerText: 'Driving social change through technological evolution',
      mainText: `Trigan’s unique blockchain technology enables a fair,
                transparent, and decentralised new economy for the benefit of
                everyone, everywhere.`,
    },
    {
      id: 2,
      headerText: 'Communities',
      mainText: `The smart city operating system for real-world communities,
        improving quality of life in towns and cities on Earth.`,
      buttons: [{ name: 'Lorem ipsum' }],
    },
    {
      id: 3,
      headerText: 'Solving social issues',
      mainText: `Positive, fair solutions to poverty, corruption, inequality and
      deprivation using science and AI.`,
      buttons: [{ name: 'Lorem ipsum' }],
    },
    {
      id: 4,
      headerText: 'Metaverse',
      mainText: `A revolutionary local community-centric approach to medicine,
      workplace, education and social interaction.`,
      buttons: [
        { name: 'Healthcare' },
        { name: 'Workplace' },
        { name: 'Education' },
        { name: 'Social' },
      ],
    },
    {
      id: 5,
      headerText: 'Trigan',
      mainText: `Empowering you with the equal opportunity to succeed, regardless
      of your background.`,
      buttons: [{ name: 'Lorem ipsum' }],
    },
  ]

  const [centered, setCentered] = useState()

  const elementsRef = useRef(cards.map(() => createRef()))

  const highlightElements = () => {
    let distances = []
    cards.forEach((_, i) => {
      distances[i] =
        elementsRef.current[0].current.getBoundingClientRect().top +
        elementsRef.current[0].current.getBoundingClientRect().height / 2 -
        window.screen.height / 2
    })

    let closest = 0
    for (let i = 0; i < distances.length; i++) {
      if (distances[i] < distances[closest]) {
        closest = i
      }
    }
    setCentered(closest)

    // console.group
    // console.log(
    //   elementsRef.current[0].current.getBoundingClientRect().top +
    //     ' _ ' +
    //     elementsRef.current[1].current.getBoundingClientRect().top +
    //     ' _ ' +
    //     elementsRef.current[2].current.getBoundingClientRect().top
    // )
    // console.log(elementsRef.current[1].current.getBoundingClientRect().top)
    // console.log(elementsRef.current[2].current.getBoundingClientRect().top)
    // console.groupEnd

    // console.log(
    //   window.scrollY +
    //     ' + ' +
    //     elementsRef.current[0].current.getBoundingClientRect().top
    // )

    // console.log(
    //   window.scrollY +
    //     window.screen.height / 2 +
    //     ' _ ' +
    //     elementsRef.current[0].current.getBoundingClientRect().top
    // )
  }

  // useEffect(() => {
  //   console.log(centered)
  // }, [centered])

  useEffect(() => {
    window.addEventListener('scroll', () => {
      let distances = []
      cards.forEach((_, i) => {
        distances[i] =
          elementsRef.current[i].current.getBoundingClientRect().top +
          elementsRef.current[i].current.getBoundingClientRect().height / 2 -
          window.screen.height / 2
      })
      console.log(distances)

      let distance = Number.POSITIVE_INFINITY

      let closest = 0
      for (let i = 0; i < distances.length; i++) {
        console.log('For ' + i)
        if (Math.abs(distances[i]) < distance) {
          closest = i
          distance = Math.abs(distances[i])
          console.log('Changed ' + closest)
        }
      }
      setCentered(closest)
    })

    // console.log(viewport)

    return () => window.removeEventListener('scroll', highlightElements)
  }, [])

  return (
    <div className="relative z-20 mt-[1000px] flex w-full flex-col items-center gap-20 bg-white">
      {cards.map((card, index) => (
        <ScrollingSlideShowElement
          index={index}
          centered={centered}
          innerRef={elementsRef.current[index]}
          headerText={card.headerText}
          mainText={card.mainText}
          buttons={card.buttons}
        />
      ))}
    </div>
  )
}

export default scrollingSlideShow
