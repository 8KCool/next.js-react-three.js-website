import axios from 'axios'
import {ReactNode} from 'react'
import {useForm} from 'react-hook-form'
import {toast} from 'react-hot-toast'
import {ContactUsFormValues} from '../../../types/ContactUsFormValues'
import {validateEmail} from '../../../util/functions'
import {TextareaInputField} from '../../shared/Forms/TextareaInputField'
import {TextInputField} from '../../shared/Forms/TextInputField'

interface ContactUsFormProps {
  children?: ReactNode
}

export const ContactUsForm: React.FC<ContactUsFormProps> = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: {
      errors: {country, name, email, content, subject},
    },
  } = useForm<ContactUsFormValues>({
    defaultValues: {
      country: '',
      name: '',
      email: '',
      content: '',
      subject: ''
    },
  })
  const onSubmit = async (values: ContactUsFormValues) => {
    console.log("Token====>", localStorage.getItem('access_token'))
    try {
      // await axios.post(`/api/create-mail`, values)
      await axios.post(`https://test1.trigan.org/api/v1/mailing-early-access/create?apiKey=ABC123`, values, {
        withCredentials: true,
        headers: {
          Authorization: `${localStorage.getItem('access_token')}`,
        },
      })
      reset()
      toast.success('Message Sent Successfully')
    } catch (e) {
      toast.error('Something Went Wrong')
    }
  }
  return (
    <div className="md:mt-5 lg:mt-0 home_form_input">
      <h6 className="py-2 text-xl uppercase text-center md:text-left">Leave us a message</h6>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-1">
        <TextInputField
          name="name"
          placeholder="Your Name"
          control={control as any}
          error={name?.message}
          border="border-[#B4BEC8]"
          style={{"margin-bottom":"5px"}as React.CSSProperties}
        />
        <TextInputField
          name="subject"
          placeholder="Subject"
          control={control as any}
          error={subject?.message}
          border="border-[#B4BEC8]"
          style={{"margin-bottom":"5px"} as React.CSSProperties}
        />
        <TextInputField
          name="email"
          placeholder="Email Address"
          style={{"margin-bottom":"5px"}as React.CSSProperties}
          control={control as any}
          rules={{
            validate: {
              value: (v: string) => validateEmail(v),
            },
          }}
          error={email?.message}
          border="border-[#B4BEC8]"
        />
        <TextInputField
          name="country"
          placeholder="Country"
          control={control as any}
          error={country?.message}
          border="border-[#B4BEC8]"
          style={{"margin-bottom":"5px"} as React.CSSProperties}
        />

        <TextareaInputField
          name="content"
          placeholder="Your Message"
          control={control as any}
          error={content?.message}
          border="border-[#B4BEC8]"
          style={{"margin-bottom":"5px"} as React.CSSProperties}
        />
        <div className='flex w-full justify-center pb-4'>
          <button style={{"background": "#DC2626"} as React.CSSProperties}
            className="rounded bg-gray-900 px-4 py-1.5 sm:text-sm md:text-lg text-light transition-all hover:bg-gray-900/80 w-full">
            Contact Us
          </button>
        </div>
      </form> 
    </div> 
  ) 
}
