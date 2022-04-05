import type { GetStaticProps, NextPage } from 'next'
import { ReactNode } from 'react'
import { SEO } from '../components/shared/SEO'
import { Title } from '../components/shared/Title'
import { TeamsByCategory } from '../components/Teams/TeamsByCategory'
import { getAllCategories, groupByCategory } from '../util/functions'
import { GlobalLayout } from './../components/layouts/GlobalLayout'
import { TeamMember } from './../types/TeamMember'
import { api } from './../util/api'

interface TeamsProps {
  children?: ReactNode
  teams: TeamMember[]
}

const Teams: NextPage<TeamsProps> = ({ teams }) => {
  const categories = getAllCategories(teams)
  return (
    <>
      <SEO title="Teams" description="Trigan Teams" />
      <GlobalLayout>
        <Title padding="py-3" title="Meet Our Team" />

        {categories.map((category, i) => {
          return (
            <TeamsByCategory
              key={category}
              category={categories[i]}
              teams={groupByCategory(teams, categories[i])}
            />
          )
        })}
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
