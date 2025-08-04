import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
          <h2 className="text-3xl font-bold text-blue-700 mb-3">Let's Talk</h2>
          <p className="text-gray-600 mb-6">
            Get in touch with us for top-tier cleaning services. We respond within 24 hours.
          </p>
          <form className="space-y-5">
            <div>
              <label className="block text-sm text-gray-700 font-medium mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 font-medium mb-1">Message</label>
              <textarea
                rows="4"
                placeholder="Your message here..."
                className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-700 transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Info + Images + Map */}
        <div className="space-y-6">
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="../../public/images/cl1.jpg"
              alt="Worker 1"
              className="rounded-lg shadow-md object-cover h-40 w-full"
              />
            <img
              src="../../public/images/cl2.jpg"
              alt="Worker 2"
              className="rounded-lg shadow-md object-cover h-40 w-full"
            />
          </div>

          {/* Contact Info */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Details</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-blue-600 mt-1" />
                123 Clean Street, Ho - Volta Region, Ghana
              </li>
              <li className="flex items-start gap-3">
                <FaPhoneAlt className="text-blue-600 mt-1" />
                +233 50 123 4567
              </li>
              <li className="flex items-start gap-3">
                <FaEnvelope className="text-blue-600 mt-1" />
                info@sparkleprocleaning.com
              </li>
            </ul>
          </div>

          {/* Map */}
          <div className="rounded-xl overflow-hidden shadow-md">
            <iframe
              title="Our Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.8056406675864!2d-0.5555856852366383!3d5.550474495976202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdc9a4c5c8651e8%3A0xc6f3c29ec9cfb134!2sHo%20Technical%20University!5e0!3m2!1sen!2sgh!4v1626252525384!5m2!1sen!2sgh"
              width="100%"
              height="300"
              allowFullScreen=""
              loading="lazy"
              className="w-full h-72 border-0"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
