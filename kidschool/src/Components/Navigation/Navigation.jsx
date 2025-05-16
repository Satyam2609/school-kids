import React from 'react'
import { NavLink } from 'react-router-dom'

function Navigation() {
  return (
    <>
      <div className="relative flex items-center h-[13vh] w-full">

        {/* Gray section with logo */}
        <div className="bg-gray-300 h-full md:w-[35%] w-[40%] flex items-center pl-6 border-l-2 z-20 relative">
          <img
            src="/assets/logo.avif"
            alt="Logo"
            className="h-[8vh] w-auto object-contain"
          />
        </div>

        {/* Purple nav links section */}
        <div
          className="bg-purple-600 h-full md:w-[65%] w-[60%] rounded-l-full flex items-center justify-center border-l-2 relative"
          style={{ marginLeft: '-8%' }} // overlap thoda adjust karne ke liye
        >
          <div className="flex justify-around items-center w-full px-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-yellow-400 font-semibold' : 'text-white'
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/Admission"
              className={({ isActive }) =>
                isActive ? 'text-yellow-400 font-semibold' : 'text-white'
              }
            >
              Admissions
            </NavLink>
            <NavLink
              to="/About us"
              className={({ isActive }) =>
                `${isActive ? 'text-yellow-400 font-semibold' : 'text-white'} whitespace-nowrap`
              }
            >
              About us
            </NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navigation
