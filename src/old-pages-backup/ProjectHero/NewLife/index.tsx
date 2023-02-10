/* eslint-disable @next/next/no-img-element */
import { ReactNode } from 'react'
import  GlobalLayout  from '../../../components/layouts/GlobalLayout'
import Parallax from '../asset/Parallax'

interface NewLifeProps {
  children?: ReactNode
}

const NewLife: React.FC<NewLifeProps> = () => {
  return (
    <GlobalLayout>
      <header className="relative h-[100vh] w-full overflow-hidden ">
        <video
          className="fixed -z-50 h-[100vh] max-h-full w-auto min-w-full object-cover"
          width="618"
          height="347"
          autoPlay
          loop
          muted
          preload="auto"
        >
          <source src="/videos/live-free.mp4" type="video/mp4" />
        </video>

        <div className="absolute -z-10  grid h-full w-full grid-cols-1 items-center bg-dark bg-opacity-30 py-36 text-center xl:py-48 2xl:py-20 2xl:pt-48">
          <div className="mx-auto grid grid-cols-1 items-center justify-center px-2 text-white sm:px-5 2xl:w-1/2 2xl:py-6">
            <div
              className={`text-4xl font-extralight md:text-6xl lg:text-7xl 2xl:py-5`}
            >
              <Parallax
                translateX={0}
                translateY={-2.5}
                speed={0.5}
                scale={1}
                translateZ={0}
                className={''}
              >
                <h1>New Life</h1>
              </Parallax>
            </div>
            <div className="whitespace-normal text-4xl md:mt-[12px] md:text-6xl lg:mt-[16px] lg:text-7xl 2xl:mt-[36px]">
              <Parallax
                translateX={0.8}
                translateY={1}
                speed={0.5}
                scale={1}
                translateZ={0}
                className={''}
              >
                <h2>Lead the Life you deserve.</h2>
              </Parallax>
            </div>
          </div>
        </div>
      </header>

      <section className=" center align-center relative flex w-full flex-col flex-wrap justify-center overflow-hidden py-10">
        <div className="absolute -z-20 h-full w-full bg-white" />

        <Parallax
          translateX={-0.3}
          translateY={0}
          speed={0.5}
          scale={1}
          translateZ={0}
          className=""
        >
          <img
            loading='lazy'
            src="/images/trigan-concept-panoroma-360.png"
            className="absolute top-60 -z-0 "
            width="1000px"
            alt=""
          />
        </Parallax>
        <Parallax
          translateX={-0.3}
          translateY={0}
          speed={0.5}
          scale={1}
          translateZ={0}
          className=""
        >
          <img
            loading='lazy'
            src="/images/trigan-concept-panoroma-360.png"
            className="absolute top-60 left-[1000px] -z-0 "
            width="1000px"
            alt="trigan-concept-panoroma"
          />
        </Parallax>
        <Parallax
          translateX={-0.3}
          translateY={0}
          speed={0.5}
          scale={1}
          translateZ={0}
          className=""
        >
          <img
            loading='lazy'
            src="/images/trigan-concept-panoroma-360.png"
            className="absolute top-60 left-[2000px] -z-0 "
            width="1000px"
            alt="trigan-concept-panoroma"
          />
        </Parallax>
        <Parallax
          translateX={-0.3}
          translateY={0}
          speed={0.5}
          scale={1}
          translateZ={0}
          className=""
        >
          <img
            loading='lazy'
            src="/images/trigan-concept-panoroma-360.png"
            className="absolute top-60 left-[3000px] -z-0 "
            width="1000px"
            alt="trigan-concept-panoroma"
          />
        </Parallax>
        <Parallax
          translateX={-0.3}
          translateY={0}
          speed={0.5}
          scale={1}
          translateZ={0}
          className=""
        >
          <img
            loading='lazy'
            src="/images/trigan-concept-panoroma-360.png"
            className="absolute top-60 left-[4000px] -z-0 "
            width="1000px"
            alt="trigan-concept-panoroma"
          />
        </Parallax>

        <div className="self-center bg-white px-5 drop-shadow-2xl md:w-[50%]">
          <h1 className="h-[2em] whitespace-normal text-center text-4xl">
            Lead the Life You deserve!
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl
            elit, fringilla eu augue eget, vestibulum vulputate augue.
            Suspendisse vel maximus nisi. Curabitur volutpat orci non massa
            gravida eleifend. Etiam vitae arcu mauris. Integer in est vitae orci
            tempus interdum quis vel risus. Phasellus ultricies enim eu
            fringilla tempus. Nullam vel tristique arcu. Nulla malesuada turpis
            eu mi tempus sagittis sed quis purus. Nunc semper lacus hendrerit
            hendrerit vulputate. Maecenas vitae dui quis risus rhoncus bibendum.
            Fusce sagittis id urna eu bibendum.
          </p>
          <p>
            Vestibulum leo arcu, luctus quis molestie eget, ultricies et ante.
            Aliquam pharetra arcu vel fringilla congue. Praesent facilisis quam
            tempor ante pulvinar, nec ultrices ante facilisis. Integer vitae
            condimentum neque. Aliquam erat volutpat. Quisque quis pharetra
            mauris. Nunc faucibus mi nisi, vitae rhoncus augue varius eu. Nulla
            facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae;
          </p>
          <p>
            Donec luctus purus eget sem tempus sollicitudin eget ac ipsum.
            Praesent commodo eleifend leo, vel aliquam dolor lacinia at. Integer
            nunc orci, malesuada eu turpis id, dignissim pharetra nisi. Fusce
            porta leo et arcu consequat, nec varius enim vestibulum. Cras
            volutpat facilisis nulla, vitae imperdiet odio tempor ut. Sed at
            pretium enim. Sed nec justo risus. Cras quis augue at ex pulvinar
            ultrices id id elit. Maecenas consectetur metus a ante cursus, eu
            iaculis urna eleifend. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas. Pellentesque
            finibus libero eget ex tempor blandit. Nunc suscipit sodales
            convallis.
          </p>
          <p>
            Phasellus nec lacus ac erat auctor eleifend. Aenean sem urna,
            faucibus sit amet arcu vel, bibendum sodales libero. Phasellus quis
            luctus ipsum, vitae egestas ipsum. Ut et sapien at justo consectetur
            lacinia id scelerisque tortor. Donec accumsan lacus nec purus
            varius, vel tempus mi pretium. Nullam id laoreet neque. Ut dictum
            tincidunt odio, a bibendum velit iaculis eget. Suspendisse dapibus
            elit quam, non placerat ipsum imperdiet a. In hac habitasse platea
            dictumst. Cras libero dolor, ultricies id magna egestas, rutrum
            convallis erat. Maecenas dignissim enim nulla, vel consequat lacus
            posuere nec. Suspendisse efficitur nisl tincidunt dui eleifend
            malesuada. Proin molestie euismod neque at varius. Aenean ultricies
            tellus velit, vel vestibulum nibh fringilla a.
          </p>
        </div>
      </section>
    </GlobalLayout>
  )
}

export default NewLife
