import Image from 'next/image'
import { ReactNode, useState } from 'react'
import { TeamMember } from '../../../types/TeamMember'
import { FadeInWhenVisible } from '../../shared/FadeInWhenVisible'
import { TeamSocialIcon } from '../TeamSocialIcon'
import TeamCard from './components/TeamCard'

interface TeamsByCategoryProps {
  children?: ReactNode
  category: string
  teams: TeamMember[]
}

export const TeamsByCategory: React.FC<TeamsByCategoryProps> = ({
  category,
  teams,
}) => {
  return (
    <div className="flex flex-col items-center">
      {category === 'all' ? (
        <>
          <p className="mt-20 text-3xl font-semibold text-center text-white">
            LEADERSHIP
          </p>
          <div className="grid max-w-[950px] gap-4 pt-8 sm:grid-cols-2 md:px-12">
            {teams
              .filter((team) => team.category === 'Co-Founders')
              .map((teamMember, i) => (
                <TeamCard
                  key={teamMember.id}
                  teamMember={teamMember}
                  idx={i}
                  showDetails={false}
                ></TeamCard>
              ))}
          </div>

          <p className="mt-20 text-3xl font-semibold text-center text-white">
            ADVISORS
          </p>
          <div className="grid max-w-[1200px] gap-4 pt-8 sm:grid-cols-2 md:px-12 lg:grid-cols-3">
            {teams
              .filter((team) => team.category === 'Advisors')
              .map((teamMember, i) => (
                <TeamCard
                  key={teamMember.id}
                  teamMember={teamMember}
                  idx={i}
                  showDetails={false}
                ></TeamCard>
              ))}
          </div>

          <p className="mt-20 text-3xl font-semibold text-center text-white">
            TECH TEAM
          </p>
          <div className="grid max-w-[1200px] gap-4 pt-8 sm:grid-cols-2 md:px-12 lg:grid-cols-3">
            {teams
              .filter((team) => team.category === 'Tech')
              .map((teamMember, i) => (
                <TeamCard
                  key={teamMember.id}
                  teamMember={teamMember}
                  idx={i}
                  showDetails={false}
                ></TeamCard>
              ))}
          </div>

          <p className="mt-20 text-3xl font-semibold text-center text-white">
            MARKETING TEAM
          </p>
          <div className="grid max-w-[1200px] gap-4 pt-8 sm:grid-cols-2 md:px-12 lg:grid-cols-3">
            {teams
              .filter((team) => team.category === 'Marketing')
              .map((teamMember, i) => (
                <TeamCard
                  key={teamMember.id}
                  teamMember={teamMember}
                  idx={i}
                  showDetails={false}
                ></TeamCard>
              ))}
          </div>
        </>
      ) : (
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
      )}
    </div>
  )
}
