import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'

const Home = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-800 '>
        <Sidebar/>
    </div>
  )
}

export default Home