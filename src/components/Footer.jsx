
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-10 pb-6 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-bold mb-2">SHEILA Cleaning Services</h3>
          <p className="text-gray-400 mb-4">
            Professional cleaning services that make your space shine. Serving homes and businesses with care.
          </p>
          <div className="space-y-2 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <FaPhone className="text-sky-400" />
              <span>+971 50 123 4567</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-sky-400" />
              <span>info@sheilacleaningservices.com</span>
            </div>
            <div className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-sky-400 mt-1" />
              <span>Dubai, United Arab Emirates</span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link to="/" className="hover:text-sky-400 transition">Home</Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-sky-400 transition">Services</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-sky-400 transition">Contact</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-sky-400 transition">About</Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Our Services</h4>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link to="/residential-cleaning" className="hover:text-sky-400 transition">Residential Cleaning</Link>
            </li>
            <li>
              <Link to="/commercial-cleaning" className="hover:text-sky-400 transition">Commercial Cleaning</Link>
            </li>
            <li>
              <Link to="/move-in-out" className="hover:text-sky-400 transition">Move-in/Move-out</Link>
            </li>
            <li>
              <Link to="/deep-cleaning" className="hover:text-sky-400 transition">Deep Cleaning</Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
          <div className="flex space-x-4 text-gray-300 mb-4">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition p-2 hover:bg-gray-800 rounded-full"
              aria-label="Follow us on Facebook"
            >
              <FaFacebookF />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition p-2 hover:bg-gray-800 rounded-full"
              aria-label="Follow us on Twitter"
            >
              <FaTwitter />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition p-2 hover:bg-gray-800 rounded-full"
              aria-label="Follow us on Instagram"
            >
              <FaInstagram />
            </a>
          </div>
          <div className="text-sm text-gray-400">
            <p className="mb-1">Business Hours:</p>
            <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
            <p>Sat: 9:00 AM - 4:00 PM</p>
            <p>Sun: Closed</p>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} SHEILA Cleaning Services. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
