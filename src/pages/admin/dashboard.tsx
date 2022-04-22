import { NextPage } from 'next'
import { ReactNode } from 'react'
import { AdminTitle } from '../../components/admin/AdminTitle'
import { AdminLayout } from '../../components/layouts/AdminLayout'
import { withSessionSsr } from '../../lib/withSession'

interface DashboardProps {
  children?: ReactNode
}

const Dashboard: NextPage<DashboardProps> = () => {
  return (
    <AdminLayout>
      <div>
        <AdminTitle title={'Admin Dashboard'} />
      </div>
    </AdminLayout>
  )
}

export const getServerSideProps = withSessionSsr(function getServerSideProps({
  req,
}) {
  const user = req.session.user

  if (!user) {
    return {
      redirect: {
        permanent: false,
        destination: '/admin/login',
      },
    }
  }

  return {
    props: {
      user: req.session.user,
    },
  }
})

export default Dashboard
