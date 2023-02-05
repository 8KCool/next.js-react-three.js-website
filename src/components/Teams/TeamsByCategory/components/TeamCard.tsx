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
      className="mx-4 flex max-w-6xl items-center overflow-hidden bg-light-grey"
      key={teamMember.id}
    >
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        teamMember={teamMember}
      />

      <div>
        <Image
          // loading='lazy'
          layout="responsive"
          src={teamMember.image}
          alt={teamMember.name}
          className="m-0 h-96 w-full rounded-t-lg object-cover p-0"
          height={400}
          width={380}
        />
        <div
        // className="relative z-10 flex h-full p-6 -mt-8 border border-gray-500 backdrop-blur"
        >
          {/*  <div 
          className="absolute top-0 left-0 w-full h-full -z-10 bg-zinc-200 opacity-10" 
          />
           */}

          <div className="box-border flex h-[400px] w-96 flex-col justify-center gap-3 rounded-b-xl border-[1px] border-t-0 border-[#4D5154] bg-gradient-to-tl from-[#4d5154] to-[#333]/70 p-7 font-m_plus_rounded_1c bg-blend-multiply backdrop-blur backdrop-filter ">
            {/* // className="flex flex-col justify-between h-full" */}
            <div>
              <div className="flex justify-between">
                <p className="pr-8 text-2xl font-semibold text-zinc-100">
                  {teamMember.name}
                </p>

                <TeamSocialIcon teamMember={teamMember} />
              </div>

              <div className="my-2 mb-2">
                <p className="mb-2 whitespace-pre text-base font-semibold leading-tight text-[#A855F7] lg:text-lg">
                  {teamMember.title}
                </p>
                <p className="pt-2 text-zinc-100">
                  {teamMember.shortDescription}
                </p>
              </div>
            </div>

            <div className="flex">
              <button
                className="flex font-mono text-sm font-medium text-[#A855F7] duration-300 ease-in-out hover:text-white md:text-base"
                onClick={() => setShowModal(!showModal)}
              >
                see all
                {/* <img
              loading='lazy'
              src="/icons/ic_plus.svg"
              alt="detail"
              title="More"
              className="w-8 h-8"
            /> */}
                {/* arrow right svg here */}
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamCard
