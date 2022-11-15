/* eslint-disable @next/next/no-img-element */
import { ReactNode } from 'react'
import { FadeInWhenVisible } from '../../shared/FadeInWhenVisible'
import Image from 'next/image'
import img from '../../../assets/trigan-bg.png'

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
    <div className=" overflow-x-hidden xl:mt-[-120px] 2xl:mt-[-80px]">
      <section id="about" className="px-5">
        <FadeInWhenVisible>
          <div>
            {/* Video Starts */}
            <div className="relative mx-auto w-full opacity-100 md:px-12 lg:px-32 2xl:max-w-7xl">
              {/* <AnimationBlob /> */}
              <div className="aspect-w-16 aspect-h-9 flex justify-center shadow-xl shadow-black">
                <iframe
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  className="object-cover"
                  src="https://www.youtube.com/embed/VY-QKe19p0Y?mode=opaque&amp;rel=0&amp;autohide=1&amp;showinfo=0&amp;wmode=transparent"
                />
              </div>
            </div>
            {/* /* Video Ends */}
            <div className="mx-auto mb-36 max-w-4xl py-5 text-center font-extralight text-slate-100">
              {/*} <h2 className="headingStyle relative mt-20 text-xl text-white md:text-5xl">
                Dream of a better future -->
  </h2> */}
              {/*}     <p className="paragraphStyle relative py-5 text-base md:text-2xl">
                Through our <span className="font-bold">shared</span> values and
                a <span className="font-bold">visionary</span> approach to{' '}
                <span className="font-bold">technology</span>
                <br />
                Trigan is leading change and future proofing{' '}
                <span className="font-bold">innovation</span>.
</p> */}
              <p className="paragraphStyle relative py-2 text-base md:text-xl">
                We develop blockchain technologies to create real-world and
                metaverse spaces defining the future of living.{' '}
              </p>
              <p className="paragraphStyle relative py-2 text-base md:text-xl">
                We aim to create a better world that is unbiased, equal and
                sustainable while abundant with opportunity for everyone,
                regardless of background or personal circumstances.{' '}
              </p>
              <p className="paragraphStyle relative py-2 text-base md:text-xl">
                Powered by our revolutionary blockchain and Trigan Coin, we are
                here to create a better future.{' '}
              </p>
            </div>
          </div>
        </FadeInWhenVisible>
      </section>
      {/* bg-[url('/public/assets/skill_logos/typescript.png')] */}

      <section className=" px-15 relative z-10 flex items-center overflow-hidden py-6 text-white after:absolute after:top-0 after:left-0 after:h-full  after:w-full  after:rounded-full after:content-['']">
        <img
          src="images/trigan-section-bg.jpg"
          alt=""
          className="absolute -z-10 h-full min-w-full rounded-full object-cover"
        />
        <div className="z-20 mx-auto max-w-2xl rounded-full px-5 py-5 text-center text-black xl:max-w-4xl 2xl:max-w-xl">
          <h2 className="headingStyle paragraphStyle text-3xl md:text-5xl">
            We make geo-located places smarter.
          </h2>
          <p className="paragraphStyle py-2 text-lg font-extralight md:py-5 md:text-xl">
            Our technology enables us to tackle big issues globally.
          </p>
          <p className="paragraphStyle py-2 text-lg font-extralight md:py-5 md:text-xl">
            We will empower and enable real-world urban communities everywhere
            while addressing poverty, inequality and deprivation, so that no-one
            is left behind.
          </p>
          <p className="paragraphStyle py-2 text-lg font-extralight md:py-5 md:text-xl">
            We will empower and enable real-world urban communities everywhere
            while addressing poverty, inequality and deprivation, so that no-one
            is left behind.
          </p>
        </div>
      </section>

      <section className="mx-auto flex max-w-6xl items-center px-4 py-36 text-slate-100 2xl:max-w-3xl">
        {/*     <div className="z-20 text-center font-extralight">
          <h2 className="headingStyle text-xl text-white md:text-5xl">
            Corporation have to much influence
            <br />
            over careers and opportunities.
          </h2>
          <p className="paragraphStyle py-2 text-sm md:py-5 md:text-xl">
            Infamous conglomerates for years have been operating unethically
            across the globe utilizing tax havens, cheap labour and
            monopolization at the detriment of small businesses and customers.
          </p>
          <p className="paragraphStyle py-2 text-sm md:py-5 md:text-xl">
            Rising unemployment, loss of job security and a loss of skill and
            innovation is pandemic across areas once thriving with local
            commerce and trade.{' '}
          </p>
          <p className="paragraphStyle py-2 text-sm md:py-5 md:text-xl">
            The shift to online and the ruthless approach of the companies
            leading the space has created huge risk for both communities and
            employees whom are frequently exploited seeing their rights and
            standard of living ever diminished.{' '}
          </p>
          <p className="paragraphStyle py-2 text-sm md:py-5 md:text-xl">
            Web 2.0 centric companies have made a business from converting its
            users into products. Their services are seemingly free, or freemium;
            but at the expense of the customers data and freedom.{' '}
          </p>
        </div>
*/}
        <div className="mx-auto flex items-center">
          <Image className="flex items-center  " src={img} />
        </div>
      </section>
    </div>
  )
}
