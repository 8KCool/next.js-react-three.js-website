import { ReactNode } from 'react'

interface TermTitleProps {
  children?: ReactNode
  title: string
  notBold?: boolean
}

export const TermTitle: React.FC<TermTitleProps> = ({
  title,
  notBold = false,
}) => {
  return (
    <h2 className={`my-5 underline ${notBold ? '' : 'text-xl font-bold'}`}>
      {title}
    </h2>
  )
}
