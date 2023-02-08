import React, { useState, useEffect } from 'react'

import Image from 'next/image'
import { TeamMember } from '../../../types/TeamMember'
import { TeamSocialIcon } from '../../Teams/TeamSocialIcon'

// image used opens while there is no return from the database for the implementation of the blog
import cover from "../../../assets/trigan-bg.png"

type TeamCardProps = {
  blog: any
  idx?: number
  showDetails?: boolean
}

const BlogCard: React.FC<TeamCardProps> = ({ blog, idx, showDetails }) => {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    showModal
      ? document.body.classList.add('removeScroll')
      : document.body.classList.remove('removeScroll')
  }, [showModal])

  return (
    <div className=" border rounded-md border-[#4D5154] m-[8px] flex items-center max-w-6xl mx-4 gap-x-4 " key={blog.id}>
      <div className="rounded-md">
        {/* waiting for link with database to render blog */}
        
        <Image
          // loading='lazy'
          // src={blog.image}
          src={cover}
          alt={blog.name}
          className="object-cover w-full p-0 m-0 rounded-t-lg h-96"
          height={250}
          width={320}
        />
        <div className="flex-shrink-0 w-[320px] h-3 -mt-3 bg-red-500"></div>
        <div
        // className="relative z-10 flex h-full p-6 -mt-8 border border-gray-500 backdrop-blur"
        >
          {/*  <div 
          className="absolute top-0 left-0 w-full h-full -z-10 bg-zinc-200 opacity-10" 
          />
           */}

          <div className="box-border flex h-[420px] w-[320px] flex-col justify-center p-2 gap-3 rounded-b-md border-[1px] border-t-0 border-[#4D5154] bg-gradient-to-tl from-[#4d5154] to-[#333]/70 p-7 font-m_plus_rounded_1c bg-blend-multiply backdrop-blur backdrop-filter ">
            {/* // className="flex flex-col justify-between h-full" */}
            <div>
              <div className="flex justify-between">
                <p className="pr-8 text-2xl font-semibold text-zinc-100">
                  {blog.name}
                </p>

                {/* <TeamSocialIcon blog={blog} /> */}
              </div>

              <div className="my-2 mb-2">
                <p className="mb-2 whitespace-pre text-base font-semibold leading-tight text-[#A855F7] lg:text-lg">
                  {blog.title}
                </p>
                <p className="pt-2 text-zinc-100">{blog.des}</p>
              </div>
            </div>

            <div className="flex">
              <button
                className="flex font-mono text-sm font-medium text-[#A855F7] duration-300 ease-in-out hover:text-white md:text-base"
                onClick={() => setShowModal(!showModal)}
              >
                see Explained
                {/* <img
              loading='lazy'
              src="/icons/ic_plus.svg"
              alt="detail"
              title="More"
              className="w-8 h-8"
            /> */}
                {/* arrow right svg here */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogCard
