import Image from 'next/image'
import { ReactNode, useState } from 'react'
import { TeamMember } from '../../../types/TeamMember'
import { FadeInWhenVisible } from '../../shared/FadeInWhenVisible'
import { TeamSocialIcon } from '../TeamSocialIcon'
import TeamCard from './components/TeamCard'

interface TeamsByCategoryProps {
  children?: ReactNode
  teams: TeamMember[]
}

export const TeamsByCategory: React.FC<TeamsByCategoryProps> = ({ teams }) => {
  return (
    <div className="flex justify-center">
      <div className="grid max-w-[1200px] gap-4 pt-8 sm:grid-cols-2 md:px-12 lg:grid-cols-3">
        {teams.map((teamMember, i) => {
          // I'm not sure which teamMembers are leaders so I'll just leave this false
          const showDetails = ['Co-Founders', 'Advisors'].includes(
            teamMember.category
          )
          {
            return (
              <TeamCard
                key={teamMember.id}
                teamMember={teamMember}
                idx={i}
                showDetails={showDetails}
              ></TeamCard>
            )
          }
        })}
      </div>
    </div>
  )
}
