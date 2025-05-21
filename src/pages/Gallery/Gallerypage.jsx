import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const categories = {
  "Wedding Decors": [
          "https://eventsmanagementkerala.com/wp-content/uploads/2023/10/IMG_20231010_101609_331.jpg",
  "https://eventsmanagementkerala.com/wp-content/uploads/2023/08/Kerala-Haldi-stage-decoration-wedding.webp",
  "https://eventsmanagementkerala.com/wp-content/uploads/2023/08/Germen-transparent-tent-wedding-events-Kerala%E2%80%8B.webp",
  "https://eventsmanagementkerala.com/wp-content/uploads/2023/08/kerala-christian-wedding-rituals-and-procedur.webp",
  "https://eventsmanagementkerala.com/wp-content/uploads/2023/07/family-table-3.webp",
  "https://eventsmanagementkerala.com/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-17-at-10.35.37-AM.jpeg",
  "https://eventsmanagementkerala.com/wp-content/uploads/2023/10/342066241_808106290744158_4973728954059401482_n.jpg",
  "https://eventsmanagementkerala.com/wp-content/uploads/2023/10/wedding-stage-decoration-in-kerala-out-door-wedding.webp",
  "https://eventsmanagementkerala.com/wp-content/uploads/2023/10/Destination-wedding-in-Guruvayur.webp",
  "https://eventsmanagementkerala.com/wp-content/uploads/2023/02/blog-2.27e5a04.webp",
  "https://eventsmanagementkerala.com/wp-content/uploads/2022/09/whatsapp-image-2021-01-04-at-12-50-15-pm-3_15_185637-162346964694147.webp",
  "https://eventsmanagementkerala.com/wp-content/uploads/2023/05/bithday-event-management-kerala.webp",
  "https://eventsmanagementkerala.com/wp-content/uploads/2023/06/kerala-g1933ac25c_1280.webp",
  "https://eventsmanagementkerala.com/wp-content/uploads/2023/08/oppana-Malappuram.webp",
  "https://eventsmanagementkerala.com/wp-content/uploads/2023/10/IMG-20231012-WA0038.jpg",
  "https://eventsmanagementkerala.com/wp-content/uploads/2023/07/kottayam-stage.webp",
  "https://eventsmanagementkerala.com/wp-content/uploads/2023/07/family-table.webp",
  "https://eventsmanagementkerala.com/wp-content/uploads/2023/08/kerala-haldi-stage-decoration-weddings.webp",
  "https://eventsmanagementkerala.com/wp-content/uploads/2022/09/WhatsApp-Image-2022-08-26-at-7.41.10-PM-1.webp",
  "https://eventsmanagementkerala.com/wp-content/uploads/2022/09/WhatsApp-Image-2022-08-26-at-7.41.12-PM-1.webp",
  "https://eventsmanagementkerala.com/wp-content/uploads/2022/09/WhatsApp-Image-2022-08-26-at-7.41.14-PM.webp",
  "https://eventsmanagementkerala.com/wp-content/uploads/2022/09/WhatsApp-Image-2022-08-26-at-7.41.17-PM.webp",
  "https://eventsmanagementkerala.com/wp-content/uploads/2022/09/WhatsApp-Image-2022-08-26-at-7.48.05-PM-1.webp",
  "https://eventsmanagementkerala.com/wp-content/uploads/2022/09/WhatsApp-Image-2022-08-26-at-7.48.06-PM.webp",
  "https://eventsmanagementkerala.com/wp-content/uploads/2022/09/WhatsApp-Image-2022-08-26-at-7.48.07-PM-1.webp",
  "https://eventsmanagementkerala.com/wp-content/uploads/2022/09/WhatsApp-Image-2022-08-26-at-7.48.08-PM.webp",
  "https://eventsmanagementkerala.com/wp-content/uploads/2022/09/WhatsApp-Image-2022-08-26-at-7.53.35-PM.webp",
  "https://eventsmanagementkerala.com/wp-content/uploads/2023/10/Event-management-company-in-Kerala-2.webp",
    // ... add all your other links here
  ],
  "Corporate Event": [
   "https://eventsmanagementkerala.com/wp-content/uploads/2024/12/crystal-convention-centre-nagaroor-thiruvananthapuram-auditoriums-mujnpxy8z3.webp"
  ],
  "Music & Entertainment": [
   'https://eventsmanagementkerala.com/wp-content/uploads/2024/12/DJ-Raju-Asher-web.webp',
   'https://eventsmanagementkerala.com/wp-content/uploads/2024/12/jaspira-w-scaled.webp',
   'https://eventsmanagementkerala.com/wp-content/uploads/2024/12/DJ-JOZION-web.webp',
   'https://eventsmanagementkerala.com/wp-content/uploads/2024/12/DJ-AaN-web.webp',
   'https://eventsmanagementkerala.com/wp-content/uploads/2024/12/DJ-AZWI-web.webp',
   'https://eventsmanagementkerala.com/wp-content/uploads/2024/12/Dj-shakz.webp',
    "https://eventsmanagementkerala.com/wp-content/uploads/2024/12/Melodia-web-scaled.webp"
   
  ],
  "Private Parties": [
    "https://eventsmanagementkerala.com/wp-content/uploads/2024/12/crystal-convention-centre-nagaroor-thiruvananthapuram-auditoriums-mujnpxy8z3.webp",
    
  ],
  "Other events": [
    "https://eventsmanagementkerala.com/wp-content/uploads/2023/06/kerala-g1933ac25c_1280.webp",
    "https://eventsmanagementkerala.com/wp-content/uploads/2023/07/family-table.webp",
  ],
};

