import React from 'react'

const Login = () => {
  return (
    <div className='flex col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-800 '>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
					Login
					<span className='text-customGray'> MyChat</span>
				</h1>

                <form >
                    <div>
 						<label className='label p-2'>
 							<span className='text-base label-text'>Username</span>
						</label>
 						<input type='text' placeholder='Enter username'className='w-full input input-bordered h-10' />
					</div>

                    <div>
 						<label className='label p-2'>
 							<span className='text-base label-text'>Password</span>
						</label>
 						<input type='password' placeholder='Enter Password'className='w-full input input-bordered h-10' />
					</div>


 					<div>
 						<button className='btn btn-block bg-customGray btn-sm mt-6'>Login</button>
 					</div>



                    <a href='#' className='text-sm  hover:underline hover:text-blue-600 mt-5 inline-block'>
 						{"Don't"} have an account?
 					</a>
                </form>
        </div>
    </div>
  )
}

export default Login