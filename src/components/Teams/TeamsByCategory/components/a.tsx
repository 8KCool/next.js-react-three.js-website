import Image from 'next/image'
import React, { useState } from 'react'
import { TeamMember } from '../../../../types/TeamMember'
import { FadeInWhenVisible } from '../../../shared/FadeInWhenVisible'
import { TeamSocialIcon } from '../../TeamSocialIcon'

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
  const [buttonClicked, setButtonClicked] = useState(showDetails)
  return (
    <FadeInWhenVisible duration={(idx + 1) * 0.2} key={teamMember.id}>
      <div
        id={teamMember.id}
        className={`my-5 mx-3 bg-white dark:bg-light-grey md:-skew-x-12 ${
          showDetails ? 'h-full' : ''
        }`}
      >
        <div className="grid grid-cols-[80px_1fr] items-center gap-4 overflow-hidden px-10 py-5 md:skew-x-12">
          {/* Image Starts */}
          <div className="relative w-full aspect-1">
            <Image
              src={teamMember.image}
              alt={teamMember.name}
              layout="fill"
              className="rounded-full bg-light-grey dark:bg-light"
            />
          </div>
          {/* Image Ends */}

          <div className="col-start-2 col-end-4 pt-3">
            <div>
              <h4 className="text-xl font-semibold">{teamMember.name}</h4>
              <h6 className="font-medium">{teamMember.title}</h6>
            </div>

            {buttonClicked || showDetails ? (
              <div>
                <p className="py-2 text-sm">{teamMember.longDescription}</p>
              </div>
            ) : null}
            <div className="flex justify-between">
              {!showDetails && (
                <div>
                  <button
                    onClick={() => {
                      setButtonClicked(!buttonClicked)
                    }}
                    className={`group relative mt-4  mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-green-400 to-blue-600 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-green-200 group-hover:from-green-400 group-hover:to-blue-600 dark:text-white dark:focus:ring-green-800`}
                  >
                    <span className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
                      {buttonClicked ? 'Hide' : 'See Details'}
                    </span>
                  </button>
                </div>
              )}
              <div>
                {' '}
                {buttonClicked ? (
                  <TeamSocialIcon teamMember={teamMember} />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeInWhenVisible>
  )
}

export default TeamCard
