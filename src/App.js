import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";       // 👈 1. IMPORT YOUR HOME COMPONENT
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Home />} /> 
        
        <Route path="/about" element={<AboutUs />} />


        <Route path="/services" element={<Services />} />
        
        <Route path="/sign" element={<div>Sign Up Page Content</div>} />
        <Route path="/login" element={<div>Login Page Content</div>} />
        <Route path="/contact" element={<div>Contact Us Page Content</div>} />
        
      </Routes>
    </Router>
  );
}

export default App;