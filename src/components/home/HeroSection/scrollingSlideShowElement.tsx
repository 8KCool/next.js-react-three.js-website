import React, { useState } from 'react'

const scrollingSlideShowElement = (props) => {
  const [active, setActive] = useState(false)

  return (
    <div
      className={` mx-4 rounded-[25px] px-[20px] py-[25px] text-sm transition-all md:px-[30px]  md:py-[40px] ${
        props.centered === props.index
          ? 'bg-[#232156] text-white md:w-[700px]'
          : 'text-slate-400/60 md:w-[600px]'
      }`}
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
      {props.buttons && (
        <div className="flex gap-4">
          {props.buttons.map((button) => (
            <button className="rounded-xl bg-white px-2 py-2 text-[#232156]">
              {button.text}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default scrollingSlideShowElement
