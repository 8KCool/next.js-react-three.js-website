import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { Backdrop } from '../Backdrop'

interface ModalProps {
  children?: ReactNode
  handleClose: () => void
}

const dropIn = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: '100vh',
    opacity: 0,
  },
}

export const Modal: React.FC<ModalProps> = ({ handleClose, children }) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal bg-grey"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {children}
        <button onClick={handleClose} className="primary-btn">
          Close
        </button>
      </motion.div>
    </Backdrop>
  )
}
