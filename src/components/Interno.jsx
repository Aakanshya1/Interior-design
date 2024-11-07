import React from 'react'
import { Link } from 'react-router-dom'
import interio from '../assets/images/interio.png'
import Button from '../components/Button'
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';


function Interno() {
  useEffect(()=>{
    AOS.init({duration:"1200"})
  })
  return (
    <div className="interno ">
        <div className="img relative flex justify-center align-center " data-aos="fade-up">
          <img src={interio} />
          <div className='absolute text-white md:top-4 md:m-8 gap-1 md:gap-4 flex flex-col justify-center text-center align-center' data-aos="fade-up">
            <p className='font-semibold md:text-4xl'>Wanna join the interno?</p>
            <span className='text-sm'>It is a long established fact will be distracted</span>
            <div data-aos="fade-up">
              <Link to="/contact">
              <Button className='interior-btn' isprimary text="Contact With us"/>
              </Link>
           
            </div>
          </div>
        </div>
      </div>
  )
}

export default Interno