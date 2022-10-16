/* eslint-disable @next/next/no-img-element */
import { ReactNode } from 'react'
import { FadeInWhenVisible } from '../../shared/FadeInWhenVisible'
import { PROJECTS } from './constants'
import { useRouter } from 'next/router'

interface ProjectSectionProps {
  children?: ReactNode
}

export const ProjectSection: React.FC<ProjectSectionProps> = () => {
  const router = useRouter()
  const handleProjClick = async (link: string) => {
    const proj = '/projects/' + link
    await router.push(proj)
    /* const el = document.getElementById(link) */
  }
  return (
    <section
      id="project"
      className="relative flex-row items-center px-2 font-sans text-black bg-slate-300 bg-opacity-80"
    >
      <img
        src="images/trigan-concept-art-001.jpg"
        className="absolute object-cover w-full h-full -z-10"
        alt=""
      />
      <div className="py-36">
        <h1 className="pt-5 text-3xl text-center headingStyle md:text-5xl">
          The future is at risk.
        </h1>
        <h2 className="py-5 text-3xl text-center headingStyle md:text-5xl">
          ‍We have the solution.
        </h2>
        <div className="grid grid-cols-1 gap-4 text-center lg:align-center md:grid-cols-2 md:text-left lg:grid-cols-3 2xl:grid-cols-6">
          {PROJECTS.map((project, i) => {
            return (
              <FadeInWhenVisible duration={i * 0.5} key={project.id}>
                <article
                  className="group h-full transform cursor-pointer rounded-[10px] font-extralight hover:bg-slate-200 hover:bg-opacity-75"
                  /* style={{
                    backgroundImage: `url(/images/project_section_${i + 1}.jpg)`,
                  }} */
                  onClick={() => handleProjClick(project.link)}
                >
                  <div className="flex flex-col flex-wrap p-4 duration-300 bg-opacity-0">
                    <h1 className="text-xl uppercase subHeadStyle md:py-5 md:text-3xl">
                      {project.name}
                    </h1>
                    <p className="text-base paragraphStyle md:text-xl">
                      {project.content}
                    </p>
                  </div>
                </article>
              </FadeInWhenVisible>
            )
          })}
        </div>
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
//         className="my-2 primary-btn md:my-5"
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
//                 className="text-justify rounded-2xl bg-light-grey"
//               >
//                 <div className="p-5 rounded-lg cursor-pointer">
//                   <div className="relative w-12 h-12 my-2">
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
