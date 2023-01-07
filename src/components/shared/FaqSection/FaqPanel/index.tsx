import { motion } from 'framer-motion'
import { ReactNode, useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import { FaTimes } from 'react-icons/fa'
import { BsChat } from 'react-icons/bs'
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
      transition={{ duration: 0.3 * index }}
      className={`mx-auto my-[20px] overflow-hidden rounded-[10px] border border-solid border-[#9fa4a8] bg-transparent p-[30px] transition duration-[0.3] ease-in ${
        showAnswer === true
          ? "after:content-[' 075'] relative bg-[#000000] shadow-[0_3px_6px_rgba(0,0,0,0.3),0_3px_6px_rgba(0,0,0,0.1)]"
          : 'bg-transparent'
      }`}
    >
      {showAnswer && (
        <>
          <div className="absolute top-0 -left-5 -rotate-[90deg] transform">
            <BsChat size={110} color="#2ecc71" opacity={0.2} />
          </div>
          <div className="absolute top-6 left-8">
            <BsChat size={110} color="#2ecc71" opacity={0.2} />
          </div>
        </>
      )}

      <div className="flex items-center justify-between w-full ">
        <h3 className="text-white ">{title}</h3>
        <button
          className={`${
            showAnswer === true ? 'bg-[#9fa4a8]' : ' bg-transparent'
          } flex h-[30px] w-[30px] items-center justify-center rounded-full`}
          onClick={() => setShowAnswer(!showAnswer)}
        >
          {showAnswer === true ? (
            <FaTimes color="#fff" />
          ) : (
            <FiChevronDown size={25} />
          )}
        </button>
      </div>

      <p
        className={`pt-3 text-justify ${showAnswer && ' !block'} hidden`}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </motion.div>
  )
}