"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";

const NavItem = ({ children, href = "#" }) => (
  <li className="relative group px-4">
    <Link
      href={href}
      className="font-semibold text-sm text-white transition-all duration-300 group-hover:text-yellow-400"
    >
      {children}
      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
    </Link>
  </li>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  useEffect(() => {
    const handleScroll = () => setIsScrolling(window.scrollY > 50);
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 px-6 lg:px-12 ${
        isScrolling ? "bg-black bg-opacity-90 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center">
          <Image src="/logo.png" alt="Himalayan Glory Travels" width={40} height={40} className="h-10 w-10 rounded-full" />
          <span className="ml-3 font-semibold text-lg text-white">Himalayan Glory Travels</span>
        </div>

        <ul className="hidden lg:flex items-center gap-6">
          <NavItem href="/">Home</NavItem>
          <NavItem href="/about">About Us</NavItem>
          <NavItem href="/services">Services</NavItem>
          <NavItem href="/packages">Packages</NavItem>
          <NavItem href="/gallery">Gallery</NavItem>
          <NavItem href="/contact">Contact Us</NavItem>
        </ul>

        {/* Mobile Menu Button */}
        <button onClick={() => setOpen(!open)} className="lg:hidden text-white">
          {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`absolute left-0 w-full bg-black bg-opacity-90 transform transition-all duration-300 ${
          open ? "top-14 opacity-100" : "top-[-300px] opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 p-5 text-white">
          <NavItem href="/">Home</NavItem>
          <NavItem href="/about">About Us</NavItem>
          <NavItem href="/services">Services</NavItem>
          <NavItem href="/packages">Packages</NavItem>
          <NavItem href="/gallery">Gallery</NavItem>
          <NavItem href="/contact">Contact Us</NavItem>
        </ul>
      </div>
    </nav>
  );
}
