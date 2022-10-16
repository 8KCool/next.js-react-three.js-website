import { motion } from 'framer-motion'
import { ReactNode } from 'react'

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
    <header className="relative grid items-center bg-slate-300 bg-opacity-70">
      <video
        className="absolute object-cover w-auto h-full min-w-full -z-10"
        width="618"
        height="347"
        autoPlay
        loop
        muted
        preload="auto"
      >
        <source src="/videos/bg-video.mp4" type="video/mp4" />
      </video>
      <div className="grid items-center justify-center grid-cols-1 text-center py-36 xl:py-48 2xl:py-20 2xl:pt-48 ">
        <div className="flex flex-col justify-center px-2 mx-auto text-black sm:px-5 2xl:w-1/2 2xl:py-6">
          <motion.h2
            initial={{ x: '-800px' }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3 }}
            className=" text-sans"
          >
            <div className="text-4xl headingStyle md:text-6xl lg:text-7xl 2xl:py-5">
              Real World Utopia.
            </div>
            <div className="headingStyle whitespace-normal text-4xl md:mt-[6px] md:text-6xl lg:mt-[16px] lg:text-7xl 2xl:mt-[-12px]">
              Beyond Metaverse
            </div>
            <div className="mx-auto w-[90%] font-extralight sm:w-[80%] sm:px-14 md:text-2xl lg:w-[45%] 2xl:w-[70%] 2xl:px-0 2xl:text-3xl">
              <p className="py-4 paragraphStyle">
                Trigan is a revolutionary start-up based in Scotland with a
                global team and one shared vision;
              </p>
              <p className="paragraphStyle">
                A belief in the unrealised potential of blockchain technology in
                supporting development, growth and empowerment.
              </p>
            </div>
            <p className="pt-4 text-2xl font-extrabold md:text-md 2xl:pt-6">
              Opportunity
            </p>
            <p className="text-sm md:text-md paragraphStyle xl:text-2xl">
              Pre-sale now launched.
            </p>
          </motion.h2>
          {/* Button Starts */}
          <div className="justify-start mt-4 text-white">
            {BUTTONS.map((button, i) => {
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
            })}
          </div>
          {/* Button Ends */}
        </div>

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
      </div>
    </header>
  )
}
