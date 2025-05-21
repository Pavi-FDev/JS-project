import React from 'react';
import { motion } from 'framer-motion';

const cardData = [
  {
    title: "Wedding Planning",
    img: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0",
    description: "From intimate ceremonies to grand celebrations, our wedding planning services cover every detail with precision and care. We bring your vision to life — from venue selection and décor to entertainment and guest coordination — so you can focus on cherishing every moment of your special day."
  },
  {
    title: "Celebration Events",
    img: "https://images.unsplash.com/photo-1544155892-b2b6c64204fc?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0",
    description: "we specialize in crafting unforgettable celebration events. From creative themes and personalized décor to seamless coordination, we turn your milestones into cherished memories with style and joy."
  },
  {
    title: "Farewell Parties",
    img: "https://images.unsplash.com/photo-1607861884586-c7cfaed16290?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0",
    description: "Goodbyes are never easy, but a meaningful farewell can leave lasting memories. We plan heartfelt farewell parties that honor achievements, celebrate friendships, and create moments to cherish. From elegant setups to fun, personalized touches — we make the goodbye feel special."
  },
  {
    title: "Corporate Events",
    img: "https://images.unsplash.com/photo-1670213193254-cbbebedfe8b9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Corporate events are more than just gathering From conferences and product launches to team-building retreats and annual celebrations, we handle every detail to ensure your event runs seamlessly, reflects your company’s identity, and leaves a lasting impression."
  },
  {
    title: "Birthday Parties",
    img: "https://images.unsplash.com/photo-1583875762487-5f8f7c718d14?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ4fHx8ZW58MHx8fHx8",
    description: "Birthday parties are all about joy, laughter, and unforgettable memories. Whether it’s a fun-filled kids’ celebration, or a surprise party for a loved one, we bring creativity,to make your special day truly magical.our birthday parties bring joy to life with heartwarming moments."
  },
  {
    title: "Baby Showers",
    img: "https://images.unsplash.com/photo-1602863211750-0b05508292b0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: " A baby shower is a celebration of new beginnings and the joy of welcoming a little one into the world. We create warm, elegant, and memorable gatherings filled with love, laughter,and adorable decor to personalized touches — making the mom-to-be feel truly cherished on her special day."
  }
];

const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' }
  })
};

const DreamEvent = () => {
  return (
    <div className='relative w-full'>
      <div
        style={{
          backgroundImage: "url('https://plus.unsplash.com/premium_photo-1674235768948-5d365df2f20b?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.1.0')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
        className="relative bg-fixed w-full"
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0" />
        <div className="relative z-10 px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16">

          {/* Heading */}
          <motion.div
            className="text-center space-y-2 mb-12"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <p className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">Bringing Your Dream</p>
            <p className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">Event to Life</p>
          </motion.div>

          {/* All 6 Cards in One Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {cardData.map((card, index) => (
              <motion.div
                key={index}
                className="bg-white bg-opacity-90 border-4  border-white rounded-xl shadow-lg overflow-hidden hover:border-yellow-600 hover:shadow-2xl transition-all duration-500"
                custom={index}
                initial="hidden"
                whileInView="visible"
                variants={cardVariant}
                viewport={{ once: true }}
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-[200px] sm:h-[240px] md:h-[250px] object-cover border-b-4 border-white"
                />
                <div className="px-5 py-4 text-justify min-h-[220px] flex flex-col">
                  <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                  <p className="text-gray-600 text-sm">{card.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default DreamEvent;
