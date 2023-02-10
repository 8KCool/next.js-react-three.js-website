import { ReactNode } from 'react'
import { SEO } from '../components/shared/SEO'
import  GlobalLayout  from './../components/layouts/GlobalLayout'
import { WhitepaperSection } from './../components/shared/Whitepaper'
import { ThemeProvider } from 'next-themes'

interface WhitepaperProps {
  children?: ReactNode
}

const Whitepaper: React.FC<WhitepaperProps> = () => {
  return (
    <ThemeProvider attribute="class" enableSystem={true}>
      <>
        <SEO title="Whitepaper" description="Trigan Whitepaper" />
        <GlobalLayout>
          <WhitepaperSection />
        </GlobalLayout>
      </>
    </ThemeProvider>
  )
}

export default Whitepaper
