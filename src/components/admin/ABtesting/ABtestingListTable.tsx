import {
  Box,
  Button,
  Loader,
  Modal,
  Table,
  Container,
  NumberInput,
  TypographyStylesProvider,
  TextInput,
  Text,
  Tooltip,
} from '@mantine/core'
import { IconHelp, IconQuestionMark } from '@tabler/icons'
import axios from 'axios'
import { useCallback, useState } from 'react'
import toast from 'react-hot-toast'
import { FaEye, FaPen, FaTrash } from 'react-icons/fa'
import { GET_API_KEY, TEST_API_URL } from '../../../util/constants'
import RichTextEditor from '../content/RichText'

export interface ABtestContent {
  id?: string
  key?: string
  weight: number
  content: string
}

export const ABtestingListTable = ({
  ABtestContents,
  fetching,
  fetchFunction,
}: {
  ABtestContents: ABtestContent[]
  fetching: boolean
  fetchFunction: () => void
}) => {
  const [opened, setOpened] = useState(false)
  const [content, setContent] = useState<ABtestContent>()

  const contentModal = content && (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      size="90%
      "
      title={content.key}
    >
      <TypographyStylesProvider>
        {<div dangerouslySetInnerHTML={{ __html: content.content }} />}
      </TypographyStylesProvider>
    </Modal>
  )

  const handleImageUpload = useCallback(
    (file: File): Promise<string> =>
      new Promise((resolve, reject) => {
        const formData = new FormData()
        formData.append('file_name', file.name)
        formData.append('file', file)

        fetch(`${TEST_API_URL}/media/upload`, {
          method: 'PATCH',
          body: formData,
          headers: {
            Authorization: `${localStorage.getItem('access_token')}`,
          },
        })
          .then((response) => response.json())
          .then((result) => resolve(result.data as string))
          .catch(() => reject(new Error('Upload failed')))
      }),
    []
  )

  const [contentToEdit, setContentToEdit] = useState<ABtestContent>()

  const [value, setValue] = useState(contentToEdit?.content)
  const rte = (
    <RichTextEditor
      value={value}
      onChange={setValue}
      onImageUpload={handleImageUpload}
      id="rte"
    />
  )

  const [key, setKey] = useState(contentToEdit?.key)
  const [weight, setWeight] = useState<number | undefined>(
    contentToEdit?.weight
  )
  const [maxWeight, setMaxWeight] = useState(1)

  const updateContent = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const content = {
      key: key,
      weight: weight,
      content: value,
    }

    const data = await axios.put(
      `${TEST_API_URL}/ab-testing/update/${contentToEdit?.id}`,
      content,

      {
        withCredentials: true,
        headers: {
          Authorization: `${localStorage.getItem('access_token')}`,
        },
      }
    )
    toast.success('Update Successfully')
    fetchFunction()
    setEdit(false)
  }

  const deleteABtesting = async (abtestToDelete: ABtestContent) => {
    const data = await axios.delete(
      `${TEST_API_URL}/ab-testing/delete/${abtestToDelete?.id}?apiKey=${GET_API_KEY}`,
      {
        withCredentials: true,
        headers: {
          Authorization: `${localStorage.getItem('access_token')}`,
        },
      }
    )
    fetchFunction()
    toast.success('Deleted Successfully')
  }

  const [edit, setEdit] = useState(false)
  const EditContentModal = (
    <Modal
      opened={edit}
      onClose={() => setEdit(false)}
      size="90%
    "
      title="Edit ABtesting"
    >
      <form onSubmit={updateContent}>
        <Container>
          <TextInput
            label="Key"
            placeholder="key"
            value={key}
            onChange={(e) => {
              const newKey = e.target.value
              setKey(newKey)
              const initialValue = 0
              const sum = ABtestContents.reduce(function (
                accumulator,
                curValue
              ) {
                if (contentToEdit) {
                  if (
                    curValue.key == newKey &&
                    contentToEdit.id != curValue.id
                  ) {
                    return accumulator + curValue.weight
                  }
                }
                return accumulator
              },
              initialValue)

              const newMaxWeight = (10 - sum * 10) / 10
              if (sum > 0 && sum < 1) {
                setMaxWeight(newMaxWeight)
                setWeight(newMaxWeight)
              }
            }}
          />
          <Tooltip label={`Max Weight: ${maxWeight}`}>
            <NumberInput
              label="Weight"
              placeholder="weight"
              value={weight}
              min={0}
              max={maxWeight}
              precision={1}
              step={0.1}
              onChange={(value) => setWeight(value)}
            />
          </Tooltip>
          <Text size="xs" align="right" color="green">
            Max Weight: {maxWeight}
          </Text>
          <div>Content</div>
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
  return ABtestContents.length > 0 ? (
    <>
      <Table>
        <thead>
          <tr>
            <th>Key</th>
            <th>Weight</th>
            <th>View</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {ABtestContents.map((ABTestContent: ABtestContent) => (
            <tr key={ABTestContent.id}>
              <td>{ABTestContent.key}</td>
              <td>{ABTestContent.weight}</td>
              <td>
                {
                  <Button
                    variant="outline"
                    onClick={() => {
                      setContent(ABTestContent)
                      setOpened(true)
                    }}
                  >
                    <FaEye />
                  </Button>
                }
              </td>
              <td>
                {
                  <Button
                    color="yellow"
                    variant="outline"
                    onClick={() => {
                      setContentToEdit(ABTestContent)
                      setKey(ABTestContent.key)
                      setWeight(ABTestContent.weight)
                      setValue(ABTestContent.content)
                      setEdit(true)
                      // setMaxWeight(1 - ABTestContent.weight)
                      const initialValue = 0
                      const sum = ABtestContents.reduce(function (
                        accumulator,
                        curValue
                      ) {
                        if (curValue.key == ABTestContent.key) {
                          return accumulator + curValue.weight
                        }
                        return accumulator
                      },
                      initialValue)
                      console.log(sum)

                      const newMaxWeight = (10 - sum * 10) / 10
                      if (sum >= 0 && sum <= 1) {
                        setMaxWeight(newMaxWeight)
                      }
                    }}
                  >
                    <FaPen />
                  </Button>
                }
              </td>

              <td>
                {
                  <Button
                    color="red"
                    variant="outline"
                    onClick={async () => {
                      await deleteABtesting(ABTestContent)
                    }}
                  >
                    <FaTrash />
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
    <div>No ABtesting found</div>
  )
}
