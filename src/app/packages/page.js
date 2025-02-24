"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { PhoneCall, ChevronDown, MapPin, Calendar, DollarSign } from "lucide-react";

const packages = [
  {
    id: 1,
    title: "Kailash Mansarovar Yatra Tour",
    image: "/Kailash-Mansarovar-Yatra.jpg",
    duration: "14 Days / 13 Nights",
    price: "$2,500",
    description: "A spiritually enriching journey to the holy Mount Kailash and Mansarovar Lake.",
    contact: "+91-8800750030",
    location: "Kathmandu, Nepal",
  },
  {
    id: 2,
    title: "Kailash Mansarovar Full Moon Tour",
    image: "/FullMoon.jpg",
    duration: "14 Days / 13 Nights",
    price: "$2,700",
    description: "Experience the divine energy of Mount Kailash under the full moon with a special yatra.",
    contact: "+91-8800750030",
    location: "Kathmandu, Nepal",
  },
  {
    id: 3,
    title: "Lhasa Kailash Tour",
    image: "/Lahasa.jpg",
    duration: "11 Days / 10 Nights",
    price: "$3,200",
    description: "Explore Tibet’s historic Lhasa city before heading to Mount Kailash and Mansarovar Lake.",
    contact: "+91-8800750030",
    location: "Lhasa, Tibet",
  },
  {
    id: 4,
    title: "Lhasa Ali Kailash Tour",
    image: "/kathmandu-lhasa.jpeg",
    duration: "13 Days / 12 Nights",
    price: "$3,500",
    description: "Visit Lhasa, Ali, and Mount Kailash with expert guides and comfortable accommodations.",
    contact: "+91-8800750030",
    location: "Lhasa, Tibet",
  },
  {
    id: 5,
    title: "Kailash Yatra Tour by Helicopter",
    image: "/helicopter kailash.jpeg",
    duration: "11 Days / 10 Nights",
    price: "$3,800",
    description: "A swift and luxurious helicopter journey to Mount Kailash and Mansarovar Lake.",
    contact: "+91-8800750030",
    location: "Kathmandu, Nepal",
  },
  {
    id: 6,
    title: "Fixed Departure Kailash Yatra",
    image: "/departure.jpg",
    duration: "14 Days / 13 Nights",
    price: "$2,900",
    description: "Join our fixed departure groups for a smooth and well-organized Kailash Yatra.",
    contact: "+91-8800750030",
    location: "Kathmandu, Nepal",
  },
];

export default function Packages() {
  const packagesRef = useRef(null);

  const scrollToPackages = () => {
    packagesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/Himalayan-Holidays-to-Nepal.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50 md:bg-black/60"></div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative text-center text-white px-6 sm:px-8 lg:px-12"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wide">
            Kailash Mansarovar Tour Packages
          </h1>
          <p className="mt-4 sm:mt-5 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Choose from our exclusive Kailash Mansarovar tour packages for a spiritual and adventurous journey.
          </p>
        </motion.div>

        {/* Scroll Down Icon */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={scrollToPackages}
          initial={{ y: 0 }}
          animate={{ y: 10 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown size={50} className="text-white opacity-80 hover:opacity-100 transition" />
        </motion.div>
      </section>

      {/* Packages Section */}
      <section ref={packagesRef} className="container mx-auto px-6 py-24 bg-white">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-gray-800">Our Packages</h2>
          <p className="text-gray-600 text-lg mt-4">
            Discover the best Kailash Mansarovar tour packages for an unforgettable experience.
          </p>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 px-4 lg:px-10">
          {packages.map((pkg) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Image Section */}
              <div className="relative overflow-hidden">
                <motion.img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-56 object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Package Details */}
              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold text-gray-800">{pkg.title}</h3>
                <div className="flex justify-center gap-3 mt-2 text-gray-600">
                  <div className="flex items-center gap-1">
                    <Calendar size={18} />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <DollarSign size={18} />
                    <span>{pkg.price}</span>
                  </div>
                </div>
                <p className="text-gray-700 mt-4">{pkg.description}</p>
                <div className="flex justify-center gap-3 text-gray-500 text-sm mt-3">
                  <div className="flex items-center gap-1">
                    <MapPin size={18} />
                    <span>{pkg.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <PhoneCall size={18} />
                    <span>{pkg.contact}</span>
                  </div>
                </div>
                {/* Buttons */}
                <div className="flex justify-center gap-4 mt-6">
                  <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition duration-300">
                    Book Now
                  </button>
                  <a
                    href={`tel:${pkg.contact}`}
                    className="flex items-center gap-2 bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition duration-300"
                  >
                    <PhoneCall size={18} /> Call Now
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
