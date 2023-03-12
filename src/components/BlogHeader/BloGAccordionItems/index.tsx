import { motion } from 'framer-motion'
import { ReactNode, useState } from 'react'
import { BsChat } from 'react-icons/bs'
import Link from 'next/link'
import Image from "next/legacy/image"

interface FaqPanelProps {
  children?: ReactNode
  title: string
  content: string
  index: number
  post: any
}

export const Blogpanel: React.FC<FaqPanelProps> = ({
  title,
  content,
  index,
  post,
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
      {/* <div className="flex flex-col items-start w-full  h-auto"> */}
                            <Link href={post.link}>
                                <a className="blockmb-2 ">
                                    <Image
                                     className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56" 
                                     alt='blog-images' 
                                    //  src={post.image}
                                        src={showAnswer ? post.onclickImage : post.image}
                                      width={500} height={300} />
                                </a>
                            </Link>
                            <div className='flex py-1'>
                                    {post.tags.tags.map((tag:string) => (
                                        <div key={post.tags.id }
                                              className="bg-purple-500 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white">
                                            <span>{tag}</span>
                                            </div>
                                    ))}
                                    </div>
        <h3 
             className="text-lg py-2 font-bold sm:text-xl md:text-2xl"
          onClick={() => setShowAnswer(!showAnswer)}
             >
        {title}</h3>
      </div>

      <p
        className={`pt-3 px-1 text-justify ${showAnswer && ' !block'} hidden`}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </motion.div>
  )
}