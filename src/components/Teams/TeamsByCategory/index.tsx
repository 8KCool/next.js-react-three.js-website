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
    <div>
      {teams.map((teamMember, i) => {
        if (
          teamMember.category != 'Advisors' &&
          teamMember.category != 'Co-Founders'
        ) {
          return (
            <TeamCard teamMember={teamMember} i ={i}></TeamCard>
          )
        }
      })}
    </div>
  )
}
