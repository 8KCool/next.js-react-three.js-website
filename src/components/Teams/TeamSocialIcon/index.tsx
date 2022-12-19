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
    <div className=" h-[10vh] mt-4 justify-center space-x-4 text-3xl text-primary">
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
  )
}
