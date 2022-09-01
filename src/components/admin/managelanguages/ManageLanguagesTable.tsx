import { useState } from 'react'
import {
  Table,
  Loader,
  createStyles,
  ScrollArea,
  Button,
} from '@mantine/core'
import { Imodal, Language } from './ManageLanguagesModal'
import { IconPencil, IconX } from '@tabler/icons'

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

export const ManageLanguageTable = ({
  data,
  fetching,
  setModal,
}: {
  data: Language[]
  fetching: boolean,
  setModal: React.Dispatch<React.SetStateAction<Imodal>>
}) => {
  const { classes, cx } = useStyles()
  const [scrolled, setScrolled] = useState(false)

  const listBody =
    data.length > 0 ? (
      data.map((element: Language, index) => (
        <tr key={index}>
          <td>{element.id}</td>
          <td>{element.english}</td>
          <td>{element.alpha2}</td>
          <td>{element['alpha3-b']}</td>
          <td>
            <Button.Group>
              <Button
                onClick={() => {
                  setModal({ open: true, type: 'edit', size: '', id: element.id })
                  // setSelectedPost(element)
                }}
                variant="light"
                color="blue"
              >
                <IconPencil style={{ zIndex: -1 }} />
              </Button>
              <Button
                onClick={() => {
                  setModal({ open: true, type: 'delete', size: '', id: element.id })
                  // setSelectedPost(element)
                }}
                variant="light"
                color="red"
              >
                <IconX style={{ zIndex: -1 }} />
              </Button>
            </Button.Group></td>
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
            <td>id</td>
            <td>English</td>
            <td>alpha2</td>
            <td>alpha3-b</td>
            <td>

            </td>
          </tr>
        </thead>
        <tbody>{listBody}</tbody>
      </Table>
    </ScrollArea>
  )
}
