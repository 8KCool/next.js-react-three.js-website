import { ReactNode } from 'react'
import { Banner } from '../../Banner'
import { FloatingActionButton } from '../../shared/FloatingActionButton'
import { Footer } from './../../shared/Footer/index'
import { Navbar } from './../../shared/Navbar/index'

interface GlobalLayoutProps {
  children?: ReactNode
  showBanner?: boolean
}

export const GlobalLayout: React.FC<GlobalLayoutProps> = ({
  children,
  showBanner = true,
}) => {
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
