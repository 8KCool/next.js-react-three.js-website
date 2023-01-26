import axios from 'axios'
import {ReactNode} from 'react'
import {useForm} from 'react-hook-form'
import toast from 'react-hot-toast'
import {SubscribeForm} from '../../../types/SubscribeForm'
import {validateEmail} from '../../../util/functions'
import {TextInputField} from '../../shared/Forms/TextInputField'

interface SubscribeProps {
  children?: ReactNode
}

export const Subscribe: React.FC<SubscribeProps> = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: {
      errors: {email, name},
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
    <div className="my-3 home_form text-left lg:mt-0">
      <h6 className="py-2 text-xl uppercase text-[#b4bec8] text-center md:text-left">Signup for news</h6>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInputField
          name="name"
          placeholder="Type Your Name"
          control={control as any}
          error={name?.message}
          border="border-[#b4bec8]"
          style={{"margin-bottom":"10px"}as React.CSSProperties}
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
          border="border-[#b4bec8]"
          style={{"margin-bottom":"5px"}as React.CSSProperties}
        />
        <div className='flex w-full justify-center pb-4'>
          <button style={{"background": "#DC2626"} as React.CSSProperties}
            className="mt-2 rounded bg-gray-900 px-4 py-1.5 sm:text-sm md:text-lg text-light transition-all hover:bg-gray-900/80 w-full">
            Subscribe
          </button>
        </div>
      </form>
    </div>
  )
}
