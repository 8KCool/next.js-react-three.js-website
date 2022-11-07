import React, { useEffect, createRef, useRef } from 'react'
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

  const elementsRef = useRef(cards.map(() => createRef()))

  const highlightElements = () => {
    // console.log(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', highlightElements)

    console.log(elementsRef.current[0].current.getBoundingClientRect().top)
    console.log(elementsRef.current[1].current.getBoundingClientRect().top)
    console.log(elementsRef.current[2].current.getBoundingClientRect())
    // console.log(viewport)

    return () => window.removeEventListener('scroll', highlightElements)
  }, [])

  return (
    <div className="relative z-20 mt-[1000px] flex w-full flex-col items-center gap-20 bg-white">
      {cards.map((card, index) => (
        <ScrollingSlideShowElement
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
