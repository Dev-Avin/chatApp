import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Messages from '../../components/messages/Messages'


const Home = () => {
  return (
    <div className='flex max-h-[90vh] w-fit pl-2 pr-2  mx-auto rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-blur-lg bg-opacity-0'>
     <Sidebar/>
     <div className='divider flex-col h-[90%] w-1 bg-slate-300 opacity-10 rounded-[50%] '/>
     <Messages/>
    </div>
  )
}

export default Home