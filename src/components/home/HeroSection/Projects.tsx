import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { IProject } from '../../../types/Project'

interface HeroSectionProps {
  children?: ReactNode
  project: IProject
}

export const HeroSection: React.FC<HeroSectionProps> = ({ project }) => {
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
        <source src="/videos/trigan nation loop hero.mp4" type="video/mp4" />
      </video>
      <div className="grid items-center justify-center grid-cols-1 text-center py-36 xl:py-48 2xl:py-20 2xl:pt-48 ">
        <div className="flex flex-col justify-center px-2 mx-auto text-black sm:px-5 2xl:w-1/2 2xl:py-6">
          <motion.h2
            initial={{ x: '-800px' }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-4xl headingStyle md:text-6xl lg:text-7xl 2xl:py-5">
              {project.name}
            </div>
            <div className="headingStyle whitespace-normal text-4xl md:mt-[6px] md:text-6xl lg:mt-[16px] lg:text-7xl 2xl:mt-[-12px]">
              {project.description}
            </div>
            <div className="mx-auto w-[90%] font-extralight sm:w-[80%] sm:px-14 md:text-2xl lg:w-[45%] 2xl:w-[70%] 2xl:px-0 2xl:text-3xl">
              <p className="py-4 paragraphStyle">{project.content}</p>
            </div>
          </motion.h2>
        </div>
      </div>
    </header>
  )
}
