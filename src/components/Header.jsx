import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import banner1 from "../assets/banner1.png";
import banner2 from "../assets/banner2.png";
import banner3 from "../assets/banner3.jpg";
import banner4 from "../assets/banner4.jpg";
import banner5 from "../assets/banner5.jpg";

const backgroundImages = [banner1, banner2, banner3, banner4, banner5]; // Add your image paths here

const Header = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    backgroundImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 4000); // change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex w-full 2xl:h-[84.2vh] lg:h-[82.5vh] md:h-[89vh] h-[90vh] text-white text-center px-2 overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImages[index]})` }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-[#313337] opacity-70" />{" "}
        {/* Dark overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center w-full">
        <h1 className="text-3xl md:text-6xl font-semibold mb-4">
          Delivering Outstanding Service To Our <br/> Clients
        </h1>
        <p className="max-w-2xl mx-auto lg:text-xl text-lg mb-8">
          We are a small estate agency that will help you find the best
          residence. <br />
          You deserve only the best deals for your dream house!
        </p>
        <button className="bg-[#974216] hover:bg-[#8b5a47] text-white font-semibold px-6 py-3 rounded-lg shadow transition">
          Explore More
        </button>
      </div>
      
    </section>
  );
};

export default Header;
