import type { GetStaticProps, NextPage } from 'next'
import { ReactNode, useState } from 'react'
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
  const [category, setCategory] = useState('all')
  return (
    <>
      <SEO title="Teams" description="Trigan Teams" />
      <GlobalLayout>
        <Title padding="py-3" title="Meet Our Team" />

        <div className="mx-auto my-5 grid max-w-xl grid-cols-2 rounded-lg sm:max-w-2xl sm:grid-cols-4 md:my-8">
          {categories.map((cat) => {
            return (
              <div
                className={`mx-2 my-2 cursor-pointer rounded-lg sm:my-0 ${
                  category === cat ? 'bg-primary' : 'bg-grey'
                }`}
                key={cat}
                onClick={() => setCategory(cat)}
              >
                <p className="text-center text-xl font-bold capitalize">
                  {cat}
                </p>
              </div>
            )
          })}
        </div>

        <TeamsByCategory
          key={category}
          teams={groupByCategory(teams, category)}
        />
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
