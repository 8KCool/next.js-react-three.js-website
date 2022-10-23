import { SetStateAction, useState, Dispatch } from 'react'
import { Table, Loader, Button, createStyles, ScrollArea } from '@mantine/core'
import { IconPencil, IconX } from '@tabler/icons'
import { useRouter } from 'next/router'

const useStyles = createStyles((theme) => ({
  header: {
    position: 'sticky',
    top: 0,
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    transition: 'box-shadow 150ms ease',

    '&::after': {
      content: '""',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      borderBottom: `1px solid ${
        theme.colorScheme === 'dark'
          ? theme.colors.dark[3]
          : theme.colors.gray[2]
      }`,
    },
  },

  scrolled: {
    boxShadow: theme.shadows.sm,
  },

  tableArea: {
    width: 'calc(100vw - 40px)',
    margin: '0 auto',
    '& @media only screen and (max-width: 600px)': {},
  },

  '& *': {
    fontSize: '0.75rem',
  },
}))

export interface UserType {
  adderss: string
  created_at: string
  deleted_at: string
  email: string
  first_name: string
  gender: string
  id: string
  last_name: string
  password: string
  phone: string
  role_id: number
  updated_at: string
  user_role: {
    created_at: string
    id: number
    name: string
    updated_at: string
  }
  username: string
}

export interface MoadalType {
  open: boolean
  size?: string
  type: 'create' | 'edit' | 'delete'
}
interface UsersTableProps {
  users: UserType[]
  fetching: boolean
  setModal: Dispatch<SetStateAction<MoadalType>>
  setSelectedUsers: Dispatch<SetStateAction<UserType>>
}

export const UsersTable = ({
  users,
  fetching,
  setModal,
  setSelectedUsers,
}: UsersTableProps) => {
  const { classes, cx } = useStyles()
  const [scrolled, setScrolled] = useState(false)
  const router = useRouter()

  const newposts =
  users.length > 0 ? (
    users.map((element: UserType, index: number) => (
        <tr key={index}>
          <td>{element.id}</td>
          <td>{element.username}</td>
          <td>{element.first_name}</td>
          <td>{element.last_name}</td>
          <td>{element.adderss}</td>
          <td>{element.email}</td>
          <td>{element.gender}</td>
          <td>{element.phone}</td>
          <td>{element.role_id}</td>
          <td>{element.password}</td>
          <td>{new Date(element.created_at).toLocaleDateString()}</td>
          <td>{new Date(element.updated_at).toLocaleDateString()}</td>
          <td>
            <Button.Group>
              <Button
                onClick={() => {
                  setModal({ open: true, type: 'edit' })
                  setSelectedUsers(element)
                }}
                variant="light"
                color="blue"
              >
                <IconPencil style={{ zIndex: -1 }} />
              </Button>
              <Button
                onClick={() => {
                  setModal({ open: true, type: 'delete' })
                  setSelectedUsers(element)
                }}
                variant="light"
                color="red"
              >
                <IconX style={{ zIndex: -1 }} />
              </Button>
            </Button.Group>
          </td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan={9}>No Items</td>
      </tr>
    )

  if (fetching)
    return (
      <main
        style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
      >
        <Loader />
      </main>
    )

  return (
    <ScrollArea
      sx={{ height: 'calc(100vh - 155px - 2rem)' }}
      className={classes.tableArea}
      onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
    >
      <Table
        sx={{
          minWidth: 700,
          '& td': {
            maxWidth: '200px',
            wordWrap: 'break-word',
          },
          '& th': {
            textTransform: 'capitalize',
          },
        }}
      >
        <thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
          <tr>
            <th>id</th>
            <th>username</th>
            <th>firstname</th>
            <th>lastname</th>
            <th>adderss</th>
            <th>email</th>
            <th>gender</th>
            <th>phone</th>
            <th>role_id</th>
            <th>password</th>
            <th>date created</th>
            <th>last updated</th>
            <th colSpan={2} align="right">
              actions
            </th>
          </tr>
        </thead>
        <tbody>{newposts}</tbody>
      </Table>
    </ScrollArea>
  )
}
