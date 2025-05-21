import { motion } from 'framer-motion';
import { FaRegCalendarCheck, FaUserTie, FaClipboardList, FaUsers } from 'react-icons/fa';

const features = [
  {
    icon: <FaClipboardList className="text-yellow-600 text-5xl" />,
    title: 'Customized Planning',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
  },
  {
    icon: <FaUserTie className="text-yellow-600 text-5xl" />,
    title: 'Experienced Professional',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
  },
  {
    icon: <FaUsers className="text-yellow-600 text-5xl" />,
    title: 'Vendor Management',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
  },
  {
    icon: <FaRegCalendarCheck className="text-yellow-600 text-5xl" />,
    title: 'Timeline Creation',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.7
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const headingVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: 'easeOut' } }
};

export default function PlanEvent() {
  return (
    <div className="relative md:rounded-tl-[10%] md:rounded-tr-[10%] lg:rounded-tl-[15%] lg:rounded-tr-[15%] border-t-4 border-yellow-600 bg-white px-6 py-16">
      
      <motion.div
        className="text-center md:mb-12 mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.p
          variants={headingVariants}
          className="text-black font-medium"
        >
          Personalized Planning Services
        </motion.p>

        <motion.h2
          variants={headingVariants}
          className="text-4xl md:text-5xl font-bold mt-2 mb-4"
        >
          Features of Our Wedding <br className="hidden md:block" /> and Event Planning Services
        </motion.h2>

        <motion.p
          variants={headingVariants}
          className="text-gray-600 max-w-xl mx-auto"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </motion.p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="flex items-start gap-4 text-justify bg-gray-100 rounded-lg p-10 shadow-md"
            variants={itemVariants}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <div className="shrink-0">{feature.icon}</div>
            <div>
              <p className="text-xl font-semibold mb-1">{feature.title}</p>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      
    </div>
  );
}
