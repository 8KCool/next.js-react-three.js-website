import { NextPage } from 'next'
import React, { ReactNode, useCallback, useEffect, useState } from 'react'
import {
  AdminLayout,
} from '../../../components/layouts/AdminLayout'
import { Button, createStyles, Title } from '@mantine/core'
import axios from 'axios'
import { TEST_API_URL } from '../../../util/constants'
import toast from 'react-hot-toast'
import { IconPlus } from '@tabler/icons'
import { MailingData, MailingListTable } from '../../../components/admin/mailinglist/MailingListTable'
import { MailingCreateModal } from '../../../components/admin/mailinglist/MailingModal'

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
  const [mailings, setMailings] = useState<MailingData[]>([])

  const { classes } = useStyles()

  const fetchFunction = useCallback(async () => {
    try {
      const m = await axios.get<{ Data: MailingData[]}>(`${TEST_API_URL}/mailinglist/get`, {
        withCredentials: true,
        headers: {
          Authorization: `${localStorage.getItem('access_token')}`,
        },
      })

      setMailings(m.data.Data || [])
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

  useEffect(() => {
    async function fetchData() {
      await fetchFunction()
    }

    if (modal.type === 'reload') {
      setModal({ ...modal, type: '' })
      void fetchData()
    }
  }, [modal, fetchFunction])

  return (
    <AdminLayout>
      <Title align={'center'}>Mailing List</Title>
      <section className={classes.topSection}>
        <Button
          color="green"
          variant="filled"
          onClick={() => setModal({ open: true, type: 'create', size: '' })}
          sx={{ backgroundColor: '#40c057 !important', margin: '1rem auto' }}
          leftIcon={<IconPlus />}
        >
          Create Mailing
        </Button>
        <Button
          color="blue"
          variant="filled"
          onClick={() => setModal({ open: true, type: 'verify', size: '' })}
          sx={{ backgroundColor: '#40c057 !important', margin: '1rem auto' }}
          leftIcon={<IconPlus />}
        >
          Verify Mailing
        </Button>
      </section>

      <section>
        <MailingListTable
          mailings={mailings}
          fetching={false} //pass fetching instead of false when url is fixed
        />
      </section>

      <div>
        <MailingCreateModal
          modal={modal}
          setModal={setModal}
        />
      </div>
    </AdminLayout>
  )
}

export default Dashboard
