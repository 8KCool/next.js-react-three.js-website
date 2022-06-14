import Image from 'next/image'
import { ReactNode } from 'react'
import { BlogPost } from '../../../types/BlogPost'
import { FadeInWhenVisible } from '../../shared/FadeInWhenVisible'

interface PostsByDateProps {
  children?: ReactNode
  posts: BlogPost[]
}

export const PostsByDate: React.FC<PostsByDateProps> = ({ posts }) => {
  return (
    <div>
      {posts.map((BlogPost, i) => {
        return (
          <FadeInWhenVisible duration={(i + 1) * 0.2} key={BlogPost.id_post}>
            <div
              id={BlogPost.id_post}
              className="my-5 mx-5 bg-white dark:bg-light-grey md:mx-auto "
            >
              <div className="grid items-center gap-5 overflow-hidden px-10 py-5 md:grid-cols-4">
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

                <div className="col-span-3 pt-3">
                  <h3 className="text-xl font-semibold">{BlogPost.title}</h3>
                  <h6 className="font-medium">
                    Created: {BlogPost.date_created}, Updated:
                    {BlogPost.date_updated}
                  </h6>
                  <h6 className="font-medium">
                    Categories: {BlogPost.categories}
                  </h6>
                  <h6 className="font-medium">Tags: {BlogPost.tags}</h6>
                  <p className="py-2 text-sm">{BlogPost.content}</p>
                </div>
              </div>
            </div>
          </FadeInWhenVisible>
        )
      })}
    </div>
  )
}
