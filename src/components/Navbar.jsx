import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom"; 
import FamWellLogo from "../assets/FamWellLogo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getNavLinkClasses = ({ isActive }) =>
    `relative inline-block py-2 font-medium transition-all duration-300 ${
      isActive
        ? "text-gray-900 font-semibold" 
        : "text-gray-600 hover:text-gray-900" 
    }`;

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" }, 
    { name: "Services", path: "/services" },
    { name: "Contact Us", path: "/contact" }
  ];

  const getUnderlineClasses = ({ isActive }) =>
    `absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-[#AF85D9] to-[#8FC890] rounded-full transition-all duration-300 ease-out ${
      isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
    }`;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4 lg:px-8">
        
        {/* Logo */}
        <NavLink to="/" className="flex-shrink-0">
          <img src={FamWellLogo} alt="Famwell Logo" className="h-10" />
        </NavLink>

        {/* Desktop Navigation - Center */}
        <div className="hidden lg:flex flex-1 justify-center">
          <ul className="flex items-center space-x-10">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={getNavLinkClasses}
                  {...(item.path === "/" ? { end: true } : {})} 
                >
                  {({ isActive }) => (
                    <>
                      {item.name}
                      <span className={getUnderlineClasses({ isActive })}></span>
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Action Buttons */}
        <div className="hidden lg:flex items-center space-x-4 flex-shrink-0">
          <Link
            to="/sign"
            className="relative p-[2px] rounded-lg font-medium transition-all duration-300 group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#AF85D9] to-[#8FC890] rounded-lg"></span>
            <span className="relative block px-7 py-2 bg-white font-bold rounded-lg hover:text-black transition">
              Sign Up
            </span>
          </Link>

          <Link
            to="/login"
            className="px-8 py-[10px] rounded-lg font-medium font-bold text-white bg-[#AF85D9] hover:brightness-110 transition"
          >
            Login
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="lg:hidden flex flex-col items-center justify-center w-10 h-10 space-y-1.5"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-gray-900 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-900 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-900 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="px-4 pb-4 space-y-3">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={getNavLinkClasses}
                  {...(item.path === "/" ? { end: true } : {})}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {({ isActive }) => (
                    <>
                      {item.name}
                      <span className={getUnderlineClasses({ isActive })}></span>
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
            <Link
              to="/sign"
              className="relative p-[2px] rounded-lg font-medium transition-all duration-300 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#AF85D9] to-[#8FC890] rounded-lg"></span>
              <span className="relative block px-7 py-2 bg-white font-bold rounded-lg">
                Sign Up
              </span>
            </Link>

            <Link
              to="/login"
              className="px-8 py-[10px] rounded-lg font-medium font-bold text-white bg-[#AF85D9] text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;