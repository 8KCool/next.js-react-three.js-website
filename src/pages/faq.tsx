import { ReactNode } from 'react'
import { SEO } from '../components/shared/SEO'
import { GlobalLayout } from './../components/layouts/GlobalLayout'
import { FaqSection } from './../components/shared/FaqSection'

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
