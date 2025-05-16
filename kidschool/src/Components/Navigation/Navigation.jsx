import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <>
      {/* ✅ Main container */}
      <div className="relative h-[13vh] w-full mb-6">

        {/* ✅ Gray background */}
        <div className="absolute top-0 left-0 h-[13vh] w-[60%] bg-gray-300 z-10 hidden md:flex items-center pl-6">
          <img
            src="/assets/logo.avif"
            alt="Logo"
            className="h-[8vh] w-auto object-contain"
          />
        </div>

        {/* ✅ Purple Navbar */}
        <div className="absolute top-0 right-0 h-[13vh] md:h-[13vh] w-full md:w-[70%] bg-purple-600 z-20 rounded-l-full flex flex-col md:flex-row items-center justify-center gap-2 md:gap-12 px-4 py-2">

          {/* ✅ Mobile Logo (hidden in desktop) */}
          <div className="md:hidden mb-2">
            <img
              src="/assets/logo.avif"
              alt="Logo"
              className="h-[6vh] w-auto object-contain"
            />
          </div>

          {/* ✅ Nav Links */}
          <div className="flex flex-col md:flex-row gap-2 md:gap-12 text-sm md:text-base items-center">
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
  );
}

export default Navigation;
