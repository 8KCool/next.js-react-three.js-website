import React, { useState, useEffect } from 'react'
import { TeamMember } from '../../../../types/TeamMember'
import { TeamSocialIcon } from '../../TeamSocialIcon'
import Modal from './Modal'
import { FadeInWhenVisible } from '../../../shared/FadeInWhenVisible'

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
    <div key={teamMember.id}>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        teamMember={teamMember}
      />

      <div className="relative flex h-full flex-col bg-light-grey p-6">
        <img
          loading='lazy'
          src={teamMember.image}
          alt={teamMember.name}
          className="object-contain"
        />

        <div className="relative z-10 -mt-8 flex h-full border border-gray-500 p-6 backdrop-blur">
          <div className="absolute top-0 left-0 -z-10 h-full w-full bg-zinc-200 opacity-10" />

          <button
            className="absolute right-5 top-6"
            onClick={() => setShowModal(!showModal)}
          >
            <img
              loading='lazy'
              src="/icons/ic_plus.svg"
              alt="detail"
              title="More"
              className="h-8 w-8"
            />
          </button>

          <div className="flex h-full flex-col justify-between">
            <div>
              <p className="text-2xl font-semibold text-zinc-100 pr-8">
                {teamMember.name}
              </p>

              <div className="my-4">
                <p className="mb-2 text-lg font-semibold text-zinc-100">
                  {teamMember.title}
                </p>
                <p className="text-zinc-100">{teamMember.shortDescription}</p>
              </div>
            </div>

            <div className="flex">
              <TeamSocialIcon teamMember={teamMember} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamCard
