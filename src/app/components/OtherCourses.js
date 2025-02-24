"use client"; // Ensures this component runs only on the client side

import { Typography, Button } from "@material-tailwind/react"; // UI components from Material Tailwind
import { motion, useAnimation } from "framer-motion"; // For animations
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer"; // Detects when an element is in the viewport

// List of top destinations in the Kailash Mansarovar region
const DESTINATIONS = [
  {
    img: "/bg-kailash.jpg",
    title: "Mount Kailash",
    shortDesc: "A sacred peak, believed to be Lord Shiva’s abode...",
    fullDesc:
      "Mount Kailash is a highly revered peak, believed to be the abode of Lord Shiva. It is considered one of the most sacred sites for Hindus, Buddhists, Jains, and Bon followers. The challenging yet rewarding Kailash Parikrama is a significant spiritual journey for pilgrims worldwide.",
  },
  {
    img: "/departure.jpg",
    title: "Lake Mansarovar",
    shortDesc: "A pristine holy lake known for its spiritual significance...",
    fullDesc:
      "Lake Mansarovar is one of the highest freshwater lakes in the world, known for its crystal-clear waters and deep spiritual significance. Pilgrims believe that taking a dip in the lake washes away sins and brings enlightenment. The mesmerizing sunrise over the lake is a must-experience sight.",
  },
  {
    img: "/Guge-kingdom.webp",
    title: "Guge Kingdom",
    shortDesc: "Ancient ruins of a lost Tibetan kingdom...",
    fullDesc:
      "The Guge Kingdom is a historic site featuring stunning ruins, monasteries, and caves. This ancient Tibetan civilization flourished in the 10th century and is known for its incredible murals and relics. A visit here offers a glimpse into the region’s rich history and Buddhist heritage.",
  },
  {
    img: "/ashtpad.jpg",
    title: "Ashtapad",
    shortDesc: "A Jain pilgrimage site with breathtaking views...",
    fullDesc:
      "Ashtapad is a revered Jain pilgrimage site located near Mount Kailash. It is believed to be the place where the first Jain Tirthankara, Rishabhdev, attained Nirvana. The site offers a stunning panoramic view of the Himalayas, making it a serene and spiritual destination.",
  },
];

export function OtherCourses() {
  // State to track which destination is expanded (for full description)
  const [expanded, setExpanded] = useState({});

  // Controls animations
  const controls = useAnimation();

  // Detects when the section enters the viewport
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 }); // Show the section when it comes into view
    } else {
      controls.start({ opacity: 0, y: 50 }); // Hide it when out of view
    }
  }, [controls, inView]);

  // Function to toggle the "View More" / "Show Less" feature
  const toggleExpand = (idx) => {
    setExpanded((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <motion.section
      ref={ref} // Links the section to viewport detection
      animate={controls} // Uses animation controls
      initial={{ opacity: 0, y: 50 }} // Starts hidden
      transition={{ duration: 0.8, ease: "easeOut" }} // Smooth animation
      className="pb-20 px-6 md:px-12"
    >
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="container mx-auto mb-14 text-center"
      >
        {/* Main Title */}
        <Typography
          variant="h2"
          className="mb-4 text-3xl md:text-5xl font-extrabold text-gray-800"
        >
          Top Destinations in Kailash Mansarovar
        </Typography>

        {/* Short Description */}
        <Typography
          variant="lead"
          className="mx-auto max-w-3xl text-lg md:text-xl text-gray-600"
        >
          Explore the most sacred and mesmerizing destinations of the Kailash
          Mansarovar region.
        </Typography>
      </motion.div>

      {/* Destinations Grid */}
      <div className="container mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {DESTINATIONS.map(({ img, title, shortDesc, fullDesc }, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }} // Starts slightly smaller and faded
            whileInView={{ opacity: 1, scale: 1 }} // Grows when visible
            whileHover={{ scale: 1.05 }} // Slightly enlarges on hover
            transition={{ duration: 0.6, delay: idx * 0.1 }} // Adds a staggered effect
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {/* Image with Hover Effect */}
            <div className="overflow-hidden rounded-t-lg">
              <img
                src={img} // Image source
                alt={title} // Image description for accessibility
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Card Content */}
            <div className="p-6 bg-white">
              {/* Destination Title */}
              <h3 className="text-xl font-semibold text-gray-800">{title}</h3>

              {/* Short Description (or Full if expanded) */}
              <p className="text-gray-600 mt-2 text-sm">
                {expanded[idx] ? fullDesc : shortDesc}
              </p>

              {/* Expand/Collapse Button */}
              <motion.button
                whileHover={{ scale: 1.1 }} // Button enlarges slightly on hover
                whileTap={{ scale: 0.95 }} // Button shrinks slightly on tap
                className="mt-2 text-xs font-semibold text-blue-600 transition-all"
                onClick={() => toggleExpand(idx)}
              >
                {expanded[idx] ? "Show Less" : "View More"}
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default OtherCourses;
