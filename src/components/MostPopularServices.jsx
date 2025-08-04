import React, { useEffect, useRef } from 'react';
import './MostPopularServices.css';

const MostPopularServices = () => {
  const services = [
    { name: 'Deep Cleaning', color: 'rgba(255, 221, 193, 0.7)', size: '160px' },
    { name: 'General Cleaning', color: 'rgba(212, 241, 244, 0.7)', size: '140px' },
    { name: 'Carpet Cleaning', color: 'rgba(240, 230, 140, 0.7)', size: '180px' },
    { name: 'Window Cleaning', color: 'rgba(230, 230, 250, 0.7)', size: '150px' },
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
      <h2 className="section-title">Most Popular Services</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div
            key={index}
            ref={(el) => (servicesRef.current[index] = el)}
            className="service-bubble"
            style={{ 
              backgroundColor: service.color,
              width: service.size,
              height: service.size,
              // Staggered alignment
              alignSelf: index % 2 === 0 ? 'flex-start' : 'flex-end',
              // Random slight rotation
              transform: `rotate(${index % 2 === 0 ? '-3deg' : '2deg'})`
            }}
          >
            <div className="bubble-content">
              {service.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostPopularServices;