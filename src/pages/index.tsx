import type { GetStaticProps, NextPage } from 'next'
import { ReactNode, useEffect } from 'react'
import { SEO } from '../components/shared/SEO'
import { AboutSection } from '../components/home/AboutSection'
import { HeroSection } from '../components/home/HeroSection'
//import { ProjectSection } from '../components/home/ProjectSection'
import { GlobalLayout } from '../components/layouts/GlobalLayout'
import { TeamMember } from '../types/TeamMember'
import { SupportersSection } from '../components/home/SupportersSection'
import { api } from '../util/api'

import $ from 'jquery'

/* import { WhitepaperSection } from './../components/shared/Whitepaper' */

interface HomeProps {
  children?: ReactNode
  teams: TeamMember[]
}

const Home: NextPage<HomeProps> = () => {
  // useEffect(() => {
  //   const video = document.getElementById('myVid')

  //   function getVerticalScrollPercentage() {
  //     return window.scrollY / (document.body.offsetHeight - window.innerHeight)
  //   }

  //   function updateVideoOnScroll() {
  //     const current = video.duration * getVerticalScrollPercentage()
  //     video.currentTime = current
  //   }
  //   window.addEventListener('scroll', updateVideoOnScroll)

  //   return () => window.removeEventListener('scroll', updateVideoOnScroll)
  // }, [])

  return (
    <>
      <SEO title="HomePage" />
      <div className="relative overflow-x-hidden">
        <GlobalLayout>
          <HeroSection />
          <AboutSection />
       {/*}   <ProjectSection /> */}
          <SupportersSection />
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
