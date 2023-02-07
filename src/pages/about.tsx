import React from 'react'
import AboutComponent from '../components/about'
import { GlobalLayout } from '../components/layouts/GlobalLayout'
import { SEO } from '../components/shared/SEO'

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
