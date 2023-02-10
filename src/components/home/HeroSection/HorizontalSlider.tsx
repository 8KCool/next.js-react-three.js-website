import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation } from 'swiper'
import AOS from 'aos'
import Vector from "../../../assets/Vector.png"
import 'aos/dist/aos.css'

const HorizontalSlider = () => {
  // for initialization of AOS
  useEffect(() => {
    AOS.init({ offset: 150 })
  })
  const slidesContent = [
    {
      id: 1,
      img: 'icons/logos/rr1.png',
      headerText: 'The Urban Blockchain',
      mainText: `Trigan’s unique blockchain technology enables a fair,
                transparent, and decentralised new economy for the benefit of
                everyone, everywhere.`,
    },
    {
      id: 2,
      img: 'icons/logos/rr2.png',
      headerText: 'Urban Communities',
      mainText: `The smart city operating system for real-world communities,
        improving quality of life in towns and cities on Earth.`,
      buttons: [{ text: 'Lorem ipsum' }],
    },
    {
      id: 3,
      img: 'icons/logos/rr3.png',
      headerText: 'Digital Twinning',
      mainText: `A revolutionary local community-centric approach to medicine,
      workplace, education and social interaction.`,
      buttons: [{ text: 'Lorem ipsum' }],
    },
    {
      id: 4,
      img: 'icons/logos/rr1.png',
      headerText: 'City Infrastructure',
      mainText: `Positive, fair solutions to poverty, corruption, inequality and
      deprivation using science and AI.`,
      buttons: [
        { text: 'Healthcare' },
        { text: 'Workplace' },
        { text: 'Education' },
        { text: 'Social' },
      ],
    },
    {
      id: 5,
      img: 'icons/logos/rr2.png',
      headerText: 'Trigan',
      mainText: `Empowering you with the equal opportunity to succeed, regardless
      of your background.`,
      buttons: [{ text: 'Lorem ipsum' }],
    },
    {
      id: 6,
      img: 'icons/logos/rr2.png',
      headerText: 'Universal Basic Income',
      mainText: 'Universal Basic Income, providing a guaranteed income for all community members, promoting financial stability and reducing poverty.',
      },
      {
      id: 7,
      img: 'icons/logos/rr1.png',
      headerText: 'Decentralised Governance',
      mainText: "Decentralised governance, giving power back to the community and promoting transparency and fairness in decision-making.",
      },
      {
      id: 8,
      img: 'icons/logos/rr3.png',
      headerText: 'Eco-Friendly Solutions',
      mainText: "Prioritising environmental sustainability, providing solutions that promote a cleaner and greener future for cities.",
      },
      {
      id: 9,
      img: 'icons/logos/rr3.png',
      headerText: 'Opportunity for All',
      mainText: "Designed to provide equal opportunities for success, regardless of background or socioeconomic status.",
      },
      {
      id: 10,
      img: 'icons/logos/rr1.png',
      headerText: 'Real-World Impact',
      mainText: "Designed to tackle real-world issues and make a meaningful impact on urban communities, improving the quality of life for all.",
      },
  ]
  return (
    <div className="relative px-4 pt-[50px] pb-[50px] ">
      <Swiper
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          // when window width is >= 768px
          480: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          980: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="px-5"
      >
        {slidesContent.map((slide) => (
          <SwiperSlide className="border border-gray dark:bg-slate-900 dark:text-black" key={slide.id}>
            <div
              className="horizontalCard flex-column relative  flex h-[200px] w-full max-w-[600px] items-left justify-center rounded-lg px-2 font-semibold text-white shadow-lg md2:px-10 md2:text-xl"
            >
              <div className="purple"><img src={slide.img}/></div> 
              <h2 className="text-left">{slide.headerText}</h2>
              <p className="h-[150px] text-left">{slide.mainText}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default HorizontalSlider
