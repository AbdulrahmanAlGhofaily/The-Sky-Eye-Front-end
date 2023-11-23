import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navigation from "./components/common/Navigation/Navigation";
import Home from "./components/home/Home";
import ServicePage from "./components/map-service/ServicePage";
import AboutUs from "./components/about-us/AboutUs";
import Footer from "./components/common/Footer/Footer";

import "./App.css";

function App() {
  const location = useLocation();

  return (
    <div className="app">
      <Navigation />
      <AnimatePresence mode="wait">
        <Routes
          location={location}
          key={location.pathname}
        >
          <Route
            index
            element={<Home />}
          />
          <Route
            path="/service"
            element={<ServicePage />}
          />
          <Route
            path="/aboutus"
            element={<AboutUs />}
          />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
