import type { GetStaticProps, NextPage } from 'next'
import { ReactNode, useState, useEffect } from 'react'
import React, { lazy, Suspense } from 'react'
const GlobalLayout = lazy(() => import('../components/layouts/GlobalLayout'))

import { SEO } from '../components/shared/SEO'
import { Title } from '../components/shared/Title'
// import SearchBar from '../components/shared/SearchBar'
// import { newApi } from '../util/newApi'
import { ThemeProvider } from 'next-themes'
import { BlogPost } from '../types/BlogPost'
// import { PostsByDate } from '../components/Posts/PostsByDate'
// import PostSearch from '../components/Posts/PostSearch'
// import { TextInputField } from '../components/shared/Forms/TextInputField'
import { useRouter } from 'next/router'
// import axios from 'axios'
// import { FadeInWhenVisible } from '../components/shared/FadeInWhenVisible'
// import PostSearchFront from '../components/Posts/PostSearchFront'

// andrey edits
import BlogHeader from '../components/BlogHeader'

interface BlogProps {
  children?: ReactNode
  // posts: any /* BlogPost[] */
  posts: BlogPost[]
}

const baseURL = 'https://test1.trigan.org/api/v1/posts?&apiKey='
let posts = [null]

// const posts = [
//   {
//       id: 1,
//        title: "The Trigan Empire",
//       description: "The Trigan Empire is a British science fiction television series, produced by ITC Entertainment and broadcast on ITV from 1964 to 1965. The series was filmed in black and white and was the first of the Andersons' productions to be filmed in colour........",
//       image: "/images/project_section_5.jpg",
//       onclickImage: '/images/user-1.jpg',
//       link: "/ProjectHero/NewLife",
//       tags: {
//           id: 1,
//       tags: ["#trigan", "#empire", "#science", "#fiction"],

//       },
//       date: "2022-03-01",
//       author: "John Doe",
//       readtime: "5 min read",
//   },

//   {
//       id: 2,
//       title: "How to Conduct Remote Usability Testing",
//       description: "Conducting remote usability testing is a great way to get feedback on your product. It can help you identify usability issues and improve your product. ",
//       image: "/images/user-1.jpg",
//       onclickImage: '/images/hall.jpg',
//       link: "/ProjectHero/NewLife",
//       tags: {
//           id: 2,
//       tags: ["#trigan",  "#science"],
//       },
//       date: "2022-04-01",
//       author: "Mary Winkler",
//       readtime: "2 min read",
//   },
//   {
//       id: 3,
//       title: "International Artist Feature: Malaysia   ",
//       description: "Thinking about starting a business in Malaysia? Here are the top 10 business ideas you can start in Malaysia with low investment. 1. Food and Beverage Business. Food and beverage is one of the most useful It is a low-cost business that can be started with a small capital.",
//       image: "/images/users-2.png",
//       onclickImage: '/images/hall.jpg',
//       link: "/ProjectHero/NewLife",
//       tags: {
//           id: 3,
//       tags: ["#trigan", "#empire", "#global"],
//       },
//       date: "2022-05-01",
//       author: "Harry Brignull",
//       readtime: "5 min read",
//   },
//   {
//       id: 4,
//       title: "Created by You, July Edition",
//       description: "Welcome to our monthly feature of fantastic tutorial results created by you, the Envato Tuts+ community!",
//       image: "/images/user-3.jpg",
//       onclickImage: '/images/hall.jpg',
//       link: "/ProjectHero/NewLife",
//       tags: {
//           id: 4,
//       tags: ["#trigan"],
//       },
//       date: "2022-06-01",
//       author: "Andrey Scott",
//       readtime: "10 min read",
//   },
// ];

const Blog: NextPage<BlogProps> = ({ posts }) => {
  const router = useRouter()

  const handleSearch = async (title: string) => {
    await router.push('/PostSearch')
  }

  return (
      <div className='dark:bg-white '> 
      <div id="blog">
        <SEO title="Blog" description="Trigan Blog" />
        <GlobalLayout >
        
          <Title padding="py-3 my-10 headingStyle" title="Blog" />
          {/* <PostSearchFront /> */}
          {/* <PostSearch /> */}
          {/* <PostsByDate posts={posts} /> */}
          <BlogHeader />
        </GlobalLayout>
      </div>
      </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch(
    'https://test1.trigan.org/api/v1/posts?page-size=5&page=1&apiKey=g436739d6734gd6734'
    /* `${process.env.URL}posts?&apiKey=${process.env.GET_API_KEY}`*/
  )

  let posts = await res.json()
  console.log(posts, 'postss resjson !!')

  return {
    props: {
      posts,
    },
  }
}

export default Blog
