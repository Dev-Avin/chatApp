import React from 'react'

const Contact = ({url ,user}) => {
  return (
   <div className='flex item-center hover:bg-slate-300 hover:bg-opacity-30  rounded-lg p-2 py-1 cursor-pointer'>
        <img src={url} alt="profile" className='w-12 h-12 rounded-full object-cover'/>
        <h4 className='ml-2 text-center flex justify-center items-center' >{user}</h4>
    </div>
  )
}

export default Contact