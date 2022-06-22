import { ReactNode } from 'react'
import { BlogPost } from '../../../types/BlogPost'
import type { GetStaticProps, NextPage } from 'next'
import { ThemeProvider } from 'next-themes'
import { Title } from '../../../components/shared/Title'
import { GlobalLayout } from '../../../components/layouts/GlobalLayout'
import { FadeInWhenVisible } from '../../../components/shared/FadeInWhenVisible'
import Link from 'next/link'
import { SEO } from '../../../components/shared/SEO'
import PostSearch from '../../../components/Posts/PostSearch'
import { PostsByDate } from '../../../components/Posts/PostsByDate'

interface SearchResultProps {
  children?: ReactNode
  posts: any
}

var posts = [null]
/* var id = '629837147f2741c337b79765' */

export async function getServerSideProps({ query }: any) {
  const { search_terms } = query
  const baseURL = 'https://test1.trigan.org/api/v1/posts/search?'
  const res = await fetch(
    baseURL + 'apiKey=' + process.env.GET_API_KEY + '&search=' + search_terms
  )
  posts = await res.json()
  console.log(posts)
  return {
    props: {
      posts,
    },
  }
}

const SearchResult: NextPage<SearchResultProps> = ({ posts }) => {
  return (
    <ThemeProvider attribute="class" enableSystem={true}>
      <div id="postsearch">
        <SEO title="Posts Search Results" description="Trigan Blog" />
        <GlobalLayout>
          <Title padding="py-3" title="Search Results" />
          <PostSearch posts={posts} search="" />
          <PostsByDate posts={posts.posts} />
        </GlobalLayout>
      </div>
    </ThemeProvider>
  )
}

export default SearchResult
