import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation } from 'swiper'
import AOS from 'aos'
import 'aos/dist/aos.css'
const SlideShow = () => {
  // for initialization of AOS
  useEffect(() => {
    AOS.init({ offset: 150 })
  })
  const slidesContent = [
    {
      key: 1,
      title:
        'Trigan has achieved a major advancement in blockchain technology, enabling us to address significant global challenges.',
      aos: 'fade-left',
    },
    {
      key: 2,
      title:
        "Trigan's innovative approach tackles poverty, inequality, and deprivation in urban communities.",
      aos: 'fade-up',
    },
    {
      key: 3,
      title:
        'Trigan also aims to improve basic living standards and provide advanced, connected solutions for education, work, and healthcare using AI and VR.',
      aos: 'fade-right',
    },
    {
      key: 4,
      title:
        "Trigan's cutting-edge solution will empower urban communities worldwide and lead to improved ways of living.",
      aos: 'fade-up',
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

          // 850: {
          //   slidesPerView: 3.3,
          // },
        }}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
        className="px-5"
        // centeredSlides={true}
      >
        {slidesContent.map((slide, index) => (
          <SwiperSlide className="" key={slide.key}>
            <div
              data-aos={slide.aos}
              className=" horizontalCard relative  flex h-[200px] w-full max-w-[600px] items-center justify-center rounded-lg px-2 font-semibold text-white shadow-lg md2:px-10 md2:text-xl"
            >
              <p className="text-center">slide.title</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

    // <div
    //   ref={container}
    //   className="scrollbar-hide relative mt-[1000px] flex h-auto w-full max-w-xl snap-x snap-mandatory gap-[200px] space-x-3 overflow-x-scroll bg-slate-300 py-20"
    // >
    //   {slidesContent.map((slide) => (
    //     <HorizontalSlideElement text={slide} />
    //   ))}
    // </div>
  )
}

export default SlideShow
