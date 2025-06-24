import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Install: npm install lucide-react

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="relative flex items-center h-[5vh] md:h-[13vh] w-full">

        {/* Logo Section */}
        <div className="bg-gray-300 h-full md:w-[35%] w-[55%] flex items-center pl-4 md:pl-6 border-l-2 z-20 relative" style={{ zIndex: 30 }}>
          <img
            src="/assets/logo.avif"
            alt="Logo"
            className="h-[3.5vh] md:h-[8vh] w-auto object-contain"
          />
        </div>

        {/* Nav Section */}
        <div className="bg-purple-600 h-full md:w-[70%] w-[80%] flex items-center justify-between px-4 md:px-6 border-l-2 relative">

          {/* Desktop Nav Links */}
          <div className="hidden md:flex justify-around items-center w-full">
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

          {/* Hamburger Icon (Mobile) */}
          <div className="md:hidden pl-[7rem] flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="text-white" /> : <Menu className="text-white" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-purple-700 text-white w-full flex flex-col items-center py-4  space-y-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'text-yellow-400 font-semibold text-sm' : 'text-white text-sm'
            }
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/Admission"
            className={({ isActive }) =>
              isActive ? 'text-yellow-400 font-semibold text-sm' : 'text-white text-sm'
            }
            onClick={() => setIsOpen(false)}
          >
            Admissions
          </NavLink>
          <NavLink
            to="/About-us"
            className={({ isActive }) =>
              isActive ? 'text-yellow-400 font-semibold text-sm' : 'text-white text-sm'
            }
            onClick={() => setIsOpen(false)}
          >
            About us
          </NavLink>
        </div>
      )}
    </>
  );
}

export default Navigation;
