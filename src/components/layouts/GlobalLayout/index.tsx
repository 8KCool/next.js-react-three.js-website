import { ThemeProvider } from 'next-themes'
import { ReactNode } from 'react'
import React, { lazy, Suspense } from 'react'

const Footer = lazy(() => import('./../../shared/Footer/index'))
const Navbar = lazy(() => import('./../../shared/Navbar/index'))

interface GlobalLayoutProps {
  children?: ReactNode
  showBanner?: boolean
}

const GlobalLayout: React.FC<GlobalLayoutProps> = ({ children }) => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
      </Suspense>
      <main>{children}</main>
      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </>
  )
}
export default GlobalLayout
