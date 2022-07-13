import { ReactNode } from 'react'

interface AdminTitleProps {
  children?: ReactNode
  title: string
}

export const AdminTitle: React.FC<AdminTitleProps> = ({ title }) => {
  return <h2 className="text-2xl font-semibold">{title}</h2>
}
