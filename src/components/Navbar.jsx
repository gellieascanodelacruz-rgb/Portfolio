import React, { useState, useEffect } from "react";
import { personalInfo } from "../data/portfolioData";
import { Icon } from "./Icons";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { label: "ABOUT", href: "#about" },
    { label: "PROJECTS", href: "#projects" },
    { label: "SKILLS", href: "#skills" },
    { label: "EDUCATION", href: "#education" },
    { label: "RESUME", href: "#resume" },
    { label: "CONTACT", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "skills", "education", "resume", "contact"];
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="editorial-navbar">
      <div className="container navbar-inner">
        <a href="#home" className="navbar-brand-link" aria-label="Gellie Anne Dela Cruz Portfolio Home">
          <div className="navbar-brand-badge">GD</div>
          <span>gellie anne dela cruz</span>
        </a>

        {/* Desktop Retro Links */}
        <nav aria-label="Main Navigation">
          <ul className="navbar-nav-links">
            {navItems.map((item) => (
              <li key={item.href} className="navbar-nav-item">
                <a
                  href={item.href}
                  className={activeSection === item.href.substring(1) ? "active" : ""}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Resume Button */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <a
            href="/Gellie_Anne_Dela_Cruz_Resume.pdf"
            download="Gellie_Anne_Dela_Cruz_Resume.pdf"
            className="navbar-resume-btn"
            title="Download PDF Resume"
          >
            <Icon name="Download" size={13} />
            <span>Resume</span>
          </a>

          {/* Hamburger for mobile */}
          <button
            className="navbar-hamburger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? "open" : ""}`}>
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="mobile-drawer-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
        <a
          href="/Gellie_Anne_Dela_Cruz_Resume.pdf"
          download="Gellie_Anne_Dela_Cruz_Resume.pdf"
          className="btn btn-primary btn-sm"
          style={{ marginTop: "0.5rem" }}
          onClick={() => setMobileMenuOpen(false)}
        >
          <Icon name="Download" size={14} />
          <span>Download Resume</span>
        </a>
      </div>
    </header>
  );
}
