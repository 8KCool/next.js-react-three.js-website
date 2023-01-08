/* eslint-disable @next/next/no-img-element */
import { ReactNode } from 'react'
import { BlogPost } from '../../../types/BlogPost'
import { FadeInWhenVisible } from '../../shared/FadeInWhenVisible'
import Link from 'next/link'
// import Image from 'next/image'

interface PostsByDateProps {
  children?: ReactNode
  posts: BlogPost[]
}

export const PostsByDate: React.FC<PostsByDateProps> = ({ posts }) => {
  return (
    <div className="mx-auto my-[50px] grid w-[90%] gap-[50px] hover:cursor-pointer md:grid-cols-2 lg:grid-cols-4">
      {posts?.map((BlogPost, i) => {
        const date = new Date(BlogPost.date_created)
        return (
          <div
            key={i}
            className={`h-[560px] w-full rounded-[5px] bg-white shadow-lg ${i === 0 ? 'lg:col-span-2' : ''
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
                          loading='lazy'
                          src="https://contentsnare.com/wp-content/uploads/2021/12/1964-dummy-text-image-generators-1024x576.jpg"
                          alt="Dummy photo"
                          className="object-cover w-full h-full"
                        />
                        {
                          console.log(
                            "is it working",
                          )

                        }
                      </div>
                    </Link>
                    <div className="flex flex-col gap-3 p-4">
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
