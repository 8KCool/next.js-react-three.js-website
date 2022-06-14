import Image from 'next/image'
import { ReactNode } from 'react'
import { BlogPost } from '../../../types/BlogPost'
import { FadeInWhenVisible } from '../../shared/FadeInWhenVisible'
import { PostsByDate } from '../PostsByDate'

interface PostSearchProps {
  children?: ReactNode
  posts: any /* BlogPost[] */
  search: string
}

const baseURL = 'https://test1.trigan.org/api/v1/posts?&apiKey='
var posts = [null]
var search = 'tr'

export async function getServerSideProps() {
  const res = await fetch(
    baseURL + process.env.GET_API_KEY + '&search=' + search
  )
  posts = await res.json()
  return {
    props: {
      posts,
    },
  }
}

const PostSearch: React.FC<PostSearchProps> = ({ posts }) => {
  return (
    <>
      <section className="flex place-content-center">
        <input
          placeholder="search posts..."
          className=" border-paragraph w-64 rounded-lg border border-dark bg-transparent px-4 py-1 align-middle font-light outline-none focus:border-primary dark:border-white dark:focus:border-primary md:py-1.5 md:font-medium "
        />
        <button className="ml-2 rounded-xl bg-primary px-4 py-1 align-middle text-xl font-semibold text-light">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </section>
      <PostsByDate posts={posts.posts} />
    </>
  )
}

export default PostSearch
