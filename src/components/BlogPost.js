import React from 'react'
// import { blogPosts } from '../utils/SampleBlogs'
import { useParams } from 'react-router';


const BlogPost = ({ blogPosts }) => {
    const params = useParams();

    const blog = blogPosts.find((blog) => blog.id === Number(params.blogId));
    console.log(blog);

    return (
        <div>
            <p>Title: {blog.title} </p>
            <p>Text: {blog.text}</p>
            <p>Author: {blog.author}</p>
            <p>Id: {blog.id}</p>

        </div>

    )
};

export default BlogPost;
