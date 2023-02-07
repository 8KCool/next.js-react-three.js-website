import { useEffect, useRef, useState, Suspense } from 'react'
const Logo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
    id="Logo123"
    viewBox="0 0 1000 1000"
    className="w-[300px] md2:w-[500px]"
  >
    <g>
      <g>
        <g>
          <g>
            <g>
              <path
                className="st0"
                d="M535.57,593.55c-5.22,3.67-6.78,10.72-3.59,16.24l34.44,59.66c7.68,13.3,26.88,13.3,34.56,0l101.85-176.42
						c3.89-6.74-4.1-14.05-10.47-9.58L535.57,593.55z"
              />
            </g>
            <g>
              <path
                className="st0"
                d="M633.68,315.11l125.09,58.13c5.9,2.74,12.93,0.52,16.18-5.11l39.52-68.44c6.44-11.16-1.61-25.1-14.49-25.1
						H583.71h0c-8.81,0-11.46,11.98-3.47,15.69L633.68,315.11z"
              />
            </g>
            <g>
              <path
                className="st0"
                d="M471.61,428.91l-12.69-142.93c-0.57-6.45-5.97-11.39-12.45-11.39h-80c-12.46,0-20.24,13.48-14.01,24.27
						l108.62,188.13v0c4.39,7.6,16.04,3.92,15.27-4.82L471.61,428.91z"
              />
            </g>
          </g>
        </g>
        <g>
          <path
            className="st0"
            d="M213.01,878.89v-94.61h-20.17c-7.87,0-12.2-4.33-12.2-12.2v-1.4c0-7.87,4.33-12.2,12.2-12.2h69.07
				c7.87,0,12.2,4.33,12.2,12.2v1.4c0,7.87-4.33,12.2-12.2,12.2h-19.99v94.61c0,7.87-4.33,12.2-12.2,12.2h-4.51
				C217.34,891.09,213.01,886.76,213.01,878.89z"
          />
          <path
            className="st0"
            d="M408,891.09h-5.43c-6.83,0-10.87-3.11-14.27-8.9l-19.36-33.56c-2.02,0.09-4.1,0.14-6.25,0.14h-15.28v30.12
				c0,7.87-4.33,12.2-12.2,12.2h-4.76c-7.87,0-12.2-4.33-12.2-12.2V770.68c0-7.87,4.33-12.2,12.2-12.2h32.78
				c42.97,0,58,14.34,58,44.57c0,19.13-7.85,33.11-25.27,40.28l20.38,33.2C422.12,885.93,419.59,891.09,408,891.09z M392.09,804.99
				c0-16.44-9.17-22.12-29.58-22.12h-15.28v44.05h15.28C382.92,826.93,392.09,821.56,392.09,804.99z"
          />
          <path
            className="st0"
            d="M469.55,878.89V770.68c0-7.87,4.33-12.2,12.2-12.2h4.57c7.87,0,12.2,4.33,12.2,12.2v108.21
				c0,7.87-4.33,12.2-12.2,12.2h-4.57C473.88,891.09,469.55,886.76,469.55,878.89z"
          />
          <path
            className="st0"
            d="M546.79,824.42c0-40.48,25.52-67.56,63.01-67.56c23.63,0,40.94,7,50.93,22.68c4.72,7.4,1.63,12.82-6.9,14.84
				l-4.16,0.98c-6.58,1.56-10.87-0.61-15.01-4.77c-5.94-5.92-13.19-9.55-24.01-9.55c-20.96,0-34.77,17.23-34.77,43.68
				c0,26.82,13.38,43.43,34.64,43.43c18.22,0,30.19-10.39,31.41-30.38h-22.07c-7.38,0-11.53-4.03-11.53-11.22v-0.18
				c0-7.02,4.45-10.92,12.2-10.92h39.15c7.75,0,12.32,2.26,12.32,8.66v2.68c0,40.9-23.93,65.63-62.76,65.63
				C571.21,892.42,546.79,865.81,546.79,824.42z"
          />
          <path
            className="st0"
            d="M819.83,891.09h-5.06c-7.01,0-11.47-3.25-13.9-9.92l-4.77-13.11h-57.3l-4.7,13.12
				c-2.38,6.64-6.92,9.91-13.94,9.91h-4.88c-8.97,0-12.94-5.76-9.63-14.06l43.3-108.87c2.62-6.6,7.14-9.67,14.09-9.67h8.66
				c6.95,0,11.46,3.08,14.09,9.67L829.28,877C832.6,885.32,828.67,891.09,819.83,891.09z M767.37,790.01l-20.75,56.69h41.62
				L767.37,790.01z"
          />
          <path
            className="st0"
            d="M884.35,891.08c-7.87,0-12.2-4.33-12.2-12.2V770.67c0-7.87,4.33-12.2,12.2-12.2h6.53
				c6.65,0,10.95,2.38,14.7,8.17l51.88,79v-74.98c0-7.87,4.33-12.2,12.2-12.2h4.51c7.87,0,12.2,4.33,12.2,12.2v108.21
				c0,7.87-4.33,12.2-12.2,12.2h-6.28c-6.65,0-11.12-2.75-14.7-8.17l-52.07-79.31v75.28c0,7.87-4.33,12.2-12.2,12.2L884.35,891.08
				L884.35,891.08z"
          />
        </g>
      </g>
    </g>
  </svg>
)

