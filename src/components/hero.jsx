import React from "react";
import { personalInfo } from "../data/portfolioData";
import { Icon } from "./Icons";
import ProfileImage from "../assets/images/profile.png";

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-bg-accent" />
      <div className="hero-bg-accent-blue" />
      <div className="container hero-grid">
        {/* Left column: Emphasized Bio & Description */}
        <div className="hero-content">
          <div className="hero-status-pill">
            <span className="pulse-dot" />
            <span>{personalInfo.status}</span>
          </div>

          <h1 className="hero-name">{personalInfo.name}</h1>
          <h2 className="hero-title">{personalInfo.title}</h2>

          <div className="hero-desc-box">
            <p className="hero-desc">{personalInfo.shortBio}</p>
            <div className="hero-focus-tags">
              <span className="focus-tag">
                <Icon name="Code" size={13} />
                <span>Web Development</span>
              </span>
              <span className="focus-tag">
                <Icon name="Database" size={13} />
                <span>Database Systems</span>
              </span>
              <span className="focus-tag">
                <Icon name="Layers" size={13} />
                <span>Full-Stack & APIs</span>
              </span>
            </div>
          </div>

          <div className="hero-cta-group">
            <a href="#projects" className="btn btn-primary">
              <Icon name="Layers" size={18} />
              <span>View Projects</span>
            </a>
            <a
              href="/Gellie Anne Dela Cruz_Resume.pdf"
              download="Gellie Anne Dela Cruz_Resume.pdf"
              className="btn btn-secondary"
            >
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
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <Icon name="Github" size={18} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-icon"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <Icon name="Linkedin" size={18} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="btn btn-icon"
              aria-label={`Email ${personalInfo.name}`}
              title="Send an Email"
            >
              <Icon name="Mail" size={18} />
            </a>
          </div>
        </div>

        {/* Right column: Prominently Emphasized Profile Portrait */}
        <div className="hero-visual">
          <div className="hero-portrait-showcase">
            {/* Ambient ambient glow aura */}
            <div className="portrait-glow-halo" />

            {/* The Main Prominent Portrait */}
            <div className="portrait-frame">
              <img
                src={ProfileImage}
                alt={personalInfo.name}
                className="portrait-img"
              />
            </div>

            {/* Floating Highlight Badges */}
            <div className="floating-badge badge-top">
              <div className="floating-badge-icon">
                <Icon name="GraduationCap" size={16} />
              </div>
              <div className="floating-badge-text">
                <span className="badge-subtitle">Education</span>
                <strong>BS Information Tech</strong>
              </div>
            </div>

            <div className="floating-badge badge-bottom">
              <div className="floating-badge-icon emerald">
                <Icon name="CheckCircle" size={16} />
              </div>
              <div className="floating-badge-text">
                <span className="badge-subtitle">Status</span>
                <strong>Ready for Internship</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}