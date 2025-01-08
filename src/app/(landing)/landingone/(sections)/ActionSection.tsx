"use client";
import Image from "next/image";
import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const LandingOneActionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div
      ref={ref}
      className="flex h-auto py-6 sm:py-0 sm:h-screen flex-col mx-auto gap-6 max-w-5xl items-center justify-center"
    >
      <div className="flex flex-col gap-4">
        <motion.div
          style={{
            transform: isInView ? "none" : "translateY(150px)",
            opacity: isInView ? 1 : 0,

            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
          }}
          className="text-3xl sm:text-6xl font-[400] text-center space-x-2"
        >
          Where your vision <br />
          <div className="flex gap-2 items-center justify-center">
            <span>finds its</span>
            <Image
              width={200}
              height={90}
              src="/minihouse.jpeg"
              alt="Mini house"
              className="sm:w-28 sm:h-9 w-20 h-6 rounded-tr-full object-cover overflow-hidden rounded-bl-full"
            />
            <span>home.</span>
          </div>
        </motion.div>

        <motion.div
          style={{
            transform: isInView ? "none" : "translateY(150px)",
            opacity: isInView ? 1 : 0.75,

            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s",
          }}
          className="text-sm sm:text-lg font-[400] text-slate-400 px-4 text-center"
        >
          Heaven offers more than just a place to live- it&apos;s a place
          designed to reflect your <br /> unique style, crafted with timeless
          precision, and build to inspire for generations to come.
        </motion.div>

        <motion.div
          style={{
            transform: isInView ? "none" : "translateY(150px)",
            opacity: isInView ? 1 : 0.75,

            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s",
          }}
          className="flex items-center justify-center mx-auto w-fit bg-slate-200 rounded-lg p-[2px] sm:p-1"
        >
          <input
            placeholder="Enter your email"
            className="outline-none bg-transparent w-fit placeholder:text-sm sm:placeholder:text-lg placeholder:text-slate-400 focus-within:outline-none focus:outline-none ring-0 focus:ring-0 p-[2px] sm:p-1"
            type="text"
          />
          <button className="text-sm sm:text-lg hover:scale-[1.01] hover:shadow-[0px_5px_4px_3px_slate-500] transition sm:px-4 px-2 py-[2px] sm:py-1.5 rounded-lg bg-black text-white">
            Stay Updated
          </button>
        </motion.div>
      </div>

      <motion.div
        style={{
          transform: isInView ? "none" : "translateY(150px)",
          opacity: isInView ? 1 : 0.75,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
        }}
        className="mx-auto relative w-full max-w-6xl [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.95),rgba(0,0,0,0.9)_50%,rgba(0,0,0,0.2)_90%,transparent_100%)]"
      >
        <Image
          className="mx-auto"
          src="/img3.png"
          alt="Third image"
          height={500}
          width={800}
        />
      </motion.div>
    </div>
  );
};

export default LandingOneActionSection;
