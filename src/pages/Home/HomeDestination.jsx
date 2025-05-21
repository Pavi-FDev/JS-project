import React from 'react';
import { motion } from 'framer-motion';

const HomeDestination = () => {
 const images = [
  "https://eventsmanagementkerala.com/wp-content/uploads/elementor/thumbs/image-blog-qxci15yoopuxkqtd5kaej3ilh2bh487t7zjqt9i10s.webp",
  "https://eventsmanagementkerala.com/wp-content/uploads/elementor/thumbs/ECP01897-scaled-qxkcwg11vm01pr17ycbigdrs0y89s94pyji7t2nf70.jpg",
  "https://eventsmanagementkerala.com/wp-content/uploads/elementor/thumbs/Haldi-Aditya-Swati-02-20_18-47-10-097-scaled-qmfxn1t1xjegwhzfxm00pgdds5qrus06dikzx63ang.webp",
  "https://eventsmanagementkerala.com/wp-content/uploads/elementor/thumbs/Mayz-24-01-18_14-33-02-277-scaled-1-qvov0n6vng82o0ik6y1y53gqdtbh8x9itix3oxw52k.webp",
];

  return (
    <section className="bg-amber-50 py-16 px-6 md:px-20 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 " >
        {/* Left: Images */}
        <motion.div
          className="grid grid-cols-2 gap-4  md:w-1/2 "
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Wedding ${idx + 1}`}
              className="rounded-xl shadow-lg object-cover h-60 w-full  "
            />
            // transition-transform duration-300 hover:scale-105
          ))}
        </motion.div>

        {/* Right: Text */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold leading-snug mb-6 ">
            UNLOCK YOUR DREAM <br /> DESTINATION WEDDING
          </h2>
          <p className="text-gray-700 mb-4">
            Choose Melodia Event Management Company for your premium destination events in, India.
            Whether you dream of a beach frontage event in or a resort celebration, we will bring
            it to life, infusing rich traditions.
          </p>
          <p className="text-gray-700 mb-4 ">
            We also offer venue selection assistance and booking services to facilitate an easier
            planning process.
          </p> 
          <p className="text-gray-700 " >
            Our track record includes clients from India and abroad, making us your ideal partner
            for a <a href="#" className="text-yellow-600 font-semibold underline">dream destination wedding in , India.</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeDestination;