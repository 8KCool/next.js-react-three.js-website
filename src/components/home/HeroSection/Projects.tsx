import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { IProject } from '../../../types/Project'

interface HeroSectionProps {
  children?: ReactNode
  project: IProject
}

export const HeroSection: React.FC<HeroSectionProps> = ({ project }) => {
  return (
    <header className="relative grid items-center bg-primary bg-opacity-70">
      <video
        className="absolute -z-10 h-full w-auto min-w-full object-cover"
        width="618"
        height="347"
        autoPlay
        loop
        muted
        preload="auto"
      >
        <source src="/videos/trigan nation loop hero.mp4" type="video/mp4" />
      </video>
      <div className="grid grid-cols-1 items-center justify-center py-36 text-center xl:py-48 2xl:py-20 2xl:pt-48 ">
        <div className="mx-auto flex flex-col justify-center px-2 text-white sm:px-5 2xl:w-1/2 2xl:py-6">
          <motion.h2
            initial={{ x: '-800px' }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3 }}
            className=" text-sans "
          >
            <div className="text-4xl font-extralight md:text-6xl lg:text-7xl 2xl:py-5">
              {project.name}
            </div>
            <div className="whitespace-normal text-4xl md:mt-[-12px] md:text-6xl lg:mt-[-16px] lg:text-7xl 2xl:mt-[-36px]">
              {project.description}
            </div>
            <div className="mx-auto w-[90%] font-extralight sm:w-[80%] sm:px-14 md:text-2xl lg:w-[45%] 2xl:w-[70%] 2xl:px-0 2xl:text-3xl">
              <p className="py-4">{project.content}</p>
            </div>
          </motion.h2>
        </div>
      </div>
    </header>
  )
}
