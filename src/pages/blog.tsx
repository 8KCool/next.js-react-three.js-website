import type { GetStaticProps, NextPage } from 'next'
import { ReactNode, useState, useEffect } from 'react'
import { SEO } from '../components/shared/SEO'
import { Title } from '../components/shared/Title'
import { GlobalLayout } from '../components/layouts/GlobalLayout'
import { newApi } from '../util/newApi'
import { ThemeProvider } from 'next-themes'
import { BlogPost } from '../types/BlogPost'
import { PostsByDate } from '../components/Posts/PostsByDate'
import axios from 'axios'
import { FadeInWhenVisible } from '../components/shared/FadeInWhenVisible'

interface BlogProps {
  children?: ReactNode
  posts: BlogPost[]
}

const baseURL =
  'https://test1.trigan.org/api/v1/posts?&apiKey=g436739d6734gd6734'
var posts = [null]

export async function getServerSideProps() {
  const res = await fetch(baseURL)
  posts = await res.json()
  return {
    props: {
      posts,
    },
  }
}

const Blog: NextPage<BlogProps> = ({ posts }) => {
  return (
    <ThemeProvider attribute="class" enableSystem={true}>
      <div id="blog">
        <SEO title="Blog" description="Trigan Blog" />
        <GlobalLayout>
          <Title padding="py-3" title="Blog" />

          <PostsByDate posts={posts.posts} />

          {/* {
                posts.posts.map(post=> {
                  const {id_post, content, title} = post
                  return(
                    <div className="col-span-3 pt-3" key={id_post}>
                      <p className="py-2 text-lg">{title}</p>
                      <p className="py-2 text-sm">{content}</p>
                    </div>
                  )
                })
              } */}
        </GlobalLayout>
      </div>
    </ThemeProvider>
  )
}

/* export const getStaticProps: GetStaticProps = async () => {
    let posts = []
    try {
      const { data } = await newApi().get('/posts')
      posts = data.Data
      console.log(posts)
    } catch (err) {
      console.log(err)
    }
    return {
      props: {
        posts,
      },
      revalidate: false, // Next.js will never attempt to re-generate the page
    }
  } */

/* export async function getServerSideProps(){
    console.log('Hello from the otherside')
    const res = await fetch("https://test1.trigan.org/api/v1/posts?&apiKey=g436739d6734gd6734")
    console.log(res)
    return{
      props: {
      hello: "world"
      }
    }
  } */

export default Blog
