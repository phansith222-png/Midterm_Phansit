import React from 'react'

function Register() {
  return (
    <div>
        <form className='flex flex-col px-15 py-10 bg-gray-600 rounded-2xl'>
            <h1 className='text-[40px] font-bold text-white'>Register</h1>
            <input placeholder='username' className='border-none px-3 py-1 rounded-md bg-gray-400 text-white' type="text" />
            <br />
            <input placeholder='password' className='border-none px-3 py-1 rounded-md bg-gray-400 text-white' type="text" />
            <br />
            <input placeholder='Email' className='border-none px-3 py-1 rounded-md bg-gray-400 text-white' type="text" />
            <br />
            <input placeholder='phone' className='border-none px-3 py-1 rounded-md bg-gray-400 text-white' type="text" />
            <br />
            <button className='text-white border-none bg-gray-400 border rounded-md cursor-pointer py-2'>Sign up</button>
        </form>
    </div>
  )
}

export default Register