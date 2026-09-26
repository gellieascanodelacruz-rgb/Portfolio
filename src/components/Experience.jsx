import React from "react";
import { experienceData } from "../data/portfolioData";
import { Icon } from "./Icons";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Icon name="Briefcase" size={14} />
            Experience
          </span>
          <h2 className="section-title">Academic & Project Experience</h2>
          <p className="section-subtitle">
            Hands-on software development, database architecture, and API integration in academic projects.
          </p>
        </div>

        <div className="timeline">
          {experienceData.map((item) => (
            <div key={item.id} className="timeline-item">
              <div className="timeline-dot" />

              <div className="timeline-card">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role">{item.role}</h3>
                    <div className="timeline-org">{item.organization}</div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span className="timeline-period-badge">{item.period}</span>
                  </div>
                </div>

                <p className="timeline-desc">{item.description}</p>

                <ul className="timeline-bullets">
                  {item.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
