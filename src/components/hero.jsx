import React from "react";
import { personalInfo } from "../data/portfolioData";
import { Icon } from "./Icons";

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-bg-accent" />
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="hero-status-pill">
            <span className="pulse-dot" />
            <span>{personalInfo.status}</span>
          </div>

          <h1 className="hero-name">{personalInfo.name}</h1>
          <h2 className="hero-title">{personalInfo.title}</h2>

          <p className="hero-desc">{personalInfo.shortBio}</p>

          <div className="hero-cta-group">
            <a href="#projects" className="btn btn-primary">
              <Icon name="Layers" size={18} />
              <span>View Projects</span>
            </a>
            <a href="#resume" className="btn btn-secondary">
              <Icon name="Download" size={18} />
              <span>Download Resume</span>
            </a>
            <a href="#contact" className="btn btn-outline">
              <Icon name="Mail" size={18} />
              <span>Contact Me</span>
            </a>
          </div>

          <div className="hero-social-links">
            <span className="hero-social-label">Connect:</span>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-icon"
              aria-label="GitHub Profile (Placeholder)"
              title="GitHub Profile (Dummy Link)"
            >
              <Icon name="Github" size={18} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-icon"
              aria-label="LinkedIn Profile (Placeholder)"
              title="LinkedIn Profile (Dummy Link)"
            >
              <Icon name="Linkedin" size={18} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="btn btn-icon"
              aria-label="Email Alex Morgan (Placeholder)"
              title="Email Alex Morgan (Dummy Email)"
            >
              <Icon name="Mail" size={18} />
            </a>
          </div>
        </div>

        {/* Right column: Student Profile Card */}
        <div className="hero-visual">
          <div className="hero-card-preview">
            <div className="hero-card-header">
              <div
                className="hero-avatar"
                style={{
                  background: "linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%)",
                  border: "2px solid rgba(59, 130, 246, 0.4)",
                  color: "#60a5fa",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span style={{ fontSize: "1.4rem", fontWeight: 800, fontFamily: "var(--font-mono)", color: "#93c5fd" }}>
                  AM
                </span>
              </div>
              <div className="hero-card-info">
                <h3>{personalInfo.name}</h3>
                <p>BS Information Technology</p>
                <span className="sample-badge" style={{ marginTop: '0.35rem' }}>Sample Profile</span>
              </div>
            </div>

            <div className="hero-mini-stats">
              <div className="mini-stat-box">
                <span className="mini-stat-label">Focus Area</span>
                <p className="mini-stat-val">Full-Stack & DB</p>
              </div>
              <div className="mini-stat-box">
                <span className="mini-stat-label">Expected Grad</span>
                <p className="mini-stat-val">Class of 2027</p>
              </div>
              <div className="mini-stat-box">
                <span className="mini-stat-label">Location</span>
                <p className="mini-stat-val">Manila, PH</p>
              </div>
              <div className="mini-stat-box">
                <span className="mini-stat-label">Status</span>
                <p className="mini-stat-val" style={{ color: '#34d399' }}>Available OJT</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}