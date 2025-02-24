"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Plane, Hotel, Mountain, Globe, Shield, CalendarCheck, ChevronDown } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Flight Bookings",
    description: "We offer the best deals on domestic and international flight bookings.",
    icon: <Plane size={40} className="text-blue-600" />,
  },
  {
    id: 2,
    title: "Hotel Reservations",
    description: "Book comfortable stays at top-rated hotels around the world.",
    icon: <Hotel size={40} className="text-green-600" />,
  },
  {
    id: 3,
    title: "Holiday Packages",
    description: "Enjoy exclusive tour packages for all kinds of travelers.",
    icon: <CalendarCheck size={40} className="text-yellow-600" />,
  },
  {
    id: 4,
    title: "Adventure Tours",
    description: "Experience thrilling adventure tours with professional guides.",
    icon: <Mountain size={40} className="text-red-600" />,
  },
  {
    id: 5,
    title: "Visa Assistance",
    description: "Hassle-free visa services for all major travel destinations.",
    icon: <Globe size={40} className="text-purple-600" />,
  },
  {
    id: 6,
    title: "Travel Insurance",
    description: "Get insured for a safe and secure travel experience.",
    icon: <Shield size={40} className="text-gray-600" />,
  },
];

export default function Services() {
  const servicesRef = useRef(null);

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/Himalayan-Holidays-to-Nepal.jpg')" }} // Change to your actual image path
      >
        <div className="absolute inset-0 bg-black/50 md:bg-black/60"></div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative text-center text-white px-6 sm:px-8 lg:px-12"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wide">
            Our Services
          </h1>
          <p className="mt-4 sm:mt-5 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Explore our wide range of travel services designed to make your journey seamless and enjoyable.
          </p>
        </motion.div>

        {/* Scroll Down Icon */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={scrollToServices}
          initial={{ y: 0 }}
          animate={{ y: 10 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown size={50} className="text-white opacity-80 hover:opacity-100 transition" />
        </motion.div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-gray-800">What We Offer</h2>
          <p className="text-gray-600 text-lg mt-4">
            From flights to adventure tours, we provide a comprehensive range of services.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 px-4 lg:px-10">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="p-4 bg-gray-100 rounded-full">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-800 mt-4">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
