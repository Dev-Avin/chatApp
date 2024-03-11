import React from 'react'

const Home = () => {
  return (
    <div className='flex sm:h-[450px] m:h-[550px] rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-blur-lg bg-opacity-0'>
     <Sidebar/>
     <MessageContainer/>
    </div>
  )
}

export default Home