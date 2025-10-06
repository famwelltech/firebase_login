
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import About from "../components/About/About5"; 
import Mission from "../components/MissionVision/Mission";

const AboutUs = () => {
  return (

    <div className="font-sans overflow-x-hidden"> 
      
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