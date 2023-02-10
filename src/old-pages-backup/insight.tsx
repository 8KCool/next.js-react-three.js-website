import React from 'react'
import Card from '../components/card'
import  GlobalLayout  from '../components/layouts/GlobalLayout'
import SwiperBlog from '../components/SwiperBlogSection'
import { SEO } from '../components/shared/SEO'

const About = () => {
  return (
    <div>
          <SEO title="Insights" description='Trigan Insights'/>
      <GlobalLayout>
        <div className="flex flex-col md:flex-row items-center justify-center w-full h-screen">

          <section className="w-full bg-gray-50">
            <div className="p-8 md:p-12 lg:px-16 lg:py-24">
              <div className="mx-auto max-w-xl text-center sm:text-left">
                <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit
                </h2>

                <p className="hidden text-gray-500 md:mt-4 md:block">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas
                  tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et
                  fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt
                  duis.
                </p>

                <div className="mt-4 md:mt-8">
                  <a className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
                  >
                    Get Started Today
                  </a>
                </div>
              </div>
            </div>
          </section>

          <div className='w-full mt-3 md:mt-0 md:w-1/2'>
            <SwiperBlog />
          </div>

        </div>
        <Card />
      </GlobalLayout>
    </div>
  )
}
export default About
