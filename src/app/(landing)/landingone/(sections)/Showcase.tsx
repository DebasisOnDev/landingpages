"use client";
import React, { useRef } from "react";
import { useInView, motion } from "motion/react";
import StyledCarousel from "../(components)/StyledCarousel";
const properties = [
  {
    title: "The Willowbrook",
    price: 1150000,
    description:
      "A serene retreat blending modern architecture with natural surroundings ",
    bedrooms: 4,
    bathrooms: 5,
    imageUrl: "/car1.jpeg",
  },
  {
    title: "Aurora Retreat",
    price: 980000,
    description: "Luxurious modern living with panoramic mountain views",
    bedrooms: 3,
    bathrooms: 4,
    imageUrl: "/car2.jpeg",
  },
  {
    title: "Cedar Heights",
    price: 1250000,
    description: "Contemporary design meets sustainable living",
    bedrooms: 5,
    bathrooms: 6,
    imageUrl: "/car3.jpeg",
  },
  {
    title: "Exonys Retreat",
    price: 980000,
    description: "Luxurious modern living with panoramic mountain views",
    bedrooms: 3,
    bathrooms: 4,
    imageUrl: "/car4.jpeg",
  },
  {
    title: "Pearl Heights",
    price: 1250000,
    description: "Contemporary design meets sustainable living",
    bedrooms: 5,
    bathrooms: 6,
    imageUrl: "/car5.jpeg",
  },
];
const Showcase = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  return (
    <div
      ref={ref}
      className=" py-6 px-5 sm:py-0 sm:px-0 flex flex-col items-center justify-center mx-auto gap-6 max-w-6xl h-auto sm:min-h-screen
    
    "
    >
      <motion.div
        style={{
          transform: isInView ? "none" : "translateY(150px)",
          opacity: isInView ? 1 : 0,

          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
        }}
        className=" flex items-center justify-between w-full"
      >
        <h1 className=" text-left  text-2xl sm:text-5xl font-[400] text-black">
          Discover homes <br />
          designed to inspire.
        </h1>
        <span className=" text-left  text-xs sm:text-lg font-[400] text-slate-400">
          Handpicked residences where <br />
          luxury, design and comfort meet.
        </span>
      </motion.div>
      <motion.div
        style={{
          transform: isInView ? "none" : "translateY(150px)",
          opacity: isInView ? 1 : 0.75,

          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s",
        }}
        className=" w-full text-black "
      >
        <StyledCarousel properties={properties} />
      </motion.div>
    </div>
  );
};

export default Showcase;
