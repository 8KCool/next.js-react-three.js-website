import React from 'react'
import { TextInputField } from '../components/shared/Forms/TextInputField'
import GlobalLayout from './../components/layouts/GlobalLayout'
import { ReactNode } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { validateEmail } from '../util/functions'
import { RegistrationForm } from '../types/RegistrationForm'
import { SelectOptionsField } from '../components/shared/Forms/SelectOptionsField'
import { SelectOptions } from '../types/SelectOption'
import { FileInputFiled } from '../components/shared/Forms/FileInputField'

interface CareersProps {
  children?: ReactNode
}

export const Careers: React.FC<CareersProps> = () => {
  const selectOptions: SelectOptions[] = [
    {
      title: 'Software Development',
      value: 'software',
    },
    {
      title: 'Virtual Assistant',
      value: 'va',
    },
    {
      title: 'Customer Support',
      value: 'cs',
    },
    {
      title: 'Other',
      value: 'other',
    },
  ]

  const {
    control,
    handleSubmit,
    reset,
    formState: {
      errors: { email, first_name, last_name, role, tags },
    },
  } = useForm<RegistrationForm>({
    defaultValues: {
      email: '',
      first_name: '',
      last_name: '',
      role: {},
      tags: '',
    },
  })

  const onSubmit = async (values: RegistrationForm) => {
    try {
      // MAKE THE API CALL
      //   await axios.post(`/api/careers-register`, values)
      reset()
      toast.success('Registration Sent Successfully')
    } catch (e) {
      toast.error('Something Went Wrong')
    }
  }
  return (
    <GlobalLayout>
      <div
        className="container mx-auto py-8 text-center"
        style={{ width: '30%' }}
      >
        <h6 className="py-2 text-xl uppercase">Registration</h6>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div style={{ display: 'inline-flex' }}>
            <TextInputField
              name="first_name"
              placeholder="First Name"
              control={control as any}
              error={first_name?.message}
              border="border-[#000000]"
              classNames="mr-2"
            />
            <TextInputField
              name="last_name"
              placeholder="Last Name"
              control={control as any}
              error={last_name?.message}
              border="border-[#000000]"
              classNames="ml-2"
            />
          </div>

          <TextInputField
            name="email"
            placeholder="Email"
            control={control as any}
            rules={{
              validate: {
                value: (v: string) => validateEmail(v),
              },
            }}
            error={email?.message}
            border="border-[#000000]"
          />

          <SelectOptionsField
            name="role"
            control={control as any}
            options={selectOptions}
            error={role?.message}
            // border="border-[#000000]"
          ></SelectOptionsField>
          <TextInputField
            name="tasg"
            placeholder="Enter tags separated by commas"
            control={control as any}
            error={tags?.message}
            border="border-[#000000]"
          />
          <FileInputFiled
            name="files"
            control={control as any}
            onChange={(e: React.FormEvent<HTMLInputElement>) => {
              console.log(e.target)
            }}
          ></FileInputFiled>

          <button className="mt-2 rounded bg-black px-4 py-1.5 text-center text-sm text-light transition-all hover:bg-gray-900/95">
            Register
          </button>
        </form>
      </div>
    </GlobalLayout>
  )
}

export default Careers
