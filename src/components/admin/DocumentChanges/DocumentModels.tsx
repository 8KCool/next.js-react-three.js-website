// This file is responsible for handling models that dispalay on admin/Documents (create-edit-delete) modals
// all the Document info are state variables and they change based on what is the current modal

// the requests are made on ***handleCreate, handleEdit and handleDelete*** functions

import {
  Button,
  createStyles,
  Divider,
  FileInput,
  Loader,
  Modal,
  ScrollArea,
  Table,
  Textarea,
  TextInput,
  Title
} from '@mantine/core'
import { IconCheck, IconDownload, IconEye, IconFiles } from '@tabler/icons'
import axios from 'axios'
import { ChangeEvent, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { DocumentPost } from '../../../types/DocumentPost'
import { TEST_API_URL } from '../../../util/constants'
import { ConfirmModal } from '../../shared/ConfirmModal'

const useStyles = createStyles((theme) => ({
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
}))

interface IDocumentModals {
  open: boolean
  type: string
  onClose: (value?: { refetch?: boolean }) => void
  selectedDocument?: DocumentPost
}
export const DocumentModals = ({
  open,
  type,
  onClose,
  selectedDocument,
}: IDocumentModals) => {
  if (['create', 'edit'].includes(type)) {
    return (
      <InputModal
        type={type}
        open={open}
        document={selectedDocument}
        onClose={onClose}
      />
    )
  }
  if (type === 'document-changes') {
    return (
      <DocumentChangesModal
        open={open}
        document={selectedDocument}
        onClose={onClose}
      />
    )
  }
  return <></>
}

function InputModal({ type, open, document, onClose }: any) {
  const [data, setData] = useState<{
    id?: string
    type: string
    description: string
    file?: File
    loading: boolean
  }>({
    id: undefined,
    type: '',
    description: '',
    file: undefined,
    loading: false,
  })

  const { classes } = useStyles()
  useEffect(() => {
    setData({
      id: document?.id,
      type: document?.type || '',
      description: document?.description || '',
      file: undefined,
      loading: false,
    })
  }, [document])

  // ****************************** API REQUEST FUNCTIONS ******************************
  const handleCreate = async () => {
    if (!data.type || !data.description || !data.file) {
      return
    }
    const formData = new FormData()
    formData.append('type', data.type)
    formData.append('description', data.description)
    formData.append('file', data.file)
    try {
      await axios.post(`${TEST_API_URL}/admin/document/upload`, formData, {
        withCredentials: true,
        headers: {
          Authorization: `${localStorage.getItem('access_token')}`,
        },
      })
      toast.success('Created Successfully')
      onClose({ refetch: true })
    } catch (error) {
      // Aiko:
      // this can be encapsulated in a function logError(error)
      // since typescript is strong typed, it requires you to declare
      // the type of error you handling. In this case, it is AxiosError
      let errMsg
      if (axios.isAxiosError(error) && error.response) {
        errMsg = error.response.data.message as string
      } else errMsg = String(error)
      toast.error(errMsg)
    }
  }
  const handleEdit = async () => {
    if (!data.id || !data.description || !data.file) {
      return
    }
    const formData = new FormData()
    formData.append('description', data.description)
    formData.append('file', data.file)
    try {
      await axios.post(
        `${TEST_API_URL}/admin/document-changes-request/create/${data.id}`,
        formData,
        {
          withCredentials: true,
          headers: {
            Authorization: `${localStorage.getItem('access_token')}`,
          },
        }
      )
      toast.success('Change Requested Successfully')
      onClose({ refetch: true })
    } catch (error) {
      toast.error('An error occured')
    }
  }
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    switch (type) {
      case 'create':
        await handleCreate()
        break
      case 'edit':
        await handleEdit()
        break
    }
  }

  // ****************************** API REQUEST FUNCTIONS END ******************************

  // this function closes the modal and sets the selected Document to an empty string (resets the state variables)
  // this function is not called when closing create modal because we don't want to reset the variables,
  // in case the user accidentally closes the modal, the values will remain.

  const handleInputChange = (e: ChangeEvent) => {
    const element = e.target as HTMLInputElement
    const name = element.name
    const value = element.value
    setData((data) => ({ ...data, [name]: value }))
  }

  const handleFileChange = (file: File) => {
    setData((data) => ({ ...data, file }))
  }

  if (data.loading) return <></>

  return (
    <Modal
      opened={open}
      onClose={onClose}
      size={'100%'}
      withCloseButton={false}
      padding={0}
    >
      <Title mb={'2rem'} sx={{ padding: '20px' }}>
        {type === 'create' ? 'Create New Document' : null}
        {type === 'edit' ? `Editing ${document?.type}` : null}
      </Title>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
        onSubmit={handleSubmit}
      >
        <section
          className={classes.inputContainer}
          style={{ padding: '0 20px 20px' }}
        >
          <div className={classes.formChild}>
            {type === 'create' ? (
              <div className={classes.inputContainer}>
                <TextInput
                  label="Type"
                  name="type"
                  value={data.type}
                  onChange={handleInputChange}
                />
              </div>
            ) : null}
            <Textarea
              label="Description"
              minRows={4}
              maxRows={6}
              name="description"
              value={data.description}
              onChange={handleInputChange}
            />
            <FileInput name="file" onChange={handleFileChange} label="File" />
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
          <Button
            variant="outline"
            type="submit"
            color="green"
            mr={'1rem'}
            onClick={handleSubmit}
          >
            Submit
          </Button>
          <Button variant="outline" color="blue" onClick={onClose}>
            Cancel
          </Button>
        </div>
      </form>
    </Modal>
  )
}

