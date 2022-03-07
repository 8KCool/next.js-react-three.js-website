import { ReactElement, ReactNode } from 'react'

interface ShowSocialIconProps {
  children?: ReactNode
  href?: string
  icon: ReactElement
}

export const ShowSocialIcon: React.FC<ShowSocialIconProps> = ({
  href,
  icon,
}) => {
  if (!href) return <></>
  return (
    <a target="_blank" href={href} rel="noreferrer">
      {icon}
    </a>
  )
}
