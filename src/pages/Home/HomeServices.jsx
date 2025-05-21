
import React, { useState, useEffect } from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";

const sections = [
  {
    title: 'Corporate Event Management',
    description:
      'If you want to make a statement at your next corporate event, partner with Melodia Event Management Company in Kerala..',
    image: 'https://eventsmanagementkerala.com/wp-content/uploads/2023/05/grand-hyatt-kochi-bolgatty-p058-hotel-facade16x9-1-1024x576.jpg',
  },
  {
    title: 'Wedding Planners',
    description:
      'Have you ever dreamed of planning the perfect dream event to be remembered forever?.',
    image: 'https://eventsmanagementkerala.com/wp-content/uploads/elementor/thumbs/beautiful-woman-long-red-dress-walks-around-city-with-her-husband-q70rlitsxvchphike6wx3yab6qugnp9pceipxzu1w8.webp',
  },
  {
    title: 'Destination Wedding In Kerala',
    description:
      'Celebrate your special day in paradise as you enjoy a luxurious destination event with us!.',
    image: 'https://eventsmanagementkerala.com/wp-content/uploads/elementor/thumbs/front-view-rich-arch-decorated-with-adorable-fresh-roses-flowers-q6tn21cv10nwdkkn53p5dhtg5rdlgj16wzttmhdpnc.webp',
  },
  {
    title: 'Beach Weddings',
    description:
      'Celebrate your love amidst the serene shores and palm-fringed beaches of Kerala',
    image: 'https://eventsmanagementkerala.com/wp-content/uploads/elementor/thumbs/blue-white-wedding-aisle-beach-surrounded-by-palms-with-sea-background-q6tn246dlirrcegjomx12z3txwzp3mcdxdsa2b9j4o.webp',
  },
  {
    title: 'Music & Entertainment',
    description:
      'From live bands and DJs to mesmerising performers, we have everything you need.',
    image: 'https://eventsmanagementkerala.com/wp-content/uploads/elementor/thumbs/34-q5t8fsj7kjq6kjf0bbfr8rq44enp0usgmkbb8ayryw.webp',
  },
  {
    title: 'Private Parties',
    description:
      'Melodia Event Management in Kerala holds Private Parties and crafts unforgettable moments that leave lasting memories..',
    image: 'https://eventsmanagementkerala.com/wp-content/uploads/elementor/thumbs/bithday-event-management-kerala-q748lic5phhlw318mu3dlw9vlgzhycwj19nbptnriw.webp',
  },
];

const HomeServices = () => {
  const { scrollYProgress } = useScroll();
  const parallaxXLeft = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const parallaxXRight = useTransform(scrollYProgress, [0, 1], [0, 50]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // sm breakpoint
    };
    handleResize(); // check on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="bg-gray-900 text-white py-20 px-6 md:px-10 lg:px-16 xl:px-24 space-y-28 mt-20 lg:h-[2100px]">
      {sections.map((item, index) => {
        const isEven = index % 2 === 0;

        return (
          <motion.div
            key={index}
            className={`flex flex-col lg:flex-row items-center gap-10 lg:px-20 ${isEven ? '' : 'lg:flex-row-reverse'}`}
            style={!isMobile ? { x: isEven ? parallaxXLeft : parallaxXRight } : {}}
            initial={!isMobile ? { opacity: 0, y: 40 } : undefined}
            whileInView={!isMobile ? { opacity: 1, y: 0 } : undefined}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {/* Image */}
            <div className="w-[90%] sm:w-[85%] md:w-[70%] lg:w-[360px] flex justify-center">
              <motion.img
                key={`${item.image}-${index}`}
                src={item.image}
                alt={item.title}
                loading="eager"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/600x400?text=Image+Unavailable";
                }}
                className="w-full max-w-full h-auto rounded-xl shadow-2xl object-cover"
                initial={!isMobile ? { scale: 0.95, rotate: isEven ? -8 : 8, opacity: 0 } : undefined}
                whileInView={!isMobile ? { scale: 1, rotate: isEven ? -4 : 4, opacity: 1 } : undefined}
                whileHover={!isMobile ? { scale: 1.05, rotate: 0 } : undefined}
                transition={{ type: 'spring', stiffness: 120, damping: 14 }}
                viewport={{ once: true }}
              />
            </div>

            {/* Text */}
            <motion.div
              className="w-full lg:w-1/2 text-center lg:text-left px-4"
              initial={!isMobile ? { opacity: 0, y: 30 } : undefined}
              whileInView={!isMobile ? { opacity: 1, y: 0 } : undefined}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {/* Title */}
              {!isMobile ? (
                <motion.h2
                  className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-200 mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {item.title}
                </motion.h2>
              ) : (
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-200 mb-4">
                  {item.title}
                </h2>
              )}

              {/* Paragraph */}
              {!isMobile ? (
                <motion.p
                  className="text-sm md:text-base text-gray-300 leading-relaxed mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {item.description}
                </motion.p>
              ) : (
                <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-6">
                  {item.description}
                </p>
              )}

              {/* Button */}
              {!isMobile ? (
                <motion.button
                  className="w-10 h-10 flex items-center justify-center bg-white text-black rounded-full hover:scale-110 transition-transform duration-300 mx-auto lg:mx-0"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ delay: 0.5 }}
                >
                  <FaLongArrowAltRight />
                </motion.button>
              ) : (
                <button className="w-10 h-10 flex items-center justify-center bg-white text-black rounded-full mx-auto lg:mx-0">
                  <FaLongArrowAltRight />
                </button>
              )}
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default HomeServices;
