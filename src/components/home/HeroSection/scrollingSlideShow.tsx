import React, { useEffect, createRef, useRef, useState,useLayoutEffect } from 'react'
import ScrollingSlideShowElement from './scrollingSlideShowElement'

const ScrollingSlideShow = () => {
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
      buttons: [{ text: 'Lorem ipsum' }],
    },
    {
      id: 3,
      headerText: 'Solving social issues',
      mainText: `Positive, fair solutions to poverty, corruption, inequality and
      deprivation using science and AI.`,
      buttons: [{ text: 'Lorem ipsum' }],
    },
    {
      id: 4,
      headerText: 'Metaverse',
      mainText: `A revolutionary local community-centric approach to medicine,
      workplace, education and social interaction.`,
      buttons: [
        { text: 'Healthcare' },
        { text: 'Workplace' },
        { text: 'Education' },
        { text: 'Social' },
      ],
    },
    {
      id: 5,
      headerText: 'Trigan',
      mainText: `Empowering you with the equal opportunity to succeed, regardless
      of your background.`,
      buttons: [{ text: 'Lorem ipsum' }],
    },
  ]

  const [centered, setCentered] = useState<number>()

  const elementsRef = useRef<any>(cards.map(() => createRef()))

  useEffect(() => {
    const highlightElements = () => {
      {
        const distances: number[] = []
        cards.forEach((_, i) => {
          distances[i] =
            (elementsRef.current[i].current.getBoundingClientRect()
              .top as number) +
            elementsRef.current[i].current.getBoundingClientRect().height / 2 -
            window.screen.height / 2
        })
        // console.log(distances)

        let distance = Number.POSITIVE_INFINITY

        let closest = 0
        for (let i = 0; i < distances.length; i++) {
          // console.log('For ' + i)
          if (Math.abs(distances[i]) < distance) {
            closest = i
            distance = Math.abs(distances[i])
          }
        }
        setCentered(closest)
      }
    }
    
    window.addEventListener('scroll', highlightElements)
   
    // console.log(viewport)

    return () => window.removeEventListener('scroll', highlightElements)
  }, [])

  useLayoutEffect(()=>{
   if (cards.length % 2 !== 0){
    const lastChildCard:any =document.getElementById('cards')?.lastChild
    lastChildCard.classList.add('col-span-2','w-2/4','mx-auto','mt-5') 
    lastChildCard.classList.remove('mx-4')
   }
  })

  return (
    <div className="relative mt-[1000px] flex w-full flex-col items-center gap-20  py-40 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-4 "
    id='cards'
    >
      {cards.map((card, index) => (
        <ScrollingSlideShowElement
          key={card.id}
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

export default ScrollingSlideShow
