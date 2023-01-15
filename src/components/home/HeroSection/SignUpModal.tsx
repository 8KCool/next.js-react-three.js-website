import React, {useEffect, useState} from 'react'
import {Modal,} from '@mantine/core'
import axios from 'axios'
import toast from 'react-hot-toast'
import {TextInputField} from '../../shared/Forms/TextInputField'
import {SubscribeForm} from '../../../types/SubscribeForm'
import {useForm} from 'react-hook-form'
import {validateEmail} from '../../../util/functions'
import {TEST_API_URL} from '../../../util/constants'
import useEarlyAccessModal from "../../../hooks/useEarlyAccessModal";

interface Imodal {
  open: boolean
  size: string
  type: string
}

interface IPostModals {
  modal: Imodal
  setModal: React.Dispatch<React.SetStateAction<Imodal>>
  selectedPost: any
  setSelectedPost: any
  fetchFunction: () => Promise<void>
}

export const SignUpModal = ({
                              selectedPost,
                              setSelectedPost,
                              fetchFunction,
                            }: IPostModals) => {
  const {modal, setModal} = useEarlyAccessModal()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    if (!selectedPost || Object.keys(selectedPost).length === 0) {
      return setLoading(false)
    }
    if (Object.keys(selectedPost).length === 0) return setLoading(true)
    setLoading(false)
  }, [selectedPost])


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
    console.log('api test', values)
    try {
      await axios.post(`${TEST_API_URL}/mailing-early-access/create?apiKey=ABC123`, values)
      reset()
      toast.success('Signup Request Received!')
    } catch (e) {
      toast.error('Something Went Wrong')
    }
  }

  if (loading) return <></>

  if (modal.type === 'create')
    return (
      <Modal
        opened={modal.open}
        onClose={() => setModal({...modal, open: false})}
        // size={'40%'}
        withCloseButton={false}
        padding={0}
        className={'sm:w-full'}
      >
        <div className="bg-black my-px mx-px px-10 py-10 text-left lg:mt-0">
          <h6 className="py-2 text-xl uppercase text-[#DCDCDC]">Sign Up for Early Access!</h6>
          <form onSubmit={handleSubmit(onSubmit)} className={'text-white'}>
            <TextInputField
              name="name"
              placeholder="Type Your Name"
              control={control as any}
              error={name?.message}
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

            <button
              className="mt-2 rounded bg-red-600 hover:bg-red-800 px-4 py-1.5 text-sm text-light transition-all hover:bg-gray-900/80 w-full">
              Sign Up
            </button>
          </form>
        </div>
      </Modal>
    )
  return <></>
}