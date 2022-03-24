import axios from 'axios'
import { ReactNode } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { ContactUsFormValues } from '../../../types/ContactUsFormValues'
import { API_KEY, API_URL } from '../../../util/constants'
import { validateEmail } from '../../../util/functions'
import { TextareaInputField } from '../../shared/Forms/TextareaInputField'
import { TextInputField } from '../../shared/Forms/TextInputField'

interface ContactUsFormProps {
  children?: ReactNode
}

export const ContactUsForm: React.FC<ContactUsFormProps> = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: {
      errors: { country, name, email, message },
    },
  } = useForm<ContactUsFormValues>({
    defaultValues: {
      country: '',
      name: '',
      email: '',
      message: '',
    },
  })
  const onSubmit = async (values: ContactUsFormValues) => {
    try {
      const { data } = await axios.post(
        `${API_URL}/mailinglist/create?apiKey=${API_KEY}`,
        values
      )
      console.log('data: ', data)
      reset()
      toast.success('Messege Sent Successfully')
    } catch (e) {
      console.log('error: ', e)
      toast.error('Something Went Wrong')
    }
  }
  return (
    <div className="px-10 md:mt-5 lg:mt-0">
      <h6 className="py-2 text-center text-xl font-semibold sm:text-2xl lg:text-left">
        Contact Us Now
      </h6>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-1 pr-5">
        <TextInputField
          name="name"
          placeholder="Type Your Name"
          control={control}
          error={name?.message}
        />

        <TextInputField
          name="email"
          placeholder="Type Your Email"
          control={control}
          rules={{
            validate: {
              value: (v: string) => validateEmail(v),
            },
          }}
          error={email?.message}
        />

        <TextInputField
          name="country"
          placeholder="Type Your Country"
          control={control}
          error={country?.message}
        />

        <TextareaInputField
          name="message"
          placeholder="Type Your Message"
          control={control}
          error={message?.message}
        />
        <button className="rounded-xl bg-primary px-4 py-1.5 text-xl font-semibold text-light">
          Sign up
        </button>
      </form>
    </div>
  )
}
