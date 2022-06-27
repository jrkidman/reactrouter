import React from 'react';
import './App.css';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import { Route, Routes, Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </div>
  );
}

export default App;
