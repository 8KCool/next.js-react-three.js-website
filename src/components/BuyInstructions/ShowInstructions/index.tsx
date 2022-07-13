import { motion } from 'framer-motion'
import { ReactNode, useState } from 'react'
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'
import { FadeInWhenVisible } from '../../shared/FadeInWhenVisible'

interface ShowInstructionsProps {
  children?: ReactNode
  title: string
  lang: 'en' | 'cn'
  instructions: string[]
  onLangChange: (lang: 'en' | 'cn') => void
  shortTitle: string
}

export const ShowInstructions: React.FC<ShowInstructionsProps> = ({
  title,
  onLangChange,
  lang,
  instructions,
  shortTitle,
}) => {
  const [expand, setExpand] = useState(false)
  return (
    <div className="my-5">
      <button
        onClick={() => setExpand(!expand)}
        className="mx-auto flex items-center gap-5 text-xl font-semibold"
      >
        {expand ? <AiOutlineArrowDown /> : <AiOutlineArrowUp />}{' '}
        <span className="hidden sm:block">{title}</span>
        <span className="sm:hidden">{shortTitle}</span>
      </button>
      {expand && (
        <FadeInWhenVisible>
          <div className="my-4 mx-2 flex max-w-xl sm:mx-auto">
            <button
              onClick={() => onLangChange('en')}
              className={`flex w-full justify-center rounded-lg px-4 py-2 ${
                lang === 'en' ? 'bg-primary' : ''
              }`}
            >
              English
            </button>
            <button
              onClick={() => onLangChange('cn')}
              className={`flex w-full justify-center rounded-lg px-4 py-2 ${
                lang === 'cn' ? 'bg-primary' : ''
              }`}
            >
              Chinese
            </button>
          </div>
          <motion.ul
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            className="mt-2 ml-10"
          >
            {instructions.map((instruction, i) => {
              return (
                <li
                  dangerouslySetInnerHTML={{
                    __html: `${i + 1}. ${instruction}`,
                  }}
                  key={i}
                />
              )
            })}
          </motion.ul>
        </FadeInWhenVisible>
      )}
    </div>
  )
}
