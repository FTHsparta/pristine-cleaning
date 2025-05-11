import React from 'react';

export default function Header() {
  return (
    <header className="bg-blue-700 text-white p-4 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Pristine Cleaning</h1>
        <div className="space-x-6">
          <a href="tel:1234567890" className="hover:underline">📞 (123) 456-7890</a>
          <a href="mailto:info@pristinecleaning.com" className="hover:underline">✉️ info@pristinecleaning.com</a>
          <a href="#quote" className="bg-white text-blue-700 px-4 py-2 rounded-xl font-semibold hover:bg-blue-100 transition-all">
            Get Free Quote
          </a>
        </div>
      </div>
    </header>
  );
}
