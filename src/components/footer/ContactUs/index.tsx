import { ReactNode } from 'react'
import { HiOutlineMail } from 'react-icons/hi'
import { MdContacts } from 'react-icons/md'
import { ContactUsCard } from './../ContactUsCard/index'

interface ContactUsProps {
  children?: ReactNode
}

const SECTIONS = [
  {
    icon: <HiOutlineMail />,
    content: 'contact@trigan.org',
  },
  {
    icon: <MdContacts />,
    content: 'Trigan LTD, 9 Watling Street, Dumfries, DG1 1HF',
  },
]

export const ContactUs: React.FC<ContactUsProps> = () => {
  return (
    <div className="z-20 my-3 text-center lg:mt-0 lg:text-left">
      <h6 className="py-2 text-xl font-semibold sm:text-2xl">Contact Us</h6>
      <div className="flex flex-col items-center lg:items-start">
        {/* <div v-for="(section, index) in sections" :key="index">
        <ContactUsCard :icon-name="section.iconName" :content="section.content"/>
      </div> */}
        {SECTIONS.map((section) => {
          return (
            <ContactUsCard
              content={section.content}
              icon={section.icon}
              key={section.content}
            />
          )
        })}
      </div>
    </div>
  )
}
