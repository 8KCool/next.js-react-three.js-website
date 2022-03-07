import { ReactNode, useState } from 'react'

interface FaqPanelProps {
  children?: ReactNode
  title: string
  content: string
}

export const FaqPanel: React.FC<FaqPanelProps> = ({ title, content }) => {
  const [showAnswer, setShowAnswer] = useState(false)
  return (
    <div className="mx-auto my-3 rounded-lg bg-primary px-5 py-2">
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
    </div>
  )
}
