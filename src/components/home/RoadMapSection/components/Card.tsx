import React from 'react'

interface CardProps {
  date?: string
  name?: string
  imageUrl?: string
  rotate?: boolean
  index: number
}


const getBackgroundInfo = (key=0) =>{
   
  const backgroundPositionX = key % 2 === 0 ? 'left' : 'right'
  const backgroundPositionY = 0 -148*key
 
  
  return {
    backgroundImage:'url(/images/purple-bg.jpg)',
    height:"150px", //  on all devices equal height 
    backgroundSize:'100vw auto',
    backgroundPositionX,
    backgroundPositionY
  }
}
const Card = ({ date, rotate, imageUrl, name, index }: CardProps) => {

  return (
    <div className=" mb-5 before:table before:content-[''] after:clear-both after:table after:content-['']"
    
    >
      <a href="">
        <div
        style={getBackgroundInfo(index)}
          className={` ${
            rotate === true
              ? ' float-right ml-[2%] before:-left-[1px] before:-skew-y-[45deg] after:-left-[1px] after:skew-y-[45deg]'
              : ' float-left mr-[2%] before:-right-[1px] before:skew-y-[45deg] after:-right-[1px] after:-skew-y-[45deg]'
          } post group relative w-[48%] overflow-hidden 
          bg-[rgba(84,84,84,0.6)] py-[50px] text-center text-5xl uppercase
           text-white transition-all  duration-[0.5s]
           before:absolute before:bottom-[54%]  before:h-[55%] before:origin-[100%,0] 
           before:bg-[#f2f2f2] before:pl-[3%]  before:content-[''] after:absolute 
           after:top-[54%] after:h-[55%] after:origin-[100%,0]
            after:bg-[#f2f2f2] after:pl-[3%] after:content-[''] group-hover:!text-black`}
        >
          <i
            style={{ backgroundImage: `url('${imageUrl}')` }}
            className={`absolute top-0 left-0 -z-[1] h-full w-full transform bg-cover bg-center bg-no-repeat transition-all content-[''] group-hover:scale-[1.1]`}
          ></i>
          {name}
        </div>
      </a>
      <div
        className={`${
          rotate === true
            ? 'before:-right-[10px] after:right-0'
            : 'before:-left-[10px] after:left-0'
        }  relative float-left w-2/4 text-center before:absolute before:top-[63px]  
        before:z-10 before:h-5 before:w-5 before:rounded-full before:border-4 
         before:border-solid before:border-[#7d7d7d] 
        before:bg-[#f2f2f2] before:shadow-[0_0_0_5px_rgba(250,250,250,0.9)]
         before:content-[''] after:absolute after:top-[73px] 
         after:-z-[1px] after:h-[3px] after:w-2/4 after:bg-[#BBFF33] after:content-['']`}
      >
        <div className={` subHeadStyle  ${rotate&&"mr-[79px]"} ${!rotate&&"ml-[79px]"} 
        bg-transparent relative z-50 mt-[50px] inline-block border-2 border-solid
         border-[#7d7d7d] py-[10px] px-[30px] `}>
          {date}
        </div>
      </div>
    </div>
  )
}

export default Card
