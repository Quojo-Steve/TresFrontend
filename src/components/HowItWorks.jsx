import React, { useState, useEffect } from "react";
import {
  MdSchedule,
  MdCleaningServices,
  MdHome,
  MdRefresh,
} from "react-icons/md";
import "./OurServices.css"; // for hide-scrollbar

const steps = [
  {
    title: "Book a Service",
    description:
      "Schedule your cleaning online or by phone at your convenience.",
    icon: <MdSchedule className="text-3xl text-white" />,
  },
  {
    title: "We Clean",
    description: "Our professional team arrives on time and gets to work.",
    icon: <MdCleaningServices className="text-3xl text-white" />,
  },
  {
    title: "Enjoy Your Space",
    description: "Relax and enjoy your freshly cleaned home or office.",
    icon: <MdHome className="text-3xl text-white" />,
  },
  {
    title: "Repeat as Needed",
    description: "Book recurring cleanings for ongoing peace of mind.",
    icon: <MdRefresh className="text-3xl text-white" />,
  },
];

const HowItWorks = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 bg-white text-center">
      <div
        className={`transition-all duration-1000 ease-out transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-4 section-title">
          How It Works
        </h2>
        <p className="text-gray-500 mb-10 max-w-xl mx-auto">
          Our simple process makes it easy to get your space sparkling clean.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 px-4 max-w-6xl mx-auto">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className={`w-full bg-white rounded-xl p-4 md:p-6 border border-blue-500 shadow-2xl hover:scale-105 transition-all duration-700 ease-out group overflow-hidden break-words transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
            style={{
              transitionDelay: `${idx * 200}ms`,
            }}
          >
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {step.title}
            </h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
