import { Link } from "react-router-dom";
import logo2 from "../assets/logo2.png";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import profile from "../assets/profile.jpg";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navbarRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsServicesOpen(false);
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav 
      className="bg-white shadow-sm py-3 px-4 sm:px-16 flex items-center justify-between relative"
      ref={navbarRef}
    >
      {/* Logo on the left */}
      <div className="flex items-center">
        <Link to="/">
          <img 
            src={logo2} 
            alt="Company Logo" 
            className="h-12 sm:h-16 object-contain" 
          />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-6">
        {/* Services Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsServicesOpen(!isServicesOpen)}
            className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition-colors"
          >
            <span>Services</span>
            <svg
              className={`w-4 h-4 transition-transform ${
                isServicesOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {isServicesOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20 border border-gray-100">
              <Link
                to="/service-1"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => setIsServicesOpen(false)}
              >
                Service 1
              </Link>
              <Link
                to="/service-2"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => setIsServicesOpen(false)}
              >
                Service 2
              </Link>
              <Link
                to="/service-3"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => setIsServicesOpen(false)}
              >
                Service 3
              </Link>
            </div>
          )}
        </div>

        {/* Profile section */}
        <div className="flex items-center gap-4 border border-gray-300 rounded-2xl p-1">
          <div className="relative">
            <img
              src={profile}
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover border-2 border-gray-200 cursor-pointer"
            />
          </div>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-1"
          >
            <RxHamburgerMenu size={20} className="font-bold text-gray-600" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Button (visible only on mobile) */}
      <button 
        className="md:hidden p-2 text-gray-600"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? (
          <RxCross1 size={24} />
        ) : (
          <RxHamburgerMenu size={24} />
        )}
      </button>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full right-0 left-0 md:left-auto md:right-0 md:w-64 bg-white shadow-lg rounded-b-lg z-30 border border-gray-200 md:mt-2">
          <div className="p-4 border-b border-gray-200">
            <h3 className="font-semibold text-gray-700 mb-2">Services</h3>
            <div className="flex flex-col">
              <Link
                to="/service-1"
                className="px-3 py-2 text-gray-600 hover:bg-gray-50 rounded"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Service 1
              </Link>
              <Link
                to="/service-2"
                className="px-3 py-2 text-gray-600 hover:bg-gray-50 rounded"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Service 2
              </Link>
              <Link
                to="/service-3"
                className="px-3 py-2 text-gray-600 hover:bg-gray-50 rounded"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Service 3
              </Link>
            </div>
          </div>
          <div className="p-4">
            <Link
              to="/login"
              className="block w-full text-center bg-blue-600 text-white py-2 px-4 rounded-lg mb-2 hover:bg-blue-700 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="block w-full text-center border border-blue-600 text-blue-600 py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}