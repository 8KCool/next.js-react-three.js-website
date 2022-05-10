import { ReactNode } from 'react'
import { SEO } from '../components/shared/SEO'
import { GlobalLayout } from './../components/layouts/GlobalLayout'
import { WhitepaperSection } from './../components/shared/Whitepaper'

interface WhitepaperProps {
  children?: ReactNode
}

const Whitepaper: React.FC<WhitepaperProps> = () => {
  return (
    <>
      <SEO title="Whitepaper" description="Trigan Whitepaper" />
      <GlobalLayout>
        <WhitepaperSection />
      </GlobalLayout>
    </>
  )
}

export default Whitepaper
