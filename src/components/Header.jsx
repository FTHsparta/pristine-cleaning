import React from 'react';

export default function Header() {
  return (
    <header className="bg-blue-700 text-white shadow-md sticky top-0 z-50 h-28 md:h-36">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-3 h-full">
        <img src="/assets/Logo.png" alt="Pristine Cleaning Logo" className="w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 object-contain" style={{width: 'auto'}} />
        <div className="space-x-3">
          <a href="tel:1234567890" className="hover:underline">📞 (123) 456-7890</a>
          <a href="mailto:info@pristinecleaning.com" className="hover:underline">✉️ info@pristinecleaning.com</a>
          <a href="#quote" className="bg-white text-blue-700 px-2 py-0.5 rounded-xl font-semibold hover:bg-blue-100 transition-all">
            Get Free Quote
          </a>
        </div>
      </div>
    </header>
  );
}
