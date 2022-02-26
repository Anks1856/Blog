import React, { useState } from 'react'
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';
import {AiFillTwitterCircle , AiFillInstagram , AiFillLinkedin} from 'react-icons/ai';
import {FaLink} from 'react-icons/fa';

const HelloWorld = ({data}) => {
  const [showCommnent , setShowComments] = useState(false);
    console.log(data);
    return (
          <div className="my-16 flex justify-center ">
            <div className="mt-16 p-8">
              <div className="flex flex-col sticky top-16 mr-10 mt-16">
                <button className='mt-4'>
                  <img src="/clap.svg" alt="" className='w-8 h-8 '/> 138
                </button>
               
                <button className='mt-4 top-64'>
                  <img src="/speaking-bubbles-line.svg" alt="" className='w-8 h-8'/> 138
                </button>

                 <button className='mt-4 '>
                  <img src="/paper-plane.svg" alt="" className='w-8 h-8'/> 138
                </button>
              </div>
            </div>
        <div className='max-w-4xl'>
            <div className=''>
              
              <div>
                <h1 className="text-5xl font-bold my-4">{data[0].Title}</h1>
              </div>
              

              <div className='flex justify-between items-center my-4 p-2'>

                <div className='flex space-x-5 items-center'>
                  <div className='w-10 h-10 rounded-full bg-purple-700'></div>
                  <div className='text-purple-600 font-medium text-base'>Ankur Patel</div>
                  <div className='text-black text-base'>9 Dec</div>
                  <div className='text-black text-base'>10 min read</div>
                </div>

                <div className='flex items-center space-x-1'>
                  <div className='w-8 h-8 cursor-pointer'>
                      <AiFillTwitterCircle size="sm"  />
                  </div>
                  <div className='w-8 h-8 cursor-pointer'>
                      <AiFillInstagram size="sm"  />
                  </div>
                  <div className='w-8 h-8 cursor-pointer'>
                      <AiFillLinkedin size="sm"  />
                  </div>
                  <div className='w-6 h-6 cursor-pointer'>
                      <FaLink size="sm"  />
                  </div>
                </div>
              </div>

              <div className='w-full mb-8'>
                <img src={`https://strapi-server-blog.herokuapp.com${data[0].Image[0].url}`} alt="" width="100%"/>
              </div>
              {/* <h3 className='text-xl font-medium my-2'>{data[0].SubTitle}</h3> */}
              {/* <div>
                  <p className='my-2'>{data[0].ShortText}</p>  
              </div> */}
              <div className='longText leading-7 text-xl font-normal'>
                  <ReactMarkdown  children={data[0].LongText} remarkPlugins={[remarkGfm]}>{data[0].LongText}</ReactMarkdown>
              </div>

              <div className='my-8 flex space-x-3'>
                <div className='bg-gray-200 p-1 rounded px-2 text-gray-600'>
                    Tages
                </div>
                <div className='bg-gray-200 p-1 rounded px-2 text-gray-600'>
                    Tages
                </div>
                <div className='bg-gray-200 p-1 rounded px-2 text-gray-600'>
                    Tages
                </div>
                <div className='bg-gray-200 p-1 rounded px-2 text-gray-600'>
                    Tages
                </div>
                <div className='bg-gray-200 p-1 rounded px-2 text-gray-600'>
                    Tages
                </div>
              </div>
                {/* comment section */}
              <div>
                <div className=' py-2'>
                  <p onClick={() => setShowComments(!showCommnent)} className='cursor-pointer'>Comments (12)</p> 
                </div>
                {
                  showCommnent && 
                <div>
                  <div className="div">comments 1</div>
                  <div className="div">comments 1</div>
                  <div className="div">comments 1</div>
                  <div className="div">comments 1</div>
                  <div className="div">comments 1</div>
                  <div className="div">comments 1</div>
                  <div className="div">comments 1</div>
                </div>
                }
                <div>
                    <div className="flex mx-auto items-center justify-center shadow-lg mb-4 ">
                      <form className="w-full bg-white rounded-lg px-8 pt-2">
                          <div className="flex flex-wrap -mx-3 mb-6">
                            <h2 className="px-4 pt-3 pb-2 text-gray-800 text-lg">Add a new comment</h2>
                            <div className="w-full md:w-full px-3 mb-2 mt-2">
                                <textarea className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" name="body" placeholder='Type Your Comment' required></textarea>
                            </div>
                            <div className="w-full md:w-full flex items-start md:w-full px-3">
                                <div className="flex items-start w-1/2 text-gray-700 px-2 mr-auto">
                                  <svg fill="none" className="w-5 h-5 text-gray-600 mr-1" viewBox="0 0 24 24" stroke="currentColor">
                                      <path  stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                  </svg>
                                  <p className="text-xs md:text-sm pt-px">Some HTML is okay.</p>
                                </div>
                                <div className="-mr-1">
                                  <input type='submit' className="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100" value='Post Comment' />
                                </div>
                            </div>
                            </div>
                      </form>
                    </div>
                </div>

              </div>

            </div>

            
          </div>
            <div className="">

            </div>
        </div>
      
    )
}
export default HelloWorld

export async function getStaticPaths() {
    
    const res = await fetch('https://strapi-server-blog.herokuapp.com/blogs');
    const data = await res.json()
    const paths = data.map((blog)=> ({
       params : {NavURL: blog.NavURL}
    }))


    return {paths , fallback : false} 
}

export async function getStaticProps({params}) { 
    const res = await fetch(`https://strapi-server-blog.herokuapp.com/blogs?NavURL=${params.NavURL}`)
    const data = await res.json();

    if(!data){
      return {
        notFound : true
      }
    }
  
    return {
    props: {data}, 
    }
  }