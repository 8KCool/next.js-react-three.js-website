import React, { useEffect, useState } from 'react'
import {
  Button,
  Modal,
  Title,
  TextInput,
  Textarea,
  Divider,
  createStyles,
} from '@mantine/core'
import { MoadalType, CommentType } from './CommentsTable'
import axios from 'axios'
import { TEST_API_URL } from '../../../../util/constants'
import toast from 'react-hot-toast'
import { useRouter } from 'next/router'

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

interface CommentsModalsType {
  modal: MoadalType
  setModal: React.Dispatch<React.SetStateAction<MoadalType>>
  selectedComment: CommentType
  setSelectedComment: React.Dispatch<React.SetStateAction<CommentType>>
  fetchFunction: () => Promise<void>
}

const ModalCreate: React.FC<CommentsModalsType> = (props) => {
  const [commentText, setCommentText] = useState('')
  const { classes } = useStyles()

  const router = useRouter()
  const id = router.query.id

  const handleCreate = async (e: any) => {
    e.preventDefault()
    const newComment = {
      proposal_id: id,
      comment: commentText,
    }
    try {
      await axios.post(
        `${TEST_API_URL}/user/proposal/comment/create`,
        newComment,
        {
          withCredentials: true,
          headers: {
            Authorization: `${localStorage.getItem('access_token')}`,
          },
        }
      )
      toast.success('Created Successfully')
      props.setModal({ ...props.modal, open: false })
      void props.fetchFunction()
    } catch (error) {
      let errMsg
      if (axios.isAxiosError(error) && error.response) {
        errMsg = error.response.data.Data.Message as string
      } else errMsg = String(error)
      toast.error(errMsg)
    }
  }

  const handleClose = () => {
    props.setModal({ ...props.modal, open: false })
    setCommentText('')
  }

  return (
    <Modal
      opened={props.modal.open}
      onClose={handleClose}
      size={'100%'}
      withCloseButton={false}
      padding={0}
    >
      <Title mb={'2rem'} sx={{ padding: '20px' }}>
        Create a new Proposal
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
            <Textarea
              label="Proposal Text"
              minRows={4}
              maxRows={6}
              value={commentText}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setCommentText(e.currentTarget.value)
              }
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
          <Button variant="outline" type="submit" color="green" mr={'1rem'}>
            Submit
          </Button>
          <Button variant="outline" color="blue" onClick={handleClose}>
            cancel
          </Button>
        </div>
      </form>
    </Modal>
  )
}

const ModalEdit: React.FC<CommentsModalsType> = (props) => {
  const { classes } = useStyles()
  const [comment, setComment] = useState(props.selectedComment.comment)
  useEffect(() => {
    setComment(props.selectedComment.comment)
  }, [props.selectedComment])
  const handleClose = () => {
    props.setModal({ ...props.modal, open: false })
  }

  const handleEdit = async (e: any) => {
    e.preventDefault()
    const updatedProposal = {
      comment_id: props.selectedComment.id,
      updated_comment: comment,
    }
    try {
      await axios.put(
        `${TEST_API_URL}/user/proposal/comment/update`,
        updatedProposal,
        {
          withCredentials: true,
          headers: {
            Authorization: `${localStorage.getItem('access_token')}`,
          },
        }
      )
      toast.success('Created Successfully')
      handleClose()
      void props.fetchFunction()
    } catch (error) {
      toast.error('An error occured')
    }
  }

  return (
    <Modal
      opened={props.modal.open}
      onClose={handleClose}
      size={'100%'}
      withCloseButton={false}
      padding={0}
    >
      <Title mb={'2rem'} sx={{ padding: '20px' }}>
        Update Comment
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
            <Textarea
              label="Comment Text"
              minRows={4}
              maxRows={6}
              value={comment}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setComment(e.currentTarget.value)
              }
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
          <Button variant="outline" type="submit" color="green" mr={'1rem'}>
            Submit
          </Button>
          <Button variant="outline" color="blue" onClick={handleClose}>
            cancel
          </Button>
        </div>
      </form>
    </Modal>
  )
}

const ModalDelete: React.FC<CommentsModalsType> = (props) => {
  const handleClose = () => {
    props.setModal({ ...props.modal, open: false })
  }

  const handleDelete = async () => {
    try {
      await axios.delete(
        `${TEST_API_URL}/user/proposal/comment/delete/${props.selectedComment.id}`,
        {
          withCredentials: true,
          headers: {
            Authorization: `${localStorage.getItem('access_token')}`,
          },
        }
      )
      toast.success('Deleted Successfully')
      handleClose()
      void props.fetchFunction()
    } catch (error) {
      toast.error('An error occured')
    }
  }

  return (
    <Modal
      opened={props.modal.open}
      onClose={handleClose}
      size={'md'}
      withCloseButton={false}
    >
      <Title order={4}>
        Are you sure you want to delete {props.selectedComment.comment} ?
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
}

const ModalUpvote: React.FC<CommentsModalsType> = (props) => {
  const handleClose = () => {
    props.setModal({ ...props.modal, open: false })
  }

  const handleUpvote = async () => {
    try {
      await axios.put(
        `${TEST_API_URL}/user/proposal/comment/upvote/${props.selectedComment.id}`,
        {
          withCredentials: true,
          headers: {
            Authorization: `${localStorage.getItem('access_token')}`,
          },
        }
      )
      toast.success('Upvote Successfully')
      handleClose()
      void props.fetchFunction()
    } catch (error) {
      toast.error('An error occured')
    }
  }

  return (
    <Modal
      opened={props.modal.open}
      onClose={handleClose}
      size={'md'}
      withCloseButton={false}
    >
      <Title order={4}>
        Are you sure you want to upvote {props.selectedComment.comment} ?
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
          color="green"
          onClick={handleUpvote}
        >
          Upvote
        </Button>
        <Button variant="outline" color="gray" onClick={handleClose}>
          cancel
        </Button>
      </div>
    </Modal>
  )
}

export const CommentsModals: React.FC<CommentsModalsType> = (props) => {
  const { modal } = props

  return (
    <div>
      {
        {
          create: <ModalCreate {...props} />,
          edit: <ModalEdit {...props} />,
          delete: <ModalDelete {...props} />,
          upvote: <ModalUpvote {...props} />,
        }[modal.type]
      }
    </div>
  )
}
