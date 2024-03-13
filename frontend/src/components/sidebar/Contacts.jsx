import React from 'react'
import Contact from './Contact.jsx'
const Contacts = () => {
  return (
   <div className='py-2 flex flex-col overflow-scroll h-[60vh]'>
        <Contact url ="https://picsum.photos/200" user = "John Doe"/>
        <Contact url ="https://picsum.photos/600" user = "John "/>
        <Contact url ="https://picsum.photos/800" user = " Doe"/>
        <Contact url ="https://picsum.photos/00" user = "Johoe"/>
        <Contact url ="https://picsum.photos/2" user = "John Doe"/>
        <Contact url ="https://picsum.photos/300" user = "John "/>
        <Contact url ="https://picsum.photos/100" user = " Doe"/>
        <Contact url ="https://picsum.photos/20" user = "Johoe"/>
   </div>
  )
}

export default Contacts