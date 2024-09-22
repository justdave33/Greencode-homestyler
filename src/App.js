import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./Product"
import FindProfessionals from "./pages/Findprofessionals/Findprofessionals.jsx"

const App = () => {
  return (
    <Router>
      <div>
        <div className="firstpage">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product" element={<Product />} />
            <Route path="/findprofessional" element={<FindProfessionals />} />
          </Routes>
          <div>
            <Navbar />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
