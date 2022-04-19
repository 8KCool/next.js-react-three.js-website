import { ReactNode } from 'react'

interface AdminNavbarProps {
  children?: ReactNode
}

export const AdminNavbar: React.FC<AdminNavbarProps> = () => {
  return (
    <div className="w-full bg-grey py-3">
      <div className="flex justify-end gap-5 px-5">
        <button>Pranta Dutta</button>
        <button>Log out</button>
      </div>
    </div>
  )
}
