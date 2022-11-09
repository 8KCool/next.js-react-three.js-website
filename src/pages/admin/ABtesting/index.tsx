import { NextPage } from 'next'
import React, { ReactNode, useCallback, useEffect, useState } from 'react'
import { AdminLayout } from '../../../components/layouts/AdminLayout'
import {
  Box,
  Button,
  Container,
  createStyles,
  Modal,
  NumberInput,
  Text,
  Textarea,
  TextInput,
  Title,
  Tooltip,
} from '@mantine/core'
import axios from 'axios'
import { GET_API_KEY, TEST_API_URL } from '../../../util/constants'
import toast from 'react-hot-toast'
import { IconPlus } from '@tabler/icons'
import {
  ContentListTable,
  DynamicContent,
} from '../../../components/admin/content/ContentListTable'

import RichTextEditor from '../../../components/admin/content/RichText'
import { coolGray } from 'tailwindcss/colors'
import {
  ABtestContent,
  ABtestingListTable,
} from '../../../components/admin/ABtesting/ABtestingListTable'

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
  const [ABtestContents, setABtestContents] = useState<ABtestContent[]>([])

  const { classes } = useStyles()

  // console.log()
  const fetchFunction = useCallback(async () => {
    try {
      const response = await axios.get(
        `${TEST_API_URL}/ab-testing/getall?apiKey=${GET_API_KEY}`,
        {
          withCredentials: true,
          headers: {
            Authorization: `${localStorage.getItem('access_token')}`,
          },
        }
      )
      setABtestContents((response.data.Data as ABtestContent[]) || [])
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
      weight: weight,
      content: value,
    }

    const data = await axios.post(
      `${TEST_API_URL}/ab-testing/create`,
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
    await fetchFunction()
  }

  const contentToFind = '8c5c5260-0cf5-41e1-894a-f22a6f8780b4'
  const getOne = async () => {
    const data = await axios.get(
      `${TEST_API_URL}/ab-testing/getone/${contentToFind}`,
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
          .then((result) => resolve(result.data as string))
          .catch(() => reject(new Error('Upload failed')))
      }),
    []
  )

  const [opened, setOpened] = useState(false)

  const [key, setKey] = useState('')
  const [weight, setWeight] = useState<number | undefined>()
  const [maxWeight, setMaxWeight] = useState(1)

  const [value, onChange] = useState('')
  const rte = (
    <RichTextEditor
      value={value}
      onChange={onChange}
      onImageUpload={handleImageUpload}
      id="rte"
    />
  )

  const CreateModal = (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      size="90%
      "
      title="Create ABtesting"
    >
      <form onSubmit={createContent}>
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
                if (curValue.key == newKey) {
                  return accumulator + curValue.weight
                }
                return accumulator
              },
              initialValue)

              const newMaxWeight = (10 - sum * 10) / 10
              if (sum > 0 && sum < 1) {
                setMaxWeight(newMaxWeight)
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
      <Title align={'center'}>ABtesting</Title>
      <section className={classes.topSection}>
        <Button
          color="green"
          variant="filled"
          onClick={() => setOpened(true)}
          sx={{ backgroundColor: '#40c057 !important', margin: '1rem auto' }}
          leftIcon={<IconPlus />}
        >
          Create ABtesting
        </Button>
      </section>

      <section>
        <ABtestingListTable
          ABtestContents={ABtestContents}
          fetching={false} //pass fetching instead of false when url is fixed
          fetchFunction={fetchFunction}
        />
      </section>

      {CreateModal}
    </AdminLayout>
  )
}

export default Dashboard
