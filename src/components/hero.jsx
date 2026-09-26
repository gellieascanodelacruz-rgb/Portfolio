import React from "react";
import { personalInfo } from "../data/portfolioData";
import { Icon } from "./Icons";
import ProfileImage from "../assets/images/profile.png";

export default function Hero() {
  const tickerItems = [
    "FULL-STACK DEVELOPER",
    "BSIT 4TH YEAR",
    "BULSU BUSTOS",
    "OPEN TO OJT NOV 2026",
    "DEAN'S LISTER",
    "WEB & MOBILE APP DEV",
    "REACT & NODE.JS",
    "POSTGRESQL & MYSQL",
    "PRACTICAL WEB SOLUTIONS",
  ];

  return (
    <>
      <section id="home" className="hero-editorial-section">
        <div className="container">
          {/* Centered Editorial Wordmark */}
          <div className="retro-wordmark-container">
            <h1 className="retro-wordmark">
              <span>{personalInfo.name}</span>
            </h1>
            <p className="retro-wordmark-sub">
              Full-Stack Web Developer ✱ Bulacan State University – Bustos Campus
            </p>
          </div>

          {/* Full Open Hero Layout: Full Size Portrait + Editorial Details (No Card Box) */}
          <div className="hero-open-layout">
            {/* Left Photo Pane with Full Size Portrait */}
            <div className="hero-photo-pane">
              <div className="hero-photo-frame">
                <img
                  src={ProfileImage}
                  alt={personalInfo.name}
                  className="hero-photo-img"
                />
                <div className="portrait-floating-tag">
                  <span className="pulse-dot" />
                  <span>Open to OJT • Nov 16, 2026</span>
                </div>
              </div>
            </div>

            {/* Right Details Pane (No Card Wrapper) */}
            <div className="hero-details-pane">

              {/* Editorial Kicker & Headline */}
              <p className="hero-details-kicker">a dedicated full-stack developer</p>
              <h2 className="hero-details-headline">
                Functional Web Applications & Thoughtful Systems
              </h2>

              <p className="hero-details-bio">
                Bachelor of Science in Information Technology student majoring in Web and Mobile Application Development at Bulacan State University – Bustos Campus. Passionate about turning ideas into functional, practical, and clean web applications.
              </p>

              {/* Technical Focus Badges */}
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

              {/* Pill Action Buttons */}
              <div className="hero-details-cta-row">
                <a href="#projects" className="btn btn-primary">
                  <Icon name="Layers" size={16} />
                  <span>View Projects</span>
                </a>
                <a
                  href="/Gellie Anne Dela Cruz_Resume.pdf"
                  download="Gellie Anne Dela Cruz_Resume.pdf"
                  className="btn btn-secondary"
                  title="Download actual PDF Resume"
                >
                  <Icon name="Download" size={16} />
                  <span>Download Resume (PDF)</span>
                </a>
                <a href="#contact" className="btn btn-outline">
                  <Icon name="Mail" size={16} />
                  <span>Contact Me</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Ticker Strip */}
      <div className="ticker-strip" aria-hidden="true">
        <div className="ticker-inner">
          <div className="ticker-track">
            {tickerItems.concat(tickerItems).map((text, idx) => (
              <span key={idx} className="ticker-item">
                <span>{text}</span>
                <span className="ticker-star">✱</span>
              </span>
            ))}
          </div>
          <div className="ticker-track">
            {tickerItems.concat(tickerItems).map((text, idx) => (
              <span key={`dup-${idx}`} className="ticker-item">
                <span>{text}</span>
                <span className="ticker-star">✱</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}