import React from "react";
import { motion } from "framer-motion";

const articles = [
  {
    img: "https://designingmedia.com/bridely/wp-content/uploads/2024/01/blog-img-1.jpg",
    title: "Tips for Choosing the Perfect Wedding",
    date: "March 7, 2024",
    tag: "Venue Selection",
  },
  {
    img: "https://designingmedia.com/bridely/wp-content/uploads/2024/01/blog-img-2.jpg",
    title: "Budget-Friendly Wedding Planning Tips",
    date: "March 7, 2024",
    tag: "Seasonal Ideas",
  },
  {
    img: "https://designingmedia.com/bridely/wp-content/uploads/2024/01/blog-img-3.jpg",
    title: "Top Destinations and Travel Tips",
    date: "March 7, 2024",
    tag: "Honeymoon",
  },
];

const cardVariants = {
  hover: {
    scale: 1.03,
    boxShadow: "0 12px 24px rgba(0,0,0,0.12)",
    transition: { duration: 0.3 },
  },
};

const WeddingTipsSection = () => {
  return (
    <section className="bg-[#eef6f7] py-20 px-4 lg:px-70">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-gray-600 mb-2 font-medium text-sm uppercase">We Share Expert Advice</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-12">
          Your Source for Wedding <br /> Inspiration and Tips
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover="hover"
              className="bg-white rounded-3xl overflow-hidden shadow-sm transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-64 object-cover rounded-t-3xl"
                />
                <span className="absolute top-4 right-4 bg-gray-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                  {item.tag}
                </span>
              </div>
              <div className="p-5 text-left">
                <p className="text-sm text-gray-500 mb-1">{item.date}</p>
                <h3 className="text-sm font-semibold text-gray-800 leading-snug">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeddingTipsSection;
