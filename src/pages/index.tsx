import type { GetStaticProps, NextPage } from 'next'
import { ReactNode } from 'react'
import { AboutSection } from './../components/home/AboutSection'
import { HeroSection } from './../components/home/HeroSection'
import { ProjectSection } from './../components/home/ProjectSection'
import { RoadMapSection } from './../components/home/RoadMapSection'
import { TeamSection } from './../components/home/TeamSection'
import { GlobalLayout } from './../components/layouts/GlobalLayout'
import { FaqSection } from './../components/shared/FaqSection'
import { TeamMember } from './../types/TeamMember'
import { api } from './../util/api'

interface HomeProps {
  children?: ReactNode
  teams: TeamMember[]
}

const Home: NextPage<HomeProps> = ({ teams }) => {
  return (
    <GlobalLayout>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <RoadMapSection />
      <TeamSection teams={teams} />
      <FaqSection />
    </GlobalLayout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data } = await api().get('/teammember/getAll')
    return {
      props: {
        teams: data.Data,
      },
    }
  } catch (err) {
    console.log(err)
    return {
      props: {
        teams: [],
      },
    }
  }
}

export default Home
