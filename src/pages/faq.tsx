import { ReactNode } from 'react'
import { SEO } from '../components/shared/SEO'
import { GlobalLayout } from './../components/layouts/GlobalLayout'
import { FaqSection } from './../components/shared/FaqSection'

interface FaqProps {
  children?: ReactNode
}

const Faq: React.FC<FaqProps> = () => {
  return (
    <>
      <SEO title="FAQ" description="Trigan Frequently Asked Question" />
      <GlobalLayout>
        <FaqSection />
      </GlobalLayout>
    </>
  )
}

export default Faq
