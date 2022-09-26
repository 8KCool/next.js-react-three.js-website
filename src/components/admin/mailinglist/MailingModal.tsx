import React, { useState } from 'react'
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
import { MailingData } from './MailingListTable'

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
}
interface IMailingCreateModal {
  modal: Imodal
  setModal: React.Dispatch<React.SetStateAction<Imodal>>
}
export interface Mailing {
  country: string
  email: string
  message: string
  name: string
}

export interface VerifyMailing {
  email: string
  code: string
}

export const MailingCreateModal = ({
  modal,
  setModal,
}: IMailingCreateModal) => {
  const defaultMailing: Mailing = {
    country: '',
    email: '',
    message: '',
    name: '',
  }
  const defaultVerifyMailing: VerifyMailing = {
    email: '',
    code: '',
  }
  const [mailing, setMailing] = useState<Mailing>(defaultMailing)
  const [verfiyMailing, setVerifyMailing] = useState<VerifyMailing>(defaultVerifyMailing)

  const { classes } = useStyles()

  const handleCreate = async (e: any) => {
    e.preventDefault()
    const validate = RegExp(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g)
                
    if (!validate.test(mailing.email)) {
      toast.error('Email is invalid')
      return
    }

    try {
      const data = await axios.post(`${TEST_API_URL}/mailinglist/create`, mailing, {
        withCredentials: true,
        headers: {
          Authorization: `${localStorage.getItem('access_token')}`,
        },
      })
      toast.success('Created Successfully')
      setMailing(defaultMailing)
      setModal({ ...modal, open: false, type: 'reload' })
    } catch (error) {
      toast.error(getErrorMsg(error))
    }
  }

  const handleVerify = async (e: any) => {
    e.preventDefault()
    const validate = RegExp(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g)
                
    if (!validate.test(verfiyMailing.email)) {
      toast.error('Email is invalid')
      return
    }

    try {
      const m = await axios.get<{ Data: MailingData }>(`${TEST_API_URL}/mailinglist/verify`, {
        withCredentials: true,
        headers: {
          Authorization: `${localStorage.getItem('access_token')}`,
        },
        params: verfiyMailing
      })
      toast.success(`${m.data.Data.email} is verified Successfully`)
      setVerifyMailing(defaultVerifyMailing)
      setModal({ ...modal, open: false, type: 'reload' })
    } catch (error) {
      toast.error(getErrorMsg(error))
    }
  }

  // ****************************** API REQUEST FUNCTIONS END ******************************

  // this function closes the modal and sets the selected post to an empty string (resets the state variables)
  // this function is not called when closing create modal because we don't want to reset the variables,
  // in case the user accidentally closes the modal, the values will remain.

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
          Create a new Mailing
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
            <TextInput
              label="Country"
              value={mailing.country}
              onChange={(e) => setMailing({ ...mailing , country: e.target.value })}
            />
            <TextInput
              label="Email"
              value={mailing.email}
              onChange={(e) => setMailing({ ...mailing , email: e.target.value })}
            />
            <TextInput
              label="Message"
              value={mailing.message}
              onChange={(e) => setMailing({ ...mailing , message: e.target.value })}
            />
            <TextInput
              label="Name"
              value={mailing.name}
              onChange={(e) => setMailing({ ...mailing , name: e.target.value })}
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

    if (modal.type === 'verify')
    return (
      <Modal
        opened={modal.open}
        onClose={() => setModal({ ...modal, open: false })}
        size={'100%'}
        withCloseButton={false}
        padding={0}
      >
        <Title mb={'2rem'} sx={{ padding: '20px' }}>
          Verify a Mailing
        </Title>
        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
          onSubmit={handleVerify}
        >
          <section
            className={classes.inputContainer}
            style={{ padding: '0 20px 20px' }}
          >
            <TextInput
              label="Email"
              value={verfiyMailing.email}
              onChange={(e) => setVerifyMailing({ ...verfiyMailing , email: e.target.value })}
            />
            <TextInput
              label="Code"
              value={verfiyMailing.code}
              onChange={(e) => setVerifyMailing({ ...verfiyMailing , code: e.target.value })}
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
              onClick={handleVerify}
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
  return <></>
}
