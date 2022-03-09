import { ReactNode } from 'react'

interface TitleProps {
  children?: ReactNode
  title: string
  classes?: string
  borderColor?: string
}

export const Title: React.FC<TitleProps> = ({
  title,
  classes = '',
  borderColor = 'border-light',
}) => {
  return (
    <h1
      className={`w-full py-10 text-center text-2xl font-semibold capitalize md:text-5xl ${classes}`}
    >
      <span
        className={`inline-block border-b border-dotted pb-2 ${
          borderColor === 'border-light' ? 'border-light' : borderColor
        }`}
      >
        {title}
      </span>
    </h1>
  )
}
