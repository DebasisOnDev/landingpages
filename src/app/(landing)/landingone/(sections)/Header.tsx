"use client";
import { PlusIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const LandingOneHeader = () => {
  const [textColor, setTextColor] = useState("rgb(255, 255, 255)");
  const [show, setShow] = useState(false);

  useEffect(() => {
    const updateColor = () => {
      const scrollPosition = window.scrollY - 500;
      const windowHeight = window.innerHeight;

      const progress = Math.min(scrollPosition / windowHeight, 1);
      const r = Math.round(255 - progress * 255);
      const g = Math.round(255 - progress * 255);
      const b = Math.round(255 - progress * 255);

      setTextColor(`rgb(${r}, ${g}, ${b})`);
    };

    window.addEventListener("scroll", updateColor);
    updateColor();

    return () => window.removeEventListener("scroll", updateColor);
  }, []);

  const menuItems = ["Home", "About", "Services", "Contact"];

  return (
    <header className="py-4 px-6 sticky top-0 z-50">
      <div className="px-2 py-1.5 rounded-lg font-medium flex items-center justify-between">
        <motion.h1
          style={{ color: textColor }}
          className="text-lg sm:text-xl font-[400] font-sans cursor-pointer hover:scale-[1.007] transition"
        >
          Heaven*
        </motion.h1>

        <div className="relative">
          <div className="absolute sm:top-8 sm:right-8 -right-4 top-9">
            <AnimatePresence>
              {show && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="sm:bg-white/80 bg-transparent  backdrop-blur-sm rounded-lg shadow-lg p-2"
                >
                  <motion.ul
                    className="flex sm:flex-row flex-col  text-black gap-3 min-w-[80px] sm:min-w-[275px]"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={{
                      visible: {
                        transition: {
                          staggerChildren: 0.1,
                        },
                      },
                    }}
                  >
                    {menuItems.map((item) => (
                      <motion.li
                        key={item}
                        variants={{
                          hidden: {
                            opacity: 0,
                            y: 20,
                            x: 0,
                          },
                          visible: {
                            opacity: 1,
                            y: 0,
                            x: 0,
                            transition: {
                              duration: 0.3,
                              ease: "easeOut",
                            },
                          },
                        }}
                        className="text-sm font-[400] p-2 text-center cursor-pointer hover:bg-white  rounded-md transition-colors"
                      >
                        {item}
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <motion.button
            onClick={() => setShow(!show)}
            style={{ color: textColor }}
            className="h-6 w-6 flex items-center justify-center rounded-full hover:bg-white/10 hover:shadow transition p-1"
          >
            <PlusIcon
              className={`${show ? " rotate-45" : " rotate-0"} transition `}
            />
          </motion.button>
        </div>
      </div>
    </header>
  );
};

export default LandingOneHeader;
