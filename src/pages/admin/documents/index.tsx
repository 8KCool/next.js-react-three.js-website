import { NextPage } from 'next';
import React, { ReactNode, useCallback, useEffect, useState } from 'react';
import { AdminLayout } from '../../../components/layouts/AdminLayout';
import { Button, createStyles, Input, Title } from '@mantine/core';
import { TEST_API_URL } from '../../../util/constants';
import axios from 'axios';
import toast from 'react-hot-toast';
import { IconPlus, IconSearch } from '@tabler/icons';
import { DocumentModals } from '../../../components/admin/Document/DocumentModels';
import { DocumentTable } from '../../../components/admin/Document/DocumentTable';

interface DashboardProps {
    children?: ReactNode
}

const Dashboard: NextPage<DashboardProps> = () => {

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
    const [modal, setModal] = useState({ open: false, size: 'md', type: '' })
    const [selectedDocument, setSelectedDocument] = useState<any>({})

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

            setDocuments(p.data);
        } catch (error) {
            console.log(error)
            toast.error('Something went wrong')
        }
        // setFetching(false)
    }, [])

    useEffect(() => {
        async function fetchData() {
            await fetchFunction()
        }
        void fetchData()
    }, [fetchFunction])

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
                    onClick={() => setModal({ open: true, type: 'create', size: '' })}
                    sx={{ backgroundColor: '#40c057 !important', margin: '1rem auto' }}
                    leftIcon={<IconPlus />}
                >
                    Create Documents
                </Button>
            </section>

            <section>
                <DocumentTable
                    documents={documents}
                    fetching={false} //pass fetching instead of false when url is fixed
                    setModal={setModal}
                    setSelectedDocument={setSelectedDocument}
                />
            </section>

            <div>
                <DocumentModals
                    modal={modal}
                    setModal={setModal}
                    selectedDocument={selectedDocument}
                    setSelectedDocument={setSelectedDocument}
                />
            </div>
        </AdminLayout>
    )
}

export default Dashboard