import React from 'react'

const SupporterCard = (props: any) => {
  return (
    <a
      target={'_blank'}
      href={props.link}>
      <div data-aos={props.aos} 
      style={{"height":"110px" , "padding-top":"0","padding-bottom":"0"}}
        className="relative mx-auto flex justify-center items-center w-[135px] cursor-pointer rounded-xl shadow-xl sm:h-[130px] sm:w-[200px] md2:mx-0 md2:h-[150px] md2:w-[250px] md2:p-4 ">
        <img 
          loading='lazy'
          src={props.src}
          alt={props.alt}
          className="mx-auto h-5/6 w-full"
        />
      </div>
    </a>
  )
}

export default SupporterCard
