import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

const HomeImgslider = () => {
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const images = [
    'https://eventsmanagementkerala.com/wp-content/uploads/elementor/thumbs/beautiful-woman-long-red-dress-walks-around-city-with-her-husband-q70rlitsxvchphike6wx3yab6qugnp9pceipxzu1w8.webp',
    'https://eventsmanagementkerala.com/wp-content/uploads/elementor/thumbs/bithday-event-management-kerala-q748lic5phhlw318mu3dlw9vlgzhycwj19nbptnriw.webp',
    'https://eventsmanagementkerala.com/wp-content/uploads/elementor/thumbs/Heritage-home-property-wedding-ceremony-e1744191407899-r43l0k2stddo03k6z6uwdbedj0cbqegk9ets4wz09k.webp',
    'https://eventsmanagementkerala.com/wp-content/uploads/elementor/thumbs/Vlinton-Greeshma4-04-09_15-21-09-910-scaled-qukm85ef4nwyraqehiing3t7uw1fseliyuiegwuh7w.webp',
  ];
  const allImages = [...images, ...images];

  return (
    <>
     {/* Section 2: Image Slider */}
      <motion.div
        className=" py-10 overflow-hidden mt-20 "
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="relative w-full -mt-10 ">
          <div className="flex animate-marquee whitespace-nowrap gap-5 px-20">
            {allImages.map((src, index) => (
              <motion.img
                key={index}
                src={src}
                alt={`Slide ${index}`}
                className="object-cover w-[250px] sm:w-[350px] md:w-[500px] lg:w-[300px] h-[200px] sm:h-[300px] md:h-[350px] lg:h-[200px]"
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 50 }}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <motion.button
            className="bg-gray-700 text-white px-4 py-2  rounded-full hover:bg-gray-800 transition cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/gallery">Gallery of Moments</Link>
           
          </motion.button>
        </div>
      </motion.div>

      
      {/* Tailwind Custom Animations */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 15s linear infinite;
          }

          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin-slow 20s linear infinite;
          }
        `}
      </style>
    </>
  );
};

export default  HomeImgslider;
