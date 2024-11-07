import React from 'react'
import { FaFacebookF,FaInstagram,FaTwitter, FaLinkedinIn } from "react-icons/fa";
import {Link } from "react-router-dom"
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

function Ending() {
  useEffect(()=>{
    AOS.init({duration:"1200"})
  })
  return (
    
    <div className="ending flex md:flex-row  flex-col  justify-center p-8 gap-20">
    <div className='logo-area flex flex-col gap-4 ' data-aos="fade-up">
      <div className='flex gap-2'>
      <span className='bg-brown w-7 h-7 rounded-full'></span>
      <p className="logo-name items-center text-2xl">SELHONO</p>
      </div>
      <div className='flex flex-col gap-4'data-aos="fade-up">
        <p>It is a long established fact that a reader <br /> will be distracted lookings</p>
        <ul className='flex gap-4' >
          <li><FaFacebookF/></li>
          <li><FaTwitter/></li>
          <li><FaLinkedinIn/></li>
          <li><FaInstagram/></li>
        </ul>
      </div>
    </div>
    <div className="pages " data-aos="fade-up">
      <p className='logo-name font-bold text-2xl'>Pages</p>
        <ul className='  flex flex-col  gap-4 '>
              <li>
                <Link to="/" >Home</Link>
              </li>
              <li>
              <Link to="/Aboutus">About us</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
              <Link to="/project">Project</Link>
              </li>
              <li>
              <Link to="/blog">Blog</Link>
              </li>
              <li>
              <Link to="/contact">Contact</Link>
              </li>
              </ul>
    </div>
    <div className="services " data-aos="fade-up">
        <p className='logo-name font-bold text-2xl'>Services</p>
        <ul className='flex flex-col gap-4'>
          <li>Kitchen</li>
          <li>Living Area</li>
          <li>Bathroom</li>
          <li>Dining Hall</li>
          <li>Bedroom</li>
        </ul>
    </div>
    <div className="contact " data-aos="fade-up">
      <p className='logo-name items-center text-2xl'>Contact</p>
      <p>55 East Birchwood Ave.
        <p>Brooklyn, New York 11201</p>
        <p>contact@Selhono.com</p>
        <p>(123)456-7890</p>
      </p>
    </div>
    </div>
  )
}

export default Ending