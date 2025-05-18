import React from 'react'
import { NavLink } from 'react-router-dom'

function Navigation() {
  return (
    <>
      <div className="relative flex items-center h-[5vh] md:h-[13vh] w-full">

        {/* Gray section with logo */}
        <div className="bg-gray-300 h-full md:w-[35%] w-[55%] flex items-center pl-4 md:pl-6 border-l-2 z-20 relative" style={{ zIndex: 30 }}>
          <img
            src="/assets/logo.avif"
            alt="Logo"
            className="h-[3.5vh] md:h-[8vh] w-auto object-contain"
          />
        </div>

        {/* Purple nav links section */}
        <div
          className="bg-purple-600 h-full md:w-[70%] w-[80%] flex items-center justify-center border-l-2 relative"
          
        >
          <div className="flex justify-around items-center w-full px-4 md:px-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-yellow-400 font-semibold text-xs md:text-base' : 'text-white text-xs md:text-base'
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/Admission"
              className={({ isActive }) =>
                isActive ? 'text-yellow-400 font-semibold text-xs md:text-base' : 'text-white text-xs md:text-base'
              }
            >
              Admissions
            </NavLink>
            <NavLink
              to="/About-us"
              className={({ isActive }) =>
                `${isActive ? 'text-yellow-400 font-semibold' : 'text-white'} whitespace-nowrap text-xs md:text-base`
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
