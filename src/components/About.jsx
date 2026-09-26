import React from "react";
import { personalInfo } from "../data/portfolioData";
import { Icon } from "./Icons";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        {/* Large Editorial Statement (Clean, Professional, No Emojis) */}
        <h2 className="big-editorial-statement">
          I'm a <span className="highlight">Full-Stack Web Developer</span>, an Information Technology Student, System Builder & Dean's Lister.
        </h2>

        {/* Dashed Callout Box with Hand-drawn Style Arrows */}
        <div className="dashed-callout-box">
          {/* Left Arrow (SVG) */}
          <svg className="callout-arrow-left" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10,20 C30,70 70,10 85,75" />
            <polyline points="75,80 88,78 90,65" />
          </svg>

          <span className="dashed-callout-badge">
            BACKGROUND & OBJECTIVE
          </span>

          <h3 className="dashed-callout-title">
            Passionate About Building Clean, Functional Web Solutions
          </h3>

          <p className="dashed-callout-text">
            I craft thoughtful web applications with clean code, intuitive user interfaces, and robust database architectures. Open to software development opportunities and collaborative projects.
          </p>

          <a
            href="/Gellie_Anne_Dela_Cruz_Resume.pdf"
            download="Gellie_Anne_Dela_Cruz_Resume.pdf"
            className="btn btn-primary"
            title="Download actual PDF Resume"
          >
            <Icon name="Download" size={16} />
            <span>Download Resume</span>
          </a>

          {/* Right Arrow (SVG) */}
          <svg className="callout-arrow-right" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M85,20 C70,70 30,10 15,75" />
            <polyline points="10,65 12,78 25,80" />
          </svg>
        </div>

        {/* 4 About Info Highlight Cards */}
        <div className="about-cards-row">
          {personalInfo.aboutCards.map((card) => (
            <div key={card.id} className="about-editorial-card">
              <div className="about-card-badge">
                <Icon name={card.icon} size={20} />
              </div>
              <div className="about-card-label">{card.label}</div>
              <div className="about-card-val">{card.value}</div>
              <div className="about-card-sub">{card.subtext}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
