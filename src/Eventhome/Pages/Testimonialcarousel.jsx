import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { SiGoogle } from 'react-icons/si';

const testimonials = [
  {
    name: 'Saleena Devassy',
    date: '2023-04-12',
    initial: 'S',
    rating: 3,
    review:
     "JS Events is very good event management in Thrissur. My daughter's wedding was amazing with this company. We recommending to every one this group.",
  },
  {
    name: 'Peter K P',
    date: '2023-04-09',
    initial: 'P',
    rating: 5,
    review:
      "JS Events is very good event management in Thrissur. My daughter's wedding was amazing with this company. We recommending to every one this group.",
  },
  {
    name: 'Pushpa P L',
    date: '2023-04-07',
    initial: 'P',
    rating: 4,
    review:
      "JS Events is very good event management in Thrissur. My daughter's wedding was amazing with this company. We recommending to every one this group.",
  },
    {
    name: 'vicky',
    date: '2023-05-07',
    initial: 'E',
    rating: 5,
    review:
      "JS Events is very good event management in Thrissur. My daughter's wedding was amazing with this company. We recommending to every one this group.",
  },
     {
    name: 'Pavithra',
    date: '2023-05-07',
    initial: 'E',
    rating: 5,
    review:
      "JS Events is very good event management in Thrissur. My daughter's wedding was amazing with this company. We recommending to every one this group.",
  },
     {
    name: 'Suba',
    date: '2023-05-07',
    initial: 'E',
    rating: 5,
    review:
      "JS Events is very good event management in Thrissur. My daughter's wedding was amazing with this company. We recommending to every one this group.",
  },
   {
    name: 'Saran',
    date: '2023-05-07',
    initial: 'E',
    rating: 5,
    review:
      "JS Events is very good event management in Thrissur. My daughter's wedding was amazing with this company. We recommending to every one this group.",
  },
   {
    name: 'prabha',
    date: '2023-05-07',
    initial: 'E',
    rating: 5,
    review:
      "JS Events is very good event management in Thrissur. My daughter's wedding was amazing with this company. We recommending to every one this group.",
  },
  {
    name: '',
    date: '2023-05-07',
    initial: 'E',
    rating: 5,
    review:
      "JS Events is very good event management in Thrissur. My daughter's wedding was amazing with this company. We recommending to every one this group.",
  },
];

const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);

  const visibleCount = () => {
    if (window.innerWidth >= 1024) return 3; // lg
    if (window.innerWidth >= 768) return 2;  // md
    return 1; // sm
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev - visibleCount() < 0 ? testimonials.length - visibleCount() : prev - visibleCount()
    );
  };

  const nextSlide = () => {
    setCurrent((prev) =>
      (prev + visibleCount()) % testimonials.length
    );  };

  return (
    <div className="bg-white md:py-20 px-4 md:px-12 text-center  mt-20">
      <p className="text-gray-700 uppercase tracking-wide font-semibold ">
        Client Testimonials
      </p>
      <h2 className="text-3xl md:text-4xl font-bold my-4 ">
        See What Our Clients Have to Say
      </h2>

      <div className="relative mt-10 max-w-6xl mx-auto ">
        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 text-gray-400 hover:text-gray-700"
        >
          <FiChevronLeft size={25} md:size={36}/>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 text-gray-400 hover:text-gray-700 "
        >
          <FiChevronRight size={25} md:size={36} />
        </button>

        {/* Testimonial Cards */}
        <div className="flex justify-center gap-6 overflow-hidden ">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
              className="flex flex-wrap justify-center gap-6 "
            >
              {testimonials.map((item, index) => {
                const count = visibleCount();
                const isVisible =
                  Array.from({ length: count }).some(
                    (_, i) => (current + i) % testimonials.length === index
                  );

                return (
                  isVisible && (
                    <motion.div
                      key={index}
                      className="bg-white shadow-lg rounded-lg p-6 text-left w-full sm:w-[90%] md:w-[45%] lg:w-[30%] "
                      whileHover={{ scale: 1.03 }}
                    >
                      {/* Stars */}
                      <div className="flex justify-between items-center mb-3 ">
                        <div className="flex text-yellow-400">
                          {Array(item.rating)
                            .fill()
                            .map((_, i) => (
                              <FaStar key={i} />
                            ))}
                        </div>
                        <SiGoogle className="text-xl text-[#4285F4] " />
                      </div>

                      {/* Review */}
                      <p className="text-gray-800 mb-4 px-5 ">{item.review}</p>

                      {/* User Info */}
                      <div className="flex items-center gap-3 mt-4">
                        <div className="bg-gray-900 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                          {item.initial}
                        </div>
                        <div>
                          <p className="font-semibold text-sm">
                            {item.name}
                          </p>
                          <p className="text-gray-500 text-xs ">{item.date}</p>
                        </div>
                      </div>
                    </motion.div>
                  )
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;