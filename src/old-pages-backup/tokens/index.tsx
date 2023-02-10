import React from 'react'
// import Image from 'next/image'
import axios from 'axios'
import { ReactNode } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'

import { SEO } from '../../components/shared/SEO'

import { TokensForm } from '../../types/TokensForm'
import { validateEmail } from '../../util/functions'
import  GlobalLayout  from '../../components/layouts/GlobalLayout'
import { TextInputField } from '../../components/shared/Forms/TextInputField'
import TokenPageLogo from '../../components/TokenPageLogo'
import TokenSection from '../../components/TokenSection/Index'
import TokensLeaderSection from '../../components/TokensLeaderSection'

interface TokensProps {
  children?: ReactNode
}


const Tokens: React.FC<TokensProps> = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: {
      errors: { firstName, lastName, phone, email, },
    },
  } = useForm<TokensForm>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    },
  })
  const onSubmit = async (values: TokensForm) => {
    try {
      await axios.post(`/api/create-mail`, values)
      reset()
      toast.success('Message Sent Successfully')
    } catch (e) {
      toast.error('Something Went Wrong')
    }
  }
  return (
    <>
      {/* <SEO title='Token'> */}
      <GlobalLayout>
        <TokenPageLogo />


        {/* new section with a background image */}
        {/* <section className="relative inset-0 bg-gradient-to-b from-black to-black opacity-50 z-0"> */}


        <TokenSection />

        {/* a world from our leader */}
        <TokensLeaderSection />
        <section className="relative ">

          <img
            loading='lazy'
            className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full "
            src="https://uploads-ssl.webflow.com/62b42d68bf74cf04cd20f5c7/62b42d69bf74cf09c020f647_Photo-5.jpg"

            alt="section background"
          />

          <div className=" block inset-0 absolute bg-gradient-to-b from-primary to-[#481fff] opacity-80 z-0"></div>

          <div
            className="relative px-4 py-32 mx-auto max-w-screen-xl lg:h-screen text-center  lg:items-center lg:flex ">
            <div className='mb-3'
              data-aos='fade-up-right'
            >
              <h6 className='mt-0 mb-6  md:mb-8 text-white text-3xl font-medium text-left' >
                Be an early-bird and join the Trigan Nation right now!
              </h6>
              <form onSubmit={handleSubmit(onSubmit)}
                className="space-y-1  max-h-fit ">
                <div className='flex'>
                  <div className='mr-2'>
                    <TextInputField
                      name="name"
                      className='mr-1 h-12 w-full pl-4 bg-white bg-opacity-90 rounded-sm'
                      placeholder="FirstName"
                      control={control as any}
                      error={firstName?.message}
                    />
                  </div>

                  <TextInputField
                    name="lastname"
                    placeholder="LastName"
                    className=' h-12 w-full pl-4 bg-white bg-opacity-90 rounded-sm'
                    control={control as any}
                    error={lastName?.message}
                  />
                </div>

                <TextInputField
                  name="email"
                  placeholder="Email"
                  className='h-12 flex justify-start w-11/12  pl-4 bg-white bg-opacity-90 rounded-sm'
                  control={control as any}
                  rules={{
                    validate: {
                      value: (v: string) => validateEmail(v),
                    },
                  }}
                  error={email?.message}
                />
                <TextInputField
                  name="phone"
                  placeholder="Phone Number"
                  className='h-12 flex justify-start w-11/12 pl-4 bg-white bg-opacity-90 rounded-sm'

                  control={control as any}
                  error={phone?.message}
                />

                <p className='w-full pt-3 md:w-3/4 text-sm md:text-base mt-10  mb-7 text-[#d8dfeb] text-left'>
                  Signing up for our services means you agree to the <a href="#"
                    className=" underline text-white mr-1">Privacy Policy</a> and <a href="#"
                      className="underline text-white ml-1">Terms of Service</a>.
                </p>
                <div className='py-4 '>

                  <button
                    type="submit"
                    className="flex mt-8 justify-start  px-6 py-2 text-sm font-semibold text-black uppercase bg-white rounded-sm">
                    GET STARTED NOW
                  </button>
                </div>


              </form>

            </div>
            {/* <div className='bg-red-500'> */}
            <div className="h-auto px-0 sm:px-3  bg-violet-900 opacity-70 md:w-1/2 mt-4 mb-6"
            //  data-aos='fade-up'


            >
              <div
                className=" mr-10 pt-5 pb-16 px-6 text-center "
              //  style="opacity: 1; transform: translateX(0px) translateY(0px) translateZ(0px); transition: opacity 500ms ease 0s, transform 500ms ease 0s;"
              >
                <div className=" mt-3 w-full mb-6">
                  <p className="text-white pb-2 text-xl">I can not wait to get in to the most futuristic city metaverse project.</p>
                  <div className="flex w-56 mx-auto mt-2 lg:mt-3 text-left ">
                    <img
                      loading='lazy'
                      className="w-12 h-12 rounded-md  mx-auto"
                      src="https://uploads-ssl.webflow.com/62b42d68bf74cf04cd20f5c7/62b42d69bf74cf66a220f6b9_Testimonial-10.jpg" alt="" />
                    <div className='flex flex-col'>

                      <div className=" text-left font-semibold text-white ml-3 text-base">Jonathon Brown</div>
                      <div className="text-left font-light opacity-70 text-white ml-3 text-sm">Creator of Q-Ball Group</div></div></div>
                </div>

                <div className="mt-3 mb-6">
                  <p className="text-white pb-2 w-full text-2xl">I just got my 1 TED for free when I have created my account. Thank you for supporting the community.</p>
                  <div className="flex w-56 mx-auto mt-2 lg:mt-3 text-left ">

                    <img
                      loading='lazy'
                      className="w-12 h-12 rounded-md mx-auto"
                      src="https://uploads-ssl.webflow.com/62b42d68bf74cf04cd20f5c7/62b42d69bf74cf765b20f619_Testimonial-14.jpg"
                      alt="" />

                    <div className='flex flex-col'>

                      <div className="text-white pb-2 text-xl">Jennifer Wattson</div>
                      <div className="text-left font-light opacity-70 text-white ml-3 text-sm ">Designer at Tool</div></div></div></div></div>

            </div>
          </div>

          {/* </div> */}
        </section>

      </GlobalLayout>

    </>
  )
}
export default Tokens
