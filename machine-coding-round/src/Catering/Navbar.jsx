// src/components/Navbar.js
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="z-20 fixed bg-yellow-600 py-4 w-full text-white">
      <div className="flex justify-between items-center mx-auto px-4 container">
        <a href="#" className="font-bold text-2xl">Catering Services</a>
        <button onClick={toggleMenu} className="block md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
        <ul className={`md:flex space-x-4 ${isOpen ? 'block' : 'hidden'} md:block`}>
          <li><a href="#hero" className="nav-link">Home</a></li>
          <li><a href="#menu" className="nav-link">Menu</a></li>
          <li><a href="#about" className="nav-link">About Us</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
