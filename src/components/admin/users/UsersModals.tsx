import React, { useEffect, useState } from 'react'
import {
  Button,
  Modal,
  Title,
  TextInput,
  Textarea,
  Divider,
  createStyles,
} from '@mantine/core'
import { MoadalType, UserType } from './UsersTable'
import axios from 'axios'
import { TEST_API_URL } from '../../../util/constants'
import toast from 'react-hot-toast'

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

interface UsersModalsType {
  modal: MoadalType
  setModal: React.Dispatch<React.SetStateAction<MoadalType>>
  selectedUser: UserType
  setSelectedUser: React.Dispatch<React.SetStateAction<UserType>>
  fetchFunction: () => Promise<void>
}

const ModalCreate: React.FC<UsersModalsType> = (props) => {
  const [address, setAddress] = useState('')
  const [email, setEmail] = useState('')
  const [first_name, setFirstName] = useState('')
  const [gender, setGender] = useState('')
  const [last_name, setLastName] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [role_id, setRoleId] = useState(0)
  const [username, setUsername] = useState('')

  const { classes } = useStyles()

  const handleCreate = async (e: any) => {
    e.preventDefault()
    const newUser = {
      address,
      email,
      first_name,
      gender,
      last_name,
      password,
      phone,
      role_id,
      username,
    }
    try {
      await axios.post(`${TEST_API_URL}/users`, newUser, {
        withCredentials: true,
        headers: {
          Authorization: `${localStorage.getItem('access_token')}`,
        },
      })
      toast.success('Created Successfully')
      props.setModal({ ...props.modal, open: false })
      void props.fetchFunction()
    } catch (error) {
      let errMsg
      if (axios.isAxiosError(error) && error.response) {
        errMsg = error.response.data.Data.Message as string
      } else errMsg = String(error)
      toast.error(errMsg)
    }
  }

  const handleClose = () => {
    props.setModal({ ...props.modal, open: false })
    setAddress('')
    setEmail('')
    setFirstName('')
    setLastName('')
    setGender('')
    setPassword('')
    setPhone('')
    setRoleId(0)
    setUsername('')
  }

  return (
    <Modal
      opened={props.modal.open}
      onClose={handleClose}
      size={'100%'}
      withCloseButton={false}
      padding={0}
    >
      <Title mb={'2rem'} sx={{ padding: '20px' }}>
        Create a new User
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
                label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className={classes.inputContainer}>
              <TextInput
                label="FirstName"
                value={first_name}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className={classes.inputContainer}>
              <TextInput
                label="LastName"
                value={last_name}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className={classes.inputContainer}>
              <TextInput
                label="Gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              />
            </div>
            <div className={classes.inputContainer}>
              <TextInput
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={classes.inputContainer}>
              <TextInput
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className={classes.inputContainer}>
              <TextInput
                label="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className={classes.inputContainer}>
              <TextInput
                label="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className={classes.inputContainer}>
              <TextInput
                type={"number"}
                label="RoleId"
                value={role_id.toString()}
                onChange={(e) => setRoleId(parseInt(e.target.value))}
              />
            </div>
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
          <Button variant="outline" type="submit" color="green" mr={'1rem'}>
            Submit
          </Button>
          <Button variant="outline" color="blue" onClick={handleClose}>
            cancel
          </Button>
        </div>
      </form>
    </Modal>
  )
}

const ModalEdit: React.FC<UsersModalsType> = (props) => {
  const { classes } = useStyles()
  const [user, setUser] = useState(props.selectedUser)

  useEffect(() => {
    setUser(props.selectedUser)
  }, [props.selectedUser])
  const handleClose = () => {
    props.setModal({ ...props.modal, open: false })
  }

  const handleEdit = async (e: any) => {
    e.preventDefault()

    try {
      await axios.put(`${TEST_API_URL}/users`, user, {
        withCredentials: true,
        headers: {
          Authorization: `${localStorage.getItem('access_token')}`,
        },
      })
      toast.success('Created Successfully')
      handleClose()
      void props.fetchFunction()
    } catch (error) {
      toast.error('An error occured')
    }
  }

  return (
    <Modal
      opened={props.modal.open}
      onClose={handleClose}
      size={'100%'}
      withCloseButton={false}
      padding={0}
    >
      <Title mb={'2rem'} sx={{ padding: '20px' }}>
        Update a User
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
                label="FirstName"
                value={user.first_name}
                onChange={(e) =>
                  setUser({ ...user, first_name: e.target.value })
                }
              />
            </div>
            <div className={classes.inputContainer}>
              <TextInput
                label="LastName"
                value={user.last_name}
                onChange={(e) =>
                  setUser({ ...user, last_name: e.target.value })
                }
              />
            </div>
            <div className={classes.inputContainer}>
              <TextInput
                label="Adderss"
                value={user.adderss}
                onChange={(e) => setUser({ ...user, adderss: e.target.value })}
              />
            </div>
            <div className={classes.inputContainer}>
              <TextInput
                label="Email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>
            <div className={classes.inputContainer}>
              <TextInput
                label="Gender"
                value={user.gender}
                onChange={(e) => setUser({ ...user, gender: e.target.value })}
              />
            </div>{' '}
            <div className={classes.inputContainer}>
              <TextInput
                label="Phone"
                value={user.phone}
                onChange={(e) => setUser({ ...user, phone: e.target.value })}
              />
            </div>{' '}
            <div className={classes.inputContainer}>
              <TextInput
               type={"number"}
                label="Role Id"
                value={user.role_id}
                onChange={(e) =>
                  setUser({ ...user, role_id: parseInt(e.target.value) })
                }
              />
            </div>
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
          <Button variant="outline" type="submit" color="green" mr={'1rem'}>
            Submit
          </Button>
          <Button variant="outline" color="blue" onClick={handleClose}>
            cancel
          </Button>
        </div>
      </form>
    </Modal>
  )
}

const ModalDelete: React.FC<UsersModalsType> = (props) => {
  const handleClose = () => {
    props.setModal({ ...props.modal, open: false })
  }

  const handleDelete = async () => {
    try {
      await axios.delete(
        `${TEST_API_URL}/users/${props.selectedUser.username}`,
        {
          withCredentials: true,
          headers: {
            Authorization: `${localStorage.getItem('access_token')}`,
          },
        }
      )
      toast.success('Deleted Successfully')
      handleClose()
      void props.fetchFunction()
    } catch (error) {
      toast.error('An error occured')
    }
  }

  return (
    <Modal
      opened={props.modal.open}
      onClose={handleClose}
      size={'md'}
      withCloseButton={false}
    >
      <Title order={4}>
        Are you sure you want to delete {props.selectedUser.username} ?
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
}

export const UsersModals: React.FC<UsersModalsType> = (props) => {
  const { modal } = props

  return (
    <div>
      {
        {
          create: <ModalCreate {...props} />,
          edit: <ModalEdit {...props} />,
          delete: <ModalDelete {...props} />,
        }[modal.type]
      }
    </div>
  )
}
