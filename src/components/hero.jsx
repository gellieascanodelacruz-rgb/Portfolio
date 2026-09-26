import React from "react";
import { personalInfo } from "../data/portfolioData";
import { Icon } from "./Icons";
import ProfileImage from "../assets/images/profile.png";

export default function Hero() {
  const tickerItems = [
    "FULL-STACK DEVELOPER",
    "BSIT 4TH YEAR",
    "UI/UX & WEB DESIGN",
    "SOFTWARE SOLUTIONS",
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
              Full-Stack Web Developer & Designer
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
                Bachelor of Science in Information Technology student majoring in Web and Mobile Application Development. Passionate about designing websites and turning ideas into functional, practical, and clean web applications.
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

              {/* Clean Action Buttons & Contact Pills */}
              <div className="hero-cta-wrapper">
                <div className="hero-primary-btns">
                  <a href="#projects" className="btn btn-primary">
                    <Icon name="Layers" size={16} />
                    <span>View Projects</span>
                  </a>
                  <a
                    href="/Gellie_Anne_Dela_Cruz_Resume.pdf"
                    download="Gellie_Anne_Dela_Cruz_Resume.pdf"
                    className="btn btn-secondary"
                    title="Download PDF Resume"
                  >
                    <Icon name="Download" size={16} />
                    <span>Download Resume</span>
                  </a>
                </div>

                <div className="hero-social-dock" aria-label="Quick Contacts and Profiles">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-social-btn github"
                    title="GitHub Profile"
                    aria-label="GitHub Profile"
                  >
                    <Icon name="Github" size={16} />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-social-btn linkedin"
                    title="LinkedIn Profile"
                    aria-label="LinkedIn Profile"
                  >
                    <Icon name="Linkedin" size={16} />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="hero-social-btn email"
                    title={`Send Email to ${personalInfo.email}`}
                    aria-label="Send Email"
                  >
                    <Icon name="Mail" size={16} />
                    <span>Email</span>
                  </a>

                  <a
                    href="#contact"
                    className="hero-social-btn contact"
                    title="Get In Touch / Contact Section"
                    aria-label="Contact Section"
                  >
                    <Icon name="Send" size={15} />
                    <span>Contact</span>
                  </a>
                </div>
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