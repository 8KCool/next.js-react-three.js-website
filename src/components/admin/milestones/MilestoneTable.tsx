import {
  Badge,
  Button,
  createStyles,
  Loader,
  ScrollArea,
  Table,
} from '@mantine/core'
// import Image from 'next/image'
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
      borderBottom: `1px solid ${theme.colorScheme === 'dark'
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

export const MilestoneTable = ({
  milestones,
  fetching,
  setModal,
  setSelectedMilestone,
}: any) => {
  const { classes, cx } = useStyles()
  const [scrolled, setScrolled] = useState(false)

  const newMilestones =
    milestones?.length > 0 ? (
      milestones.map((element: any, index: number) => (
        <tr key={index}>
          <td>
            <img
              loading='lazy'
              width="30px"
              height="30px"
              alt={element.title}
              src={element.image}
            />
          </td>
          <td>{element.title}</td>
          <td>{element.description}</td>
          <td>{new Date(element.date as Date).toLocaleDateString()}</td>
          <td>{element.timeType}</td>
          <td>
            <Button.Group>
              <Button
                onClick={() => {
                  setModal({ open: true, type: 'edit' })
                  setSelectedMilestone(element)
                }}
                variant="light"
                color="blue"
              >
                <IconPencil style={{ zIndex: -1 }} />
              </Button>
              <Button
                onClick={() => {
                  setModal({ open: true, type: 'delete' })
                  setSelectedMilestone(element)
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
            <th>image</th>
            <th>title</th>
            <th>description</th>
            <th>date</th>
            <th>timeType</th>
            <th colSpan={2} align="right">
              actions
            </th>
          </tr>
        </thead>
        <tbody>{newMilestones}</tbody>
      </Table>
    </ScrollArea>
  )
}
