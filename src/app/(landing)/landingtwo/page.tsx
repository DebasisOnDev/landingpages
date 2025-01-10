import React from "react";
import LandingTwoHeader from "./(sections)/LandingTwoHeader";
import LandingTwoHero from "./(sections)/LandingTwoHero";
import LandingTwoShowcase from "./(sections)/LandingTwoShowcase";
import LandingTwoInfomatics from "./(sections)/LandingTwoInfomatics";
import LandingTwoServiceAval from "./(sections)/LandingTwoServiceAval";
import LandingTwoServices from "./(sections)/LandingTwoServices";
import LandingTwoFooter from "./(sections)/LandingTwoFooter";

const page = () => {
  return (
    <div className=" w-full h-full bg-ltwo-black">
      <LandingTwoHeader />
      <LandingTwoHero />
      <LandingTwoShowcase />
      <LandingTwoInfomatics />
      <LandingTwoServiceAval />
      <LandingTwoServices />
      <LandingTwoFooter />
    </div>
  );
};

export default page;
