import { ReactNode } from 'react'

interface TermPointProps {
  children?: ReactNode
  content: string
}

export const TermPoint: React.FC<TermPointProps> = ({ content }) => {
  return <p className="ml-5 py-2">{content}</p>
}
