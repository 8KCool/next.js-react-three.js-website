import React, { ReactNode } from 'react'
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
        className="mt-20 w-full border-t border-white bg-black py-5 px-5 text-light drop-shadow-xl"
      >
        {/* Contact Us Starts */}
        <div className="flex flex-col items-center justify-between md:flex-row lg:justify-around ">
          {/* <FooterLogo /> */}
          <div className="col-span-2 w-full md:col-span-1 md:w-auto">
            <Subscribe />
          </div>
          {/* <ContactUs /> */}
          {/* <div className="col-span-2 my-3 px-10 text-left md:col-span-1 lg:mt-0">
<h6 className="py-2 text-xl uppercase text-[#DCDCDC]">
Latest insight
</h6>
<div className="text-sm text-white">
<div className="font-bold">
Concept design of Trigan Metaverse has begun!
</div>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
velit dui, fermentum id facilisis sit amet, imperdiet ut est. Ut
modi itaque ea impedit culpa ex natus expedita. Et cumque ullam ut
perspiciatis beatae est sint explicabo. read more
</div>
</div> */}

          <div className="col-span-2 w-full md:w-auto lg:col-span-1">
            <ContactUsForm />
          </div>
        </div>
        {/* Contact Us Ends */}

        {/* divider starts */}
        {/* <div className="border-b border-grey" /> */}
        {/* divider ends */}

        {/* Footer Starts */}

        <div className="container mx-auto">
          <div className=" mb-8 flex justify-start">
            <Image src={Logo} alt="" objectFit="contain" height={96} />
          </div>
          <div className="flex flex-col justify-center space-y-12 xs:mb-20 md:mb-0 md:flex-row md:items-baseline md:justify-start md:space-x-16">
            <a
              href="/privacy-policy"
              className="bounce-out-on-hover"
              target={'_blank'}
            >
              Privacy
            </a>
            <a
              href="/terms-conditions"
              className="bounce-out-on-hover"
              target={'_blank'}
            >
              Terms
            </a>
            <a href="/faq" className="bounce-out-on-hover" target={'_blank'}>
              FAQ
            </a>
            <a
              href="/blog"
              className="bounce-out-on-hover mb-8"
              target={'_blank'}
            >
              Blog
            </a>
          </div>
          {/* <Link href="/privacy-policy" className="bounce-out-on-hover">Privacy</Link>
<Link href="/terms-conditions" className='bounce-out-on-hover'>Terms</Link>
<Link href="/faq" className='bounce-out-on-hover'>FAQ</Link>
<Link href="/blog" className='bounce-out-on-hover'>Blog</Link> */}
          {/* <Link href="/whitepaper">Whitepaper</Link> */}
          <div className="mb-12 mt-0 flex h-2 justify-end">
            <SocialLinks />
          </div>
          <div className="mb-10 xs:mt-20 md:mb-0">
            <p className="mt-4 text-center md:mt-0 md:text-left">
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
