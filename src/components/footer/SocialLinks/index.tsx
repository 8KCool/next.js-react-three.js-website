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
    icon: <FaTwitter />,
    path: 'https://twitter.com/TriganGlobal',
  },
  {
    icon: <FaFacebookSquare />,
    path: 'https://www.facebook.com/groups/trigan',
  },
  {
    icon: <FaInstagram />,
    path: 'https://www.instagram.com/trigandao',
  },
  {
    icon: <FaDiscord />,
    path: 'https://discord.io/trigandao',
  },
  {
    icon: <FaLinkedin />,
    path: 'https://www.linkedin.com/company/80976873',
  },
  {
    icon: <FaTiktok />,
    path: 'https://www.tiktok.com/@trigandao',
  },
  {
    icon: <FaTelegram />,
    path: 'https://t.me/triganofficial',
  },
]

export const SocialLinks: React.FC<SocialLinksProps> = () => {
  return (
    <FadeInWhenVisible>
      <div className="mx-auto my-8 mt-3 flex w-3/4 flex-wrap justify-center gap-4 sm:gap-6 md:w-full md:gap-8">
        {SOCIAL_LINKS.map((link) => {
          return (
            <a
              key={link.path}
              target="_blank"
              href={link.path}
              className="rounded-full bg-primary px-2 py-2 text-xl text-white"
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
