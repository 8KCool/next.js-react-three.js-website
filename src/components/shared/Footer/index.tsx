import React, { ReactNode } from 'react'
import { ContactUsForm } from '../../footer/ContactUsForm'
import { SocialLinks } from './../../footer/SocialLinks/index'
import { Subscribe } from './../../footer/Subscribe'
import Logo from '../../../assets/logo.svg'
import Image from "next/legacy/image"
import { ContactUsModal } from '../../footer/ContactUsForm/ContactUsModal'
import useEarlyAccessModal from '../../../hooks/useEarlyAccessModal'

interface FooterProps {
  children?: ReactNode
}
const Footer: React.FC<FooterProps> = () => {
  const { modal, setModal } = useEarlyAccessModal()

  return (
    <>
      <footer id="contact" className="w-full text-light drop-shadow-xl">
        {/*  <div className="upper_footer flex flex-col items-center justify-between md:flex-row">


          <div className="centering col-span-2 w-full md:w-auto lg:col-span-1">
            <ContactUsForm />
          </div>
          <div className="centering col-span-2 w-full md:col-span-1 md:w-auto">
            <Subscribe />
          </div>
        </div> */}
        <div className="tail">
          <div
            className="log1 mb-14 flex justify-start"
            style={
              {
                width: '280px',
                height: '180px',
                paddingTop: '40px',
              } as React.CSSProperties
            }
          >
            <Image src={Logo} alt="" objectFit="contain" />
          </div>
          <div
            style={
              {
                padding: ' 0 85px',
                justifyContent: 'space-between',
              } as React.CSSProperties
            }
            className="linksList flex flex-col  space-y-12 xs:mb-20 md:mb-0 md:flex-row md:items-center md:justify-start md:space-x-16"
          >
            <div className="left_links gap-2">
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

              <ContactUsModal
                modal={modal}                
                setModal={setModal} />
                <p
                  className="bounce-out-on-hover hover:cursor-pointer"
                  onClick={() => setModal({open: true, type: 'contact', size: ''})}
                  >
                  Contact Us
                </p>
              {/* <Link href="/privacy-policy" className="bounce-out-on-hover">Privacy</Link>
              <Link href="/terms-conditions" className='bounce-out-on-hover'>Terms</Link>
              <Link href="/faq" className='bounce-out-on-hover'>FAQ</Link>
              <Link href="/blog" className='bounce-out-on-hover'>Blog</Link> */}
              {/* <Link href="/whitepaper">Whitepaper</Link> */}
            </div>
            <div
              style={
                {
                  margin: '0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '60px',
                } as React.CSSProperties
              }
            >
              <SocialLinks />
            </div>
          </div>
          <div
            style={{ padding: '0 0 30px 85px' } as React.CSSProperties}
            className="copy mb-10 xs:mt-3 md:mb-0"
          >
            <p className="mt-4 text-center md:mt-0 md:text-left">
              Copyright &#64; {new Date().getFullYear()} Trigan LTD - Company
              Number SC717595, Registered in Scotland.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
export default Footer