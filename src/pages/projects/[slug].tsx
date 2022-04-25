import { GetStaticPaths, GetStaticProps } from 'next'
import { ReactNode } from 'react'
import { PROJECTS } from '../../components/home/ProjectSection/constants'
import { GlobalLayout } from '../../components/layouts/GlobalLayout'
import { IProject } from '../../types/Project'

interface ProjectProps {
  children?: ReactNode
  project: IProject
}

const Project: React.FC<ProjectProps> = ({ project }) => {
  return (
    <GlobalLayout>
      <div className="my-5 mx-auto max-w-lg space-y-3">
        <h2 className="text-4xl font-semibold">{project.name}</h2>
        <h5 className="text-2xl">{project.description}</h5>
        <p>{project.content}</p>
      </div>
    </GlobalLayout>
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
