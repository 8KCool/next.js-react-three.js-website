import { ReactNode } from 'react'

interface AnimationBlobProps {
  children?: ReactNode
}

export const AnimationBlob: React.FC<AnimationBlobProps> = () => {
  return (
    <>
      <div className="absolute top-10 left-20 h-72 w-72 animate-blob overflow-hidden rounded-full bg-purple-700 opacity-70 mix-blend-multiply blur-xl filter" />
      <div className="animation-delay-2000 absolute top-10 right-20 h-72 w-72 animate-blob overflow-hidden rounded-full bg-yellow-700 opacity-70 mix-blend-multiply blur-xl filter" />
      <div className="animation-delay-4000 absolute bottom-4 left-44 h-72 w-72 animate-blob overflow-hidden rounded-full bg-pink-700 opacity-70 mix-blend-multiply blur-xl filter" />
    </>
  )
}
