import React, { lazy, Suspense } from 'react'
import GlobalLayout from '../../components/layouts/GlobalLayout';

// import HorizontalSlideShow from '../HeroSection/HorizontalSlideShow'
import HorizontalSlideShow from '../../components/home/HeroSection/HorizontalSlideShow'
import { SEO } from '../../components/shared/SEO'
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';


const newpage = () => {
  return (
    <div>
      <SEO title="Trigan: Using Blockchain Technology to Transform Local Government and Authority Operations" description="Trigan's urban blockchain technology and Trigan Citizenship can transform the way local governments and authorities serve their communities. Learn how our solution can improve services and streamline processes." />
      <div className="relative overflow-x-hidden bg-black dark:bg-white bg-opacity-75">
        <GlobalLayout>
          <div className="relative w-screen">
            <div className="px-8 md:px-16">
              <div className="mt-[200px]">
                <div className="text-white dark:text-black">
                  <h1 className=" text-[2rem] dark:text-black">Trigan: A Blockchain Solution for Local Governments and Authorities</h1>
                  <br />
                  <br />
                  <p className="text-xl lg:text-3xl leading-relaxed">
                  Empowering Governments and Local Authorities with Trigan Technology
                  <br />
                  <br />
As a government or local authority, you are responsible for the well-being and prosperity of your community. At Trigan, we understand the challenges you face in trying to meet the needs of your citizens and create a better future for all. That's why we've developed a revolutionary platform that has the power to transform cities into smarter, safer, and more connected places. By leveraging the power of our blockchain technology and Trigan Citizenship, we can help you create a brighter future for your community.
<br />
<br />
Section 1: Improved Quality of Life
<br />
<br />
Trigan's universal basic income initiatives ensure that everyone in your community has access to the resources they need to live a dignified life. Our innovative economic model rewards participation and contribution to the community, rather than just wealth or status. This helps to create a more equal society where everyone has a chance to succeed. Additionally, Trigan's community-centric, caring economy rewards those who contribute to the well-being of others, rather than just those who are able to accumulate wealth. This helps to reduce inequality and create a more balanced and inclusive society.
<br />
<br />
Section 2: Increased Sustainability
<br />
<br />
Sustainability is an increasingly important concern for governments and local authorities around the world. Trigan's platform can help you achieve your sustainability goals by enabling you to track and monitor resource consumption and waste, as well as encourage responsible behaviour through our rewards system. By using Trigan, you can create a more sustainable future for your community.
<br />
<br />
Section 3: Economic Development
<br />
<br />
Trigan's transparent and secure blockchain-based systems make it nearly impossible for corrupt individuals or organisations to manipulate the system for their own gain. This helps to create a fairer and more trustworthy society where people can have confidence in the institutions that govern their lives. Additionally, our innovative consensus mechanism allows for a more efficient and effective decision-making process, leading to a better outcome for the community as a whole. Using Trigan, you can drive economic development and create a more prosperous future for your community.
<br />
<br />
Conclusion:
<br />
<br />
Trigan is more than just a technology company – we're a partner in your efforts to create a better future for your community. We invite you to join us on this journey and be a part of something special as we work to improve quality of life, increase sustainability, and drive economic development in cities around the world. Contact us to learn more about how Trigan can benefit your government or local authority.
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
      </div>
  )
}

export default newpage
