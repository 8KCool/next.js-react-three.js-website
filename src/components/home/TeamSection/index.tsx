import Image from 'next/image'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import { Title } from '../../shared/Title'
import { TeamMember } from './../../../types/TeamMember'

interface TeamSectionProps {
  children?: ReactNode
  teams: TeamMember[]
  showAll?: boolean
}

export const TeamSection: React.FC<TeamSectionProps> = ({ teams }) => {
  const router = useRouter()
  return (
    <section id="the team" className="w-full px-1">
      <Title title="The Team" />

      <div className="flex w-full flex-wrap justify-center pb-5 text-center md:px-5">
        {teams.map((teamMember) => {
          return (
            <div
              key={teamMember.id}
              className="w-1/2 gap-4 p-5 sm:w-1/3 xl:w-1/6 md2:w-1/5"
            >
              <div className="relative mx-auto my-2 h-20 w-20">
                <Image
                  src={teamMember.image}
                  alt={teamMember.name}
                  layout="fill"
                  className="rounded-full bg-light"
                />
              </div>

              <h2 className="text-lg md:whitespace-nowrap">
                {teamMember.name}
              </h2>
              <p className="text-medium">{teamMember.title}</p>
            </div>
          )
        })}
      </div>
      <button onClick={() => router.push('/teams')} className="primary-btn">
        Learn More
      </button>

      {/* <div className="grid grid-cols-1 gap-3 py-5 sm:grid-cols-2 lg:grid-cols-4">
        {teams.map((teamMember) => {
          return (
            <div
              key={teamMember.id}
              className="group flex h-full cursor-pointer flex-col items-center justify-between overflow-hidden rounded-lg bg-light px-1 py-2 text-black transition duration-1000 hover:bg-gray-400"
            >
              <div className="flex flex-col items-center justify-start">
                <div className="relative h-20 w-20 overflow-hidden rounded-full border border-special bg-light selection:my-2">
                  <Image
                    layout="fill"
                    src={teamMember.image}
                    alt={teamMember.name}
                    className=""
                  />
                </div>

                <h6 className="text-xl font-semibold">{teamMember.name}</h6>
                <p className="whitespace-nowrap text-lg font-black">
                  {teamMember.title}
                </p>

                <p className="group-hover:animate-slide-down my-5 w-full overflow-hidden px-5 text-center">
                  {teamMember.longDescription}
                </p>
              </div>

              <div className="flex h-[10vh] justify-center space-x-4 text-3xl text-secondary group-hover:text-white">
                <ShowSocialIcon
                  href={teamMember.socialLinks.facebook}
                  icon={<FaFacebookSquare className="h-6 w-6" />}
                />

                <ShowSocialIcon
                  href={teamMember.socialLinks.LinkedIn}
                  icon={<FaLinkedin className="h-6 w-6" />}
                />

                <ShowSocialIcon
                  href={teamMember.socialLinks.Twitter}
                  icon={<FaTwitter className="h-6 w-6" />}
                />

                <ShowSocialIcon
                  href={teamMember.socialLinks.youtube}
                  icon={<FaYoutube className="h-6 w-6" />}
                />

                <ShowSocialIcon
                  href={teamMember.socialLinks.instagram}
                  icon={<FaInstagram className="h-6 w-6" />}
                />

                <ShowSocialIcon
                  href={teamMember.socialLinks.quora}
                  icon={<FaQuora className="h-6 w-6" />}
                />
              </div>
            </div>
          )
        })}
      </div> */}
    </section>
  )
}
