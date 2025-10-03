import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CareRide from "../components/Services/CareRide";
import CareMate from "../components/Services/CareMate";
import CareTrack from "../components/Services/CareTrack";
import CareAssist from "../components/Services/CareAssist";
import CareMed from "../components/Services/CareMed";

const Services = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <header className="text-center py-12 bg-gray-50">
        <h1 className="text-4xl font-bold text-purple-600">Farmwell Services</h1>
      </header>
      <main className="space-y-12 px-6 md:px-16 lg:px-28">
        <CareRide />
        <CareMate />
        <CareTrack />
        <CareAssist />
        <CareMed />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
