import React,{useEffect} from "react";
import AOS from 'aos'
import 'aos/dist/aos.css';

const TokenPageLogo = () => {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);

  return (
    <div className='xl:mt-10 mt-5 sm:mt-6 md:mt-7'>
      <div
        className="relative flex-row items-center w-full  px-2 h-80 text-white"
        data-aos="fade-up"
      >
        <img
          // layout='fill'
          alt="some text"
          data-aos="flip-up"
          loading="lazy"
          src="https://uploads-ssl.webflow.com/62b42d68bf74cf04cd20f5c7/62c0469d57e0c505b59b9b11_trigan-concept-panoroma-02a.jpg"
          className="absolute -z-10 inset-0 object-[75%] sm:object-[90%] object-cover w-full h-full"
        />

        <div className=" text-center h-auto flex justify-center items-center">
          <img
            src="https://uploads-ssl.webflow.com/62b42d68bf74cf04cd20f5c7/62c03712ad9536dc3ada4ebd_trian%20nation%20logo%20black.svg"
            loading="lazy"
            alt=""
            className=" md:w-1/6 w-1/2 sm:w-1/3 md:pt-10 text-center"
          />
        </div>
      </div>
    </div>
  );
};

export default TokenPageLogo;
