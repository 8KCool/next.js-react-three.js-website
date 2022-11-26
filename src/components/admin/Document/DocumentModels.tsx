// This file is responsible for handling models that dispalay on admin/Documents (create-edit-delete) modals
// all the Document info are state variables and they change based on what is the current modal

// the requests are made on ***handleCreate, handleEdit and handleDelete*** functions

import React, { useState, useEffect } from 'react'
import {
    Button,
    Modal,
    Title,
    TextInput,
    Textarea,
    Divider,
    createStyles,
} from '@mantine/core'
import axios from 'axios'
import { TEST_API_URL } from '../../../util/constants'
import toast from 'react-hot-toast'
import { DocumentPost } from '../../../types/DocumentPost'

const useStyles = createStyles(() => ({
    inputContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '1rem',
        '@media only screen and (max-width: 850px)': {
            flexDirection: 'column',
        },
    },
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        textAlignLast: 'end',
    },
    formChild: {
        width: '100%',
        margin: '0 1rem',
        '@media only screen and (max-width: 850px)': {
            margin: '0',
            marginBottom: '2rem',
        },
    },
}))

interface Imodal {
    open: boolean
    size: string
    type: string
}
interface IDocumentModals {
    modal: Imodal
    setModal: React.Dispatch<React.SetStateAction<Imodal>>
    selectedDocument: DocumentPost
    setSelectedDocument: React.Dispatch<React.SetStateAction<Record<string, any>>>
    fetchFunction: () => Promise<void>
}
export const DocumentModals = ({
    modal,
    setModal,
    selectedDocument,
    setSelectedDocument,
    fetchFunction,
}: IDocumentModals) => {
    const [type, setType] = useState('')
    const [description, setDescription] = useState('')
    const [created_by, setCreated_by] = useState('')
    const [updated_by, setUpdated_by] = useState('')
    const [deleted_by, setDeleted_by] = useState('')
    const [created_at, setCreated_at] = useState('')
    const [updated_at, setUpdated_at] = useState('')

    const [loading, setLoading] = useState(true)

    const { classes } = useStyles()

    useEffect(() => {
        if (!selectedDocument || Object.keys(selectedDocument).length === 0) {
            setType('')
            setDescription('')
            setCreated_by('')
            setUpdated_by('')
            setDeleted_by('')
            setCreated_at('')
            setUpdated_at('')
            return setLoading(false)
        }
        if (Object.keys(selectedDocument).length === 0) return setLoading(true)
        setType(selectedDocument.type)
        setDescription(selectedDocument.description)
        setCreated_by(selectedDocument.created_by)
        setUpdated_by(selectedDocument.updated_by)
        setDeleted_by(selectedDocument.deleted_by)
        setCreated_at(selectedDocument.created_at)
        setUpdated_at(selectedDocument.updated_at)
        setLoading(false)
    }, [selectedDocument])

    // ****************************** API REQUEST FUNCTIONS ******************************
    const handleDelete = async () => {
        try {
            await axios.delete(`${TEST_API_URL}/document/delete/${selectedDocument.id}`, {
                withCredentials: true,
                headers: {
                    Authorization: `${localStorage.getItem('access_token')}`,
                },
            })
            toast.success('Deleted Successfully')
            setModal({ ...modal, open: false })
            void fetchFunction()
        } catch (error) {
            toast.error('An error occured')
        }
    }
    const handleCreate = async (e: any) => {
        e.preventDefault()
        // if(type.length )
        const newDocument = {
            type,
            description
        }

        try {
            await axios.post(`${TEST_API_URL}/document/create`, newDocument, {
                withCredentials: true,
                headers: {
                    Authorization: `${localStorage.getItem('access_token')}`,
                },
            })
            toast.success('Created Successfully')
            setModal({ ...modal, open: false })
            void fetchFunction()
        } catch (error) {
            // Aiko:
            // this can be encapsulated in a function logError(error)
            // since typescript is strong typed, it requires you to declare
            // the type of error you handling. In this case, it is AxiosError
            let errMsg;
            if (axios.isAxiosError(error) && error.response) {
                errMsg = error.response.data.message as string;
            } else errMsg = String(error);
            toast.error(errMsg)
        }
    }

    const handleEdit = async () => {
        const newDocument = {
            id: selectedDocument.id,
            type,
            description,
            created_by,
            updated_by,
            deleted_by,
            created_at,
            updated_at,
        }
        try {
            await axios.put(
                `${TEST_API_URL}/document/update`,
                newDocument,
                {
                    withCredentials: true,
                    headers: {
                        Authorization: `${localStorage.getItem('access_token')}`,
                    },
                }
            )
            toast.success('Created Successfully')
            setModal({ ...modal, open: false })
            void fetchFunction()
        } catch (error) {
            toast.error('An error occured')
        }
    }

    // ****************************** API REQUEST FUNCTIONS END ******************************

    // this function closes the modal and sets the selected Document to an empty string (resets the state variables)
    // this function is not called when closing create modal because we don't want to reset the variables,
    // in case the user accidentally closes the modal, the values will remain.
    const handleClose = () => {
        setSelectedDocument({})
        setModal({ ...modal, open: false })
    }

    if (loading) return <></>

    if (modal.type === 'create')
        return (
            <Modal
                opened={modal.open}
                onClose={() => setModal({ ...modal, open: false })}
                size={'100%'}
                withCloseButton={false}
                padding={0}
            >
                <Title mb={'2rem'} sx={{ padding: '20px' }}>
                    Create a new documets
                </Title>
                <form
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                    onSubmit={handleCreate}
                >
                    <section
                        className={classes.inputContainer}
                        style={{ padding: '0 20px 20px' }}
                    >
                        <div className={classes.formChild}>
                            <div className={classes.inputContainer}>
                                <TextInput
                                    label="Type"
                                    value={type}
                                    onChange={(e) => setType(e.target.value)}
                                />
                            </div>
                            <Textarea
                                label="Description"
                                minRows={4}
                                maxRows={6}
                                value={description}
                                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                                    setDescription(e.currentTarget.value)
                                }
                            />
                        </div>
                    </section>
                    <Divider />
                    <div
                        style={{
                            padding: '20px',
                            display: 'flex',
                            justifyContent: 'flex-end',
                        }}
                    >
                        <Button
                            variant="outline"
                            type="submit"
                            color="green"
                            mr={'1rem'}
                            onClick={handleCreate}
                        >
                            Submit
                        </Button>
                        <Button
                            variant="outline"
                            color="blue"
                            onClick={() => setModal({ ...modal, open: false })}
                        >
                            cancel
                        </Button>
                    </div>
                </form>
            </Modal>
        )

    if (modal.type === 'delete')
        return (
            <Modal
                opened={modal.open}
                onClose={handleClose}
                size={'md'}
                withCloseButton={false}
            >
                <Title order={4}>
                    Are you sure you want to delete {selectedDocument.type} ?
                </Title>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        marginTop: '2rem',
                    }}
                >
                    <Button
                        mr={'1rem'}
                        variant="outline"
                        color="red"
                        onClick={handleDelete}
                    >
                        Delete
                    </Button>
                    <Button variant="outline" color="gray" onClick={handleClose}>
                        cancel
                    </Button>
                </div>
            </Modal>
        )

    if (modal.type === 'edit')
        return (
            <Modal
                opened={modal.open}
                onClose={handleClose}
                size={'100%'}
                withCloseButton={false}
                padding={0}
            >
                <Title mb={'2rem'} sx={{ padding: '20px' }}>
                    Editing {selectedDocument.type}
                </Title>
                <form
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                    onSubmit={() => handleEdit()}
                >
                    <section
                        className={classes.inputContainer}
                        style={{ padding: '0 20px 20px' }}
                    >
                        <div className={classes.formChild}>
                            <div className={classes.inputContainer}>
                                <TextInput
                                    label="Type"
                                    value={type}
                                    onChange={(e) => setType(e.target.value)}
                                />
                            </div>
                            <Textarea
                                label="Description"
                                minRows={4}
                                maxRows={6}
                                value={description}
                                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                                    setDescription(e.currentTarget.value)
                                }
                            />
                            <TextInput
                                label="Created_by"
                                value={created_by}
                                onChange={(e) => setCreated_by(e.target.value)}
                            />
                            <TextInput
                                label="Updated_by"
                                value={updated_by}
                                onChange={(e) => setUpdated_by(e.target.value)}
                            />
                            <TextInput
                                label="Deleted_by"
                                value={deleted_by}
                                onChange={(e) => setDeleted_by(e.target.value)}
                            />
                            <TextInput
                                label="Created_at"
                                value={created_at}
                                onChange={(e) => setCreated_at(e.target.value)}
                            />
                            <TextInput
                                label="Updated_at"
                                value={updated_at}
                                onChange={(e) => setUpdated_at(e.target.value)}
                            />
                        </div>
                    </section>
                    <Divider />
                    <div
                        style={{
                            padding: '20px',
                            display: 'flex',
                            justifyContent: 'flex-end',
                        }}
                    >
                        <Button
                            variant="outline"
                            type="submit"
                            color="blue"
                            mr={'1rem'}
                            onClick={handleEdit}
                        >
                            Update
                        </Button>
                        <Button variant="outline" color="blue" onClick={handleClose}>
                            cancel
                        </Button>
                    </div>
                </form>
            </Modal>
        )
    return <></>
}
