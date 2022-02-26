import React from 'react'
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';

const Post = ({data}) => {
    console.log(data);
    return (
        <div className='longText leading-7 text-xl font-normal'>
            <ReactMarkdown  children={data.Post} remarkPlugins={[remarkGfm]}></ReactMarkdown>
        </div>
    )
}

export default Post

export async function getStaticPaths() {
    
    const res = await fetch('https://strapi-server-blog.herokuapp.com/posts');
    const data = await res.json();

    const paths = data.map((post)=> ({
       params : { id : `${post.id}`}
    })) 

    return {paths , fallback : false} 
}

export async function getStaticProps({params}) { 
    const res = await fetch(`https://strapi-server-blog.herokuapp.com/${params.id}`)
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





// need to redirect posts lending page to home 