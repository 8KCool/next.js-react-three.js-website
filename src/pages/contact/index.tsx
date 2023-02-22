import Form from '../../components/form'
import Maps from '../../components/map'
// import HiLocationMarker from react icons/hi
import { HiLocationMarker } from 'react-icons/hi'
// IoCall
import { IoCall } from 'react-icons/io5'
import React, { lazy, Suspense , useEffect } from 'react'
const GlobalLayout = lazy(() => import('../../components/layouts/GlobalLayout'))

const Engage = () => {
  return (
    <div className=' dark:bg-white dark:text-black'>
      <GlobalLayout>
        <div className="flex flex-col items-center justify-center px-3 pb-20 sm:px-0 md:flex-row md:justify-evenly">
        <div className="mt-[200px] w-full flex flex-row justify-center">
        <div className="flex flex-col w-full md:w-1/2 justify-center">
          <Form />
          </div>
     {/* map div component belowa */}
       <div 
       className="flex flex-col w-full md:w-1/2 justify-center">
          <Maps />
          <div className="flex bg-black dark:bg-white w-full flex-col justify-around  text-left md:flex-row md:items-center md:text-center ">
          <div className="flex pb-3  pl-3 pr-4 text-left"
               data-aos="fade-right"
              >
                <IoCall className="inline-block text-red-700 dark:text-tpurple  text-2xl mr-2" />
              <p className="text-[#838383] dark:text-black"
              >
                <a
                  href="tel:1234567"
              //  data-aos="fade-up-right"
                  className="text-base hover:text-[#1f6fff] text-[#F2F6FB] dark:text-black"
                >
                  +123456789
                </a>
              </p>
            </div>
           
            <div className="flex pb-3  pl-3 pr-4 "
               data-aos="fade-right"
              >
               <HiLocationMarker className="inline-block text-red-700 dark:text-tpurple text-2xl mr-2" />
              <p className=" mb-0 text-base text-left text-[#F2F6FB] dark:text-black"
              // data-aos="fade-up-right"
              >
                
                Trigan LTD, 9 Watling Street, <br />
                Dumfries, DG1 1HF
              </p>
            </div>
           
          </div>
          </div>
          
        </div>
        </div>
       
      </GlobalLayout>
    </div>
  )
}
export default Engage
