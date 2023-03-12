import React from 'react'
import Image from "next/legacy/image"
import { Cardsmall } from '../../components/cardSmall/index'
// import image from image folder in public


const Insights = () => {
  return (
    <div className="blogSection bg-cover bg-no-repeat   ">
      <div className="h-full w-full bg-opacity-30 pt-44 pb-44 text-black">
        <div className="relative max-w-none justify-center pt-0  text-center text-white">
          <div
            data-aos="fade-up"
            className=" mx-auto mb-4 block w-11/12 text-base uppercase leading-3 "
          >
            July 4, 2016
          </div>
          <h2
            data-aos="fade-up-right"
            className=" blog-post-title my-0 text-xl font-normal leading-6 lg:text-5xl lg:leading-10"
          >
            Our team is growing day by day{' '}
          </h2>
        </div>
      </div>
      <div className="relative mt-0  bg-[#f5f5f5]  py-10 px-11 text-left ">
        <div className=" relative  -top-24 left-4  mx-auto  block max-w-3xl  pt-0  lg:max-w-4xl xl:-top-28 ">
          <div className=" block w-10/12 bg-white p-12 shadow-md shadow-gray-400 lg:w-11/12 lg:p-16 ">
            <div className="rich-text-block w-richtext">
              <blockquote className="mb-8 block border-l-4 border-[#e2e2e2]  py-0 px-5 text-lg leading-5 md:py-3 md:px-5 md:text-xl md:leading-7 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                velit dui, fermentum id facilisis sit amet, imperdiet ut est.
                Curabitur efficitur viverra nunc, et dignissim justo sodales ut.
                Mauris facilisis sit amet justo at rutrum.&nbsp;
              </blockquote>
              <p className=" parag  ">
                Curabitur porttitor fringilla nunc ut pretium. Phasellus a
                hendrerit ipsum. Nullam fringilla vitae dolor vel bibendum.
                Donec tempus dolor urna, pretium finibus sem congue et. Sed et
                vulputate felis, sit amet facilisis orci. Ut vestibulum
                tristique lacinia. Duis nec convallis nisl.
              </p>
              <p className="parag">
                Sed enim massa, volutpat id aliquam consectetur, consequat ut
                magna. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos. In hac habitasse platea
                dictumst. Praesent pharetra iaculis leo. Suspendisse ultrices
                orci leo, id euismod risus mattis vel. Praesent non eleifend
                nulla, id tempus neque. Maecenas iaculis vestibulum nunc, ut
                imperdiet metus congue sit amet. Sed placerat, risus at
                scelerisque congue, mi diam dignissim quam, quis commodo mi
                magna vel augue.
              </p>
              <h2 className="header">Pellentesque habitant morbi</h2>
              <p className="parag">
                Tristique senectus et netus et malesuada fames ac turpis
                egestas. Aliquam dolor nibh, lobortis sit amet tortor et, luctus
                lacinia nisi. Nulla vitae arcu purus. Donec mattis arcu at
                vulputate tincidunt. Cras ut vulputate turpis. Sed sit amet ante
                leo. Mauris commodo sed nisi ut auctor. Curabitur nunc metus,
                aliquet et laoreet quis, elementum et nunc. Maecenas feugiat
                mollis urna quis sollicitudin. Vestibulum lobortis egestas
                risus, eget eleifend sapien scelerisque quis. Aliquam erat
                volutpat. Sed ut sapien id urna sagittis gravida vitae nec enim.
              </p>

              <p className="parag">
                Curabitur vestibulum magna eget ex imperdiet sollicitudin. Etiam
                lacinia, lacus sed fringilla pulvinar, turpis turpis aliquet
                sem, et blandit turpis purus non massa. Nullam pulvinar ipsum
                lobortis gravida scelerisque. Nullam pretium elit eros, nec
                pretium magna faucibus nec. Vivamus a arcu ac nisl tempus
                auctor. In pellentesque urna a libero porta accumsan. In hac
                habitasse platea dictumst. Etiam vitae turpis fermentum felis
                elementum luctus. Ut nec ante tellus. Maecenas bibendum
                pellentesque dolor, ac malesuada arcu pellentesque nec.&nbsp;
              </p>
              <h2 className="header">Cras ut neque libero</h2>
              <p className="parag">
                Nullam efficitur mauris sit amet ligula vehicula auctor. Morbi
                hendrerit ultricies lacus, ut viverra mi egestas sollicitudin.
                Phasellus facilisis nisl nec posuere tincidunt. Nullam maximus,
                ipsum a euismod pharetra, magna turpis condimentum arcu, vitae
                finibus ante ligula non elit.
              </p>
            </div>
            <div className="mx-auto   mt-10  flex  max-w-2xl border-t-[1px] border-gray-400  pt-2 text-left ">
              <div className="mr-auto mb-10 ml-auto flex  h-1 w-1/4 justify-end pt-2 ">
                <Image
                  className=" mt-0  mr-6  h-16 w-16 "
            src="/images/glassguy.png"
                  // src="https://uploads-ssl.webflow.com/62b42d69bf74cf28f620f5cb/62b4ff7cd57f7933f6e9da05_Mayank.png"
                  alt="face temp"
                  width={100}
                  height={100}
                  layout="fixed"
                />
              </div>

              <div className=" flex w-3/4 flex-col">
                <div className=" text-40 font-semi-bold">Mayank Mishra</div>
                <div className="mt-2 block  text-base  text-[#afafaf]  ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et
                  metus erat.{' '}
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto   ml-auto box-border w-4/5 text-center lg:mb-14  lg:w-full">
            <h2 className="section-title-2 dont-miss text-md   mb-1 mt-0 text-left text-2xl font-light text-[#b6b6b6]   lg:my-5 ">
              Don&#x27;t miss these stories:
            </h2>
          </div>
        </div>
        <Cardsmall />
      </div>
    </div>
  )
}

export default Insights
