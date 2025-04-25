import React, { useState } from "react";
import phone from "../assets/phone.svg";
import email from "../assets/email.svg";
import { IoMdArrowDropdown } from "react-icons/io";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="shadow bg-white rounded-bl-3xl rounded-br-3xl sticky top-0 z-50 w-full">
      {/* Top Contact Bar */}
      <div className="max-w-full mx-auto px-8 py-3 hidden lg:flex items-center justify-between gap-4">
        <div className="flex gap-8">
          <a className="flex items-center gap-2 text-sm tracking-wider">
            <img src={phone} alt="Phone" className="h-5" /> +971 4 570 0137
          </a>
          <a className="flex items-center gap-2 text-sm tracking-wider">
            <img src={email} alt="Email" className="h-5" /> Info@terranest.ae
          </a>
        </div>
        <div className="flex gap-8">
          <a className="flex items-center gap-2 text-sm tracking-wider">
            My Wishlist (0)
          </a>
          <a className="flex items-center gap-2 text-sm tracking-wider">
            AED
            <IoMdArrowDropdown size={22} />
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-full mx-auto px-4 sm:px-8 lg:px-28 pt-3 pb-6 flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <img
            src="https://ext.same-assets.com/752540071/1942925134.png"
            alt="Terra Nest Logo"
            className="h-8 md:h-10"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-6 xl:gap-12">
          {["Home", "About Us", "Projects", "Properties", "Learn More"].map(
            (item) => (
              <motion.a
                key={item}
                href="#"
                className="relative text-[#313337] font-medium hover:text-[#974216] transition"
                whileHover="hover"
              >
                <span className="relative">
                  {item}
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-[#974216]"
                    variants={{
                      hover: { scaleX: 1, originX: 0 },
                    }}
                    initial={{ scaleX: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  />
                </span>
              </motion.a>
            )
          )}
        </nav>

        {/* Contact Us Button (Desktop) */}
        <a
          href="#"
          className="hidden lg:inline-block bg-[#974216] text-white font-semibold py-2 px-5 rounded-lg hover:bg-[#8b5a47] transition"
        >
          Contact Us
        </a>

        {/* Mobile Menu Hamburger */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden flex flex-col justify-center items-center space-y-1.5 p-2"
        >
          <span
            className={`block w-7 h-[2px] bg-[#313337] transition-transform ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-7 h-[2px] bg-[#313337] ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-7 h-[2px] bg-[#313337] transition-transform ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden w-full px-4 sm:px-8 pb-6"
        >
          <div className="bg-white rounded-lg shadow-lg p-6">
            {/* Mobile Navigation Links */}
            <nav className="flex flex-col gap-4 mb-6">
              {["Home", "About Us", "Projects", "Properties", "Learn More"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-[#313337] font-medium hover:text-[#974216]"
                  >
                    {item}
                  </a>
                )
              )}
            </nav>

            {/* Mobile Contact Info */}
            <div className="flex flex-col gap-4 mb-6">
              <a className="flex items-center gap-3 text-sm">
                <img src={phone} alt="Phone" className="h-5" />
                +971 4 570 0137
              </a>
              <a className="flex items-center gap-3 text-sm">
                <img src={email} alt="Email" className="h-5" />
                Info@terranest.ae
              </a>
              <a className="flex items-center gap-3 text-sm">My Wishlist (0)</a>
              <a className="flex items-center gap-3 text-sm">
                AED <IoMdArrowDropdown size={20} />
              </a>
            </div>

            {/* Mobile Contact Button */}
            <a
              href="#"
              className="block w-full text-center bg-[#974216] text-white font-semibold py-2.5 px-5 rounded-lg hover:bg-[#8b5a47] transition"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;