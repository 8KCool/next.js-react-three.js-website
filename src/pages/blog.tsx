import type { GetStaticProps, NextPage } from 'next'
import { ReactNode, useState, useEffect } from 'react'
import { SEO } from '../components/shared/SEO'
import { Title } from '../components/shared/Title'
import SearchBar from '../components/shared/SearchBar'
import { GlobalLayout } from '../components/layouts/GlobalLayout'
import { newApi } from '../util/newApi'
import { ThemeProvider } from 'next-themes'
import { BlogPost } from '../types/BlogPost'
import { PostsByDate } from '../components/Posts/PostsByDate'
import PostSearch from '../components/Posts/PostSearch'
import { TextInputField } from '../components/shared/Forms/TextInputField'
import { useRouter } from 'next/router'
import axios from 'axios'
import { FadeInWhenVisible } from '../components/shared/FadeInWhenVisible'

interface BlogProps {
  children?: ReactNode
  posts: any /* BlogPost[] */
}

const baseURL = 'https://test1.trigan.org/api/v1/posts?&apiKey='
var posts = [null]
var search = ''

export async function getServerSideProps() {
  const res = await fetch(
    process.env.URL + 'posts?&apiKey=' + process.env.GET_API_KEY
  )
  posts = await res.json()
  return {
    props: {
      posts,
    },
  }
}

const Blog: NextPage<BlogProps> = ({ posts }) => {
  const router = useRouter()

  const handleSearch = async (title: string) => {
    await router.push('/PostSearch')
  }

  return (
    <ThemeProvider attribute="class" enableSystem={true}>
      <div id="blog">
        <SEO title="Blog" description="Trigan Blog" />
        <GlobalLayout>
          <Title padding="py-3" title="Blog" />
          <PostSearch />
          <PostsByDate posts={posts.posts} />
        </GlobalLayout>
      </div>
    </ThemeProvider>
  )
}

export default Blog
