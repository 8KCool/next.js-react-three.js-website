import Image from 'next/image'
import { ReactNode } from 'react'
import { TeamMember } from '../../../types/TeamMember'
import { FadeInWhenVisible } from '../../shared/FadeInWhenVisible'
import { TeamSocialIcon } from '../TeamSocialIcon'

interface AdvisorsProps {
  children?: ReactNode
  teams: TeamMember[]
}

export const Advisors: React.FC<AdvisorsProps> = ({ teams }) => {
  return (
    <>
      <h1>Teste</h1>
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 ">
      {teams.map((teamMember, i) => {
        if (teamMember.category == 'Advisors') {
          return (
            <FadeInWhenVisible duration={(i + 1) * 0.2} key={teamMember.id}>
              <div
                id={teamMember.id}
                className="col-span-1 bg-light dark:bg-light-grey md:mx-auto"
              >
                <div className="grid grid-flow-row items-center gap-5 overflow-hidden px-10 py-5">
                  {/* Image Starts */}
                  <div className="center relative mx-auto h-28 w-28 sm:h-40 sm:w-40">
                    <Image
                      src={teamMember.image}
                      alt={teamMember.name}
                      layout="fill"
                      className="rounded-full bg-light-grey dark:bg-light"
                    />
                  </div>
                  {/* Image Ends */}

                  <div className="pt-3">
                    <h4 className="text-sm font-bold">{teamMember.name}</h4>

                    <p className="py-2 text-left text-sm font-medium">
                      {teamMember.longDescription}
                    </p>
                  </div>
                </div>

                <TeamSocialIcon teamMember={teamMember} />
              </div>
            </FadeInWhenVisible>
          )
        }
      })}
    </div>
    </>
  )
}
