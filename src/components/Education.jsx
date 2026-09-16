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
          <h2 className="section-title">Education & Coursework</h2>
          <p className="section-subtitle">
            Formal university education preparing a solid foundation in computer science and modern IT systems.
          </p>
        </div>

        <div className="education-card">
          <div className="edu-main-info">
            <div>
              <span className="sample-badge" style={{ marginBottom: "0.5rem", display: "inline-block" }}>
                Sample University Data
              </span>
              <h3 className="edu-degree">{educationData.degree}</h3>
              <div className="edu-school">{educationData.institution}</div>
            </div>

            <div className="edu-timeline-badge">
              <div className="edu-period">{educationData.period}</div>
              <div className="edu-expected">{educationData.expectedGraduation}</div>
            </div>
          </div>

          <p className="edu-desc">{educationData.description}</p>

          <div>
            <h4 className="coursework-section-title">Relevant Academic Coursework</h4>
            <div className="coursework-grid">
              {educationData.coursework.map((course, idx) => (
                <div key={idx} className={`course-pill ${course.highlight ? "highlight" : ""}`}>
                  <span>{course.name}</span>
                  <span className="course-code">{course.code}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
