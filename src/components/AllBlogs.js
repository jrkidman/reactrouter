import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom';


const AllBlogs = ({ blogPosts }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const sortOrder = searchParams.get("sortOrder") || "asc";
    const sortField = searchParams.get("sortField") || "createdAt";
    // const blogPostsCopy = blogPosts;
    // const sortedBlogPosts = sortBlogPosts(sortOrder, sortField, blogPostsCopy);
    console.log("sortOrder", sortOrder);
    console.log("sortField", sortField);

    function sortBlogPosts(a, b) {
        if (sortOrder.toLowerCase() === "asc") {
            if (a[sortField] < b[sortField]) {
                return -1;
            }
            if (a[sortField] > b[sortField]) {
                return 1;
            }
        }
        if (sortOrder.toLowerCase() === "desc") {
            if (a[sortField] < b[sortField]) {
                return 1;
            }
            if (a[sortField] > b[sortField]) {
                return -1;
            }
        }
        return 0;
    }

    return (
        <>
            <h1>All Blogs</h1>
            <ul>
                {blogPosts.sort(sortBlogPosts).map((blog, index) => {
                    return (
                        <li className="eachPost" key={index}>
                            <p>Title: {blog.title}</p>
                            <p>Text: {blog.text}</p>
                            <p>Author: {blog.author}</p>
                            <p>Id: {blog.id}</p>
                            <p>Created At: {blog.createdAt}</p>
                            <hr></hr>
                        </li>
                    )
                })
                }
            </ul>
        </>
    )
};

// const sortBlogsByDate = (sortOrder, sortField, posts) => {
//     if (sortOrder.toLowerCase() === "asc") {
//         return posts.sort(function (a, b) {
//             return a[sortField] - b[sortField];
//         });
//     }
//     if (sortOrder.toLowerCase() === "desc") {
//         return posts.sort(function (a, b) {
//             return b[sortField] - a[sortField];
//         });
//     }

//     return posts;

// };



export default AllBlogs