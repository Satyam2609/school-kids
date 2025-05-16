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

      {/* ✅ Navigation + Mobile Logo */}
      <div className='flex justify-end relative md:bottom-[13vh]'>
        <div className='bg-purple-600 h-[13vh] w-full md:w-[70vw] rounded-l-full text-center border-l-2 flex items-center justify-center relative'>

          {/* ✅ Mobile Logo (visible only on small screens) */}
          <img 
            src='/assets/logo.avif' 
            className='h-[5vh] w-auto absolute left-4 top-4 object-contain md:hidden' 
            alt="Logo" 
          />

          {/* ✅ Navigation Links */}
          <div className='mx-auto flex justify-around items-center w-[90%] md:w-[50%]'>
            <div>
              <NavLink to='/' className={({isActive}) => isActive ? 'text-yellow-400 font-semibold' : 'text-white'}>
                Home
              </NavLink>
            </div>
            <div>
              <NavLink to='/Admission' className={({isActive}) => isActive ? 'text-yellow-400 font-semibold' : 'text-white'}>
                Admissions
              </NavLink>
            </div>
            <div>
              <NavLink to="/About us" className={({isActive}) => `${isActive ? 'text-yellow-400 font-semibold' : 'text-white'} whitespace-nowrap`}>
                About us
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navigation
