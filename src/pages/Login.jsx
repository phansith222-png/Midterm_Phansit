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
            <form className='flex flex-col' onSubmit={hdlSubmit}>
                <label >Username</label>
                <input onChange={hdlChange} name='username' className='border' type="text" /><br />
                <label >Password</label>
                <input onChange={hdlChange} name='password' className='border' type="text" /><br />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Login