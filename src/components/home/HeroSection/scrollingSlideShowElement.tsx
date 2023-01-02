import React, { useState } from 'react'

const ScrollingSlideShowElement = (props: any) => {
  const [active, setActive] = useState(false)

  return (
    <div
      className={
        `mb-[400px] cursor-pointer text-center text-sm text-white
      `
        //  ${
        //   props.centered === props.index
        //     ? 'bg-[#202635]   border-2 text-white md:w-[700px]'
        //     : 'text-slate-400/60 md:w-[600px]'
        // }
      }
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
      id="slide-element"
      ref={props.innerRef}
    >
      <h1
        className={`${
          props.centered === props.index ? '' : ''
        } font-m_plus_rounded_1c font-bold uppercase md:text-[60px] md2:text-[2vw] md2:leading-[1.2] md2:tracking-wider`}
        style={{ fontSize: '60px', lineHeight: '3.5rem' }}
      >
        {props.headerText}
      </h1>
      <p className="my-[30px] leading-8" style={{ fontSize: '30px' }}>
        {props.mainText}
      </p>
      <button className="mt-3 mb-4 w-36 rounded-full border bg-transparent py-2 px-4  font-m_plus_rounded_1c font-bold text-white hover:bg-gray-400">
        Learn more
      </button>
      {/* {props.buttons && (
        <div className="flex gap-4">
          {props.buttons.map((button: { text: string }) => (
            <button
              key={button.text}
              className={`rounded-full bg-white py-2 px-5  ${
                props.centered === props.index
                  ? 'text-[#232156]'
                  : 'text-slate-400/60'
              }`}
            >
              {button.text}
            </button>
          ))}
        </div>
      )} */}
    </div>
  )
}

export default ScrollingSlideShowElement
