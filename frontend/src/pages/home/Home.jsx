import React from 'react'
import Sidebar from '../../components/Sidebar'

const Home = () => {
  return (
    <div className='flex max-h-[90vh] w-fit pl-2 pr-2  mx-auto rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-blur-lg bg-opacity-0'>
     <Sidebar/>
     {/* <MessageContainer/> */}
    </div>
  )
}

export default Home