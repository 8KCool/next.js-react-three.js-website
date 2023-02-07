import type { GetStaticProps, NextPage } from 'next'
import { ReactNode, useState } from 'react'
import { SEO } from '../components/shared/SEO'
import { TeamCatSelector } from '../components/shared/TeamCatSelector'
import { Title } from '../components/shared/Title'
import { TeamsByCategory } from '../components/Teams/TeamsByCategory'
import { groupByCategory } from '../util/functions'
import { GlobalLayout } from '../components/layouts/GlobalLayout'
import { TeamMember } from '../types/TeamMember'
import { api } from '../util/api'
import { ThemeProvider } from 'next-themes'

interface TeamsProps {
  children?: ReactNode
  teams: TeamMember[]
}

const Teams: NextPage<TeamsProps> = ({ teams }) => {
  const [category, setCategory] = useState('all')
  return (
   <div className='dark:bg-white'> 
    <ThemeProvider attribute="class" enableSystem={true}>
      <>
        <SEO title="Teams" description="Trigan Teams" />
        <GlobalLayout>
          <div className="relative mr-4 w-full bg-transparent">
            <div className="text-white ">
              <Title padding="py-3" title="Our Teams" />
            </div>
            <div className="px-2 ">
              <TeamCatSelector
                category={category}
                teams={teams}
                onClick={(e) => setCategory(e)}
              />

              <TeamsByCategory
                key={category}
                category={category}
                teams={groupByCategory(teams, category)}
              />
            </div>
          </div>
        </GlobalLayout>
      </>
    </ThemeProvider>
    </div>
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
