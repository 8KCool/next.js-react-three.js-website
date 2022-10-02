import { Button, createStyles, Input, Title } from '@mantine/core';
import { IconPlus, IconSearch } from '@tabler/icons';
import axios, { AxiosError } from 'axios';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { ReactNode, useCallback, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { PostsModals } from '../../../components/admin/teammembers-proposal/proposalModal';
import { PostsTable } from '../../../components/admin/teammembers-proposal/proposalTable';
import { AdminLayout } from '../../../components/layouts/AdminLayout';
import { ConfirmModal } from '../../../components/shared/ConfirmModal';
import { TEST_API_URL } from '../../../util/constants';

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

const dummyData: any = [
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
  const [proposals, setProposals] = useState<any>(dummyData) // use an empty array instead of dummdata when url is fixed
  // const [fetching, setFetching] = useState(true)
  const [modal, setModal] = useState({ open: false, size: 'md', type: '' })
  const [selectedPost, setSelectedPost] = useState<any>({})

  const { classes } = useStyles()

  const router = useRouter()
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (e) e.preventDefault()
    await fetchFunction()
  }

  const fetchFunction = useCallback(async () => {
    // setFetching(true)
    try {
      const posts: any = await axios.get(
        `${TEST_API_URL}/teammember-proposal/getAll`,
        {
          withCredentials: true,
          headers: {
            Authorization: `${localStorage.getItem('access_token')}`,
          },
          params: {
            search,
          },
        }
      )
      console.log(posts.data.Data)
      setProposals(posts.data.Data)
    } catch (error: any) {
      const err = error as AxiosError
      if (err.response?.status === 401) {
        await router.push('/admin/login')
      }
      toast.error('Something went wrong')
    }
    // setFetching(false)
  }, [search, router])

  useEffect(() => {
    async function fetchData() {
      await fetchFunction()
    }
    void fetchData()
  }, [fetchFunction])

  const handleApprove = (item: any) => {
    ConfirmModal.show('Are you sure?', 'Approve', async () => {
      try {
        const { data } = await axios.put(
          `${TEST_API_URL}/admin/teammember-proposal/approve/${item.id}`,
          {},
          {
            withCredentials: true,
            headers: {
              Authorization: `${localStorage.getItem('access_token')}`,
            },
          }
        )
        if (data && data.Success === 'true') {
          setProposals((proposals: any) =>
            proposals.map((proposal: any) => ({
              ...item,
              is_approved:
                proposal.id === item.id ? true : proposal.is_approved,
            }))
          )
        }
      } catch (err) {
        console.log(err)
      }
    })
  }

  return (
    <AdminLayout>
      <Title align={'center'}>Team Members Proposals</Title>
      <section className={classes.topSection}>
        <form className={classes.searchForm} onSubmit={handleSubmit}>
          <Input
            sx={{ width: '100%' }}
            placeholder="Search by title"
            value={search}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearch(e.target.value)
            }
          />
          <Button type="submit" variant="outline">
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
          Create Team Member Proposal
        </Button>
      </section>

      <section>
        <PostsTable
          posts={proposals}
          fetching={false} //pass fetching instead of false when url is fixed
          setModal={setModal}
          setSelectedPost={setSelectedPost}
          onApprove={handleApprove}
        />
      </section>

      <div>
        <PostsModals
          modal={modal}
          setModal={setModal}
          selectedPost={selectedPost}
          setSelectedPost={setSelectedPost}
          fetchFunction={fetchFunction}
        />
      </div>
    </AdminLayout>
  )
}

export default Dashboard
