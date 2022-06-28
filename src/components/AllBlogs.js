import React, { useLayoutEffect } from 'react'
import { useParams } from 'react-router';

const AllBlogs = ({ blogPosts }) => {
    const params = useParams();

    // if (sort === "asc") {
    //     sort = 1;
    // }
    // if (sort === "desc") {
    //     sort = -1;
    // }

    return (
        <>
            <h1>All Blogs</h1>
            <ul>
                {blogPosts.map((blog, index) => {
                    return (
                        <li key={index}>
                            <p>Title:{blog.title}</p>
                            <p>Text:{blog.text}</p>
                            <p>Author:{blog.author}</p>
                            <p>Id:{blog.id}</p>
                        </li>
                    )
                })
                }
            </ul>
        </>
    )
}

export default AllBlogs