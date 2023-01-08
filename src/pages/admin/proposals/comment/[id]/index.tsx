import { NextPage } from 'next'
import React, {
  useCallback,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
} from 'react'
import { AdminLayout } from '../../../../../components/layouts/AdminLayout'
import { Title } from '@mantine/core'
import axios, { AxiosError } from 'axios'
import { TEST_API_URL } from '../../../../../util/constants'
import toast from 'react-hot-toast'
// import { IconPlus, IconSearch } from '@tabler/icons'
import { useRouter } from 'next/router'
import TabHeaderAction from '../../../../../components/tabHeaderAction'
import {
  MoadalType,
} from '../../../../../components/admin/proposals/comments/CommentsTable'
import { CommentsModals } from '../../../../../components/admin/proposals/comments/CommentsModals'
import { CommentsTable, CommentType } from '../../../../../components/admin/proposals/comments/CommentsTable'

const Comments: NextPage = () => {
  const [search, setSearch] = useState('')
  const [comments, setComments] = useState([])
  const [fetching, setFetching] = useState(false)
  const [modal, setModal] = useState({ open: false, size: 'md', type: '' })
  const [selectedComment, setSelectedComment] = useState<CommentType>()

  const router = useRouter();
  const id = router.query.id;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (e) e.preventDefault()
    await fetchFunction()
  }

  const fetchFunction = useCallback(async () => {
    setFetching(true)
    try {
      const p: any = await axios.get(
        `${TEST_API_URL}/user/proposal/comment/getAll/${id}`,
        {
          withCredentials: true,
          headers: {
            Authorization: `${localStorage.getItem('access_token')}`,
          },
        }
      )
      console.log(p.data.Data)
      setComments(p.data.Data as [])
    } catch (error) {
      console.log(error)
      const err = error as AxiosError
      if ((err.response?.status as number) === 401) {
        await router.push('/admin/login')
      }
      toast.error('Something went wrong')
    }
    setFetching(false)
  }, [router])

  useEffect(() => {
    void fetchFunction()
  }, [fetchFunction])
  return (
    <AdminLayout>
      <Title align="center">Proposals Comments</Title>
      <TabHeaderAction
        search={{
          value: search,
          onChange: (e) => setSearch(e.target.value),
          handleSubmit: handleSubmit,
        }}
        create={{
          onClick: () => setModal({ open: true, type: 'create', size: '' }),
          text: 'Create Comment',
        }}
      />

      <section>
        <CommentsTable
          comments={comments}
          fetching={fetching}
          setModal={setModal as Dispatch<SetStateAction<MoadalType>>}
          setSelectedComment={
            setSelectedComment as Dispatch<SetStateAction<CommentType>>
          }
        />
      </section>

      <div>
        <CommentsModals
          modal={modal as MoadalType}
          setModal={setModal as Dispatch<SetStateAction<MoadalType>>}
          selectedComment={selectedComment as CommentType}
          setSelectedComment={
            setSelectedComment as Dispatch<SetStateAction<CommentType>>
          }
          fetchFunction={fetchFunction}
        />
      </div>
    </AdminLayout>
  )
}

export default Comments
