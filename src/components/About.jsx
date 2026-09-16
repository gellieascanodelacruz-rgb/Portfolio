import React from "react";
import { personalInfo } from "../data/portfolioData";
import { Icon } from "./Icons";

export default function About() {
  return (
    <section id="about" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Icon name="Info" size={14} />
            About Me
          </span>
          <h2 className="section-title">Background & Aspirations</h2>
          <p className="section-subtitle">
            An overview of my academic foundation, technical passions, and internship readiness.
          </p>
        </div>

        <div className="about-grid">
          {/* Bio text */}
          <div className="about-bio-card">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
              <span className="sample-badge">Sample Profile Summary</span>
            </div>
            <p>{personalInfo.fullBio}</p>
            <p>
              Driven by curiosity and a systematic approach to problem solving, I actively practice version control, responsive styling, and relational data modeling. I am eager to contribute to collaborative engineering teams through an undergraduate internship or OJT placement.
            </p>
          </div>

          {/* 4 Small Info Cards */}
          <div className="about-cards-grid">
            {personalInfo.aboutCards.map((card) => (
              <div
                key={card.id}
                className={`about-info-card ${card.highlight ? "highlight" : ""}`}
              >
                <div className="info-card-icon">
                  <Icon name={card.icon} size={22} />
                </div>
                <div>
                  <span className="info-card-label">{card.label}</span>
                  <h3 className="info-card-value">{card.value}</h3>
                </div>
                <span className="info-card-subtext">{card.subtext}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
