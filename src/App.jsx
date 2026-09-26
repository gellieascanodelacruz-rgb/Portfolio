import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import ResumeSection from "./components/ResumeSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="editorial-site-wrapper">
      {/* Main Canvas */}
      <div className="editorial-canvas">
        <Navbar />
        <main id="main-content">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Education />
          <Achievements />
          <ResumeSection />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
