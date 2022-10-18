import React,{useEffect} from 'react'
import Form from '../../components/form'
import { GlobalLayout } from '../../components/layouts/GlobalLayout'
import Maps from '../../components/map'


const Engage = () => {
  return (
    <div>
      <GlobalLayout>
        <div className="flex flex-col items-center justify-center md:flex-row md:justify-evenly">
          <Maps />
          <Form />
        </div>
        <div className="  my-9 box-border flex border-t-2   border-solid border-black pt-10">
          <div className="flex w-full flex-col justify-around  text-left md:flex-row md:items-center md:text-center ">
            <div className="flex  flex-col pb-3  pl-3 pr-4 ">
              <div className=" mt-0 mb-2 text-left  text-xl font-light text-[#5e1fff] sm:text-2xl md:text-3xl"
               data-aos="fade-right"
              >
                Our Location
              </div>
              <p className=" mb-0 text-sm text-[#838383]"
              data-aos="fade-up-right"
              >
                Trigan LTD, 9 Watling Street, <br />
                Dumfries, DG1 1HF
              </p>
            </div>
            <div className="flex  flex-col pb-3  pl-3 pr-4 text-left">
              <div className=" mt-0 mb-2 text-left  text-xl font-light text-[#5e1fff] sm:text-2xl md:text-3xl "
              //  data-aos="fade-right"
              >
                Call us
              </div>
              <p className=" 0 text-sm text-[#838383]"
              //  data-aos="fade-up-right"
              >
                You can reach us on weekdays on:
                <br />
                <a
                  href="#"
              //  data-aos="fade-up-right"
                  className="text-sm text-[#1f6fff] underline hover:text-black"
                >
                  12345678
                </a>
              </p>
            </div>
            <div className="flex  flex-col pb-3  pl-3 pr-4 text-left">
              <div
               data-aos="fade-right"
              className=" mt-0 mb-2 text-left  text-xl font-light text-[#5e1fff] sm:text-2xl md:text-3xl ">
                Mail us
              </div>
              <p 
               data-aos="fade-up-right"
              className="small-paragraph  0 text-sm text-[#838383]">
                Mail us directly on our email:
                <br />‍
                <a
                  href="#"
               data-aos="fade-up-right"
                  className="text-sm text-[#1f6fff]  underline hover:text-black"
                >
                  contact@trigan.org
                </a>
              </p>
            </div>
          </div>
        </div>
      </GlobalLayout>
    </div>
  )
}
export default Engage
