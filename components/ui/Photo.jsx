"use client";
import React from 'react'
import { motion } from "framer-motion"
import Image from 'next/image';
const Photo = () => {
  return (
    <div className="relative w-[300px] h-[300px] xl:w-[506px] xl:h-[506px] mx-auto">
  {/* Profile Image */}
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{
      opacity: 1,
      transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" }
    }}
    className="absolute inset-0 mix-blend-lighten"
  > 
    <Image 
      src="/assets/profphoto.png" 
      fill 
      priority 
      quality={100} 
      alt="Profile"
      className="object-cover"
    />
  </motion.div>

  {/* Circle Border */}
  <motion.svg 
    className="absolute inset-0 w-full h-full" 
    viewBox="0 0 506 506"
    xmlns="http://www.w3.org/2000/svg"
    fill="transparent"
  >
    <motion.circle 
      cx="253" 
      cy="253" 
      r="250" 
      stroke="#00ff99" 
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ strokeDasharray: "24 10 0 0" }}
      animate={{
        strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
        rotate: [120, 360]
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        repeatType: "reverse"
      }}
    />
  </motion.svg>
</div>

  );
};

export default Photo