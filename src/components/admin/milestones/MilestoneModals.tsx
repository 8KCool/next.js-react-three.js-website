// This file is responsible for handling models that dispalay on admin/posts-proposal (create-edit-delete) modals
// all the post-proposal info are state variables and they change based on what is the current modal

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
import { Milestone } from '../../../types/Milestone'
import { useRouter } from 'next/router'
import { getErrorMsg } from '../../../util/api'

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
interface IMilestoneModals {
  modal: Imodal
  setModal: React.Dispatch<React.SetStateAction<Imodal>>
  selectedMilestone: Milestone
  setSelectedMilestone: React.Dispatch<
    React.SetStateAction<Record<string, any>>
  >
  fetchFunction: () => Promise<void>
}
export const MilestoneModals = ({
  modal,
  setModal,
  selectedMilestone,
  setSelectedMilestone,
  fetchFunction,
}: IMilestoneModals) => {
  const [image, setImage] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [timeType, setTimeType] = useState('')
  const [loading, setLoading] = useState(false)

  const { classes } = useStyles()
  useEffect(() => {
    if (!selectedMilestone || Object.keys(selectedMilestone).length === 0) {
      setTitle('')
      setImage('')
      setDescription('')
      setTimeType('')
      return setLoading(false)
    }
    if (Object.keys(selectedMilestone).length === 0) return setLoading(true)
    setTitle(selectedMilestone.title)
    setImage(selectedMilestone.image as '')
    setDescription(selectedMilestone.description)
    setTimeType(selectedMilestone.timeType)
    setLoading(false)
  }, [selectedMilestone])

  // ****************************** API REQUEST FUNCTIONS ******************************

  const handleDelete = async () => {
    try {
      await axios.delete(`${TEST_API_URL}/milestone/${selectedMilestone.id}`, {
        withCredentials: true,
        headers: {
          Authorization: `${localStorage.getItem('access_token')}`,
        },
      })
      void fetchFunction()
      toast.success('Deleted Successfully')
      setModal({ ...modal, open: false })
    } catch (error) {
      toast.error(getErrorMsg(error))
    }
  }
  const handleCreate = async (e: any) => {
    e.preventDefault()
    console.log('Handle Create')
    const newMilestone = {
      title,
      image,
      description,
      timeType,
      date: '2021-12-10 15:04:35', // test data, must be replaced later
    }
    try {
      await axios.post(`${TEST_API_URL}/milestone/create`, newMilestone, {
        withCredentials: true,
        headers: {
          Authorization: `${localStorage.getItem('access_token')}`,
        },
      })
      void fetchFunction()
      setModal({ ...modal, open: false })
      toast.success('Created Successfully')
    } catch (error) {
      toast.error(getErrorMsg(error))
    }
  }
  const handleEdit = async () => {
    const newMilestone = {
      title,
      image,
      description,
      timeType,
      date: '2021-12-10 15:04:35', // test data, must be replaced later
    }
    try {
      await axios.put(
        `${TEST_API_URL}/milestone/${selectedMilestone.id}}`,
        newMilestone,
        {
          withCredentials: true,
          headers: {
            Authorization: `${localStorage.getItem('access_token')}`,
          },
        }
      )
      void fetchFunction()
      setModal({ ...modal, open: false })
      toast.success('Created Successfully')
    } catch (error) {
      toast.error(getErrorMsg(error))
    }
  }

  const handleGetMilestone = async () => {
    try {
      await axios.get(
        `${TEST_API_URL}/milestone/get/${selectedMilestone.id}}`,
        {
          withCredentials: true,
          headers: {
            Authorization: `${localStorage.getItem('access_token')}`,
          },
        }
      )
    } catch (error) {
      toast.error(getErrorMsg(error))
    }
  }

  const handleEditImage = async () => {
    try {
      await axios.put(
        `${TEST_API_URL}/milestone/${selectedMilestone.id}/image`,
        {
          withCredentials: true,
          headers: {
            Authorization: `${localStorage.getItem('access_token')}`,
          },
        }
      )
    } catch (error) {
      toast.error(getErrorMsg(error))
    }
  }

  // ****************************** API REQUEST FUNCTIONS END ******************************

  // this function closes the modal and sets the selected post proposal to an empty string (resets the state variables)
  // this function is not called when closing create modal because we don't want to reset the variables,
  // in case the user accidentally closes the modal, the values will remain.
  const handleClose = () => {
    setSelectedMilestone({})
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
          Create a new milestone
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
                  label="Put image url"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
                <TextInput
                  label="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
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
                label="Time type"
                value={timeType}
                onChange={(e) => setTimeType(e.target.value)}
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
        onClose={() => handleClose}
        size={'md'}
        withCloseButton={false}
      >
        <Title order={4}>
          Are you sure you want to delete {selectedMilestone.title} ?
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
          Editing {selectedMilestone.title}
        </Title>
        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
          onSubmit={handleEdit}
        >
          <section
            className={classes.inputContainer}
            style={{ padding: '0 20px 20px' }}
          >
            <div className={classes.formChild}>
              <div className={classes.inputContainer}>
                <TextInput
                  label="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <TextInput
                  label="Put new image url"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
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
                label="Time type"
                value={timeType}
                onChange={(e) => setTimeType(e.target.value)}
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
