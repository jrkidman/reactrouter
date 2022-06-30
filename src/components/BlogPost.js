import React from 'react'
import { useParams } from 'react-router';


const BlogPost = ({ allBlogs }) => {
    const params = useParams();
    const blog = allBlogs.find((blog) => blog.id === Number(params.blogId));
    // console.log(blog);
    return (
        <div>
            <p>Title: {blog.title} </p>
            <p>Text: {blog.text}</p>
            <p>Author: {blog.author}</p>
            <p>Id: {blog.id}</p>
            <p>Created At: {blog.createdAt}</p>
        </div>
    )
};

export default BlogPost;
