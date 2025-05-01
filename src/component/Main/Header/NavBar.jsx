import React, { useState } from "react";
import { FaMagnifyingGlass, FaBars, FaXmark } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Breeds", link: "/breeds" },
    { name: "Accessories", link: "/accessories" },
    { name: "Blogs", link: "/blog" },
    { name: "Contact", link: "/contact" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="font-poppins px-4 sm:px-6 lg:px-14 py-4 sticky top-0 z-50 bg-[var(--primary-bg)] shadow-sm">
      {/* Desktop & Mobile Logo Bar */}
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 z-20">
          <img src="/main-logo.png" alt="Pawstore Logo" className="w-10 h-10" />
          <span className="font-semibold text-lg">Pawstore</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-2xl focus:outline-none z-20"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <FaXmark /> : <FaBars />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <nav>
            <ul className="flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.link}
                    className={`font-medium hover:text-amber-600 transition-colors ${
                      location.pathname === item.link
                        ? "text-amber-600 font-semibold"
                        : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search for pets..."
              className="bg-white py-2 px-4 pr-10 rounded-full w-64 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all"
            />
            <FaMagnifyingGlass className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      ></div>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white z-10 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-6">
          <nav className="mb-8">
            <ul className="space-y-6">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.link}
                    className={`text-lg font-medium block hover:text-amber-600 transition-colors ${
                      location.pathname === item.link
                        ? "text-amber-600 font-semibold"
                        : ""
                    }`}
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Search */}
          <div className="relative mt-auto mb-8">
            <input
              type="text"
              placeholder="Search for pets..."
              className="bg-gray-100 py-3 px-4 pr-10 rounded-full w-full text-sm focus:outline-none"
            />
            <FaMagnifyingGlass className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
