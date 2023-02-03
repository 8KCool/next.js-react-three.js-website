import React from 'react'

const SupporterCard = (props: any) => {
  return (
    <a target={'_blank'} href={props.link}>
      <div className="relative mx-auto flex w-[100px] cursor-pointer items-center justify-center rounded-xl object-contain shadow-xl sm:h-[130px] sm:w-[192px] md2:mx-0 md2:h-[100px] md2:w-[220px] md2:p-4">
        <img
          loading="lazy"
          src={props.src}
          alt={props.alt}
          className="mx-auto h-5/6 w-full"
        />
      </div>
    </a>
  )
}

export default SupporterCard
