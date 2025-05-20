import React from "react";
import { motion } from "framer-motion";

const teamMembers = [
  { name: "Alisha Rees", img: "https://designingmedia.com/bridely/wp-content/uploads/2024/01/team-img-1.jpg" },
  { name: "Rhys Carter", img: "https://designingmedia.com/bridely/wp-content/uploads/2024/01/team-img-2.jpg" },
  { name: "Kyle Buckley", img: "https://designingmedia.com/bridely/wp-content/uploads/2024/01/team-img-3.jpg" },
  { name: "Maisie Walton", img: "https://designingmedia.com/bridely/wp-content/uploads/2024/01/team-img-4.jpg" },
];

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut", staggerChildren: 0.2 },
  },
};

const childVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

const MeetTheTeam = () => {
  return (
    <section className="bg-yellow-100 py-20 px-4 lg:px-60 lg:mt-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center"
      >
        {/* Left content */}
        <motion.div variants={childVariants} className="text-center md:text-left">
          
          <img
            src="https://designingmedia.com/bridely/wp-content/uploads/2022/07/Design_element.png"
            alt="mandala"
            className="mx-auto md:mx-0 mb-4 w-30 h-18"
          />
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug mb-4">
            Meet Our Creative <br /> Event Organizer
          </h2>
          <p className="text-gray-600 max-w-md mx-auto md:mx-0 mb-6">
            With over a decade of experience under my belt, I’ve built strong relationships with suppliers all over the world, allowing me to negotiate the best deals in every aspect of your event. I pride myself on keeping you organized and ensuring that every detail is covered, so you can relax and enjoy your special day without worry.
          </p>
   
        </motion.div>

        {/* Right grid of team members */}
        <motion.div
          variants={childVariants}
          className="grid grid-cols-2 gap-6 md:gap-8"
        >
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              variants={childVariants}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-full lg:h-56 object-cover hover:grayscale"
              />
              <div className="p-3 text-center font-medium text-lg">{member.name}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default MeetTheTeam;
