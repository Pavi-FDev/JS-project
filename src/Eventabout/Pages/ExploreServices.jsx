import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ProgressBar = ({ label, value, delay }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (inView) {
      controls.start({ width: `${value}%`, transition: { duration: 1, delay } });
      setTimeout(() => setWidth(value), 1000 * (delay + 1));
    }
  }, [inView, controls, value, delay]);

  return (
    <div className="mb-6 mt-5 ">
      <h4 className="font-semibold text-sm mb-2">{label}</h4>
      <div className="w-full bg-gray-200 h-3 rounded-full">
        <motion.div
          ref={ref}
          initial={{ width: 0 }}
          animate={controls}
          className="bg-gray-600 h-2 rounded-full relative"
        >
          <span className="absolute right-2 top-[-28px] text-xs font-semibold ">
            {width}%
          </span>
        </motion.div>
      </div>
    </div>
  );
};

const ExploreServices = () => {
  return (
    <section className="bg-white py-16 px-4 lg:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Text Content */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
         
          <p className="text-black font-medium font-medi">Bridely Fun Facts</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            Explore our <br /> wedding Services
          </h2>
          <p className="text-gray-600 max-w-md">
            When the right team comes together, the overall quality of the event naturally rises. Seamless communication, shared vision, and expert execution create an experience that feels polished, meaningful, and memorable.
          </p>
        </motion.div>

        {/* Right Progress Bars */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full "
        >
          <ProgressBar label="Professionality" value={85} delay={0.1} />
          <ProgressBar label="Food Ordering" value={60} delay={0.2} />
          <ProgressBar label="Experience And Quality" value={90} delay={0.3} />
          <ProgressBar label="Guarantee" value={80} delay={0.4} />
        </motion.div>
      </div>
    </section>
  );
};

export default ExploreServices;


// import React, { useEffect, useState } from "react";
// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// // Function to calculate rating out of 5 based on percentage
// const getStars = (value) => {
//   const fullStars = Math.round((value / 100) * 5);
//   return "★".repeat(fullStars) + "☆".repeat(5 - fullStars);
// };

// // Single progress bar component
// const ProgressBar = ({ label, value, delay }) => {
//   const controls = useAnimation();
//   const [width, setWidth] = useState(0);
//   const [ref, inView] = useInView({ triggerOnce: true });

//   useEffect(() => {
//     if (inView) {
//       controls.start({ width: `${value}%`, transition: { duration: 1, delay } });
//       setTimeout(() => setWidth(value), 1000 * (delay + 1));
//     }
//   }, [inView, controls, value, delay]);

//   return (
//     <div className="mb-8" ref={ref}>
//       <div className="flex justify-between mb-1">
//         <h4 className="font-semibold text-lg">{label}</h4>
//         <span className="text-sm text-gray-500 font-medium">{getStars(value)}</span>
//       </div>
//       <div className="w-full bg-gray-200 h-3 rounded-full">
//         <motion.div
//           initial={{ width: 0 }}
//           animate={controls}
//           className="bg-teal-300 h-3 rounded-full relative"
//         >
//           <span className="absolute right-2 top-[-24px] text-xs text-white font-semibold">
//             {width}%
//           </span>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// // Main section component
// const ExploreServices = () => {
//   return (
//     <section className="bg-white py-16 px-4 lg:px-20">
//       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
//         {/* Left Content */}
//         <motion.div
//           initial={{ x: -80, opacity: 0 }}
//           whileInView={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="space-y-6"
//         >
//           <p className="text-pink-400 font-medium text-lg">Bridely Fun Facts</p>
//           <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
//             Explore our <br /> wedding Services
//           </h2>
//           <p className="text-gray-600 max-w-md">
//             Lorem ipsum dolor sit amet consectetur adipiscing elit sed doeiusm tempor incididunt
//           </p>
//         </motion.div>

//         {/* Right Progress Bars */}
//         <motion.div
//           initial={{ y: 50, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           transition={{ duration: 1 }}
//           viewport={{ once: true }}
//           className="w-full "
//         >
//           <ProgressBar label="Professionality" value={85} delay={0.1} />
//           <ProgressBar label="Food Ordering" value={70} delay={0.2} />
//           <ProgressBar label="Experience And Quality" value={90} delay={0.3} />
//           <ProgressBar label="Guarantee" value={80} delay={0.4} />
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default ExploreServices;
