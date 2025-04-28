import React from "react";
import {
  FaArrowDown,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";

const HeroSection = () => {
  return (
    <header className="relative bg-[var(--primary-bg)] px-4 sm:px-6 lg:px-20 font-poppins ">
      <main className="flex flex-col lg:flex-row justify-center gap-8 md:gap-10 lg:gap-52 items-center pb-10 lg:pb-14 overflow-x-hidden">
        {/* Image Container */}
        <div className=" w-full max-w-[480px] px-4 sm:px-0 order-2 lg:order-1">
          <img
            src="/img/hero-dog.png"
            alt="Hero Dog"
            className="w-full h-auto"
          />
        </div>

        {/* Text Container */}
        <div className="text-start  w-full max-w-[386px] px-4 sm:px-0 order-1 lg:order-2">
          <h1 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-center pt-4 md:text-start">
            Everybody needs a friend in Life.
          </h1>
          <p className="text-base sm:text-lg lg:text-[18px] font-[400] mt-3 sm:mt-5">
            The Corgi is intelligent, quick and curious. It is a kind,
            adventurous breed which shows a large measure of independence. They
            are good with children and normally kind with strangers.
          </p>
          <button className="mt-4 sm:mt-5 px-4 sm:px-5 py-2 bg-amber-600 text-white rounded-xl cursor-pointer">
            Buy Me
          </button>
        </div>
      </main>
      <footer>
        <div className="absolute right-0 bottom-0 flex items-end gap-3 px-4 sm:px-6 lg:px-20 py-6 sm:py-8 lg:py-10 text-lg sm:text-xl">
          <FaFacebookF />
          <FaYoutube />
          <FaInstagram />
        </div>
      </footer>

      <div className="text-xl lg:text-2xl absolute -bottom-14 lg:-bottom-16 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-4 lg:p-6 shadow-md  ">
        <FaArrowDown />
      </div>
    </header>
  );
};

export default HeroSection;
