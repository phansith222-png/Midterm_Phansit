import React from 'react'
import { Outlet, NavLink } from 'react-router'
function Navbar() {
  return (
    <div className='flex flex-col items-center'>
      <ul className='flex gap-8 p-4'>
        <li><NavLink className='border p-2 rounded-2xl' to="/">Login</NavLink></li>
        <li><NavLink className='border p-2 rounded-2xl' to="/register">Register</NavLink></li>
        <li><NavLink className='border p-2 rounded-2xl' to="/todolist">Todolist</NavLink></li>
        <li><NavLink className='border p-2 rounded-2xl' to="/tokenprofile">TokenProfile</NavLink></li>
      </ul>
      <div className='flex h-screen w-full justify-center items-center'>
        <Outlet />
      </div>
    </div>
  )
}

export default Navbar