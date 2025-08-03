import React, { useEffect, useRef } from "react";
import { FaHome, FaBuilding } from "react-icons/fa";
import { MdWindow } from "react-icons/md";
import "./OurServices.css"; // for custom scrollbar-hiding CSS

const services = [
	{
		title: "Residential Cleaning",
		icon: (
			<FaHome className="text-5xl text-blue-500 group-hover:scale-90 transition-transform duration-300" />
		),
		features: [
			"Carpet Cleaning",
			"Hard Surface Cleaning",
			"Upholstery Cleaning",
		],
	},
	{
		title: "Window Cleaning",
		icon: (
			<MdWindow className="text-5xl text-blue-500 group-hover:scale-90 transition-transform duration-300" />
		),
		features: [
			"Carpet Cleaning",
			"Dust all furniture",
			"Hard surface floor cleaning",
		],
	},
	{
		title: "Residential Cleaning",
		icon: (
			<FaBuilding className="text-5xl text-blue-500 group-hover:scale-90 transition-transform duration-300" />
		),
		features: [
			"Hard Surface Cleaning",
			"Upholstery Cleaning",
			"Carpet Cleaning",
		],
	},
];

export default function OurServices() {
	const scrollRef = useRef(null);

	useEffect(() => {
		const container = scrollRef.current;
		let animationFrameId;

		const scroll = () => {
			if (container) {
				container.scrollLeft += 1;
				if (container.scrollLeft >= container.scrollWidth / 2) {
					container.scrollLeft = 0;
				}
				animationFrameId = requestAnimationFrame(scroll);
			}
		};

		animationFrameId = requestAnimationFrame(scroll);

		return () => cancelAnimationFrame(animationFrameId);
	}, []);

	return (
		<div className="py-16 bg-white text-center">
			<h2 className="text-4xl font-bold text-gray-800 mb-4">
				Our Cleaning Services
			</h2>
			<p className="text-gray-500 mb-10 max-w-xl mx-auto">
				Let us use our years of experience, skilled employees, and
				advanced procedures to ensure a clean and healthy environment
				for your employees, customers and guests.
			</p>

			<div
				ref={scrollRef}
				className="flex overflow-x-auto space-x-6 px-4 hide-scrollbar"
				style={{ scrollBehavior: "smooth", whiteSpace: "nowrap" }}
			>
				{[...services, ...services].map((service, index) => (
					<div
						key={index}
						className="flex-shrink-0 w-80 bg-white rounded-xl shadow-lg p-6 hover:scale-105 transition-transform duration-300 ease-in-out group"
					>
						<div className="flex justify-center items-center mb-4">
							{service.icon}
						</div>
						<h3 className="text-xl font-semibold text-gray-800 mb-4">
							{service.title}
						</h3>
						<ul className="text-gray-600 space-y-2 text-left px-4">
							{service.features.map((feature, idx) => (
								<li
									key={idx}
									className="flex items-center space-x-2"
								>
									<span className="text-blue-500">✓</span>
									<span>{feature}</span>
								</li>
							))}
						</ul>
						<button className="mt-6 border border-blue-500 text-blue-500 rounded-full px-4 py-2 hover:bg-blue-500 hover:text-white transition duration-300">
							Read More
						</button>
					</div>
				))}
			</div>
		</div>
	);
}
