import React from 'react'
import { NavLink } from 'react-router-dom'

function Navigation() {
  return (
    <>
      {/* ✅ Container that handles the full navbar positioning */}
      <div className="relative h-[13vh] w-full mb-6">

        {/* ✅ Gray background (left side) */}
        <div className="absolute top-0 left-0 h-[13vh] w-[60%] bg-gray-300 z-10 flex items-center pl-6 md:pl-[4vw]">
          <img
            src="/assets/logo.avif"
            alt="Logo"
            className="h-[8vh] w-auto object-contain"
          />
        </div>

        {/* ✅ Purple Navbar on top (right side and overlapping gray) */}
        <div className="absolute top-0 right-0 h-[13vh] w-full md:w-[70%] bg-purple-600 z-20 rounded-l-full flex items-center justify-center">
          
          {/* ✅ Mobile Logo (hidden in desktop) */}
          <img
            src="/assets/logo.avif"
            alt="Logo"
            className="h-[5vh] w-auto object-contain absolute left-4 top-4 md:hidden"
          />

          {/* ✅ Nav Links */}
          <div className="flex md:justify-end gap-6 md:gap-12 text-sm  md:text-base">
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
