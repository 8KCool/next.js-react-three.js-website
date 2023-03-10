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
      className="flex max-w-xs justify-center overflow-hidden rounded-lg border-[1px] px-4 bg-blend-multiply backdrop-blur backdrop-filter md:px-2"
      key={teamMember.id}
    >
      <div className="flex flex-col justify-between items-center pt-[1.5rem]">
        <div className="border-radius relative z-20 flex w-full items-center justify-center">
          <img
            // loading='lazy'
            src={teamMember.image}
            alt={teamMember.name}
            className="h-44 w-44 rounded-full bg-black object-cover object-top p-0"
          />
        </div>
        <div
          className="flex flex-1 w-80"
          // className="relative z-10 flex h-full p-6 -mt-8 border border-gray-500 backdrop-blur"
        >
          <div className="box-border flex flex-1 flex-col h-full min-h-[250px] w-full justify-between font-m_plus_rounded_1c ">
            {/* // className="flex flex-col justify-between h-full" */}
            <div className="">
              <div className="flex w-full flex-col justify-between text-center">
                <p className="mt-4 h-16 w-full text-center text-2xl font-semibold text-zinc-100 dark:text-black">
                  {teamMember.name}
                </p>

               
              </div>

              <div className="my-2 mb-2 w-full text-center">
                <p className="mb-2 whitespace-pre text-base font-semibold leading-tight text-zinc-100 dark:text-black lg:text-lg">
                  {teamMember.title}
                </p>
                <div className="flex items-end justify-end py-1">
                  <TeamSocialIcon teamMember={teamMember} />
                </div>
                {teamMember?.category === 'Leadership' ||
                teamMember?.category === 'Advisors' ? (
                  <p className="p-4 text-zinc-100 dark:text-black">
                    {teamMember.shortDescription}
                  </p>
                ) : null}
              </div>
            </div>

            {teamMember?.category !== 'Leadership' && (
              <div className="m-4 flex">
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
