"use client";
import Image from "next/image";
import React, { useCallback, useEffect, useState, useRef } from "react";
import { useInView, motion, AnimatePresence } from "framer-motion";

const imagelists = [
  {
    title: "Unparalleled Craftsmanship",
    description:
      "Every detail is meticulously designed and executed to ensure exceptional quality. From the finest materials to masterful finishes, your home reflects timeless precision and care.",
    img: "/acc1.jpeg",
  },
  {
    title: "Personalized Design",
    description:
      "Your home should be as unique as you are. With personalized design services, every space is tailored to reflect your tastes, lifestyle, and vision,.",
    img: "/acc2.jpeg",
  },
  {
    title: "Exclusive Locations",
    description:
      "Nestled in some of the most coveted areas, our properties offer the perfect balance of privacy, prestige, and convenience. Each location is carefully chosen to provide unparalleled access to luxury living.",
    img: "/acc3.jpeg",
  },
  {
    title: "Modern Innovation",
    description:
      "Equipped with the latest in smart home technology and innovative design, our homes offer cutting-edge solutions for comfort, convenience, and efficiency. ",
    img: "/acc4.jpeg",
  },
  {
    title: "Seamless Experience",
    description:
      "From the initial consultation to the final walkthrough, every step of your journey is thoughtfully curated to provide a seamless, stress-free experience. ",
    img: "/acc5.jpeg",
  },
];

const DetailsSection = () => {
  const [selectedItem, setSelectedItem] = useState(imagelists[0]);
  const [, setPreviousItem] = useState(imagelists[0]);
  const ref = useRef(null);
  const newRef = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const nextInView = useInView(newRef, { once: true, amount: 0.3 });

  const nextItem = useCallback(() => {
    setPreviousItem(selectedItem);
    setSelectedItem((current) => {
      const currentIndex = imagelists.findIndex(
        (item) => item.title === current.title
      );
      const nextIndex = (currentIndex + 1) % imagelists.length;
      return imagelists[nextIndex];
    });
  }, [selectedItem]);

  useEffect(() => {
    const intervalId = setInterval(nextItem, 5000);
    return () => clearInterval(intervalId);
  }, [nextItem]);

  return (
    <div
      ref={ref}
      className="max-w-6xl mx-auto px-5 sm:px-4 py-12 min-h-screen"
    >
      <div className="flex items-center justify-center flex-col mb-16">
        <motion.h1
          style={{
            transform: isInView ? "none" : "translateY(120px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
          }}
          className="text-3xl sm:text-5xl font-light text-gray-900 text-center mb-6"
        >
          The art of exceptional <br />
          living begins in the details.
        </motion.h1>
        <motion.p
          style={{
            transform: isInView ? "none" : "translateY(120px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className="text-sm sm:text-lg text-gray-500 text-center max-w-2xl"
        >
          Discover the details that makes every heaven home a masterpiece.
        </motion.p>
      </div>

      <motion.div
        style={{
          transform: isInView ? "none" : "translateY(120px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s",
        }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-start"
      >
        <AnimatePresence>
          <div ref={newRef} className="space-y-8">
            {imagelists.map((item, i) => (
              <motion.div
                key={item.title}
                layout
                layoutId={`item-${item.title}`}
                initial={false}
                style={{
                  transform: nextInView ? "none" : "translateY(120px)",
                  opacity: nextInView ? 1 : 0,
                  transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${
                    i === 0 ? i * 0.15 + 0.2 : i * 0.15
                  }s`,
                }}
                onClick={() => {
                  setPreviousItem(selectedItem);
                  setSelectedItem(item);
                }}
                className={`cursor-pointer transition-all duration-300 sm:pb-6 pb-2 border-b border-gray-200`}
              >
                <motion.h2
                  layout="position"
                  className="text-xl sm:text-2xl font-[400] text-black mb-2"
                >
                  {item.title}
                </motion.h2>
                <AnimatePresence mode="wait">
                  {selectedItem.title === item.title && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="text-slate-400 text-sm sm:text-base leading-relaxed"
                    >
                      {item.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>

        <div className="relative h-[350px] sm:h-[550px] rounded-2xl overflow-hidden">
          <AnimatePresence initial={false} mode="popLayout">
            <motion.div
              key={selectedItem.title}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={selectedItem.img}
                alt={selectedItem.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default DetailsSection;
