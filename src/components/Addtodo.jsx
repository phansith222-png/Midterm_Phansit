import React from 'react'

function Addtodo(props) {
    const {id, content, check, hdlCheck, isdone, hdlRemove } = props
    return (
        <div className='flex justify-between gap-4 '>
            <input className='cursor-pointer' type="checkbox" onChange={hdlCheck} />
            <p >{content}</p>
            <div className='flex gap-2'>
                <button className=' flex justify-end px-2 bg-red-400 rounded-md cursor-pointer'>Edit</button>
                <button className='border px-2 rounded-md cursor-pointer' onClick={hdlRemove}>X</button>
            </div>
        </div>
    )
}

export default Addtodo