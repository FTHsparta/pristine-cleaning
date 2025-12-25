import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md" style={{height: '9rem'}}>
      <nav className="max-w-6xl mx-auto flex justify-between items-center h-full" style={{height: '100%'}}>
        <img src="/assets/Logo.png" alt="Pristine Cleaning Logo" className="w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 object-contain" />
        <ul className="flex space-x-4">
          <li><a href="#home" className="hover:underline">Home</a></li>
          <li><a href="#services" className="hover:underline">Services</a></li>
          <li><a href="#book" className="hover:underline">Book Now</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
