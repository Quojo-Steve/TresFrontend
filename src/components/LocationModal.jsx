import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px"
};

const center = {
  lat: 24.7136,
  lng: 46.6753
};

const LocationModal = ({ isOpen, onClose }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY"
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/20 bg-opacity-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-lg w-full max-w-3xl relative">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">Select Address</h2>
          <button onClick={onClose} className="text-xl">&times;</button>
        </div>

        <div className="p-4">
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={15}
            >
              {/* Add marker, drag, pin controls etc. here */}
              <div className="absolute inset-x-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
                <img src="/marker.png" alt="marker" className="w-8 h-8" />
              </div>
            </GoogleMap>
          ) : (
            <p>Loading map...</p>
          )}
        </div>

        <div className="p-4 border-t text-right">
          <button
            className="bg-sky-500 text-white px-4 py-2 rounded hover:bg-sky-600"
            onClick={onClose}
          >
            Confirm Pin Location
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationModal;
