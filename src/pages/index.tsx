import type { NextPage } from 'next'
import { HeroSection } from './../components/home/HeroSection'
import { GlobalLayout } from './../components/layouts/GlobalLayout'

const Home: NextPage = () => {
  return (
    <GlobalLayout>
      <HeroSection />
    </GlobalLayout>
  )
}

export default Home
