import { ReactNode } from 'react'
import { FaDiscord } from 'react-icons/fa'

interface FloatingActionButtonProps {
  children?: ReactNode
}

export const FloatingActionButton: React.FC<FloatingActionButtonProps> = () => {
  return (
    <div className="z-30 fixed bottom-8 right-8 flex h-14 w-14 items-center justify-center rounded-full bg-primary">
      <a
        target="_blank"
        rel="noreferrer"
        href="https://discord.io/trigandao"
        className="flex h-full w-full justify-center items-center"
      >
        <FaDiscord className="text-2xl" />
      </a>
    </div>
  )
}
