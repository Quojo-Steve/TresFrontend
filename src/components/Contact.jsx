import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
// Import images
import cli1 from "../../src/images/cl1.jpg";
import cli2 from "../../src/images/cl2.jpg";

const Contact = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		// Trigger animation after component mounts
		const timer = setTimeout(() => setIsVisible(true), 100);
		return () => clearTimeout(timer);
	}, []);

	return (
		<section className="bg-gray-100 py-16 px-4 md:px-8">
			<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
				{/* Contact Form */}
				<div
					className={`bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-1000 ease-out transform ${
						isVisible
							? "translate-y-0 opacity-100"
							: "translate-y-8 opacity-0"
					}`}
				>
					<h2 className="text-3xl font-bold text-blue-700 mb-3">
						Let's Talk
					</h2>
					<p className="text-gray-600 mb-6">
						Get in touch with us for top-tier cleaning services. We
						respond within 24 hours.
					</p>
					<form className="space-y-5">
						<div
							className={`transition-all duration-700 ease-out transform ${
								isVisible
									? "translate-y-0 opacity-100"
									: "translate-y-4 opacity-0"
							}`}
							style={{ transitionDelay: "200ms" }}
						>
							<label className="block text-sm text-gray-700 font-medium mb-1">
								Full Name
							</label>
							<input
								type="text"
								placeholder="Your Name"
								className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
							/>
						</div>
						<div
							className={`transition-all duration-700 ease-out transform ${
								isVisible
									? "translate-y-0 opacity-100"
									: "translate-y-4 opacity-0"
							}`}
							style={{ transitionDelay: "400ms" }}
						>
							<label className="block text-sm text-gray-700 font-medium mb-1">
								Email
							</label>
							<input
								type="email"
								placeholder="you@example.com"
								className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
							/>
						</div>
						<div
							className={`transition-all duration-700 ease-out transform ${
								isVisible
									? "translate-y-0 opacity-100"
									: "translate-y-4 opacity-0"
							}`}
							style={{ transitionDelay: "600ms" }}
						>
							<label className="block text-sm text-gray-700 font-medium mb-1">
								Message
							</label>
							<textarea
								rows="4"
								placeholder="Your message here..."
								className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
							/>
						</div>
						<div
							className={`transition-all duration-700 ease-out transform ${
								isVisible
									? "translate-y-0 opacity-100"
									: "translate-y-4 opacity-0"
							}`}
							style={{ transitionDelay: "800ms" }}
						>
							<button
								type="submit"
								className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-700 transition duration-200"
							>
								Send Message
							</button>
						</div>
					</form>
				</div>

				{/* Info + Images + Map */}
				<div className="space-y-6">
					{/* Image Grid */}
					<div
						className={`transition-all duration-1000 ease-out transform ${
							isVisible
								? "translate-y-0 opacity-100"
								: "translate-y-8 opacity-0"
						}`}
						style={{ transitionDelay: "300ms" }}
					>
						<div className="grid grid-cols-2 gap-4">
							<img
								src={cli1}
								alt="Professional Cleaning Staff"
								className="rounded-lg shadow-md object-cover h-40 w-full hover:scale-105 transition-transform duration-300 cursor-pointer"
							/>
							<img
								src={cli2}
								alt="Cleaning Service in Action"
								className="rounded-lg shadow-md object-cover h-40 w-full hover:scale-105 transition-transform duration-300 cursor-pointer"
							/>
						</div>
					</div>

					{/* Contact Info */}
					<div
						className={`bg-white p-6 rounded-xl shadow-md transition-all duration-1000 ease-out transform ${
							isVisible
								? "translate-y-0 opacity-100"
								: "translate-y-8 opacity-0"
						}`}
						style={{ transitionDelay: "500ms" }}
					>
						<h3 className="text-xl font-bold text-gray-800 mb-4">
							Contact Details
						</h3>
						<ul className="space-y-4 text-gray-700">
							<li className="flex items-start gap-3">
								<FaMapMarkerAlt className="text-blue-600 mt-1" />
								123 Clean Street, Ho - Volta Region, Ghana
							</li>
							<li className="flex items-start gap-3">
								<FaPhoneAlt className="text-blue-600 mt-1" />
								+233 50 123 4567
							</li>
							<li className="flex items-start gap-3">
								<FaEnvelope className="text-blue-600 mt-1" />
								info@sparkleprocleaning.com
							</li>
						</ul>
					</div>

					{/* Map */}
					<div
						className={`rounded-xl overflow-hidden shadow-md transition-all duration-1000 ease-out transform ${
							isVisible
								? "translate-y-0 opacity-100"
								: "translate-y-8 opacity-0"
						}`}
						style={{ transitionDelay: "700ms" }}
					>
						<iframe
							title="Our Location"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.8056406675864!2d-0.5555856852366383!3d5.550474495976202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdc9a4c5c8651e8%3A0xc6f3c29ec9cfb134!2sHo%20Technical%20University!5e0!3m2!1sen!2sgh!4v1626252525384!5m2!1sen!2sgh"
							width="100%"
							height="300"
							allowFullScreen=""
							loading="lazy"
							className="w-full h-72 border-0"
						></iframe>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
