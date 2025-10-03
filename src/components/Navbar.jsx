import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-purple-600">farmwell</h1>
      <ul className="flex space-x-6 text-gray-700 font-medium">
        <li><Link to="/" className="hover:text-purple-500">About</Link></li>
        <li><Link to="/services" className="hover:text-purple-500">Services</Link></li>
        <li><a href="#contact" className="hover:text-purple-500">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
