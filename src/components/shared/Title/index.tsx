import { ReactNode } from 'react'

interface TitleProps {
  children?: ReactNode
  title: string
  classes?: string
  padding?: string
}

export const Title: React.FC<TitleProps> = ({
  title,
  classes = '',
  padding = 'py-10',
}) => {
  return (
    <h1
      className={`w-full text-center text-2xl font-semibold capitalize md:text-5xl ${classes} ${padding}`}
    >
      <span className=" mt-[180px] inline-block border-b border-dotted border-light pb-2  dark:text-black">
        {title}
      </span>
    </h1>
  )
}
