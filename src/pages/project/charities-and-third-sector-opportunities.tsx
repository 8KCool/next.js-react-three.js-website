import React, { lazy, Suspense } from 'react'
import GlobalLayout from '../../components/layouts/GlobalLayout';
// import HorizontalSlideShow from '../HeroSection/HorizontalSlideShow'
import HorizontalSlideShow from '../../components/home/HeroSection/HorizontalSlideShow'
import { SEO } from '../../components/shared/SEO'
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { ThemeProvider } from 'next-themes';


const newpage = () => {
  return (
    <div>
       <SEO title="Empowering Charities and the Third Sector with Trigan: A Game-Changing Blockchain Solution" description="Trigan's innovative blockchain technology offers a new way for charities and third sector organisations to operate more effectively and achieve greater impact. Find out how Trigan can transform your organisation's operations and make a real difference in the world." />
      <div className="relative overflow-x-hidden bg-black dark:bg-white bg-opacity-75">
        <GlobalLayout>
          <div className="relative w-screen">
            <div className="px-8 md:px-16">
              <div className="mt-[200px]">
                <div className="text-white dark:text-black">
                  <h1 className=" text-[2rem] dark:text-black">Revolutionising the Charitable Sector with Trigan: How Our Solution Can Make a Difference</h1>
                  <br />
                  <br />
                  <p className="text-xl lg:text-3xl leading-relaxed">
                  Empowering Charities and Third Sector Organizations with Trigan
                  <br />
                  <br />
Trigan is more than just a technology company. We are a team of passionate individuals committed to positively impacting the world. That's why we've developed a platform that has the potential to transform the way charities and third sector organisations operate, enabling them to make a bigger difference in the lives of those they serve.
<br />
<br />
The Power of Blockchain: Increased Transparency and Trust
<br />
<br />
Blockchain technology is known for its security and transparency. By leveraging the power of our decentralised, distributed database, charities and third sector organisations can have confidence that their resources are being used in the most efficient and effective manner possible. This not only helps to increase trust in the organisations themselves, but also helps to build trust in the broader sector as a whole.
<br />
<br />
Trigan Citizenship: Empowering Communities and Individuals
<br />
<br />
Trigan Citizenship is more than just a concept. It's a way of life that embodies the values of community, compassion, and collaboration. By becoming a Trigan Citizen, individuals and organisations can join a global movement of like-minded individuals committed to making a positive difference in the world. This not only helps to increase the impact of individual organisations, but also helps to create a sense of shared purpose and common goals.
<br />
<br />
Solving Real-World Problems: From Poverty to Inequality
<br />
<br />
Trigan is more than just a platform. It's a solution to some of the most pressing problems facing our world today. From poverty and deprivation to corruption and inequality, Trigan is uniquely positioned to tackle these challenges head on. By leveraging the power of our blockchain technology and Trigan Citizenship, we can create a more equitable, sustainable, and prosperous society for all.
<br />
<br />
Join the Movement: Be a Part of Something Special
<br />
<br />
Whether you're a charity or third sector organisation looking to enhance your impact, or an individual looking to make a difference in your community, there are countless ways to get involved with Trigan. By signing up for early access, you can be among the first to experience the benefits of our platform and contribute to its development. Or, if you're ready to take things to the next level, we welcome you to contact us and explore the possibilities for investment and participation in our project.
<br />
<br />
The future is bright, and the possibilities are endless. Take the first step towards a better tomorrow, and join us on this journey.

                  </p>
                  <br />
                  <br />
                </div>
                </div>
                <div className="space--10 gap-4 "></div>
                <button className=" mt-3 rounded-full border dark:border-black content-center bg-transparent py-2 px-4 font-m_plus_rounded_1c  font-bold text-white dark:text-black hover:bg-gray-400">
                  <a href="/">Return to Homepage</a>
                </button>
                {/*      <SupportersSection></SupportersSection> */}
              </div>
            </div>
            <HorizontalSlideShow />
        </GlobalLayout>
      </div>
      </div>
  )
}

export default newpage
