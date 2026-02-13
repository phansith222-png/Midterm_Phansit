import React, { useState } from 'react'
import { registervalidator } from '../utils/register.validator'
import axios from 'axios'
import { useNavigate } from 'react-router'

function Register() {
    const [formdata,setFormdata] =useState({
        username: "",
        password:"",
        email:"",
        phone:""
    })
    const[error,setError] = useState({})
    const navigate =useNavigate()
    const handleChange = (e) =>{
        const{name,value} = e.target
        setFormdata((prv)=>({...prv,[name]:value}))
    }
    const handleSubmit = async (e) =>{
        e.preventDefault()
        setError({})
        const result = registervalidator.safeParse(formdata)
        if(!result.success) {
            const{fieldErrors} = result.error.flatten()
            setError(fieldErrors)
            return
        }
        try {
            const res = await axios.post(`https://drive-accessible-pictures-send.trycloudflare.com/auth/register`,formdata)
            console.log("Register successfully",res.data)
            navigate("/todolist")
        } catch (error) {
            
        }
    }
  return (
    <div>
        <form className='flex flex-col px-15 py-10 bg-gray-600 rounded-2xl' onSubmit={handleSubmit}>
            <h1 className='text-[40px] font-bold text-white'>Register</h1>
            <input onChange={handleChange} name ="username" placeholder='username' className='border-none px-3 py-1 rounded-md bg-gray-400 text-white' type="text" />
            {error?.username && <p className='text-red-600'>{error?.username[0]}</p>}
            <br />
            <input onChange={handleChange} name ="password" placeholder='password' className='border-none px-3 py-1 rounded-md bg-gray-400 text-white' type="text" />
            {error?.password && <p className='text-red-600'>{error?.password[0]}</p>}
            <br />
            <input onChange={handleChange} name ="email" placeholder='Email' className='border-none px-3 py-1 rounded-md bg-gray-400 text-white' type="text" />
            {error?.email && <p className='text-red-600'>{error?.email[0]}</p>}
            <br />
            <input  onChange={handleChange} name ="phone" placeholder='phone' className='border-none px-3 py-1 rounded-md bg-gray-400 text-white' type="text" />
            {error?.phone && <p className='text-red-600'>{error?.phone[0]}</p>}
            <br />
            <button className='text-white border-none bg-gray-400 border rounded-md cursor-pointer py-2'>Sign up</button>
        </form>
    </div>
  )
}

export default Register