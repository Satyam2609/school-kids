import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <>
      <div className="relative h-[13vh] w-full flex items-center">

        {/* Gray bg + logo */}
        <div className="bg-gray-300 h-full w-[60%] flex items-center pl-4 md:pl-6 border-l-2">
          <img
            src="/assets/logo.avif"
            alt="Logo"
            className="h-[6vh] md:h-[8vh] w-auto object-contain"
          />
        </div>

        {/* Purple navbar */}
        <div className="bg-purple-600 h-full w-[40%] md:w-[40%] rounded-l-full flex items-center justify-around border-l-2">

          {/* Nav links */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'text-yellow-400 font-semibold'
                : 'text-white'
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/Admission"
            className={({ isActive }) =>
              isActive
                ? 'text-yellow-400 font-semibold'
                : 'text-white'
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
    </>
  );
}

export default Navigation;
