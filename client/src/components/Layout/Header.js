import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  // State to track the mobile menu's open/closed state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className='bg-blue-500 p-2 md:p-4 lg:p-4 font-bold text-white'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link to="/" className='text-2xl'>
          Learning<span className='text-red-300'>Bit</span>
        </Link>
        {/* Mobile menu button/icon */}
        <div className='md:hidden'>
          <button onClick={toggleMobileMenu} className='text-white'>
            <div className='w-6 h-1 bg-white mb-1'></div>
            <div className='w-6 h-1 bg-white mb-1'></div>
            <div className='w-6 h-1 bg-white'></div>
          </button>
        </div>
        {/* Navigation links */}
        <div className={`md:flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/mycourse">My Course</NavLink>
          <NavLink to="/profile">Profile</NavLink>
          <NavLink to="/login">Log in</NavLink>
          <NavLink to="/register">
            <div className='h-10 w-24 text-center p-1 rounded-lg bg-slate-50 text-black'>Sign Up</div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
