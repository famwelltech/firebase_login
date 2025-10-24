import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServicesSection from "../components/Services/ServicesSection";
import FamWellLogo from "../assets/FamWellLogo.png";

const Services = () => {
  return (
    <div className="font-sans min-h-screen bg-white text-gray-900">
      <Navbar />

      <header className="flex flex-col items-center justify-center text-center h-[70vh] bg-white">
        <img
          src={FamWellLogo}
          alt="FamWellPlus Logo"
          className="w-[420px] md:w-[480px] h-auto mb-8 object-contain"
        />

        <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
          Services
        </h2>
      </header>

      <main className="pt-10 pb-10 px-5 md:px-10 lg:px-15 space-y-12">
        <ServicesSection />
      </main>

      <Footer />
    </div>
  );
};

export default Services;
