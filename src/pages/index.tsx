import type { GetStaticProps, NextPage } from 'next'
import { ReactNode } from 'react'
import { SEO } from '../components/shared/SEO'
import { AboutSection } from '../components/home/AboutSection'
import { HeroSection } from '../components/home/HeroSection'
import { GlobalLayout } from '../components/layouts/GlobalLayout'
import { TeamMember } from '../types/TeamMember'
import { api } from '../util/api'

interface HomeProps {
  children?: ReactNode
  teams: TeamMember[]
}
const Home: NextPage<HomeProps> = () => {
  return (
    <>
      <SEO
        title="Trigan: Transforming Cities with Blockchain Technology"
        description="Join Trigan and be a part of revolutionizing cities with our blockchain-based platform. Our innovative approach to improving quality of life, increasing sustainability, and driving economic development is poised to transform cities into smarter, safer, and more connected places. Learn more about how Trigan is tackling global issues such as poverty, deprivation, corruption, and inequality."
      />
      <div className="relative overflow-x-hidden">
        <GlobalLayout>
          <HeroSection />
          <AboutSection />
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
