import {
  Box,
  Button,
  Loader,
  Modal,
  Table,
  Container,
  TextInput,
  TypographyStylesProvider,
} from '@mantine/core'
import axios from 'axios'
import { useCallback, useState } from 'react'
import toast from 'react-hot-toast'
import { FaEye, FaPen } from 'react-icons/fa'
import { TEST_API_URL } from '../../../util/constants'
import RichTextEditor from './RichText'

export interface DynamicContent {
  id?: string
  key?: string
  content: {
    name: string
    description: string
  }
}



export const ContentListTable = ({
  dynamicContents,
  fetching,
  fetchFunction
}: {
  dynamicContents: DynamicContent[]
  fetching: boolean
  fetchFunction: () => void
}) => {
  const [opened, setOpened] = useState(false)
  const [content, setContent] = useState<DynamicContent>()

  const contentModal = content && (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      size="90%
      "
      title={content.content.name}
    >
      <TypographyStylesProvider>
        {
          <div
            dangerouslySetInnerHTML={{ __html: content.content.description }}
          />
        }
      </TypographyStylesProvider>
    </Modal>
  )



  const handleImageUpload = useCallback(
    (file: File): Promise<string> =>
      new Promise((resolve, reject) => {
        const formData = new FormData()
        formData.append('file_name', file.name)
        formData.append('file', file)
        console.log(file)

        fetch(`${TEST_API_URL}/media/upload`, {
          method: 'PATCH',
          body: formData,
          headers: {
            Authorization: `${localStorage.getItem('access_token')}`,
          },
        })
          .then((response) => response.json())
          .then((result) => resolve(result.data))
          .catch(() => reject(new Error('Upload failed')))
      }),
    []
  )

  
  const [contentToEdit, setContentToEdit] = useState<DynamicContent>()

  const [value, setValue] = useState(contentToEdit?.content.description);
  const rte = (
    <RichTextEditor
      value={value}
      onChange={setValue}
      onImageUpload={handleImageUpload}
      id="rte"
    />
  )

  const [name, setName] = useState("");
  const updateContent = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const content =  {
      content:{
        name:name,
        description: value
      }
    }

    const data = await axios.put(
      `${TEST_API_URL}/dynamic-content/update/${contentToEdit?.id}`,
     content,
      
      {
        withCredentials: true,
        headers: {
          Authorization: `${localStorage.getItem('access_token')}`,
        },
      }
    )
    toast.success('Update Successfully')
    fetchFunction();
    setEdit(false)
  }
  
const [edit, setEdit] = useState(false);
const EditContentModal = (
  <Modal
    opened={edit}
    onClose={() => setEdit(false)}
    size="90%
    "
    title="Edit Dynamic Content"
  >

    
    <form onSubmit={updateContent}>
      <Container>
      <TextInput
            label="Name"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        <div>Description</div>
        {rte}
        <Box mt={7} style={{ textAlign: 'right' }}>
          <Button variant="outline" color="yellow" type="submit">
            Update
          </Button>
        </Box>
      </Container>
    </form>
  </Modal>
  )

  if (fetching)
    return (
      <main
        style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
      >
        <Loader />
      </main>
    )
  return dynamicContents.length > 0 ? (
    <>
      <Table>
        <thead>
          <tr>
            <th>Key</th>
            <th>Name</th>
            <th>Edit</th>
            <th>Content</th>
          </tr>
        </thead>
        <tbody>
          {
          dynamicContents.map((dynamicContent: DynamicContent) => (
            <tr key={dynamicContent.id}>
              <td>{dynamicContent.key}</td>
              <td>{dynamicContent.content.name}</td>
              <td>
                {
                  <Button
                  color="yellow"
                    variant="outline"
                    onClick={() => {
                      setContentToEdit(dynamicContent)
                      setName(dynamicContent.content.name)
                      setValue(dynamicContent.content.description)
                      setEdit(true)
                    }}
                  >
                    <FaPen />
                  </Button>
                }
              </td>
              <td>
                {
                  <Button
                    variant="outline"
                    onClick={() => {
                      setContent(dynamicContent)
                      setOpened(true)
                    }}
                  >
                    <FaEye />
                  </Button>
                }
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {EditContentModal}
      {contentModal}
    </>
  ) : (
    <div>No dynamic content found</div>
  )
}
