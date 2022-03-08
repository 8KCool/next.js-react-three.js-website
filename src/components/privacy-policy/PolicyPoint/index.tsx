import { ReactNode } from 'react'

interface PolicyPointProps {
  children?: ReactNode
  content: string
}

export const PolicyPoint: React.FC<PolicyPointProps> = ({ content }) => {
  return <p className="ml-5 py-2">{content}</p>
}
