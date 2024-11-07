import React, { useEffect } from 'react'
import servicesimg from '../assets/images/servicesimg.png'
import { serviceswork } from '../constants/Constants'
import Interno from '../components/Interno'
import Ending from '../components/Ending'
import ser1 from '../assets/images/ser1.jpg'
import ser2 from '../assets/images/ser2.jpg'

import AOS from 'aos';
import "aos/dist/aos.css"

function Services() {
  
  useEffect(()=>{
    AOS.init({duration:"1200"})
  })
  return (
    <div className='Services pt-20'>
      <div className="service-img relative" data-aos="fade-up">
        <img src={servicesimg} className='h-full w-full'/>
        <div className="absolute w-full  text-center ser text-white text-2xl md:text-5xl top-7 md:pt-20">
          <div className=''> Services</div>
         </div>
      </div>

      <div className="plan text-center md:grid grid-cols-3 gap-8 p-12 ">
        {serviceswork.map((serv,key)=>(
          <div key={key}  className='plan-work p-10 flex flex-col gap-2 rounded-md' data-aos="fade-up">
            
               <span className="title font-bold">{serv.title}</span>
               <span className="describe ">{serv.describe}</span>
               <span className='text-sm font-semibold '>{serv.btn}</span>
             
          </div>
        ))}

      </div>
      <div className='title    flex text-center justify-center items-center 'data-aos="fade-up">
        <div className='md:w-[41vw] '>
        <span className='text-3xl font-semibold'>How We Work</span><br />
        <span className='text-sm'>It is a long established fact  will be distracted.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
        </div>
        </div>



      
          <div className="text-center grid grid-cols-1 gap-16 md:gap-25 p-20">
            <div className="mains flex flex-col md:flex-row justify-evenly  "data-aos="fade-up">
             <img src={ser1} className='ser-img md:w-[50%]'/>
              <div className='flex md:flex-col flex-row md:gap-40 '>
                <span className='title font-bold text-8xl text-brown text-right'>01</span>
                <div className='flex flex-col md:w-[30vw]  text-left'>
                  <span className='title font-bold text-xl'>Concept & Details</span>
                  <span className='text-sm'>It is a long established fact  will be distracted.
                         Lorem Ipsum is simply dummy from text of the
                        and typesetting indufstry</span>
                </div>
              </div>
            </div>
            <div className="mains flex flex-col md:flex-row justify-evenly  "data-aos="fade-up">
              <div className='flex md:flex-col flex-row md:gap-40 '>
                <span className='title font-bold text-8xl text-brown text-left'>02</span>
                <div className='flex flex-col md:w-[30vw]  text-left'>
                  <span className='title font-bold text-xl'>Concept & Details</span>
                  <span className='text-sm'>It is a long established fact  will be distracted.
                         Lorem Ipsum is simply dummy from text of the
                        and typesetting indufstry</span>
                </div>
              </div>
              <img src={ser2} className='ser-img md:w-[50%]'/>
            </div>
            <div className="mains flex flex-col md:flex-row justify-evenly  "data-aos="fade-up">
             <img src={ser1} className='ser-img md:w-[50%]'/>
              <div className='flex md:flex-col flex-row md:gap-40 '>
                <span className='title font-bold text-8xl text-brown text-right'>03</span>
                <div className='flex flex-col md:w-[30vw]  text-left'>
                  <span className='title font-bold text-xl'>Concept & Details</span>
                  <span className='text-sm'>It is a long established fact  will be distracted.
                         Lorem Ipsum is simply dummy from text of the
                        and typesetting indufstry</span>
                </div>
              </div>
            </div>
            <div className="mains flex flex-col md:flex-row justify-evenly  "data-aos="fade-up">
              <div className='flex md:flex-col flex-row md:gap-40 '>
                <span className='title text-8xl text-brown text-left font-bold'>04</span>
                <div className='flex flex-col md:w-[30vw]  text-left'>
                  <span className='title font-bold text-xl'>Concept & Details</span>
                  <span className='text-sm'>It is a long established fact  will be distracted.
                         Lorem Ipsum is simply dummy from text of the
                        and typesetting indufstry</span>
                </div>
              </div>
              <img src={ser2} className='ser-img md:w-[50%]'/>
            </div>
          </div>
     
    
            <Interno/>
            <Ending/>
    </div>
  )
}


export default Services