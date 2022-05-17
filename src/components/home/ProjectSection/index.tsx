import { ReactNode } from 'react'
import { FadeInWhenVisible } from '../../shared/FadeInWhenVisible'
import { Title } from '../../shared/Title'
import { PROJECTS } from './constants'
import { useRouter } from 'next/router'

interface ProjectSectionProps {
  children?: ReactNode
}

export const ProjectSection: React.FC<ProjectSectionProps> = () => {
  const router = useRouter()
  const handleProjClick = async (link: string) => {
    let proj = '/projects/' + link
    await router.push(proj)
    const el = document.getElementById(link)
  }
  return (
    <section id="project" className="pb-5">
      <Title title="Project" />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:px-5 lg:grid-cols-3">
        {PROJECTS.map((project, i) => {
          return (
            <FadeInWhenVisible duration={i * 0.5} key={project.id}>
              <article
                className="group mx-auto min-h-[500px] max-w-sm transform cursor-pointer bg-cover bg-center shadow-xl duration-500 hover:-translate-y-2"
                style={{
                  backgroundImage: `url(/images/project_section_${i + 1}.jpg)`,
                }}
                onClick={() => handleProjClick(project.slug)}
              >
                <div className="flex min-h-[500px] transform flex-col flex-wrap bg-black bg-opacity-20 px-10 pt-72 duration-300 hover:bg-opacity-75">
                  <h1 className="mb-5 translate-y-20 transform whitespace-nowrap text-3xl text-white duration-300 group-hover:translate-y-0">
                    {project.name}
                  </h1>
                  <div className="mb-5 h-2 w-16 translate-y-20 transform rounded-full bg-primary duration-300 group-hover:translate-y-0"></div>
                  <p className="transform text-xl text-white opacity-0 duration-500 group-hover:opacity-80">
                    {project.description}
                  </p>
                </div>
              </article>
            </FadeInWhenVisible>
          )
        })}
      </div>
    </section>
  )
}

// export const ProjectSection: React.FC<ProjectSectionProps> = () => {
//   const [showMore, setShowMore] = useState(false)
//   return (
//     <section id="project" className="pb-5">
//       <Title title="Project" />
//       <button
//         className="primary-btn my-2 md:my-5"
//         onClick={() => setShowMore(!showMore)}
//       >
//         {showMore ? 'Show Less' : 'Learn More'}
//       </button>
//       <div className="grid grid-cols-1 gap-5 pb-5 md:grid-cols-2 md:px-5 lg:grid-cols-3">
//         {PROJECTS.map((project, i) => {
//           return (
//             <FadeInWhenVisible duration={i * 0.5} key={project.id}>
//               <motion.div
//                 whileHover={{
//                   scale: 1.05,
//                 }}
//                 className="rounded-2xl bg-light-grey text-justify"
//               >
//                 <div className="cursor-pointer rounded-lg p-5">
//                   <div className="relative my-2 h-12 w-12">
//                     <Image
//                       className="filter-primary hover:filter-light-gray"
//                       src={project.img}
//                       alt={project.name}
//                       layout="fill"
//                     />
//                   </div>

//                   <h4 className="text-xl font-semibold">{project.name}</h4>
//                   <h6 className="">{project.description}</h6>

//                   <p
//                     className={`pt-2 transition duration-300 ${
//                       showMore ? 'line-clamp-none' : 'line-clamp-4'
//                     }`}
//                   >
//                     {project.content}
//                   </p>
//                 </div>
//               </motion.div>
//             </FadeInWhenVisible>
//           )
//         })}
//       </div>
//     </section>
//   )
// }
