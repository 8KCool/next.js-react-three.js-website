import type { GetStaticProps, NextPage } from 'next'
import { ReactNode, useState } from 'react'
import React, { lazy, Suspense } from 'react'

import { SEO } from '../components/shared/SEO'
import { Title } from '../components/shared/Title'
import { groupByCategory } from '../util/functions'
import { TeamMember } from '../types/TeamMember'
import { api } from '../util/api'
import { ThemeProvider } from 'next-themes'

import GlobalLayout from '../components/layouts/GlobalLayout';

interface TeamsProps {
  children?: ReactNode
  teams: TeamMember[]
}

const TeamCatSelector = lazy(() => import('../components/shared/TeamCatSelector/index'))
const TeamsByCategory = lazy(() => import('../components/Teams/TeamsByCategory/index'))

const Teams: NextPage<TeamsProps> = ({ teams }) => {
  const [category, setCategory] = useState('all')
  return (
   <div className=' dark:bg-white'> 
    <ThemeProvider attribute="class" enableSystem={true}>
      <>
        <SEO title="Teams" description="Trigan Teams" />
        <GlobalLayout>
          <div className=" relative mr-4 w-full bg-transparent">
            <div className="text-white ">
              <Title padding="py-3" title="Our Teams" />
            </div>
            <Suspense fallback={null} >

            <div className="w-[80%] m-auto px-2 pb-10 ">

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
            </Suspense>


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
