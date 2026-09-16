import React, { useState } from "react";
import { personalInfo, resumeData } from "../data/portfolioData";
import { Icon } from "./Icons";

export default function ResumeSection() {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownload = () => {
    // Generate clean text-formatted resume for instant download demonstration
    const resumeText = `=================================================================
${personalInfo.name.toUpperCase()}
${personalInfo.title}
Location: ${personalInfo.location} | Email: ${personalInfo.email}
LinkedIn: ${personalInfo.linkedin} | GitHub: ${personalInfo.github}
=================================================================

PROFESSIONAL SUMMARY
${resumeData.summary}

EDUCATION
- Bachelor of Science in Information Technology
  Sample State University (2023 – Present, Expected 2027)
  Relevant Coursework: Web Systems, Relational Databases, Cybersecurity, System Administration

TECHNICAL SKILLS
- Programming: JavaScript (ES6+), Python, PHP, HTML5, CSS3, SQL
- Frameworks & Libraries: React.js, Node.js, Tailwind CSS
- Databases: MySQL, Firebase, Cloud Firestore
- Developer Tools: Git, GitHub, VS Code, Figma
- Concepts: REST APIs, CRUD Workflows, Authentication, Responsive UI

FEATURED ACADEMIC PROJECTS
1. DocuFlow (Document Management & Workflow System)
   - Stack: React.js, Node.js, MySQL, Tailwind CSS
   - Role-based routing, approvals, and document tracking audit logs.

2. StayEase (Accommodation Reservation Platform Concept)
   - Stack: React.js, Firebase Auth, Cloud Firestore
   - Real-time queries, Google OAuth sign-in, and responsive filtering.

3. PharmaCart (Pharmacy E-Commerce & Prescription Verification)
   - Stack: PHP, MySQL, JavaScript, HTML5, CSS3
   - Prescription upload verification, shopping cart, and order tracking.

CERTIFICATIONS & WORKSHOPS (SAMPLE)
- Web Development Fundamentals (Sample Learning Institute, 2026)
- Database Fundamentals (Sample Online Academy, 2025)
- Introduction to Cybersecurity (Sample Technology Academy, 2025)

[NOTE: This document contains sample/placeholder data for portfolio demonstration purposes.]
=================================================================`;

    const blob = new Blob([resumeText], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `Alex_Morgan_Resume_Sample.txt`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 4000);
  };

  const handlePrint = () => {
    window.print();
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
          <div style={{ marginTop: "0.75rem" }}>
            <span className="sample-badge">Sample Resume Data</span>
          </div>
        </div>

        <div className="resume-card">
          <div className="resume-header-row">
            <div>
              <span className="sample-badge" style={{ marginBottom: "0.4rem", display: "inline-block" }}>
                Candidate Summary
              </span>
              <h3 className="resume-candidate-title">{personalInfo.name}</h3>
              <p style={{ color: "var(--accent-primary)", fontSize: "0.9375rem", fontFamily: "var(--font-mono)" }}>
                {personalInfo.title}
              </p>
            </div>

            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <button className="btn btn-primary btn-sm" onClick={handleDownload}>
                <Icon name="Download" size={16} />
                <span>Download Sample Resume</span>
              </button>
              <button className="btn btn-secondary btn-sm" onClick={handlePrint} title="Print or save as PDF via browser">
                <Icon name="FileText" size={16} />
                <span>Print / Save PDF</span>
              </button>
            </div>
          </div>

          {downloadSuccess && (
            <div className="form-success-banner" style={{ marginBottom: "1.5rem" }}>
              <Icon name="CheckCircle" size={18} />
              <span>Sample resume downloaded successfully (Alex_Morgan_Resume_Sample.txt)!</span>
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
