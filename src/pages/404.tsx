import Link from 'next/link'
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function FourOhFour() {
  return <>
    <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
      <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
        <div className="relative">
          <div className="absolute z-10">
            <div className="">
              <h1 className="my-2 text-gray-800 font-bold text-2xl">
                Looks like you have found the
                doorway to the great nothing
              </h1>
              <p className="my-2 text-gray-800">Sorry about that! Please visit our hompage to get where you need to go.</p>
              {/* <button className="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">Take me there!</button> */}
              <button className="mt-5">
                <a
                  className="relative inline-block text-sm font-medium text-white group active:text-orange-500 focus:outline-none focus:ring"
                >
                  <span
                    className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-indigo-600 group-hover:translate-y-0 group-hover:translate-x-0"
                  ></span>

                  <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
                    {/* <link>Go Home</link> */}
                    <Link href="/">
                      <div>Go Home</div>
                    </Link>
                  </span>
                </a>
              </button>
            </div>
          </div>
          <div>
          <LazyLoadImage
                  alt={''}
                  effect="blur"
                  src={'https://i.ibb.co/G9DC8S0/404-2.png'} />
            {/* <img src="https://i.ibb.co/G9DC8S0/404-2.png" /> */}

          </div>
        </div>
      </div>
      <div>
      <LazyLoadImage
                  alt={''}
                  effect="blur"
                  src={"https://i.ibb.co/ck1SGFJ/Group.png"} />
          
        {/* <img src="https://i.ibb.co/ck1SGFJ/Group.png" /> */}
      </div>
    </div>
  </>
}