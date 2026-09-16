import React, { useEffect } from "react";
import { Icon } from "./Icons";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="modal-content">
        <div className="modal-header">
          <div className="modal-title-group">
            <span className="project-category-tag" style={{ marginBottom: "0.5rem", display: "inline-block" }}>
              {project.category}
            </span>
            <h3 id="modal-title">{project.title} — Case Study</h3>
            <span className="modal-subtitle">{project.tagline}</span>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close Case Study">
            <Icon name="X" size={24} />
          </button>
        </div>

        <div className="modal-body">
          {/* Key Metrics / Snapshot */}
          <div className="modal-metrics-grid">
            {project.caseStudy.keyMetrics.map((m, idx) => (
              <div key={idx} className="metric-pill">
                <span className="metric-label">{m.label}</span>
                <p className="metric-val">{m.val}</p>
              </div>
            ))}
          </div>

          {/* Project Overview */}
          <div className="modal-section">
            <h4 className="modal-section-title">Project Overview & Context</h4>
            <p>{project.caseStudy.overview}</p>
          </div>

          {/* Technical Architecture */}
          <div className="modal-section">
            <h4 className="modal-section-title">System Architecture & Stack</h4>
            <ul className="modal-list">
              {project.caseStudy.architecture.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Database Design Notes */}
          <div className="modal-section">
            <h4 className="modal-section-title">Database Design & Data Flow</h4>
            <p>{project.caseStudy.databaseHighlights}</p>
          </div>

          {/* Key Technical Challenges & Takeaways */}
          <div className="modal-section">
            <h4 className="modal-section-title">Key Engineering Takeaways & Lessons</h4>
            <p>{project.caseStudy.challengesAndLearnings}</p>
          </div>

          {/* Technologies Used */}
          <div className="modal-section">
            <h4 className="modal-section-title">Technologies Used</h4>
            <div className="project-tech-tags" style={{ marginBottom: 0 }}>
              {project.technologies.map((t, idx) => (
                <span key={idx} className="tech-tag">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div style={{ display: "flex", gap: "1rem", marginTop: "1rem", flexWrap: "wrap" }}>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
              title="Demo link (Sample/Placeholder)"
            >
              <Icon name="ExternalLink" size={16} />
              <span>Visit Demo (Dummy Link)</span>
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
              title="GitHub repository (Sample/Placeholder)"
            >
              <Icon name="Github" size={16} />
              <span>View Code Repository</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
