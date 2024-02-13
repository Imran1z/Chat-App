import React from 'react'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import {Toaster} from 'react-hot-toast'

const App = () => {
  return (
     <div className='p-4 h-screen flex items-center justify-center'>
         <Toaster/>
         <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>

         </Routes>

       
     </div>
  )
}

export default App