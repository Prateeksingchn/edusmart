import React from "react";
import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import PortfolioAndCustomers from "./PortfolioAndCustomers";
import Moto from "./Moto";
import Team from "./Team";
import Contact from "./Contact";
import Map from "./Map";

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <main className="w-full">
        <HeroSection />
        <ServicesSection />
        <PortfolioAndCustomers />
        <Moto />
        <Team />
        <Contact />
        <Map />
      </main>
    </div>
  );
};

export default Home;