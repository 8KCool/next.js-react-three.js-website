/* eslint-disable @typescript-eslint/no-unsafe-argument */
// This file is responsible for handling models that dispalay on admin/posts (create-edit-delete) modals
// all the post info are state variables and they change based on what is the current modal

// the requests are made on ***handleCreate, handleEdit and handleDelete*** functions

import React, { useState, useEffect } from 'react'
import {
  Button,
  Modal,
  Title,
  TextInput,
  Textarea,
  Divider,
  createStyles,
  FileInput,
  Avatar,
} from '@mantine/core'
import axios from 'axios'
import { ListItems } from './List'
import { TEST_API_URL } from '../../../util/constants'
import toast from 'react-hot-toast'
import { BlogPost } from '../../../types/BlogPost'
import { useRouter } from 'next/router'
import { getErrorMsg } from '../../../util/api'

const useStyles = createStyles(() => ({
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

interface Imodal {
  open: boolean
  size: string
  type: string
}
interface IPostModals {
  modal: Imodal
  setModal: React.Dispatch<React.SetStateAction<Imodal>>
  selectedPost: any
  setSelectedPost: any
  fetchFunction: () => Promise<void>
}
export const PostsModals = ({
  modal,
  setModal,
  selectedPost,
  setSelectedPost,
  fetchFunction,
}: IPostModals) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [content, setContent] = useState('')
  const [categories, setCategories] = useState({})
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [tags, setTags] = useState([])
  const [originalFilename, setOriginalFilename] = useState('')
  const [shortDescription, setShortDescription] = useState('')
  const [level, setLevel] = useState(0)
  const [category, setCategory] = useState('')
  const [backgroundInformation, setBackgroundInformation] = useState('')
  const [icon, setIcon] = useState('')
  const [image, setImage] = useState('')
  const [proposalId, setProposalId] = useState('')
  const [teamId, setTeamId] = useState('')
  const [position, setPosition] = useState(0)
  const [loading, setLoading] = useState(true)
  const [iconFile, setIconFile] = useState<string | Blob>('')
  const [imageFile, setImageFile] = useState<string | Blob>('')
  const { classes } = useStyles()
  useEffect(() => {
    if (!selectedPost || Object.keys(selectedPost).length === 0) {
      setTitle('')
      setAuthor('')
      setContent('')
      setCategories([])
      setTags([])
      setOriginalFilename('')
      return setLoading(false)
    }
    if (Object.keys(selectedPost).length === 0) return setLoading(true)
    setTitle(selectedPost?.title)
    setAuthor(selectedPost?.name)
    setContent(selectedPost?.longDescription)
    setCategories([])
    setOriginalFilename(selectedPost?.project)
    setLevel(selectedPost?.level)
    setIcon(selectedPost?.icon)
    setImage(selectedPost?.image)
    setPosition(selectedPost?.position)
    setTeamId(selectedPost?.team_id)
    setCategory(selectedPost?.category)
    setBackgroundInformation(selectedPost?.backgroundInformation)
    setShortDescription(selectedPost?.shortDescription)
    setProposalId(selectedPost?.proposal_id)
    setLoading(false)
  }, [selectedPost])

  // ****************************** API REQUEST FUNCTIONS ******************************

  const handleDelete = async () => {
    try {
      await axios.delete(
        `${TEST_API_URL}/teammember-proposal/${selectedPost.id}`,
        {
          withCredentials: true,
          headers: {
            Authorization: `${localStorage.getItem('access_token')}`,
          },
        }
      )
      toast.success('Deleted Successfully')
      void fetchFunction()
      setModal({ ...modal, open: false })
    } catch (error) {
      toast.error(getErrorMsg(error))
    }
  }
  const handleCreate = async (e: any) => {
    e.preventDefault()
    console.log('Handle Create')
    const newPost = {
      title,
      category,
      longDescription: content,
      backgroundInformation,
      shortDescription,
      icon,
      name: author,
      image,
      proposal_id: proposalId,
      team_id: teamId,
      //   socialLinks: categories,
      project: originalFilename,
      level,
      position,
    }
    try {
      await axios.post(
        `${TEST_API_URL}/teammember-proposal/create`,
        newPost,
        {
          withCredentials: true,
          headers: {
            Authorization: `${localStorage.getItem('access_token')}`,
          },
        }
      )
      toast.success('Created Successfully')
      void fetchFunction()
      setModal({ ...modal, open: false })
    } catch (error) {
      toast.error(getErrorMsg(error))
    }
  }
  const handleEdit = async (e: any) => {
    e.preventDefault()
    const newPost = {
      title,
      category,
      longDescription: content,
      backgroundInformation,
      shortDescription,
      icon,
      name: author,
      image,
      proposal_id: proposalId,
      team_id: teamId,
      //   socialLinks: categories,
      project: originalFilename,
      level,
      position,
    }
    try {
      await axios.put(
        `${TEST_API_URL}/teammember-proposal/${selectedPost.id}}`,
        newPost,
        {
          withCredentials: true,
          headers: {
            Authorization: `${localStorage.getItem('access_token')}`,
          },
        }
      )
      toast.success('Created Successfully')
      void fetchFunction()
      setModal({ ...modal, open: false })
    } catch (error) {
      toast.error(getErrorMsg(error))
    }
  }

  const handleEditIcon = async (e: any) => {
    e.preventDefault()
    const formData = new FormData()

    formData.append('image', iconFile)
    try {
      await axios.put(
        `${TEST_API_URL}/teammember-proposal/${selectedPost.id}/icon`,
        formData,
        {
          withCredentials: true,
          headers: {
            Authorization: `${localStorage.getItem('access_token')}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      )
      toast.success('Created Successfully')
      void fetchFunction()
      setModal({ ...modal, open: false })
    } catch (error) {
      toast.error(getErrorMsg(error))
    }
  }
  const handleEditImage = async (e: any) => {
    e.preventDefault()
    const formData = new FormData()

    formData.append('image', imageFile)
    try {
      await axios.put(
        `${TEST_API_URL}/teammember-proposal/${selectedPost.id}/image`,
        formData,
        {
          withCredentials: true,
          headers: {
            Authorization: `${localStorage.getItem('access_token')}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      )
      toast.success('Created Successfully')
      void fetchFunction()
      setModal({ ...modal, open: false })
    } catch (error) {
      toast.error(getErrorMsg(error))
    }
  }
  // ****************************** API REQUEST FUNCTIONS END ******************************

  // this function closes the modal and sets the selected post to an empty string (resets the state variables)
  // this function is not called when closing create modal because we don't want to reset the variables,
  // in case the user accidentally closes the modal, the values will remain.
  const handleClose = () => {
    setSelectedPost({})
    setIconFile('')
    setImageFile('')
    setAuthor('')
    setBackgroundInformation('')
    setCategories([])
    setCategory('')
    setIcon('')
    setImage('')
    setProposalId('')
    setTeamId('')
    setLevel(0)
    setPosition(0)
    setShortDescription('')
    setContent('')
    setBackgroundInformation('')
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
          Create a new Team member Proposal
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
                  label="Name"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </div>
              <Textarea
                label="Background Information"
                minRows={4}
                maxRows={6}
                value={backgroundInformation}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  setBackgroundInformation(e.currentTarget.value)
                }
              />
              <Textarea
                label="Short Description"
                minRows={2}
                maxRows={4}
                value={shortDescription}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  setShortDescription(e.currentTarget.value)
                }
              />
              <Textarea
                label="Long Description"
                minRows={4}
                maxRows={6}
                value={content}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  setContent(e.currentTarget.value)
                }
              />
              {/* <TextInput
                label="Proposal Id"
                value={proposalId}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  setProposalId(e.currentTarget.value)
                }
              /> */}
              <TextInput
                label="Project"
                value={originalFilename}
                onChange={(e) => setOriginalFilename(e.target.value)}
              />
              <TextInput
                label="Level"
                value={level}
                type="number"
                onChange={(e) => setLevel(parseInt(e.target.value))}
              />
              <TextInput
                label="Position"
                value={position}
                type="number"
                onChange={(e) => setPosition(parseInt(e.target.value))}
              />
              <TextInput
                label="Icon"
                value={icon}
                onChange={(e) => setIcon(e.target.value)}
              />
              <TextInput
                label="Image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
              <TextInput
                label="Team Id"
                value={teamId}
                onChange={(e) => setTeamId(e.target.value)}
              />
              <TextInput
                label="Proposal Id"
                value={proposalId}
                onChange={(e) => setProposalId(e.target.value)}
              />
              <TextInput
                label="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
            <div className={classes.formChild}>
              <Title order={4}>Social Links</Title>
              <ListItems array={categories} setArray={setCategories} />
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
          Are you sure you want to delete {selectedPost.title} ?
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
          Editing {selectedPost.title}
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
                  label="Name"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </div>
              <Textarea
                label="Background Information"
                minRows={4}
                maxRows={6}
                value={backgroundInformation}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  setBackgroundInformation(e.currentTarget.value)
                }
              />
              <Textarea
                label="Short Description"
                minRows={2}
                maxRows={4}
                value={shortDescription}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  setShortDescription(e.currentTarget.value)
                }
              />
              <Textarea
                label="Long Description"
                minRows={4}
                maxRows={6}
                value={content}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  setContent(e.currentTarget.value)
                }
              />
              {/* <TextInput
                label="Proposal Id"
                value={proposalId}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  setProposalId(e.currentTarget.value)
                }
              /> */}
              <TextInput
                label="Project"
                value={originalFilename}
                onChange={(e) => setOriginalFilename(e.target.value)}
              />
              <TextInput
                label="Level"
                value={level}
                type="number"
                onChange={(e) => setLevel(parseInt(e.target.value))}
              />
              <TextInput
                label="Position"
                value={position}
                type="number"
                onChange={(e) => setPosition(parseInt(e.target.value))}
              />

              <div>
                <FileInput
                  label="Icon"
                  onChange={()=>setIconFile}
                  placeholder="Pick file"
                />
                <Avatar
                  src={
                    iconFile ? URL.createObjectURL(imageFile as Blob) : selectedPost.icon
                  }
                  alt="icon"
                  style={{
                    marginTop: '1rem',
                  }}
                />
              </div>

              <div>
                <FileInput
                  label="Image"
                  onChange={() => setImageFile}
                  placeholder="Pick file"
                />
                <Avatar
                  src={
                    imageFile
                      ? URL.createObjectURL(imageFile as Blob)
                      : selectedPost.image
                  }
                  alt="image"
                  style={{
                    marginTop: '1rem',
                  }}
                />
              </div>
              <TextInput
                label="Team Id"
                value={teamId}
                onChange={(e) => setTeamId(e.target.value)}
              />
              <TextInput
                label="Proposal Id"
                value={proposalId}
                onChange={(e) => setProposalId(e.target.value)}
              />
              <TextInput
                label="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
            <div className={classes.formChild}>
              <Title order={4}>Social Links</Title>
              <ListItems array={categories} setArray={setCategories} />
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
  if (modal.type === 'changeIcon')
    return (
      <Modal
        opened={modal.open}
        onClose={handleClose}
        size={'100%'}
        withCloseButton={false}
        padding={0}
      >
        <Title mb={'2rem'} sx={{ padding: '20px' }}>
          Change Icon
        </Title>
        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
          onSubmit={handleEditIcon}
        >
          <section
            className={classes.inputContainer}
            style={{ padding: '0 20px 20px' }}
          >
            <div className={classes.formChild}>
              <Avatar
                src={
                  iconFile ? URL.createObjectURL(iconFile as Blob) : selectedPost?.icon
                }
                alt="icon"
                style={{
                  width: '5rem',
                  height: '5rem',
                }}
              />
              <FileInput
                placeholder="Pick file"
                label="Change the icon"
                onChange={() => setIconFile}
                required
              />
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
              onClick={handleEditIcon}
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
  if (modal.type === 'changeImage')
    return (
      <Modal
        opened={modal.open}
        onClose={handleClose}
        size={'100%'}
        withCloseButton={false}
        padding={0}
      >
        <Title mb={'2rem'} sx={{ padding: '20px' }}>
          Change Image
        </Title>
        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
          onSubmit={handleEditImage}
        >
          <section
            className={classes.inputContainer}
            style={{ padding: '0 20px 20px' }}
          >
            <div className={classes.formChild}>
              <Avatar
                src={
                  imageFile
                    ? URL.createObjectURL(imageFile as Blob)
                    : selectedPost?.image
                }
                alt="icon"
                style={{
                  width: '5rem',
                  height: '5rem',
                }}
              />
              <FileInput
                placeholder="Pick file"
                label="Change the Image"
                onChange={() => setImageFile}
                required
              />
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
              onClick={handleEditImage}
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