import React from 'react'
import BlogServices from '../services/BlogService'
import Link from 'next/link';

const blogs = ({blogs}) => {
  console.log(blogs);
    return (
        <div className="container mx-auto min-h-screen">   
            
      
  <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
  
  {
    blogs && blogs.map((blog) => {
      return (
        <Link href={`/blog/${blog.NavURL}`} key={blog.id}>
         <div className="rounded overflow-hidden shadow-lg cursor-pointer">
          <img className="w-full" src={`https://strapi-server-blog.herokuapp.com${blog.Image[0].url}`} alt="Mountain" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{blog.Title}</div>
            <p className="text-gray-700 text-base">
            {blog.ShortText}
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
          </div>
        </div>
      </Link>
    )
    })
  }
   
  </div>
{/* </div> */}

        </div>
    )
}

export default blogs

export async function getStaticProps(context) {

    const data = await BlogServices.getAllBlogs();
    if(!data){
      return {
        notFound : true
      }
    }
  
    return {
      props: {blogs : data}, 
    }
  }