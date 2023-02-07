import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Form = () => {

  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);

  return (
    <>
      <div className="px-4 sm:mt-0  lg:px-8">
        {/* contact our team  */}
        <div className=" ">
          <div className="mt-6 md:mt-10 rounded pt-10 md:col-span-2"
                data-aos="fade-left"
          >
            <div className="mb-8 flex flex-col pl-2"            
            >
              <p 
              className="mb-6 whitespace-nowrap flex items-baseline w-full text-center md:text-6xl xl:text-7xl text-5xl font-semibold text-[#f2f6fb] font-m_plus_rounded_1c dark:text-black"
              >
                Contact
                <span 
                className='text-[#5e1fff]'
                > Us</span>
              </p>
            </div>
            <form action="#" method="POST">
              <div className=" overflow-hidden ">
                <div className="px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3"               
                    >
                      {/* <label
                        htmlFor="first-name"
                        className="mb-1  block text-sm font-normal uppercase  text-[#989ba2] "
                      >
                        First name:
                      </label> */}
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        placeholder="First Name"
                        autoComplete="given-name"
                        className="mt-1 bg-transparent block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      {/* <label
                        htmlFor="last-name"
                        className="mb-1  block text-sm font-normal uppercase  text-[#989ba2] "
                      >
                        Last name:
                      </label> */}
                      <input
                        type="text"
                        name="last-name"
                        placeholder="Last Name"
                        id="last-name"
                        autoComplete="family-name"
                        className="mt-1 bg-tra bg-transparent block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 ">
                      {/* <label
                        htmlFor="email-address"
                        className="mb-1  block text-sm font-normal uppercase  text-[#989ba2] "
                      >
                        Email:
                      </label> */}
                      <input
                        type="email"
                        required
                        name="email-address"
                        placeholder="Email Address"
                        id="email-address"
                        autoComplete="email"
                        className="mt-1 bg-transparent block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6">
                      {/* <label
                        htmlFor="street-address"
                        className="mb-1 block text-sm font-normal uppercase  text-[#989ba2] "
                      >
                        Message:
                      </label> */}
                      <textarea
                        name="text"
                        id="text"
                        placeholder="Message"
                        autoComplete="text"
                        className="mt-1 block bg-transparent  h-32 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
                <div className="items-center justify-center px-4 py-3 text-center sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex w-96  justify-center rounded-full border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Form