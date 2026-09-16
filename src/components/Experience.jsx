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
          <h2 className="section-title">Academic & Practicum Experience</h2>
          <p className="section-subtitle">
            Hands-on collaborative projects, simulated team workflows, and student practicum exposure.
          </p>
          <div style={{ marginTop: "0.75rem" }}>
            <span className="sample-badge">Note: All entries below are Sample / Dummy Data</span>
          </div>
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
                    <span className="sample-badge">Sample Data</span>
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
