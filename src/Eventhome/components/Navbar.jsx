import { useEffect, useState } from "react";
import { Menu, X, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import js from "../assets/images/js decor png.svg";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { VscEye } from "react-icons/vsc";
import { TbEyeClosed } from "react-icons/tb";
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isInfoPanelOpen, setIsInfoPanelOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const quarterHeight = window.innerHeight * 0.25;
      setScrolled(window.scrollY > quarterHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${
        scrolled ? "bg-gray-900" : "bg-transparent px-4 py-6 md:py-5 lg:py-3"
      } text-white fixed top-0 left-0 z-50 w-full transition-all duration-100`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="w-20 sm:w-24 md:w-[120px]">
          <img src={js} alt="logo" className="w-full h-auto" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-1 items-center justify-end space-x-4 lg:space-x-6 xl:space-x-8">
          <nav className="flex space-x-4 sm:space-x-5 md:space-x-6 text-sm md:text-sm font-semibold">
            <Link to="/home" className="hover:text-yellow-400">HOME</Link>
           
            <Link to="/about" className="hover:text-yellow-400">ABOUT</Link >
            <Link to="#" className="hover:text-yellow-400">SERVICES</Link >
            <Link  to="#" className="hover:text-yellow-400">BLOG</Link >
            <Link to="/gallery" className="hover:text-yellow-400">GALLERY</Link >
          </nav>

          <a
            href="tel:+918590010011"
            className="bg-gradient-to-r from-gray-900 to-yellow-500 px-4 py-1.5 rounded-full text-white text-xs md:text-sm shadow-md hover:from-yellow-600"
          >
            +91-859-001-0011
          </a>

          <button
            onClick={() => setIsInfoPanelOpen(true)}
            className="hover:text-yellow-400"
            title="More Info"
          >
            <Info size={20} />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center space-x-3">
          <button
            onClick={() => setIsInfoPanelOpen(true)}
            className="text-white"
            aria-label="Open Info"
          >
            <Info size={22} />
          </button>
          <button
            onClick={() => setIsMobileOpen(true)}
            className="text-white"
            aria-label="Open Menu"
          >
            <VscEye size={26} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 w-4/5 sm:w-2/3 md:w-1/2 h-full bg-gray-900 text-white p-6 z-50 overflow-y-auto md:hidden"
          >
            <div className="flex justify-end mb-6 mt-5 pe-5">
              <button onClick={() => setIsMobileOpen(false)} aria-label="Close Menu">
                <TbEyeClosed size={22}/>
              </button>
            </div>

            <nav className="space-y-8 sm:space-y-10 text-base sm:text-lg font-semibold">
              <a href="#" className="block hover:text-yellow-400">Home</a>
              <a href="#" className="block hover:text-yellow-400">Contact</a>
              <a href="#" className="block hover:text-yellow-400">Services</a>
              <a href="#" className="block hover:text-yellow-400">Gallery</a>
              <a href="#" className="block hover:text-yellow-400">Blog</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Info Panel */}
      <AnimatePresence>
        {isInfoPanelOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="fixed top-0 left-0 w-[90%] sm:w-[350px] md:w-[400px] h-full bg-gray-900 text-white p-6 z-50 overflow-y-auto shadow-2xl"
          >
            <div className="flex justify-end mb-4">
              <button onClick={() => setIsInfoPanelOpen(false)}>
                <X size={24} />
              </button>
            </div>

            <div className="text-sm md:text-base leading-relaxed space-y-6">
              <p>
                <strong>JS Event Management</strong> is an ISO 9001:2008 Certified Company based in Kochi, Thrissur Kerala. We offer premium event management services including weddings, corporate events, and private parties.
              </p>
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-yellow-400" />
                <span>+91-859-001-0011</span>
              </div>
              <div className="flex items-center gap-2">
                <MdOutlineMailOutline className="text-yellow-400" />
                <span className="break-words">JSeventmanagement@gmail.com</span>
              </div>

              <hr className="border-gray-600" />

              <ul className="space-y-5 sm:space-y-6 text-gray-300 text-2xl sm:text-3xl font-serif">
                <li><a href="#" className="hover:text-yellow-400">About Us</a></li>
                <li><a href="#" className="hover:text-yellow-400">Blog</a></li>
                <li><a href="#" className="hover:text-yellow-400">Let's Talk</a></li>
              </ul>

              <hr className="border-gray-600" />

              <div className="flex flex-wrap gap-3 mt-4">
                {[FaInstagram, FaYoutube, FaFacebookF, FaLinkedin, FaTwitter].map((Icon, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.15, rotate: 15 }}
                    whileTap={{ scale: 0.95 }}
                    className="border w-9 h-9 rounded-md bg-black text-white cursor-pointer flex items-center justify-center"
                  >
                    <Icon className="size-5" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

