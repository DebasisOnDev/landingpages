"use client";
import { Pause, Play } from "lucide-react";
import React, { useRef } from "react";

const LandingTwoShowcase = () => {
  const ref = useRef<HTMLVideoElement>(null);
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
    <div className=" min-h-screen   w-full px-28">
      <div className=" relative w-full h-full  border-l-[0.25px] p-1.5 border-opacity-20 border-r-[0.25px] border-gray-100 flex flex-col gap-4">
        <div className=" flex text-ltwo-white flex-col gap-1 h-1/2">
          <div className=" flex justify-start items-center">
            <h1 className="  font-[400] font-montserrat text-6xl text-left">
              Logistic Solutions
              <br /> For Businesses To
              <br /> Solve Any Delivery
              <br /> Problem{" "}
            </h1>
          </div>
          <div className=" flex flex-col items-end justify-end gap-6 p-1.5">
            <span className="font-[400] font-montserrat text-ltwo-white/80  text-right  ">
              Logisti Group Is A Representitive Logistics
              <br />
              Operator Providing Full Range Of Service <br />
              In The Sphere Of Customs Clearance And <br />
              Transportation Worldwide For Any Type Of
              <br /> Cargo.
            </span>
            <button className=" w-24 h-8 p-1 font-montserrat font-[300] text-sm rounded-2xl border border-ltwo-white/80 text-ltwo-white/80 text-center">
              Learn More
            </button>
          </div>
        </div>
        {/* <div className=" h-screen mx-auto left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[0.25px] bg-opacity-20 bg-gray-100" /> */}
        <div className="mx-auto relative h-1/2 flex flex-col">
          <div className="relative h-auto w-full">
            <video
              ref={ref}
              className="w-full h-full rounded-sm object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/transportation.mp4" type="video/mp4" />
            </video>
            <button
              onClick={handlePlayPause}
              className=" absolute right-3 z-10  bottom-3 p-1 rounded-full text-ltwo-white bg-ltwo-orange"
            >
              {isPlaying ? <Pause size={21} /> : <Play size={21} />}
            </button>
          </div>
          <span className="w-full text-[180px] absolute -bottom-5 text-ltwo-white font-extrabold font-montserrat tracking-wider text-center">
            LOGISTICS
          </span>
        </div>
      </div>
    </div>
  );
};

export default LandingTwoShowcase;
