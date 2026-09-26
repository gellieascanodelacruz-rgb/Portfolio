import React from "react";
import { educationData } from "../data/portfolioData";
import { Icon } from "./Icons";

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Icon name="GraduationCap" size={14} />
            Academic Background
          </span>
          <h2 className="section-title">Education & Academic Journey</h2>
          <p className="section-subtitle">
            Formal university education building practical expertise in software engineering and web technologies.
          </p>
        </div>

        <div className="education-card">
          <div className="edu-main-info">
            <div>
              <h3 className="edu-degree">{educationData.degree}</h3>
              <div className="edu-major" style={{ color: "#fda4af", fontWeight: 600, fontSize: "1.05rem", marginTop: "0.25rem" }}>
                {educationData.major}
              </div>
              <div className="edu-school" style={{ marginTop: "0.4rem" }}>{educationData.institution}</div>
            </div>

            <div className="edu-timeline-badge">
              <div className="edu-period">{educationData.period}</div>
              <div className="edu-expected">{educationData.expectedGraduation}</div>
              <div style={{ color: "#6ee7b7", fontSize: "0.8125rem", fontWeight: 700, marginTop: "0.25rem" }}>
                {educationData.status}
              </div>
            </div>
          </div>

          <p className="edu-desc">{educationData.description}</p>
        </div>
      </div>
    </section>
  );
}
