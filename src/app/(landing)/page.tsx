import React from "react";
import LandingOneHeader from "./landingone/(sections)/Header";
import LandingOneHero from "./landingone/(sections)/Hero";
import LandingOneActionSection from "./landingone/(sections)/ActionSection";
import Showcase from "./landingone/(sections)/Showcase";
import DetailsSection from "./landingone/(sections)/DetailsSection";
import ShowcaseVideo from "./landingone/(sections)/ShowcaseVideo";
import InsightsSection from "./landingone/(sections)/InsightsSection";
import FAQ from "./landingone/(sections)/FAQ";
import Footer from "./landingone/(sections)/Footer";

const Home = () => {
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

export default Home;
