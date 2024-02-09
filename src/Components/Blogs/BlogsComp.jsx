import React from 'react'
import BlogsCard from './BlogsCard';
import Img7 from '../../assets/images/buildings.jpg';
import Img8 from '../../assets/images/paris.jpg';
import Img9 from '../../assets/images/beach.jpg';
import Img10 from '../../assets/images/maldives.jpg';
import Img11 from '../../assets/images/dubai.jpg';
import Img12 from '../../assets/images/bridge.jpg';


const blogsData = [
    {
        id: 1,
        image: Img7,
        title: "Bout tour",
        description: "lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit",
        date: "Febuary 2024",
        author: "Blog Source"
    },
    {
        id: 2,
        image: Img8,
        title: "Bout tour",
        description: "lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit",
        date: "Febuary 2024",
        author: "Blog Source"
    },
    {
        id: 3,
        image: Img9,
        title: "Bout tour",
        description: "lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit",
        date: "Febuary 2024",
        author: "Blog Source"
    },
    {
        id: 4,
        image: Img10,
        title: "Bout tour",
        description: "lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit",
        date: "Febuary 2024",
        author: "Blog Source"
    },
    {
        id: 5,
        image: Img11,
        title: "Bout tour",
        description: "lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit",
        date: "Febuary 2024",
        author: "Blog Source"
    },
    {
        id: 6,
        image: Img12,
        title: "Bout tour",
        description: "lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit lorem ipsum dolor sit amnet consectetur adipiscing elit",
        date: "Febuary 2024",
        author: "Blog Source"
    }
]

function BlogsComp() {
  return (
    <div className='bg-gray-50 py-10'>
        <div data-aos='fade-up' className='container'>
            <h1 className='my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold'>
                Our Latest Blogs
            </h1>
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
                {
                    blogsData.map((item, index) => (
                        <BlogsCard key={index} {...item} />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default BlogsComp