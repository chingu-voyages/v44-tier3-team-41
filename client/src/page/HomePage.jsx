import React from "react";
import Hero from "../components/HomePage/Hero";
import MiddleSection from "../components/HomePage/MiddleSection";
import Team from "../components/HomePage/Team";
import Footer from "../components/HomePage/Footer";

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
