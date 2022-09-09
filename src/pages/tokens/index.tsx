import React from 'react'
import Image from 'next/image'
import axios from 'axios'
import { ReactNode } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'


import { SEO } from '../../components/shared/SEO'

import { TokensForm } from '../../types/TokensForm'
import { validateEmail } from '../../util/functions'
import { GlobalLayout } from '../../components/layouts/GlobalLayout'
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
  className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full "
  src="https://uploads-ssl.webflow.com/62b42d68bf74cf04cd20f5c7/62b4cfee9778cd91c4bec07d_triganconcept.png"
  alt="Couple on a bed with a dog"
/>

<div className=" block inset-0 absolute bg-gradient-to-b from-black to-black opacity-80 z-0"></div>

<div 
className="relative px-4 py-32 mx-auto max-w-screen-xl lg:h-screen text-center  lg:items-center lg:flex ">
<div className='mb-3'>
  <h6 className='mt-0 mb-6  md:mb-8 text-white text-3xl font-medium text-left' >
          Be an early-bird and join the Trigan Nation right now!
            </h6>
          <form onSubmit={handleSubmit(onSubmit)}
           className="space-y-1  max-h-fit ">
          <div className='flex'>
            <div className='mr-2'>
            <TextInputField
              name="name"
              // className='mr-1'
              placeholder="FirstName"
              control={control as any}
              error={firstName?.message}
            />
            </div>

            <TextInputField
              name="lastname"
              placeholder="LastName"
              control={control as any}
              error={lastName?.message}
            />
            </div>
         
            <TextInputField
              name="email"
              placeholder="Type Your Email"
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
              control={control as any}
              error={phone?.message}
            />

            <p className='w-full pt-3 md:w-96 text-sm md:text-base mt-10  mb-7 text-[#d8dfeb] text-left'>
Signing up for our services means you agree to the <a href="#" 
className=" underline text-white mr-1">Privacy Policy</a> and <a href="#" 
className="underline text-white ml-1">Terms of Service</a>.
</p>
            <div className='pt-4'>

            <button
              type="submit"
              className="flex mt-10 justify-start  px-4 py-2 text-sm font-medium text-black uppercase bg-white rounded-md">
              GET STARTED NOW
            </button>
            </div>

          
          </form>

          </div>
          {/* <div className='bg-red-500'> */}
          <div className=" px-0 sm:px-3  bg-violet-900 w-1/2 mt-4 mb-6">
            <div data-ix="fade-in-on-scroll-2"
             className=" mr-10 text-center "
            //  style="opacity: 1; transform: translateX(0px) translateY(0px) translateZ(0px); transition: opacity 500ms ease 0s, transform 500ms ease 0s;"
             >
            <div className="testimonial-wrapper">
            <p className="testimonial-text">"I can't wait to get in to the most futuristic city metaverse project."</p>
          <div className="testimonial-person-wrapper w-clearfix">
            <img src="https://uploads-ssl.webflow.com/62b42d68bf74cf04cd20f5c7/62b42d69bf74cf66a220f6b9_Testimonial-10.jpg" alt="" className="testimonial-person-image"/>
            <div className="testimonial-person-title">Jonathon Brown</div>
          <div className="testimonial-person-title title">Creator of Q-Ball Group</div></div></div>
          <div className="testimonial-wrapper">
            <p className="testimonial-text">"I just got my 1 TED for free when I've created my account. Thank you for supporting the community."</p>
          <div className="testimonial-person-wrapper w-clearfix">
            <img src="https://uploads-ssl.webflow.com/62b42d68bf74cf04cd20f5c7/62b42d69bf74cf765b20f619_Testimonial-14.jpg" alt="" className="testimonial-person-image" />
            <div className="testimonial-person-title">Jennifer Wattson</div>
          <div className="testimonial-person-title title">Designer at Tool</div></div></div></div></div>

            </div>
     
        {/* </div> */}
        </section>

      </GlobalLayout>

    </>
  )
}
export default Tokens
