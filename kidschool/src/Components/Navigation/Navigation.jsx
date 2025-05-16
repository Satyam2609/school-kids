import React from 'react'
import { NavLink } from 'react-router-dom'

function Navigation() {
  return (
    <>   
      {/* Logo Section */}
      <div className='bg-gray-300 h-[13vh] w-full md:w-[70vw] flex justify-start items-center border-l-2'>
        {/* Responsive Logo */}
        <img 
          src='/assets/logo.avif' 
          className='h-[6vh] w-auto ml-4 md:h-[8vh] md:ml-[6vw] object-contain' 
          alt="Logo" 
        />
      </div>

      {/* Navigation Links Section */}
      <div className='flex justify-end relative bottom-[13vh]'>
        <div className='bg-purple-600 h-[13vh] w-full md:w-[70vw] rounded-l-full text-center border-l-2'>
          <div className='relative top-[4vh] mx-auto flex justify-around items-center w-[90%] md:w-[50%]'>
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
