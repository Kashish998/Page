"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { FaUserCircle } from "react-icons/fa";

// Reviews Data
const reviews = [
  { name: "Amit Sharma", review: "The Kailash Mansarovar tour was a life-changing experience! The journey was well-organized and spiritually uplifting." },
  { name: "Priya Verma", review: "Absolutely breathtaking views and seamless travel arrangements. Thank you for making my dream journey come true!" },
  { name: "Rahul Mehta", review: "Very well-managed trip with great hospitality. The spiritual vibes of Kailash and Mansarovar were beyond words!" },
  { name: "Sunita Agarwal", review: "The guides were knowledgeable, and the accommodations were comfortable. A must-do pilgrimage for every devotee!" },
  { name: "Vikram Singh", review: "The full moon view at Mansarovar was magical! An unforgettable experience thanks to the great planning by the team." },
];

// Hook for scroll-based animation
const useScrollAnimation = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [controls, inView]);

  return [ref, controls];
};

export default function AboutUs() {
  const [aboutRef, aboutControls] = useScrollAnimation();
  const [reviewsRef, reviewsControls] = useScrollAnimation();

  return (
    <div className="min-h-screen bg-gray-50">
     
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
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wide text-white">
            About Us
          </h1>
          <p className="mt-4 sm:mt-5 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Discover the sacred Kailash Mansarovar with us—where spiritual awakening meets an unforgettable journey of devotion and adventure.
          </p>
          
        </motion.div>
        
      </section>

      {/* About Kailash Mansarovar Section */}
      <section ref={aboutRef} className="container mx-auto px-6 md:px-12 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={aboutControls}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Image Card */}
          <div className="h-full">
            <img
              src="/Mount-Kailash.jpeg"
              alt="Kailash Mansarovar"
              className="w-full h-full max-h-[450px] object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Right About Card */}
          <div className="bg-white p-8 rounded-lg shadow-xl flex flex-col justify-center h-full">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              The Sacred Journey to Kailash Mansarovar
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Nestled in the remote Himalayas, <strong>Mount Kailash</strong> stands as a sacred symbol of spiritual enlightenment and divinity. It is revered by Hindus as the <strong>abode of Lord Shiva</strong>, while Buddhists, Jains, and Bon followers also regard it as a center of cosmic energy.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mt-4">
              Our expertly crafted pilgrimage ensures a <strong>seamless, safe, and spiritually enriching journey</strong>. From visa assistance to experienced guides, we take care of every detail—so you can focus on your spiritual quest.
            </p>
          </div>
        </motion.div>
      </section> 



    

      {/* Reviews Section */}
      <section ref={reviewsRef} className="bg-gray-100 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={reviewsControls}
         
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-10">
            What Our Travelers Say
          </h2>

          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation
            modules={[Pagination, Autoplay, Navigation]}
            className="w-full"
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white p-6 rounded-lg shadow-lg text-center h-full flex flex-col justify-between min-h-[250px]"
                >
                  <div className="flex flex-col items-center">
                    <FaUserCircle size={40} className="text-gray-500 mb-4" />
                    <h3 className="text-xl font-semibold text-gray-700">{review.name}</h3>
                  </div>
                  <p className="mt-4 text-gray-600">{review.review}</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </section>
    </div>
  );
}
