import React, { useState, useEffect } from 'react'
import { TeamMember } from '../../../../types/TeamMember'
import { TeamSocialIcon } from '../../TeamSocialIcon'
import Modal from './Modal'
import { FadeInWhenVisible } from '../../../shared/FadeInWhenVisible'
import Image from 'next/image'

type TeamCardProps = {
  teamMember: TeamMember
  idx: number
  showDetails: boolean
}

const TeamCard: React.FC<TeamCardProps> = ({
  teamMember,
  idx,
  showDetails,
}) => {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    showModal
      ? document.body.classList.add('removeScroll')
      : document.body.classList.remove('removeScroll')
  }, [showModal])

  return (
    <div
    className='mx-4 flex items-center max-w-6xl'
    key={teamMember.id}>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        teamMember={teamMember}
      />

      <div
      className=''
      >
        <Image
          // loading='lazy'
          src={teamMember.image}
          alt={teamMember.name}
          className='rounded-t-lg h-96 m-0 p-0 w-full object-cover'
          height={400}
          width={380}
        />
<div
className='w-full h-3 bg-red-500  flex-shrink-0 -mt-3'>

</div>
       <div 
        // className="relative z-10 -mt-8 flex h-full border border-gray-500 p-6 backdrop-blur"
        >
          {/*  <div 
          className="absolute top-0 left-0 -z-10 h-full w-full bg-zinc-200 opacity-10" 
          />
           */}

          <div 
           className='box-border font-m_plus_rounded_1c flex flex-col justify-center p-7 gap-3 w-96 h-[400px] bg-gradient-to-tl from-[#4d5154] to-[#333]/70 backdrop-blur backdrop-filter rounded-b-xl bg-blend-multiply border-[1px] border-t-0 border-[#4D5154] '
          >
          {/* // className="flex h-full flex-col justify-between" */}
            <div>
<div className='flex justify-between'>

              <p className="text-2xl font-semibold text-zinc-100 pr-8">
                {teamMember.name}
              </p>

              <TeamSocialIcon teamMember={teamMember} />

              </div>

              <div className="my-2 mb-2">
                <p className="mb-2 lg:text-lg leading-tight whitespace-pre text-base text-[#A855F7] font-semibold">
                  {teamMember.title}
                </p>
                <p className="text-zinc-100 pt-2">{teamMember.shortDescription}</p>

              </div>
            </div>

            <div className="flex">
            <button
            className="flex text-sm md:text-base font-medium text-[#A855F7] font-mono hover:text-white ease-in-out duration-300"
            onClick={() => setShowModal(!showModal)}
          >
            see all
            {/* <img
              loading='lazy'
              src="/icons/ic_plus.svg"
              alt="detail"
              title="More"
              className="h-8 w-8"
            /> */}

            {/* arrow right svg here */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path

                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>

          </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamCard
