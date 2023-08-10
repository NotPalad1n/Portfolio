import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Projects from "./components/Projects";

import "./styles/App.css"

function App() {

  return (
    <div className="app">
      <Navbar/>
      <Hero/>
      <AboutMe/>
      <Services/>
      <Projects/>
    </div>
  );
}

export default App;
