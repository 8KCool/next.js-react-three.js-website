import Link from "next/link";
import Image from "next/image";
import { Blogpanel } from './BloGAccordionItems/index'
import { FadeInWhenVisible } from '../shared/FadeInWhenVisible'
// onclick change image to onClickimage

import { useState } from "react";



const blogPosts = [
    {
        id: 1,
         title: "The Trigan Empire",
        description: "The Trigan Empire is a British science fiction television series, produced by ITC Entertainment and broadcast on ITV from 1964 to 1965. The series was filmed in black and white and was the first of the Andersons' productions to be filmed in colour........",
        image: "/images/trigan-concept-panoroma-360.png",
        onclickImage: '/images/user-1.jpg',
        link: "/ProjectHero/NewLife",
        tags: {
            id: 1,
        tags: ["#trigan", "#empire", "#science", "#fiction"],

        },
        date: "2022-03-01",
        author: "John Doe",
        readtime: "5 min read",
    },

    {
        id: 2,
        title: "How to Conduct Remote Usability Testing",
        description: "Conducting remote usability testing is a great way to get feedback on your product. It can help you identify usability issues and improve your product. ",
        image: "/images/user-1.jpg",
        onclickImage: '/images/hall.jpg',
        link: "/ProjectHero/NewLife",
        tags: {
            id: 2,
        tags: ["#trigan",  "#science"],
        },
        date: "2022-04-01",
        author: "Mary Winkler",
        readtime: "2 min read",
    },
    {
        id: 3,
        title: "International Artist Feature: Malaysia   ",
        description: "Thinking about starting a business in Malaysia? Here are the top 10 business ideas you can start in Malaysia with low investment. 1. Food and Beverage Business. Food and beverage is one of the most useful It is a low-cost business that can be started with a small capital.",
        image: "/images/users-2.png",
        onclickImage: '/images/hall.jpg',
        link: "/ProjectHero/NewLife",
        tags: {
            id: 3,
        tags: ["#trigan", "#empire", "#global"],
        },
        date: "2022-05-01",
        author: "Harry Brignull",
        readtime: "5 min read",
    },
    {
        id: 4,
        title: "Created by You, July Edition",    
        description: "Welcome to our monthly feature of fantastic tutorial results created by you, the Envato Tuts+ community!",
        image: "/images/user-3.jpg",
        onclickImage: '/images/hall.jpg',
        link: "/ProjectHero/NewLife",
        tags: {
            id: 4,
        tags: ["#trigan"],
        },
        date: "2022-06-01",
        author: "Andrey Scott",
        readtime: "10 min read",
    },
];

const BlogHeader = () => {
    const [showAnswer, setShowAnswer] = useState(false)

    return (
        <div className="container">
            <FadeInWhenVisible>
                               {blogPosts.map((post, index) => (
                                <div key={post.id}  
                                className=" mx-auto w-fit mb-5">
       <div className="flex flex-col items-start w-full  h-auto">
                            <Link href={post.link}>
                                <a className="blockmb-2 ">
                                    <Image
                                     className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56" 
                                     alt='blog-images' 
                                    //  src={post.image}
                                        src={showAnswer ? post.onclickImage : post.image}

                                      width={500} height={300} />
                                </a>
                            </Link>
                            <div className='flex py-1'>
                                    {post.tags.tags.map((tag) => (
                                        <div key={post.tags.id }
                                              className="bg-purple-500 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white">
                                            <span>{tag}</span>
                                            </div>
                                    ))}
                                    </div>
                            <div 
                                onClick = {() => setShowAnswer(!showAnswer)}
                            className="text-sm max-w-4xl w-full mb-2">
                        
      <Blogpanel
                index={index}
                title={post.title}
                content={post.description}
                key={post.id}
              />
              </div>
                            <p className="pt-2 text-xs font-medium">
                                <Link href={post.link}>
                                    <a className="mr-1 underline">{post.author}</a>
                                </Link>
                                · <span className="mx-1">{post.date}</span> · <span className="mx-1 text-gray-600">{post.readtime}</span>
                            </p>

                           
                          
                          </div>
                        </div>
                            ))}

                            </FadeInWhenVisible>
      
        </div>
    )
}

export default BlogHeader;