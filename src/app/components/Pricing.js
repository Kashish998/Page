"use client";
import React, { useEffect } from "react";
import { Card, CardBody, Button, Typography } from "@material-tailwind/react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/navigation";

const PACKAGES = [
  {
    title: "Kailash Mansarovar Full Moon",
    description:
      "The Mount Kailash Full Moon Tour typically lasts 16 days and starts in Kathmandu, Nepal. Experience spiritual awakening under the mystical full moon.",
    img: "/FullMoon.jpg",
    price: "$399",
  },
  {
    title: "Kailash Mansarovar Yatra Tour",
    description:
      "Mt. Kailash with its ideal peak and Lake Manasarovar is a lake of exquisite beauty. A journey filled with adventure and spiritual enlightenment.",
    img: "/Kailash-Mansarovar-Yatra.jpg",
    price: "$399",
  },
  {
    title: "Kailash Mansarovar Overland Tour",
    description:
      "A scenic overland journey through Nepal and Tibet, offering breathtaking landscapes and a soulful experience of Mt. Kailash and Lake Mansarovar.",
    img: "/Kailash-Overland.jpg",
    price: "$450",
  },
  {
    title: "Kailash Mansarovar Helicopter Tour",
    description:
      "A luxurious helicopter ride to Kailash Mansarovar, offering an aerial view of the Himalayas and a shorter yet divine experience.",
    img: "/Kailash-Helicopter.jpg",
    price: "$999",
  },
];

export default function Pricing() {
  const router = useRouter();
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
      }}
      className="grid min-h-screen place-items-center pb-20 bg-gray-100"
    >
      <section className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: -30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold text-gray-900">
            Our Exclusive Packages
          </h2>
          <Typography variant="h6" className="mt-3 text-xl text-gray-700">
            Choose the perfect package for your spiritual journey.
          </Typography>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {PACKAGES.map((pkg, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, delay: index * 0.2 },
                },
              }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="rounded-xl shadow-xl overflow-hidden bg-white">
                {/* Image Section */}
                <motion.img
                  src={pkg.img}
                  alt={pkg.title}
                  className="w-full h-64 object-cover"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  whileHover={{ scale: 1.05 }}
                />

                <CardBody className="p-6">
                  {/* Package Title */}
                  <Typography variant="h4" className="text-2xl font-bold text-gray-900">
                    {pkg.title}
                  </Typography>

                  {/* Description */}
                  <Typography variant="paragraph" className="mt-3 text-gray-700 text-lg leading-relaxed">
                    {pkg.description}
                  </Typography>

                  {/* Price & Booking Button */}
                  <div className="flex flex-col items-center mt-6">
                    <Typography variant="h5" className="text-xl font-semibold text-gray-900">
                      Price: {pkg.price}
                    </Typography>
                    <Button
                      color="blue"
                      className="mt-4 w-full md:w-auto px-6 py-3 text-lg font-medium rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
                    >
                      Book Now
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="flex justify-center mt-10"
        >
          <button
            onClick={() => router.push("/packages")}
            className="px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
          >
            View More Packages
          </button>
        </motion.div>
      </section>
    </motion.div>
  );
}
