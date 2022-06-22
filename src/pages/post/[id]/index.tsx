import { ReactNode } from 'react'
import { BlogPost } from '../../../types/BlogPost'
import type { GetStaticProps, NextPage } from 'next'
import { ThemeProvider } from 'next-themes'
import { Title } from '../../../components/shared/Title'
import { GlobalLayout } from '../../../components/layouts/GlobalLayout'

interface PostProps {
  children?: ReactNode
  singlepost: BlogPost
}

var singlepost = [null]
/* var id = '629837147f2741c337b79765' */

export async function getServerSideProps({ query }: any) {
  const { id } = query
  const baseURL = 'https://test1.trigan.org/api/v1/posts?page-size=5&page=1'
  const res = await fetch(
    baseURL + '&id_post=' + id + '&apiKey=' + process.env.GET_API_KEY
  )
  singlepost = await res.json()
  return {
    props: {
      singlepost,
    },
  }
}

const Post: NextPage<PostProps> = ({ singlepost }) => {
  const post = singlepost.posts[0]
  return (
    <ThemeProvider attribute="class" enableSystem={true}>
      <GlobalLayout>
        <div
          id={post.id_post}
          className="my-5 mx-5 bg-white dark:bg-light-grey md:mx-auto "
        >
          <Title padding="py-3" title={post.title} />
          <div className="grid items-center gap-5 overflow-hidden px-10 py-5 md:grid-cols-4">
            <div className="col-span-3 pt-3">
              <h6 className="font-medium">
                Created: {post.date_created}, Updated:
                {post.date_updated}
              </h6>
              <h6 className="font-medium">Categories: {post.categories}</h6>
              <h6 className="font-medium">Tags: {post.tags}</h6>
              <p className="py-2 text-sm">{post.content}</p>
            </div>
          </div>
        </div>
      </GlobalLayout>
    </ThemeProvider>
  )
}
export default Post
