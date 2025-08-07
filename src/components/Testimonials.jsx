import React, { useState, useEffect, useRef } from "react";
import "./OurServices.css"; // for hide-scrollbar

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const marqueeRef = useRef(null);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const cardsData = [
    {
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
      name: "Briar Martin",
      handle: "@briar_cleans",
      date: "April 20, 2025",
      feedback:
        "Fantastic service! My house has never been cleaner. The team was professional and thorough.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
      name: "Avery Johnson",
      handle: "@avery_home",
      date: "May 10, 2025",
      feedback:
        "Professional and reliable. Highly recommend to anyone! They transformed my messy apartment.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60",
      name: "Jordan Lee",
      handle: "@jordan_office",
      date: "June 5, 2025",
      feedback:
        "Great attention to detail and friendly staff. Our office looks brand new!",
    },
    {
      image:
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60",
      name: "Sarah Kim",
      handle: "@sarah_clean",
      date: "May 10, 2025",
      feedback:
        "Quick, efficient, and left my office spotless. Will definitely use again!",
    },
  ];

  const handleImageError = (e) => {
    e.target.src = "/profile.jpg"; // fallback to local image
  };

  const CreateCard = ({ card }) => (
    <div className="p-4 rounded-lg mx-4 shadow-2xl hover:shadow-2xl transition-all duration-200 w-72 shrink-0 bg-white relative">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 to-transparent opacity-30 rounded-lg"></div>
      <div className="relative z-10">
        <div className="flex gap-2">
          <img
            className="size-11 rounded-full"
            src={card.image}
            alt={`${card.name}'s profile`}
            onError={handleImageError}
          />
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <p className="font-semibold text-gray-800">{card.name}</p>
              <svg
                aria-label="Verified customer"
                className="mt-0.5"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.555.72a4 4 0 0 1-.297.24c-.179.12-.38.202-.59.244a4 4 0 0 1-.38.041c-.48.039-.721.058-.922.129a1.63 1.63 0 0 0-.992.992c-.071.2-.09.441-.129.922a4 4 0 0 1-.041.38 1.6 1.6 0 0 1-.245.59 3 3 0 0 1-.239.297c-.313.368-.47.551-.56.743-.213.444-.213.96 0 1.404.09.192.247.375.56.743.125.146.187.219.24.297.12.179.202.38.244.59.018.093.026.189.041.38.039.48.058.721.129.922.163.464.528.829.992.992.2.071.441.09.922.129.191.015.287.023.38.041.21.042.411.125.59.245.078.052.151.114.297.239.368.313.551.47.743.56.444.213.96.213 1.404 0 .192-.09.375-.247.743-.56.146-.125.219-.187.297-.24.179-.12.38-.202.59-.244a4 4 0 0 1 .38-.041c.48-.039.721-.058.922-.129.464-.163.829-.528.992-.992.071-.2.09-.441.129-.922a4 4 0 0 1 .041-.38c.042-.21.125-.411.245-.59.052-.078.114-.151.239-.297.313-.368.47-.551.56-.743.213-.444.213-.96 0-1.404-.09-.192-.247-.375-.56-.743a4 4 0 0 1-.24-.297 1.6 1.6 0 0 1-.244-.59 3 3 0 0 1-.041-.38c-.039-.48-.058-.721-.129-.922a1.63 1.63 0 0 0-.992-.992c-.2-.071-.441-.09-.922-.129a4 4 0 0 1-.38-.041 1.6 1.6 0 0 1-.59-.245A3 3 0 0 1 7.445.72C7.077.407 6.894.25 6.702.16a1.63 1.63 0 0 0-1.404 0c-.192.09-.375.247-.743.56m4.07 3.998a.488.488 0 0 0-.691-.69l-2.91 2.91-.958-.957a.488.488 0 0 0-.69.69l1.302 1.302c.19.191.5.191.69 0z"
                  fill="#38bdf8"/>
              </svg>
            </div>
            <span className="text-xs text-slate-500">{card.handle}</span>
          </div>
        </div>
        <p className="text-sm py-4 text-gray-800 italic">"{card.feedback}"</p>
        <div className="flex items-center justify-between text-slate-500 text-xs">
          <div className="flex items-center gap-1">
            <span>Posted on</span>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-500"
              aria-label="View on X (Twitter)"
            >
              <svg
                width="11"
                height="10"
                viewBox="0 0 11 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="m.027 0 4.247 5.516L0 10h.962l3.742-3.926L7.727 10H11L6.514 4.174 10.492 0H9.53L6.084 3.616 3.3 0zM1.44.688h1.504l6.64 8.624H8.082z"
                  fill="#38bdf8"
                />
              </svg>
            </a>
          </div>
          <p>{card.date}</p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-16 bg-white text-center">
      <div
        className={`transition-all duration-1000 ease-out transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          What Our Customers Say
        </h2>
        <p className="text-gray-500 mb-10 max-w-xl mx-auto">
          Real feedback from our happy clients.
        </p>
      </div>
      <div className={`transition-all duration-1000 ease-out transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      }`}
        style={{ transitionDelay: "300ms" }}
      >
        <div
          className="marquee-row w-full mx-auto max-w-5xl overflow-hidden relative group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent"></div>
          <div
            className={`marquee-inner flex transform-gpu min-w-[200%] pt-10 pb-5${isPaused ? " paused" : ""}`}
            ref={marqueeRef}
            aria-live="off"
            tabIndex={0}
          >
            {[...cardsData, ...cardsData].map((card, index) => (
              <CreateCard key={index} card={card} />
            ))}
          </div>
          <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>
        </div>
        <div
          className="marquee-row w-full mx-auto max-w-5xl overflow-hidden relative group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent"></div>
          <div
            className={`marquee-inner marquee-reverse flex transform-gpu min-w-[200%] pt-10 pb-5${isPaused ? " paused" : ""}`}
            aria-live="off"
            tabIndex={0}
          >
            {[...cardsData, ...cardsData].map((card, index) => (
              <CreateCard key={index} card={card} />
            ))}
          </div>
          <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>
        </div>
      </div>
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .marquee-inner {
          animation: marqueeScroll 25s linear infinite;
        }
        .marquee-reverse {
          animation-direction: reverse;
        }
        .marquee-inner.paused {
          animation-play-state: paused !important;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
