"use client";
import Link from "next/link";
import React, { useState } from "react";

const PracFiles = () => {
  const [transform, setTransform] = useState(
    "translate(-50%,-50%) rotateX(0deg)"
  );

  const onMouseEnter = () => {
    setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
  };
  const onMouseLeave = () => {
    setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
  };
  return (
    <div className=" relative  max-w-6xl p-4 min-h-screen mx-auto bg-slate-200 bg-opacity-40 mt-6 rounded-lg ">
      <div
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={{
          perspective: "1000px",
          //   transform: transform,
        }}
        className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2  h-40 w-40  transition duration-200"
      >
        <button className=" group hover:text-lg hover:font-bold transition">
          HHHHH
          <span className=" group-hover:p-2 group-hover:bg-blue-400 rounded-lg">
            fsfsdf
          </span>
        </button>
        <Link href={"#"} className="relative group/pin z-50 cursor-pointer">
          <div className="pointer-events-none opacity-0 group-hover/pin:opacity-100 z-[60] transition duration-300">
            Complex hover animations
          </div>
        </Link>
        <h1 className=" text-blue-500 opacity-50 group-hover/pin:opacity-100 transition duration-300 group/pin ">
          Hello there
          <span className=" group-hover/pin:underline  transition duration-300 ">
            Person
          </span>
        </h1>
      </div>
      <Link href={"#"} className="relative group/pin z-50 cursor-pointer">
        <div className="pointer-events-none opacity-0 group-hover/pin:opacity-100">
          dfdsfsdf
        </div>
        <div className="border-white/[0.1] group-hover/pin:border-white/[0.2]">
          sdfsfd
        </div>
      </Link>
    </div>
  );
};

export default PracFiles;
