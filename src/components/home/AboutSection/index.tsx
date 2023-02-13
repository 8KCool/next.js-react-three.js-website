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
  name: 'name',
  des: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content...'
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
      <HashtagHeader text="#OurTarget" position="left" />
      <section data-aos="fade-up" className="">
        <div className=" w-[90%] m-auto">
          <div className="flex flex-col m-auto mb-10 mt-10 w-[100%] max-[600px]:text-center">
            <h2 className="dark:text-black text-4xl flex justify-center max-[600px]:text-[28px]">
              Unlocking the Potential {" "}
            </h2>
              <h2 className="mt-2 text-4xl flex justify-center max-[600px]:text-[28px]" style={{ color: '#A855F7' }}>
                of places, everywhere
              </h2>
          </div>
          
          <img
            loading="lazy"
            src="images/trigan-section-bg.jpg"
            alt=""
            className="w-[95%] min-w-[300px] min-h-[200px] flex justify-center m-auto "
          />
          <p className="dark:text-black abo_p  mt-10 flex justify-center">
            Our technology tackles global issues, empowering communities
            worldwide to address poverty, inequality and deprivation, leaving no
            one behind.
          </p>
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
      <div className='mt-20'>
        <HashtagHeader text="#OurActivities" position="left"/>
        <h2 className="dark:text-black dark:bg-white abo_h2 flex justify-center mt-10">
          Latest <span style={{ color: '#A855F7' }}>Blog</span>
        </h2>
        {/* gap-2 pt-8 */}
        <Suspense fallback={null}>
        <div className="flex flex-wrap m-auto mt-10 mb-20 grid w-[90%] justify-around md:flex md:px-1 max-[600px]:justify-center dark:text-black dark:bg-white">
          <BlogCard blog={blog} />
          <BlogCard blog={blog} />
          <BlogCard blog={blog} />
        </div>
        </Suspense>
      </div>


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
      <section className="Imgpart_center mx-auto  max-w-6xl items-center px-4 py-36 text-slate-100 2xl:max-w-3xl">
        <div className="w-[90%] m-auto flex flex-wrap rounded-md  bg-white/[.1] paragraphStyle py-2 text-lg font-extralight md:py-5 md:text-xl">
          <div className="lg:w-[60%] md:w-[100%] md:m-5 md:m-auto max-w-screen-sm w-[320px] h-[350px] flex flex-col m-auto text-[25px]">
          <p className="m-5">Let’s Build a Better Future Together</p>
          <h1 className="m-5 text-xl text-white md:text-5xl font-bold dark:text-purple-500">
            We have the solution.
          </h1>
          <p className="m-5 mt-10 text-lg font-extralight md:text-xl">
            We're excited to welcome web3 investors like you to the Trigan community.
            Join us on this journey and be a part of something special
          </p>
          </div>
          <div className="lg:w-[40%] md:w-[60%] flex justify-center items-center max-w-screen-sm min-w-300px h-[150px] flex flex-row m-auto">
            <button className="border text-white bg-red-600 font-bold text-white py-2 px-4 rounded-full hover:bg-red-700 w-[150px] h-[50px] text-[15px] max-[600px]:w-[120px]">
              Try Now
            </button>
            <button
              className="border ml-10 bg-transparent hover:bg-white/[.4] font-bold text-white py-2 px-4 rounded-full w-[150px] h-[50px] text-[15px] max-[600px]:w-[120px]"
              
            >
              Learn More
            </button>
          </div>
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
        <div className="flex flex-col items-center justify-center ">
        <div className="hidden w-5/12 md:block mb-[50px]">
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
                data-aos-offset="100"
                className="md:top-[8rem] lg:top-[9rem] content_center absolute inset-x-0 ml-[50px] m-auto !overflow-hidden pl-2 text-center text-2xl font-bold text-white md:text-2xl max-[999px]:top-[-100px] max-[999px]:text-[12px]"
              >
                LET’S BUILD A <br />
                BETTER FUTURE <br />
                TOGETHER
              </p>
              <img
                loading="lazy"
                data-aos="fade-down"
                data-aos-anchor-placement="bottom-bottom"
                className="bottomside relative inset-x-0 top-5 m-auto w-64 !overflow-hidden w-[480px] max-[999px]:top-[40px]"
                src="/logo-parts/logo-bottom.png"
              />
            </div>
            <div className="absolute bottom-40 z-[0] h-[5%] w-[100%] bg-[#A855F7] blur-[300px]" />
          </div>
          {/* before was  md:w-1/2 */}
          <div className="mt-8 px-8 md:w-1/2 md:px-16">''
            <form className="flex flex-col gap-4 mb-20">
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