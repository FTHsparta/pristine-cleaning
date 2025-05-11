import React, { useState } from 'react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Window Cleaning',
    date: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // For now, log the form data to the console
    alert('Booking Submitted');
  };

  return (
    <section id="book" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">Book a Service</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-lg">Full Name</label>
            <input
              type="text"
              id="name"
              className="p-2 border border-gray-300 rounded-md"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-lg">Email</label>
            <input
              type="email"
              id="email"
              className="p-2 border border-gray-300 rounded-md"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="service" className="text-lg">Select Service</label>
            <select
              id="service"
              className="p-2 border border-gray-300 rounded-md"
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            >
              <option value="Window Cleaning">Window Cleaning</option>
              <option value="Car Detailing">Car Detailing</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="date" className="text-lg">Preferred Date</label>
            <input
              type="date"
              id="date"
              className="p-2 border border-gray-300 rounded-md"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-md mt-4">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;
