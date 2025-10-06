import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="font-sans min-h-screen bg-white text-gray-900">
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-[80vh]">
        <p className="font-semibold text-3xl">Home</p>
      </main>
      <Footer />
    </div>
  );
};

export default Home;