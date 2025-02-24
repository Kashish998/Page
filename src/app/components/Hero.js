"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  const images = [
    "/kailash-trek-3.jpg",
    "/kailash-trek-2.jpg",
    "/kailash-trek-5.webp",
  ];

  useEffect(() => {
    images.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, []);

  // Slow background transition every 6 seconds (instead of 4s)
  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); // 6 seconds for a slower transition

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[60vh] md:h-[50vh] w-full overflow-hidden">
      {/* Animated Background Transition */}
      <AnimatePresence>
        <motion.div
          key={backgroundIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }} // Smoother fade transition
          className="absolute inset-0 h-full w-full bg-cover bg-center bg-no-repeat transition-all"
          style={{ backgroundImage: `url(${images[backgroundIndex]})` }}
        />
      </AnimatePresence>

      {/* Dark Overlay */}
      <motion.div
        className="absolute inset-0 h-full w-full bg-black/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="grid h-[60vh] md:h-[50vh] px-6 sm:px-4 relative z-20" // Increased z-index to keep navbar visible
      >
        <div className="container mx-auto flex flex-col items-center justify-center text-center">
          <h1 className="text-white max-w-3xl text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Experience the Divine Journey to Kailash Mansarovar
          </h1>

          <div className="mt-6">
            <Link href="/packages">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-blue-700 text-white text-lg px-8 py-3 md:px-12 md:py-4 md:text-xl rounded-full shadow-lg transition-transform duration-300 hover:shadow-xl"
              >
                Explore Packages
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
