import React, { useEffect, useRef, useState } from "react";
import "./MostPopularServices.css";

const MostPopularServices = () => {
	const [isVisible, setIsVisible] = useState(false);
	const sectionRef = useRef(null);

	const services = [
		{ name: "Deep Cleaning", size: "160px" },
		{ name: "General Cleaning", size: "140px" },
		{ name: "Carpet Cleaning", size: "180px" },
		{ name: "Window Cleaning", size: "150px" },
	];

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					setIsVisible(true);
				}
			},
			{
				threshold: 0.2,
				rootMargin: "50px",
			}
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => {
			if (sectionRef.current) {
				observer.unobserve(sectionRef.current);
			}
		};
	}, []);

	return (
		<div
			className="most-popular-services bg-cover bg-center"
			style={{
				backgroundImage: "url('/home-bg.jpg')",
				backgroundPosition: "center center",
				backgroundAttachment: "fixed"
			}}
		>
			<div ref={sectionRef}>
				<div
					className={`transition-all duration-1000 ease-out transform ${
						isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
					}`}
				>
					<h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-center text-white mb-12 px-4 drop-shadow-md">
						Most <span className="text-sky-300">Popular Services</span>
					</h2>
				</div>
				<div className="services-container">
					{services.map((service, index) => (
						<div
							key={index}
							className={`service-bubble${isVisible ? " fade-in" : ""}`}
							style={{
								width: service.size,
								height: service.size,
								transitionDelay: `${index * 150}ms`,
								transform: `rotate(${index % 2 === 0 ? "-3deg" : "2deg"})`,
								// No backgroundColor, let CSS handle the glassmorphism
							}}
						>
							<div className="bubble-content">
								{service.name}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default MostPopularServices;
