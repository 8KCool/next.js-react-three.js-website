import Image from "next/legacy/image"
import React, { useState } from 'react'
import ContentPhaseModal from './ContentPhaseModal'

interface CardProps {
  date?: string
  name?: string
  imageUrl?: string
  rotate?: boolean
  index: number
  detailPhase?: string[]
  active?: boolean
  isCompleteMilestone?: boolean
}

const getBackgroundInfo = (key = 0) => {
  const backgroundPositionX = key % 2 === 0 ? 'left' : 'right'
  const backgroundPositionY = 0 - 148 * key

  return {
    backgroundImage: 'url(/images/purple-bg.jpg)',
    backgroundSize: '100vw auto',
    backgroundPositionX,
    height: '150px', //for all screen
    backgroundPositionY,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
}
const Card = ({
  date,
  rotate,
  imageUrl,
  name,
  index,
  detailPhase,
  active,
  isCompleteMilestone,
}: CardProps) => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <div
        className={`${rotate === true ? 'flex-row-reverse' : ''
          } mb-5 flex items-center before:table before:content-[''] after:clear-both after:table after:content-[''] `}
      >
        <div
          className={`${rotate === true
            ? 'ml-[16px] justify-end md:justify-center lg:ml-0'
            : 'justify-center'
            } flex grow`}
          onClick={() => {
            setOpenModal(true)
          }}
        >
          <div
            style={getBackgroundInfo(index)}
            className={` ${rotate === true
              ? ' float-right ml-[2%] before:-left-[1px] before:-skew-y-[45deg] after:-left-[1px] after:skew-y-[45deg]'
              : ' float-left mr-[2%] before:-right-[1px] before:skew-y-[45deg] after:-right-[1px] after:-skew-y-[45deg]'
              } post group relative w-[90%] 
          cursor-pointer overflow-hidden bg-[rgba(84,84,84,0.6)] py-[50px] text-left text-xl
           uppercase text-white  transition-all
           duration-[0.5s] before:absolute before:bottom-[54%]  before:h-[55%] before:origin-[100%,0] 
           before:bg-transparent before:pl-[3%]  before:content-[''] after:absolute 
           after:top-[54%] after:h-[55%] after:origin-[100%,0]
            after:bg-transparent after:pl-[3%] after:content-[''] hover:scale-105 active:border-2 active:opacity-70 group-hover:!text-black md:text-3xl lg:text-5xl`}
          >
            <i
              style={{ backgroundImage: `url('${imageUrl}')` }}
              className={`absolute top-0 left-0 -z-[1] h-full w-full transform bg-cover bg-center bg-no-repeat transition-all content-[''] group-hover:scale-[1.1]`}
            ></i>
            <div className={`flex flex-row${rotate === false && '-reverse'} w-11/12 justify-items-center`}>
              <div className={`hover:rotate-90 transition-all flex-none w-8 h-8 md:w-12 md:h-12 bg-contain bg-no-repeat bg-[url('/icons/ic_plus.svg')]`}>
              </div>
              <div className='grow text-center'>
                {name}
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${rotate === true
            ? 'before:-right-[10px] after:right-0'
            : 'ml-[24px] before:-left-[10px] after:left-0 lg:ml-0'
            } ${active ? 'before:border-[green]' : 'before:border-[#7d7d7d]'} ${isCompleteMilestone ? 'after:bg-[green] after:animate-pulse' : 'after:bg-[#7d7d7d]'
            } relative float-left w-2/4 text-center before:absolute before:top-[calc(50%-0.625rem)] before:z-10  
        before:h-5 before:w-5 before:rounded-full before:border-4 before:border-solid 
          before:bg-[#f2f2f2] 
        before:shadow-[0_0_0_5px_rgba(250,250,250,0.9)] before:content-['']
         after:absolute after:top-[calc(50%-1.5px)] after:-z-[1px] 
         after:h-[3px] after:w-2/4  after:content-[''] lg:w-2/4 `}
        >
          <div
            className={`${rotate === true ? 'mr-[24px] lg:mr-0' : 'ml-[24px] lg:ml-0'
              } subHeadStyle color=[#000] relative
        z-50 inline-block w-[85%] border-2 border-solid border-[#7d7d7d]
         bg-[#f2f2f2] py-[10px] px-2 text-black`}
          >
            {date}
          </div>
        </div>
      </div>
      <ContentPhaseModal
        open={openModal}
        handleClose={() => {
          setOpenModal(false)
        }}
        title={name}
        contents={detailPhase}
      />
    </>
  )
}

export default Card
