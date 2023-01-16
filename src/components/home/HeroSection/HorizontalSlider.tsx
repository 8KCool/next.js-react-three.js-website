import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation } from 'swiper'
import AOS from 'aos'
import 'aos/dist/aos.css'

const HorizontalSlider = () => {
  // for initialization of AOS
  useEffect(() => {
    AOS.init({ offset: 150 })
  })
  const slidesContent = [
    {
      id: 1,
      img: "./../../../assets/",
      headerText: 'The Urban Blockchain',
      mainText: `Trigan’s unique blockchain technology enables a fair,
                transparent, and decentralised new economy for the benefit of
                everyone, everywhere.`,
    },
    {
      id: 2,
      headerText: 'Urban Communities',
      mainText: `The smart city operating system for real-world communities,
        improving quality of life in towns and cities on Earth.`,
      buttons: [{ text: 'Lorem ipsum' }],
    },
    {
      id: 3,
      headerText: 'Digital Twinning',
      mainText: `A revolutionary local community-centric approach to medicine,
      workplace, education and social interaction.`,
      buttons: [{ text: 'Lorem ipsum' }],
    },
    {
      id: 4,
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
      headerText: 'Trigan',
      mainText: `Empowering you with the equal opportunity to succeed, regardless
      of your background.`,
      buttons: [{ text: 'Lorem ipsum' }],
    },
  ]

  return (
    <div className="relative px-4 pt-[50px] pb-[50px]">
      <Swiper
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        breakpoints={{
          // when window width is >= 640px
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 768px
          640: {
            slidesPerView: 2.5,
            spaceBetween: 60,
          },
        }}
        className="px-5"
      >
        {slidesContent.map((slide, index) => (
          <SwiperSlide className="" key={slide.id}>
            <div
              className=" horizontalCard flex-column relative  flex h-[200px] w-full max-w-[600px] items-left justify-center rounded-lg px-2 font-semibold text-white shadow-lg md2:px-10 md2:text-xl"
            >
              <div className="purple"></div>
              <h2 className="text-left">{slide.headerText}</h2>
              <p className="text-left">{slide.mainText}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default HorizontalSlider
