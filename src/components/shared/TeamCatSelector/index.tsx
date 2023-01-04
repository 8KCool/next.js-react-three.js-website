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
    <div className="grid max-w-xl grid-cols-1 gap-3 mx-auto my-4 text-white rounded-lg xs:grid-cols-2 sm:max-w-2xl md:grid-cols-5">
      {categories.map((cat) => {
        return (
          <div
            className={`cursor-pointer rounded-lg ${
              category === cat ? 'bg-primary' : 'bg-grey'
            }`}
            key={cat}
            onClick={() => onClick(cat)}
          >
            <p className="text-xl font-bold text-center capitalize">{cat}</p>
          </div>
        )
      })}
    </div>
  )
}
