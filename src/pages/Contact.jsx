import React from 'react'
import contact1 from '../assets/images/contact1.png'
import Ending from '../components/Ending'
import { FaFacebookF,FaInstagram,FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { contact } from '../constants/Constants';
function Contact() {
  return (
    <div className='Contact pt-20'>
    <img src={contact1} alt="" />
    <div className='w-full p-10 flex text-center justify-center items-center '>
        <div className='  title   text-2xl font-semibold md:w-[28%] '>We love meeting new people and helping them.</div>
    </div>


    <div className='flex flex-col md:flex-row justify-evenly p-20'>
      <div className='contact-info p-2'>
      {contact.map((conn,key)=>(
        <div key={key} className='flex gap-3 p-3'data-aos="fade-up">
          <span className='text-brown'>{conn.logo}</span>
          <span>{conn.title}</span>
        </div>
      ))}
        
        <span className='logos'>
        <ul className='flex gap-4 p-4'data-aos="fade-up" >
          <li><FaFacebookF/></li>
          <li><FaTwitter/></li>
          <li><FaLinkedinIn/></li>
          <li><FaInstagram/></li>
        </ul>
        </span>
      </div>
   
       

      <div>
      <div className=' align-start  text-start '>
            <form className='md:grid grid-cols-2 p-2 gap-8'data-aos="fade-up">
             <label>
              Name:
              <input type="text" name='Name' className='w-full'  />
              <hr />
             </label>
             <label>
              Email:
              <input type="text" name='Name' className='w-full' />
              <hr />
             </label>
             <label>
              Subject:
              <input type="text" name='Name' className='w-full'  />
              <hr />
             </label>
             <label>
              Phone:
              <input type="text" name='Name' className='w-full'  />
              <hr />
             </label>
             <span>I'm interested...</span>
             <br />     
             <label>
             <input type="text" name='Name' className='w-full '  />
             <hr/>
              </label>         
            </form>
            <div className='flex  align-center text-center justify-center'>
            <input type='submit' value='submit' className='bg-black text-white text-sm px-6 py-2 justify-center rounded-md'/>

            </div>
          </div>
      </div>
    </div>
    <Ending/>
    </div>
  )
}

export default Contact