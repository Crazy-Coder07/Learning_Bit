import React from 'react'
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className='text-center bg-slate-500 p-4 mt-7'>
      <div className='py-5 '>
        <Link to="/about" >About</Link>
        <Link to="/contact" >Contact</Link>
        <Link to="/privecy" >Privecy Policy</Link>
      </div>
      <h1 className='text-2xl font-bold underline'>All Right Reserved &copy; Learning Bit</h1>
    </div>
  )
}

export default Footer