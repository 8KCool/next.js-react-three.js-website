import { NextPage } from 'next';
import React, { useCallback, useEffect, useState, Dispatch, SetStateAction } from 'react';
import { AdminLayout } from '../../../components/layouts/AdminLayout';
import { Title } from '@mantine/core';
import axios, { AxiosError } from 'axios';
import { TEST_API_URL } from '../../../util/constants';
import toast from 'react-hot-toast';
import { IconPlus, IconSearch } from '@tabler/icons';
import { useRouter } from 'next/router';
import TabHeaderAction from "../../../components/tabHeaderAction";
import { ProposalsTable, MoadalType, ProposalType } from '../../../components/admin/proposals/ProposalsTable';
import { ProposalsModals } from '../../../components/admin/proposals/ProposalsModals';

// const dummyData = [
//     {
//         created_at: "2022-05-27T11:56:28.212Z",
//         last_updated: "2022-05-27T11:56:28.212Z",
//         downvotes: 0,
//         firstname: "A",
//         id: "A1AA",
//         lastname: "B",
//         no_of_comments: 3,
//         proposal_text: "adswcdwqsc",
//         title: "1",
//         upvotes: 2,
//         user_id: "a1a",
//         username: "A B"
//     },
// ]

const Proposals: NextPage = () => {
    const [search, setSearch] = useState('');
    const [proposals, setProposals] = useState([]);
    const [fetching, setFetching] = useState(false);
    const [modal, setModal] = useState({ open: false, size: 'md', type: '' });
    const [selectedProposal, setSelectedProposal] = useState<ProposalType>();

    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      if (e) e.preventDefault()
      await fetchFunction()
    }
    console.log(proposals)
    const fetchFunction = useCallback(async () => {
        setFetching(true)
        try {
          const p: any = await axios.get(`${TEST_API_URL}/user/proposal/getAll`, {
            withCredentials: true,
            headers: {
              Authorization: `${localStorage.getItem('access_token')}`,
            },
          })
          console.log(p.data.Data);
          setProposals(p.data.Data as [])
        } catch (error) {
          console.log(error)
          const err = error as AxiosError
          if (err.response?.status as number === 401) {
            await router.push('/admin/login')
          }
          toast.error('Something went wrong')
        }
        setFetching(false);
    }, [router]);

    useEffect(() => {
        void fetchFunction();
    }, [fetchFunction])
    return (
        <AdminLayout>
            <Title align='center'>Proposals</Title>
            <TabHeaderAction 
                search={{ 
                    value: search, 
                    onChange: (e) => setSearch(e.target.value), 
                    handleSubmit: handleSubmit
                }}
                create={{onClick: () => setModal({ open: true, type: 'create', size: '' }), text: "Create Proposal"}}
            />

            <section>
                <ProposalsTable 
                    proposals={proposals}
                    fetching={fetching}
                    setModal={setModal as Dispatch<SetStateAction<MoadalType>>}
                    setSelectedProposal={setSelectedProposal as Dispatch<SetStateAction<ProposalType>>}
                />
            </section>

            <div>
                <ProposalsModals 
                    modal={modal as MoadalType}
                    setModal={setModal as Dispatch<SetStateAction<MoadalType>>}
                    selectedProposal={selectedProposal as ProposalType}
                    setSelectedProposal={setSelectedProposal as Dispatch<SetStateAction<ProposalType>>}
                    fetchFunction={fetchFunction}
                />
            </div>
        </AdminLayout>
    )
};

export default Proposals