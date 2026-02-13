import React, { useEffect, useState } from 'react'
import Addtodo from '../components/Addtodo'
import axios from 'axios'
import useUserStore from '../apis/userStore'
import { id } from 'zod/locales'

function Todolist() {
    const [list, setList] = useState([])
    const [text, setText] = useState([])
    const [status,setStatus] = useState(false)
    const token = useUserStore((state) => state.token)
    useEffect(() => {
        getUser()
    }, [])
    
    async function getUser() {
        try {
            const res = await axios.get(`https://drive-accessible-pictures-send.trycloudflare.com/todosv2`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )
            // console.log('res.data', res.data)
            setList(res.data)
            
        } catch (error) {
            console.log(error)
        }

    }
    async function updateUser() {
        try {
            const res = await axios.post(`https://drive-accessible-pictures-send.trycloudflare.com/todosv2`,
                {
                    content:text
                },{
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )
            // console.log('res.data from update', res.data)
            getUser()
        } catch (error) {
            console.log(error)
        }
    }
    
    // console.log('list', list[0].id)
    // const newL = list[0].id
    async function removeData(id) {
        try {
            const res = await axios.delete(`https://drive-accessible-pictures-send.trycloudflare.com/todosv2/delete/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )
            getUser()
            // console.log(res.data)
            
        } catch (error) {
            console.log(error)
        }
        
    }
    async function checkData(id) {
        try {
            const res = await axios.patch(`https://drive-accessible-pictures-send.trycloudflare.com/todosv2/update/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )
            console.log(res.data)
        } catch (error) {
            console.log('error', error)
        }
        
    }
    const hdlRemove = (id) =>{
        // console.log(id)
        removeData(id)
    }
    // console.log(token)
    const hdlChange = (e) => {
        // console.log(e.target.value)
        setText(e.target.value)
    }
    const hdlCheck = (index) => {
        setList((prev) => {
            const updateData = [...prev]
            updateData.map((index,i)=>{
                if (index.isdone === false){
                    return index.isdone === true
                }else{return index.isdone === false}
            })
          
             return updateData 
        });
        checkData()


        // console.log(check)
        // console.log(list[0].isdone)
        // if(list[0].isdone === check) {
        //    return setStatus(false)
        // }else{setStatus(true)}
        // if(e === true) {
        //     newid = false
        // }if(e=== false){newid = false}
        // // setStatus(newid)
        // checkData(status)
    }
    const hdlAdd = () => {
        // setList(prv => [...prv, { content: text }])
        updateUser()
        // console.log(newL)
    }
    console.log(list)
    return (
        <div className='flex p-20 border flex-col rounded-2xl bg-gray-800 text-white gap-3'>
            <div className='flex justify-between'>
                <h1 className='text-[40px] font-bold'>Mytodo</h1>
            </div><br />
            <div className='flex justify-between gap-4'>
                <input className='border rounded-md px-2' type="text" onChange={hdlChange} />
                <button className='px-2 py-1 font-bold border rounded-full bg-blue-500' onClick={hdlAdd}>Add</button>
            </div><br />
            {list.map((el, index) => (
                <Addtodo key={el.id} id={el.id} content={el.content} check={el.isdone} hdlCheck={()=>hdlCheck(index)} text={text} hdlRemove={()=>hdlRemove(el.id)}  />
            ))}
        </div>
    )
}

export default Todolist