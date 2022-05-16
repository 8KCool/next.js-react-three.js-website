import { ReactNode } from 'react'
import { useForm } from 'react-hook-form'
import { TextInputField } from '../../components/shared/Forms/TextInputField'
import { TextPasswordField } from '../../components/shared/Forms/TextPasswordField'
import axios from 'axios'
import { useRouter } from 'next/router'

interface LoginProps {
  children?: ReactNode
}

interface LoginFormValues {
  email: string
  password: string
}

const Login: React.FC<LoginProps> = () => {
  const router = useRouter()
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginFormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  })
  const onSubmit = async (values: LoginFormValues) => {
    await axios.post('/api/login', values)
    return router.push('/admin/dashboard')
  }
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="mx-auto h-2/3 w-1/3 rounded-lg bg-grey">
        <h2 className="ml-5 mt-5 text-4xl font-semibold">Admin Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="p-5">
          <TextInputField
            control={control}
            name="email"
            error={errors.email?.message}
            placeholder="Enter Your Email"
          />

          <TextPasswordField
            control={control}
            name="password"
            error={errors.password?.message}
            placeholder="Enter Your Password"
          />

          <button className="mt-5 w-full rounded-xl bg-primary px-4 py-2 text-xl tracking-widest text-white">
            LOGIN
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
