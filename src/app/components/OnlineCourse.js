"use client"; // Ensures this component runs only on the client side

import React from "react";
import Image from "next/image"; // For optimized image loading in Next.js
import { CheckBadgeIcon } from "@heroicons/react/24/solid"; // Check badge icon from Heroicons
import { motion } from "framer-motion"; // For animations

// List of features about Kailash Mansarovar
const FEATURES = [
  {
    icon: CheckBadgeIcon,
    title: "Sacred Pilgrimage",
    description:
      "Journey to one of the holiest sites, revered by multiple religions worldwide.",
  },
  {
    icon: CheckBadgeIcon,
    title: "Breathtaking Landscapes",
    description:
      "Witness the pristine beauty of the Himalayas, lakes, and snow-capped peaks.",
  },
  {
    icon: CheckBadgeIcon,
    title: "Challenging Adventure",
    description:
      "Trek through high-altitude terrain, testing your endurance and spirituality.",
  },
  {
    icon: CheckBadgeIcon,
    title: "Seamless Travel Experience",
    description:
      "Enjoy well-organized itineraries, comfortable accommodations, and expert guides.",
  },
];

export default function AboutKailash() {
  return (
    // Section container with animation
    <motion.section
      className="py-16 md:py-24"
      initial={{ opacity: 0, y: 50 }} // Start hidden and slightly lower
      whileInView={{ opacity: 1, y: 0 }} // Animate when in view
      transition={{ duration: 0.8, ease: "easeOut" }} // Smooth animation
      viewport={{ once: true }}
    >
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-6 md:px-12">
        
        {/* Left Side - Image */}
        <motion.div
          className="relative w-full h-[450px] lg:h-[600px] rounded-lg overflow-hidden shadow-lg"
          initial={{ opacity: 0, x: -50 }} // Start hidden and slightly left
          whileInView={{ opacity: 1, x: 0 }} // Animate when in view
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} // Slight delay for a smooth effect
        >
          <Image
            src="/Mount-Kailash.jpeg" // Image source
            alt="Mount Kailash" // Image description for accessibility
            layout="fill" // Makes the image cover the entire container
            objectFit="cover" // Ensures the image scales correctly
            className="rounded-lg"
          />
        </motion.div>

        {/* Right Side - Text Content */}
        <motion.div
          className="lg:pl-10"
          initial={{ opacity: 0, x: 50 }} // Start hidden and slightly right
          whileInView={{ opacity: 1, x: 0 }} // Animate when in view
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }} // Slight delay for a smooth effect
        >
          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
            About Kailash Mansarovar
          </h2>

          {/* Section Description */}
          <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
            Mount Kailash, standing at 6,638 meters, is the most sacred peak in Tibet.
            It is believed to be the abode of Lord Shiva and holds immense spiritual significance.
            The journey to Kailash is a once-in-a-lifetime adventure, offering divine blessings,
            unparalleled natural beauty, and a deep sense of inner peace.
          </p>

          {/* Features Section */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            initial={{ opacity: 0, y: 50 }} // Start hidden and lower
            whileInView={{ opacity: 1, y: 0 }} // Animate when in view
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }} // Slight delay for smooth effect
          >
            {/* Loop through features and display them */}
            {FEATURES.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex items-start space-x-3">
                
                {/* Icon inside a blue circle */}
                <div className="bg-blue-500 text-white p-2 rounded-full shadow-lg">
                  <Icon className="h-5 w-5" />
                </div>

                {/* Feature title and description */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                  <p className="text-sm text-gray-600">{description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
