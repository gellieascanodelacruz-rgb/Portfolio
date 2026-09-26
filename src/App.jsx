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
      {/* Left Terracotta Margin with Vertical Text */}
      <aside className="editorial-margin margin-left" aria-hidden="true">
        <div className="margin-track">
          <span>PORTFOLIO 2026 ✱ GELLIE ANNE DELA CRUZ ✱ BULACAN STATE UNIVERSITY</span>
        </div>
      </aside>

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

      {/* Right Terracotta Margin with Vertical Text */}
      <aside className="editorial-margin margin-right" aria-hidden="true">
        <div className="margin-track">
          <span>FULL-STACK WEB DEVELOPER ✱ OPEN TO OJT NOV 2026 ✱ SYSTEM BUILDER</span>
        </div>
      </aside>
    </div>
  );
}
