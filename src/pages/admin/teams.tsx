import { ReactNode } from 'react'
import { AdminLayout } from '../../components/layouts/AdminLayout'
import { AdminTitle } from '../../components/admin/AdminTitle'

interface TeamsPros {
  children?: ReactNode
}

const Teams: React.FC<TeamsPros> = () => {
  return (
    <AdminLayout>
      <div>
        <AdminTitle title={'Teams'} />
      </div>
    </AdminLayout>
  )
}

export default Teams
