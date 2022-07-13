import Link from 'next/link'
import { ReactNode, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { HiOutlineSpeakerphone } from 'react-icons/hi'

interface BannerProps {
  children?: ReactNode
}

export const Banner: React.FC<BannerProps> = () => {
  const [show, setShow] = useState(true)
  if (!show) {
    return <></>
  }
  return (
    <div className="bg-primary">
      <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex w-0 flex-1 items-center">
            <span className="flex rounded-lg bg-special p-2">
              <HiOutlineSpeakerphone color="white" />
            </span>
            <p className="ml-3 truncate font-medium text-white">
              <span className="md:hidden">
                Our Presale is currently running!
              </span>
              <span className="hidden md:inline">
                Big news! We&#39;re excited to announce our new presale.
              </span>
            </p>
          </div>
          <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
            <Link href="/buy" passHref>
              <a className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-indigo-600 shadow-sm hover:bg-indigo-50">
                Buy Now
              </a>
            </Link>
          </div>
          <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
            <button
              type="button"
              onClick={() => setShow(false)}
              className="-mr-1 flex rounded-md p-2 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
            >
              <span className="sr-only">Dismiss</span>
              <AiOutlineClose color="white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
