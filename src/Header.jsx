import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <nav className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">Pristine Cleaning</div>
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
