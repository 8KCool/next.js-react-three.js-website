import type { GetStaticProps, NextPage } from 'next'
import { ReactNode } from 'react'
import { SEO } from '../components/shared/SEO'
import { AboutSection } from '../components/home/AboutSection'
import { HeroSection } from '../components/home/HeroSection'
import { ProjectSection } from '../components/home/ProjectSection'
import { GlobalLayout } from '../components/layouts/GlobalLayout'
import { TeamMember } from '../types/TeamMember'
import { api } from '../util/api'

/* import { WhitepaperSection } from './../components/shared/Whitepaper' */

interface HomeProps {
  children?: ReactNode
  teams: TeamMember[]
}

const Home: NextPage<HomeProps> = () => {
  return (
    <>
      <SEO title="HomePage" />
      <div className="relative overflow-x-hidden">
        <GlobalLayout>
          <HeroSection />
          <AboutSection />
          <ProjectSection />
          {/* <RoadMapSection />
          <LeadershipSection teams={teams} />
          <AdvisorsSection teams={teams} />
          <TeamSection teams={teams} />
          <SponsorsSection />
          <FaqSection /> 
           <WhitepaperSection /> */}
        </GlobalLayout>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  let teams = []
  try {
    const { data } = await api().get('/teammember/getAll')
    teams = data.Data
  } catch (err: any) {
    console.log('HomePage Error', err.response)
  }
  return {
    props: {
      teams,
    },
    revalidate: false, // Next.js will never attempt to re-generate the page
  }
}

export default Home
