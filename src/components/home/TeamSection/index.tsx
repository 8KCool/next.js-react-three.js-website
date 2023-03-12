import Image from "next/legacy/image"
import { useRouter } from 'next/router'
import { ReactNode, useState } from 'react'
import { groupByCategory } from '../../../util/functions'
import { FadeInWhenVisible } from '../../shared/FadeInWhenVisible'
import { Title } from '../../shared/Title'
import { TeamMember } from './../../../types/TeamMember'
import React, { lazy, Suspense } from 'react'

const TeamCatSelector = lazy(() => import('../../shared/TeamCatSelector/index'))

interface TeamSectionProps {
  children?: ReactNode
  teams: TeamMember[]
}

export const TeamSection: React.FC<TeamSectionProps> = ({ teams }) => {
  const router = useRouter()
  const [category, setCategory] = useState('all')
  const teamMembers = groupByCategory(teams, category)

  return (
    <section id="teams" className="w-full px-1">
      <Title title="Creators & Marketing" />

      <TeamCatSelector
        category={category}
        teams={teams}
        onClick={setCategory}
      />

      <div className="flex w-full flex-wrap justify-center pb-5 text-center md:px-5">
        {teamMembers.map((teamMember, i) => {
          if (
            teamMember.category != 'Advisors' &&
            teamMember.category != 'Co-Founders'
          ) {
            return (
              <div
                key={teamMember.id}
                onClick={() => router.push('/teams#' + teamMember.id)}
                className="w-1/2 cursor-pointer gap-4 p-5 sm:w-1/3 xl:w-1/6 md2:w-1/5"
              >
                <FadeInWhenVisible key={teamMember.id} duration={(i + 1) * 0.2}>
                  <div className="relative mx-auto my-2 h-20 w-20">
                    {teamMember.image && (
                      <Image
                        src={teamMember.image}
                        alt={teamMember.name}
                        layout="fill"
                        className="rounded-full bg-light"
                      />
                    )}
                  </div>

                  <h2 className="text-lg md:whitespace-nowrap">
                    {teamMember.name}
                  </h2>
                  <p className="text-medium">{teamMember.title}</p>
                </FadeInWhenVisible>
              </div>
            )
          }
        })}
      </div>
      <button onClick={() => router.push('/teams')} className="primary-btn">
        Learn More
      </button>
    </section>
  )
}
