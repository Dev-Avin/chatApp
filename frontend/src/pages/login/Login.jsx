import React from 'react';

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 round-lg shadow-md bg-gray-400 bg-clip-padding backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-bold text-center'>Login</h1>
        <form action="">
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>
                Username
              </span>
            </label>
            <input type="text" placeholder='Enter User Name' className='w-full input input-bordered h-10 placeholderText' />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>
                Password
              </span>
            </label>
            <input type="password" placeholder='Enter Password' className='w-full input input-bordered h-10 placeholderText' />
          </div>  
          <div className='flex justify-center items-center'> 
          <a href='#' className=' hover:underline hover:text-blue-500 mt-2 '>
             New Here ? 
            </a> 
            |
          <button className='pt-2
          '>Login</button>
          </div>      
        </form>
      </div>
    </div>
  )
}

export default Login;
