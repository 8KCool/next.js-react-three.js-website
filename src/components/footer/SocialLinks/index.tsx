import { ReactNode } from 'react'
import {
  FaDiscord,
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaTiktok,
  FaTwitter,
} from 'react-icons/fa'
import { FadeInWhenVisible } from '../../shared/FadeInWhenVisible'

interface SocialLinksProps {
  children?: ReactNode
}

const SOCIAL_LINKS = [
  {
    icon: <FaTwitter className="text-black" />,
    path: 'https://twitter.com/TriganDAO',
  },
  {
    icon: <FaFacebookSquare className="text-black" />,
    path: 'https://www.facebook.com/groups/trigan',
  },
  {
    icon: <FaInstagram className="text-black" />,
    path: 'https://www.instagram.com/trigandao',
  },
  {
    icon: <FaDiscord className="text-black" />,
    path: 'https://discord.io/trigandao',
  },
  {
    icon: <FaLinkedin className="text-black" />,
    path: 'https://www.linkedin.com/company/80976873',
  },
  {
    icon: <FaTiktok className="text-black" />,
    path: 'https://www.tiktok.com/@trigandao',
  },
  {
    icon: <FaTelegram className="text-black" />,
    path: 'https://t.me/triganofficial',
  },
]

export const SocialLinks: React.FC<SocialLinksProps> = () => {
  return (
    <FadeInWhenVisible>
      <div className="my-8 mr-2 mt-3 flex w-full flex-wrap justify-center gap-4 sm:w-3/4 md:w-full lg:justify-start">
        {SOCIAL_LINKS.map((link) => {
          return (
            <a
              key={link.path}
              target="_blank"
              href={link.path}
              className="rounded-full bg-white px-2 py-2 text-xl text-white  bounce-out-on-hover"
              rel="noreferrer"
            >
              {link.icon}
            </a>
          )
        })}
      </div>
    </FadeInWhenVisible>
  )
}
