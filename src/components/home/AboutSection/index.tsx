import Image from 'next/image'
import { ReactNode } from 'react'
import { FadeInWhenVisible } from '../../shared/FadeInWhenVisible'
import { Title } from './../../shared/Title'

interface AboutSectionProps {
  children?: ReactNode
}

const ABOUTS = [
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
]

export const AboutSection: React.FC<AboutSectionProps> = () => {
  return (
    <section id="about" className="px-5">
      <Title title="About Us" />

      {ABOUTS.map((about, i) => {
        return (
          <FadeInWhenVisible key={about.id}>
            <div
              className={`my-5 flex w-full flex-col items-center justify-center space-y-2 sm:my-0 sm:flex-row md:space-y-5 ${
                about.desc
                  ? 'h-[500px] sm:h-[600px] md:h-[800px] lg:h-[500px]'
                  : 'my-5 h-48 sm:h-96'
              }`}
            >
              <div className="relative flex h-32 w-full sm:h-56 sm:w-1/4">
                <Image
                  layout="fill"
                  src={about.img}
                  className="dark:filter-lighter-gray filter-secondary sm:mx-0 sm:ml-auto"
                  alt="image"
                />
              </div>
              <div className="flex h-full w-full flex-col items-center justify-center space-y-5 sm:w-2/3 sm:items-end">
                <h6
                  className={`text-light-gray mx-auto -mt-5 w-full cursor-default text-center text-xl tracking-wide sm:text-left md:w-3/4 md:text-5xl ${
                    i === 0 || i === ABOUTS.length - 1
                      ? 'text-2xl md:text-6xl'
                      : ''
                  }`}
                >
                  {about.title}
                </h6>
                <p
                  v-if="about.desc"
                  className=" text-light-gray mx-auto -mt-5 w-full text-justify text-sm font-extralight tracking-wide md:mt-0 md:w-3/4 md:text-xl"
                >
                  {about.desc}
                </p>
              </div>
            </div>
          </FadeInWhenVisible>
        )
      })}
    </section>
  )
}
