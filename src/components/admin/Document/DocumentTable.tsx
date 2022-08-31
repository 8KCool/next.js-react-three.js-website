import { useState } from 'react'
import {
    Table,
    Loader,
    Button,
    createStyles,
    ScrollArea,
} from '@mantine/core'
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

export const DocumentTable = ({
    documents,
    fetching,
    setModal,
    setSelectedDocument,
}: any) => {
    const { classes, cx } = useStyles()
    const [scrolled, setScrolled] = useState(false)
    const newdocuments =
        documents?.Data?.length > 0 ? (
            documents?.Data?.map((element: any, index: number) => (
                <tr key={index}>
                    <td>{element.type}</td>
                    <td>{element.description}</td>
                    <td>{element.created_by}</td>
                    <td>{element.updated_by}</td>
                    <td>{element.deleted_by}</td>
                    <td>{new Date(element.created_at as Date).toLocaleDateString()}</td>
                    <td>{new Date(element.updated_at as Date).toLocaleDateString()}</td>
                    <td>
                        <Button.Group>
                            <Button
                                onClick={() => {
                                    setModal({ open: true, type: 'edit' })
                                    setSelectedDocument(element)
                                }}
                                variant="light"
                                color="blue"
                            >
                                <IconPencil style={{ zIndex: -1 }} />
                            </Button>
                            <Button
                                onClick={() => {
                                    setModal({ open: true, type: 'delete' })
                                    setSelectedDocument(element)
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
                        <th>type</th>
                        <th >description</th>
                        {/* colSpan={2} align="right" */}
                        <th>created_by</th>
                        <th>updated_by</th>
                        <th>deleted_by</th>
                        <th>created_at</th>
                        <th>updated_at</th>
                        <th colSpan={2} align="right">
                            actions
                        </th>
                    </tr>
                </thead>
                <tbody>{newdocuments}</tbody>
            </Table>
        </ScrollArea>
    )
}
