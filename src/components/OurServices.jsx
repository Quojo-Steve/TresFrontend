import React from "react";
import { FaHome, FaBuilding, FaBoxOpen } from "react-icons/fa";

const services = [
	{
		title: "Residential Cleaning",
		icon: (
			<FaHome className="text-5xl text-sky-300 group-hover:scale-90 transition-transform duration-300" />
		),
		features: [
			"Carpet Cleaning",
			"Hard Surface Cleaning",
			"Upholstery Cleaning",
		],
	},
	{
		title: "Move-in/Move-out Cleaning",
		icon: (
			<FaBoxOpen className="text-5xl text-sky-300 group-hover:scale-90 transition-transform duration-300" />
		),
		features: [
			"Deep Cleaning",
			"Cabinet & Appliance Cleaning",
			"Complete Floor Care",
		],
	},
	{
		title: "Commercial Cleaning",
		icon: (
			<FaBuilding className="text-5xl text-sky-300 group-hover:scale-90 transition-transform duration-300" />
		),
		features: [
			"Hard Surface Cleaning",
			"Upholstery Cleaning",
			"Carpet Cleaning",
		],
	},
];

export default function OurServices() {
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
				className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 max-w-6xl mx-auto place-items-center scrollbar-hide [scrollbar-width:none] [-ms-overflow-style:none]"
				aria-label="Our services"
			>
				{services.map((service, index) => (
					<div
						key={index}
						className="w-full max-w-sm bg-white rounded-xl shadow-lg p-6 hover:scale-105 transition-transform duration-300 ease-in-out group focus-within:ring-2 focus-within:ring-blue-400"
						tabIndex={0}
						aria-label={service.title}
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
									<span
										className="text-sky-300"
										aria-hidden="true"
									>
										✓
									</span>
									<span>{feature}</span>
								</li>
							))}
						</ul>
						<button
							className="mt-6 bg-sky-300 text-white rounded-full px-4 py-2 hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300 transition duration-300 shadow"
							aria-label={`Read more about ${service.title}`}
						>
							Read More
						</button>
					</div>
				))}
			</div>
		</div>
	);
}
