import React, { useState, useEffect } from "react";
import { personalInfo } from "../data/portfolioData";
import { Icon } from "./Icons";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Certifications", href: "#certifications" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 120;

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

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="container navbar-container">
          <a href="#home" className="nav-brand" aria-label="Alex Morgan Portfolio Home">
            <div className="brand-badge">AM</div>
            <div className="brand-details">
              <span className="brand-name">{personalInfo.name}</span>
              <span className="brand-role">Undergraduate IT</span>
            </div>
          </a>

          <nav aria-label="Primary Navigation">
            <ul className="nav-links">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`nav-link ${activeSection === item.href.substring(1) ? "active" : ""}`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="nav-actions">
            <a href="#resume" className="btn btn-outline btn-sm">
              <Icon name="FileText" size={15} />
              <span>Resume</span>
            </a>
            <button
              className="hamburger-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              <Icon name={mobileMenuOpen ? "X" : "Menu"} size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`mobile-nav ${mobileMenuOpen ? "open" : ""}`} aria-hidden={!mobileMenuOpen}>
        <ul className="mobile-nav-links">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="mobile-nav-link"
                onClick={handleLinkClick}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#resume"
              className="mobile-nav-link"
              onClick={handleLinkClick}
              style={{ color: "var(--accent-primary)", fontWeight: 600 }}
            >
              View Resume
            </a>
          </li>
        </ul>
        <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center" }}>
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="btn btn-icon" aria-label="GitHub">
            <Icon name="Github" size={18} />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-icon" aria-label="LinkedIn">
            <Icon name="Linkedin" size={18} />
          </a>
          <a href={`mailto:${personalInfo.email}`} className="btn btn-icon" aria-label="Email">
            <Icon name="Mail" size={18} />
          </a>
        </div>
      </div>
    </>
  );
}
