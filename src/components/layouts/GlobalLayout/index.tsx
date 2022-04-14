import { ReactNode } from 'react'
import { Banner } from '../../Banner'
import { Footer } from './../../shared/Footer/index'
import { Navbar } from './../../shared/Navbar/index'

interface GlobalLayoutProps {
  children?: ReactNode
}

export const GlobalLayout: React.FC<GlobalLayoutProps> = ({ children }) => {
  return (
    <>
      <Banner />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
