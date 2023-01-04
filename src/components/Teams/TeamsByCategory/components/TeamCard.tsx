import Image from 'next/image'
import React, { useState } from 'react'
import { TeamMember } from '../../../../types/TeamMember'
import { FadeInWhenVisible } from '../../../shared/FadeInWhenVisible'
import { TeamSocialIcon } from '../../TeamSocialIcon'
import Modal from './Modal'

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

  return (
    <div key={teamMember.id}>
      <Modal showModal={showModal} setShowModal={setShowModal} teamMember={teamMember} />
      <div className="relative flex flex-col h-full p-6 bg-light-grey">
        <img
          src={teamMember.image}
          alt={teamMember.name}
          className="object-contain"
        />

        <div className="relative z-10 h-full p-6 -mt-8 border border-gray-500 backdrop-blur">
          <div className="absolute bottom-0 left-0 w-full h-full -z-10 bg-zinc-200 opacity-10" />

          <div className="flex items-start justify-between gap-2">
            <p className="text-3xl font-semibold w-fit">{teamMember.name}</p>
            <button
              className="flex items-start justify-end w-10 h-10"
              onClick={() => setShowModal(!showModal)}
            >
              <img src="/icons/ic_plus.svg" alt="detail" title="Detail" />
            </button>
          </div>

          <div className="my-4">
            <p className="text-lg font-semibold">{teamMember.title}</p>
            <p className="text-light">{teamMember.shortDescription}</p>
          </div>

          <div className="flex">
            <TeamSocialIcon teamMember={teamMember} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamCard
