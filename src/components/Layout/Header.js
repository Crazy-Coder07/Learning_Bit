import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <div className='flex flex-row justify-between bg-blue-500 p-4 font-bold'>
                <Link to="/" className='text-2xl'>Learning Bit</Link>
                <div className='flex space-x-4'>
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/register">Register</NavLink>
                    <NavLink to="/login">Login</NavLink>
                    <NavLink to="/mycourse">MyCourse</NavLink>
                    <NavLink to="/profile">Profile</NavLink>
                </div>
            </div>
        </>
    )
}

export default Header