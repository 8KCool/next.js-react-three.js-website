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
    <div>
      <section id="about" className="px-5">
        <FadeInWhenVisible>
          <div>
            {/* Video Starts */}
            <div className="relative p-1 opacity-100 md:p-10 lg:p-20 ">
              {/* <AnimationBlob /> */}
              <div className="aspect-w-16 aspect-h-9 flex justify-center shadow-xl shadow-black">
                <iframe
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  className="object-cover"
                  src="https://www.youtube.com/embed/YYAZ1mnz3bM?mode=opaque&amp;rel=0&amp;autohide=1&amp;showinfo=0&amp;wmode=transparent"
                />
              </div>
            </div>
            {/* /* Video Ends */}
            <div className="text-center">
              <h2 className="text-5xl text-secondary">Trigan shares a dream</h2>
              <p className="py-5 text-xl">
                Through our shared values and a visionary approach to technology
                <br />
                Trigan is leading change and future proofing innovation.
              </p>
              <p className="py-5 text-xl">
                Tech forward and design thinking we develop blockchain, crypto
                and metaverse spaces that define the future of living.{' '}
              </p>
              <p className="py-5 text-xl">
                We aim to create a better world that is unbiased, equal and
                sustainable while abundant with opportunity.{' '}
              </p>
              <p className="py-5 text-xl">
                Powered by our revolutionary blockchain and Trigan Coin, we are
                here to create a better future.{' '}
              </p>
            </div>
          </div>
        </FadeInWhenVisible>
      </section>

      <section className="flex h-screen items-center bg-primary bg-opacity-70 text-white">
        <img
          src="images/trigan-happy-kids----will-replace-with-original.jpg"
          className="absolute -z-10 h-screen w-auto min-w-full object-fill"
        />
        <div className="text-center">
          <h2 className="text-5xl ">
            We were promised
            <br />a better future.
          </h2>
          <p className="py-5 text-xl">
            We are living in the age of technology, yet while many positive
            impacts are felt we are living in a period of unparalleled
            adversity, conflict, social and environmental turmoil.
          </p>
          <p className="py-5 text-xl">
            Wage disparagy, falling living standards, disease and mental health
            conditions are compromising life the world over.
          </p>
          <p className="py-5 text-xl">
            Inequality is increasing and the gap between the rich and the poor
            is ever widening. While towns and cities are becoming smarter, the
            people whom they are built around are often left by the wayside.
          </p>
        </div>
      </section>

      <section className="flex h-screen items-center">
        <div className="text-center">
          <h2 className="text-5xl text-secondary">
            Corporation have to much influence
            <br />
            over careers and opportunities.
          </h2>
          <p className="py-5 text-xl">
            Infamous conglomerates for years have been operating unethically
            across the globe utilizing tax havens, cheap labour and
            monopolization at the detriment of small businesses and customers.
          </p>
          <p className="py-5 text-xl">
            Rising unemployment, loss of job security and a loss of skill and
            innovation is pandemic across areas once thriving with local
            commerce and trade.{' '}
          </p>
          <p className="py-5 text-xl">
            The shift to online and the ruthless approach of the companies
            leading the space has created huge risk for both communities and
            employees whom are frequently exploited seeing their rights and
            standard of living ever diminished.{' '}
          </p>
          <p className="py-5 text-xl">
            Web 2.0 centric companies have made a business from converting its
            users into products. Their services are seemingly free, or freemium;
            but at the expense of the customers data and freedom.{' '}
          </p>
        </div>
      </section>
    </div>
  )
}
