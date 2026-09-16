import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import Organizations from "./components/Organizations";
import ResumeSection from "./components/ResumeSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Education />
        <Achievements />
        <Organizations />
        <ResumeSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
