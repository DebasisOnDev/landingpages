/* eslint-disable @next/next/no-img-element */
"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState, useEffect, useCallback } from "react";

type Heroitem = {
  id: string;
  title: string;
  img: string;
};
const heroitems: Heroitem[] = [
  { id: "1", title: "Sea", img: "/t2.jpg" },
  { id: "2", title: "Land", img: "/t3.jpg" },
  { id: "3", title: "Air", img: "/t1.jpg" },
];

const LandingTwoHero = () => {
  const [selectedItem, setSelectedItem] = useState<Heroitem>(heroitems[0]);
  const nextItem = useCallback(() => {
    setSelectedItem((current) => {
      const currentIndex = heroitems.findIndex(
        (item) => item.title === current.title
      );
      const nextIndex = (currentIndex + 1) % heroitems.length;
      return heroitems[nextIndex];
    });
  }, []);

  useEffect(() => {
    const intervalId = setInterval(nextItem, 5000);
    return () => clearInterval(intervalId);
  }, [nextItem]);

  return (
    <div className="min-h-screen">
      <div className="w-full flex text-ltwo-white pr-28">
        <div className="w-[120px] flex items-end justify-center p-1 pb-28">
          <div className=" flex flex-col gap-3">
            {heroitems.map((item) => (
              <span
                key={item.id}
                className={`font-[400] transition  ${
                  selectedItem.title === item.title
                    ? " text-ltwo-orange"
                    : "text-ltwo-white "
                }`}
              >
                {item.title}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full border-l-[0.25px] border-b-[0.25px] h-screen border-opacity-20 border-r border-gray-100">
          <div className="flex flex-col py-6 px-1 w-full h-1/3 gap-2">
            <div className="flex items-center justify-between w-full h-full font-montserrat">
              <h1 className="text-8xl text-ltwo-white font-[300] w-2/3">
                TRANSPORT
              </h1>
              <span className="w-1/3 font-[300] flex items-end justify-end bg-ltwo-black/50 text-ltwo-white/80">
                We Manage Lead Logistics <br /> for World&apos;s Multinational{" "}
                <br /> Companies
              </span>
            </div>
            <div className="flex items-center justify-center w-full font-montserrat font-[300] text-8xl text-ltwo-white">
              <h1>& LOGISTICS</h1>
            </div>
          </div>
          <div className="h-2/3 w-full relative ">
            <AnimatePresence initial={false} mode="popLayout">
              <motion.div
                key={selectedItem.title}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <img
                  src={selectedItem.img}
                  alt={selectedItem.title}
                  className="object-cover h-full w-full"
                />
              </motion.div>
            </AnimatePresence>
            <motion.span
              key={selectedItem.title}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className=" absolute bottom-6 text-8xl font-[600] font-montserrat right-4"
            >
              {selectedItem.title.toUpperCase()}
            </motion.span>
            <a
              href="#"
              className=" absolute -top-12 hover:shadow-sm hover:shadow-ltwo-orange hover:border-[5px] hover:border-ltwo-white hover:-rotate-[0deg] transition right-10 w-28 h-28 -rotate-45 flex items-center justify-center rounded-full p-2 bg-ltwo-orange text-ltwo-white font-[400] "
            >
              Get a date
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingTwoHero;
