import React from 'react'
import { CiSearch } from "react-icons/ci";
import {Link } from "react-router-dom"
function Navbar() {
  const handleToggle=()=>{
    const navmenu = document.querySelector(".navmenu");
    navmenu.classList.toggle("active");
    const navlinks = document.querySelector(".navlinks");
    navlinks.classList.toggle("slides");
  }
  
  return (
    <>
    <header >
    <nav className="navbar bg-white fixed z-20 p-5 md:flex justify-around w-full min-h-[10vh] items-center align dropdown-shadow-lg">
      <div className='meu-area  md:flex flex-row md:h-full  justify-between items-center w-full'>
      <div className='logo-area flex flex-row gap-1'>
          <Link to="/">
             <div className="logo bg-brown w-7 h-7 rounded-full" ></div>
          </Link>
             <div className="logo-name items-center flex text-2xl">SELHONO</div>
         <div className="navmenu md:hidden flex flex-col p-5 right-0" onClick={handleToggle}>
          <span className='burger right-10 '></span>
         </div>
         </div>
        <div className=''>
          
              <ul className='navlinks  justify-center items-center md:flex   top-0 md:gap-10 w-full md:translate-y-0  relative  text-sm  md:visible '>
                <li>
                  <Link to="/" className=' tab'>Home</Link>
                </li>
                <li>
                <Link to="/aboutus "className=' tab'>About us</Link>
                </li>
                <li>
                  <Link to="/services "className=' tab'>Services</Link>
                </li>
                <li>
                <Link to="/project"className=' tab'>Project</Link>
                </li>
                <li>
                <Link to="/blog"className=' tab'>Blog</Link>
                </li>
                <li>
                <Link to="/contact"className=' tab'>Contact</Link>
                </li>
                <li>
                <Link to="/authform"className=' tab'><CiSearch/></Link>
                </li>
               
            </ul>
           
            
        </div>
      </div>
    </nav>
    </header>
    </>
  )
}


export default Navbar