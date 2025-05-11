import React from 'react';
import beforeImg from '../assets/before.jpg';  // Adjust the path if needed
import afterImg from '../assets/after.jpg';    // Adjust the path if needed

const BeforeAfter = () => {
  return (
    <section id="before-after" className="py-16 bg-blue-50" data-aos="fade-up" data-aos-delay="300">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold text-blue-600">Before and After</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
          <div className="before-after-item" data-aos="fade-up" data-aos-delay="400">
            <img src={beforeImg} alt="Before" className="w-full h-auto rounded-lg shadow-lg" />
            <p className="mt-4 text-lg text-gray-600">Before</p>
          </div>
          <div className="before-after-item" data-aos="fade-up" data-aos-delay="500">
            <img src={afterImg} alt="After" className="w-full h-auto rounded-lg shadow-lg" />
            <p className="mt-4 text-lg text-gray-600">After</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;

