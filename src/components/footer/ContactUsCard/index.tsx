import { ReactElement, ReactNode } from 'react'

interface ContactUsCardProps {
  children?: ReactNode
  icon: ReactElement
  content: string
}

export const ContactUsCard: React.FC<ContactUsCardProps> = ({
  icon: Icon,
  content,
}) => {
  return (
    <div className="mb-2 flex items-start space-x-1 lg:space-x-2">
      <div className="mt-2">{Icon}</div>
      <p className="text-lg font-medium">{content}</p>
    </div>
  )
}
