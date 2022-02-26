import Link from 'next/link';
import BlogService from '../services/BlogService';

export default function Home({featuredBlogs}) {
  console.log(featuredBlogs);
  return (
    <div className="">
       <main>
        <div id="hero" className="pt-5 lg:flex items-center container mx-auto">
          <div className="px-5 sm:px-10 md:px-10 md:flex lg:block lg:w-1/2 lg:max-w-3xl lg:mr-8 lg:px-20">
            <div className="md:w-1/2 md:mr-10 lg:w-full lg:mr-0">
              <h1 className="text-3xl xl:text-4xl font-black md:leading-none xl:leading-tight">
              Let's grow together & donate together.
              </h1>
              <p className="mt-4 xl:mt-2">
                If you Get anything form here then Donate little bit to who really need It.
              </p>
            </div>

            <div className="flex-1">
              {/* <div className="relative mt-4 md:mt-0 lg:mt-4">
                <div className="pl-4 pr-4 h-full absolute bottom-0 left-0 flex items-center">
                  <svg className="text-gray-700 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </div>
                <input type="text" className="w-full border bg-gray-100 px-4 py-4 text-sm tracking-wide focus:outline-none focus:shadow-outline rounded pl-12" placeholder="Type (e.g junior, senior)" />
              </div>
              <div className="relative mt-4">
                <div className="pl-4 pr-4 h-full absolute bottom-0 left-0 flex items-center">
                  <svg className="text-gray-700 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" /></svg>
                </div>
                <input type="text" className="w-full border bg-gray-100 px-4 py-4 text-sm tracking-wide focus:outline-none focus:shadow-outline rounded pl-12" placeholder="Mountain View, California" />
              </div>
              <div>
                <button className="transition-all duration-300 mt-5 w-full border border-transparent rounded font-semibold tracking-wide text-sm px-5 py-4 focus:outline-none focus:shadow-outline bg-indigo-500 text-gray-100 hover:bg-indigo-600 hover:text-gray-200">Find Designers</button>
              </div> */}
            </div>
          </div>
          <div className="mt-6 w-full flex-1 lg:mt-0">
            <div></div>
            <img className="" src="https://images.unsplash.com/photo-1524749292158-7540c2494485?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=85" />
          </div>
        </div>

        {/* <div className="p-5 sm:px-10 md:px-20" id="companies">
          <div className="max-w-screen-xl mx-auto">
            <img className="mx-auto" src="https://storage.googleapis.com/devitary-image-host.appspot.com/15846471026680582071-Strip-Payment-Logos.png" />
          </div>
        </div> */}

        <div className="px-5 sm:px-10 md:px-20 lg:px-10 xl:px-20 py-8 mt-8 bg-indigo-100" id="features">
          <div className="max-w-screen-xl mx-auto">
            <h3 className="leading-none font-black text-3xl">
              Features
            </h3>

            <div className="flex flex-col items-center flex-wrap lg:flex-row lg:items-stretch lg:flex-no-wrap lg:justify-between">
              <div className="w-full max-w-sm mt-6 lg:mt-8 bg-gray-100 rounded shadow-lg p-12 lg:p-8 lg:mx-4 xl:p-12">
                <div className="p-4 inline-block bg-indigo-200 rounded-lg">
                  <svg className="text-indigo-500 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"  >
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                    <line x1="9" y1="9" x2="9.01" y2="9"/>
                    <line x1="15" y1="9" x2="15.01" y2="9"/>
                  </svg>
                </div>
                <div className="mt-4 font-extrabold text-2xl tracking-wide">
                  <Link href="/Books">Option Books</Link>
                </div>
                <div className="text-sm mt-2">
                  We have a lots of Option related book or contant in form of PDF or any you can check it out by just click on it.
                </div>
              </div>

              <div className="w-full max-w-sm mt-8 bg-gray-100 rounded shadow-lg p-12 lg:p-8 lg:mx-4 xl:p-12">
                <div className="p-4 inline-block bg-green-200 rounded-lg">
                  <svg className="text-green-500 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"  >
                    <line x1="12" y1="1" x2="12" y2="23"/>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                  </svg>
                </div>
                <div className="mt-4 font-extrabold text-2xl tracking-wide">
                   IPO Details
                </div>
                <div className="text-sm mt-2">
                  Be assured that you will always get the full imformation of all current ipos and Upcommig Ipos alos. 
                  We Also provide you information that how much chances to subscribe this IPO.
                </div>
              </div>

              <div className="w-full max-w-sm mt-8 bg-gray-100 rounded shadow-lg p-12 lg:p-8 lg:mx-4 xl:p-12">
                <div className="p-4 inline-block bg-red-200 rounded-lg">
                  <svg className="text-red-500 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"  >
                    <path xmlns="http://www.w3.org/2000/svg" d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                    <line xmlns="http://www.w3.org/2000/svg" x1="12" y1="9" x2="12" y2="13"/>
                    <line xmlns="http://www.w3.org/2000/svg" x1="12" y1="17" x2="12.01" y2="17"/>
                  </svg>
                </div>
                <div className="mt-4 font-extrabold text-2xl tracking-wide">
                  All Free of cost
                </div>
                <div className="text-sm mt-2">
                  Here you can get all Information free of cost. We don't charge any money from you. We just want that 
                  if you find this information is helpful for you and if you Earn any Money form this so we just request you to 
                  Donate some part of your Money to society not us.  
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-5 sm:px-10 md:px-20 lg:px-10 xl:px-20 py-8 bg-gray-100" id="cards">
          <div className="max-w-screen-xl mx-auto">
            <h3 className="leading-none font-black text-3xl">Feature Blogs</h3>
            
          

            <div className="lg:flex justify-between lg:mt-8">
            {
                featuredBlogs && 
                featuredBlogs.map(blog => {
                  return ( 
                  <div className="lg:mx-2 flex flex-col items-center">
                    <div className="w-full max-w-sm pt-16 lg:pt-0 shadow-lg h-full">
                      <div><img src={`https://strapi-server-blog.herokuapp.com${blog.Image[0].url}`} className='rounded' /></div>
                      <div className="w-full  p-4 sm:p-4 lg:px-2 xl:px-4  rounded bg-gray-100 ">
                        <div className='text-xl font-medium'>{blog.Title}</div>
                        <div className=''>{blog.ShortText}</div>
                      </div>
                    </div>
                  </div>
                )
                } )
              }


              {/* <div className="lg:mx-2 flex flex-col items-center">
                <div className="flex-1 flex w-full max-w-sm pt-16 lg:pt-0">
                  <div className="w-full p-8 sm:p-12 lg:px-8 xl:px-12 shadow-lg rounded bg-gray-100 relative">
                   <div>
                     featured Blog 1
                   </div>
                  </div>
                </div>
              </div> */}

              {/* <div className="lg:mx-2 flex flex-col items-center">
                <div className="flex-1 flex w-full max-w-sm pt-16 lg:pt-0">
                  <div className="w-full p-8 sm:p-12 lg:px-8 xl:px-12 shadow-lg rounded bg-gray-100 relative">
                   <div>
                     featured Blog 1
                   </div>
                  </div>
                </div>
              </div> */}
              
              {/* <div className="lg:mx-2 flex flex-col items-center">
                <div className="flex-1 flex w-full max-w-sm pt-16 lg:pt-0">
                  <div className="w-full p-8 sm:p-12 lg:px-8 xl:px-12 shadow-lg rounded bg-gray-100 relative">
                   <div>
                     featured Blog 1
                   </div>
                  </div>
                </div>
              </div> */}

            </div>
          </div>
        </div>

      </main>

    </div>
  )
}

export async function getStaticProps(context) {

  const data = await BlogService.getFeaturedBlogs();
  if(!data){
    return {
      notFound : true
    }
  }

  return {
    props: {featuredBlogs : data}, 
  }
}