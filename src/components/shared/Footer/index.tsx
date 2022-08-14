import Link from 'next/link'
import { ReactNode } from 'react'
import { ContactUsForm } from '../../footer/ContactUsForm'
import { SocialLinks } from './../../footer/SocialLinks/index'
import { Subscribe } from './../../footer/Subscribe'
import Logo from '../../../assets/logo.svg'
import Image from 'next/image'
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
        <div className="mx-auto grid max-w-6xl grid-cols-2 py-5 lg:grid-cols-4">
          {/* <FooterLogo /> */}
          <div className="col-span-2 md:col-span-1">
            <Subscribe />
          </div>
          {/* <ContactUs /> */}
          <div className="col-span-2 my-3 px-10 text-left md:col-span-1 lg:mt-0">
            <h6 className="py-2 text-xl uppercase text-primary">
              Latest insight
            </h6>
            <div className="text-sm">
              <div className="font-bold">
                Concept design of Trigan Metaverse has begun!
              </div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              velit dui, fermentum id facilisis sit amet, imperdiet ut est. Ut
              modi itaque ea impedit culpa ex natus expedita. Et cumque ullam ut
              perspiciatis beatae est sint explicabo. read more
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <div className="mx-auto w-48 lg:w-full">
              <Image src={Logo} alt="" />
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1">
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
