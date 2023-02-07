// import Image from 'next/image'
// import Link from 'next/link'
import { FaFacebookSquare, FaLinkedin } from 'react-icons/fa'

const teams = [
  {
    job: 'Chief Executive Officer & Chief Technology Officer',
    name: 'Aaron Sarginson',
    imageSrc:
      'https://uploads-ssl.webflow.com/62b42d68bf74cf04cd20f5c7/62b510183218d5e6f542a017_Aaron.png',
    imageAlt: 'Aaron Sarginson.',
    description:
      'Aaron is a visionary technologist who believes that technology has the power to solve many of the issues facing humanity today. His background in Computer Science, combined with his expertise in software and hardware architecture, programming, project management, business leadership, web development, network administration, and systems administration, make him the ideal leader for the Trigan and Smartest City project. As the conceptual founder and driving force behind these initiatives, Aaron is dedicated to turning his ideas into reality and making a positive impact on the world.',
    socials: [
      { facebook: 'https://www.facebook.com/Aaron.Thomas.Sarginson' },
      { linkedin: 'https://www.linkedin.com/in/aaronsarginson' },
    ],
  },

  {
    job: 'Chief Operating Officer',
    name: 'Dr. Gunel Sarginson',
    imageSrc:
      'https://uploads-ssl.webflow.com/62b42d68bf74cf04cd20f5c7/62b51018ed3ca312442ebb44_Gunel.png',
    imageAlt: 'Dr. Gunel Sarginson',
    description:
      'Gunel is a passionate advocate for using our solution to address the social and medical challenges facing communities today. As a Medical Doctor and Social Scientist, she brings a unique perspective to the table. In addition to her medical and scientific expertise, Gunel has a diverse background in marketing and brand leadership at major corporations in multiple countries, including the UK. She has also held board positions and conducted Public Health research for the NHS, demonstrating her commitment to improving public health. Gunel is a seasoned entrepreneur with experience in multiple sectors, and she is excited to be a part of the Trigan team and our vision to make a positive impact on the world.',
    socials: [
      { facebook: '' },
      { linkedin: 'https://www.linkedin.com/in/gunelsarginson' },
    ],
  },
]

const AboutComponent = () => {
  return (
    <>
      <section className="overflow-hidden bg-transparent">
        <div className="title pb-2 text-center text-5xl font-semibold text-white">
          <h1 className='dark:text-black'>Leadership</h1>
        </div>
        {/* TEAM CARD SECTION */}
        <div className="my-[4%] ">
          {teams.map((team) => (
            //  < !--container for all cards -->
            <div
              key={team.name}
              className="w-100 container mx-auto flex flex-col lg:w-4/5 "
            >
              {/* <!-- card -->  */}
              <div className="w-100 mx-2 mt-4 flex flex-col overflow-hidden rounded-lg bg-white bg-gradient-to-br from-white to-slate-200 dark:bg-black shadow-xl md:flex-row">
                {/* <!-- media --> */}
                <div className="my-5 flex h-64 w-auto justify-center md:w-1/2">
                  <img
                    loading="lazy"
                    className="lg:rounded-full"
                    src={team.imageSrc}
                    alt={team.imageAlt}
                  />
                </div>
                {/* <!-- content --> */}
                <div className="flex w-full flex-col justify-between py-4 px-6 text-gray-800">
                  <h3 className="truncate bg-gradient-to-br from-purple-800 to-rose-500 bg-clip-text pb-0 font-m_plus_rounded_1c text-lg font-semibold leading-tight text-transparent">
                    {team.name}
                  </h3>
                  <p className="font-m_plus_rounded_1c text-base text-black">
                    {team.job}
                  </p>
                  <p className="mt-2 font-m_plus_rounded_1c text-gray-600">
                    {team.description}
                  </p>
                  <p className="mt-2 font-m_plus_rounded_1c text-sm font-semibold uppercase tracking-wide text-gray-700">
                    {/* {{ card.author }} &bull; {{ card.date }} */}
                  </p>
                  <div className="relative flex space-x-5">
                    {team.socials?.map((social, index) => (
                      <div key={index}>
                        {social.facebook ? (
                          <a href={social.facebook}>
                            <FaFacebookSquare className="text-2xl text-sky-700" />
                          </a>
                        ) : null}
                        {social.linkedin ? (
                          <a href={social.linkedin}>
                            <FaLinkedin className="text-2xl text-sky-800" />
                          </a>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default AboutComponent
