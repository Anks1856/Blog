import React from 'react'
import BookService from '../services/BookServices';


const Books = ({books}) => {
    console.log(books);
    return (
        <>
        <div className='container mx-auto'>
            <div className='flex space-x-10'>
            { books && 
                books.map((book) => (
                <div key={book.id} className='my-8'>
                    <h1>{book.Name}</h1>
                    <img src={`https://strapi-server-blog.herokuapp.com${book.BookCover[0].url}`} alt="" />
                    <a href={`https://strapi-server-blog.herokuapp.com${book.PDF[0].url}`} target='_blank'  download>Click To Download</a>
                </div>))
            }
            </div>
        </div>
        </>
    )
}

export default Books

export async function getStaticProps(context) {

    const data = await BookService.getAllBooks();
    if(!data){
      return {
        notFound : true
      }
    }
  
    return {
      props: {books : data}, 
    }
  }