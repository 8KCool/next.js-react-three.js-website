/* eslint-disable @next/next/no-img-element */
import { ReactNode } from 'react'
import { BlogPost } from '../../../types/BlogPost'
import { FadeInWhenVisible } from '../../shared/FadeInWhenVisible'
import Link from 'next/link'
// import Image from 'next/image'

interface PostsByDateProps {
  children?: ReactNode
  posts: BlogPost[]
}

export const PostsByDate: React.FC<PostsByDateProps> = ({ posts }) => {
  const mockPosts = [
    {
        id_post: 1,
        title: "The Trigan Empire",
        description: "The Trigan Empire is a British science fiction television series, produced by ITC Entertainment and broadcast on ITV from 1964 to 1965. The series was filmed in black and white and was the first of the Andersons' productions to be filmed in colour........",
        image: "/images/project_section_5.jpg",
        onclickImage: '/images/user-1.jpg',
        link: "/ProjectHero/NewLife",
        tags: {
            id: 1,
        tags: ["#trigan", "#empire", "#science", "#fiction"],
  
        },
        date_created: "2022-03-01",
        author: "John Doe",
        readtime: "5 min read",
    },
  
    {
        id_post: 2,
        title: "How to Conduct Remote Usability Testing",
        description: "Conducting remote usability testing is a great way to get feedback on your product. It can help you identify usability issues and improve your product. ",
        image: "/images/user-1.jpg",
        onclickImage: '/images/hall.jpg',
        link: "/ProjectHero/NewLife",
        tags: {
            id: 2,
        tags: ["#trigan",  "#science"],
        },
        date_created: "2022-04-01",
        author: "Mary Winkler",
        readtime: "2 min read",
    },
    {
        id_post: 3,
        title: "International Artist Feature: Malaysia   ",
        description: "Thinking about starting a business in Malaysia? Here are the top 10 business ideas you can start in Malaysia with low investment. 1. Food and Beverage Business. Food and beverage is one of the most useful It is a low-cost business that can be started with a small capital.",
        image: "/images/users-2.png",
        onclickImage: '/images/hall.jpg',
        link: "/ProjectHero/NewLife",
        tags: {
            id: 3,
        tags: ["#trigan", "#empire", "#global"],
        },
        date_created: "2022-05-01",
        author: "Harry Brignull",
        readtime: "5 min read",
    },
    {
        id_post: 4,
        title: "Created by You, July Edition",
        description: "Welcome to our monthly feature of fantastic tutorial results created by you, the Envato Tuts+ community!",
        image: "/images/user-3.jpg",
        onclickImage: '/images/hall.jpg',
        link: "/ProjectHero/NewLife",
        tags: {
            id: 4,
        tags: ["#trigan"],
        },
        date_created: "2022-06-01",
        author: "Andrey Scott",
        readtime: "10 min read",
    },
  ];

  return (
    <div className="flex flex-row flex-wrap m-auto justify-center w-[100%] mb-10 hover:cursor-pointer ">
      {mockPosts.map((BlogPost, i) => {
        const date = new Date(BlogPost.date_created)
        return (
          <div
            key={i}
            className={`border-solid border-[1px] border-indigo-600 bg-white/[.9] w-[450px] h-[600px] rounded-[5px]  shadow-md shadow-[#000000] flex c mt-10 m-10 grid justify-around md:flex md:px-1 max-[600px]:justify-center dark:text-black dark:bg-white`}
          >
            <FadeInWhenVisible duration={(i + 1) * 0.2}>
              <div id={BlogPost.id_post.toString()} className="overflow-hidden">
                <div>
                  <div className="flex flex-col">
                    <Link
                      href="/post/[id]"
                      passHref
                      as={`/post/${BlogPost.id_post}`}
                    >
                      <div className="mt-5 m-auto h-[250px] w-[420px]">
                        <img
                          loading='lazy'
                          src="https://contentsnare.com/wp-content/uploads/2021/12/1964-dummy-text-image-generators-1024x576.jpg"
                          alt="Dummy photo"
                          className="object-cover w-full h-full shadow-lg"
                        />
                        {
                          console.log(
                            "is it working",
                          )

                        }
                      </div>
                    </Link>
                    <div className="w-[420px] h-[320px] flex flex-col gap-2 p-2">
                      <pre className="text-xs font-thin">
                        {date.toDateString().toUpperCase()}
                      </pre>
                      <Link
                        href="/post/[id]"
                        passHref
                        as={`/post/${BlogPost.id_post}`}
                      >
                        <h2 className="text-2xl font-semibold cursor-pointer text-primary hover:text-dark">
                          {BlogPost.title}
                        </h2>
                      </Link>
                      <p className="flex flex-wrap mt-2 h-[340px]">
                        {BlogPost.description}
                      </p>
                      <div className='flex flex-row flex-wrap w-[400px] h-[50px]'>
                        {BlogPost.tags.tags.map((tag) => {
                          return (
                            <div
                              key={BlogPost.tags.id }
                              className="w-max ml-2 "
                              >
                              <span className="flex flex-row flex-wrap bg-primary flex items-center px-2 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white">{tag}</span>
                            </div>
                        )
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInWhenVisible>
          </div>
        )
      })}
    </div>
  )
}
