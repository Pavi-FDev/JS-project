import React from 'react'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.9
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: 'easeOut'
    }
  }
}

const expertsData = [
  {
    name: 'Asher',
    role: 'Wedding Planner',
    imageUrl:
      'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Jeshna',
    role: 'Conference Planner',
    imageUrl:
      'https://images.unsplash.com/photo-1509839862600-309617c3201e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Flynn',
    role: 'Catering Manager',
    imageUrl:
      'https://images.unsplash.com/photo-1736194689767-9e3c4e7bd7f6?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  }
]

const Experts = () => {
  return (
    <div className="relative bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 text-center py-20">
        <p className="text-3xl md:text-4xl text-black font-bold mb-12">
          Meet the Experts <br />Behind Your Dream Wedding
        </p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {expertsData.map((expert, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-gray-100 rounded-3xl flex flex-col items-center shadow-md "
            >
              {/* Image Container with relative for label positioning */}
              <div className="relative w-full h-[320px]">
                <img
                  src={expert.imageUrl}
                  alt={expert.name}
                  className="w-full h-full object-cover rounded-3xl border-8 border-white"
                />
                <div className="absolute bottom-0 translate-y-1/2 bg-gray-900 text-white px-6 py-3 border-4 border-white rounded-tl-3xl rounded-br-3xl shadow-md w-4/5 mx-auto left-1/2 -translate-x-1/2 text-center">
                  <h3 className="font-semibold text-lg">{expert.name}</h3>
                  <p className="text-sm">{expert.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Experts
