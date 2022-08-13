// This file is responsible for handling models that dispalay on admin/posts (create-edit-delete) modals
// all the post info are state variables and they change based on what is the current modal

// the requests are made on ***handleCreate, handleEdit and handleDelete*** functions

import { useState, useEffect } from 'react'
import {
  Button,
  Modal,
  Title,
  TextInput,
  Textarea,
  Divider,
  createStyles,
} from '@mantine/core'
import axios from 'axios'
import { ListItems } from './List'
import { POST_API_KEY, TEST_API_URL } from '../../../util/constants'
import toast from 'react-hot-toast'

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
}))

export const PostsModals = ({
  modal,
  setModal,
  selectedPost = '',
  setSelectedPost,
}: any) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [content, setContent] = useState('')
  const [categories, setCategories] = useState([])
  const [tags, setTags] = useState([])
  const [originalFilename, setOriginalFilename] = useState('')
  const [loading, setLoading] = useState(true)
  const { classes, cx } = useStyles()
  useEffect(() => {
    if (selectedPost === '' || Object.keys(selectedPost).length === 0) {
      setTitle('')
      setAuthor('')
      setContent('')
      setCategories([])
      setTags([])
      setOriginalFilename('')
      return setLoading(false)
    }
    if (Object.keys(selectedPost).length === 0) return setLoading(true)
    setTitle(selectedPost.title)
    setAuthor(selectedPost.author)
    setContent(selectedPost.content)
    setCategories(selectedPost.categories)
    setTags(selectedPost.tags)
    setOriginalFilename(selectedPost.original_filename)
    setLoading(false)
  }, [selectedPost])

  // ****************************** API REQUEST FUNCTIONS ******************************

  const handleDelete = async () => {
    try {
      await axios.delete(`${TEST_API_URL}/posts/${selectedPost.id_post}`, {
        withCredentials: true,
        headers: {
          Authorization: `${localStorage.getItem('access_token')}`,
        },
      })
      toast.success('Deleted Successfully')
    } catch (error) {
      toast.error('An error occured')
    }
  }
  const handleCreate = async () => {
    const newPost = {
      title,
      author,
      content,
      categories,
      tags,
      originalFilename,
    }
    try {
      await axios.post(
        `${TEST_API_URL}/posts/${selectedPost.id_post}}`,
        newPost,
        {
          withCredentials: true,
          headers: {
            Authorization: `${localStorage.getItem('access_token')}`,
          },
        }
      )
      toast.success('Created Successfully')
    } catch (error) {
      toast.error('An error occured')
    }
  }
  const handleEdit = async () => {
    const newPost = {
      title,
      author,
      content,
      categories,
      tags,
      originalFilename,
    }
    try {
      await axios.put(
        `${TEST_API_URL}/posts/${selectedPost.id_post}}`,
        newPost,
        {
          withCredentials: true,
          headers: {
            Authorization: `${localStorage.getItem('access_token')}`,
          },
        }
      )
      toast.success('Created Successfully')
    } catch (error) {
      toast.error('An error occured')
    }
  }

  // ****************************** API REQUEST FUNCTIONS END ******************************

  // this function closes the modal and sets the selected post to an empty string (resets the state variables)
  // this function is not called when closing create modal because we don't want to reset the variables,
  // in case the user accidentally closes the modal, the values will remain.
  const handleClose = () => {
    setSelectedPost('')
    setModal({ ...modal, open: false })
  }

  if (loading) return <></>

  if (modal.type === 'create')
    return (
      <Modal
        opened={modal.open}
        onClose={() => setModal({ ...modal, open: false })}
        size={'100%'}
        withCloseButton={false}
        padding={0}
      >
        <Title mb={'2rem'} sx={{ padding: '20px' }}>
          Create a new post
        </Title>
        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
          onSubmit={handleCreate}
        >
          <section
            className={classes.inputContainer}
            style={{ padding: '0 20px 20px' }}
          >
            <div className={classes.formChild}>
              <div className={classes.inputContainer}>
                <TextInput
                  label="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <TextInput
                  label="Author"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </div>
              <Textarea
                label="Content"
                minRows={4}
                maxRows={6}
                value={content}
                onChange={(e: any) => setContent(e.currentTarget.value)}
              />
              <TextInput
                label="Origianl file Name"
                value={originalFilename}
                onChange={(e) => setOriginalFilename(e.target.value)}
              />
            </div>
            <div className={classes.formChild}>
              <Title order={4}>Categories</Title>
              <ListItems array={categories} setArray={setCategories} />
            </div>
            <div className={classes.formChild}>
              <Title order={4}>Tags</Title>
              <ListItems array={tags} setArray={setTags} />
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
              onClick={handleCreate}
            >
              Submit
            </Button>
            <Button
              variant="outline"
              color="blue"
              onClick={() => setModal({ ...modal, open: false })}
            >
              cancel
            </Button>
          </div>
        </form>
      </Modal>
    )

  if (modal.type === 'delete')
    return (
      <Modal
        opened={modal.open}
        onClose={handleClose}
        size={'md'}
        withCloseButton={false}
      >
        <Title order={4}>
          Are you sure you want to delete '{selectedPost.title}'?
        </Title>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginTop: '2rem',
          }}
        >
          <Button
            mr={'1rem'}
            variant="outline"
            color="red"
            onClick={handleDelete}
          >
            Delete
          </Button>
          <Button variant="outline" color="gray" onClick={handleClose}>
            cancel
          </Button>
        </div>
      </Modal>
    )

  if (modal.type === 'edit')
    return (
      <Modal
        opened={modal.open}
        onClose={handleClose}
        size={'100%'}
        withCloseButton={false}
        padding={0}
      >
        <Title mb={'2rem'} sx={{ padding: '20px' }}>
          Editing '{selectedPost.title}'
        </Title>
        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
          onSubmit={handleEdit}
        >
          <section
            className={classes.inputContainer}
            style={{ padding: '0 20px 20px' }}
          >
            <div className={classes.formChild}>
              <div className={classes.inputContainer}>
                <TextInput
                  label="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <TextInput
                  label="Author"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </div>
              <Textarea
                label="Content"
                minRows={4}
                maxRows={6}
                value={content}
                onChange={(e: any) => setContent(e.currentTarget.value)}
              />
              <TextInput
                label="Origianl file Name"
                value={originalFilename}
                onChange={(e) => setOriginalFilename(e.target.value)}
              />
            </div>
            <div className={classes.formChild}>
              <Title order={4}>Categories</Title>
              <ListItems array={categories} setArray={setCategories} />
            </div>
            <div className={classes.formChild}>
              <Title order={4}>Tags</Title>
              <ListItems array={tags} setArray={setTags} />
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
              color="blue"
              mr={'1rem'}
              onClick={handleEdit}
            >
              Update
            </Button>
            <Button variant="outline" color="blue" onClick={handleClose}>
              cancel
            </Button>
          </div>
        </form>
      </Modal>
    )
  return <></>
}
