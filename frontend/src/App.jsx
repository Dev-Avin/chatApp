import React from 'react'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Home from './pages/home/Home'

const App = () => {
  return (
   <>
   <div className='p-4 h-screen flex item-center justify-center'>
     {/* <Login />    */}
     {/* <Signup/> */}
     <Home/>
     </div>
     </>
  )
}

export default App