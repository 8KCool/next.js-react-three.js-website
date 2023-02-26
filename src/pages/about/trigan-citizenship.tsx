import React, { lazy, Suspense } from 'react'
// import HorizontalSlideShow from '../HeroSection/HorizontalSlideShow'
import HorizontalSlideShow from '../../components/home/HeroSection/HorizontalSlideShow'
import { SEO } from '../../components/shared/SEO'
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { ThemeProvider } from 'next-themes';

import GlobalLayout from '../../components/layouts/GlobalLayout';

const newpage = () => {
  return (
    <div>
      <ThemeProvider attribute="class" enableSystem={true}>
      <SEO title="Trigan Citizenship: The Future of Inclusive Community Participation" description="With Trigan Citizenship, you'll be able to participate in democratic decision-making, access new opportunities, and contribute to the well-being of your community like never before. Our unique platform combines the power of blockchain technology with real-world relevance, allowing you to make a difference in the world around you." />
      <div className="relative overflow-x-hidden bg-black dark:bg-white bg-opacity-75">
        <GlobalLayout>
          <div className="relative w-screen">
            <div className="px-8 md:px-16">
              <div className="mt-[200px]">
                <div className="text-white dark:text-black">
                  <h1 className=" text-[2rem] dark:text-black">Trigan Citizenship: Unlocking the Potential of Smart Cities</h1>
                  <br />
                  <br />
                  <p className="text-xl lg:text-3xl leading-relaxed">
                  Poverty and deprivation are persistent issues that have plagued society for centuries. Despite countless efforts to address these issues, they continue to affect millions of people around the world. At Trigan, we believe that it's time for a new approach.
                  <br />
                  <br />
                  A New Era of Inclusion and Fairness

Trigan Citizenship is more than just a concept - it's a new way of living, working, and participating in your community. By joining the Trigan network, you become a part of a global community of like-minded individuals who are working together to create a better future for all. Here's what you can expect as a Trigan Citizen:

A Universal Basic Income: No matter who you are or where you come from, you are entitled to a basic income as a Trigan Citizen. This helps to ensure that everyone has access to the resources they need to live a dignified life.

Community Participation: Trigan is more than just a platform - it's a community. As a Trigan Citizen, you have the opportunity to participate in decision-making and contribute to the direction of the community. Your voice matters, and your contributions can help to shape the future of your community.

Sustainable Economic Growth: Trigan is built on a new economic model that rewards participation and contribution to the community. By supporting and contributing to your community, you can help to create a more sustainable and equitable economy.

A Brighter Future: By joining the Trigan network, you are taking a step towards a better future for all. Together, we can create a world that is smarter, safer, and more connected - a world where everyone has the opportunity to thrive.

Join the Trigan Community Today: If you're ready to be a part of something special, we invite you to join the Trigan community today. By signing up for early access, you can be among the first to experience the benefits of Trigan Citizenship and contribute to the development of our platform. Don't miss out - join us today and be a part of building a brighter future for all.
                  </p>
                  <br />
                  <br />
                </div>
                </div>
                <div className="space--10 gap-4 "></div>
                <button className=" mt-3 rounded-full border content-center bg-transparent py-2 px-4 font-m_plus_rounded_1c  font-bold text-white hover:bg-gray-400">
                  <a href="/">Return to Homepage</a>
                </button>
                {/*      <SupportersSection></SupportersSection> */}
              </div>
            </div>
            <HorizontalSlideShow />
        </GlobalLayout>
      </div>
      </ThemeProvider>
      </div>
  )
}

export default newpage
