import { ReactNode, useEffect, useState } from 'react'
import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import AOS from 'aos'
import 'aos/dist/aos.css'
import BlogCard from '../HeroSection/BlogCard'
import { GetStaticProps } from 'next'
import { api } from '../../../util/api'
interface AboutSectionProps {
  children?: ReactNode
}
const boxVariant = {
  visible: { opacity: 1, scale: 2, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
}
const blog = {
  name: 'name',
  // image:
  //   'https://th.bing.com/th/id/OIP.X_65uIJkSF8bJl_zyU4twgHaEo?w=277&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
  des: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publica… ',
}

export const AboutSection: React.FC<AboutSectionProps> = () => {
  const control = useAnimation()
  const [ref, inView] = useInView()
  useEffect(() => {
    if (inView) {
      control
        .start('visible')
        .then((r) => {})
        .catch((e) => {})
    } else {
      control
        .start('hidden')
        .then((r) => {})
        .catch((e) => {})
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
      <section data-aos="fade-up" className="">
        <div>
          <h2 className="abo_h2">
            Unlocking the Potential{' '}
            <span style={{ color: '#A855F7' }}>of places, everywhere</span>
          </h2>
          <p className="abo_p">
            Our technology tackles global issues, empowering communities
            worldwide to address poverty, inequality and deprivation, leaving no
            one behind.
          </p>
          <img
            loading="lazy"
            src="images/trigan-section-bg.jpg"
            alt=""
            className="h-full min-w-full px-20"
          />
        </div>
        <div
          className="absolute h-full min-w-full object-fit -z-10"
          style={{ background: 'black' }}
        />
        <div data-aos="fade-up">
          <br></br> <br></br>
          <h2 className="abo_h2l">
            Elevating Cities,{' '}
            <span style={{ color: '#A855F7' }}>today and tomorrow</span>
          </h2>
          <p className="abo_pl">
            <br></br> <br></br>
            Our platform gives communities control over their own resources and
            decision-making through a decentralised system. With our technology,
            regular people can have a voice in how their community is run and
            access new funding and resources.
          </p>
        </div>

        <div>
          <h2 className="abo_h2">
            Smart Cities,{' '}
            <span style={{ color: '#A855F7' }}>the blockchain way</span>
          </h2>
          <br></br> <br></br>
          <p className="abo_p">
            Our urban blockchain technology changes the way cities and towns are
            run. By allowing communities to govern and manage resources in a
            fair, transparent and decentralised manner, we're creating a more
            equitable distribution of wealth and opportunities for all.
            <br></br>
          </p>
        </div>

        <h2 className="abo_h2l">
          Sustainability:{' '}
          <span style={{ color: '#A855F7' }}>preserving the planet</span>
        </h2>
        <p className="abo_pl">
          Our technology is designed with sustainability in mind. We work to
          reduce environmental impact and promote sustainable practices within
          communities, preserving the planet for future generations.
        </p>

        <div data-aos="fade-up" className="">
          <h2 className="abo_h2">
            Trigan: the community-centered{' '}
            <span style={{ color: '#A855F7' }}>solution for cities</span>
          </h2>
          <p className="abo_p">
            <br></br> <br></br>
            Giving power back to the community through decentralisation.
            Resulting in a fair distribution of wealth and opportunities for
            all.
            <br></br> <br></br>
          </p>
        </div>
      </section>
      <h2 className="abo_h2">
        Latest <span style={{ color: '#A855F7' }}>Blog</span>
      </h2>
      <div className="m-auto grid  max-w-[1300px] justify-between gap-4 pt-8 sm:grid-cols-2 md:flex md:px-2 lg:grid-cols-3 xl:grid-cols-4">
        <BlogCard blog={blog} />
        <BlogCard blog={blog} />
        <BlogCard blog={blog} />
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
      <section className="flex items-center max-w-6xl px-4 mx-auto Imgpart_center py-36 text-slate-100 2xl:max-w-3xl">
        <div className="py-2 text-lg paragraphStyle font-extralight md:py-5 md:text-xl">
          <p className="relative mt-20 text-xl text-white content_center headingStyle md:text-5xl">
            We have the solution.
          </p>
          <br></br>
          <div className="relative h-46">
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
