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

        {/* Dashed Callout Box */}
        <div className="dashed-callout-box">
          <span className="dashed-callout-badge">
            PASSION & EXPERTISE
          </span>

          <h3 className="dashed-callout-title">
            Passionate About Designing & Building Modern Websites
          </h3>

          <p className="dashed-callout-text">
            I genuinely love designing websites and turning ideas into clean, functional, and user-friendly digital experiences. From crafting intuitive frontend layouts to engineering solid backend databases and APIs, I enjoy creating solutions that look beautiful and work seamlessly.
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
