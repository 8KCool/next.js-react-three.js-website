import { ReactNode } from 'react'
import { SEO } from '../components/shared/SEO'
import { GlobalLayout } from './../components/layouts/GlobalLayout'
import { FaqSection } from './../components/shared/FaqSection'
import { ThemeProvider } from 'next-themes'

interface FaqProps {
  children?: ReactNode
}

const Faq: React.FC<FaqProps> = () => {
  return (
    <ThemeProvider attribute="class" enableSystem={true}>
      <>
        <SEO title="FAQ" description="Trigan Frequently Asked Question" />
        <GlobalLayout>
          <FaqSection />
        </GlobalLayout>
      </>
    </ThemeProvider>
  )
}

export default Faq
