import { ReactNode } from 'react'
import Image from 'next/image'

import { motion } from 'framer-motion'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// import required modules
import { Autoplay, Pagination } from 'swiper'

import ScrollingSlideShow from './scrollingSlideShow'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import VideoHeader from './VideoHeader'
import HorizontalSlideShow from './HorizontalSlideShow'

interface HeroSectionProps {
  children?: ReactNode
}

const BUTTONS = [
  {
    title: 'Buy Now',
    link: '/buy',
  },
]

export const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    // bg-slate-300/70
    <>
      {/* <header className="relative grid bg-white pb-20">
        <video
          // className="fixed -z-10 h-full w-auto min-w-full object-cover"
          className="relative z-10 h-full w-auto min-w-full object-cover"
          width="618"
          height="347"
          autoPlay
          loop
          playsInline
          muted
          preload="auto"
          id="myVid"
        >
          <source src="/videos/bg-video-earth.mp4" type="video/mp4" />
        </video> */}

      {/* <div className="grid grid-cols-1 items-center justify-center py-36 text-center xl:py-48 2xl:py-20 2xl:pt-48 "> */}
      {/* <div className="mx-auto flex flex-col justify-center px-2 text-black sm:px-5 2xl:w-1/2 2xl:py-6"> */}
      {/* <motion.h2
            initial={{ x: '-800px' }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3 }}
            className="text-sans"
          >
            <div className="headingStyle text-4xl md:text-6xl lg:text-7xl 2xl:py-5">
              Real World Utopia.
            </div>
            <div className="headingStyle whitespace-normal text-4xl md:mt-[6px] md:text-6xl lg:mt-[16px] lg:text-7xl 2xl:mt-[-12px]">
              Beyond Metaverse
            </div>
            <div className="mx-auto w-[90%] font-extralight sm:w-[80%] sm:px-14 md:text-2xl lg:w-[45%] 2xl:w-[70%] 2xl:px-0 2xl:text-3xl">
              <p className="paragraphStyle py-4">
                Trigan is a revolutionary start-up based in Scotland with a
                global team and one shared vision;
              </p>
              <p className="paragraphStyle">
                A belief in the unrealised potential of blockchain technology in
                supporting development, growth and empowerment.
              </p>
            </div>
            <p className="md:text-md pt-4 text-2xl font-extrabold 2xl:pt-6">
              Opportunity
            </p>
            <p className="md:text-md paragraphStyle text-sm xl:text-2xl">
              Pre-sale now launched.
            </p>
          </motion.h2> */}
      {/* Button Starts */}
      {/* <div className="mt-4 justify-start text-white"> */}
      {/* {BUTTONS.map((button, i) => {
              return (
                <motion.a
                  initial={{ x: '-800px' }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.7 * (i + 1) }}
                  key={button.title}
                  target="_blank"
                  href={button.link}
                  className={`md:text-md w-full cursor-pointer whitespace-nowrap rounded  px-6 py-1 text-center text-sm uppercase transition duration-500 hover:bg-special md:py-2 lg:w-1/6 ${
                    i === 0 ? 'bg-secondary' : 'bg-secondary'
                  }`}
                  rel="noreferrer"
                >
                  {button.title}
                </motion.a>
              )
            })} */}
      {/* </div> */}
      {/* Button Ends */}
      {/* </div> */}

      {/* Video Starts */}
      {/* <div className="relative p-5 opacity-100 md:p-10 lg:p-20"> */}
      {/* <AnimationBlob /> */}
      {/* <div className="flex justify-center aspect-w-16 aspect-h-9">
            <iframe
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className="object-cover"
              src="https://www.youtube.com/embed/YYAZ1mnz3bM?mode=opaque&amp;rel=0&amp;autohide=1&amp;showinfo=0&amp;wmode=transparent"
            />
          </div> */}
      {/* </div> */}
      {/* Video Ends */}
      {/* </div> */}

      {/* <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className="mx-auto w-screen px-6 py-36 "
        // className="mx-auto max-w-6xl px-6 py-36 "
      >
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          slidesPerView={2}
          centeredSlides={true}
          className="heroSwiper"
        >
          <SwiperSlide className="w-full text-center">
            <div className="font-sarabun lg:text-center">
              <h2 className="mb-2 text-xl font-semibold text-black md:px-28 md:text-5xl">
                Driving social change through technological evolution
              </h2>

              <p className="text-lg font-medium md:py-2 md:text-xl xl:px-36">
                Trigan’s unique blockchain technology enables a fair,
                transparent, and decentralised new economy for the benefit of
                everyone, everywhere.
              </p>

              <div className="">
                <Image src={''} className="" alt="Image Goes here" />
              </div>
            </div>
            <button className="mb-6 -mt-2 rounded-full bg-primary px-8 py-4 font-roboto font-medium text-slate-100">
              The first urban blockchain
            </button>
          </SwiperSlide>

          <SwiperSlide className="w-full text-center">
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="font-sarabun"
            >
              <h2 className="mb-2 text-xl font-semibold text-black md:text-5xl">
                Communities
              </h2>

              <p className="text-lg font-medium md:py-2 md:text-xl xl:px-36">
                The smart city operating system for real-world communities,
                improving quality of life in towns and cities on Earth.
              </p>

              <div className="">
                <Image src={''} className="" alt="Image Goes here" />
              </div>
            </motion.div>
            <button className="rounded-full bg-primary px-8 py-4 font-roboto font-medium text-slate-100">
              Lorem ipsum
            </button>
          </SwiperSlide>

          <SwiperSlide className="w-full text-center">
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="font-sarabun"
            >
              <h2 className="mb-2 text-xl font-semibold text-black md:text-5xl">
                solving social issues
              </h2>

              <p className="text-lg font-medium md:py-2 md:text-xl xl:px-36">
                Positive, fair solutions to poverty, corruption, inequality and
                deprivation using science and AI.
              </p>

              <div className="">
                <Image src={''} className="" alt="Image Goes here" />
              </div>
            </motion.div>
            <button className="rounded-full bg-primary px-8 py-4 font-roboto font-medium text-slate-100">
              Lorem ipsum
            </button>
          </SwiperSlide>

          <SwiperSlide className="w-full text-center">
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="font-sarabun"
            >
              <h2 className="mb-2 text-xl font-semibold text-black md:text-5xl">
                Metaverse
              </h2>

              <p className="text-lg font-medium md:py-2 md:text-xl xl:px-36">
                A revolutionary local community-centric approach to medicine,
                workplace, education and social interaction.
              </p>
              <div className="">
                <Image src={''} className="" alt="Image Goes here" />
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2">
                <button className="rounded-full bg-primary px-8 py-4 font-roboto font-medium text-slate-100">
                  Healthcare
                </button>

                <button className="rounded-full bg-primary px-8 py-4 font-roboto font-medium text-slate-100">
                  Workplace
                </button>

                <button className="rounded-full bg-primary px-8 py-4 font-roboto font-medium text-slate-100">
                  Education
                </button>

                <button className="rounded-full bg-primary px-8 py-4 font-roboto font-medium text-slate-100">
                  Social
                </button>
              </div>
            </motion.div>
          </SwiperSlide>

          <SwiperSlide className="w-full text-center">
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="font-sarabun"
            >
              <h2 className="mb-2 text-xl font-semibold text-black md:text-5xl">
                Trigan
              </h2>

              <p className="text-lg font-medium md:py-2 md:text-xl xl:px-36">
                Empowering you with the equal opportunity to succeed, regardless
                of your background.
              </p>

              <div className="">
                <Image src={''} className="" alt="Image Goes here" />
              </div>
            </motion.div>
            <button className="rounded-full bg-primary px-8 py-4 font-roboto font-medium text-slate-100">
              Lorem ipsum
            </button>
          </SwiperSlide>
        </Swiper>
      </motion.div> */}
      {/* </header> */}
      <div className="relative ">
        <VideoHeader />
        <ScrollingSlideShow />
        <HorizontalSlideShow />
      </div>
    </>
  )
}
