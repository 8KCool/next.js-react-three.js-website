import { Button, createStyles, Input, Title } from '@mantine/core'
import { IconPlus, IconSearch } from '@tabler/icons'
import axios from 'axios'
import { NextPage } from 'next'
import React, { ReactNode, useCallback, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { DocumentModals } from '../../../components/admin/DocumentChanges/DocumentModels'
import { DocumentTable } from '../../../components/admin/DocumentChanges/DocumentTable'
import { AdminLayout } from '../../../components/layouts/AdminLayout'
import { TEST_API_URL } from '../../../util/constants'

interface DocumentChangesProps {
  children?: ReactNode
}

const DocumentChanges: NextPage<DocumentChangesProps> = () => {
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

  const [search, setSearch] = useState('')
  const [documents, setDocuments] = useState<any>([]) // use an empty array instead of dummdata when url is fixed
  // const [fetching, setFetching] = useState(true)
  const [modal, setModal] = useState({
    open: false,
    size: 'md',
    type: '',
    document: undefined,
  })
  const [migrating, setMigrating] = useState(false)

  const { classes } = useStyles()
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (e) e.preventDefault()
    await fetchFunction()
  }

  const fetchFunction = useCallback(async () => {
    // setFetching(true)
    try {
      const p: any = await axios.get(`${TEST_API_URL}/document/getall`, {
        withCredentials: true,
        headers: {
          Authorization: `${localStorage.getItem('access_token')}`,
        },
      })

      setDocuments(p.data)
    } catch (error) {
      console.log(error)
      toast.error('Something went wrong')
    }
    // setFetching(false)
  }, [])

  useEffect(() => {
    void fetchFunction()
  }, [fetchFunction])

  const openCreateModal = () =>
    setModal({ open: true, type: 'create', size: '', document: undefined })
  const openEditModal = (document: any) =>
    setModal({ open: true, type: 'edit', size: '', document })
  const openDocumentChangesModal = (document: any) =>
    setModal({ open: true, type: 'document-changes', size: '', document })
  const closeModal = async ({ refetch = false } = {}) => {
    setModal({ open: false, type: '', size: '', document: undefined })
    if (refetch) {
      await fetchFunction()
    }
  }

  const migrateData = async () => {
    setMigrating(true)
    try {
      await axios.post(
        `${TEST_API_URL}/admin/migration`,
        {},
        {
          withCredentials: true,
          headers: {
            Authorization: `${localStorage.getItem('access_token')}`,
          },
        }
      )
    } catch (err) {
      console.log(err)
    }
    setMigrating(false)
  }

  return (
    <AdminLayout>
      <Title align={'center'}>Documents</Title>
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
          onClick={openCreateModal}
          sx={{ backgroundColor: '#40c057 !important', margin: '1rem auto' }}
          leftIcon={<IconPlus />}
        >
          Create Documents
        </Button>
        <Button variant="white" onClick={migrateData} disabled={migrating}>
          Migration
        </Button>
      </section>

      <section>
        <DocumentTable
          documents={documents}
          fetching={false} //pass fetching instead of false when url is fixed
          onDocumentEdit={openEditModal}
          onOpenDocumentChanges={openDocumentChangesModal}
        />
      </section>

      <div>
        <DocumentModals
          open={modal.open}
          type={modal.type}
          selectedDocument={modal.document}
          onClose={closeModal}
        />
      </div>
    </AdminLayout>
  )
}

export default DocumentChanges
