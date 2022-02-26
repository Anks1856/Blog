import Navbar from "./Navbar";
import Nav from "./Nav";
import React from 'react'
import Footer from "./Footer";
//import 'tailwindcss/tailwind.css'
import PopularPost from './PopularPosts';
const Layout = ({children}) => {
    return (
        <>
        <Nav />
            {children}
        <PopularPost />    
        <Footer />  
        </>
    )
}

export default Layout
