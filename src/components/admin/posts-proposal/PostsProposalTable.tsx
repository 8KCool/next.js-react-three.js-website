import {
  Badge,
  Button,
  createStyles,
  Loader,
  ScrollArea,
  Table,
} from '@mantine/core'
import { IconPencil, IconX } from '@tabler/icons'
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

export const PostsProposalTable = ({
  posts,
  fetching,
  setModal,
  setSelectedPostProposal,
}: any) => {
  const { classes, cx } = useStyles()
  const [scrolled, setScrolled] = useState(false)

  const newposts =
    posts.length > 0 ? (
      posts.map((element: any, index: number) => (
        <tr key={index}>
          <td>{element.title}</td>
          <td>{element.author}</td>
          <td>{element.content}</td>
          <td>
            {(element.categories || []).map((item: string, index: any) => (
              <Badge key={index}>{item}</Badge>
            ))}
          </td>
          <td>
            {(element.tags || []).map((item: string, index: any) => (
              <Badge key={index}>{item}</Badge>
            ))}
          </td>
          <td>{element.original_filename}</td>
          <td>{new Date(element.date_created as Date).toLocaleDateString()}</td>
          <td>{new Date(element.date_updated as Date).toLocaleDateString()}</td>
          <td>
            <Button.Group>
              <Button
                onClick={() => {
                  setModal({ open: true, type: 'edit' })
                  setSelectedPostProposal(element)
                }}
                variant="light"
                color="blue"
              >
                <IconPencil style={{ zIndex: -1 }} />
              </Button>
              <Button
                onClick={() => {
                  setModal({ open: true, type: 'delete' })
                  setSelectedPostProposal(element)
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
            <th>author</th>
            <th>content</th>
            <th>categories</th>
            <th>tags</th>
            <th>original filename</th>
            <th>date created</th>
            <th>date updated</th>
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
