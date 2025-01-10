import React from "react";

const LandingTwoInfomatics = () => {
  return (
    <div className=" w-full h-auto px-28">
      <div className=" w-full flex items-center justify-between  border-l-[0.25px] p-1.5 border-opacity-20 border-r-[0.25px] border-gray-100 font-montserrat text-ltwo-white ">
        <div className=" w-1/2 flex flex-col items-center justify-between gap-6 border-r border-gray-100 border-opacity-20">
          <div className=" w-full flex flex-col items-start justify-start gap-4">
            <span className=" text-8xl font-[400] tracking-wider">30+</span>
            <span className=" text-ltwo-white/80">
              Years Service Experienced
            </span>
          </div>
          <span className=" w-full h-[2px] bg-ltwo-orange mr-1"></span>
          <div className=" flex w-full items-start justify-start gap-24">
            <div className=" flex flex-col gap-3 text-ltwo-white/80">
              <span className=" text-6xl font-normal ">250</span>
              <span className=" text-left">
                Own
                <br /> Container
              </span>
            </div>
            <div className=" flex flex-col gap-3 text-ltwo-white/80">
              <span className=" text-6xl font-normal ">4K</span>
              <span className=" text-left">
                Cargo Delivered <br /> Per Month
              </span>
            </div>
          </div>
        </div>
        <div className=" flex flex-col items-end justify-end gap-6 ">
          <h1 className=" text-right text-4xl font-normal">
            Logistics & <br /> Transportation <br />
            Solutions
          </h1>
          <span className="text-ltwo-white/80 text-right ">
            We Continue To Pursue That Same Vision In Today&apos;s
            <br />
            Complex. Uncertain World. Working Every Day To
            <br />
            Earn Our Customers
          </span>
          <button className=" w-24 h-8 p-1 font-montserrat font-[300] text-sm rounded-2xl border border-ltwo-white text-ltwo-white text-center">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingTwoInfomatics;
