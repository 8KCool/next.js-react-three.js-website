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
        className=" w-full bg-gray-900 py-5 px-5 text-light drop-shadow-xl"
      >
        {/* Contact Us Starts */}
        <div className="mx-auto grid max-w-6xl py-5 md:grid-cols-2 lg:grid-cols-4">
          {/* <FooterLogo /> */}

          <Subscribe />
          <ContactUs />
          <div className="md:col-span-2">
            <ContactUsForm />
          </div>
        </div>
        {/* Contact Us Ends */}

        {/* divider starts */}
        <div className="border-b border-grey" />
        {/* divider ends */}

        {/* Footer Starts */}
        <div className="mx-auto max-w-6xl px-10 py-2">
          <SocialLinks />
          <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-between">
            <div className="flex justify-center space-x-5 md:justify-start">
              <Link href="/privacy-policy">Privacy</Link>
              <Link href="/terms-conditions">Terms</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/blog">Blog</Link>
              {/* <Link href="/whitepaper">Whitepaper</Link> */}
            </div>
            <p className="text-left">
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
