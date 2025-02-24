import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { IoLocationSharp, IoCall, IoMail } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 text-white py-12 px-6 relative">
      {/* Social Media Sidebar (Desktop Only) */}
      <div className="fixed left-0 top-1/3 hidden lg:flex flex-col space-y-3 p-2 bg-transparent z-50">
        <a href="#" className="p-3 bg-blue-600 text-white rounded-full transition-transform hover:scale-110 hover:bg-blue-700 shadow-md">
          <FaFacebookF size={20} />
        </a>
        <a href="#" className="p-3 bg-pink-600 text-white rounded-full transition-transform hover:scale-110 hover:bg-pink-700 shadow-md">
          <FaInstagram size={20} />
        </a>
        <a href="#" className="p-3 bg-red-600 text-white rounded-full transition-transform hover:scale-110 hover:bg-red-700 shadow-md">
          <FaYoutube size={20} />
        </a>
      </div>

      {/* WhatsApp Floating Icon */}
      <a
        href="https://wa.me/919889136789"
        className="fixed bottom-4 right-4 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition-transform hover:scale-110 z-50"
      >
        <FaWhatsapp size={32} />
      </a>

      {/* Footer Content */}
      <div className="container mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-8 text-sm">
        
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold text-yellow-400">Himalayan Glory Tour & Travels</h2>
          <p className="text-gray-300 mt-2">GSTIN: 09ALJPP5849EIZN</p>
          <p className="text-gray-300">ISO-9001:2015 Certified</p>
          <p className="mt-4 text-gray-200 leading-relaxed">
            We are one of India's leading travel agencies, offering trusted and memorable travel experiences.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-400">Company</h3>
          <ul className="mt-4 space-y-3 text-gray-200">
            <li><Link href="/" className="hover:text-white transition">Home &gt;</Link></li>
            <li><Link href="/about" className="hover:text-white transition">About Us &gt;</Link></li>
            <li><Link href="/contact" className="hover:text-white transition">Contact Us &gt;</Link></li>
            <li><Link href="/packages" className="hover:text-white transition">Packages &gt;</Link></li>
            <li><Link href="/services" className="hover:text-white transition">Services &gt;</Link></li>
            <li><Link href="/login" className="hover:text-white transition">Login &gt;</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-400">Contact</h3>
          <div className="mt-4 space-y-3 text-gray-200">
            <p className="flex items-center gap-2">
              <IoLocationSharp className="text-xl text-yellow-400" />
              Shop No:- 62, Opp. Rana Hospital, Rail Vihar, Medical Road, Gorakhpur, UP, India - 273013
            </p>
            <p className="flex items-center gap-2">
              <IoCall className="text-xl text-yellow-400" />
              <a href="tel:+919889136789" className="hover:text-white transition">+91 98891 36789</a>, 
              <a href="tel:+9176188936789" className="hover:text-white transition">+91 76188 936789</a>
            </p>
            <p className="flex items-center gap-2">
              <IoMail className="text-xl text-yellow-400" />
              <a href="mailto:himalayan@gmail.com" className="hover:text-white transition">himalayan@gmail.com</a>
            </p>
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-400">Certifications</h3>
          <div className="flex gap-4 mt-4">
            <Image src="/iso-certified.png" alt="ISO Certified" width={60} height={60} />
            <Image src="/gst-registered.png" alt="GST Registered" width={60} height={60} />
            <Image src="/trusted-brand.png" alt="Trusted Brand" width={60} height={60} />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-gray-400 text-sm mt-10 border-t border-gray-700 pt-5">
        © {new Date().getFullYear()} Himalayan Glory Tour & Travels. All Rights Reserved.
      </div>
    </footer>
  );
}
