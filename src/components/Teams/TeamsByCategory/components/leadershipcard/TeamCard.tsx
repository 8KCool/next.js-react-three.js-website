import React, { useState, useEffect } from 'react'
import { TeamMember } from '../../../../../types/TeamMember'
import { TeamSocialIcon } from '../../../TeamSocialIcon'
import Modal from '../Modal'
import { FadeInWhenVisible } from '../../../../shared/FadeInWhenVisible'
import Image from "next/legacy/image"

type TeamCardProps = {
  teamMember: TeamMember
  idx: number
  showDetails: boolean
  handleShowDetails?: (member: TeamMember | null) => void
}

const TeamCardL: React.FC<TeamCardProps> = ({
  teamMember,
  idx,
  showDetails,
  handleShowDetails,
  
}) => {
  return (
    <div  className="flex max-w-xs items-center justify-center overflow-hidden rounded-lg border-[1px] px-4 md:px-2 bg-blend-multiply backdrop-blur backdrop-filter"
      key={teamMember.id}>
      <div className="flex flex-col items-center pt-[1.5rem]">
       <div className='w-full relative border-radius flex justify-center items-center z-20'>
        <img
          // loading='lazy'
          src={teamMember.image}
          alt={teamMember.name}
          className="rounded-full bg-black  p-0"
          height={'180px'}
          width={'180px'}
        />
</div>
        <div className='w-80'
        // className="relative z-10 flex h-full p-6 -mt-8 border border-gray-500 backdrop-blur"
        >
         

          <div className="box-border flex min-h-[250px] w-full flex-col font-m_plus_rounded_1c  ">
            {/* // className="flex flex-col justify-between h-full" */}
            <div>
              <div className="flex w-full text-center justify-between">
                <p className="w-full text-center text-2xl font-semibold text-zinc-100 dark:text-black">
                  {teamMember.name}
                </p>

              </div>

              <div className="my-2 mb-2 w-full text-center">
                <p className="mb-2 whitespace-pre text-base font-semibold leading-tight lg:text-lg text-zinc-100 dark:text-black">
                  {teamMember.title}
                </p>
                <p className="pt-2 text-zinc-100 dark:text-black">
                  {teamMember.shortDescription}
                </p>
              </div>
            </div>

           

            {teamMember?.category !== 'Leadership' && (
              <div className="flex">
                <button
                  className="flex font-mono text-sm font-medium text-[#A855F7] duration-300 ease-in-out hover:text-white dark:hover:text-black md:text-base"
                  onClick={() => {
                    // setShowModal(!showModal)
                    handleShowDetails && handleShowDetails(teamMember)
                  }}
                >
                  see all
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2 h-6 w-6"
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
            )}
             
          </div>
          <div className="flex  items-end justify-end  p-3">
                  <TeamSocialIcon teamMember={teamMember} />
                </div>
        </div>
      </div>
    </div>
  )}
export default TeamCardL