
import { ThemeProvider } from 'next-themes'
import React from 'react'
import { RoadMapSection } from '../components/home/RoadMapSection'
import { SEO } from '../components/shared/SEO'
import { GlobalLayout } from './../components/layouts/GlobalLayout'


const Roadmap = () => {
  return (
    <ThemeProvider attribute="class" enableSystem={true}>
      <SEO title="Roadmap" />
      <GlobalLayout>
        {/* <div className=' relative bg-cover bg-roadMapSection'> */}
        <RoadMapSection />
        {/* </div> */}
      </GlobalLayout>
    </ThemeProvider>
  )
}

export default Roadmap
