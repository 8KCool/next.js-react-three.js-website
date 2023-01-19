import React,{useEffect} from 'react'
import Form from '../../components/form'
import { GlobalLayout } from '../../components/layouts/GlobalLayout'
import Maps from '../../components/map'
// import HiLocationMarker from react icons/hi
import { HiLocationMarker } from 'react-icons/hi'
// IoCall
import { IoCall } from 'react-icons/io5'

const Engage = () => {
  return (
    <div>
      <GlobalLayout>
        <div className="flex flex-col items-center justify-center px-3 sm:px-0 md:flex-row md:justify-evenly">
        <div className="flex flex-col w-full md:w-1/2">
          <Form />
          </div>
     {/* map div component belowa */}
       <div 
       className='flex flex-col w-full md:w-1/2 '>
          <Maps />
          <div className="flex bg-black w-full md:w-11/12 pt-4 flex-col justify-around  text-left md:flex-row md:items-center md:text-center ">
          <div className="flex pb-3  pl-3 pr-4 text-left"
               data-aos="fade-right"
              >
                <IoCall className="inline-block text-red-700 text-2xl mr-2" />
              <p className="text-[#838383]"
              >
                <a
                  href="tel:1234567"
              //  data-aos="fade-up-right"
                  className="text-base hover:text-[#1f6fff] text-[#F2F6FB]"
                >
                  +123456789
                </a>
              </p>
            </div>
           
            <div className="flex pb-3  pl-3 pr-4 "
               data-aos="fade-right"
              >
               <HiLocationMarker className="inline-block text-red-700 text-2xl mr-2" />
              <p className=" mb-0 text-base text-left text-[#F2F6FB]"
              // data-aos="fade-up-right"
              >
                
                Trigan LTD, 9 Watling Street, <br />
                Dumfries, DG1 1HF
              </p>
            </div>
           
          </div>
          </div>
          
        </div>
       
      </GlobalLayout>
    </div>
  )
}
export default Engage
