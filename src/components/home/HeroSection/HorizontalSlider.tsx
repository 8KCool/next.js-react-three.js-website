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
      key: 1,
      title: 'This is for frist box.',
      aos: 'fade-right',
    },
    {
      key: 2,
      title: 'This is for second box',
      aos: 'fade-right',
    },
    {
      key: 3,
      title: 'This is for third box',
      aos: 'fade-right',
    },
    {
      key: 4,
      title: 'This is for fourth box',
      aos: 'fade-right',
    },
  ]

  return (
    <div className="relative px-4 pt-[200px] pb-[100px]">
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
          <SwiperSlide className="" key={slide.key}>
            <div
              data-aos={slide.aos}
              className=" horizontalCard relative  flex h-[200px] w-full max-w-[600px] items-center justify-center rounded-lg px-2 font-semibold text-white shadow-lg md2:px-10 md2:text-xl"
            >
              <p className="text-center">{slide.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default HorizontalSlider
