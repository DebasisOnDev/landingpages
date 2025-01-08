"use client";
import { Pause, Play } from "lucide-react";
import React, { useRef } from "react";
import { useInView, motion } from "motion/react";

const ShowcaseVideo = () => {
  const ref = useRef<HTMLVideoElement>(null);
  const divref = useRef<HTMLDivElement>(null);
  const isInView = useInView(divref, { once: true, amount: 0.3 });
  const [isPlaying, setIsPlaying] = React.useState(true);
  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (!ref.current) return;
    if (isPlaying) {
      ref.current.pause();
    } else {
      ref.current.play();
    }
  };
  return (
    <div ref={divref} className=" max-w-6xl mt-6 mx-auto p-6">
      <motion.div
        style={{
          transform: isInView ? "none" : "translateY(120px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
        }}
        className="relative w-full h-auto sm:h-[450px]"
      >
        <video
          ref={ref}
          className="w-full h-full rounded-lg object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/video-showcase.mp4" type="video/mp4" />
        </video>
        <span className=" absolute text-4xl w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-center font-[400] text-white ">
          Step inside a world where exceptional
          <br /> luxury and timeless design meet
        </span>
        <button
          onClick={handlePlayPause}
          className=" absolute right-3 bottom-3 p-1 rounded-full text-black bg-slate-200"
        >
          {isPlaying ? <Pause size={21} /> : <Play size={21} />}
        </button>
      </motion.div>
    </div>
  );
};

export default ShowcaseVideo;
