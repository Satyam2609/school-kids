import React from 'react'
import { NavLink } from 'react-router-dom'

function Navigation() {
  return (
    <>   
      {/* ✅ Desktop Logo Section */}
      <div className='bg-gray-300 h-[13vh] w-full md:w-[70vw] justify-start items-center border-l-2 hidden md:flex'>
        <img 
          src='/assets/logo.avif' 
          className='h-[8vh] w-auto ml-[6vw] object-contain' 
          alt="Logo" 
        />
      </div>

      {/* ✅ Navigation Bar for all screens */}
      <div className='flex justify-end relative md:bottom-[13vh]'>
        <div className='bg-purple-600 h-auto py-4 w-full md:w-[70vw] rounded-l-full text-center border-l-2 flex flex-col md:flex-row items-center justify-between px-4 md:px-8'>

          {/* ✅ Logo (Mobile only) */}
          <img 
            src='/assets/logo.avif' 
            className='h-[5vh] w-auto object-contain md:hidden mb-2' 
            alt="Logo" 
          />

          {/* ✅ Navigation Links */}
          <div className='flex flex-wrap gap-6 md:gap-12 items-center justify-center text-sm md:text-base'>
            <NavLink to='/' className={({isActive}) => isActive ? 'text-yellow-400 font-semibold' : 'text-white'}>
              Home
            </NavLink>
            <NavLink to='/Admission' className={({isActive}) => isActive ? 'text-yellow-400 font-semibold' : 'text-white'}>
              Admissions
            </NavLink>
            <NavLink to="/About us" className={({isActive}) => `${isActive ? 'text-yellow-400 font-semibold' : 'text-white'} whitespace-nowrap`}>
              About us
            </NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navigation
