"use client"
import { motion } from "framer-motion";
import { PhoneCall, Mail, MapPin, ArrowDownCircle } from "lucide-react";
import { useState, useRef } from "react";

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const contactRef = useRef(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your enquiry has been submitted!");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section>
      <div className="relative w-full h-[300px] md:h-[450px]">
        <div className="absolute inset-0">
          <img
            src="/Himalayan-Holidays-to-Nepal.jpg"
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80 flex flex-col items-center justify-center px-4 text-center">
            <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight">
              Let's Plan Your Next Adventure!
            </h1>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mt-6 cursor-pointer"
              onClick={scrollToContact}
            >
              <ArrowDownCircle size={50} className="text-white hover:scale-110 transition-transform" />
            </motion.div>
          </div>
        </div>
      </div>

      <div ref={contactRef} className="container mx-auto px-6 md:px-16 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Planning your next journey? Fill out the form below, and our team will assist you in creating an unforgettable experience.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.form
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-white shadow-lg rounded-xl p-8"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">Phone</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Enter your phone number"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="4"
                className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Your message"
                required
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-32 bg-black text-white py-2 rounded-lg font-semibold hover:bg-gray-800 transition duration-300"
            >
              Submit
            </motion.button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col"
          >
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-800">Get in Touch</h2>
              <p className="text-gray-600 mt-2 flex items-center">
                <MapPin className="mr-2" /> Taj Tour And Travel
              </p>
              <p className="text-gray-600">519 Jaina Tower -II, District Center, Janakpuri, New Delhi -110058, INDIA</p>
              <p className="text-gray-600 mt-2 flex items-center">
                <PhoneCall className="mr-2" /> +91-9891515623
              </p>
              <p className="text-gray-600 flex items-center">
                <Mail className="mr-2" /> sales1.tajtourandtravel@gmail.com
              </p>
            </div>

            <div className="mt-6">
              <iframe
                title="Mount Kailash Location"
                src="https://www.google.com/maps/embed?pb=!1m18..."
                width="100%"
                height="250"
                className="rounded-lg shadow-lg border-0"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}