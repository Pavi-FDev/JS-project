import { useState } from "react";
import { motion } from "framer-motion";
import city1 from "../assets/images/city1.webp";
import city2 from "../assets/images/city2.webp";
import city3 from "../assets/images/city3.webp";
import planet1 from "../assets/images/planet1.jpg";
import planet2 from "../assets/images/planet2.webp";
import { RiPlayMiniFill } from "react-icons/ri";

const Gallery = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) =>
      prevIndexes.map((prevIndex) => (prevIndex + 1) % 5)
    );
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) =>
      prevIndexes.map((prevIndex) => (prevIndex + 4) % 5)
    );
  };

  const images = [city1, city2, city3, planet1, planet2];
  const positions = ["center", "left1", "left", "right", "right1"];

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left1: { x: "-50%", scale: 0.7, zIndex: 3 },
    left: { x: "-90%", scale: 0.5, zIndex: 2 },
    right: { x: "90%", scale: 0.5, zIndex: 1 },
    right1: { x: "50%", scale: 0.7, zIndex: 3 },
  };

  return (
    <div className="flex items-center flex-col justify-center  lg:mt-25 min-h-screen relative overflow-hidden px-10 md:px-10 ">
      <div className="relative w-full h-full flex items-center justify-center">
        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt={`slide-${index}`}
            className="rounded-[12px] h-[250px] md:h-[400px] lg:h-[500px]"
            initial="center"
            animate={positions[positionIndexes[index]]}
            variants={imageVariants}
            transition={{ duration: 0.5 }}
            style={{ position: "absolute" }}
            
              // className="rounded-[12px] h-[250px] md:h-[400px] lg:h-[500px] w-[80%] md:w-[50%] lg:w-[40%]"
          />
        ))}
      </div>
      <div className="flex flex-row gap-3 lg:mt-80 z-10 border border-blue-600">
        <button
          className="text-white bg-gradient-to-r from-gray-900 to-yellow-500  rounded-full py-1 px-2 text-sm md:text-base cursor-pointer"
          onClick={handleBack}
        >
          Back
        </button>
        <button
          className="text-white bg-gradient-to-r from-gray-900 to-yellow-500  rounded-full py-1 px-2 text-sm md:text-base cursor-pointer"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
      
    </div>
  );
};

export default Gallery;
