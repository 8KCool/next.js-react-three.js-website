
import { RoadMapSection } from '../components/home/RoadMapSection'
import { SEO } from '../components/shared/SEO'
import React, { lazy, Suspense } from 'react'
import GlobalLayout from '../components/layouts/GlobalLayout';


const Roadmap = () => {
  return (
     <div className='dark:bg-white dark:text-black'> 
      <SEO title="Roadmap" description='Trigan Roadmap'/>
      <GlobalLayout>
        {/* <div className=' relative bg-cover bg-roadMapSection'> */}
        <RoadMapSection />
        {/* </div> */}
      </GlobalLayout>
     </div>
  )
}

export default Roadmap
