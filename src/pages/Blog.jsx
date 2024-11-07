import React, { useEffect } from 'react'
import blog1 from '../assets/images/blog1.png'
import blog2 from '../assets/images/blog2.png'
import { useState } from 'react'
import { article } from '../constants/Constants'
import Ending from '../components/Ending'



function Blog() {
  const [currentdate, setcurrentDate] = useState();
   useEffect(()=>{
    const date = new Date();
    const fromatteddate = date.toDateString();
    setcurrentDate(fromatteddate);
   })

  return (
    <div className='Blog pt-20'>
      <div className="service-img relative" data-aos="fade-up">
        <img src={blog1} className='h-full w-full'/>
        <div className="absolute w-full  text-center ser text-white text-2xl md:text-5xl top-7 md:pt-20">
          <div className=''> Articles and News</div>
         </div>
      </div>

        <div className='main flex w-full justify-center align-center p-10 '>
          <div className="main-half w- ">
          <h1 className='Title text-2xl font-bold md:text-left text-center'>Projects</h1>
            <div className='flex flex-col md:flex-row  w-fit gap-10 '>
              <img src={blog2} className='md:w-[35vw] md:h-[55vh]' />
              <div className="text-blog flex flex-col text-left md:w-[25vw] md:pt-4  gap-2 md:gap-10">
                <span className="title font-bold text-xl">Low Cost Latest Invented Interior Designing Ideas</span>
                <span className='text-sm'>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.,<br/>Lorem Ipsum is not simply random text. It has roots in a piece of classica.</span>
                <span className='text-sm'>{currentdate}</span>
              </div>
            </div>
          </div>
         
        </div>
        <div className='main flex w-full justify-center align-center p-10'>
          <div className=" ">
          <h1 className='Title text-3xl font-bold  md:text-left text-center '>Articles & News</h1>
            <div className='flex flex-col md:flex-row  '>
            {article.map((arti,key)=>(
            <div key={key} className=" flex article-container   md:w-[50vh]  gap-2 "data-aos="fade-up" >
            <div className="container-main p-2   ">
            <div className='relative'>
              <span>{arti.img}</span>
            <p className='absolute top-40 md:top-48 left-3 rounded-md bg-black opacity-60 p-1 text-white'>{arti.imgab}</p></div>
              <p className=''>{arti.para}</p>
              <br />
              <div className="describe flex justify-between  ">
                  <div className=' text-sm'>{arti.text}</div>
                  <div><button className='bg-brown text-white p-3 rounded-full'>{arti.btn}</button></div>
                  </div>  
            </div>
         </div>
        ))}
            </div>
          </div>
         
        </div>
   
       

      <Ending/>
    
    </div>
  )
}

export default Blog