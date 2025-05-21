import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Blog = () => {
  
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [3.5, 1]);

  return (
    <div className="relative bg-white h-screen w-full overflow-hidden">

      <motion.img
        src="https://images.unsplash.com/photo-1724855946369-9b4612c40fc2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Blog Background"
        className="absolute top-0 left-0 h-full w-full object-cover"
        style={{ scale }}
      />

      <div className="absolute inset-0 bg-black/40  flex flex-col justify-center items-center text-white px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Our Blog</h1>
        <p className="text-lg md:text-xl max-w-2xl">
          Dive into stories, ideas, and insights that inspire creativity and connection.
        </p>
      </div>
    </div>
  );
};

export default Blog;
