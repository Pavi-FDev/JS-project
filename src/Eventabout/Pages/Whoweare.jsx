import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const Whoweare= () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-90">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12  items-center">

        {/* Left Content */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <p className="text-pink-400 font-semibold tracking-wide">Who We Are</p>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight text-gray-900">
            Planner for Your <br /> Perfect Wedding
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt donec quam felis
            ultricies nec, pellentesque eu, pretium quis sem.
          </p>

          {/* Feature List */}
          <ul className="space-y-3 text-gray-700">
            {[
              'Quam felis ultricies nec pellentesque eu pretium',
              'Fringilla vel aliquet nec vulputate eget arcu in eni',
              'Yusto rhoncusut imperdiet a venenatis vitae.',
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <FaCheckCircle className="text-emerald-500 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 border border-emerald-400 text-emerald-500 px-6 py-2 rounded-full font-medium transition-all duration-200"
          >
            Get a Free Quote
          </motion.button>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <img
            src="https://designingmedia.com/bridely/wp-content/uploads/2022/07/about_image1.jpg"
            alt="Wedding couple"
            className="  rounded-tr-4xl rounded-bl-4xl  lg:h-[400px] object-cover shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Whoweare;