import React from "react";
import { NavLink, Link } from "react-router-dom"; 
import FamWellLogo from "../assets/FamWellLogo.png";

const Navbar = () => {
  const getNavLinkClasses = ({ isActive }) =>
    `relative block py-2 font-medium transition-all duration-300 ${
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
    `absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-[#AF85D9] to-[#8FC890] rounded-full transition-all duration-300 ease-out ${
      isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
    }`;

  return (
    <nav className="bg-white rounded-lg shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between p-4 lg:px-8 text-left lg:text-center">
        
        <NavLink to="/" className="mb-4 lg:mb-0">
          <img src={FamWellLogo} alt="Famwell Logo" className="h-10" />
        </NavLink>

        {/* Navigation Menu */}
        <div className="w-full lg:w-auto mb-4 lg:mb-0">
          <ul className="flex flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-start space-y-2 lg:space-y-0 lg:space-x-10">
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

        {/* Action Buttons */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-2 lg:space-y-0 lg:space-x-4 w-full lg:w-auto">
          
          {/* Sign Up Button */}
          <Link
            to="/sign"
            className="relative p-[2px] rounded-lg text-left lg:text-center font-medium font-weight-100 transition-all duration-300 group w-full lg:w-auto"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#AF85D9] to-[#8FC890] rounded-lg"></span>
            <span className="relative block px-7 py-2 bg-white rounded-lg group-hover:bg-transparent group-hover:text-white transition">
              Sign Up
            </span>
          </Link>

          {/* Login Button */}
          <Link
            to="/login"
            className="px-8 py-[10px] rounded-lg font-medium text-white bg-[#AF85D9] hover:opacity-90 transition-opacity w-full lg:w-auto text-center"
          >
            Login
          </Link>
        </div>
      </div>

      <hr className="text-gray-200" />
    </nav>
  );
};

export default Navbar;