const tabs = Object.keys(categories);

const Gallerypage = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [zoomedImage, setZoomedImage] = useState(null);

  const images = categories[activeTab];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
   <> 
   <div className="px-6 md:px-7 lg:px-60 text-center mt-20 overflow-hidden">
      {/* Text Section */}
      <h2 className=" px-10 py-10 font-italic md:text-4xl text-gray-600 ">Photos Gallery of JS</h2>
      <p className="text-gray-700 text-lg mb-6 leading-relaxed ">
        <strong>JS Events</strong> always prioritizes the satisfaction of our clients in Kerala. We are
        particularly delighted to work with the Malayalee community, bringing joy from the heart. Here are some photos
         of our recent work in Kerala that we would like to share with you.
      </p>
      <p className="text-gray-600 text-sm mb-10 leading-relaxed ">         
        Please note that we have only showcased a few photos here due to our company policy limitations. However, if
         you wish to explore our extensive collection, which includes our latest designs, decorations, wedding dance
        videos, other entertainment, recent wedding photos, and new trends in decorations and other event aspects,
        kindly contact us or send us a message on WhatsApp or Gmail. We have a dedicated team available to promptly
        respond to your inquiries, provide additional photos, and address any clarifications you may have. So, don’t
        hesitate; send us a message now!
       </p>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-10 ">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeTab === tab
                ? "bg-yellow-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-purple-100"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Animated Image Grid */}
      <motion.div
        ref={ref}
        className="grid gap-5 grid-cols-2 md:grid-cols-3 "
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          visible: {
            transition: { staggerChildren: 0.1 },
          },
        }}
      >
        {images.map((src, index) => (
          <motion.img
            key={index}
            src={src}
            alt={`event-${index}`}
            className="rounded-lg shadow-md  object-cover w-full h-60"
            loading="lazy"
            whileHover={{ scale: 1.03 }}
            onClick={() => setZoomedImage(src)}
            variants={{
              hidden: { opacity: 0, y: 50, x: 50 },
              visible: {
                opacity: 1,
                y: 0,
                x: 0,
                transition: { duration: 0.4 },
              },
            }}
          />
        ))}
      </motion.div>

      {/* Zoom Modal */}
      <AnimatePresence>
        {zoomedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
            onClick={() => setZoomedImage(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              src={zoomedImage}
              alt="Zoomed"
              className="max-w-full max-h-full rounded-lg shadow-2xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()} // Prevent close on image click
            />
          </motion.div>
        )}
      </AnimatePresence>
      </div>
   </>
  );
};

export default Gallerypage;