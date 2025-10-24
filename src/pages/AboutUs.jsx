
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import About from "../components/About/About5"; 
import Mission from "../components/MissionVision/Mission";

const AboutUs = () => {
  return (

    <div className="font-sans min-h-screen bg-white text-gray-900"> 
      
      <Navbar />

      <main>
        
        <About /> 
        <Mission />
        
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutUs;