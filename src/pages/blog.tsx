import type { NextPage } from 'next'
import { ReactNode } from 'react'
import { SEO } from '../components/shared/SEO'
import { Title } from '../components/shared/Title'
import { GlobalLayout } from '../components/layouts/GlobalLayout'
import { ThemeProvider } from 'next-themes'
import { PostsByDate } from '../components/Posts/PostsByDate'
// import { useRouter } from 'next/router'

interface BlogProps {
  children?: ReactNode
  posts: any /* BlogPost[] */
}

// const baseURL = 'https://test1.trigan.org/api/v1/posts?&apiKey='
let posts = [null]

export async function getServerSideProps() {
  const res = await fetch(
    `${process.env.URL}posts?&apiKey=${process.env.GET_API_KEY}`
  )
  posts = await res.json()
  return {
    props: {
      posts,
    },
  }
}

const Blog: NextPage<BlogProps> = ({ posts }) => {
  // const router = useRouter()

  // const handleSearch = async (title: string) => {
  //   await router.push('/PostSearch')
  // }

  return (
    <ThemeProvider attribute="class" enableSystem={true}>
      <div id="blog">
        <SEO title="Blog" description="Trigan Blog" />
        <GlobalLayout>
          <Title padding="py-3" title="Blog" />
          {/* <PostSearchFront /> */}
          {/* <PostSearch /> */}
          <PostsByDate posts={posts.posts} />
        </GlobalLayout>
      </div>
    </ThemeProvider>
  )
}

export default Blog
