import React from 'react'

function Button({text,isprimary}) {
  return (
    <button className={isprimary?'bg-brown px-3 py-1 md:px-5 md:py-2 text-white rounded-md hover:text-black transation duration-300 ease-linear ':'text-brown bg-white px-5 py-2'}>{text}</button>
  )
}

export default Button