import React, { useEffect, useRef } from 'react';
import './MostPopularServices.css';

const MostPopularServices = () => {
  const services = [
    { name: 'Deep Cleaning', color: '#FFDDC1' },
    { name: 'General Cleaning', color: '#D4F1F4' },
    { name: 'Carpet Cleaning', color: '#F0E68C' },
    { name: 'Window Cleaning', color: '#E6E6FA' },
  ];

  const servicesRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentServices = servicesRef.current;

    currentServices.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      currentServices.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <div className="most-popular-services">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">
        Most Popular Services</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div
            key={index}
            ref={(el) => (servicesRef.current[index] = el)}
            className="service-bubble"
            style={{ backgroundColor: service.color }}
          >
            {service.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostPopularServices;
