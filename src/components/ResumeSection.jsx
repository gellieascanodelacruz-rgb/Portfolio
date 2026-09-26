import React, { useState } from "react";
import { personalInfo, resumeData } from "../data/portfolioData";
import { Icon } from "./Icons";

export default function ResumeSection() {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownloadClick = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 4000);
  };

  return (
    <section id="resume" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Icon name="FileText" size={14} />
            Curriculum Vitae
          </span>
          <h2 className="section-title">Resume Overview</h2>
          <p className="section-subtitle">
            A concise summary of academic background, technical qualifications, and software projects.
          </p>
        </div>

        <div className="resume-card">
          <div className="resume-header-row">
            <div>
              <h3 className="resume-candidate-title">{personalInfo.name}</h3>
              <p style={{ color: "var(--accent-primary)", fontSize: "0.9375rem", fontFamily: "var(--font-mono)", marginTop: "0.25rem" }}>
                {personalInfo.title}
              </p>
            </div>

            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <a
                href="/Gellie Anne Dela Cruz_Resume.pdf"
                download="Gellie Anne Dela Cruz_Resume.pdf"
                className="btn btn-primary btn-sm"
                onClick={handleDownloadClick}
              >
                <Icon name="Download" size={16} />
                <span>Download Resume</span>
              </a>
              <a
                href="/Gellie Anne Dela Cruz_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
                title="Open and print actual PDF"
              >
                <Icon name="FileText" size={16} />
                <span>View / Print PDF</span>
              </a>
            </div>
          </div>

          {downloadSuccess && (
            <div className="form-success-banner" style={{ marginBottom: "1.5rem" }}>
              <Icon name="CheckCircle" size={18} />
              <span>Resume downloaded successfully (Gellie Anne Dela Cruz_Resume.pdf)!</span>
            </div>
          )}

          <div className="resume-summary-box">
            <p>{resumeData.summary}</p>
          </div>

          <div className="resume-sections-stack">
            {resumeData.sections.map((sec, idx) => (
              <div key={idx} className="resume-sub-section">
                <h4 className="resume-sub-title">{sec.title}</h4>
                <ul className="resume-items-list">
                  {sec.items.map((item, iIdx) => (
                    <li key={iIdx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
