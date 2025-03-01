import React, { useState } from 'react'
import project1 from '../assets/images/project1.png'
import Bathroom from '../components/Bathroom'
import Kitchen from '../components/Kitchen'
import Living from '../components/Living'
import Bedroom from '../components/Bedroom'
import Ending from '../components/Ending'
function Project() {
  const [selectedPage,setSelectedPage]= useState('bathroom');
  const pages={
    bathroom:{
      pagename:<Bathroom/>
    },
    bedroom:{
      pagename:<Bedroom/>
    },
    kitchen:{
      pagename:<Kitchen/>
    },
    living:{ 
      pagename:<Living/>
    },
   
  }
  const handlePageClick=(page)=>{

    setSelectedPage(page);
  }
  const current=pages[selectedPage];
  
  return (
    <div className='Project pt-20 '>
      <div className="service-img relative" data-aos="fade-up">
        <img src={project1} className='h-full w-full'/>
        <div className="absolute w-full  text-center ser text-white text-2xl md:text-5xl top-7 md:pt-20">
          <div className='text-black'>Our Project</div>
         </div>
      </div>
      <div>
      <div className="btns  p-4 flex flex-row text-center justify-center align-center  text-sm font-semibold items-center w-full rounded-md  text-brown  gap-4  ">
          <div className='w-fit border rounded-md'>
          <button onClick={()=>handlePageClick('bathroom')}  className={`px-4 py-2 rounded-md ${selectedPage=='bathroom'?'bg-brown text-white ':'bg-white text-black '}`}>Bathroom</button>
          <button onClick={()=>handlePageClick('bedroom')}  className={`px-4 py-2  rounded-md ${selectedPage=='bedroom'?'bg-brown text-white':'bg-white text-black'}`}>Bed Room</button>
          <button onClick={()=>handlePageClick('kitchen')}   className={`px-4 py-2  rounded-md ${selectedPage=='kitchen'?'bg-brown text-white':'bg-white text-black'}`}>Kitchen</button>
          <button onClick={()=>handlePageClick('living')} className={`px-4 py-2  rounded-md ${selectedPage=='living'?'bg-brown text-white':'bg-white text-black' }`}>living Room</button>
          </div>
        </div>
    
      <div className=" w-full flex justify-center">
         <div className='flex justify-center'>{current.pagename}</div>
      </div>
      </div>
        
        <Ending/>

    </div>
  )
}

export default Project