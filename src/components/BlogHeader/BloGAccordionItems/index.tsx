import { motion } from 'framer-motion'
import { ReactNode, useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { BsChat } from 'react-icons/bs'
interface FaqPanelProps {
  children?: ReactNode
  title: string
  content: string
  index: number
}

export const Blogpanel: React.FC<FaqPanelProps> = ({
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
      className={` overflow-hidden rounded-[10px] bg-transparent transition duration-[0.3] ease-in ${
        showAnswer === true
          ? "after:content-[' 075'] relative bg-inherit md:max-w-lg shadow-[0_3px_6px_rgba(0,0,0,0.3),0_3px_6px_rgba(0,0,0,0.1)]"
          : 'bg-transparent'
      }`}
    >
      {showAnswer && (
        <>
       
          <div className="absolute bottom-0">
            <BsChat size={110} color="#2ecc71" opacity={0.2} />
          </div>
        </>
      )}
      <div className="flex flex-col items-start justify-between w-full ">
        <h3 
             className="text-lg py-2 font-bold sm:text-xl md:text-2xl">
        {title}</h3>
      </div>
      <div className='flex items-end justify-end'>
      <button
          className={`${
            showAnswer === true ? ' flex items-end justify-end' : ' bg-transparent'
          } flex h-[30px] w-20 items-center justify-center rounded-full`}
          onClick={() => setShowAnswer(!showAnswer)}
        >
          {showAnswer === true ? (
<FaTimes size={25} />
) : (
    
    <p className='font-semibold text-gray-500  text-sm ' >
   ...read more
</p> 
          )}
        </button>
        </div>

      <p
        className={`pt-3 px-1 text-justify ${showAnswer && ' !block'} hidden`}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </motion.div>
  )
}