import { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, } from 'react-router-dom'
import Home from './pages/Home'
import Aboutus from './pages/Aboutus'
import Services from './pages/Services'
import Project from './pages/Project'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import './App.css'
import AuthForm from './pages/AuthForm'

function App() {
  

  return (
    <>
      <Navbar />
     
    <div className='w-full h-screen  '>
    <Routes>
      <Route  path="/" element={<Home/>}/>
      <Route path ="/aboutus" element={<Aboutus/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route  path="/project" element={<Project/>}/>
      <Route  path="/blog" element={<Blog/>}/>
      <Route  path="/contact" element={<Contact/>}/>
      <Route path='/authform' element={<AuthForm/>}/>
    </Routes>
    </div>
  
    </>
  )
}

export default App
