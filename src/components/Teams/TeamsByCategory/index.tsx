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
          <p className="my-6 text-center text-3xl font-semibold text-white">
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

          <p className="my-6 text-center text-3xl font-semibold text-white">
            ADVISORS
          </p>
          <div className="grid grid-cols-1 justify-between gap-4 pt-8 md:grid-cols-2 md:px-2  2xl:grid-cols-3">
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

          <p className="my-6 text-center text-3xl font-semibold text-white">
            TECH
          </p>
          <div className="grid max-w-[1300px] grid-cols-1 gap-4 pt-8 sm:grid-cols-2  md:grid-cols-2 2xl:grid-cols-3">
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

          <p className="my-6 text-center text-3xl font-semibold text-white">
            MARKETING
          </p>
          <div className="mb-6 grid max-w-[1300px] grid-cols-1 gap-4 pt-8 sm:grid-cols-2  md:grid-cols-2 md:px-2 2xl:grid-cols-3">
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
        <div className="my-6 flex flex-wrap items-center justify-center gap-4">
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
