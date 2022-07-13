import axios from 'axios'
import { ReactNode } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { ContactUsFormValues } from '../../../types/ContactUsFormValues'
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
      await axios.post(`/api/create-mail`, values)
      reset()
      toast.success('Message Sent Successfully')
    } catch (e) {
      toast.error('Something Went Wrong')
    }
  }
  return (
    <div className="px-10 md:mt-5 lg:mt-0">
      <h6 className="py-2 text-center text-xl font-semibold sm:text-2xl lg:text-left">
        Contact Us
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
          Contact Us
        </button>
      </form>
    </div>
  )
}
