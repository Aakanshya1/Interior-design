import React from 'react';
import decor1 from '../assets/images/decor1.png'
import { useState } from 'react';
function AuthForm() {
  const [isLogin, setIsLogin]= useState(true);
  const [formData,setFormData]=useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    rememberMe: false,
  })
const handletoggle=()=>{
  setIsLogin(!isLogin);
}
const handleChange=(e)=>{
const{name,value,type,checked}=e.target;
setFormData((pervData)=>({
  ...pervData, [name]: type === 'checkbox' ? checked : value,
  
}))
} 
const handleSubmit = (e) => {
  e.preventDefault();
  // Process form data
  console.log('Form submitted:', formData);
  if (isLogin) {
    // Handle login
  } else {
    // Handle signup
  }
};
 
  return (
    <>
 <div className="flex  authform pt-20 w-full  justify-evenly  text-center">
  <div className="img hidden lg:block ">
    <img src={decor1} className='w-[35vw]' srcset="" />
  </div>
<div className='form-box login w-fit  '>
<form className='flex  flex-col gap-2 w-full' onSubmit={handleSubmit}>
        <h2 className='title text-4xl'>Welcome to Selhoho</h2>
        <h6 className='text-sm title text-brown flex'>{isLogin?"Login":"Signup"}</h6>
        {!isLogin &&(
          <>
          <div className='flex flex-col w-full text-left'>
              <label className=' title text-brown'>First Name:</label>
              <input className='border-b rounded-md drop-shadow-md'
                type="text"
                name="firstName"
                    value={formData.firstName}
                    onChange={handleChange} />
            </div>
        <div className='flex flex-col w-full text-left'>
              <label className=' title text-brown'>Last Name:</label>
              <input className='border-b rounded-md drop-shadow-md'
                type="text"
                name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                />
            </div>
          </>
        )}
        
           <div className='flex flex-col w-full text-left'>
              <label className=' title text-brown'>Email:</label>
              <input className='border-b rounded-md drop-shadow-md'
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                />
            </div>
            <div className='flex flex-col w-full text-left'>
                <label className=' title text-brown'>Password:</label>
                <input className='border-b rounded-md drop-shadow-md'
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  />
              </div>
              {!isLogin && (
                <>
                 <div className='flex flex-col w-full text-left'>
                <label className=' title text-brown'>Confirm Password:</label>
                <input className='border-b rounded-md drop-shadow-md'
                  type="password" 
                  name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
              </div>
                </>
              )}
             
              <div className="remember-forget title text-sm flex justify-between">
                <label><input type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}               
                />{isLogin?"Remember Me":"I've agreed to terms and conditions"}</label>
                {isLogin &&(
                  <>
                   <a href='#'>Forget Password?</a>
                  </>
                )}
              </div>
              <button className='form-btn title uppercase bg-brown  w-full text-white font-bold text-sm p-2 rounded-md' type='submit'>{isLogin ? 'Login' : 'Signup'}</button>
              <div className="register-link">
                 <h6 className='text-sm title w-full text-right '>{isLogin?"Don't have an account?":"Already have an account?"}<a href='#' className='text-brown 'onClick={handletoggle}>{isLogin?"Signup":"Login"}</a></h6>
              </div>
</form> 
</div>       


      </div>
    </>

        
  )
}

export default AuthForm