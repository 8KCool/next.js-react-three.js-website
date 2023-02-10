import { ThemeProvider } from 'next-themes'
import { ReactNode } from 'react'
import React, { lazy, Suspense } from 'react'

 import Footer from './../../shared/Footer/index'
 import Navbar from './../../shared/Navbar/index'

interface GlobalLayoutProps {
  children?: ReactNode
  showBanner?: boolean
}

const GlobalLayout: React.FC<GlobalLayoutProps> = ({ children }) => {
  return (
    <>
        <Navbar />
      <main>{children}</main>
        <Footer />
    </>
  )
}
export default GlobalLayout
