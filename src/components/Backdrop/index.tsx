import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface BackdropProps {
  children: ReactNode
  onClick: () => void
}

export const Backdrop: React.FC<BackdropProps> = ({ children, onClick }) => {
  return (
    <motion.div
      className="absolute top-0 left-0 flex h-full w-full items-center justify-center bg-[#000000e1]"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  )
}
