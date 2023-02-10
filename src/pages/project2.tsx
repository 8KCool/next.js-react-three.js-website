import React, { lazy, Suspense } from 'react'
import GlobalLayout from '../components/layouts/GlobalLayout';
// import HorizontalSlideShow from '../HeroSection/HorizontalSlideShow'
import HorizontalSlideShow from '../components/home/HeroSection/HorizontalSlideShow'
import { SEO } from '../components/shared/SEO'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import ProjectContent from '../components/project/projectContent'

const newpage = () => {
  return (
    <div>
      
      <SEO title="Project" description="Trigan Project" />
      <div className="relative overflow-x-hidden bg-black bg-opacity-75">
        <GlobalLayout>
        <ProjectContent />
         
          <HorizontalSlideShow />
        </GlobalLayout>
      </div>
    </div>
  )
}

export default newpage
