import { ReactNode } from 'react'
import { ProjectSection } from '../../components/home/ProjectSection'
import  GlobalLayout  from '../../components/layouts/GlobalLayout'

interface ProjectHeroProps {
  children?: ReactNode
}

const ProjectHero: React.FC<ProjectHeroProps> = () => {
  return (
    <GlobalLayout>
      <ProjectSection />
    </GlobalLayout>
  )
}

export default ProjectHero
