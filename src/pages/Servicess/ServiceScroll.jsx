import React from 'react';
import { motion } from 'framer-motion';

const ServiceScroll = () => {
  return (
    <div className="relative min-h-screen bg-black/40 flex items-center justify-center px-4">
      <div className="text-center max-w-4xl mx-auto space-y-6">
        <motion.p
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Our Services
        </motion.p>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-white font-medium px-2 sm:px-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
        >
          From intimate gatherings to grand celebrations, our services bring your vision to life with creativity and precision.
        </motion.p>
      </div>
    </div>
  );
};

export default ServiceScroll;
