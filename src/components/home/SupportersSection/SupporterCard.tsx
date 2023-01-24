import React from 'react'

const SupporterCard = (props: any) => {
  return (
    <a target={'_blank'} href={props.link}>
      <div
        style={
          {
            height: '110px',
            paddingTop: '0',
            paddingBottom: '0',
          } as React.CSSProperties
        }
        className="relative mx-auto flex w-[135px] cursor-pointer items-center justify-center rounded-xl shadow-xl sm:h-[130px] sm:w-[200px] md2:mx-0 md2:h-[150px] md2:w-[250px] md2:p-4 "
      >
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
