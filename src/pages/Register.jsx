import React from 'react'

function Register() {
  return (
    <div>
        <form className='flex flex-col'>
            <label>Username :</label>
            <input className='border' type="text" />
            <label>Password :</label>
            <input className='border' type="text" />
            <label>Email :</label>
            <input className='border' type="text" />
            <label>Phone :</label>
            <input className='border' type="text" />
        </form>
    </div>
  )
}

export default Register