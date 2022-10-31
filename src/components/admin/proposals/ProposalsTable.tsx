import { SetStateAction, useState, Dispatch } from 'react'
import {
  Table,
  Loader,
  Button,
  createStyles,
  ScrollArea,
} from '@mantine/core'
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
}));

export interface ProposalType {
    created_at: string,
    downvotes: number,
    firstname: string,
    id: string,
    last_updated: string,
    lastname: string,
    no_of_comments: number,
    proposal_text: string,
    title: string,
    upvotes: number,
    user_id: string,
    username: string
}
export interface MoadalType {
    open: boolean, 
    size?: string, 
    type: "create" | "edit" | "delete"
}
interface ProposalsTableProps {
    proposals: ProposalType[];
    fetching: boolean;
    setModal: Dispatch<SetStateAction<MoadalType>>;
    setSelectedProposal: Dispatch<SetStateAction<ProposalType>>;
}

export const ProposalsTable = ({
  proposals,
  fetching,
  setModal,
  setSelectedProposal,
}: ProposalsTableProps) => {
  const { classes, cx } = useStyles()
  const [scrolled, setScrolled] = useState(false)
  const router = useRouter()

  const newposts =
    proposals.length > 0 ? (
      proposals.map((element: ProposalType, index: number) => (
        <tr key={index}>
          <td>{element.title}</td>
          <td>{element.id}</td>
          <td>{element.user_id}</td>
          <td>{element.username}</td>
          <td>{element.firstname}</td>
          <td>{element.lastname}</td>
          <td>{element.proposal_text}</td>
          <td>{element.downvotes}</td>
          <td>{element.upvotes}</td>
          <td>
            <Button
              onClick={() =>
                router.push(`/admin/proposals/comment/${element.id}`)
              }
              variant="light"
              color="green"
            >
              {element.no_of_comments}
            </Button>
          </td>
          <td>{new Date(element.created_at).toLocaleDateString()}</td>
          <td>{new Date(element.last_updated).toLocaleDateString()}</td>
          <td>
            <Button.Group>
              <Button
                onClick={() => {
                  setModal({ open: true, type: 'edit' })
                  setSelectedProposal(element)
                }}
                variant="light"
                color="blue"
              >
                <IconPencil style={{ zIndex: -1 }} />
              </Button>
              <Button
                onClick={() => {
                  setModal({ open: true, type: 'delete' })
                  setSelectedProposal(element)
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
            <th>title</th>
            <th>id</th>
            <th>user id</th>
            <th>username</th>
            <th>firstname</th>
            <th>lastname</th>
            <th>proposal text</th>
            <th>downvotes</th>
            <th>upvotes</th>
            <th>no of comments</th>
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
