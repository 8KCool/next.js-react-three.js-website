import React, { useEffect, useState } from 'react'
import {
  Button,
  Modal,
  Title,
  TextInput,
  Divider,
  createStyles,
} from '@mantine/core'
import axios from 'axios'
import { TEST_API_URL } from '../../../util/constants'
import toast from 'react-hot-toast'
import { determineAxios } from '../../../util/determines'
import { getErrorMsg } from '../../../util/api'

const useStyles = createStyles(() => ({
  inputContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '1rem',
    '@media only screen and (max-width: 850px)': {
      flexDirection: 'column',
    },
    '> div': {
      margin: '1rem'
    }
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

export interface Imodal {
  open: boolean
  size: string
  type: string
  id?: string
}
interface IMailingCreateModal {
  modal: Imodal
  setModal: React.Dispatch<React.SetStateAction<Imodal>>
}
export interface Language {
  id?: string
  english: string
  alpha2: string
  'alpha3-b': string
}

export const ManageLanguagesModal = ({
  modal,
  setModal,
}: IMailingCreateModal) => {
  const defaultLanguage: Language = {
    english: '',
    alpha2: '',
    'alpha3-b': ''
  }
  const [language, setLanguage] = useState<Language>(defaultLanguage)
  const { classes } = useStyles()

  useEffect(() => {
    if (modal.type === 'edit' && modal.open) {
      const getById = async () => {
        const m = await axios.get<{ Data: Language }>(`${TEST_API_URL}/managelanguages/get/${modal.id}`, {
          withCredentials: true,
          headers: {
            Authorization: `${localStorage.getItem('access_token')}`,
          },
        })

        setLanguage(m.data.Data)
      }

      void getById()
    } else if (!modal.open) setLanguage(defaultLanguage)
  }, [modal])

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    try {
      let data
      const payload = {
        english: language.english,
        alpha2: language.alpha2,
        ['alpha3-b']: language['alpha3-b']
      }

      if (modal.type === 'edit') {
        data = await axios.put(`${TEST_API_URL}/managelanguages/${language.id}`, payload, {
          withCredentials: true,
          headers: {
            Authorization: `${localStorage.getItem('access_token')}`,
          },
        })
      } else {
        data = await axios.post(`${TEST_API_URL}/managelanguages/create`, payload, {
          withCredentials: true,
          headers: {
            Authorization: `${localStorage.getItem('access_token')}`,
          },
        })
      }
      toast.success(`${modal.type === 'edit' ? 'Edited' : 'Created'} Successfully`)
    } catch (error) {
      toast.error(getErrorMsg(error))
    }
    setModal({ ...modal, open: false, id: undefined, type: 'reload' })
  }

  const handleDelete = async () => {
    try {
      const data = await axios.delete(`${TEST_API_URL}/managelanguages/${modal.id}`, {
        withCredentials: true,
        headers: {
          Authorization: `${localStorage.getItem('access_token')}`,
        },
      })
      toast.success('Deleted Successfully')
    } catch (error) {
      toast.error(getErrorMsg(error))
    }
    setModal({ ...modal, open: false, id: undefined, type: 'reload' })
  }

  // ****************************** API REQUEST FUNCTIONS END ******************************

  // this function closes the modal and sets the selected post to an empty string (resets the state variables)
  // this function is not called when closing create modal because we don't want to reset the variables,
  // in case the user accidentally closes the modal, the values will remain.

  if (modal.type === 'create' || modal.type === 'edit')
    return (
      <Modal
        opened={modal.open}
        onClose={() => setModal({ ...modal, open: false, id: undefined })}
        size={'100%'}
        withCloseButton={false}
        padding={0}
      >
        <Title mb={'2rem'} sx={{ padding: '20px' }}>
          {modal.type === 'edit' ? `Edit Language` : 'Create a new Language'}
        </Title>
        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
          onSubmit={handleSubmit}
        >
          <section
            className={classes.inputContainer}
            style={{ padding: '0 20px 20px' }}
          >
            <TextInput
              label="English"
              value={language.english}
              onChange={(e) => setLanguage({ ...language, english: e.target.value })}
            />
            <TextInput
              label="alpha2"
              value={language.alpha2}
              onChange={(e) => setLanguage({ ...language, alpha2: e.target.value })}
            />
            <TextInput
              label="alpha3-b"
              value={language['alpha3-b']}
              onChange={(e) => setLanguage({ ...language, ['alpha3-b']: e.target.value })}
            />
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
              onClick={handleSubmit}
            >
              Submit
            </Button>
            <Button
              variant="outline"
              color="blue"
              onClick={() => setModal({ ...modal, open: false, id: undefined })}
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
        onClose={() => setModal({ ...modal, open: false, id: undefined })}
        size={'md'}
        withCloseButton={false}
      >
        <Title order={4}>
          Are you sure you want to delete {language.english} ?
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
          <Button variant="outline" color="gray" onClick={() => setModal({ ...modal, open: false, id: undefined })}>
            cancel
          </Button>
        </div>
      </Modal>
    )

  return <></>
}
