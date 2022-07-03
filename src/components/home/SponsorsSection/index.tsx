import { useRouter } from 'next/router'
import { ReactNode, useState } from 'react'
import { groupByCategory } from '../../../util/functions'
import { Title } from '../../shared/Title'
import { TeamMember } from './../../../types/TeamMember'
import { Leadership } from '../../Teams/Leadership'

interface SponsorsSectionProps {
  children?: ReactNode
}

export const SponsorsSection: React.FC<SponsorsSectionProps> = ({}) => {
  /*  const router = useRouter() */
  /* const [category] = useState('all') */
  /*   const teamMembers = groupByCategory(teams, category) */
  return (
    <section
      id="sponsors"
      className="w-full px-1 text-light-grey dark:text-light"
    >
      <Title title="Sponsors" />
      <p className="text-center">Sponsors logos in here</p>

      <div className="flex w-full flex-wrap justify-center pb-5 text-center md:px-5"></div>
    </section>
  )
}
