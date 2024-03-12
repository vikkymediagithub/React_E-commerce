import React from 'react'
import Heading from '../Shared/Heading'

// Images import
import Img1 from '../../assets/blogs/Blog-1.jpg';
import Img2 from '../../assets/blogs/Blog-2.jpg';
import Img3 from '../../assets/blogs/Blog-3.jpg';

const BlogData = [
    {
        title: "How to choose perfect smartwatch",
        subtitle: "We can show you on how to check for the perfect smartwatch when you click on the description link?",
        published: "Jan 30, 2024 by Victor Joseph",
        image: Img1,
        aosDelay: '0',
    },
    {
        title: "How to choose perfect smartwatch",
        subtitle: "We can show you on how to check for the perfect smartwatch when you click on the description link?",
        published: "Jan 30, 2024 by Victor Joseph",
        image: Img2,
        aosDelay: '200',
    },
    {
        title: "How to choose perfect smartwatch",
        subtitle: "We can show you on how to check for the perfect smartwatch when you click on the description link?",
        published: "Jan 30, 2024 by Victor Joseph",
        image: Img3,
        aosDelay: '400',
    },
];

const Blog = () => {
  return (
    <div className='my-12'>
      <div className='container'>
        {/* Header Section */}
        <Heading title="Recent News" subtitle={"Explore Our Blogs"} />
        {/* Blog section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7'>
            {/* Blog Card */}
            {BlogData.map((data) => (
                <div data-aos='fade-up' data-aso-delay={data.aosDelay} key={data.title} className='bg-white dark:bg-gray-900'>
                    {/* image section */}
                    <div className='overflow-hidden rounded-2xl mb-2'>
                        <img src={data.image} alt="" className='w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500' />
                    </div>
                    {/* Content section */}
                    <div className='space-y-2'>
                        <p className='text-xs text-gray-500'>{data.published}</p>
                        <p className='font-bold line-clamp-1'>{data.title}</p>
                        <p className='line-clamp-2 text-sm text-gray-600 dark:text-gray-400'>{data.subtitle}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Blog
