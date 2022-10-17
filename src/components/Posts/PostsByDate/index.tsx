/* eslint-disable @next/next/no-img-element */
import { ReactNode } from 'react'
import { BlogPost } from '../../../types/BlogPost'
import { FadeInWhenVisible } from '../../shared/FadeInWhenVisible'
import Link from 'next/link'
import Image from 'next/image'

interface PostsByDateProps {
  children?: ReactNode
  posts: BlogPost[]
}

export const PostsByDate: React.FC<PostsByDateProps> = ({ posts }) => {
  return (
    <div className="mx-auto my-[50px] flex w-[90%] flex-col flex-wrap gap-[50px] font-sans hover:cursor-pointer lg:flex-row lg:items-center lg:justify-center xl:justify-start">
      {posts?.map((BlogPost, i) => {
        const date = new Date(BlogPost.date_created)
        return (
          <div
            key={i}
            className={`h-[530px] w-full rounded-[5px] bg-white shadow-lg ${
              i === 0 ? 'lg:w-[45%] 2xl:w-[42.2%] ' : 'lg:w-[45%] 2xl:w-[20%]'
            }`}
          >
            <FadeInWhenVisible duration={(i + 1) * 0.2}>
              <div id={BlogPost.id_post} className="overflow-hidden">
                <div>
                  <div className="flex flex-col">
                    <Link
                      href="/post/[id]"
                      passHref
                      as={`/post/${BlogPost.id_post}`}
                    >
                      <div className="relative h-[350px] w-full">
                        <img
                          src="https://contentsnare.com/wp-content/uploads/2021/12/1964-dummy-text-image-generators-1024x576.jpg"
                          alt="Dummy photo"
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </Link>
                    <div className="flex flex-col gap-3 p-4 2xl:p-2">
                      <pre className="text-xs font-thin">
                        {date.toDateString().toUpperCase()}
                      </pre>
                      <Link
                        href="/post/[id]"
                        passHref
                        as={`/post/${BlogPost.id_post}`}
                      >
                        <h2 className="text-2xl font-semibold cursor-pointer text-primary hover:text-dark">
                          {BlogPost.title}
                        </h2>
                      </Link>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenean velit dui, fermentum id facilisis sit amet,
                        imperdiet ut est.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInWhenVisible>
          </div>
        )
      })}
    </div>
  )
}
