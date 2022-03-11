import { ReactNode } from 'react'
import { Footer } from './../../shared/Footer/index'
import { Navbar } from './../../shared/Navbar/index'

interface GlobalLayoutProps {
  children?: ReactNode
}

export const GlobalLayout: React.FC<GlobalLayoutProps> = ({ children }) => {
  return (
    <div className="relative">
      <video
        className="fixed -z-10 h-screen w-full object-fill opacity-20"
        width="618"
        height="347"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/trigan-bg-720.mp4" type="video/mp4" />
      </video>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
