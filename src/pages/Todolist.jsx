import React,{useEffect, useState} from 'react'
import Addtodo from '../components/Addtodo'
import axios from 'axios'
import useUserStore from '../apis/userStore'

function Todolist() {
    const [user,setUser] = useState([])
    const token = useUserStore((state)=>state.token)
    
    useEffect(()=>{
        fetchUser()
    },[])

    async function fetchUser () {
        try {
            const res = await axios.get(`https://drive-accessible-pictures-send.trycloudflare.com/todosv2`,
                {
                    headers:{
                        Authorization: `Bearer ${token}`
                    }
                }
            )
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }


    console.log(token)
    const hdlChange = (e) => {
        console.log(e.target.value)
    }
    return (
        <div className='flex p-5 border flex-col'>
            <div className='flex justify-between'>
                <h1>Mytodo</h1>
                <h4>logo</h4>
            </div><br />
            <div className='flex justify-between'>
                <input type="text" onChange={hdlChange}/>
                <button>Add</button>
            </div><br />
            <Addtodo />
        </div>
    )
}

export default Todolist