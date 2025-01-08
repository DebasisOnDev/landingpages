"use client";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import React, { useRef } from "react";
import { useInView, motion } from "motion/react";

const Footer = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  return (
    <div
      ref={ref}
      className="relative px-4 sm:px-6 lg:px-8 xl:px-12 bg-gradient-to-t from-sky-100 via-sky-300/40 to-sky-500/40 mx-auto min-h-[80vh] py-12"
    >
      <div className="flex translate-y-20 sm:translate-y-32  flex-col gap-6 sm:gap-8 mb-12 sm:mb-16 items-center justify-between max-w-4xl mx-auto">
        <motion.h1
          style={{
            transform: isInView ? "none" : "translateY(100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
          }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-[400] text-center"
        >
          Your dream <br /> home awaits.
        </motion.h1>
        <motion.span
          style={{
            transform: isInView ? "none" : "translateY(100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
          }}
          className="text-white/80 font-[400] text-center text-sm sm:text-base md:text-lg"
        >
          Whether you&apos;re exploring our homes or envisioning
          <br className="hidden sm:block" /> something custom, we&apos;re here
          to bring your dream home to life
        </motion.span>
        <motion.button
          style={{
            transform: isInView ? "none" : "translateY(100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s",
          }}
          className="bg-white cursor-pointer w-20 sm:w-24 group/btn hover:scale-[1.01] duration-150 text-white  px-[4px] py-1 flex items-center justify-between gap-1.5 rounded-2xl"
        >
          <span className="text-xs text-black mx-auto text-justify sm:text-center">
            View all
          </span>
          <span className=" p-[3px] shadow-sm shadow-slate-300 sm:p-[5px] group-hover/btn:rotate-[360deg] duration-150 rounded-full bg-white text-black">
            <MoveUpRight size={15} />
          </span>
        </motion.button>
      </div>

      <motion.div
        style={{
          transform: isInView ? "none" : "translateY(100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s",
        }}
        className="relative w-full max-w-6xl mx-auto"
      >
        <Image
          src="/footer.png"
          alt="Footer image"
          width={1200}
          height={400}
          className="w-full h-auto object-cover rounded-lg [mask-image:linear-gradient(to_right,transparent_0%,#000_10%,#000_90%,transparent_100%)]"
        />

        <footer className="absolute bottom-0 left-0 right-0 w-full px-4 sm:px-6 py-4 sm:py-6 flex flex-col sm:flex-row items-center justify-between text-white gap-1 sm:gap-6 bg-gradient-to-b sm:from-transparent sm:via-sky-200 sm:to-sky-300 from-transparent via-sky-100 to-sky-200">
          <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6">
            <span className="hover:text-white/80 cursor-pointer text-sm">
              Contact
            </span>
            <span className="hover:text-white/80 cursor-pointer text-sm">
              Privacy Policy
            </span>
            <span className="hover:text-white/80 cursor-pointer text-sm">
              Terms
            </span>
          </div>
          <div className="order-first sm:order-none text-base sm:text-lg font-[400]">
            Heaven*
          </div>
          <div className="text-xs sm:text-sm text-white/80 text-center sm:text-right">
            @2025 Heaven Houses, All rights reserved
          </div>
        </footer>
      </motion.div>
    </div>
  );
};

export default Footer;
