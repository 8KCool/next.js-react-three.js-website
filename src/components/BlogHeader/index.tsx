import Link from 'next/link'
// import Image from 'next/image'
import { Blogpanel } from './BloGAccordionItems/index'
import { FadeInWhenVisible } from '../shared/FadeInWhenVisible'
// onclick change image to onClickimage

import { useState } from 'react'

const blogPosts = [
  {
    id: 1,
    title: 'Coming soon!',
    description:
      "A little more work needed on our bespoke blog solution!",
    image: '/images/project_section_5.jpg',
    onclickImage: '/images/user-1.jpg',
    link: 'https://trigan.org',
    tags: {
      id: 1,
      tags: ['#testing', '#please...wait', '#coming', '#soon!'],
    },
    date: '2022-12-05',
    author: 'Aaron S',
    readtime: '5 min read',
  },
/*
  {
    id: 2,
    title: 'How to Conduct Remote Usability Testing',
    description:
      'Conducting remote usability testing is a great way to get feedback on your product. It can help you identify usability issues and improve your product. ',
    image: '/images/user-1.jpg',
    onclickImage: '/images/hall.jpg',
    link: '/ProjectHero/NewLife',
    tags: {
      id: 2,
      tags: ['#trigan', '#science'],
    },
    date: '2022-04-01',
    author: 'Mary Winkler',
    readtime: '2 min read',
  },
  {
    id: 3,
    title: 'International Artist Feature: Malaysia   ',
    description:
      'Thinking about starting a business in Malaysia? Here are the top 10 business ideas you can start in Malaysia with low investment. 1. Food and Beverage Business. Food and beverage is one of the most useful It is a low-cost business that can be started with a small capital.',
    image: '/images/users-2.png',
    onclickImage: '/images/hall.jpg',
    link: '/ProjectHero/NewLife',
    tags: {
      id: 3,
      tags: ['#trigan', '#empire', '#global'],
    },
    date: '2022-05-01',
    author: 'Harry Brignull',
    readtime: '5 min read',
  },
  {
    id: 4,
    title: 'Created by You, July Edition',
    description:
      'Welcome to our monthly feature of fantastic tutorial results created by you, the Envato Tuts+ community!',
    image: '/images/user-3.jpg',
    onclickImage: '/images/hall.jpg',
    link: '/ProjectHero/NewLife',
    tags: {
      id: 4,
      tags: ['#trigan'],
    },
    date: '2022-06-01',
    author: 'Andrey Scott',
    readtime: '10 min read',
    }, */
]

const BlogHeader = () => {
  const [showAnswer, setShowAnswer] = useState(false)

  return (
    
    <div id='blogHeader' className="container flex self-center text-white dark:text-black">
      <FadeInWhenVisible>
        <div className="flex flex-col w-full grid-cols-2 gap-4 md:grid lg:grid-cols-3 xl:gap-8 2xl:grid-cols-4  ">
          {blogPosts.map((post, index) => (
            <div key={post.id} className="mx-auto mb-12 w-fit md:h-96 ">
              <div className="flex flex-col items-start w-full h-auto ">
                <div
                  onClick={() => setShowAnswer(!showAnswer)}
                  className="w-full max-w-4xl mb-2 text-sm text-red"
                >
                  <Blogpanel
                    index={index}
                    title={post.title}
                    content={post.description}
                    key={post.id}
                    post={post}
                  />
                </div>
                <p className="pt-2 text-xs font-medium">
                  <Link href={post.link}>
                    <a className="mr-1 underline ">{post.author}</a>
                  </Link>
                  · <span className="mx-1">{post.date}</span> ·{' '}
                  <span className="mx-1 text-gray-600">{post.readtime}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </FadeInWhenVisible>
    </div>

  )
}

export default BlogHeader
