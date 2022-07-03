import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { AnimationBlob } from './../../shared/AnimationBlob'

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
    <header className="h-screen bg-primary bg-opacity-70">
      <video
        className="absolute -z-10 h-screen w-auto min-w-full object-fill opacity-70"
        width="618"
        height="347"
        autoPlay
        loop
        muted
        preload="auto"
      >
        <source src="/videos/trigan nation loop hero.mp4" type="video/mp4" />
      </video>
      <div className="grid grid-cols-1 items-center justify-center py-20 text-center ">
        <div className="flex h-[400px] flex-col justify-center space-y-8 px-2 sm:space-y-5 sm:px-5 md:space-y-10 md:px-10">
          <motion.h2
            initial={{ x: '-800px' }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3 }}
            className=" text-sans text-2xl font-extralight text-white lg:text-5xl xl:text-6xl"
          >
            <span>Real World Utopia.</span>
            <span className="block whitespace-normal font-bold">
              Beyond Metaverse
            </span>
            <p className="py-4 text-xl font-extralight">
              Trigan is a revolutionary start-up based in Scotland with a global
              team and one shared vision;
            </p>
            <p className="text-xl">
              A belief in the unrealised potential of blockchain technology in
              supporting development, growth and empowerment.
            </p>
            <p className="py-4 text-lg font-extrabold">Opportunity</p>
            <p className="py-3 text-lg">Pre-sale now launched.</p>
          </motion.h2>
          {/* Button Starts */}
          <div className="justify-start text-white">
            {BUTTONS.map((button, i) => {
              return (
                <motion.a
                  initial={{ x: '-800px' }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.7 * (i + 1) }}
                  key={button.title}
                  target="_blank"
                  href={button.link}
                  className={`inline-block w-full cursor-pointer whitespace-nowrap rounded-xl px-2 py-1 text-center font-semibold transition duration-500 hover:bg-special md:px-4 md:py-2 lg:w-1/6 ${
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
        {/* <div className="aspect-w-16 aspect-h-9 flex justify-center">
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
