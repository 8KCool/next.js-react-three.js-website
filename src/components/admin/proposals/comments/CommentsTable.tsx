import { SetStateAction, useState, Dispatch } from 'react'
import { Table, Loader, Button, createStyles, ScrollArea } from '@mantine/core'
import { IconPencil, IconX, IconThumbUp } from '@tabler/icons'

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

export interface CommentType {
  comment: string
  created_at: string
  id: string
  last_updated: string
  proposal_id: string
  user_commented: string
  user_commented_id: string
  user_posted: string
  user_posted_id: string
  upvotes: number
}

export interface MoadalType {
  open: boolean
  size?: string
  type: 'create' | 'edit' | 'delete' | 'upvote'
}
interface ProposalsTableProps {
  comments: CommentType[]
  fetching: boolean
  setModal: Dispatch<SetStateAction<MoadalType>>
  setSelectedComment: Dispatch<SetStateAction<CommentType>>
}

export const CommentsTable = ({
  comments,
  fetching,
  setModal,
  setSelectedComment,
}: ProposalsTableProps) => {
  const { classes, cx } = useStyles()
  const [scrolled, setScrolled] = useState(false)

  const newposts =
    comments.length > 0 ? (
      comments.map((element: CommentType, index: number) => (
        <tr key={index}>
          <td>{element.comment}</td>
          <td>{element.id}</td>
          <td>{element.user_commented}</td>
          <td>{element.user_commented_id}</td>
          <td>{element.user_posted}</td>
          <td>{element.user_posted_id}</td>
          <td>{element.upvotes}</td>
          <td>{new Date(element.created_at).toLocaleDateString()}</td>
          <td>{new Date(element.last_updated).toLocaleDateString()}</td>
          <td>
            <Button.Group>
             
             <Button
                onClick={() => {
                  setModal({ open: true, type: 'upvote' })
                  setSelectedComment(element)
                }}
                variant="light"
                color="green"
              >
                <IconThumbUp style={{ zIndex: -1 }} />
              </Button>

              <Button
                onClick={() => {
                  setModal({ open: true, type: 'edit' })
                  setSelectedComment(element)
                }}
                variant="light"
                color="blue"
              >
                <IconPencil style={{ zIndex: -1 }} />
              </Button>
              <Button
                onClick={() => {
                  setModal({ open: true, type: 'delete' })
                  setSelectedComment(element)
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
            <th>comment</th>
            <th>id</th>
            <th>user commented</th>
            <th>user commented id</th>
            <th>user posted</th>
            <th>user posted id</th>
            <th>upvotes</th>
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
