"use client";
import { Equal, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const LandingTwoHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="w-full backdrop-blur-sm h-14 sm:h-16 border-b-[0.25px] border-opacity-20 border-gray-100  sticky top-0 z-20 ">
      <div className=" relative  mx-auto w-full h-full flex items-center justify-between ">
        <AnimatePresence>
          <>
            <motion.button className="bg-ltwo-orange cursor-default w-28 h-full hidden sm:flex items-center justify-center text-ltwo-white">
              <Equal className=" h-10 w-14 font-normal " />
            </motion.button>
            <motion.button
              transition={{ duration: 0.25 }}
              onClick={() => setIsOpen(!isOpen)}
              className="bg-ltwo-orange flex sm:hidden w-20 h-full  items-center justify-center text-ltwo-white"
            >
              {isOpen ? (
                <X className=" h-10 w-14 font-normal " />
              ) : (
                <Equal className=" h-10 w-14 font-normal " />
              )}
            </motion.button>
          </>
        </AnimatePresence>
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.25, staggerChildren: 0.1 }}
              className="flex bg-transparent overflow-hidden flex-col absolute top-14 p-2.5  right-0 font-asap font-[400] sm:hidden items-center space-y-8 "
            >
              <motion.a
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{
                  ease: "easeOut",
                  duration: 0.2,
                }}
                href={"#"}
                className=" text-sm text-ltwo-white hover:text-ltwo-orange transition-colors"
              >
                SERVICE
              </motion.a>
              <motion.a
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{
                  ease: "easeOut",
                  duration: 0.3,
                }}
                href={"#"}
                className=" text-sm text-ltwo-white hover:text-ltwo-orange transition-colors"
              >
                PROCESS
              </motion.a>
              <motion.a
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{
                  staggerChilase: "easeOut",
                  duration: 0.4,
                }}
                href={"#"}
                className=" text-sm text-ltwo-white hover:text-ltwo-orange transition-colors"
              >
                ABOUT
              </motion.a>
              <motion.a
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{
                  staggerChilase: "easeOut",
                  duration: 0.5,
                }}
                href={"#"}
                className=" text-sm text-ltwo-white hover:text-ltwo-orange transition-colors"
              >
                CONTACT
              </motion.a>
            </motion.nav>
          )}
        </AnimatePresence>

        {/* <Link
          href={"#"}
          className="text-2xl  flex gap-[2px] text-center mx-auto font-[400] font-asap"
        >
          <Image
            src={"/logol2.png"}
            alt="logo"
            width={200}
            height={40}
            className=" object-cover"
          />
        </Link> */}

        <nav className="hidden font-asap font-[400] sm:flex items-center space-x-8 pr-0 sm:pr-16">
          <Link
            href={"#"}
            className=" text-sm text-ltwo-white hover:text-ltwo-orange transition-colors"
          >
            SERVICE
          </Link>
          <Link
            href={"#"}
            className=" text-sm text-ltwo-white hover:text-ltwo-orange transition-colors"
          >
            PROCESS
          </Link>
          <Link
            href={"#"}
            className=" text-sm text-ltwo-white hover:text-ltwo-orange transition-colors"
          >
            ABOUT
          </Link>
          <Link
            href={"#"}
            className=" text-sm text-ltwo-white hover:text-ltwo-orange transition-colors"
          >
            CONTACT
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default LandingTwoHeader;
