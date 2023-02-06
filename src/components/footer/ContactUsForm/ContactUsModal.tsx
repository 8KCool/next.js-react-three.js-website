import { Modal } from '@mantine/core'
import axios from 'axios'
import { ReactNode, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { IEarlyAccessModalContext } from '../../../context/EarlyAccessModalContext'
import useEarlyAccessModal from '../../../hooks/useEarlyAccessModal'
import { ContactUsFormValues } from '../../../types/ContactUsFormValues'
import { validateEmail } from '../../../util/functions'
import { TextareaInputField } from '../../shared/Forms/TextareaInputField'
import { TextInputField } from '../../shared/Forms/TextInputField'

interface ContactUsFormProps {
  children?: ReactNode
  modal: IEarlyAccessModalContext
  setModal: Function
}

export const ContactUsModal: React.FC<ContactUsFormProps> = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: {
      errors: { country, name, email, content, subject },
    },
  } = useForm<ContactUsFormValues>({
    defaultValues: {
      country: '',
      name: '',
      email: '',
      content: '',
      subject: '',
    },
  })
  const { modal, setModal } = useEarlyAccessModal()
  const [loading, setLoading] = useState(false)
  const onSubmit = async (values: ContactUsFormValues) => {
    console.log('Token====>', localStorage.getItem('access_token'))
    try {
      // await axios.post(`/api/create-mail`, values)
      await axios.post(
        `https://test1.trigan.org/api/v1/mailing-early-access/create?apiKey=ABC123`,
        values,
        {
          withCredentials: true,
          headers: {
            Authorization: `${localStorage.getItem('access_token')}`,
          },
        }
      )
      reset()
      toast.success('Message Sent Successfully')
    } catch (e) {
      toast.error('Something Went Wrong')
    }
  }

  if (loading) return <></>

  if (modal.type === 'contact')
    return (
      <Modal
        opened={modal.open}
        onClose={() => setModal({ ...modal, open: false })}
        // size={'40%'}
        withCloseButton={false}
        padding={0}
        className={'border border-gray-400 sm:w-full'}
      >
        <div className="bg-white font-serif md:mt-5 lg:mt-0">
          <div className="mx-px my-px bg-black px-10 py-10 text-white">
            <h6 className="py-2 text-center text-xl uppercase text-[#DCDCDC] md:text-left">
              Contact Us
            </h6>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-1">
              <TextInputField
                name="name"
                placeholder="Type Your Name"
                control={control as any}
                error={name?.message}
                border="border-[#DCDCDC]"
              />
              <TextInputField
                name="subject"
                placeholder="Type Your Subject"
                control={control as any}
                error={subject?.message}
                border="border-[#DCDCDC]"
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
                border="border-[#DCDCDC]"
              />

              <TextInputField
                name="country"
                placeholder="Type Your Country"
                control={control as any}
                error={country?.message}
                border="border-[#DCDCDC]"
              />

              <TextareaInputField
                name="content"
                placeholder="Type Your Message"
                control={control as any}
                error={content?.message}
                border="border-[#DCDCDC]"
              />
              <div className="flex w-full justify-center pb-4">
                <button className="w-full rounded bg-red-600 px-4 py-1.5 text-light transition-all hover:bg-red-700 sm:text-sm md:text-lg">
                  Contact Us
                </button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    )

  return <></>
}
