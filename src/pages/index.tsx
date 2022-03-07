import type { NextPage } from 'next'
import { AboutSection } from './../components/home/AboutSection'
import { HeroSection } from './../components/home/HeroSection'
import { ProjectSection } from './../components/home/ProjectSection'
import { GlobalLayout } from './../components/layouts/GlobalLayout'

const Home: NextPage = () => {
  return (
    <GlobalLayout>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
    </GlobalLayout>
  )
}

export default Home
