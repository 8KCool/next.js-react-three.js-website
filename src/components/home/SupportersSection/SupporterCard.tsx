import React from 'react'
import Link from 'next/link'

const SupporterCard = (props: any) => {
  return (
    <a 
    target={'_blank'}
    href={props.link}>
      <div className="relative m-2 mx-auto flex h-[80px] w-[120px] cursor-pointer rounded-xl bg-white p-2 shadow-xl sm:h-[130px] sm:w-[200px] md2:mx-0 md2:h-[150px] md2:w-[250px] md2:p-4 bounce-out-on-hover">
        <img
          src={props.src}
          alt={props.alt}
          className="mx-auto h-auto w-full"
        />
      </div>
    </a>
  )
}

export default SupporterCard
