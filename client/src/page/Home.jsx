import React from "react";
import Hero from "../components/Home/Hero";
import MiddleSection from "../components/Home/MiddleSection";
import Team from "../components/Home/Team";
import Footer from "../components/Home/Footer";

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <MiddleSection />
      <Team />
      <Footer />
    </div>
  );
};

export default HomePage;
