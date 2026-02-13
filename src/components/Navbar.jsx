import React from 'react'
import { Outlet, NavLink } from 'react-router'
function Navbar() {
  return (
    <div className='flex flex-col items-center p-4 bg-blue-950 '>
      <ul className='flex gap-8 p-10 bg-gray-900 w-full justify-evenly text-[30px]'>
        <li><NavLink className='border-none p-2 rounded-md   text-white hover:text-shadow-emerald-500 hover:text-gray-700' to="/">Login</NavLink></li>
        <li><NavLink className='border-none rounded-md  text-white hover:text-shadow-emerald-500 hover:text-gray-700' to="/register">Register</NavLink></li>
        <li><NavLink className='border-none rounded-md  text-white hover:text-shadow-emerald-500 hover:text-gray-700' to="/todolist">Todolist</NavLink></li>
      </ul>
      <div className='flex h-screen w-full justify-center items-center'>
        <Outlet />
      </div>
    </div>
  )
}

export default Navbar