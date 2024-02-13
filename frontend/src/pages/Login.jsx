import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import useSignin from '../hooks/useSignin'


const Login = () => {
	const [inputs, setInputs] = useState({})
	const{loading,signin}=useSignin();

	const handleSubmit=async(e)=>{
		e.preventDefault();
		await signin(inputs)
	}

	const handleChange =(e)=>{
		setInputs({...inputs,[e.target.id]:e.target.value})
	}
  return (
    <div className='flex col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-800 '>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
					Login
					<span className='text-customGray'> MyChat</span>
				</h1>

                <form onSubmit={handleSubmit} >
                    <div>
 						<label className='label p-2'>
 							<span className='text-base label-text'>Username</span>
						</label>
 						<input type='text' placeholder='Enter username'className='w-full input input-bordered h-10' 
						id='username'
						onChange={handleChange}/>
					</div>

                    <div>
 						<label className='label p-2'>
 							<span className='text-base label-text'>Password</span>
						</label>
 						<input type='password' placeholder='Enter Password'className='w-full input input-bordered h-10' 
						id='password'
						onChange={handleChange}/>
					</div>


 					<div>
 						<button className='btn btn-block bg-customGray btn-sm mt-6' disabled={loading}>{loading?<span className='loading loading-spinner'></span>:"Sign In"}</button>
 					</div>



                    <Link to='/signup' className='text-sm  hover:text-blue-600 mt-5 inline-block'>
 						{"Don't"} have an account?
 					</Link>
                </form>
        </div>
    </div>
  )
}

export default Login