import { ReactElement, ReactNode } from 'react'

interface ContactUsCardProps {
  children?: ReactNode
  icon: ReactElement
  content: string
}

export const ContactUsCard: React.FC<ContactUsCardProps> = ({
  icon,
  content,
}) => {
  return (
    <div className="mt-5 flex items-start space-x-1 lg:space-x-2">
      <button className="rounded-full bg-primary p-2">{icon}</button>
      <p className="text-xl font-medium">{content}</p>
    </div>
  )
}
