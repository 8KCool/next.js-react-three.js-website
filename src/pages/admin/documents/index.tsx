import { NextPage } from 'next';
import React, { ReactNode, useCallback, useEffect, useState } from 'react';
import { AdminLayout } from '../../../components/layouts/AdminLayout';
import { Title } from '@mantine/core';
import { TEST_API_URL } from '../../../util/constants';
import axios, { AxiosError } from 'axios';
import toast from 'react-hot-toast';
import { DocumentModals } from '../../../components/admin/Document/DocumentModels';
import { DocumentTable } from '../../../components/admin/Document/DocumentTable';
import TabHeaderAction from "../../../components/tabHeaderAction"
import { useRouter } from 'next/router';

interface DashboardProps {
    children?: ReactNode
}

const Dashboard: NextPage<DashboardProps> = () => {
    const [search, setSearch] = useState('')
    const [documents, setDocuments] = useState<any>([]) // use an empty array instead of dummdata when url is fixed
    const [fetching, setFetching] = useState(true)
    const [modal, setModal] = useState({ open: false, size: 'md', type: '' });
    const [selectedDocument, setSelectedDocument] = useState<any>({});

    const router = useRouter();
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        if (e) e.preventDefault()
        await fetchFunction()
    }
    console.log(documents)
    const fetchFunction = useCallback(async () => {
        setFetching(true)
        try {
            const p: any = await axios.get(`${TEST_API_URL}/document/getall`, {
                withCredentials: true,
                headers: {
                    Authorization: `${localStorage.getItem('access_token')}`,
                },
            })

            setDocuments(p.data);
            // console.log(p)
        } catch (error) {
            console.log(error)
            const err = error as AxiosError
            if (err.response?.status as number === 401) {
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
            <Title align={'center'}>Documents</Title>
            <TabHeaderAction 
                search={{
                    value: search,
                    onChange: (e) => setSearch(e.target.value),
                    handleSubmit: handleSubmit
                }}
                create={{
                    text: "Create Documents",
                    onClick: () => setModal({ open: true, type: 'create', size: '' })
                }}
            />

            <section>
                <DocumentTable
                    documents={documents}
                    fetching={fetching} //pass fetching instead of false when url is fixed
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
                    fetchFunction={fetchFunction}
                />
            </div>
        </AdminLayout>
    )
}

export default Dashboard