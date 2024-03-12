import React from 'react'
import SearchInput from './SearchInput.jsx'
import Contacts from './Contacts.jsx'
import LogOut from './LogOut.jsx'

const Sidebar = () => {
  return (
    <div>
       <SearchInput/>
       <div className='divider bg-slate-300 opacity-10 rounded-full  px-3'/>
       <Contacts/>
       <div className='divider rounded-full  px-3'/>
       <LogOut/>
    </div>
  )
}

export default Sidebar