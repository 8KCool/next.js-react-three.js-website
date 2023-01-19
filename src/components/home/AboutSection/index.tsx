import { ReactNode, useEffect, useState } from 'react'
import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import AOS from 'aos'
import 'aos/dist/aos.css'
interface AboutSectionProps {
  children?: ReactNode
}
const boxVariant = {
  visible: { opacity: 1, scale: 2, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
}

export const AboutSection: React.FC<AboutSectionProps> = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      control
        .start('visible')
        .then((r) => { })
        .catch((e) => { })
    } else {
      control
        .start('hidden')
        .then((r) => { })
        .catch((e) => { })
    }
    AOS.init({
      offset: 150,
      duration: 1000,
    })
  }, [control, inView])
  return (
    <div
      data-aos="zoom-in-up"
      className=" overflow-x-hidden xl:mt-[-120px] 2xl:mt-[-80px]"
    >
      <section
        data-aos="fade-up"
        className=" "
      >
        <div>
          <h2 className="abo_h2">We make geo-located <span style={{"color":"#A855F7"}}>places smarter</span></h2>
          <p className="abo_p">Our technology enables us to tackle big issues globally. 
          We will empower and enable real-world urban communities everywhere while addressing
          poverty, inequality and deprivation, so that no-one is left behind.</p>
          <img
            loading='lazy'
            src="images/trigan-section-bg.jpg"
            alt=""
            className="h-full min-w-full"
          />
        </div>
        <div
          className="object-fit absolute -z-10 h-full  min-w-full"
          style={{ background: 'black' }}
        />
        <div
        data-aos="fade-up">
          <h2 className="abo_h2l">Trigan: elevating cities, <span style={{"color":"#A855F7"}}>today and tomorrow</span></h2>   
             <p className="abo_pl">
          <br></br>          <br></br>
Our platform is powered by blockchain technology and Trigan Citizenship, which work together to eliminate poverty and deprivation, combat corruption, and reduce inequality. We have developed a novel consensus mechanism that is tailored for real-world environments, allowing us to tackle larger problems than would be possible with current technologies.
<br></br>          <br></br>
Our platform also rewards those who contribute to the well-being of others, rather than just those who are able to accumulate wealth. This helps to create a more balanced and inclusive society where everyone has a chance to succeed.
          </p>
        </div>

      
        <div>
          <h2 className="abo_h2">Urban Blockchain: A <span style={{"color":"#A855F7"}}>Better Future</span></h2>
          <br></br>          <br></br>
          <p className="abo_p">We're excited to introduce our revolutionary first urban blockchain. This cutting-edge technology is designed to empower and enable real-world urban communities everywhere to govern and manage their resources in a fair, transparent, and decentralised way.
          <br></br>
          </p> 
</div>
<div
data-aos="fade-up"
        className="">
          <h2 className="abo_h2l">Trigan: the community-centered solution <span style={{"color":"#A855F7"}}>for cities</span></h2>   
             <p className="abo_pl">
          <br></br>          <br></br>
          Providing a decentralised platform gives power back to the community, allowing them to govern and manage their resources. This leads to a more equitable distribution of wealth and opportunities for all community members.
<br></br>          <br></br>
Our technology also incorporates environmental sustainability, ensuring that the planet’s well-being is considered.</p>
        </div>

      </section>

      {/* <HorizontalSlideShow /> */}
      {/* <AccordionComp /> */}
      <section className="Imgpart_center mx-auto flex max-w-6xl items-center px-4 py-36 text-slate-100 2xl:max-w-3xl">
        <div className="paragraphStyle py-2 text-lg font-extralight md:py-5 md:text-xl">
          <p className="content_center headingStyle relative mt-20 text-xl text-white md:text-5xl">
            We have the solution.
          </p>
          <br></br>
          <div className="h-46 relative">
            <img
              loading='lazy'
              data-aos="fade-right"
              data-aos-offset="50"
              data-aos-anchor-placement="bottom-bottom"
              className="leftyside !absolute inset-x-0 right-8 m-auto w-64 !overflow-hidden pr-10 md:w-[455px]"
              src="/logo-parts/logo-left.png"
            />
            <img
              loading='lazy'
              data-aos="fade-left"
              data-aos-anchor-placement="bottom-bottom"
              className="rightyside !absolute inset-x-0 left-8 m-auto w-64 !overflow-hidden md:w-[455px]"
              src="/logo-parts/logo-right.png"
            />
            <p
              data-aos="zoom-in"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-offset="200"
              className="content_center absolute inset-x-0 top-[5rem] m-auto !overflow-hidden pl-2 text-center text-lg font-bold text-white md:top-[9.5rem] md:text-3xl"
            >
              LET’S BUILD A <br />
              BETTER FUTURE <br />
              TOGETHER
            </p>
            <img
              loading='lazy'
              data-aos="fade-down"
              data-aos-anchor-placement="bottom-bottom"
              className="bottomside relative inset-x-0 top-4 m-auto w-64 !overflow-hidden md:w-[455px]"
              src="/logo-parts/logo-bottom.png"
            />
            <div className="p-6"></div>
          </div>
        </div>
      </section>
    </div>
  )
}
