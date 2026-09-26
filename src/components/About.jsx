import React from "react";
import { personalInfo } from "../data/portfolioData";
import { Icon } from "./Icons";

export default function About() {
  return (
    <section id="about" className="section section-cream">
      <div className="container">
        {/* Large Editorial Statement with Inline Icons */}
        <h2 className="big-editorial-statement">
          I'm a <span className="highlight">Full-Stack Web Developer</span> 💻, an Information Technology Student 🎓, System Builder ⚙️ & Dean's Lister 🌟
        </h2>

        {/* Dashed Callout Box with Hand-drawn Style Arrows */}
        <div className="dashed-callout-box">
          {/* Left Arrow (SVG) */}
          <svg className="callout-arrow-left" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10,20 C30,70 70,10 85,75" />
            <polyline points="75,80 88,78 90,65" />
          </svg>

          <span className="dashed-callout-badge">
            BEFORE YOU SCROLL ANY FURTHER
          </span>

          <h3 className="dashed-callout-title">
            Want to Hire a Dedicated OJT / Intern for November 2026?!
          </h3>

          <p className="dashed-callout-text">
            I am actively seeking on-the-job training opportunities in software engineering, full-stack web development, and database systems starting November 16, 2026.
          </p>

          <a
            href="/Gellie Anne Dela Cruz_Resume.pdf"
            download="Gellie Anne Dela Cruz_Resume.pdf"
            className="btn btn-primary"
            title="Download actual PDF Resume"
          >
            <Icon name="Download" size={16} />
            <span>Download My Resume (PDF)</span>
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
