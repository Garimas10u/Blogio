import React from 'react'
import { Routes } from 'react-router-dom';
import Home from "./pages/home/Home";
import AllBlogs from "./pages/allBlogs/AllBlogs";
import NoPage from "./pages/nopage/Nopage";
import BlogInfo from "./pages/bloginfo/Bloginfo";
import AdminLogin from "./pages/admin/adminlogin/AdminLogin";
import Dashboard from "./pages/admin/dashboard/Dashboard";

const App = () => {
  return (
    <div>
      <MyState>
      <Router>
        <Routes>
          <Route path="/" 
          element={<Home/>}/>
          <Route path="/blog" 
          element={<Blog/>}/>
          <Route path="/allblogs" 
          element={<AllBlogs/>} />
          <Route path="/bloginfo/:id" 
          element={<BlogInfo />} />
          <Route path="/adminlogin" 
          element={<AdminLogin/>} />
          <Route path="/dashboard" 
          element={<Dashboard/>} />
          <Route path="/*" 
          element={<NoPage/>} />
        </Routes>
        <Toaster/>
      </Router>
      </MyState>
      
    </div>
  )
}

export default App