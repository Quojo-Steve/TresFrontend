import React, { useEffect, useRef, useState } from "react";

const MostPopularServices = () => {
	const [isVisible, setIsVisible] = useState(false);
	const sectionRef = useRef(null);

	const services = [
		{
			name: "Deep Cleaning",
			color: "rgba(255, 221, 193, 0.7)",
			size: "160px",
		},
		{
			name: "General Cleaning",
			color: "rgba(212, 241, 244, 0.7)",
			size: "140px",
		},
		{
			name: "Carpet Cleaning",
			color: "rgba(240, 230, 140, 0.7)",
			size: "180px",
		},
		{
			name: "Window Cleaning",
			color: "rgba(230, 230, 250, 0.7)",
			size: "150px",
		},
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
		<div className="text-center py-20 px-5 bg-gradient-to-br from-white to-white">
			<div ref={sectionRef}>
				<div
					className={`transition-all duration-1000 ease-out transform ${
						isVisible
							? "translate-y-0 opacity-100"
							: "translate-y-8 opacity-0"
					}`}
				>
					<h2 className="text-4xl font-bold text-gray-800 mb-12 relative inline-block after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-20 after:h-1 after:bg-blue-600 after:rounded-full">
						Most Popular Services
					</h2>
				</div>
				<div className="flex flex-wrap justify-center items-center gap-10 max-w-4xl mx-auto [perspective:1000px]">
					{services.map((service, index) => (
						<div
							key={index}
							className={`
                rounded-full flex justify-center items-center text-center font-semibold text-gray-800 
                transition-all duration-500 ease-out transform 
                backdrop-blur-lg bg-opacity-70 border border-white/30
                shadow-lg hover:shadow-2xl hover:scale-110 hover:rotate-0 hover:z-10 hover:text-blue-900
                ${
					isVisible
						? "opacity-100 translate-y-0"
						: "opacity-0 translate-y-8"
				}
                relative overflow-hidden group
                before:content-[''] before:absolute before:top-[-10%] before:left-[-10%] 
                before:w-[120%] before:h-[120%] before:bg-gradient-radial 
                before:from-white/80 before:to-transparent before:opacity-60 before:z-[-1]
              `}
							style={{
								backgroundColor: service.color,
								width: service.size,
								height: service.size,
								transitionDelay: `${index * 150}ms`,
								transform: `rotate(${
									index % 2 === 0 ? "-3deg" : "2deg"
								})`,
							}}
						>
							<div className="p-5 z-[2] relative">
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
