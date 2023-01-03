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
    <div className="grid gap-4 md:px-12 lg:grid-cols-2">
      {teams.map((teamMember, i) => {
        // I'm not sure which teamMembers are leaders so I'll just leave this false
        const defaultShowDetails = false

        if (
          teamMember.category != 'Advisors' &&
          teamMember.category != 'Co-Founders'
        ) {
          return (
            <TeamCard
              teamMember={teamMember}
              idx={i}
              defaultShowDetails={defaultShowDetails}
            ></TeamCard>
          )
        }
      })}
    </div>
  )
}
