import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

const SlideShow = () => {
  const slidesContent = [
    'We have made a breakthrough in blockchain technology which enables us to tackle big global issues.',
    'Our solution addresses poverty, inequality and deprivation in real-world communities.',
    'We improve basic living standards then provide better connected solutions for education, work and healthcare using AI and VR.',
    'Our solution will empower urban communities everywhere and lead to new, better ways of living.',
  ]

  return (
    <div className="relative py-[200px] px-4">
      <Swiper
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
        className="px-2"
        // centeredSlides={true}
      >
        {slidesContent.map((slide, index) => (
          <SwiperSlide className="" key={slide}>
            <div className="relative  flex h-[200px] w-full max-w-[800px] items-center justify-center rounded-lg bg-white px-2 text-base font-semibold md2:px-10 md2:text-xl">
              <p className="text-center">{slide}</p>
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
