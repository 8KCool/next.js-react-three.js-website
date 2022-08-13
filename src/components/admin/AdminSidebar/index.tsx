import Image from 'next/image'
import { ReactNode } from 'react'
import { useRouter } from 'next/router'

interface AdminSidebarProps {
  children?: ReactNode
}

export const LINKS = [
  'dashboard',
  'teams',
  'something',
  'something else',
  'nothing',
  'i don"t know',
]

export const AdminSidebar: React.FC<AdminSidebarProps> = () => {
  const router = useRouter()
  return (
    <div className="h-full bg-grey py-5">
      <div className="relative mx-auto h-28 w-28">
        <Image src="/images/trigan-logo.svg" layout="fill" alt="trigan logo" />
      </div>
      <h2 className="py-2 text-center text-xl font-semibold">Trigan Admin</h2>
      <div>
        {LINKS.map((link) => {
          return (
            <button
              onClick={() => void router.push('/admin/' + link)}
              key={link}
              className={`${
                router.pathname.includes(link) ? 'bg-primary' : ''
              } my-1 flex w-full rounded-lg px-2 py-2 font-semibold capitalize hover:bg-primary`}
            >
              <span className="pl-2">{link}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
