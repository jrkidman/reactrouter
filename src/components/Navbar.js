import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav>
            <Link to="/">Home</Link>&nbsp;
            <Link to="/blogs">Blogs</Link>
        </nav>
    )
}
