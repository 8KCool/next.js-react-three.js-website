import { ReactNode } from 'react'
import { TeamMember } from '../../../types/TeamMember'
import { getAllCategories } from '../../../util/functions'

interface TeamCatSelectorProps {
  children?: ReactNode
  teams: TeamMember[]
  category: string
  onClick: (cat: string) => void
}

export const TeamCatSelector: React.FC<TeamCatSelectorProps> = ({
  teams,
  onClick,
  category,
}) => {
  const categories = getAllCategories(teams)
  return (
    <div className="mx-auto my-5 grid max-w-xl grid-cols-2 rounded-lg text-white sm:max-w-2xl sm:grid-cols-4 md:my-8">
      {categories.map((cat) => {
        if (cat != 'Advisors' && cat != 'Co-Founders') {
          return (
            <div
              className={`mx-2 my-2 cursor-pointer rounded-lg sm:my-0 ${
                category === cat ? 'bg-primary' : 'bg-grey'
              }`}
              key={cat}
              onClick={() => onClick(cat)}
            >
              <p className="text-center text-xl font-bold capitalize">{cat}</p>
            </div>
          )
        }
      })}
    </div>
  )
}