function DocumentChangesModal({
  open,
  document,
  onClose,
}: {
  open: boolean
  document?: DocumentPost
  onClose: () => void
}) {
  const [data, setData] = useState<{ loading: boolean; items: any[] }>({
    loading: false,
    items: [],
  })
  const [viewModalData, setViewModalData] = useState({
    showing: false,
    html: '',
  })
  const { classes, cx } = useStyles()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    if (document) {
      const fetchChanges = async () => {
        setData((data) => ({ ...data, loading: true }))
        try {
          const p: any = await axios.get(
            `${TEST_API_URL}/admin/document-changes-request/getall?documentID=${document?.id}`,
            {
              withCredentials: true,
              headers: {
                Authorization: `${localStorage.getItem('access_token')}`,
              },
            }
          )

          setData((data) => ({ ...data, items: p.data.Data, loading: false }))
        } catch (error) {
          console.log(error)
          toast.error('Something went wrong')
          setData((data) => ({ ...data, loading: false }))
        }
      }
      void fetchChanges()
    }
  }, [document])

  const view = async (request: any) => {
    try {
      const p = await axios.get(
        `${TEST_API_URL}/admin/document-changes-request/view/${request.id}`,
        {
          withCredentials: true,
          headers: {
            Authorization: `${localStorage.getItem('access_token')}`,
          },
        }
      )
      const html = p.data
      setViewModalData({ showing: true, html })
    } catch (err) {
      console.log(err)
    }
  }
  const compare = async (request: any) => {
    try {
      const p = await axios.get(
        `${TEST_API_URL}/admin/document-changes-request/compare?document_id=${request.document_id}&request_id=${request.id}`,
        {
          withCredentials: true,
          headers: {
            Authorization: `${localStorage.getItem('access_token')}`,
          },
        }
      )
      const html = p.data.replace(/&lt;/g, '<').replace(/&gt;/g, '>')
      setViewModalData({ showing: true, html })
    } catch (err) {
      console.log(err)
    }
  }
  const download = async (request: any) => {
    try {
      const p = await axios.get(
        `${TEST_API_URL}/admin/document/download/${request.id}`,
        {
          withCredentials: true,
          headers: {
            Authorization: `${localStorage.getItem('access_token')}`,
          },
        }
      )
      const blob = new Blob([p.data], {
        type: 'text/plain;charset=utf-8;',
      })
      const elem = window.document.createElement('a')
      elem.href = window.URL.createObjectURL(blob)
      elem.download = `${request?.id}.md`
      window.document.body.appendChild(elem)
      elem.click()
      window.document.body.removeChild(elem)
    } catch (err) {
      console.log(err)
    }
  }
  const confirm = (request: any) => {
    ConfirmModal.show('Are you sure?', 'Approve', async () => {
      try {
        await axios.put(
          `${TEST_API_URL}/admin/document-changes-request/approve?document_id=${request.document_id}&request_id=${request.id}`,
          {},
          {
            withCredentials: true,
            headers: {
              Authorization: `${localStorage.getItem('access_token')}`,
            },
          }
        )
        setData((data) => ({
          ...data,
          items: data.items.map((item) =>
            item.id === request.id ? { ...request, is_approved: true } : item
          ),
        }))
      } catch (err) {
        console.log(err)
      }
    })
  }
  const closeViewModal = () => setViewModalData({ showing: false, html: '' })

  return (
    <>
      <Modal
        opened={open}
        onClose={onClose}
        size={'xl'}
        withCloseButton={false}
        padding={0}
      >
        <Title mb={'2rem'} sx={{ padding: '20px' }}>
          Document Changes
        </Title>
        {data.loading ? (
          <main
            style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
          >
            <Loader />
          </main>
        ) : (
          <ScrollArea
            sx={{ height: 500, padding: '0 20px' }}
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
              <thead
                className={cx(classes.header, { [classes.scrolled]: scrolled })}
              >
                <tr>
                  <th>description</th>
                  <th>created at</th>
                  <th colSpan={2}>actions</th>
                </tr>
              </thead>
              <tbody>
                {data.items?.length > 0 ? (
                  data.items?.map((element: any, index: number) => (
                    <tr key={index}>
                      <td>{element.description}</td>
                      <td>
                        {new Date(
                          element.created_at as Date
                        ).toLocaleDateString()}
                      </td>
                      <td>
                        <Button.Group>
                          <Button
                            onClick={() => view(element)}
                            variant="light"
                            color="blue"
                            compact
                          >
                            <IconEye size={16} />
                          </Button>
                          <Button
                            onClick={() => compare(element)}
                            variant="light"
                            color="red"
                            compact
                          >
                            <IconFiles size={16} />
                          </Button>
                          <Button
                            onClick={() => download(element)}
                            variant="light"
                            color="yellow"
                            compact
                          >
                            <IconDownload size={16} />
                          </Button>
                          {element.is_approved ? null : (
                            <Button
                              onClick={() => confirm(element)}
                              variant="light"
                              color="green"
                              compact
                            >
                              <IconCheck size={16} />
                            </Button>
                          )}
                        </Button.Group>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={9}>No Items</td>
                  </tr>
                )}
              </tbody>
            </Table>
          </ScrollArea>
        )}
      </Modal>
      <Modal
        opened={viewModalData.showing}
        onClose={closeViewModal}
        centered
        size="lg"
        className="preview-modal"
      >
        <div dangerouslySetInnerHTML={{ __html: viewModalData.html }}></div>
      </Modal>
    </>
  )
}
