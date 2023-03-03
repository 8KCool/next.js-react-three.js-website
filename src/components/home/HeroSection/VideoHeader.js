import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
// import Model from '../../../../public/EarthTexture/Draco.jsx'
import { SignUpModal } from './SignUpModal'
import { SupportersSection } from './../SupportersSection/index'
import useEarlyAccessModal from '../../../hooks/useEarlyAccessModal'
import { motion, MotionConfig } from 'framer-motion'
// import { ThemeProvider } from 'next-themes'
// import MoonModel from '../../../../public/MoonTexture/Moon'
import Combined from '../../../../public/assets/CombinedPlanets.jsx'
import { useTheme } from 'next-themes'


const Logo = () => (

  <motion.div
    transition={{ delay: 5, duration: 5, ease: 'easeInOut' }}
    exit={{ opacity: 0 , transition: { duration: 5, delay: 5 } }}
    className="m-auto"
    >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="white"
      id="Logo123"
      viewBox="0 0 1000 1000"
      style={{
      enableBackground: 'new 0 0 1000 1000',
      // width: '500px',
    }}
      className="m-auto w-[300px] md2:w-[500px]"
    >
      <path d="M457.72 500.43c-5.13 3.6-6.66 10.53-3.53 15.96l33.85 58.63c7.55 13.07 26.42 13.07 33.96 0l100.1-173.37c3.82-6.62-4.03-13.81-10.29-9.42l-154.09 108.2zM554.14 226.8l122.93 57.13c5.8 2.7 12.7.52 15.9-5.03l38.83-67.26c6.33-10.96-1.58-24.67-14.24-24.67H505.03c-8.66 0-11.26 11.77-3.41 15.42l52.52 24.41zM394.87 338.63 382.4 198.17c-.56-6.34-5.87-11.19-12.23-11.19h-78.62c-12.24 0-19.89 13.25-13.77 23.85L384.52 395.7c4.31 7.47 15.76 3.85 15-4.74l-4.65-52.33z" />
      <g>
        <path d="M187.1 651.77H86.92c-4.65 0-8.43 3.78-8.43 8.65 0 4.65 3.78 8.43 8.43 8.43l40.91-.06v122.69c0 4.65 3.78 8.43 8.43 8.43h1.79c4.65 0 8.43-3.78 8.43-8.43l-.06-122.63h40.67c4.65 0 8.43-3.78 8.43-8.65.02-4.64-3.76-8.43-8.42-8.43zM410.74 651.77h-1.79c-4.65 0-8.43 3.78-8.43 8.43v131.27c0 4.65 3.78 8.43 8.43 8.43h1.79c4.65 0 8.43-3.78 8.43-8.43V660.21c.01-4.65-3.77-8.44-8.43-8.44zM277.4 735.7l47.33 59.75c1.09 1.65 2.39 2.83 3.81 3.5 1.33.64 2.89.97 4.66.97 3.27 0 6.18-1.83 7.6-4.77a8.349 8.349 0 0 0-1-8.91l-41.49-52.14c3.36-.8 6.53-1.84 9.48-3.11 5.35-2.3 9.99-5.32 13.8-8.99 3.86-3.71 6.85-8.09 8.92-13.02 2.05-4.91 3.09-10.37 3.09-16.24 0-13.36-4.59-23.7-13.63-30.74-8.72-6.78-21.74-10.22-38.68-10.22h-31.54c-4.65 0-8.43 3.78-8.43 8.43v131.27c0 4.65 3.78 8.43 8.43 8.43h1.79c4.65 0 8.43-3.78 8.43-8.43l-.06-123.22h21.37c11.45 0 20.14 2.14 25.84 6.37 5.39 3.99 8 10.1 8 18.7 0 4.23-.77 8.05-2.28 11.36-1.49 3.26-3.7 6.1-6.57 8.44-2.94 2.4-6.63 4.28-10.98 5.59-3.19.96-6.72 1.59-10.55 1.87l-.2.02c-4.77 0-9.37 3.68-9.37 8.2v1.74c.02 1.95.93 3.6 2.23 5.15zM592.34 728.06h-30.12c-4.65 0-8.43 3.78-8.43 8.43v1.34c0 1.75.74 3.41 2.08 4.67 1.28 1.2 2.92 1.84 4.74 1.84l22.5-.06.04 30.91c-2.28 1.26-4.52 2.4-6.73 3.45a61.541 61.541 0 0 1-8.7 3.32c-2.96.89-6.14 1.59-9.47 2.09-3.28.5-6.94.75-10.87.75-8.91 0-17-1.37-24.04-4.06-6.95-2.66-12.93-6.54-17.76-11.53-4.85-5-8.61-11.19-11.19-18.41-2.62-7.32-3.95-15.74-3.95-25.02 0-9.15 1.33-17.46 3.95-24.72 2.57-7.16 6.28-13.3 11.01-18.24 4.71-4.92 10.51-8.77 17.24-11.42 6.8-2.69 14.57-4.05 23.07-4.05 6.45 0 11.94.58 16.34 1.74 4.48 1.17 8.25 2.5 11.2 3.95 2.96 1.45 5.25 2.81 6.84 4.07 2.22 1.74 3.9 2.81 5.08 3.27 3.81 1.77 7.58.68 9.52-2.65l.78-1.23c2.33-3.66 1.55-8.43-1.81-11.09a78.317 78.317 0 0 0-7.23-5.08c-3.58-2.21-7.5-4.1-11.64-5.61-4.12-1.5-8.62-2.65-13.37-3.41-4.72-.76-9.91-1.14-15.42-1.14-11.27 0-21.59 1.81-30.67 5.38-9.15 3.6-17.07 8.78-23.54 15.39-6.48 6.62-11.51 14.7-14.96 23.99-3.42 9.22-5.15 19.6-5.15 30.84 0 11.26 1.77 21.66 5.26 30.91 3.52 9.33 8.65 17.43 15.28 24.06 6.62 6.61 14.7 11.78 24.03 15.37 9.26 3.56 19.8 5.37 31.33 5.37 10.27 0 19.69-1.4 27.99-4.17a89.023 89.023 0 0 0 21.48-10.58c2.33-1.56 3.72-4.19 3.72-7.02V736.5c0-4.65-3.78-8.44-8.43-8.44zM751.17 794.64c.6 1.43 1.46 2.62 2.59 3.56 1.35 1.13 3.08 1.72 4.99 1.72h1.55c2.82 0 5.44-1.4 7-3.74a8.397 8.397 0 0 0 .8-7.89l-53.72-131.27a8.42 8.42 0 0 0-7.81-5.25h-4.35c-3.43 0-6.5 2.06-7.81 5.24L640.7 788.28a8.4 8.4 0 0 0 .8 7.89 8.425 8.425 0 0 0 7 3.74h1.46c1.89 0 3.62-.6 5.02-1.72 1.27-1.01 2.19-2.26 2.67-3.6l46.76-115.8 46.76 115.85zM913.39 651.77c-4.65 0-8.43 3.78-8.43 8.43v105.43L822.4 655.35c-1.02-1.37-2.08-2.3-3.23-2.84-1.07-.5-2.35-.74-3.91-.74h-.85c-4.65 0-8.43 3.78-8.43 8.43v131.27c0 4.65 3.78 8.43 8.43 8.43h.51c4.65 0 8.43-3.78 8.43-8.43V685.65l82.72 110.53c.91 1.25 1.94 2.19 3.1 2.8 1.18.61 2.55.92 4.09.92h.55c4.65 0 8.43-3.78 8.43-8.43V660.21c0-4.65-3.78-8.44-8.85-8.44z" />
      </g>
    </svg>
  </motion.div>
  
)
const VideoHeader = () => {
  const index = useRef(0)
  const [playAnimation, setPlayAnimation] = useState(false)
  const [currentItem, setCurrentItem] = useState(Logo)
  const { modal, setModal } = useEarlyAccessModal()
  const [bgDisplay, setBgDisplay] = useState(true)
  const [renderCompanyCards, setRenderCompanyCards] = useState(false)

  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme

  useEffect(() => {
    window.addEventListener('scroll', () => {
      var factor = Math.max(0, (2000 - window.scrollY) / 2000)
      if (window.scrollY < 1300) factor = 1
      document.documentElement.style.setProperty('--headerOpacity', factor)
      document.documentElement.style.setProperty('--headerScale', factor)
      if (window.scrollY > window.screen.height * 1.5) setBgDisplay(false)
      else setBgDisplay(true)
    })
    const timer = setInterval(() => {
      switch (index.current) {
        case 0:
          setCurrentItem(
            <>
            <div className="flex flex-col align-center justify-end  w-full h-[500px] m-auto max-[500px]:w-[300px]">
              <div className="flex justify-center h-[150px]">
                <h1
                  id="header1"
                  className={`flex-wrap text-center font-m_plus_rounded_1c font-semibold uppercase md:font-bold`}
                >
                  <pre className="mt-[25px] text-[25px] font-bold font-m_plus_rounded_1c dark:text-purple-500">
                    A Better Life
                  </pre>
                  <span className="text-[35px] font-bold font-m_plus_rounded_1c dark:text-purple-500">
                    for Everyone.
                  </span>
                </h1>
              </div>
              <div className="align-items text-center">
                <button className="rounded-full border bg-transparent py-2 px-4  font-m_plus_rounded_1c font-bold text-white hover:bg-gray-400 dark:text-purple-500 dark:hover:text-black">
                  <a href="/project">Learn More</a>
                </button>
              </div>
            </div>
          </>
          )
          break

          case 1:
          setCurrentItem(
            <>
              <div className="flex flex-col align-center justify-end  w-full h-[500px] m-auto max-[500px]:w-[300px]">
                <div className="flex justify-center h-[150px]">
                  <h1
                    id="header1"
                    className={`text-center font-m_plus_rounded_1c font-semibold uppercase md:font-bold`}
                  >
                    <pre className="mt-[25px] text-[25px] font-bold font-m_plus_rounded_1c dark:text-purple-500  max-[400px]:text-[22px]">
                      Empowering Communities
                    </pre>
                    <span className="text-[35px] font-bold font-m_plus_rounded_1c dark:text-purple-500">
                      Everywhere.
                    </span>
                  </h1>
                </div>
                <div className="align-items text-center">
                  <button className="rounded-full border bg-transparent py-2 px-4  font-m_plus_rounded_1c font-bold text-white hover:bg-gray-400 dark:text-purple-500 dark:hover:text-black">
                    <a href="/project">Learn More</a>
                  </button>
                </div>
              </div>
            </>

          )
          break
          case 2:
          setCurrentItem(
            <>
              <div className="flex flex-col  align-center justify-end  w-full h-[500px] m-auto max-[500px]:w-[300px]">
                <div className="flex justify-center h-[150px]">
                  <h1
                    id="header1"
                    className={`text-center font-m_plus_rounded_1c font-semibold uppercase md:font-bold`}
                  >
                    <pre className="mt-[30px] text-[22px] font-bold font-m_plus_rounded_1c dark:text-purple-500 max-[400px]:text-[18px]">
                      Driving Social Change Through
                    </pre>
                    <span className="text-[27px] font-bold font-m_plus_rounded_1c dark:text-purple-500">
                      Technological Evolution.
                    </span>
                  </h1>
                </div>
                <div className="align-items text-center">
                  <button className="rounded-full border bg-transparent py-2 px-4  font-m_plus_rounded_1c font-bold text-white hover:bg-gray-400 dark:text-purple-500 dark:hover:text-black">
                    <a href="/project">Learn More</a>
                  </button>
                </div>
              </div>
            </>
            )
            break
      }
      if (index.current === 2) {
        index.current = 0
      } else {
        index.current = Number(index.current) + 1
      }
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    delayRenderCompanyCards()

    const onPageLoad = () => {
      setPlayAnimation(true)
    }
    if (document.readyState === 'complete') {
      onPageLoad()
    } else {
      window.addEventListener('load', onPageLoad)
      return () => window.removeEventListener('load', onPageLoad)
    }
  }, [])

  function delayRenderCompanyCards() {
    setTimeout(() => {
      setRenderCompanyCards(true)
    }, 3000)
  }

  return (
    <>
    <header className={`fixed top-0 left-0 h-screen w-screen bg-black dark:bg-white`}>
      {/* Moon and Earth combined component */}
      {/* if it's in dark mode it shouldn't render the animation of the planet and the moon, if it's in light mode then it should render the animation */}
      { currentTheme === "dark" 
        ?  null 
        : 
          (
            <Canvas>
              <ambientLight intensity={0.01} color="#ffffff" />

              <directionalLight
                position={[-3, 2, 0]}
                intensity={0.55}
                color="purple"
              />
              <ambientLight intensity={0.251} color="purple" />

              <Combined />
              <Stars
                radius={300}
                depth={60}
                count={1000}
                factor={7}
                saturation={0}
              />
              <directionalLight args={['#c8d5e3', 5]} position={[-10, 5, -1]} />
            </Canvas> 
          ) 
      }
     
      <div
        className={`absolute top-0 left-0 flex h-screen w-screen m-auto scale-[var(--headerScale)] flex-col text-white opacity-[var(--headerOpacity)]`}
        style={{
          transitionTimingFunction: 'ease',
          justifyContent: 'space-between',
          margin: 'auto',
        }}
      >

        {currentItem}
        {renderCompanyCards ? (<SupportersSection />) : null}

      </div>
      <div>
        <SignUpModal modal={modal} setModal={setModal} />
      </div>

    </header>
    </>
  )
}

export default VideoHeader