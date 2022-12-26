import React, { useState } from 'react'

const ScrollingSlideShowElement = (props: any) => {
  const [active, setActive] = useState(false)

  return (
    
    <div
      className={`text-center cursor-pointer mb-[300px] text-white text-sm
      ` 
      //  ${
      //   props.centered === props.index
      //     ? 'bg-[#202635]   border-2 text-white md:w-[700px]'
      //     : 'text-slate-400/60 md:w-[600px]'
      // }
      
    }
    data-aos="fade-up"
    data-aos-anchor-placement="top-center"
    id='slide-element'
      ref={props.innerRef}
    >
      <h1
        className={`${
          props.centered === props.index ? '' : ''
        }  font-m_plus_rounded_1c text-[6vw] font-bold uppercase md2:text-[2vw] md2:leading-[1.2] md2:tracking-wider`}
      >
        {props.headerText}
      </h1>
      <p className="text-lg my-[18px]">{props.mainText}</p>
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
