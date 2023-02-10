import AboutComponent from '../components/about'
import { SEO } from '../components/shared/SEO'
import React, { lazy, Suspense } from 'react'
const GlobalLayout = lazy(() => import('../components/layouts/GlobalLayout'))

const About = () => {
  return (
    <div className='dark:bg-white'>
      <SEO title="About" description='About Trigan' />
        <GlobalLayout>
          <AboutComponent />
      </GlobalLayout>
     </div>
  )
};

export default About;
