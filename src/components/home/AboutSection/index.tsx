import { ReactNode, useEffect, useState } from 'react'
import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { GetStaticProps } from 'next'
import { api } from '../../../util/api'
import React, { lazy, Suspense } from 'react'

const HashtagHeader = lazy(() => import('../HashtagHeader'))
const BlogCard = lazy(() => import('../HeroSection/BlogCard'))


interface AboutSectionProps {
  children?: ReactNode
}
const boxVariant = {
  visible: { opacity: 1, scale: 2, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
}
const blog = {
  id: 1,
  name: 'name',
  des: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content...',
  src: 'images/blog-1.jpg',
  date: '12/12/2020',
  link: 'https://www.google.com/',


};

const AboutSection: React.FC<AboutSectionProps> = () => {
    const control = useAnimation();
    const [ref, inView] = useInView();
  
    useEffect(() => {
      AOS.init({
        offset: 150,
        duration: 1000,
      });
  
      if (inView) {
        control.start('visible').catch(() => {});
      } else {
        control.start('hidden').catch(() => {});
      }
    }, [control, inView]);
  return (
    <div
      data-aos="zoom-in-up"
      className=" overflow-hidden xl:mt-[-120px] 2xl:mt-[-80px]"
    >
      <section data-aos="fade-up" className="">
        <div>
          <h2 className="abo_h2 dark:text-black">    
            Unlocking the Potential{' '}
            <span style={{ color: '#A855F7' }}>of places, everywhere</span>
          </h2>
          <p className="abo_p dark:text-black">
            Our technology tackles global issues, empowering communities
            worldwide to address poverty, inequality and deprivation, leaving no
            one behind.
          </p>
          {/* <img
            loading="lazy"
            src="images/trigan-section-bg.jpg"
            alt=""
            className="h-full min-w-full px-20"
          /> */}
        </div>
        <div
          className="object-fit absolute -z-10 h-full min-w-full"
          // style={{ background: 'black' }}
        />
        <div className="mx-auto mt-8 grid grid-cols-1 px-6 sm:grid-cols-1 sm:px-8 md:grid-cols-2 md:px-12 xl:grid-cols-2 dark:bg-white">
          <div data-aos="fade-up">
            <h2 className="abo_h2l dark:text-black">Elevating Cities</h2>
            <h3 className="abo_h3l">today and tomorrow</h3>
            <p className="abo_p dark:text-black">
              Our platform gives communities control over their own resources
              and decision-making through a decentralised system. With our
              technology, regular people can have a voice in how their community
              is run and access new funding and resources.
            </p>
          </div>

          <div>
            <h2 className="abo_h2 dark:text-black">Smart Cities</h2>
            <h3 className="abo_h3l">the blockchain way</h3>
            <p className="abo_p dark:text-black">
              Our urban blockchain technology changes the way cities and towns
              are run. By allowing communities to govern and manage resources in
              a fair, transparent and decentralised manner, we're creating a
              more equitable distribution of wealth and opportunities for all.
            </p>
          </div>

          <div>
            <h2 className="abo_h2l dark:text-black">Sustainability</h2>
            <h3 className="abo_h3l">preserving the planet</h3>
            <p className="abo_p dark:text-black">
              Our technology is designed with sustainability in mind. We work to
              reduce environmental impact and promote sustainable practices
              within communities, preserving the planet for future generations.
            </p>
          </div>

          <div data-aos="fade-up" className="">
            <h2 className="abo_h2l dark:text-black">Trigan</h2>
            <h3 className="abo_h3l">solution for cities</h3>
            <p className="abo_p dark:text-black">
              Giving power back to the community through decentralisation.
              Resulting in a fair distribution of wealth and opportunities for
              all.
            </p>
          </div>
        </div>
      </section>
      <h2 className="abo_h2 dark:text-black dark:bg-white">
        Latest <span style={{ color: '#A855F7' }}>Blog</span>
      </h2>
      <Suspense fallback={null} >
      <div className="m-auto grid  max-w-[1300px] justify-between gap-4 pt-8 sm:grid-cols-2 md:flex md:px-2 lg:grid-cols-3 xl:grid-cols-4 dark:text-black dark:bg-white">
        <BlogCard blog={blog} />
        <BlogCard blog={blog} />
        <BlogCard blog={blog} />
      </div>
      </Suspense>


      {/*}
      <section>
    <h2 className="abo_h2">Building a Smarter World</h2>
    <p className="abo_p">Our solution tackles global issues, empowering communities worldwide to address poverty, inequality, and deprivation, leaving no one behind. We use cutting-edge technology to create a more equitable society where everyone has a fair shot at success.</p>

    <h2 className="abo_h2l">Elevating Cities, Today and Tomorrow</h2>   
<p className="abo_pl">We're solving society's fundamental challenges, tackling poverty, corruption, and inequality with our unique consensus mechanism for real-world environments. By rewarding positive impact, we're fostering a more balanced and inclusive society.</p>

<h2 className="abo_h2">Decentralized Power for Urban Communities</h2>
<p className="abo_p">Our urban blockchain is revolutionizing the way communities govern and manage resources. By providing a decentralized platform, we're giving power back to the people, leading to a fairer distribution of wealth and opportunities for all.</p> 
<h2 className="abo_h2l">Building Sustainable Communities</h2>
<p className="abo_pl">Our technology is designed for urban environments and is aligned with environmental sustainability. We're creating sustainable solutions for towns and cities, ensuring the well-being of the planet and its inhabitants.</p>
 <h2 className="abo_h2l">Empowering Local Economies</h2>
<p className="abo_pl">Our platform also creates new economic opportunities, by creating a new kind of digital economy that is more human-centric, caring, and successful. It is tailored to real-world problems and can operate in any organization or society.</p>

  </section> */}
      {/* <HorizontalSlideShow /> */}
      {/* <AccordionComp /> */}
      <section className="Imgpart_center mx-auto flex max-w-6xl items-center px-4 py-36 text-slate-100 2xl:max-w-3xl">
        <div className="paragraphStyle py-2 text-lg font-extralight md:py-5 md:text-xl">
          <p className="content_center headingStyle relative mt-20 text-xl text-white md:text-5xl font-bold dark:text-purple-500">
            We have the solution.
          </p>
          <br></br>
          {/*    <div className="h-46 relative">
            <img
              loading="lazy"
              data-aos="fade-right"
              data-aos-offset="50"
              data-aos-anchor-placement="bottom-bottom"
              className="leftyside !absolute inset-x-0 right-8 m-auto w-64 !overflow-hidden pr-10 md:w-[455px]"
              src="/logo-parts/logo-left.png"
            />
            <img
              loading="lazy"
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
              loading="lazy"
              data-aos="fade-down"
              data-aos-anchor-placement="bottom-bottom"
              className="bottomside relative inset-x-0 top-4 m-auto w-64 !overflow-hidden md:w-[455px]"
              src="/logo-parts/logo-bottom.png"
            />
<div className="p-6"></div> 
          </div> */}
        </div>
      </section>
      <section className="">
        <div className="flex w-full flex-col items-center justify-center pb-12">
          <div className="hidden w-4/12 md:block">
            <div className=" relative">
              <img
                loading="lazy"
                data-aos="fade-right"
                data-aos-offset="50"
                data-aos-anchor-placement="bottom-bottom"
                className="leftyside !absolute inset-x-0 right-8 m-auto w-64 !overflow-hidden pr-10 md:w-[455px]"
                src="/logo-parts/logo-left.png"
              />
              <img
                loading="lazy"
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
                loading="lazy"
                data-aos="fade-down"
                data-aos-anchor-placement="bottom-bottom"
                className="bottomside relative inset-x-0 top-4 m-auto w-64 !overflow-hidden md:w-[455px]"
                src="/logo-parts/logo-bottom.png"
              />
            </div>
            <div className="absolute bottom-40 z-[0] h-[10%] w-[100%] bg-[#A855F7] blur-[300px]" />
          </div>
          <div className="px-8 md:w-1/2 md:px-16">
            <form className="flex flex-col gap-4">
              <h2 className="text-[30px] dark:text-black">Sign up now for early access</h2>
              <input
                type="text"
                placeholder="your name"
                className="w-full rounded-sm border border-[#B4BEC8] bg-transparent p-4 focus:border-[#B4BEC8] focus:ring-[#B4BEC8]"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-sm border border-[#B4BEC8] bg-transparent p-4 focus:border-[#B4BEC8] focus:ring-[#B4BEC8]"
              />
              <input
                type="text"
                placeholder="Country"
                className="w-full  rounded-sm border border-[#B4BEC8] bg-transparent p-4 focus:border-[#B4BEC8] focus:ring-[#B4BEC8]"
              />
              <button className="rounded-xl bg-[#DC2626] py-2 text-white">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  let blogs = []
  try {
    const { data } = await api().get('/blog')
    blogs = data.Data
    console.log(blogs)
  } catch (err) {
    console.log(err)
  }
  return {
    props: {
      blogs,
    },
    revalidate: false, // Next.js will never attempt to re-generate the page
  }
}
export default AboutSection