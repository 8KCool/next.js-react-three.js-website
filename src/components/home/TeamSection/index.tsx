import Image from 'next/image'
import { ReactNode } from 'react'
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaQuora,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa'
import { Title } from '../../shared/Title'
import { TeamMember } from './../../../types/TeamMember'
import { ShowSocialIcon } from './../../shared/ShowSocialIcon/index'

interface TeamSectionProps {
  children?: ReactNode
  teams: TeamMember[]
}

export const TeamSection: React.FC<TeamSectionProps> = ({ teams }) => {
  return (
    <section id="the team" className="w-full px-1">
      <Title title="The Team" />

      <div className="grid grid-cols-1 gap-3 py-5 sm:grid-cols-2 lg:grid-cols-4">
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

                <p className="group-hover:animate-slide-down my-5 w-full overflow-hidden px-5 text-center line-clamp-5 group-hover:line-clamp-none">
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
      </div>
    </section>
  )
}
