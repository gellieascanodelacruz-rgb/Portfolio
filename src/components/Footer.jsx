import React from "react";
import { personalInfo } from "../data/portfolioData";
import { Icon } from "./Icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-brand-col">
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
              <div className="brand-badge">GD</div>
              <span style={{ fontSize: "1.125rem", fontWeight: 700, color: "var(--text-primary)" }}>
                {personalInfo.name}
              </span>
            </div>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.6 }}>
              {personalInfo.title} · Bulacan State University – Bustos Campus.
            </p>
            <p style={{ color: "#fda4af", fontSize: "0.8125rem", marginTop: "0.5rem", fontFamily: "var(--font-mono)" }}>
              {personalInfo.status}
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="footer-links-col">
            <div className="footer-nav-list">
              <h4>Navigation</h4>
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
            </div>

            <div className="footer-nav-list">
              <h4>Academic</h4>
              <a href="#experience">Experience</a>
              <a href="#education">Education</a>
              <a href="#achievements">Achievements</a>
            </div>

            <div className="footer-nav-list">
              <h4>Connect</h4>
              <a href="#resume">Resume</a>
              <a href="#contact">Contact Form</a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} {personalInfo.name}. Built with React & modern CSS.</p>

          <button
            onClick={scrollToTop}
            className="btn btn-secondary btn-sm"
            aria-label="Scroll back to top of page"
            style={{ borderRadius: "var(--radius-full)" }}
          >
            <Icon name="ArrowUp" size={15} />
            <span>Back to Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
