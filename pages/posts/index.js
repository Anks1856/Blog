import React, { useEffect, useState } from 'react'

import {FacebookShareButton , TwitterShareButton , WhatsappShareButton , TelegramShareButton} from 'react-share'

const index = () => {

  const [shareUrl , setShareUrl] = useState();

  useEffect(() => {
    console.log(window.location.href);
    setShareUrl(window.location.href);
  
  },[])
    return (
        <div className='container mx-auto'>
           <h1>all posts</h1> 
           <div className='flex space-x-10'>
            <FacebookShareButton url={shareUrl} >Facebook</FacebookShareButton>
            <TwitterShareButton url={shareUrl}>Twitter</TwitterShareButton>
            <WhatsappShareButton url={shareUrl}>Whatsapp</WhatsappShareButton>
            <TelegramShareButton url={shareUrl}>Telegram</TelegramShareButton>
           </div>
        </div>
    )
}

export default index

// export async function getStaticProps({params}) { 
    

//     // console.log(document);

//     if(!data){
//       return {
//         notFound : true
//       }
//     }
  
//     return {
//     props: {data : "hello"}, 
//     }
//   }


