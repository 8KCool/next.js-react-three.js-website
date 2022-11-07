import React, { useState } from 'react'

const scrollingSlideShowElement = (props) => {
  const [active, setActive] = useState(false)

  return (
    <div
      className="w-[600px] px-[30px] py-[40px] text-slate-400/60"
      ref={props.innerRef}
    >
      <h2
        className={`${
          props.centered === props.index ? 'text-red-500' : ''
        } text-[24px] font-bold uppercase`}
      >
        {props.headerText}
      </h2>
      <p className=" my-[18px]">{props.mainText}</p>
      {props.buttons && (
        <div>
          {props.buttons.map((button) => (
            <button>{button.text}</button>
          ))}
        </div>
      )}
    </div>
  )
}

export default scrollingSlideShowElement
