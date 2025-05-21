import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaPhone } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";

const imageVariants = {
  hidden: { opacity: 0, x: -100 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut'
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, x: 100 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut'
    }
  }
};

const Contactus = () => {
  const [message, setMessage] = useState("");

  return (
    <div className="relative bg-gray-100 ">
      <div className="flex flex-col lg:flex-row min-h-screen">

        {/* Left Side Image */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative w-full lg:w-1/2 min-h-[300px] sm:min-h-[400px] lg:h-screen"
        >
          <img
            src="https://images.unsplash.com/photo-1603178455924-ef33372953bb?w=500&auto=format&fit=crop&q=60"
            alt="Contact Us"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0  bg-opacity-50 flex items-center justify-center p-6">
            <p className="text-white text-base sm:text-lg lg:text-3xl font-semibold text-center leading-relaxed max-w-md sm:max-w-xl">
              From belly laughs to happy tears, we plan the moments that bring generations together.
              <br />
              <span className="text-yellow-300 block mt-2">Ready to begin? Get in touch with us</span>
            </p>
          </div>
        </motion.div>

        {/* Right Side Form */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-10"
        >
          <div className="w-full max-w-xl bg-white rounded-xl shadow-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Let’s Get In Touch.</h2>
            <p className="text-gray-600 mb-6 sm:mb-8">
              Or just reach out manually to{" "}
              <a href="mailto:hello@slothui.com" className="text-yellow-600 underline">
                hello@jsdecors.com
              </a>
            </p>

            <form className="space-y-5 sm:space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <FaUser className="absolute top-4 left-3 text-yellow-600" />
                  <input
                    type="text"
                    placeholder="First name"
                    className="pl-10 py-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
                  />
                </div>
                <div className="relative">
                  <FaUser className="absolute top-4 left-3 text-yellow-600" />
                  <input
                    type="text"
                    placeholder="Last name"
                    className="pl-10 py-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="relative">
                <FaEnvelope className="absolute top-4 left-3 text-yellow-600" />
                <input
                  type="email"
                  placeholder="Email address"
                  className="pl-10 py-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
                />
              </div>

              {/* Phone */}
              <div className="relative">
                <FaPhone className="absolute top-4 left-3 text-yellow-600" />
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="pl-10 py-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
                />
              </div>

              {/* Message */}
              <div className="relative">
                <FiMessageCircle className="absolute top-4 left-3 text-yellow-600" />
                <textarea
                  placeholder="Your message..."
                  rows={4}
                  maxLength={300}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="pl-10 py-3 w-full border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-yellow-600"
                ></textarea>
                <div className="text-right text-sm text-gray-400 mt-1">{message.length}/300</div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-yellow-600 to-yellow-400 hover:brightness-110 text-white font-semibold rounded-md transition-all"
              >
                Submit Form →
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contactus;
