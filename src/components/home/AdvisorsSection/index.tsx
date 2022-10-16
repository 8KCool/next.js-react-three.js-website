import { ReactNode, useState } from 'react'
import { groupByCategory } from '../../../util/functions'
import { Title } from '../../shared/Title'
import { TeamMember } from './../../../types/TeamMember'
import { Advisors } from '../../Teams/Advisors'

interface AdvisorsSectionProps {
  children?: ReactNode
  teams: TeamMember[]
}

export const AdvisorsSection: React.FC<AdvisorsSectionProps> = ({ teams }) => {
  /* const router = useRouter() */
  const [category] = useState('all')
  /* const teamMembers = groupByCategory(teams, category) */
  return (
    <section
      id="advisors"
      className="w-full px-1 text-light-grey dark:text-light"
    >
      <Title title="Board of Advisors" />
      <div className="flex flex-wrap justify-center w-full pb-5 text-center md:px-5">
        <Advisors key={category} teams={groupByCategory(teams, category)} />
      </div>
    </section>
  )
}
