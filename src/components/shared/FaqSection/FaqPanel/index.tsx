import { motion } from 'framer-motion'
import { ReactNode, useState } from 'react'

interface FaqPanelProps {
  children?: ReactNode
  title: string
  content: string
  index: number
}

export const FaqPanel: React.FC<FaqPanelProps> = ({
  title,
  content,
  index,
}) => {
  const [showAnswer, setShowAnswer] = useState(false)
  return (
    <motion.div
      initial={{ x: '-100%' }}
      animate={{ x: 0 }}
      transition={{ duration: 0.2 * index }}
      className="mx-auto my-3 rounded-lg bg-primary px-5 py-2"
    >
      <button
        className="w-full text-left text-lg font-semibold"
        onClick={() => setShowAnswer(!showAnswer)}
      >
        {title}
      </button>
      {showAnswer && (
        <p
          className="pt-3 text-justify"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}
    </motion.div>
  )
}
