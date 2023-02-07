import React from 'react'

const SupporterCard = (props: any) => {
  return (
    <a target={'_blank'} href={props.link}>
      <div className="relative flex h-[100px] w-[220px] cursor-pointer items-center justify-center rounded-xl bg-white/[.4] object-contain p-4 shadow-xl  md2:mx-0 md2:h-[100px] md2:w-[220px] md2:p-4">
        <img
          loading="lazy"
          src={props.src}
          alt={props.alt}
          className="m-2 h-5/6 w-full"
        />
      </div>
    </a>
  )
}

export default SupporterCard
