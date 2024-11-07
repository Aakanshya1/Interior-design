import React from 'react'
import Button from '../components/Button'
import homeimg from '../assets/images/homeimage.jpg'
import split1 from '../assets/images/Frame.jpg'
import split2 from '../assets/images/Subtract.jpg'
import { FaArrowRight } from "react-icons/fa";
import { homeplan } from '../constants/Constants'
import { GrPhone } from "react-icons/gr";
import { content } from '../constants/Constants'
import { logos } from '../constants/Constants'
import { decor } from '../constants/Constants'
import { article } from '../constants/Constants'
import Interno from '../components/Interno'
import Ending from '../components/Ending'
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';



function Home() {
  useEffect(()=>{
    AOS.init({duration:"1200"})
  })
  return (
   
    <div className="home h-full pt-28 md:pt-20">
      <div className='landing relative  'data-aos="fade-up">
       <img
       src={homeimg} 
       className='homeimg w-full p-4  '/>
       <div className="describe absolute w-fit h-fit  left-8 top-7 md:top-20 md:left-7 p-2 md:m-3"data-aos="fade-up">
        <div className='main md:text-6xl text-2xl text-black font-semibold'>Let's make your <br /> home beautiful together</div>
        <div className=' text-white font-semibold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Cupiditate laudantium labore laborum, .</div>
        <div>
          <Button isprimary text="Get Started"/>
        </div>
       </div>
      </div>


      <div className="work flex md:flex-row  flex-col text-center p-10 gap-7 duration-1000">
        {homeplan.map((ser,key)=>(
           <div key={key} className="justify-around flex flex-col gap-3"data-aos="fade-up">
           <div className="title font-bold text-xl">{ser.title}</div>
           <div className="description text-sm">{ser.describe}</div>
           <div className='flex  text-center justify-center text-sm'>
             <span>ReadMore</span>
             <span className='  p-1'><FaArrowRight /></span>
           </div>
       </div>
        ))}
      </div>


   
        <div className='landing relative p-2'data-aos="fade-up">
       <img
       src={split2} 
       className='w-full md:h-full h-[50vh] md:p-12 '/>
       <div className="describe absolute p-2  top-0 left-0 md:top-0 md:left-0  "data-aos="fade-up">
        <div className='relative'>
        <img src={split1}  className='split md:w-full w-[50vh]   md:h-full h-[50vh] md:visible  md:p-8 bg-white '/>
        <div className='absolute top-1 left-2 md:left-14 md:top-40 flex flex-col md:gap-6  md:w-[50%] '>
        <div className='main md:text-5xl text-2xl text-white font-semibold'>We create art for modern life.</div>
        <div className=' text-white font-semibold'>There are many variations of the lorem ipsum from available,  majority .</div>
        <div className="contact flex flex-row gap-5">
        <GrPhone className='text-brown md:text-6xl p-4 bg-white rounded-full'/>
        <span className='text-white text-sm md:text-xl'>012345678 <br />Call us Anytime</span>
        </div>
        <div>
          <Button isprimary text="Get Free Estimate"/>
        </div>
        </div>
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
      <div className="logos ">
        <div className="logo-area flex flex-col md:flex-row   p-10  gap-8 items-center justify-between">
          {logos.map((log,key)=>(
            <div key={key} className='p-2 flex text-center  'data-aos="fade-up">
            <span>{log.logo}</span>
            </div>
          ))}
        </div>
      </div>



      <div className="content flex  justify-center align-center p-6 m-5 ">
        <div className='title md:w-[50vw] justify-center items-center text-center'data-aos="fade-up">
                <p className=' font-bold text-2xl md:text-5xl'>Follow Our Project</p>
                <span className='md:text-2xl'>It is a long established Fact that a reader will be distracted by the of readable content of page lookings at its layouts points.</span>
            </div>
      </div>
      <div className="design md:grid grid-cols-2  m-8">
    {decor.map((deco,key)=>(
       <div key={key} className='md:p-8'data-aos="fade-up">
       <div className="">{deco.image}</div>
       <div className='flex justify-between p-1 '>
       <div className="describe  ">
        <div className='main  md:text-2xl text-xl  font-semibold'>{deco.title}</div>
        <div className=' md:text-xl text-sm   '>{deco.describe}</div>
       </div>
       <div className=''>
         <button className='bg-brown text-white p-5 rounded-full'>{deco.btn}</button>
        </div>
       </div>
       
      </div>
    ))}
      </div>
      
     

      <div className="content flex justify-center align-center  m-5 ">
        <div className='title md:w-[50vw] justify-center items-center text-center'data-aos="fade-up">
                <p className=' font-bold text-2xl md:text-5xl'>Articles & News</p>
                <span className='md:text-2xl'>It is a long established Fact that a reader will be distracted by the of readable content of page lookings at its layouts points.</span>
            </div>
      </div>

      <div className="article flex md:flex-row flex-col justify-center align-center items-center p-6">
        {article.map((arti,key)=>(
            <div key={key} className=" flex article-container w-[40vh]  md:w-[70vh] border m-4"data-aos="fade-up">
            <div className="container-main p-2   ">
            <div className='relative'>{arti.img}
            <p className='absolute top-40 md:top-48 left-3 rounded-md bg-black opacity-60 p-1 text-white'>{arti.imgab}</p></div>
              <p className='text-xl'>{arti.para}</p>
              <br />
              <div className="describe flex justify-between  ">
                  <div className=' text-sm'>{arti.text}</div>
                  <div><button className='bg-brown text-white p-3 rounded-full'>{arti.btn}</button></div>
                  </div>  
            </div>
         </div>
        ))}
      </div>
     
      <Interno/>
      <Ending/>

     
</div> 
  )
}

export default Home