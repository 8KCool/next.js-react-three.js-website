import { ReactNode } from 'react'
import { Footer } from './../../shared/Footer/index'
import { Navbar } from './../../shared/Navbar/index'

interface GlobalLayoutProps {
  children?: ReactNode
  showBanner?: boolean
}

export const GlobalLayout: React.FC<GlobalLayoutProps> = ({ children }) => {
  return (
    <>
      {/* {showBanner && <Banner />}
      <FloatingActionButton /> */}
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
