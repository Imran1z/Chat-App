import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import GenderCheckbox from '../components/GenderCheckbox/GenderCheckbox'
import useSignup from '../hooks/useSignup'

const Signup = () => {
	const [inputs, setInputs] = useState({
		// FullName:'',
		// username:'',
		// password:'',
		// confirmPassword:'',
		// gender:'',
	})

	
	const handleCheckboxChange =(gender)=>{
		setInputs({...inputs, gender});
	}
	
	const{loading, signup}= useSignup()
	const handleSubmit=async(e)=>{
		e.preventDefault();
		console.log(inputs)
		await signup(inputs)
		

	}


	const handleChange =(e)=>{
		setInputs({...inputs,[e.target.id]:e.target.value})
	}
	
  return (
    <div className='flex col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-800 '>

                 <h1 className='text-3xl font-semibold text-center text-gray-300'>
					SignUp
					<span className='text-customGray'> MyChat</span>
				</h1>

                <form onSubmit={handleSubmit}>
                    <div>
 						<label className='label p-2'>
 							<span className='text-base label-text'>Full Name</span>
						</label>
 						<input type='text' placeholder='Enter Full Name'className='w-full input input-bordered h-10' 
							id='fullName'
							onChange={handleChange}

						/>
					</div>

                    <div>
 						<label className='label p-2'>
 							<span className='text-base label-text'>Username</span>
						</label>
 						<input type='text' placeholder='Enter username'className='w-full input input-bordered h-10'
							id='username'
							onChange={handleChange}

							 />
					</div>

                    <div>
 						<label className='label p-2'>
 							<span className='text-base label-text'>Password</span>
						</label>
 						<input type='password' placeholder='Enter Password'className='w-full input input-bordered h-10' 
							id='password'
							onChange={handleChange}


						/>
					</div>

                    <div>
 						<label className='label p-2 '>
 							<span className='text-base label-text'>Confirm Password</span>
						</label>
 						<input type='password' placeholder='Enter Password'className='w-full input input-bordered h-10 mb-5' 
							id='confirmPassword'
							onChange={handleChange}

						/>
					</div>

                    <GenderCheckbox onCheckboxChange ={handleCheckboxChange} selectedGender = {inputs.gender}/>

                    <div>
 						<button className='btn btn-block bg-customGray btn-sm mt-6'>SignUp</button>
 					</div>


					<Link to='/login' className='text-sm  hover:text-blue-600 mt-2 inline-block'>
					Already have an account?
					</Link>

                      
                    
                </form>

        </div>
    </div>
        
    
  )
}

export default Signup