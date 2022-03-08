import { ReactNode } from 'react'

interface PolicyTitleProps {
  children?: ReactNode
  title: string
  notBold?: boolean
}

export const PolicyTitle: React.FC<PolicyTitleProps> = ({
  title,
  notBold = false,
}) => {
  return (
    <h2 className={`my-5 underline ${notBold ? '' : 'text-xl font-bold'}`}>
      {title}
    </h2>
  )
}
