import { ReactNode } from 'react'

interface TitleProps {
  children?: ReactNode
  title: string
  classes?: string
  underlineColor?: string
}

export const Title: React.FC<TitleProps> = ({
  title,
  classes = '',
  underlineColor = 'light',
}) => {
  return (
    <h1
      className={`z-50 w-full py-10 text-center text-2xl font-semibold capitalize md:text-5xl ${classes}`}
    >
      <span
        className={`inline-block border-b border-dotted pb-2 border-${underlineColor}`}
      >
        {title}
      </span>
    </h1>
  )
}
