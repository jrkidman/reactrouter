import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'
import { blogPosts } from '../utils/SampleBlogs'

export default function Blogs() {
    return (
        <div>
            <Navbar />
            <h1>Blogs Page</h1>

            <Outlet />

        </div>
    )
}
