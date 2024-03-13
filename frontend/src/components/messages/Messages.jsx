import React from 'react'
import To from './To.jsx'
import Conversations from './Conversations.jsx'
import EnterMessage from './EnterMessage.jsx'

const Messages = () => {
  return (
  <div className='w-[40vw] sm-w-[90vw]'>
     <To receiver="Me"/>
   <Conversations/>
   
  </div>
  )
}

export default Messages