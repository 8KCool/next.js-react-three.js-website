// import Image from 'next/image'
import { ReactNode, useState } from 'react'
import { TeamMember } from '../../../types/TeamMember'
// import { FadeInWhenVisible } from '../../shared/FadeInWhenVisible'
// import { TeamSocialIcon } from '../TeamSocialIcon'
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
    <div className="flex w-full flex-col items-center">
      {category === 'all' ? (
        <>
          <p className="mt-20 text-center text-3xl font-semibold text-white">
            LEADERSHIP
          </p>
          <div className="grid max-w-[950px] gap-4 pt-8 sm:grid-cols-2 md:px-12">
            {teams
              .filter((team) => team.category === 'Leadership')
              .map((teamMember, i) => (
                <TeamCard
                  key={teamMember.id}
                  teamMember={teamMember}
                  idx={i}
                  showDetails={false}
                ></TeamCard>
              ))}
          </div>

          <p className="mt-20 text-center text-3xl font-semibold text-white">
            ADVISORS
          </p>
          <div className="grid md:flex justify-between gap-4 pt-8 sm:grid-cols-2 md:px-2 lg:grid-cols-3 xl:grid-cols-4">
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

          <p className="mt-20 text-center text-3xl font-semibold text-white">TECH</p>
          <div className="grid max-w-[1300px] gap-4 pt-8 sm:grid-cols-2  md:grid-cols-3 2xl:grid-cols-4">
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

          <p className="mt-20 text-center text-3xl font-semibold text-white">
            MARKETING
          </p>
          <div className="grid max-w-[1300px] gap-4 pt-8 sm:grid-cols-2 md:px-2  md:grid-cols-3 2xl:grid-cols-4">
            
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
        <div className="grid max-w-[1300px] gap-4 pt-8 sm:grid-cols-2 md:px-12 lg:grid-cols-3 xl:grid-cols-4">
          {teams.map((teamMember, i) => {
            // I'm not sure which teamMembers are leaders so I'll just leave this false
            return (
              <TeamCard
                key={teamMember.id}
                teamMember={teamMember}
                idx={i}
                showDetails={false}
              ></TeamCard>
            )
          })}
        </div>
      )}
    </div>
  )
}
