import axios from 'axios'
import { ReactNode } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { SubscribeForm } from '../../../types/SubscribeForm'
import { validateEmail } from '../../../util/functions'
import { TextInputField } from '../../shared/Forms/TextInputField'

interface SubscribeProps {
  children?: ReactNode
}

export const Subscribe: React.FC<SubscribeProps> = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: {
      errors: { email, name },
    },
  } = useForm<SubscribeForm>({
    defaultValues: {
      email: '',
      name: '',
    },
  })
  const onSubmit = async (values: SubscribeForm) => {
    try {
      await axios.post(`/api/create-mail`, values)
      reset()
      toast.success('Message Sent Successfully')
    } catch (e) {
      toast.error('Something Went Wrong')
    }
  }
  return (
    <div className="my-3 px-10 text-center lg:mt-0 lg:text-left">
      <h6 className="py-2 text-xl font-semibold sm:text-2xl">News Signup</h6>
      <form onSubmit={handleSubmit(onSubmit)} className="pt-5">
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

        <button className="mt-2 rounded-xl bg-primary px-4 py-1.5 text-xl font-semibold text-light">
          Subscribe
        </button>
      </form>
    </div>
  )
}
