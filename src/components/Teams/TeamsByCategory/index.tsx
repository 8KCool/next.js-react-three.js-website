import Image from 'next/image'
import { ReactNode } from 'react'
import { TeamMember } from '../../../types/TeamMember'
import { FadeInWhenVisible } from '../../shared/FadeInWhenVisible'
import { TeamSocialIcon } from '../TeamSocialIcon'

interface TeamsByCategoryProps {
  children?: ReactNode
  teams: TeamMember[]
}

export const TeamsByCategory: React.FC<TeamsByCategoryProps> = ({ teams }) => {
  return (
    <div>
      {teams.map((teamMember, i) => {
        if (
          teamMember.category != 'Advisors' &&
          teamMember.category != 'Co-Founders'
        ) {
          return (
            <FadeInWhenVisible duration={(i + 1) * 0.2} key={teamMember.id}>
              <div
                id={teamMember.id}
                className="my-5 mx-5 bg-white dark:bg-light-grey md:mx-auto md:w-2/3 md:-skew-x-12"
              >
                <div className="grid items-center gap-5 overflow-hidden px-10 py-5 md:skew-x-12 md:grid-cols-4">
                  {/* Image Starts */}
                  <div className="relative mx-auto h-28 w-28 sm:h-40 sm:w-40 md:col-span-1">
                    <Image
                      src={teamMember.image}
                      alt={teamMember.name}
                      layout="fill"
                      className="rounded-full bg-light-grey dark:bg-light"
                    />
                  </div>
                  {/* Image Ends */}

                  <div className="col-span-3 pt-3">
                    <h4 className="text-xl font-semibold">{teamMember.name}</h4>
                    <h6 className="font-medium">{teamMember.title}</h6>

                    <p className="py-2 text-sm">{teamMember.longDescription}</p>
                  </div>
                </div>

                <TeamSocialIcon teamMember={teamMember} />
              </div>
            </FadeInWhenVisible>
          )
        }
      })}
    </div>
  )
}
