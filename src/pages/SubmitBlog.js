import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const SubmitBlog = ({ allBlogs, setAllBlogs }) => {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [author, setAuthor] = useState("");
    const navigate = useNavigate();
    // const redirectLocation = searchParams.navigate("redirect") || "blogs";

    return (
        <>
            <label>Blog Title</label>
            <input id="title"
                size="50"
                type="text"
                value={title}
                onChange={(e) => {
                    const newTitle = e.target.value;
                    setTitle(newTitle);
                }} />
            <br></br>
            <br></br>

            <label>Blog Text</label>
            <textarea id="text"
                size="100"
                type="text"
                value={text}
                onChange={(e) => {
                    const newText = e.target.value;
                    setText(newText);
                }}
            />
            <br></br>
            <br></br>

            <label>Blog Author</label>
            <input id="author"
                size="50"
                type="text"
                value={author}
                onChange={(e) => {
                    const newAuthor = e.target.value;
                    setAuthor(newAuthor);
                }}
            />
            <br></br>
            <br></br>

            <button
                id="submit"
                onClick={("click", () => {
                    const allBlogsCopy = [...allBlogs];
                    allBlogsCopy.push({
                        title: title,
                        text: text,
                        author: author,
                        createdAt: new Date().toISOString(),
                        id: allBlogs.length + 1,
                    });
                    console.log("post", allBlogsCopy);
                    setAllBlogs(allBlogsCopy);
                    setTitle("");
                    setText("");
                    setAuthor("");
                    navigate("/blogs");
                })
                }
            >
                Submit
            </button>
        </>
    );
}

export default SubmitBlog;