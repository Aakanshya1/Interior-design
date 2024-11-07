import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { aboutus } from '../constants/Constants'
import aboutus2 from '../assets/images/aboutus2.png'
import aboutus3 from '../assets/images/aboutus3.png'
import Button from '../components/Button'
import { FaArrowRight } from "react-icons/fa";
import { content } from '../constants/Constants'
import Ending from '../components/Ending'
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

function Aboutus() {
  useEffect(()=>{
    AOS.init({duration:"1200"})
  })
  return (
    <div className='Aboutus pt-20'>
      <Carousel useKeyboardArrows={true}>
        {aboutus.map((about,key)=>(
          <div className="slide">
            <div key={key}>{about.img}</div>
          </div>
        ))}
      </Carousel>
      
      <div className="content flex  justify-center align-center p-6 m-5   " data-aos="fade-up">
        <div className="vl"> </div>
        <div className='title md:w-[29vw] justify-center items-center text-center flex flex-col gap-3'>
                <p className=' font-bold '>I like an interior that defies labeling. I don't really want someone to walk into a room and know that I did it</p>
                <span className='opacity-50 text-sm'>BUNNY WILLIAMS</span>
            </div>
            <div className="vl"> </div>
      </div>

      <div className="design md:grid grid-cols-1  ">
    
       <div  className='md:p-8 flex flex-col md:flex-row ms:gap-10 p-2' data-aos="fade-up">
       <div className="describe  flex flex-col justify-center items-start m-4 gap-5" >
        <p className='main  text-4xl  font-semibold'>What We Do</p>
        <p className=' text-sm   '>It is a long established fact that a reader will be distracted by the of readable content of a page 
               when lookings at its layouts the points of using 
               that it has a more-or-less norma</p>
               <button className='bg-black text-white text-sm px-4  flex gap-2 py-3 rounded-md'>Our Concept<FaArrowRight className='m-1'/></button>
        
       </div>
       <img src={aboutus2} className=' md:h-[90vh]'/>
      </div>

      <div  className='md:p-8 flex flex-col md:flex-row ms:gap-10 p-2' data-aos="fade-up">
      <img src={aboutus3} className=' md:h-[90vh]'/>
       <div className="describe  flex flex-col justify-center items-start m-4 gap-3">
        <p className='main  text-4xl  font-semibold'>The End Result</p>
        <p className=' text-sm   '>It is a long established fact that a reader will be distracted by the of readable content of a page 
               when lookings at its layouts the points of using 
               that it has a more-or-less norma</p>
               <button className='bg-black text-white text-sm px-4 py-3  flex rounded-md'>Our Porfolio<FaArrowRight className='m-1'/></button>
       </div>
      </div>
      </div>

      <div className="content flex flex-col  bg-brown justify-center align-center p-6 m-5 rounded-md">

<div className='title text-3xl  text-white text-center'data-aos="fade-up">
    <span>What the People Think <br />About Us</span>
</div>

<div className="content flex md:flex-row flex-col gap-8 p-4">
  {content.map((con,key)=>(
         <div key={key} className='bg-white p-6 rounded-md'data-aos="fade-up">
         <div className='flex gap-4'>
             <div >{con.image}</div>
             <div className='flex flex-col'>
               <span className=' font-bold'>{con.name}</span>
               <span className='text-sm'>{con.address}</span>
             </div >
           </div>
           <div>
             <span className='text-sm'>{con.describe}</span>
           </div>
         </div>
  ))}

  </div>
</div>
            <div className='title flex  justify-center items-center  align-center text-center p-6 m-5'data-aos="fade-up">
                <p className=' font-bold text-4xl '>Creative Project?Let's Have <br /> a productive talk</p>
            </div>
            <div className=' align-start  text-start p-8'>
            <form className='md:grid grid-cols-2 p-10 gap-40'data-aos="fade-up">
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
              Message:
              <input type="text" name='Name' className='w-full'  />
              <hr />
             </label>
             
            </form>
            <div className='flex  align-center text-center justify-center'>
            <input type='submit' value='submit' className='bg-black text-white text-sm px-6 py-2 justify-center rounded-md'/>

            </div>
            </div>

<Ending/>
    </div>
  )
}

export default Aboutus