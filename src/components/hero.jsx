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
          {/* Centered Retro Wordmark / Logo */}
          <div className="retro-wordmark-container">
            <h1 className="retro-wordmark">
              <span>gellie anne</span>
              <span>dela cruz</span>
            </h1>
            <p className="retro-wordmark-sub">
              Full-Stack Web Developer ✱ Bulacan State University – Bustos Campus
            </p>
          </div>

          {/* Split Hero Box: Framed Photo + Baby-Blue Striped Details */}
          <div className="hero-split-box">
            {/* Left Photo Pane */}
            <div className="hero-photo-pane">
              <img
                src={ProfileImage}
                alt={personalInfo.name}
                className="hero-photo-img"
              />
            </div>

            {/* Right Details Pane with Baby Blue Stripes */}
            <div className="hero-details-pane">
              {/* Rotating Rubber Stamp Badge */}
              <div className="stamp-badge-wrapper" title="Open to OJT / Internship Starting November 16, 2026">
                <svg viewBox="0 0 100 100" className="stamp-badge-svg">
                  <path
                    id="stampCirclePath"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    fill="none"
                  />
                  <circle cx="50" cy="50" r="44" fill="none" stroke="#F6A838" strokeWidth="1.5" strokeDasharray="3,2" />
                  <circle cx="50" cy="50" r="32" fill="#F6A838" opacity="0.15" />
                  <text fill="#A35B07" fontSize="8.2" fontWeight="800" letterSpacing="1.2">
                    <textPath href="#stampCirclePath" startOffset="0%">
                      OPEN TO OJT ✱ BULSU BUSTOS ✱ 2026 ✱
                    </textPath>
                  </text>
                  <text x="50" y="54" textAnchor="middle" fill="#8C331E" fontSize="12" fontWeight="900" fontFamily="Fraunces, serif">
                    GD
                  </text>
                </svg>
              </div>

              {/* Editorial Kicker & Headline */}
              <p className="hero-details-kicker">a dedicated full-stack developer</p>
              <h2 className="hero-details-headline">
                Functional Web Applications & Thoughtful Systems
              </h2>

              <p className="hero-details-bio">
                Bachelor of Science in Information Technology student majoring in Web and Mobile Application Development at Bulacan State University – Bustos Campus. Passionate about turning ideas into functional, practical, and clean web applications.
              </p>

              {/* Pill Action Buttons */}
              <div className="hero-details-cta-row">
                <a href="#projects" className="btn btn-primary">
                  <span>View Projects</span>
                </a>
                <a
                  href="/Gellie Anne Dela Cruz_Resume.pdf"
                  download="Gellie Anne Dela Cruz_Resume.pdf"
                  className="btn btn-secondary"
                  title="Download actual PDF Resume"
                >
                  <Icon name="Download" size={15} />
                  <span>Download Resume (PDF)</span>
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