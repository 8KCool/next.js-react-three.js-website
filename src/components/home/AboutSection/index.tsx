import {
  ImgHTMLAttributes,
  MutableRefObject,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { GetStaticProps } from 'next'
import { api } from '../../../util/api'
import React, { lazy, Suspense } from 'react'
import { countries } from './SelectCountries'
import ImageLabel, { TypeImgLabel } from '../ImageLabel'

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
}

const AboutSection: React.FC<AboutSectionProps> = () => {
  const control = useAnimation()
  const [ref, inView] = useInView()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [selectedCountry, setSelectedCountry] = useState('')

  function handleSelectChange(event: any) {
    setSelectedCountry(event.target.value)
  }

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    console.log('Submitted:', { name, email, selectedCountry })
  }

  useEffect(() => {
    AOS.init({
      offset: 150,
      duration: 1000,
    })

    if (inView) {
      control.start('visible').catch(() => {})
    } else {
      control.start('hidden').catch(() => {})
    }
  }, [control, inView])

  //store image dimensions
  const [dimension, stetDimension] = useState({ height: 0, width: 0 })
  const imgRef = useRef<HTMLImageElement>(null)
  const divRef = useRef<HTMLDivElement>(null)

  const onWindowResize = () => {
    if (imgRef) {
      stetDimension({
        height: imgRef.current?.height as number,
        width: imgRef.current?.width as number,
      })
    }
  }
  const [winWidth, setwinWidth] = useState(0)
  const [showLabels, setShowLabels] = useState(false)
  const handleScroll = useCallback((event: any) => {
    const top = divRef.current?.getBoundingClientRect().top as number
    if (top < 400 && top > -150) {
      setShowLabels(true)
    } else {
      setShowLabels(false)
    }
  },[])
  const handleResize = useCallback((event: any) => {
    onWindowResize()
    setwinWidth(document.body.clientWidth)
  },[])
  useEffect(() => {
    onWindowResize()
    setwinWidth(document.body.clientWidth)
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, []);

  return (
    <div
      data-aos="zoom-in-up"
      className=" overflow-hidden xl:mt-[-120px] 2xl:mt-[-80px]"
    >
      <HashtagHeader text="#OurTarget" position="left" />
      <section data-aos="fade-up" className="">
        <div className=" m-auto w-[90%]">
          <div className="m-auto mb-10 mt-10 flex w-[100%] flex-col max-[600px]:text-center">
            <h2 className="flex justify-center text-4xl dark:text-black max-[600px]:text-[28px]">
              Unlocking the Potential{' '}
            </h2>
            <h2 className="mt-2 flex justify-center bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-4xl text-transparent max-[600px]:text-[28px]">
              of places, everywhere
            </h2>
          </div>
          <div
            className="bg-slate-800 backdrop-blur-lg backdrop-filter"
            ref={divRef}
          >
            <ImageLabel
              direction="right"
              label="AI Assisted communities"
              x={winWidth / 2 + dimension.width * 0.055}
              y={dimension.height * 0.15}
              show={showLabels}
            />
            <ImageLabel
              direction="left"
              label="Ecological Safeguards"
              x={winWidth / 2 - 250 - dimension.width * 0.45}
              y={dimension.height * 0.25}
              show={showLabels}
            />
            <ImageLabel
              direction="right"
              label="Unified IoT Data Layer"
              x={winWidth / 2 + dimension.width * 0.05}
              y={dimension.height * 0.33}
              show={showLabels}
            />
            <ImageLabel
              direction="right"
              label="The First Urban Blockchain"
              x={winWidth / 2 + dimension.width * 0.1}
              y={dimension.height * 0.6}
              show={showLabels}
            />
            <img
              onLoad={onWindowResize}
              ref={imgRef}
              loading="lazy"
              src="images/trigan-section-bg-c.png"
              alt=""
              className="m-auto flex min-h-[200px] w-[40%] min-w-[300px] justify-center "
            />
          </div>

          <p className="abo_p mt-10  flex justify-center dark:text-black">
            Our technology tackles global issues, empowering communities
            worldwide to address poverty, inequality and deprivation, leaving no
            one behind.
          </p>
        </div>
        <div
          className="object-fit absolute -z-10 h-full min-w-full"
          // style={{ background: 'black' }}
        />
        <div className="mx-auto mt-8 grid grid-cols-1 px-6 dark:bg-white sm:grid-cols-1 sm:px-8 md:grid-cols-2 md:px-12 xl:grid-cols-2">
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
      {/*}
      <div className='mt-20'>
        <HashtagHeader text="#OurActivities" position="left"/>
        <h2 className="dark:text-black dark:bg-white abo_h2 flex justify-center mt-10">
          Blog{' '}<span style={{ color: '#A855F7' } as React.CSSProperties}>Posts</span>
        </h2>
  
        <Suspense fallback={null}>
        <div className="flex flex-wrap m-auto mt-10 mb-20 grid w-[90%] justify-around md:flex md:px-1 max-[600px]:justify-center dark:text-black dark:bg-white">
          <BlogCard blog={blog} />
          <BlogCard blog={blog} />
          <BlogCard blog={blog} />
        </div>
        </Suspense>
      </div>
      {/*}

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
        <div className="paragraphStyle m-auto flex w-[90%] flex-wrap  rounded-md bg-white/[.1] py-2 text-lg font-extralight md:py-5 md:text-xl">
          <div className="m-auto flex h-[350px] w-[320px] max-w-screen-sm flex-col text-[25px] md:m-5 md:m-auto md:w-[100%] lg:w-[60%]">
            <p className="m-5">Let’s Build a Better Future Together</p>
            <h1 className="m-5 text-xl font-bold text-white dark:text-purple-500 md:text-5xl">
              We have the solution.
            </h1>
            <p className="m-5 mt-10 text-lg font-extralight md:text-xl">
              We're excited to welcome web3 investors like you to the Trigan
              community. Join us on this journey and be a part of something
              special
            </p>
          </div>
          <div className="min-w-300px m-auto flex flex h-[150px] max-w-screen-sm flex-row items-center justify-center md:w-[60%] lg:w-[40%]">
            <button className="h-[50px] w-[150px] rounded-full border bg-red-600 py-2 px-4 text-[15px] font-bold text-white text-white hover:bg-red-700 max-[600px]:w-[120px]">
              Try Now
            </button>
            <button className="ml-10 h-[50px] w-[150px] rounded-full border bg-transparent py-2 px-4 text-[15px] font-bold text-white hover:bg-white/[.4] max-[600px]:w-[120px]">
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
        <div className="flex flex-col items-center justify-center pt-96">
          <div className="mb-[50px] hidden w-5/12 md:block">
            <div className=" relative mt-96 mb-28">
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
                className="content_center absolute inset-x-0 m-auto mt-6 ml-[40px] !overflow-hidden pl-2 text-center text-2xl font-bold text-white max-[999px]:top-[-100px] max-[999px]:text-[12px] md:top-[8rem] md:text-2xl lg:top-[9rem]"
              >
                LET’S BUILD A <br />
                BETTER FUTURE <br />
                TOGETHER
              </p>
              <img
                loading="lazy"
                data-aos="fade-down"
                data-aos-anchor-placement="bottom-bottom"
                className="bottomside relative inset-x-0 top-5 m-auto w-64 w-[480px] !overflow-hidden max-[999px]:top-[40px]"
                src="/logo-parts/logo-bottom.png"
              />
            </div>
            <div className="absolute bottom-40 z-[0] h-[5%] w-[100%] bg-[#A855F7] blur-[300px]" />
          </div>
          {/* before was  md:w-1/2 */}
          <div className="z-10 mb-20 flex  w-[90%] flex-col items-center  rounded-md bg-white/[.1]">
            <div className="background-form z-10 mt-10 mb-10 flex w-[60%] items-center justify-center rounded-md p-5 shadow-lg md:px-16">
              <form
                onSubmit={handleSubmit}
                className="min-w-280 z-10 m-5 w-[80%]"
              >
                <h1 className="align-center m-auto mb-10 mb-4 flex justify-center text-center text-3xl font-bold text-white">
                  Sign Up now for early access
                </h1>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="mb-2 block font-bold text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="your name"
                    className="form-input w-full rounded-md border-b-indigo-500 shadow-sm"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="mb-2 block font-bold text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="email@trigan.com"
                    className="form-input w-full rounded-md border-gray-300 shadow-sm"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
                <div className="mb-4 ">
                  <label
                    htmlFor="email"
                    className="mb-2 block font-bold text-white"
                  >
                    Country
                  </label>
                  <select
                    className="form-input w-full  rounded-md border-gray-300 shadow-sm"
                    value={selectedCountry}
                    onChange={handleSelectChange}
                  >
                    <option value="">Select your country</option>
                    {countries.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </div>
                <div className=" mt-10 mb-10 w-full">
                  <button
                    type="submit"
                    className="w-full rounded-md bg-[#00a000] py-2 font-bold text-white"
                  >
                    Subscribe
                  </button>
                </div>
              </form>

              {/* <form className="flex flex-col gap-4 mb-20">
                <h2 className="text-[30px] dark:text-black">Sign up now for early access</h2>
                <input
                  type="text"
                  placeholder="your name"
                  className="text-white w-full rounded-sm border border-[#B4BEC8] bg-transparent p-4 focus:border-[#B4BEC8] focus:ring-[#B4BEC8]"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="text-white w-full rounded-sm border border-[#B4BEC8] bg-transparent p-4 focus:border-[#B4BEC8] focus:ring-[#B4BEC8]"
                />
                <input
                  type="text"
                  placeholder="Country"
                  className="text-white w-full rounded-sm border border-[#B4BEC8] bg-transparent p-4 focus:border-[#B4BEC8] focus:ring-[#B4BEC8]"
                />
                <button className="rounded-xl bg-[#DC2626] py-2 text-white">
                  Subscribe
                </button>
              </form> */}
            </div>
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
