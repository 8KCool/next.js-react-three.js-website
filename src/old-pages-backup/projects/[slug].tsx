import { GetStaticPaths, GetStaticProps } from 'next'
import { ReactNode } from 'react'
import { PROJECTS } from '../../components/home/ProjectSection/constants'
import  GlobalLayout  from '../../components/layouts/GlobalLayout'
import { IProject } from '../../types/Project'
import { ThemeProvider } from 'next-themes'
import { HeroSection } from '../../components/home/HeroSection/Projects'

interface ProjectProps {
  children?: ReactNode
  project: IProject
}

const Project: React.FC<ProjectProps> = ({ project }) => {
  return (
    <ThemeProvider attribute="class" enableSystem={true}>
      <GlobalLayout>
        <HeroSection project={project} />
      </GlobalLayout>
    </ThemeProvider>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  const paths = PROJECTS.map((project) => {
    return {
      params: {
        slug: project.slug,
      },
    }
  })
  return {
    paths,
    fallback: false, // false or 'blocking'
  }
}

export const getStaticProps: GetStaticProps = ({ params }) => {
  if (!params) {
    return {
      redirect: {
        destination: '/projects',
        permanent: false,
      },
    }
  }
  const project = PROJECTS.find((project) => project.slug === params.slug)
  return {
    props: {
      project,
    },
    revalidate: false, // Next.js will never attempt to re-generate the page
  }
}

export default Project
