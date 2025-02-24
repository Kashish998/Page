"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function KailashMap() {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false, // Ensures animation runs every time it comes into view
    threshold: 0.2, // Triggers when 20% of the section is visible
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-12 px-6 md:px-12"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
          Kailash Mansarovar Map
        </h2>
        <p className="text-base md:text-lg text-gray-600 mb-6">
          Explore the sacred route of Kailash Mansarovar with this interactive map.
        </p>

        {/* Map Container */}
        <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4503.086036463622!2d81.31321311089327!3d30.66993330535183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a6763c9fdc8927%3A0x5e4df4d4a25d99d6!2sMount%20Kailash!5e0!3m2!1sen!2sin!4v1708435820417!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </motion.section>
  );
}
