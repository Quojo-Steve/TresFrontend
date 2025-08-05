import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineMyLocation } from "react-icons/md";
import LocationModal from "../components/LocationModal"; // adjust path if needed

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className="bg-cover bg-center min-h-[70vh] flex items-center justify-center px-4 py-16"
        style={{ 
          backgroundImage: "url('/home-bg.jpg')",
          backgroundPosition: "center center",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="flex flex-col justify-center items-center w-full max-w-6xl mx-auto">
          <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-center text-white mb-8 px-4 drop-shadow-md">
            #1 Cleaning Service for <span className="text-sky-300">All Home Services</span>
          </h1>

          <div className="bg-white p-5 sm:p-7 rounded-xl w-full max-w-3xl shadow-xl">
            <h2 className="font-semibold text-lg sm:text-xl mb-4 text-gray-800">
              Where would you like to receive your service?
            </h2>

            <div className="flex items-stretch justify-between rounded-full overflow-hidden border border-gray-300">
              <div className="flex items-center flex-grow min-w-[200px] py-3 pl-4 pr-2">
                <FaLocationDot size={20} className="mr-2 text-gray-500 hidden md:block" />
                <input
                  className="w-full focus:outline-none placeholder-gray-400"
                  type="text"
                  placeholder="Search for area, street name, landmark..."
                />
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="flex items-center justify-center gap-2 text-sky-500 hover:text-sky-600 text-sm font-semibold bg-sky-100 hover:bg-sky-200 transition-colors lg:px-4 px-2 py-3 whitespace-nowrap"
              >
                <span>Set my location</span>
                <MdOutlineMyLocation size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Location Modal */}
      <LocationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Home;
