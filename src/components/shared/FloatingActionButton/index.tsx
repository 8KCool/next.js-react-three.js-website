import { ReactNode } from 'react'
import { FaDiscord } from 'react-icons/fa'

interface FloatingActionButtonProps {
  children?: ReactNode
}

export const FloatingActionButton: React.FC<FloatingActionButtonProps> = () => {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      href="https://discord.gg/GQ3JyBdg"
      className="fixed right-8 z-30 flex h-full w-full flex-row-reverse flex-wrap-reverse"
    >
      <div className="absolute bottom-8 flex h-14 w-14 items-center justify-center rounded-full bg-primary">
        <FaDiscord className="text-2xl" />
      </div>
    </a>
  )
}
