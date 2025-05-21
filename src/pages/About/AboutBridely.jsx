import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Counter component for animated number
const Counter = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target);
    const duration = 3000; // 1 minutues
    const step = Math.ceil(end / (duration / 10));
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 10);

    return () => clearInterval(timer);
  }, [target]);

  return <span>{count}+</span>;
};

const AboutBridely = () => {
  return (
    <section className="bg-yellow-100 py-16 px-4 lg:px-60   ">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-30 items-center">
        {/* Left Image Grid */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4 relative"
        >
          {/* <div className="flex gap-4">
            <img
              src="https://images.pexels.com/photos/313707/pexels-photo-313707.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Couple"
              className="w-40 h-40 rounded-2xl object-cover shadow-md"
            />
            <img
              src="https://images.pexels.com/photos/313707/pexels-photo-313707.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Couple"
              className="w-30 lg:w-40 lg:h-40 rounded-2xl object-cover shadow-md"
            />
          </div> */}
          {/* <div className=''>
            <img
              src="https://designingmedia.com/bridely/wp-content/uploads/2022/07/roses.jpg"
              alt="Wine"
              className="w-36 h-24 object-cover shadow-lg"
            />
          </div> */}
           <div className=' -mt-5'>
            <img
              src="https://designingmedia.com/bridely/wp-content/uploads/2022/07/better_togather.jpg"
              alt="Wine"
              className="w-full h-full object-cover shadow-lg rounded-tr-full rounded-br-full"
            />
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="text-blackx font-medium">About Bridely</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            What We do, We do <br /> With Passion
          </h2>
          <p className="text-gray-600">
                    At EventCracker, we believe every celebration deserves to feel effortless, intentional, and unforgettable. Based in the heart of Oregon, we specialize in curating personalized weddings and events that reflect the unique love stories and cultural richness of our clients. 
          </p>
          {/* <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 border border-emerald-400 text-emerald-500 px-6 py-2 rounded-full font-medium transition-all duration-200"
          >
            Learn More
          </motion.button> */}
        </motion.div>
      </div>

      {/* Bottom Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto bg-gray-900 text-white mt-20 lg:rounded-tr-full lg:rounded-bl-full py-10 px-15 flex flex-col md:flex-row justify-around items-center gap-6 shadow-md "
      >
        {[
          [1565, 'Happy Couples'],
          [1680, 'Weddings'],
          [845, 'Decoration'],
          [175, 'Locations'],
        ].map(([number, label], i) => (
          <div key={i} className="text-center">
            <h3 className="text-3xl font-bold">
              <Counter target={number} />
            </h3>
            <p className="mt-1 font-medium">{label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default AboutBridely;
