import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom';


const AllBlogs = ({ allBlogs }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const sortOrder = searchParams.get("sortOrder") || "asc";
    const sortField = searchParams.get("sortField") || "id";
    const limit = searchParams.get("limit") || "100";
    const page = searchParams.get("page") || "0";
    const blogPostsCopy = allBlogs;

    // console.log("sortOrder", sortOrder);
    // console.log("sortField", sortField);


    function compare(a, b) {
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

    const limitPage = (blogs) => {
        let blogIndex = limit * page;
        let returnBlogs = [];
        for (let i = 0; i < limit; i++) {
            if (blogs[blogIndex]) {
                returnBlogs.push(blogs[blogIndex]);
            }
            blogIndex++
        }
        return returnBlogs;
    }


    const sortedBlogPosts = blogPostsCopy.sort(compare);
    const limitPageBlogs = limitPage(sortedBlogPosts);


    return (
        <>
            <h1>All Blogs</h1>
            <ul>
                {limitPageBlogs.map((blog, index) => {
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



export default AllBlogs