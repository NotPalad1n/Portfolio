import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";

import "./styles/App.css"

function App() {

  return (
    <div className="app">
      <Navbar/>
      <Hero/>
      <AboutMe/>
      <Services/>
    </div>
  );
}

export default App;
