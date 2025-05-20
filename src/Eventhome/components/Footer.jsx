import React from 'react';
import logo1 from '../assets/images/js decor png.svg';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0D2A45] to-[#091c30] text-white pt-20 pb-14 relative font-sans overflow-hidden mt-5 ">
      {/* Decorative wave shape */}
      <svg
        className="absolute top-0 left-0 w-full h-20 md:h-24 text-[#0D2A45]"
        preserveAspectRatio="none"
        viewBox="0 0 1440 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M0,64L48,74.7C96,85,192,107,288,117.3C384,128,480,128,576,112C672,96,768,64,864,58.7C960,53,1056,75,1152,101.3C1248,128,1344,160,1392,176L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        />
      </svg>

      {/* CTA Section */}
      <div className="relative z-10 text-center mb-20 px-4 max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-[0_3px_6px_rgba(255,223,71,0.7)]"
        >
          Let's Start Planning!
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex justify-center gap-6 flex-wrap"
        >
          <button className="mt-6 px-6 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-300 hover:from-yellow-500 hover:to-yellow-400 text-[#0D2A45] font-extrabold shadow-2xl transition duration-300 ease-in-out transform hover:scale-110">
            📅 Make Reservations
          </button>

          <button className="mt-6 px-6 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-300 hover:from-yellow-500 hover:to-yellow-400 text-[#0D2A45] font-extrabold shadow-2xl transition duration-300 ease-in-out transform hover:scale-110">
            Learn More
          </button>
        </motion.div>
      </div>

      {/* Main Footer Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16 text-gray-300"
      >
        {/* Left - Logo & About */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-xs mx-auto md:mx-0">
          <img
            src={logo1}
            alt="Logo"
            className="w-36 rounded-full shadow-xl mb-6 transform hover:scale-105 transition duration-500"
          />
          <p className="text-base leading-relaxed">
            JS Stage Decoration specializes in exclusive, custom designs that make every event unforgettable.
          </p>
        </div>

        {/* Center - Navigation */}
        <div className="text-center md:text-left">
          <h4 className="text-yellow-300 font-bold text-xl mb-6 tracking-wide border-b-2 border-yellow-400 pb-2 max-w-max mx-auto md:mx-0">
            Navigation
          </h4>
          <ul className="space-y-3 text-lg font-medium">
            {['Home', 'About', 'Services', 'Blog', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="hover:text-yellow-400 transition duration-300 ease-in-out hover:underline px-5"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right - Contact Info */}
        <div className="space-y-10 text-center md:text-left">
          <div className="flex items-center gap-5 justify-center md:justify-start">
            <div className="bg-yellow-300 text-[#0D2A45] p-2 rounded-full shadow-lg flex items-center justify-center text-2xl">
              <FaPhone className='text-xs' />
            </div>
            <div>
              <p className="text-yellow-300 font-semibold text-lg">Call Us:</p>
              <p className="text-gray-200 text-base">(123) 456 - 789 - 00</p>
            </div>
          </div>

          <div className="flex items-center gap-5 justify-center md:justify-start">
            <div className="bg-yellow-300 text-[#0D2A45] p-2 rounded-full shadow-lg flex items-center justify-center text-2xl">
              <MdOutlineMail className='text-sm font-bold' />
            </div>
            <div>
              <p className="text-yellow-300 font-extrabold text-lg">Email Us:</p>
              <p className="text-gray-200 text-base">help@Bridely.com</p>
            </div>
          </div>

          <div className="flex justify-center md:justify-start gap-4 mt-6">
            <div className="bg-gray-700 p-3 rounded-full cursor-pointer hover:bg-gray-600 transition">
              <FaFacebookF />
            </div>
            <div className="bg-gray-700 p-3 rounded-full cursor-pointer hover:bg-gray-600 transition">
              <FaTwitter />
            </div>
            <div className="bg-gray-700 p-3 rounded-full cursor-pointer hover:bg-gray-600 transition">
              <FaGooglePlusG />
            </div>
            <div className="bg-gray-700 p-3 rounded-full cursor-pointer hover:bg-gray-600 transition">
              <FaLinkedinIn />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Footer Bar */}
      <div className="relative z-10 mt-16 border-t border-yellow-700 bg-[#0a1d34] text-gray-400 flex flex-col md:flex-row justify-between items-center text-sm font-semibold px-6 py-4 max-w-7xl mx-auto">
        <p>© JS Event 2025. All Rights Reserved.</p>
        <p className="mt-2 md:mt-0">Designed with 💛 to create unforgettable weddings.</p>
      </div>

      {/* Scroll to top with bounce */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-6 right-6 -mb-3.5"
      >
        <button
          className="bg-yellow-300 hover:bg-yellow-400 text-[#0D2A45] w-10 h-10 rounded-full shadow-md transition-all  md:mb-5 "
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          title="Back to top"
        >
          ↑
        </button>
      </motion.div>
    </footer>
  );
};

export default Footer;




