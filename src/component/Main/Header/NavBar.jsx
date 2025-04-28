import React, { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";

const NavBar = () => {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Breeds", link: "/breeds" },
    { name: "Accessories", link: "/accessories" },
    { name: "Blogs", link: "/blog" },
    { name: "Contact", link: "/contact" },
  ];

  const [open, setOpen] = useState(true);
  return (
    <>
      <main className="font-poppins px-6 lg:px-14 py-4 pt-4">
        {/* Mobile Toggle Bar */}
        <nav className="flex justify-between items-center lg:hidden">
          <div className="flex items-center gap-1">
            <img src="/main-logo.png" alt="Main Logo" />
            <span className="font-medium text-sm">Pawstore</span>
          </div>
          <div className="cursor-pointer text-xl">
            {open ? (
              <button onClick={() => setOpen(!open)}>
                <FaBars />
              </button>
            ) : (
              <button onClick={() => setOpen(!open)}>
                <FaXmark />
              </button>
            )}
          </div>
        </nav>

        {/* For Desktop View */}
        <div className="hidden lg:block">
          <nav className="flex justify-between items-center ">
            <div className="flex items-center gap-1">
              <img src="/main-logo.png" alt="Main Logo" />
              <span className="font-medium text-md">Pawstore</span>
            </div>
            <ul className="flex items-center gap-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a href={item.link}>{item.name}</a>
                </li>
              ))}
              <div className="relative">
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search For Pets..."
                  className="bg-white  py-2 px-3 rounded-2xl w-60 text-sm font-normal"
                />
                <img
                  src="/icons/search-icons.png"
                  alt="search"
                  className="absolute top-2 right-3"
                />
              </div>
            </ul>
          </nav>
        </div>
      </main>
    </>
  );
};

export default NavBar;
