/* eslint-disable @next/next/no-img-element */
import React from "react";

const LandingTwoServiceAval = () => {
  return (
    <div className="h-screen w-full">
      <div className="relative w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-t from-sky-200/90 via-sky-300/50 to-transparent" />

        {/* Background image */}
        <img
          src="/vessel.jpeg"
          alt="Vessel"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-x-0 bottom-0 p-10">
          <div
            className="text-[200px] mx-auto font-montserrat  font-bold text-center leading-none tracking-wider"
            style={{
              color: "transparent",
              WebkitTextStroke: "2px rgba(255, 255, 255)",
              stroke: "1px rgba(255, 255, 255, 0.3)",
            }}
          >
            LOGISTICS
          </div>
        </div>

        {/* <div
          className="absolute inset-0 mix-blend-soft-light opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='1' height='20' x='9' fill='%23ffffff' /%3E%3C/svg%3E")`,
            backgroundSize: "20px 20px",
          }}
        /> */}
      </div>
    </div>
  );
};

export default LandingTwoServiceAval;
