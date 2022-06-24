import Image from 'next/image'
import { ReactNode } from 'react'
import { BlogPost } from '../../../types/BlogPost'
import { FadeInWhenVisible } from '../../shared/FadeInWhenVisible'
import Link from 'next/link'

interface PostsByDateProps {
  children?: ReactNode
  posts: BlogPost[]
}

export const PostsByDate: React.FC<PostsByDateProps> = ({ posts }) => {
  return (
    <div className="grid w-full gap-5 md:grid-cols-3">
      {posts?.map((BlogPost, i) => {
        const date = new Date(BlogPost.date_created)
        console.log(
          'Month - ' +
            date.getMonth +
            ' day -' +
            date.getDay +
            'Year - ' +
            date.getFullYear
        )
        return (
          <FadeInWhenVisible duration={(i + 1) * 0.2} key={BlogPost.id_post}>
            <div
              id={BlogPost.id_post}
              className="w-8/10 my-5 mx-5 overflow-hidden bg-white px-10 py-5 dark:bg-light-grey"
            >
              <div>
                {/* Image Starts */}
                {/* <div className="relative mx-auto h-28 w-28 sm:h-40 sm:w-40 md:col-span-1">
                    <Image
                      src={BlogPost.image}
                      alt={BlogPost.name}
                      layout="fill"
                      className="rounded-full bg-light-grey dark:bg-light"
                    />
                  </div> */}
                {/* Image Ends */}

                <div className="pt-3">
                  <Link href="/post/[id]" as={`/post/${BlogPost.id_post}`}>
                    <h2 className="cursor-pointer text-2xl font-semibold">
                      {BlogPost.title}
                    </h2>
                  </Link>
                </div>
                <pre>
                  {date.getMonth()} {date.getDay()} {date.getFullYear()}
                </pre>
              </div>
            </div>
          </FadeInWhenVisible>
        )
      })}
    </div>
  )
}
