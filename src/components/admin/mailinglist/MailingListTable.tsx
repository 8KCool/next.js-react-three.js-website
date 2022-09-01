import { useState } from 'react'
import {
  Table,
  Loader,
  createStyles,
  ScrollArea,
} from '@mantine/core'
import { Imodal, Mailing } from './MailingModal'

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

export interface MailingData extends Omit<Mailing, 'message'> {
  id: string
  message: string[]
}

export const MailingListTable = ({
  mailings,
  fetching,
}: {
  mailings: MailingData[]
  fetching: boolean,
}) => {
  const { classes, cx } = useStyles()
  const [scrolled, setScrolled] = useState(false)

  const mailingListBody =
    mailings.length > 0 ? (
      mailings.map((element: MailingData, index) => (
        <tr key={index}>
          <td>{element.id}</td>
          <td>{element.country}</td>
          <td>{element.email}</td>
          <td>{element.message.join(', ')}</td>
          <td>{element.name}</td>
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
            <td>country</td>
            <td>email</td>
            <td>message</td>
            <td>name</td>
          </tr>
        </thead>
        <tbody>{mailingListBody}</tbody>
      </Table>
    </ScrollArea>
  )
}
