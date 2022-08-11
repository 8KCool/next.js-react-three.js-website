import { NextPage } from 'next'
import { ReactNode, useEffect, useState } from 'react'
import { AdminLayout } from '../../../components/layouts/AdminLayout'
import { withSessionSsr } from '../../../lib/withSession'
import { Button, createStyles, Input, Title } from '@mantine/core'
import axios from 'axios'
import { API_KEY, TEST_API_URL } from '../../../util/constants'
import toast from 'react-hot-toast'
import { PostsTable } from '../../../components/admin/posts/PostsTable'
import { PostsModals } from '../../../components/admin/posts/PostsModals'
import { IconPlus, IconSearch } from '@tabler/icons'

interface DashboardProps {
  children?: ReactNode
}

const useStyles = createStyles((theme) => ({
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

const dummyData = [
  {
    id_post: '6290bc6c64c77c6f5ee1a294',
    date_created: '2022-05-27T11:56:28.212Z',
    date_updated: '2022-05-27T11:56:28.212Z',
    title: 'temporary',
    author: 'temporary',
    content: 'dGVtcG9yYXJ5',
    categories: ['12345'],
    tags: ['67890'],
    original_filename: 'temporary',
    proposal_id: '',
  },
  {
    id_post: '6290ce8d0955b3719fbb6cb8',
    date_created: '2022-05-27T13:13:49.706Z',
    date_updated: '2022-05-27T13:13:49.706Z',
    title: 'temporary',
    author: 'temporary',
    content: 'dGVtcG9yYXJ5',
    categories: ['12345'],
    tags: ['67890'],
    original_filename: 'temporary',
    proposal_id: '',
  },
  {
    id_post: '629837147f2741c337b79765',
    date_created: '2022-06-02T04:05:40.237Z',
    date_updated: '2022-06-02T04:05:40.237Z',
    title: 'temporary',
    author: 'temporary',
    content: 'dGVtcG9yYXJ5',
    categories: ['12345'],
    tags: ['67890'],
    original_filename: 'temporary',
    proposal_id: '',
  },
  {
    id_post: '6299ff437f2741c337b79768',
    date_created: '2022-06-03T12:32:03.126Z',
    date_updated: '2022-06-03T12:32:03.126Z',
    title: 'temporary',
    author: 'temporary',
    content: 'dGVtcG9yYXJ5',
    categories: ['12345'],
    tags: ['67890'],
    original_filename: 'temporary',
    proposal_id: '',
  },
  {
    id_post: '62b9c1f24e8e96ced9600b4a',
    date_created: '2022-06-27T14:42:58.268Z',
    date_updated: '2022-06-27T14:42:58.268Z',
    title: 'a test title no 1',
    author: 'some random person 1',
    content: 'bG90cyBvZiByYW5kb20gY29udGVudC4uLg==',
    categories: ['987'],
    tags: ['123'],
    original_filename: 'etc',
    proposal_id: '',
  },
  {
    id_post: '62b9c2324e8e96ced9600b4d',
    date_created: '2022-06-27T14:44:02.816Z',
    date_updated: '2022-06-27T14:44:02.816Z',
    title: 'something different 2',
    author: 'John Doe',
    content: 'eHl6IDAwMA==',
    categories: ['box'],
    tags: ['exciting', 'fun'],
    original_filename: 'old',
    proposal_id: '',
  },
  {
    id_post: '62b9c2584e8e96ced9600b51',
    date_created: '2022-06-27T14:44:40.139Z',
    date_updated: '2022-06-27T14:44:40.139Z',
    title: 'aaaaaa',
    author: 'aaaaaa',
    content: 'YWFhYWFh',
    categories: ['12345'],
    tags: ['67890'],
    original_filename: 'aaaaaa',
    proposal_id: '',
  },
  {
    id_post: '62ba612b4e8e96ced9600b54',
    date_created: '2022-06-28T02:02:19.378Z',
    date_updated: '2022-06-28T02:02:19.378Z',
    title: 'aaaaaa',
    author: 'aaaaaa',
    content: 'YWFhYWFh',
    categories: ['12345'],
    tags: ['67890'],
    original_filename: 'aaaaaa',
    proposal_id: '',
  },
]
const Dashboard: NextPage<DashboardProps> = () => {
  const [search, setSearch] = useState('')
  const [posts, setPosts] = useState(dummyData) // use an empty array instead of dummdata when url is fixed
  const [fetching, setFetching] = useState(true)
  const [modal, setModal] = useState({ open: false, size: 'md', type: '' })
  const [selectedPost, setSelectedPost] = useState({})

  const { classes, cx } = useStyles()

  const handleSubmit = async (e: any) => {
    if (e) e.preventDefault()
    setFetching(true)
    try {
      const posts: any = await axios.get(`${TEST_API_URL}/posts/search`, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
        params: {
          apiKey: API_KEY,
          search,
        },
      })
      setPosts(posts.posts)
    } catch (error: any) {
      toast.error('Something went wrong')
    }
    setFetching(false)
  }

  useEffect(() => {
    handleSubmit('')
  }, [])

  return (
    <AdminLayout>
      <Title align={'center'}>Posts</Title>
      <section className={classes.topSection}>
        <form className={classes.searchForm} onSubmit={handleSubmit}>
          <Input
            sx={{ width: '100%' }}
            placeholder="Search by title"
            value={search}
            onChange={(e: any) => setSearch(e.target.value)}
          />
          <Button type="submit" onClick={handleSubmit} variant="outline">
            <IconSearch />
          </Button>
        </form>
        <Button
          color="green"
          variant="filled"
          onClick={() => setModal({ open: true, type: 'create', size: '' })}
          sx={{ backgroundColor: '#40c057 !important', margin: '1rem auto' }}
          leftIcon={<IconPlus />}
        >
          Create Post
        </Button>
      </section>

      <section>
        <PostsTable
          posts={posts}
          fetching={false} //pass fetching instead of false when url is fixed
          setModal={setModal}
          setSelectedPost={setSelectedPost}
        />
      </section>

      <div>
        <PostsModals
          modal={modal}
          setModal={setModal}
          selectedPost={selectedPost}
          setSelectedPost={setSelectedPost}
        />
      </div>
    </AdminLayout>
  )
}

export const getServerSideProps = withSessionSsr(function getServerSideProps({
  req,
}) {
  // check if the user is authenticated
  const user = req.session.user

  // if not
  if (!user) {
    return {
      redirect: {
        permanent: false,
        destination: '/api/login',
      },
    }
  }

  // if authenticated
  return {
    props: {
      user: req.session.user,
    },
  }
})

export default Dashboard
