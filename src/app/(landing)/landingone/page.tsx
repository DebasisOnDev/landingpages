import React from "react";
import LandingOneHero from "./(sections)/Hero";
import LandingOneActionSection from "./(sections)/ActionSection";
import Showcase from "./(sections)/Showcase";
import DetailsSection from "./(sections)/DetailsSection";
import ShowcaseVideo from "./(sections)/ShowcaseVideo";
import InsightsSection from "./(sections)/InsightsSection";
import FAQ from "./(sections)/FAQ";
import Footer from "./(sections)/Footer";
import LandingOneHeader from "./(sections)/Header";

const LandingOne = () => {
  return (
    <div className=" ">
      <main className="bg-gradient-to-tl from-sky-100 via-sky-300/75 to-sky-600/70">
        <LandingOneHeader />
        <div>
          <LandingOneHero />
        </div>
        <div className=" bg-white">
          <LandingOneActionSection />
          <Showcase />
          <DetailsSection />
          <ShowcaseVideo />
          <InsightsSection />
          <FAQ />
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default LandingOne;
