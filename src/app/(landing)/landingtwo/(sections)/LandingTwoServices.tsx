/* eslint-disable @next/next/no-img-element */
import { MoveRight } from "lucide-react";
import React from "react";

const LandingTwoServices = () => {
  return (
    <div className=" w-full h-screen px-28 ">
      <div className=" h-full flex flex-col py-10 gap-6 w-full border-l-[0.25px] border-r-[0.25px] border-gray-100 border-opacity-20">
        <div className=" relative w-full h-1/3 ">
          <img
            src="/ship.jpg"
            alt="Ocean Freight"
            className=" w-full h-full object-cover"
          />
          <button className=" absolute p-2.5 flex items-center justify-between font-montserrat font-semibold group/freight  transition text-ltwo-black bg-ltwo-white left-8 bottom-8 w-[250px] h-[50px]">
            <span>Ocean Freight</span>
            <span>
              <MoveRight
                size={24}
                className=" text-ltwo-orange group-hover/freight:translate-x-3 transition"
              />
            </span>
          </button>
        </div>
        <div className=" relative w-full h-1/3 ">
          <img
            src="/truck.jpg"
            alt="Truck Freight"
            className=" w-full h-full object-cover"
          />
          <button className=" absolute p-2.5 flex items-center justify-between font-montserrat font-semibold group/freight  transition text-ltwo-black bg-ltwo-white left-8 bottom-8 w-[250px] h-[50px]">
            <span>Truck Freight</span>
            <span>
              <MoveRight
                size={24}
                className=" text-ltwo-orange group-hover/freight:translate-x-3 transition"
              />
            </span>
          </button>
        </div>
        <div className=" relative w-full h-1/3 ">
          <img
            src="/plane.jpg"
            alt="Air Freight"
            className=" w-full h-full object-cover"
          />
          <button className=" absolute p-2.5 flex items-center justify-between font-montserrat font-semibold group/freight  transition bg-ltwo-orange text-ltwo-white left-8 bottom-8 w-[250px] h-[50px]">
            <span>Air Freight</span>
            <span>
              <MoveRight
                size={24}
                className="  group-hover/freight:translate-x-3 transition"
              />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingTwoServices;
