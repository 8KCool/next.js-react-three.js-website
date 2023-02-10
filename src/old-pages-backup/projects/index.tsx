import { ReactNode } from 'react'
import { ProjectSection } from '../../components/home/ProjectSection'
import  GlobalLayout  from '../../components/layouts/GlobalLayout'

interface ProjectsProps {
  children?: ReactNode
}

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <GlobalLayout>
      <ProjectSection />
    </GlobalLayout>
  )
}

export default Projects
