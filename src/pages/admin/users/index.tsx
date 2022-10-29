import { NextPage } from 'next';
import React, { useCallback, useEffect, useState, Dispatch, SetStateAction } from 'react';
import { AdminLayout } from '../../../components/layouts/AdminLayout';
import { Title } from '@mantine/core';
import axios, { AxiosError } from 'axios';
import { TEST_API_URL } from '../../../util/constants';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';
import TabHeaderAction from "../../../components/tabHeaderAction";
import { MoadalType, UsersTable, UserType } from '../../../components/admin/users/UsersTable';
import { UsersModals } from '../../../components/admin/users/UsersModals';

const Users: NextPage = () => {
    const [search, setSearch] = useState('');
    const [users, setUsers] = useState([]);
    const [fetching, setFetching] = useState(false);
    const [modal, setModal] = useState({ open: false, size: 'md', type: '' });
    const [selectedUser, setSelectedUser] = useState<UserType>();

    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      if (e) e.preventDefault()
      await fetchByUsername()
    }
    const fetchByUsername = useCallback(async () => {
      setFetching(true);
      if(search)
      try {
        const p: any = await axios.get(`${TEST_API_URL}/users/${search}`, {
          withCredentials: true,
          headers: {
            Authorization: `${localStorage.getItem('access_token')}`,
          },
        })
        setUsers(p.data.Data as [])
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

    const fetchFunction = useCallback(async () => {
        setFetching(true)
        try {
          const p: any = await axios.get(`${TEST_API_URL}/users`, {
            withCredentials: true,
            headers: {
              Authorization: `${localStorage.getItem('access_token')}`,
            },
          })
          setUsers(p.data.Data as [])
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
            <Title align='center'>Users</Title>
            <TabHeaderAction 
                search={{ 
                    value: search, 
                    onChange: (e) => setSearch(e.target.value), 
                    handleSubmit: handleSubmit
                }}
                create={{onClick: () => setModal({ open: true, type: 'create', size: '' }), text: "Create User"}}
            />

            <section>
                <UsersTable 
                    users={users}
                    fetching={fetching}
                    setModal={setModal as Dispatch<SetStateAction<MoadalType>>}
                    setSelectedUsers={setSelectedUser as Dispatch<SetStateAction<UserType>>}
                />
            </section>

            <div>
                <UsersModals 
                    modal={modal as MoadalType}
                    setModal={setModal as Dispatch<SetStateAction<MoadalType>>}
                    selectedUser={selectedUser as UserType}
                    setSelectedUser={setSelectedUser as Dispatch<SetStateAction<UserType>>}
                    fetchFunction={fetchFunction}
                />
            </div>
        </AdminLayout>
    )
};

export default Users