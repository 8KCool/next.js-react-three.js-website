import React from 'react'
import AboutComponent from '../components/about'
import { GlobalLayout } from '../components/layouts/GlobalLayout'

const About = () => {
  return (
    <div>
      <GlobalLayout>
        <AboutComponent />
      </GlobalLayout>
    </div>
  )
};

export default About;
