import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowDown,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaPaw,
} from "react-icons/fa6";

const HeroSection = () => {
  return (
    <header className="relative bg-[var(--primary-bg)] px-4 sm:px-6 lg:px-20 font-poppins overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-amber-200 rounded-full opacity-20 blur-2xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-amber-300 rounded-full opacity-20 blur-3xl"></div>

      <main className="flex flex-col lg:flex-row justify-center gap-8 md:gap-10 lg:gap-20 items-center py-10 lg:py-16 relative z-10">
        {/* Image Container */}
        <div className="w-full max-w-[480px] px-4 sm:px-0 order-2 lg:order-1 relative">
          <div className="absolute -top-6 -left-6 w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center animate-pulse">
            <FaPaw className="text-amber-500 text-2xl" />
          </div>
          <img
            src="/img/hero-dog.png"
            alt="Hero Dog"
            className="w-full h-auto drop-shadow-xl transform transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center animate-bounce">
            <FaPaw className="text-amber-500 text-xl" />
          </div>
        </div>

        {/* Text Container */}
        <div className="text-start w-full max-w-[450px] px-4 sm:px-0 order-1 lg:order-2">
          <span className="inline-block bg-amber-200 text-amber-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Find Your Perfect Companion
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-start leading-tight">
            Everybody needs a <span className="text-amber-600">friend</span> in
            Life.
          </h1>
          <p className="text-base sm:text-lg lg:text-xl font-normal mt-4 sm:mt-6 text-gray-700">
            The Corgi is intelligent, quick and curious. It is a kind,
            adventurous breed which shows a large measure of independence. They
            are good with children and normally kind with strangers.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/breeds"
              className="px-6 py-3 bg-amber-600 text-white rounded-full font-medium hover:bg-amber-700 transition-colors shadow-md hover:shadow-lg flex items-center"
            >
              Explore Breeds <FaArrowDown className="ml-2 rotate-[-90deg]" />
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 bg-white text-amber-600 border-2 border-amber-600 rounded-full font-medium hover:bg-amber-50 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </main>

      {/* Social Media Icons */}
      <div className="relative z-20 pb-4">
        <div className="flex justify-end gap-6 px-4 sm:px-6 lg:px-20 text-2xl">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors"
            aria-label="Visit our Facebook page"
          >
            <FaFacebook />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-600 transition-colors"
            aria-label="Visit our YouTube channel"
          >
            <FaYoutube />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-600 transition-colors"
            aria-label="Visit our Instagram page"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Scroll Down Button */}
      <div className="text-xl lg:text-2xl absolute -bottom-14 lg:-bottom-16 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-4 lg:p-6 shadow-md hover:shadow-lg cursor-pointer animate-bounce">
        <FaArrowDown className="text-amber-600" />
      </div>
    </header>
  );
};

export default HeroSection;
