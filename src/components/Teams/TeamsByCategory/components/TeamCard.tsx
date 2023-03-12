import React, { useState, useEffect } from 'react'
import { TeamMember } from '../../../../types/TeamMember'
import { TeamSocialIcon } from '../../TeamSocialIcon'
import Modal from './Modal'
import { FadeInWhenVisible } from '../../../shared/FadeInWhenVisible'
import Image from "next/legacy/image"

type TeamCardProps = {
  teamMember: TeamMember
  idx: number
  showDetails: boolean
  handleShowDetails?: (member: TeamMember | null) => void
}

const TeamCard: React.FC<TeamCardProps> = ({
  teamMember,
  idx,
  showDetails,
  handleShowDetails,
}) => {
  console.log('teamMember', teamMember)
  return (
    <div
      className="flex max-w-xs items-start overflow-hidden rounded-lg border-[1px] px-4 bg-blend-multiply backdrop-blur backdrop-filter"
      key={teamMember.id}
    >
      <div className="flex flex-col items-center gap-2 pt-[1.5rem]">
        <img
          // loading='lazy'
          src={teamMember.image}
          alt={teamMember.name}
          className="rounded-full  p-0"
          height={'100px'}
          width={'100px'}
        />
        <div
        // className="relative z-10 flex h-full p-6 -mt-8 border border-gray-500 backdrop-blur"
        >
          {/*  <div 
          className="absolute top-0 left-0 w-full h-full -z-10 bg-zinc-200 opacity-10" 
          />
           */}

          <div className="box-border flex min-h-[250px]  flex-col  gap-2   p-2 font-m_plus_rounded_1c  ">
            {/* // className="flex flex-col justify-between h-full" */}
            <div>
              <div className="flex justify-between">
                <p className="pr-8 text-2xl font-semibold text-zinc-100 dark:text-black">
                  {teamMember.name}
                </p>

                <TeamSocialIcon teamMember={teamMember} />
              </div>

              <div className="my-2 mb-2">
                <p className="mb-2 whitespace-pre text-base font-semibold leading-tight text-[#A855F7] lg:text-lg">
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
        </div>
      </div>
    </div>
  )
}

export default TeamCard