const VideoHeader = () => {
  const index = useRef(0)
  const [currentItem, setCurrentItem] = useState(Logo)
  useEffect(() => {
    const timer = setInterval(() => {
      // console.log(index.current)
      switch (index.current) {
        case 0:
          setCurrentItem(Logo)
          break
        case 1:
          setCurrentItem(
            <h1
              id="header1"
              className={` text-center font-m_plus_rounded_1c text-[6vw] font-bold uppercase md2:text-[2vw] md2:leading-[1.2] md2:tracking-wider`}
            >
              <pre className="font-m_plus_rounded_1c text-[3.5vw] md2:text-[2rem]">
                A Better Life
              </pre>
              <span className="text-[5vw] font-bold md2:text-[4rem]">
                for Everyone.
              </span>
            </h1>
          )
          break
        case 2:
          setCurrentItem(
            <h1
              id="header2"
              className={`text-center  font-m_plus_rounded_1c text-[5vw] font-bold uppercase tracking-widest md2:text-[2vw] md2:leading-[1.2] md2:tracking-wider`}
            >
              <pre className="font-m_plus_rounded_1c text-[3.5vw] md2:text-[2rem]">
                Empowering Communities
              </pre>
              <span className="text-[5vw] font-bold md2:text-[4rem]">
                Everywhere.
              </span>
            </h1>
          )
          break
        case 3:
          setCurrentItem(
            <h1
              id="header3"
              className={`text-center  font-m_plus_rounded_1c text-[5vw] font-bold uppercase tracking-widest md2:text-[2vw] md2:leading-[1.2] md2:tracking-wider`}
            >
              <pre className="font-m_plus_rounded_1c text-[3.5vw] md2:text-[2rem]">
                Driving Social Change Through
              </pre>
              <span className="text-[5vw] font-bold md2:text-[4rem]">
                Technological Evolution.
              </span>
            </h1>
          )
          break
      }
      if (index.current === 3) {
        index.current = 0
      } else {
        index.current = Number(index.current) + 1
      }
    }, 5000)
    return () => clearInterval(timer)
  }, [])
  return (
    
    <header className={`fixed top-0 left-0 h-screen w-screen bg-black`}>
      <div
        className={`absolute top-0 left-0 flex h-screen w-screen scale-[var(--headerScale)] items-center justify-center text-white opacity-[var(--headerOpacity)]`}
        style={{
          transitionTimingFunction: 'ease',
        }}
      >
        {currentItem}
      </div>
    </header>
  )
}

export default VideoHeader
