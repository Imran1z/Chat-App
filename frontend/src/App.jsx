import React from 'react'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import { Route, Routes,Navigate } from 'react-router-dom'
import {Toaster} from 'react-hot-toast'
import { useAuthContext } from './context/AuthContext'

const App = () => {
   const {authUser}=useAuthContext();
  return (
     <div className='p-4 h-screen flex items-center justify-center'>
         <Toaster/>
         <Routes>
               <Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />} />
			   	<Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
				   <Route path='/signup' element={authUser ? <Navigate to='/' /> : <Signup />} />

         </Routes>

       
     </div>
  )
}

export default App