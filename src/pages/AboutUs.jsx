import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Story from "../components/About/Story";
import WhatWeDo from "../components/About/WhatWeDo";
import Technology from "../components/About/Technology";
import Collaboration from "../components/About/Collaboration";
import Mission from "../components/MissionVision/Mission";

const AboutUs = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <main className="space-y-12 px-6 md:px-16 lg:px-28">
        <Story />
        <WhatWeDo />
        <Technology />
        <Collaboration />
        <Mission />
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
