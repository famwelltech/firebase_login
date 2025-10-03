import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default landing page shows AboutUs */}
        <Route path="/" element={<AboutUs />} />
        
        {/* Explicit AboutUs route (optional, same page) */}
        <Route path="/aboutus" element={<AboutUs />} />

        {/* Services page */}
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
}

export default App;
