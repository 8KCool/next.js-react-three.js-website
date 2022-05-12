import type { GetStaticProps, NextPage } from 'next'
import { ReactNode, useState } from 'react'
import { SEO } from '../components/shared/SEO'
import { Title } from '../components/shared/Title'
import { groupByCategory } from '../util/functions'
import { GlobalLayout } from '../components/layouts/GlobalLayout'
import { TeamMember } from '../types/TeamMember'
import { api } from '../util/api'
import { Advisors } from '../components/Teams/Advisors'

interface AdvisorsBoardProps {
  children?: ReactNode
  teams: TeamMember[]
}

const Teams: NextPage<AdvisorsBoardProps> = ({ teams }) => {
  const [category, setCategory] = useState('all')
  return (
    <>
      <SEO title="Teams" description="Trigan Advisors" />
      <GlobalLayout>
        <Title padding="py-3" title="Meet Our Advisors" />

        <Advisors key={category} teams={groupByCategory(teams, category)} />
      </GlobalLayout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  let teams = []
  try {
    const { data } = await api().get('/teammember/getAll')
    teams = data.Data
  } catch (err) {
    console.log(err)
  }
  return {
    props: {
      teams,
    },
    revalidate: false, // Next.js will never attempt to re-generate the page
  }
}

export default Teams
