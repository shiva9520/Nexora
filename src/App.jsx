import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Company from "./pages/Company";
import Features from "./pages/Features";
import Resources from "./pages/Resources";
import Docs from "./pages/Docs";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  });

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="/features" element={<Features />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/docs" element={<Docs />} />
      </Routes>
    </Router>
  );
};

export default App;
