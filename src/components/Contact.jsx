import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
// Import images
import cli1 from "../../src/images/cl1.jpg";
import cli2 from "../../src/images/cl2.jpg";

const Contact = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: ""
	});
	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

	useEffect(() => {
		// Trigger animation after component mounts
		const timer = setTimeout(() => setIsVisible(true), 100);
		return () => clearTimeout(timer);
	}, []);

	const validateForm = () => {
		const newErrors = {};

		if (!formData.name.trim()) {
			newErrors.name = "Name is required";
		} else if (formData.name.trim().length < 2) {
			newErrors.name = "Name must be at least 2 characters";
		}

		if (!formData.email.trim()) {
			newErrors.email = "Email is required";
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			newErrors.email = "Please enter a valid email address";
		}

		if (!formData.message.trim()) {
			newErrors.message = "Message is required";
		} else if (formData.message.trim().length < 10) {
			newErrors.message = "Message must be at least 10 characters";
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value
		}));
		// Clear error when user starts typing
		if (errors[name]) {
			setErrors(prev => ({
				...prev,
				[name]: ""
			}));
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		
		if (!validateForm()) {
			return;
		}

		setIsSubmitting(true);
		
		// Simulate form submission (since no backend)
		setTimeout(() => {
			setIsSubmitting(false);
			setSubmitStatus('success');
			setFormData({ name: "", email: "", message: "" });
			
			// Reset success message after 5 seconds
			setTimeout(() => setSubmitStatus(null), 5000);
		}, 2000);
	};

	const handleImageError = (e) => {
		e.target.src = "/profile.jpg"; // fallback image
	};

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
					<h2 className="text-3xl font-bold text-sky-700 mb-3">
						Let's Talk
					</h2>
					<p className="text-gray-600 mb-6">
						Get in touch with us for top-tier cleaning services. We
						respond within 24 hours.
					</p>

					{/* Success/Error Messages */}
					{submitStatus === 'success' && (
						<div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
							<p className="text-green-800 font-medium">
								✅ Message sent successfully! We'll get back to you within 24 hours.
							</p>
						</div>
					)}

					<form onSubmit={handleSubmit} className="space-y-5">
						<div
							className={`transition-all duration-700 ease-out transform ${
								isVisible
									? "translate-y-0 opacity-100"
									: "translate-y-4 opacity-0"
							}`}
							style={{ transitionDelay: "200ms" }}
						>
							<label htmlFor="name" className="block text-sm text-gray-700 font-medium mb-1">
								Full Name <span className="text-red-500">*</span>
							</label>
							<input
								id="name"
								name="name"
								type="text"
								value={formData.name}
								onChange={handleInputChange}
								placeholder="Your Name"
								className={`w-full px-4 py-3 border rounded-md shadow-sm focus:ring-2 focus:ring-sky-500 focus:outline-none transition ${
									errors.name ? 'border-red-300 focus:border-red-500' : 'border-gray-300 focus:border-sky-500'
								}`}
								aria-describedby={errors.name ? "name-error" : undefined}
							/>
							{errors.name && (
								<p id="name-error" className="mt-1 text-sm text-red-600">
									{errors.name}
								</p>
							)}
						</div>

						<div
							className={`transition-all duration-700 ease-out transform ${
								isVisible
									? "translate-y-0 opacity-100"
									: "translate-y-4 opacity-0"
							}`}
							style={{ transitionDelay: "400ms" }}
						>
							<label htmlFor="email" className="block text-sm text-gray-700 font-medium mb-1">
								Email <span className="text-red-500">*</span>
							</label>
							<input
								id="email"
								name="email"
								type="email"
								value={formData.email}
								onChange={handleInputChange}
								placeholder="you@example.com"
								className={`w-full px-4 py-3 border rounded-md shadow-sm focus:ring-2 focus:ring-sky-500 focus:outline-none transition ${
									errors.email ? 'border-red-300 focus:border-red-500' : 'border-gray-300 focus:border-sky-500'
								}`}
								aria-describedby={errors.email ? "email-error" : undefined}
							/>
							{errors.email && (
								<p id="email-error" className="mt-1 text-sm text-red-600">
									{errors.email}
								</p>
							)}
						</div>

						<div
							className={`transition-all duration-700 ease-out transform ${
								isVisible
									? "translate-y-0 opacity-100"
									: "translate-y-4 opacity-0"
							}`}
							style={{ transitionDelay: "600ms" }}
						>
							<label htmlFor="message" className="block text-sm text-gray-700 font-medium mb-1">
								Message <span className="text-red-500">*</span>
							</label>
							<textarea
								id="message"
								name="message"
								rows="4"
								value={formData.message}
								onChange={handleInputChange}
								placeholder="Your message here..."
								className={`w-full px-4 py-3 border rounded-md shadow-sm focus:ring-2 focus:ring-sky-500 focus:outline-none transition ${
									errors.message ? 'border-red-300 focus:border-red-500' : 'border-gray-300 focus:border-sky-500'
								}`}
								aria-describedby={errors.message ? "message-error" : undefined}
							/>
							{errors.message && (
								<p id="message-error" className="mt-1 text-sm text-red-600">
									{errors.message}
								</p>
							)}
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
								disabled={isSubmitting}
								className={`w-full font-semibold px-6 py-3 rounded-md transition duration-200 ${
									isSubmitting
										? 'bg-gray-400 cursor-not-allowed'
										: 'bg-sky-500 hover:bg-sky-600 text-white'
								}`}
							>
								{isSubmitting ? (
									<div className="flex items-center justify-center">
										<div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
										Sending...
									</div>
								) : (
									'Send Message'
								)}
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
								loading="lazy"
								onError={handleImageError}
							/>
							<img
								src={cli2}
								alt="Cleaning Service in Action"
								className="rounded-lg shadow-md object-cover h-40 w-full hover:scale-105 transition-transform duration-300 cursor-pointer"
								loading="lazy"
								onError={handleImageError}
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
								<FaMapMarkerAlt className="text-sky-600 mt-1" />
								Dubai, United Arab Emirates
							</li>
							<li className="flex items-start gap-3">
								<FaPhoneAlt className="text-sky-600 mt-1" />
								+971 50 123 4567
							</li>
							<li className="flex items-start gap-3">
								<FaEnvelope className="text-sky-600 mt-1" />
								info@sheilacleaningservices.com
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
							title="Our Location in Dubai"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28847.975477!2d55.2708!3d25.2048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1234567890!5m2!1sen!2s"
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
