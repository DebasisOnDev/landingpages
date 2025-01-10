/* eslint-disable @next/next/no-img-element */
"use client";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import React, { useRef } from "react";
import { useInView, motion } from "motion/react";

const products = [
  {
    title: "The Future of Luxury. AI and Automation in Home Design.",
    badge: "blue-400",
    badgetext: "Technology",
    img: "/p1.jpeg",
  },
  {
    title: "Are Sustainable Materials the Future of Homes?",
    badge: "purple-400",
    badgetext: "Sustainability",
    img: "/car4.jpeg",
  },
  {
    title: "Exploring Minimalism with a Touch of Luxury.",
    badge: "orange-400",
    badgetext: "Minimalism",
    img: "/p3.jpeg",
  },
];

const InsightsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  return (
    <div
      ref={ref}
      className=" flex flex-col gap-8 max-w-6xl mx-auto p-5 sm:p-4 min-h-screen "
    >
      <motion.div
        style={{
          transform: isInView ? "none" : "translateY(150px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
        }}
        className=" flex items-center justify-between "
      >
        <h1 className=" text-3xl sm:text-5xl font-[400] text-black text-left">
          Discover insights, <br />
          trends, and inspiration
        </h1>
        <button className="bg-black w-20 sm:w-24 group/btn hover:scale-[1.01] duration-150 text-white  px-[4px] py-1 flex items-center justify-between gap-1.5 rounded-2xl">
          <span className="text-xs text-white mx-auto text-justify sm:text-center">
            View all
          </span>
          <span className=" p-[3px] sm:p-[5px] group-hover/btn:rotate-[360deg] duration-150 rounded-full bg-white text-black">
            <MoveUpRight size={15} />
          </span>
        </button>
      </motion.div>
      <motion.div
        style={{
          transform: isInView ? "none" : "translateY(150px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s",
        }}
        className=" h-[50vh] sm:h-[55vh]  rounded-lg  w-full flex   items-center justify-center"
      >
        <div className="  w-2/5  h-full ">
          <img
            src={"/insights.jpg"}
            alt="Insights"
            className=" object-cover rounded-l-lg w-full h-full "
          />
        </div>
        <div className=" bg-slate-200 rounded-r-lg flex flex-col items-start justify-between p-4 h-full w-3/5">
          <div className=" p-1 flex flex-col gap-4">
            <span className=" w-fit sm:px-3 px-1.5 sm:py-1 py-[2px] rounded-2xl bg-black text-xs sm:text-sm text-white/80 ">
              Must read
            </span>
            <h2 className=" text-left text-2xl sm:text-5xl font-[400] text-black">
              The Rise of Boutique <br /> Architecture in Luxury Living
            </h2>
            <span className=" sm:text-base text-xs  text-slate-400 text-left">
              Discover how Boutique Architecture redifined luxury living with
              its <br />
              focus on uniqueness, personalization and timeless design
            </span>
          </div>
          <div className=" w-full  ">
            <div className=" flex items-start  justify-between gap-4 p-2">
              <div className=" flex items-center justify-between gap-2">
                <Image
                  src={"/author.jpg"}
                  alt="Author"
                  width={75}
                  height={75}
                  className="rounded-full w-12 h-12 object-cover sm:w-auto sm:h-auto"
                />
                <div className=" flex flex-col">
                  <span className=" text-black text-sm sm:text-lg">
                    John Doe
                  </span>
                  <span className=" text-slate-400 text-xs sm:text-sm">
                    Editor, Heaven Homes
                  </span>
                </div>
              </div>
              <div className=" hidden sm:flex items-center justify-center ">
                <span className=" mt-4 w-fit px-3 py-1 rounded-2xl bg-red-600/75 text-sm text-white/80 ">
                  Lifestyle
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        style={{
          transform: isInView ? "none" : "translateY(150px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s",
        }}
        className=" flex flex-col sm:flex-row gap-6"
      >
        {products.map((p, i) => (
          <div
            className=" cursor-pointer relative flex flex-col  gap-3 sm:w-1/3 w-full h-[300px]"
            key={i}
          >
            <div className=" h-full w-full">
              <img
                src={p.img}
                alt={p.title}
                className=" py-1 hover:scale-[1.01] transform transition w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className=" absolute bottom-6 sm:bottom-0 sm:static flex items-center justify-between p-1">
              <h2 className=" text-xl sm:text-[18px] font-[400] sm:px-0 px-2.5 text-left text-white sm:text-black">
                {p.title}
              </h2>{" "}
              <span
                className={`bg-${p.badge} sm:flex hidden px-2 py-1 text-sm text-white rounded-lg `}
              >
                {p.badgetext}
              </span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InsightsSection;
