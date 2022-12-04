import React, { useEffect, createRef, useRef, useState,useLayoutEffect } from 'react'
import ScrollingSlideShowElement from './scrollingSlideShowElement'
import AOS from 'aos';
import 'aos/dist/aos.css';

const ScrollingSlideShow = () => {
    // for initialization of AOS
    useEffect(()=>{
      AOS.init({ offset: 150});
    })
  const cards = [
    {
      id: 1,
      headerText: 'The Urban Blockchain',
      mainText: `Trigan’s unique blockchain technology enables a fair,
                transparent, and decentralised new economy for the benefit of
                everyone, everywhere.`,
                aos : "fade-right"
    },
    {
      id: 2,
      headerText: 'Urban Communities',
      mainText: `The smart city operating system for real-world communities,
        improving quality of life in towns and cities on Earth.`,
      buttons: [{ text: 'Lorem ipsum' }],
      aos : "fade-left"
    },
    {
      id: 3,
      headerText: 'Digital Twinning',
      mainText: `A revolutionary local community-centric approach to medicine,
      workplace, education and social interaction.`,
      buttons: [{ text: 'Lorem ipsum' }],
      aos : "fade-right"

    },
    {
      id: 4,
      headerText: 'City Infrastructure',
      mainText: `Positive, fair solutions to poverty, corruption, inequality and
      deprivation using science and AI.`,
      aos : "fade-left",




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
      aos : "fade-up",
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

  useEffect(()=>{
   if (cards.length % 2 !== 0){
    const lastChildCard:any =document.getElementById('cards')?.lastChild
    lastChildCard.classList.add('lg:col-span-2','lg:w-2/4','lg:mx-auto','lg:mt-5') 
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
          aosdata={card.aos}
        />
      ))}
    </div>
  )
}

export default ScrollingSlideShow
