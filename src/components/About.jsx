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
            <p>{personalInfo.fullBio}</p>
            <div style={{ marginTop: "1.5rem" }}>
              <h4 style={{ fontSize: "0.875rem", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.06em", color: "#fda4af", marginBottom: "0.75rem" }}>
                Key Focus Areas
              </h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {personalInfo.focusAreas && personalInfo.focusAreas.map((area, idx) => (
                  <span key={idx} className="focus-tag">
                    {area}
                  </span>
                ))}
              </div>
            </div>
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
