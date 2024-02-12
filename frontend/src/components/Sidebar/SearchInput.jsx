import React from 'react'
import { IoSearchSharp } from "react-icons/io5";



const SearchInput = () => {
  return (
    <form className='flex items-center gap-2 p-3'>
        <input type="text" placeholder="Search Chats..." className="input input-bordered border-customGray rounded-full " />  

        <button type='submit' className='btn btn-circle bg-customGray text-gray-500'>
				<IoSearchSharp className='w-6 h-6 outline-none' />
			</button>  
    </form>
  )
}

export default SearchInput