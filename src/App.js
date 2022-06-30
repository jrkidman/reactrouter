import React from 'react';
import './App.css';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import { Route, Routes, Link } from 'react-router-dom';
import BlogPost from './components/BlogPost';
import { blogPosts } from './utils/SampleBlogs';
import AllBlogs from "./components/AllBlogs";
import SubmitBlog from "./pages/SubmitBlog";
import { useState } from "react";


const App = () => {
  const [allBlogs, setAllBlogs] = useState(blogPosts);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} >
          <Route index element={<AllBlogs allBlogs={allBlogs} />} />
          <Route path="single-blog/:blogId" element={<BlogPost allBlogs={allBlogs} />} />
        </Route>
        <Route path="/submit-blog" element={<SubmitBlog allBlogs={allBlogs} setAllBlogs={setAllBlogs} />} />
      </Routes>
    </div >
  );
}

export default App;
