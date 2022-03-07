import Link from 'next/link'
import { ReactNode } from 'react'
import { ContactUs } from '../../footer/ContactUs'
import { SignupForm } from '../../footer/SignupForm'
import { FooterLogo } from './../../footer/FooterLogo'
import { SocialLinks } from './../../footer/SocialLinks/index'

interface FooterProps {
  children?: ReactNode
}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <>
      <footer id="contact" className="relative">
        <div className="fixed bottom-0 left-0 w-full bg-gray-700 py-5 px-5 text-light drop-shadow-xl">
          {/* Contact Us Starts */}
          <div className="z-20 grid space-y-5 py-5 md:grid-cols-2 lg:grid-cols-4 lg:space-x-10 lg:space-y-0">
            <FooterLogo />
            <ContactUs />
            <div className="md:col-span-2">
              <SignupForm />
            </div>
          </div>
          {/* Contact Us Ends */}

          {/* divider starts */}
          <div className="border border-grey" />
          {/* divider ends */}

          {/* Footer Starts */}
          <div className="px-5 py-2">
            <SocialLinks />
            <div className="z-20 flex flex-col items-center justify-center lg:flex-row lg:justify-between">
              <div className="z-20 flex justify-center space-x-5 md:justify-start">
                <Link href="/privacy">Privacy</Link>
                <Link href="/terms">Terms</Link>
                <Link href="/faq">FAQ</Link>
              </div>
              <p className="z-20 text-center md:text-left">
                Copyright &#64; {new Date().getFullYear()} Trigan LTD - Company
                Number SC717595, Registered in Scotland.
              </p>
            </div>
          </div>
          {/* Footer ends */}
        </div>
      </footer>
    </>
  )
}
