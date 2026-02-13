import axios from 'axios'
import React, { useState } from 'react'
import useUserStore from '../apis/userStore'
import { useNavigate } from 'react-router'

function Login() {
    const [formlogin, setFormlogin] = useState({
        username: "",
        password: ""
    })
    const setUser = useUserStore((state)=>state.setUser)
    const setToken = useUserStore((state)=>state.setToken)
    const navigate = useNavigate()
    const hdlChange = (e) => {
        const { name, value } = e.target
        setFormlogin((prv) => ({ ...prv, [name]: value }))
    }
    const hdlSubmit = async (e) => {
        e.preventDefault()
        const res = await axios.post('https://drive-accessible-pictures-send.trycloudflare.com/auth/login',formlogin)
        console.log(res.data)
        const {user} = res.data
        const{token,userId,username} = user
        setUser({userId,username})
        setToken(token)
        navigate("/todolist")
    }
    return (
        <div >
            <form className='flex flex-col px-15 py-10 bg-gray-600 rounded-2xl' onSubmit={hdlSubmit}>
                <h1 className='text-[40px] text-white'>Welcome</h1><br />
                <input onChange={hdlChange}  name='username' className='border-none px-3 py-1 rounded-md bg-gray-400 text-white' type="text" placeholder='username' /><br />
                <input onChange={hdlChange} name='password' className='border-none px-3 py-1 rounded-md bg-gray-400 text-white' type="text" placeholder='password' /><br />
                <button className='text-white border-none bg-gray-400 border rounded-md cursor-pointer py-2'>Login</button>
            </form>
        </div>
    )
}

export default Login