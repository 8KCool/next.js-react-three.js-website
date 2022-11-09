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
      <h6 className="py-2 text-xl uppercase text-[#DCDCDC]">Contact Us</h6>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-1">
        <TextInputField
          name="name"
          placeholder="Type Your Name"
          control={control as any}
          error={name?.message}
          classNames="border-[#DCDCDC]"
        />

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
          classNames="border-[#DCDCDC]"
        />

        <TextInputField
          name="country"
          placeholder="Type Your Country"
          control={control as any}
          error={country?.message}
          classNames="border-[#DCDCDC]"
        />

        <TextareaInputField
          name="message"
          placeholder="Type Your Message"
          control={control as any}
          error={message?.message}
          classNames="border-[#DCDCDC]"
        />
        <button className="mt-2 rounded bg-gray-900 px-4 py-1.5 text-sm text-light transition-all hover:bg-gray-900/80">
          Contact Us
        </button>
      </form>
    </div>
  )
}
