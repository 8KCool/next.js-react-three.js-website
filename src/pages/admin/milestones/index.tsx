import { NextPage } from 'next'
import React, { ReactNode, useCallback, useEffect, useState } from 'react'
import { AdminLayout } from '../../../components/layouts/AdminLayout'
import { Title } from '@mantine/core'
import axios, { AxiosError } from 'axios'
import { TEST_API_URL } from '../../../util/constants'
import toast from 'react-hot-toast'
import { MilestoneTable } from '../../../components/admin/milestones/MilestoneTable'
import { MilestoneModals } from '../../../components/admin/milestones/MilestoneModals'
// import { IconPlus, IconSearch } from '@tabler/icons'
import TabHeaderAction from '../../../components/tabHeaderAction'
import { useRouter } from 'next/router'

interface DashboardProps {
  children?: ReactNode
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars

const Dashboard: NextPage<DashboardProps> = () => {
  const [search, setSearch] = useState('')
  const [milestones, setMilestones] = useState<any>([]) // use an empty array instead of dummdata when url is fixed
  const [fetching, setFetching] = useState(false)
  const [modal, setModal] = useState({ open: false, size: 'md', type: '' })
  const [selectedMilestone, setSelectedMilestone] = useState<any>({})

  const router = useRouter()
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (e) e.preventDefault()
    await fetchFunction()
  }

  const fetchFunction = useCallback(async () => {
    setFetching(true)
    try {
      const p: any = await axios.get(`${TEST_API_URL}/milestone/getAll`, {
        withCredentials: true,
        headers: {
          Authorization: `${localStorage.getItem('access_token')}`,
        },
      })
      setMilestones(p.data.Data)
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
      <Title align={'center'}>Milestones</Title>
      <TabHeaderAction
        search={{
          value: search,
          onChange: (e) => setSearch(e.target.value),
          handleSubmit: handleSubmit,
        }}
        create={{
          text: 'Create a Milestone',
          onClick: () => setModal({ open: true, type: 'create', size: '' }),
        }}
      />

      <section>
        <MilestoneTable
          milestones={milestones}
          fetching={fetching} //pass fetching instead of false when url is fixed
          setModal={setModal}
          setSelectedMilestone={setSelectedMilestone}
        />
      </section>

      <div>
        <MilestoneModals
          modal={modal}
          setModal={setModal}
          selectedMilestone={selectedMilestone}
          setSelectedMilestone={setSelectedMilestone}
          fetchFunction={fetchFunction}
        />
      </div>
    </AdminLayout>
  )
}

export default Dashboard
