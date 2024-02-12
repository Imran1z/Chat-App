import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import MessageContainer from '../components/Messages/MessageContainer'

const Home = () => {
  return (
    <div className='flex sm:h-[500px] md:h-[550px] rounded-lg overflow-hidden bg-gray-800 '>
        <Sidebar/>
        <MessageContainer/>
    </div>
  )
}

export default Home