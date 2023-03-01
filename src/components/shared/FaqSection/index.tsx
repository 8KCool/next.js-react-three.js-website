import { ThemeProvider } from 'next-themes'
import { ReactNode } from 'react'
import { FadeInWhenVisible } from '../FadeInWhenVisible'
import { Title } from '../Title'
import { FaqPanel } from './FaqPanel/index'

interface FaqSectionProps {
  children?: ReactNode
}

const FAQS = [
  {
    id: 1,
    title: 'What is Trigan?',
    content:
      'Trigan is a platform that aims to improve urban communities around the world through the use of advanced technology and innovative approaches.',
  },
  {
    id: 2,
    title: 'How does Trigan work?',
    content:
      'Trigan uses a variety of technologies, including blockchain, AI, and VR, to create a more connected, inclusive, and equitable economy for urban communities.',
  },
  {
    id: 3,
    title: 'What benefits does Trigan offer?',
    content:
      "Trigan aims to improve quality of life, increase sustainability, and drive economic development in urban communities.",
  },
  {
    id: 4,
    title:
      'How can I get involved with Trigan?',
    content:
      'You can sign up for early access to Trigan at trigan.org and be a part of something special as we work to create a better world for everyone.',
  },
  {
    id: 5,
    title: 'Is Trigan available in my area?',
    content:
      "Trigan is currently in the development phase and is not yet available in all areas. However, we are working to roll out our platform to as many urban communities as possible.",
  },
  {
    id: 6,
    title: 'Is there a cost to use Trigan?',
    content:
      'There is no cost to use Trigan. Our goal is to create a more equitable and inclusive economy for all.',
  },
  {
    id: 7,
    title: "How can I stay updated on Trigan's progress?",
    content:
      "You can follow us on social media or sign up for our newsletter to stay updated on Trigan's progress and receive the latest news and updates.",
  },
  {
    id: 8,
    title: "Is Trigan secure?",
    content:
      "Yes, Trigan uses advanced security measures to protect your data and ensure the safety and privacy of our users.",
  },
]

const FaqSection: React.FC<FaqSectionProps> = () => {
  return (
   <div className='dark:bg-white'> 
   <ThemeProvider attribute="class" enableSystem={true}> 
    <section id="faq" className="bg-black bg-opacity-30 text-white">
      <div className="text-white">
        <Title classes="border-none " title="Frequently Asked Questions" />
      </div>

      <div className="max-w-5xl pb-5 mx-auto ">
        <FadeInWhenVisible>
          {FAQS.map((faq, index) => {
            return (
              <div className='dark:text-white'> 
              <FaqPanel
                index={index}
                title={faq.title}
                content={faq.content}
                key={faq.id}
              />
              </div>
            )
          })}
        </FadeInWhenVisible>
      </div>
    </section>
    </ThemeProvider>
    </div>
  )
}
export default FaqSection