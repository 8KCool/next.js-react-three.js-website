import { ReactNode, useState } from 'react'
import { groupByCategory } from '../../../util/functions'
import { Title } from '../../shared/Title'
import { TeamMember } from './../../../types/TeamMember'
import { Leadership } from '../../Teams/Leadership'

interface LeadershipSectionProps {
  children?: ReactNode
  teams: TeamMember[]
}

export const LeadershipSection: React.FC<LeadershipSectionProps> = ({
  teams,
}) => {
  /*  const router = useRouter() */
  const [category] = useState('all')
  /*   const teamMembers = groupByCategory(teams, category) */
  return (
    <section
      id="leadership"
      className="w-full px-1 text-light-grey dark:text-light"
    >
      <Title title="Creators & Founders" />
      <Title title="Leadership" />
      <div className="text-md py-5 text-center">
        <p>
          A team with a wide sector experience from finance, development,
          medicine and innovation with a passion for change.
        </p>
      </div>

      <div className="flex w-full flex-wrap justify-center pb-5 text-center md:px-5">
        <Leadership key={category} teams={groupByCategory(teams, category)} />
      </div>
    </section>
  )
}
