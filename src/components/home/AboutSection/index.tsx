import Image from 'next/image'
import { ReactNode } from 'react'
import { FadeInWhenVisible } from '../../shared/FadeInWhenVisible'
import { Title } from './../../shared/Title'

interface AboutSectionProps {
  children?: ReactNode
}

/* const ABOUTS = [
  {
    id: 1,
    title: 'We at Trigan share a dream.',
    desc: '',
    img: '/images/R&D.svg',
  },
  {
    id: 2,
    title: 'As children, we were promised a better future.',
    desc: 'We are living in a technological golden age, yet live busier, more difficult lives than our recent ancestors. Loneliness, depression and other related mental health conditions are compromising our general health and wellbeing. People in some first world countries are forced to compete on a day to day basis just to be able to survive, without falling into poverty or homelessness. Inequality is increasing and the gap between the rich and the poor is ever widening. While towns and cities are becoming smarter, the people who live in them are often forgotten',
    img: '/images/future.svg',
  },
  {
    id: 3,
    title:
      'Mega corporations have huge influence over world-wide jobs and opportunities.',
    desc: 'Famous online e-commerce businesses have an unfair advantage over traditional businesses which have higher staff levels and costs. They can therefore effectively force these employers out of business. Following this, unemployment could increase in areas affected by this. These people, forced out of their jobs due to unfair business practices, could then become reliant on the newly dominant e-commerce based business for potential jobs, putting them in a position where they can be exploited with fewer rights than before. The surviving Web 2.0 centric companies have made a business from converting users into products. Their services are mostly free, or freemium; but you don’t own your own data',
    img: '/images/corporation.svg',
  },
  {
    id: 4,
    title: 'Our health, our environment… our very future is at serious risk',
    desc: '',
    img: '/images/health.svg',
  },
  {
    id: 5,
    title: 'We have the solution.',
    desc: '',
    img: '/images/solution.svg',
  },
] */

export const AboutSection: React.FC<AboutSectionProps> = () => {
  return (
    <section id="about" className="px-5">
      <FadeInWhenVisible>
        <div>
          {/* Video Starts */}
          <div className="relative p-1 opacity-100 md:p-10 lg:p-20">
            {/* <AnimationBlob /> */}
            <div className="aspect-w-16 aspect-h-9 flex justify-center">
              <iframe
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                className="object-cover"
                src="https://www.youtube.com/embed/YYAZ1mnz3bM?mode=opaque&amp;rel=0&amp;autohide=1&amp;showinfo=0&amp;wmode=transparent"
              />
            </div>
          </div>
          {/* /* Video Ends */}
        </div>
      </FadeInWhenVisible>
    </section>
  )
}
