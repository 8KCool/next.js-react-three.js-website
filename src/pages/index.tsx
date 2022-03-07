import type { NextPage } from 'next'
import { AboutSection } from './../components/home/AboutSection'
import { HeroSection } from './../components/home/HeroSection'
import { GlobalLayout } from './../components/layouts/GlobalLayout'

const Home: NextPage = () => {
  return (
    <GlobalLayout>
      <HeroSection />
      <AboutSection />
    </GlobalLayout>
  )
}

export default Home
