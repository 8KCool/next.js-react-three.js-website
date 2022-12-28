import React, { useState, useEffect } from 'react'
import {
    Modal,
    createStyles,
} from '@mantine/core'
import axios from 'axios'
import toast from 'react-hot-toast'
import { TextInputField } from '../../shared/Forms/TextInputField'
import { SubscribeForm } from '../../../types/SubscribeForm'
import { useForm } from 'react-hook-form'
import { validateEmail } from '../../../util/functions'

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
    modal,
    setModal,
    selectedPost,
    setSelectedPost,
    fetchFunction,
}: IPostModals) => {
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

    if (loading) return <></>

    if (modal.type === 'create')
        return (
            <Modal
                opened={modal.open}
                onClose={() => setModal({ ...modal, open: false })}
                size={'40%'}
                withCloseButton={false}
                padding={0}
            >
                <div className="my-3 px-10 py-10 text-left lg:mt-0">
                    <h6 className="py-2 text-xl uppercase text-[#DCDCDC]">Sign Up for Early Access!</h6>
                    <form onSubmit={handleSubmit(onSubmit)}>
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

                        <button className="mt-2 rounded bg-gray-900 px-4 py-1.5 text-sm text-light transition-all hover:bg-gray-900/80 w-full">
                            Sign Up
                        </button>
                    </form>
                </div>
            </Modal>
        )
    return <></>
}