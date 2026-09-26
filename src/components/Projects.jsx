import React, { useState } from "react";
import { projectsData } from "../data/portfolioData";
import { Icon } from "./Icons";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Custom cute doodle SVGs for the 3 featured cards
  const getDoodleIcon = (index) => {
    if (index === 0) {
      // Document / Workflow doodle (coral)
      return (
        <div className="project-pod-icon-box coral">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10 9 9 9 8 9" />
          </svg>
        </div>
      );
    } else if (index === 1) {
      // Accommodation / House doodle (blue)
      return (
        <div className="project-pod-icon-box blue">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        </div>
      );
    } else {
      // Store / POS Cart doodle (yellow)
      return (
        <div className="project-pod-icon-box yellow">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
        </div>
      );
    }
  };

  const getKickerText = (index) => {
    if (index === 0) return "THE WORKFLOW SYSTEM";
    if (index === 1) return "ACCOMMODATION & BOOKING";
    return "DESKTOP POINT-OF-SALE";
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        {/* Buttercup Yellow Pod Container */}
        <div className="projects-pod-container">
          <div className="projects-pod-header">
            <p className="projects-pod-kicker">FEATURED ACADEMIC SOFTWARE</p>
            <h2 className="projects-pod-title">
              LET'S BUILD PRACTICAL SOLUTIONS TOGETHER
            </h2>
          </div>

          {/* 3 Prominent White Pod Cards */}
          <div className="projects-pod-grid">
            {projectsData.map((project, idx) => (
              <article key={project.id} className="project-pod-card">
                {getDoodleIcon(idx)}

                <span className="project-pod-kicker">{getKickerText(idx)}</span>
                <h3 className="project-pod-name">{project.title}</h3>
                <p className="project-pod-desc">{project.summary || project.description}</p>

                {/* Tech Pills */}
                <div className="project-pod-tags">
                  {(project.technologies || project.tags || []).map((tech) => (
                    <span key={tech} className="project-pod-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons Row */}
                <div className="project-pod-actions">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="btn project-pod-btn btn-primary"
                  >
                    <span>Case Study</span>
                  </button>
                  {project.demo && project.demo.startsWith("http") && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn project-pod-btn btn-secondary"
                      title={`Visit ${project.title} live website`}
                    >
                      <Icon name="ExternalLink" size={14} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
