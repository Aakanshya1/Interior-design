import React from 'react'
import { bathroom} from '../constants/Constants'

function Bathroom() {
  return (
    <div className='md:grid grid-cols-2 w-[80%]'>
    {bathroom.map((deco,key)=>(
   <div key={key} className='flex flex-col  p-2 '>
   <div className="">{deco.image}</div>
   <div className='flex justify-between    '>
   <div className=" flex flex-col  ">
    <span className='main  text-xl  font-semibold'>{deco.title}</span>
    <span className=' md:text-xl text-sm   '>{deco.describe}</span>
   </div>
   <div className=''>
     <button className='bg-brown text-white p-2 rounded-full'>{deco.btn}</button>
    </div>
   </div>
   
  </div>
))}
    </div>
  )
}

export default Bathroom