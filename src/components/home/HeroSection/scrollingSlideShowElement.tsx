import React, { useState } from 'react'

const ScrollingSlideShowElement = (props: any) => {
  const [active, setActive] = useState(false)

  return (
    
    <div
      className={` cursor-pointer border-2 bg-[#202635] mx-4 rounded-full px-9 py-9 text-white text-sm transition-all md:px-[30px]  md:py-[40px] hover:bg-white hover:text-black hover:border-2 hover:border-black bounce-out-on-hover` 
      //  ${
      //   props.centered === props.index
      //     ? 'bg-[#202635]   border-2 text-white md:w-[700px]'
      //     : 'text-slate-400/60 md:w-[600px]'
      // }
      
    }
      ref={props.innerRef}
    >
      <h2
        className={`${
          props.centered === props.index ? '' : ''
        } font-bold uppercase md:text-[24px]`}
      >
        {props.headerText}
      </h2>
      <p className=" my-[18px]">{props.mainText}</p>
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
