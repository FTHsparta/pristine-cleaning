import React from 'react';

const Services = () => {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-bold">Window Cleaning</h3>
            <p className="mt-4">We provide professional window cleaning services to make your windows sparkle.</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-bold">Car Detailing</h3>
            <p className="mt-4">Our car detailing service includes cleaning, polishing, and more to make your car shine.</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-bold">Pressure Washing</h3>
            <p className="mt-4">We offer pressure washing services to clean your driveway, patios, and exterior walls.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
