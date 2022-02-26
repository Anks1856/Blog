import Link from 'next/link'
import React from 'react'
import Nav from './Nav'

const Navbar = () => {
    return (
        <div className="bg-gray-300 p-2 ">
            <div className="flex text-xl font-medium space-x-5 container mx-auto">
                <div className="">
                    <Link href="/">
                    Home
                    </Link>
                </div>
                <div className="">
                    <Link href="/blogs">
                    Blogs
                    </Link>
                </div>
                <div className="">
                    <Link href="/about">
                    About
                    </Link>
                </div>
            </div>
            <Nav />
        </div>
    )
}

export default Navbar
