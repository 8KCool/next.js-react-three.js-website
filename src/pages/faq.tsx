import { ReactNode } from 'react'
import { SEO } from '../components/shared/SEO'
import React, { lazy, Suspense } from 'react'
const GlobalLayout = lazy(() => import('../components/layouts/GlobalLayout'))
const FaqSection = lazy(() => import('./../components/shared/FaqSection/index'))

interface FaqProps {
  children?: ReactNode
}

const Faq: React.FC<FaqProps> = () => {
  return (
   <div className='dark:bg-white dark:text-black'> 
        <SEO title="FAQ" description="Trigan Frequently Asked Question" />
        <GlobalLayout>
          <FaqSection />
        </GlobalLayout>
    </div>
  )
}

export default Faq
