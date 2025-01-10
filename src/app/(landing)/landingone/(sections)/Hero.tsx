/* eslint-disable @next/next/no-img-element */
"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useRef } from "react";

const LandingOneHero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);

  return (
    <div
      ref={ref}
      className=" pb-4 drop-shadow-2xl mx-auto h-auto sm:min-h-screen px-6 py-4   "
    >
      <div className="mx-auto w-full flex items-center justify-center gap-2 flex-col">
        <div className="flex  flex-col gap-8 max-w-xl">
          <span className="text-center font-[400] text-3xl sm:text-6xl text-white">
            Extraordinary <br /> living begins here.
          </span>
          <span className="text-center text-sm sm:text-lg font-medium text-white">
            Timeless architectures, exclusive locations and luxury <br />
            homes designed to inspire your next chapter
          </span>
        </div>
        <motion.div
          style={{ y }}
          className="relative mx-auto max-w-6xl  overflow-hidden"
        >
          <img
            src="/house.png"
            alt="Home"
            className="-z-10 h-full object-cover"
          />
          <div className="absolute  inset-x-0 bottom-0 h-[40px] sm:h-[100px] bg-gradient-to-t from-#ECF3F9 via-slate-200 rounded-sm to-transparent" />
        </motion.div>
      </div>
    </div>
  );
};

export default LandingOneHero;
