import { NextPage } from 'next'
import React, { ReactNode, useCallback, useEffect, useState } from 'react'
import { AdminLayout } from '../../../components/layouts/AdminLayout'
import {
  Box,
  Button,
  Container,
  createStyles,
  Modal,
  Textarea,
  TextInput,
  Title,
} from '@mantine/core'
import axios from 'axios'
import {
  ACCESS_TOKEN,
  GET_API_KEY,
  TEST_API_URL,
} from '../../../util/constants'
import toast from 'react-hot-toast'
import { IconPlus } from '@tabler/icons'
import {
  ContentListTable,
  DynamicContent,
} from '../../../components/admin/content/ContentListTable'
import { MailingCreateModal } from '../../../components/admin/mailinglist/MailingModal'

import RichTextEditor from '../../../components/admin/content/RichText'
import { coolGray } from 'tailwindcss/colors'

interface DashboardProps {
  children?: ReactNode
}

const useStyles = createStyles(() => ({
  topSection: {
    display: 'flex',
    alignItems: 'center',
    '@media only screen and (max-width: 850px)': {
      flexDirection: 'column',
    },
  },
  searchForm: {
    display: 'flex',
    width: '600px',
    '@media only screen and (max-width: 850px)': {
      width: '300px',
    },
  },
}))

const Dashboard: NextPage<DashboardProps> = () => {
  const [modal, setModal] = useState({ open: false, size: 'md', type: '' })
  const [contents, setContents] = useState<DynamicContent[]>([])

  const { classes } = useStyles()

  // console.log()
  const fetchFunction = useCallback(async () => {
    try {
      const response = await axios.get(
        `${TEST_API_URL}/dynamic-content/getall?apiKey=${GET_API_KEY}&&weight=0.5`,
        {
          withCredentials: true,
          headers: {
            Authorization: `${localStorage.getItem('access_token')}`,
          },
        }
      )
      setContents(response.data.Data || [])
      console.log("i am called")
    } catch (error) {
      toast.error('Something went wrong')
    }
  }, [])

  useEffect(() => {
    async function fetchData() {
      await fetchFunction()
    }
    void fetchData()
  }, [fetchFunction])

  const createContent = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newContent = {
      key: key,
      content: {
        name: name,
        description: value,
      },
    }

    const data = await axios.post(
      `${TEST_API_URL}/dynamic-content/create`,
      newContent,
      {
        withCredentials: true,
        headers: {
          Authorization: `${localStorage.getItem('access_token')}`,
        },
      }
    )
    toast.success('Created Successfully')
    console.log(data)
    setOpened(false)
  }

  const contentToFind = '8c5c5260-0cf5-41e1-894a-f22a6f8780b4'
  const getOne = async () => {
    const content = {
      key: 'Investors',
      content: {
        name: 'Elite',
        description: 'ABC',
      },
    }

    const data = await axios.get(
      `${TEST_API_URL}/dynamic-content/getone/${contentToFind}`,
      {
        withCredentials: true,
        headers: {
          Authorization: `${localStorage.getItem('access_token')}`,
        },
      }
    )
    toast.success('Found')
    console.log(data.data.Data)
  }

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

  const [opened, setOpened] = useState(false)

  const [key, setKey] = useState('')
  const [name, setName] = useState('')

  const [value, onChange] = useState('')
  const rte = (
    <RichTextEditor
      value={value}
      onChange={onChange}
      onImageUpload={handleImageUpload}
      id="rte"
    />
  )

  const CreateContentModal = (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      size="90%
      "
      title="Create Dynamic Content"
    >
      <form onSubmit={createContent}>
        <Container>
          <TextInput
            label="Key"
            placeholder="key"
            value={key}
            onChange={(e) => setKey(e.target.value)}
          />
          <TextInput
            label="Name"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div>Description</div>
          {opened && rte}

          <Box mt={7} style={{ textAlign: 'right' }}>
            <Button variant="outline" color="green" type="submit">
              Create
            </Button>
          </Box>
        </Container>
      </form>
    </Modal>
  )

  //getOne()
  return (
    <AdminLayout>
      <Title align={'center'}>Dynamic content</Title>
      <section className={classes.topSection}>
        <Button
          color="green"
          variant="filled"
          onClick={() => setOpened(true)}
          sx={{ backgroundColor: '#40c057 !important', margin: '1rem auto' }}
          leftIcon={<IconPlus />}
        >
          Create Content
        </Button>
      </section>

      <section>
        <ContentListTable
          dynamicContents={contents}
          fetching={false} //pass fetching instead of false when url is fixed
          fetchFunction={fetchFunction}
        />
      </section>

      {CreateContentModal}
    </AdminLayout>
  )
}

export default Dashboard
