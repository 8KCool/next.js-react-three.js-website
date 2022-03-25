import Link from 'next/link'
import { ReactNode } from 'react'
import { ContactUs } from '../../footer/ContactUs'
import { ContactUsForm } from '../../footer/ContactUsForm'
import { SocialLinks } from './../../footer/SocialLinks/index'
import { Subscribe } from './../../footer/Subscribe'

interface FooterProps {
  children?: ReactNode
}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <>
      <footer
        id="contact"
        className="w-full bg-gray-700 py-5 px-5 text-light drop-shadow-xl"
      >
        {/* Contact Us Starts */}
        <div className="grid space-y-5 py-5 md:grid-cols-2 lg:grid-cols-4 lg:space-x-10 lg:space-y-0">
          {/* <FooterLogo /> */}

          <ContactUs />
          <Subscribe />
          <div className="md:col-span-2">
            <ContactUsForm />
          </div>
        </div>
        {/* Contact Us Ends */}

        {/* divider starts */}
        <div className="border-b border-grey" />
        {/* divider ends */}

        {/* Footer Starts */}
        <div className="px-5 py-2">
          <SocialLinks />
          <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-between">
            <div className="flex justify-center space-x-5 md:justify-start">
              <Link href="/privacy-policy">Privacy</Link>
              <Link href="/terms-conditions">Terms</Link>
              <Link href="/faq">FAQ</Link>
            </div>
            <p className="text-center md:text-left">
              Copyright &#64; {new Date().getFullYear()} Trigan LTD - Company
              Number SC717595, Registered in Scotland.
            </p>
          </div>
        </div>
        {/* Footer ends */}
      </footer>
    </>
  )
}
