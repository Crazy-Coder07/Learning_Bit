import React from 'react'
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className='text-center bg-slate-500 p-4 mt-7'>
      <div className='py-5 flex flex-row justify-center space-x-6 underline text-white'>
        <Link to="/about" >About Us</Link>
        <Link to="/contact" >Contact Us</Link>
        <Link to="/privecy" >Privacy Policy</Link>
      </div>
      <h1 className='text-2xl font-bold underline'>All Right Reserved &copy; Learning<span className=' text-red-400'>Bit</span></h1>
    </div>
  )
}

export default Footer