import React from 'react';
import './App.css';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import { Route, Routes, Link } from 'react-router-dom';
import BlogPost from './components/BlogPost';
import { blogPosts } from './utils/SampleBlogs';
import AllBlogs from "./components/AllBlogs";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} >
          <Route path="all" element={<AllBlogs blogPosts={blogPosts} />} />
          <Route path=":blogId" element={<BlogPost blogPosts={blogPosts} />} />
        </Route>
      </Routes>
    </div >
  );
}

export default App;
