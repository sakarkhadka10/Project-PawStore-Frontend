import React, { useState } from "react";
import {
  FaMagnifyingGlass,
  FaBars,
  FaXmark,
  FaUser,
  FaCartShopping,
  FaRightFromBracket,
  FaUserShield,
} from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import { useCart } from "../../../context/CartContext";

const NavBar = () => {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Breeds", link: "/breeds" },
    { name: "Accessories", link: "/accessories" },
    { name: "Blogs", link: "/blog" },
    { name: "Contact", link: "/contact" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const { user, isAuthenticated, isAdmin, logout } = useAuth();
  const { totalItems } = useCart();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleProfileMenu = () => setIsProfileMenuOpen(!isProfileMenuOpen);

  const handleLogout = () => {
    logout();
    navigate("/");
    setIsProfileMenuOpen(false);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      if (isOpen) {
        setIsOpen(false);
      }
    }
  };

  return (
    <div className="font-poppins px-4 sm:px-6 lg:px-14 py-4 sticky top-0 z-50 bg-[var(--primary-bg)] shadow-sm">
      {/* Desktop & Mobile Logo Bar */}
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 z-20">
          <img
            src="/main-logo.png"
            alt="Pawstore Logo"
            className="w-8 h-8 sm:w-10 sm:h-10"
          />
          <span className="font-semibold text-base sm:text-lg">Pawstore</span>
        </Link>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 lg:hidden">
          {/* Mobile Cart Icon */}
          <Link to="/cart" className="text-xl relative">
            <FaCartShopping />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>

          {/* Menu Toggle Button */}
          <button
            onClick={toggleMenu}
            className="text-2xl focus:outline-none z-20"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <FaXmark /> : <FaBars />}
          </button>
        </div>

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
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              type="text"
              placeholder="Search for pets, accessories, blogs..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="bg-white py-2 px-4 pr-10 rounded-full w-64 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-amber-600 transition-colors"
              aria-label="Search"
            >
              <FaMagnifyingGlass />
            </button>
          </form>

          {/* Cart & Auth Links */}
          <div className="flex items-center gap-4">
            {/* Shopping Cart */}
            <Link
              to="/cart"
              className="text-xl hover:text-amber-600 transition-colors relative"
            >
              <FaCartShopping />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Auth Links */}
            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={toggleProfileMenu}
                  className="flex items-center gap-2 text-sm font-medium hover:text-amber-600 transition-colors focus:outline-none"
                >
                  <span className="hidden md:inline-block">{user.name}</span>
                  <FaUser className="text-lg" />
                </button>

                {/* Profile Dropdown */}
                {isProfileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsProfileMenuOpen(false)}
                    >
                      My Profile
                    </Link>
                    <Link
                      to="/my-orders"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsProfileMenuOpen(false)}
                    >
                      My Orders
                    </Link>
                    {isAdmin && (
                      <Link
                        to="/admin/dashboard"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsProfileMenuOpen(false)}
                      >
                        <span className="flex items-center gap-2">
                          <FaUserShield /> Admin Dashboard
                        </span>
                      </Link>
                    )}
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <span className="flex items-center gap-2">
                        <FaRightFromBracket /> Sign Out
                      </span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link
                  to="/login"
                  className="text-sm font-medium hover:text-amber-600 transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="bg-amber-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-amber-700 transition-colors"
                >
                  Sign Up
                </Link>
              </div>
            )}
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
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-10 transform transition-transform duration-300 ease-in-out lg:hidden overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-16 px-4 sm:px-6">
          {/* User Info (if authenticated) */}
          {isAuthenticated && (
            <div className="mb-5 pb-5 border-b border-gray-200">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 bg-amber-100 rounded-full flex items-center justify-center">
                  <FaUser className="text-amber-600" />
                </div>
                <div>
                  <p className="font-medium text-sm sm:text-base">
                    {user.name}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500">
                    {user.email}
                  </p>
                </div>
              </div>
              {isAdmin && (
                <Link
                  to="/admin/dashboard"
                  className="mt-2 flex items-center gap-2 text-amber-600 font-medium text-sm sm:text-base"
                  onClick={toggleMenu}
                >
                  <FaUserShield /> Admin Dashboard
                </Link>
              )}
            </div>
          )}

          <nav className="mb-6">
            <ul className="space-y-4 sm:space-y-5">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.link}
                    className={`text-base sm:text-lg font-medium block hover:text-amber-600 transition-colors ${
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

              {/* Auth Links */}
              {isAuthenticated ? (
                <>
                  <li>
                    <Link
                      to="/profile"
                      className="text-base sm:text-lg font-medium block hover:text-amber-600 transition-colors"
                      onClick={toggleMenu}
                    >
                      My Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/my-orders"
                      className="text-base sm:text-lg font-medium block hover:text-amber-600 transition-colors"
                      onClick={toggleMenu}
                    >
                      My Orders
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        handleLogout();
                        toggleMenu();
                      }}
                      className="text-base sm:text-lg font-medium hover:text-amber-600 transition-colors flex items-center gap-2 text-red-600"
                    >
                      <FaRightFromBracket /> Sign Out
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link
                      to="/login"
                      className="text-base sm:text-lg font-medium block hover:text-amber-600 transition-colors"
                      onClick={toggleMenu}
                    >
                      Sign In
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/register"
                      className="text-base sm:text-lg font-medium block hover:text-amber-600 transition-colors"
                      onClick={toggleMenu}
                    >
                      Sign Up
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </nav>

          {/* Mobile Search */}
          <form onSubmit={handleSearchSubmit} className="relative mt-auto mb-6">
            <div className="border border-gray-200 rounded-full overflow-hidden flex items-center">
              <input
                type="text"
                placeholder="Search for pets, accessories, blogs..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="bg-gray-50 py-2 px-4 w-full text-sm focus:outline-none flex-grow"
              />
              <button
                type="submit"
                className="bg-amber-600 text-white p-2 px-3 hover:bg-amber-700 transition-colors"
                aria-label="Search"
              >
                <FaMagnifyingGlass />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
