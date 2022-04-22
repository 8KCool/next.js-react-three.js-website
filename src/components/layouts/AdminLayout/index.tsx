import { ReactNode } from 'react'
import { AdminNavbar } from '../../admin/AdminNavbar'
import { AdminSidebar } from '../../admin/AdminSidebar'

interface AdminLayoutProps {
  children?: ReactNode
}

export const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <>
      <div className="grid h-screen grid-cols-5">
        <div className="col-span-1">
          <AdminSidebar />
        </div>
        <main className="col-span-4">
          <AdminNavbar />
          <div className="p-10">{children}</div>
        </main>
      </div>
    </>
  )
}
