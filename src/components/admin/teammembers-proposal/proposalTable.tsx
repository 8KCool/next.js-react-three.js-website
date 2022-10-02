import {
  Avatar,
  Button,
  createStyles,
  Loader,
  ScrollArea,
  Table
} from '@mantine/core'
import { IconCheck, IconPencil, IconX } from '@tabler/icons'
import { useState } from 'react'

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

export const PostsTable = ({
  posts,
  fetching,
  setModal,
  setSelectedPost,
  onApprove,
}: any) => {
  const { classes, cx } = useStyles()
  const [scrolled, setScrolled] = useState(false)

  const newposts = posts ? (
    posts.map((element: any, index: any) => (
      <tr key={index}>
        <td>{element.title}</td>
        <td>{element.name}</td>
        <td>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '0.2rem',
            }}
          >
            <Avatar src={element?.icon} alt="it's me" />
            <div
              style={{
                fontSize: '0.7rem',
                color: '#228BE6',
                cursor: 'pointer',
              }}
              onClick={() => {
                setModal({ open: true, type: 'changeIcon' })
                setSelectedPost(element)
              }}
            >
              Change
            </div>
          </div>
        </td>
        <td>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '0.2rem',
            }}
          >
            <Avatar src={element.image} alt="it's me" />
            <div
              style={{
                fontSize: '0.7rem',
                color: '#228BE6',
                cursor: 'pointer',
              }}
              onClick={() => {
                setModal({ open: true, type: 'changeImage' })
                setSelectedPost(element)
              }}
            >
              Change
            </div>
          </div>
        </td>
        <td>{element.backgroundInformation}</td>
        {/* <td>
          {element.categories.map((item: string, index: any) => (
            <Badge key={index}>{item}</Badge>
          ))}
        </td> */}
        {/* <td>
          {element.tags.map((item: string, index: any) => (
            <Badge key={index}>{item}</Badge>
          ))}
        </td> */}
        <td>{element.longDescription}</td>
        <td>{element.shortDescription}</td>
        <td>{element.project}</td>
        <td>{element.level}</td>
        <td>{element.position}</td>
        <td>{element.category}</td>
        <td>{element.proposal_id}</td>
        <td>{element.team_id}</td>

        <td>
          <Button.Group>
            <Button
              onClick={() => {
                setModal({ open: true, type: 'edit' })
                setSelectedPost(element)
              }}
              variant="light"
              color="blue"
            >
              <IconPencil style={{ zIndex: -1 }} />
            </Button>
            <Button
              onClick={() => {
                setModal({ open: true, type: 'delete' })
                setSelectedPost(element)
              }}
              variant="light"
              color="red"
            >
              <IconX style={{ zIndex: -1 }} />
            </Button>
            {!element.is_approved ? (
              <Button
                onClick={() => onApprove(element)}
                variant="light"
                color="green"
              >
                <IconCheck style={{ zIndex: -1 }} />
              </Button>
            ) : null}
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
            <th>Title</th>
            <th>Name</th>
            <th>Icon</th>
            <th>Image</th>
            <th>Background Information</th>
            <th>Long Description</th>
            <th>Short Description</th>
            <th>Project</th>
            <th>Level</th>
            <th>Position</th>
            <th>Category</th>
            <th>Proposal Id</th>
            <th>Team Id</th>
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
