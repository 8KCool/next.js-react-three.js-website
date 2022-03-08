import { ReactNode } from 'react'
import { GlobalLayout } from './../components/layouts/GlobalLayout'
import { FaqSection } from './../components/shared/FaqSection'

interface FaqProps {
  children?: ReactNode
}

const Faq: React.FC<FaqProps> = () => {
  return (
    <GlobalLayout>
      <FaqSection />
    </GlobalLayout>
  )
}

export default Faq
