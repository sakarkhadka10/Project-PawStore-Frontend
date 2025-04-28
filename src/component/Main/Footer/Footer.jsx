import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  const navLinks = [
    { name: "Home", link: "/" },
    { name: "About", link: "/breeds" },
    { name: "Service", link: "/accessories" },
    { name: "Team", link: "/blog" },
    { name: "FAQs", link: "/contact" },
    { name: "Careers", link: "/contact" },
    { name: "Contact Us", link: "/contact" },
  ];
  return (
    <footer className="w-full bg-[#F6FAFF]">
      <div className="max-w-[1200px] mx-auto py-10 md:py-[55px] px-4 sm:px-6 lg:px-8">
        {/* Top Footer Section */}
        <section className="flex flex-col md:flex-row gap-8 md:gap-5 md:justify-between">
          {/* Navigation Links */}
          <div className="w-full md:w-auto">
            <h2 className="font-medium text-lg mb-4">Quick Links</h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-1 gap-2">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.link}
                    className="hover:text-amber-600 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Links */}
          <div className="w-full md:w-auto leading-7">
            <h2 className="font-medium text-lg mb-4">Contact</h2>
            <address className="not-italic">
              <p>Mahendrapool</p>
              <p>Pokhara, Nepal</p>
              <p>+977-[0]61-328463</p>
            </address>
          </div>

          {/* Map Links */}
          <div className="w-full md:w-1/2 lg:w-2/5 h-[200px] md:h-[250px]">
            <h2 className="font-medium text-lg mb-4 md:hidden">Location</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.454708572072!2d85.31053237418266!3d27.703243625674713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb185530e927fb%3A0xb8c1814683f64979!2zTmV3IFJvYWQgR2F0ZSwg4KSo4KSv4KS-4KSBIOCkuOCkoeCklSwgS2F0aG1hbmR1IDQ0NjAw!5e0!3m2!1sen!2snp!4v1744052317108!5m2!1sen!2snp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>
        </section>

        {/* Bottom Footer Section */}
        <section className="mt-10 md:mt-14 flex flex-col sm:flex-row gap-4 justify-between items-center border-t border-gray-200 pt-6">
          {/* Copyright */}
          <span className="text-sm md:text-base text-gray-600 order-2 sm:order-1">
            Copyright @ 2024 Pawstore
          </span>

          {/* Social Media */}
          <div className="flex items-center gap-5 text-xl cursor-pointer order-1 sm:order-2">
            <FaFacebook className="text-[#4C7AEF] hover:opacity-80 transition-opacity" />
            <FaYoutube className="text-[#DF2424] hover:opacity-80 transition-opacity" />
            <FaInstagram className="text-[#A0007D] hover:opacity-80 transition-opacity" />
          </div>

          {/* Creator */}
          <span className="text-sm md:text-base text-gray-600 order-3">
            Created by Sakar K.
          </span>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
