import { ReactNode } from 'react'
import { TeamMember } from '../../../types/TeamMember'
import { getAllCategories } from '../../../util/functions'

interface TeamCatSelectorProps {
  children?: ReactNode
  teams: TeamMember[]
  category: string
  onClick: (cat: string) => void
}

const TeamCatSelector: React.FC<TeamCatSelectorProps> = ({
  teams,
  onClick,
  category,
}) => {
  const categories = getAllCategories(teams)
  return (
    <div className="mx-auto my-4 grid max-w-xl grid-cols-1 gap-3 rounded-lg text-white xs:grid-cols-2 sm:max-w-2xl md:grid-cols-5">
      {categories.map((cat) => {
        return (
          <div
            className={`cursor-pointer rounded-lg ${
              category === cat ? 'dark:bg-tpurple bg-primary' : 'bg-grey'
            }`}
            key={cat}
            onClick={() => onClick(cat)}
          >
            <p className="text-center text-xl font-bold capitalize">{cat}</p>
          </div>
        )
      })}
    </div>
  )
}
export default TeamCatSelector