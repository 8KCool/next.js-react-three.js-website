import Image from 'next/image'
import { useRouter } from 'next/router'
import { ReactNode, useState } from 'react'
import { groupByCategory } from '../../../util/functions'
import { FadeInWhenVisible } from '../../shared/FadeInWhenVisible'
import { Title } from '../../shared/Title'
import { TeamMember } from './../../../types/TeamMember'
import { Advisors } from '../../Teams/Advisors'

interface AdvisorsSectionProps {
  children?: ReactNode
  teams: TeamMember[]
}

export const AdvisorsSection: React.FC<AdvisorsSectionProps> = ({ teams }) => {
  const router = useRouter()
  const [category, setCategory] = useState('all')
  const teamMembers = groupByCategory(teams, category)
  return (
    <div className="flex w-full flex-wrap justify-center pb-5 text-center md:px-5">
      <Title padding="py-3" title="Meet Our Advisors" />
      <section id="advisors" className="w-full px-1">
        <Advisors key={category} teams={groupByCategory(teams, category)} />
      </section>
    </div>
  )
}
