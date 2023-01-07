import { ReactNode } from 'react'
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaQuora,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa'
import { TeamMember } from '../../../types/TeamMember'
import { ShowSocialIcon } from '../../shared/ShowSocialIcon'

interface TeamSocialIconProps {
  children?: ReactNode
  teamMember: TeamMember
}

export const TeamSocialIcon: React.FC<TeamSocialIconProps> = ({
  teamMember,
}) => {
  return (
    <div className="flex justify-center mt-4 space-x-4 text-3xl text-zinc-100">
      <ShowSocialIcon
        href={teamMember.socialLinks.facebook}
        icon={<FaFacebookSquare className="w-8 h-8" />}
      />

      <ShowSocialIcon
        href={teamMember.socialLinks.LinkedIn}
        icon={<FaLinkedin className="w-8 h-8" />}
      />

      <ShowSocialIcon
        href={teamMember.socialLinks.Twitter}
        icon={<FaTwitter className="w-8 h-8" />}
      />

      <ShowSocialIcon
        href={teamMember.socialLinks.youtube}
        icon={<FaYoutube className="w-8 h-8" />}
      />

      <ShowSocialIcon
        href={teamMember.socialLinks.instagram}
        icon={<FaInstagram className="w-8 h-8" />}
      />

      <ShowSocialIcon
        href={teamMember.socialLinks.quora}
        icon={<FaQuora className="w-8 h-8" />}
      />
    </div>
  )
}
