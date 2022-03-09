import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface FadeInWhenVisibleProps {
  children?: ReactNode
  duration?: number
}

export const FadeInWhenVisible: React.FC<FadeInWhenVisibleProps> = ({
  children,
  duration = 0.6,
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
    >
      {children}
    </motion.div>
  )
}
