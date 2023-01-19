import React, {useEffect,createRef,useRef,useState,} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { FadeInWhenVisible } from '../../shared/FadeInWhenVisible'
import HorizontalSlider from './HorizontalSlider'

const ScrollingSlideShow = () => {
  useEffect(() => {
    AOS.init({ offset: 150 })
  })
  return (
    <div
      className="relative mt-[1600px] flex w-full flex-col items-center gap-20 py-40 "
      id="cards"
    >
      <section id="about" className="w-full px-5">
        <FadeInWhenVisible>
          <div>
            {/* Video Starts */}
              <h6 className='intro_h' style={{"font-size":"40px","padding":"25px 160px"}as React.CSSProperties}>An Introduction <span style={{"color":"#A855F7"}}>to Trigan</span></h6>
            <div className="aspect-h-9 aspect-w-16  flex w-full justify-center opacity-100 first-line:relative ">
              {/* <AnimationBlob /> */}
              <div className="mx-auto h-3/4 w-3/4 shadow-xl shadow-black">
                <iframe
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  className="h-full w-full object-cover"
                  src="https://www.youtube.com/embed/VY-QKe19p0Y?mode=opaque&amp;rel=0&amp;autohide=1&amp;showinfo=0&amp;wmode=transparent"
                />
              </div>
            </div>
            {/* /* Video Ends */}
            <div className="mx-auto mb-30 max-w-6xl py-5 text-center font-extralight text-slate-100">
              <h2 className="headingStyle relative mt-10 mb-10 text-xl text-white md:text-5xl">
                Dream of a <span style={{"color":"#A855F7"} as React.CSSProperties}>better future.</span>
              </h2>
              <HorizontalSlider />
            </div>
          </div>
        </FadeInWhenVisible>
      </section>
    </div>
  )
}

export default ScrollingSlideShow
