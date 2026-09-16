import React, { useState } from "react";
import { projectsData } from "../data/portfolioData";
import { Icon } from "./Icons";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Icon name="Layers" size={14} />
            Featured Work
          </span>
          <h2 className="section-title">Academic & Personal Projects</h2>
          <p className="section-subtitle">
            Hands-on web applications developed to solve real workflow problems, demonstrate full-stack logic, and showcase clean database design.
          </p>
        </div>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <article key={project.id} className="project-card">
              {/* Left Column: Mockup & Category Info */}
              <div className="project-preview-wrapper">
                <div>
                  <div className="project-badge-row">
                    <span className="project-category-tag">{project.category}</span>
                    <span className="project-academic-tag">{project.badge}</span>
                  </div>

                  {/* Visual Interface Mockup Graphic */}
                  <div className="project-mockup-graphic">
                    <div className="mockup-header-bar">
                      <span className="mockup-dot" />
                      <span className="mockup-dot" />
                      <span className="mockup-dot" />
                      <span style={{ fontSize: "0.6875rem", fontFamily: "var(--font-mono)", color: "var(--text-muted)", marginLeft: "0.5rem" }}>
                        app://{project.id}.local/dashboard
                      </span>
                    </div>
                    <div className="mockup-body-wireframe">
                      <div className="wireframe-line" style={{ width: "60%" }} />
                      <div className="wireframe-line" style={{ width: "85%" }} />
                      <div className="wireframe-boxes">
                        <div className="wireframe-box" />
                        <div className="wireframe-box" />
                        <div className="wireframe-box" />
                      </div>
                      <div className="wireframe-line" style={{ width: "40%" }} />
                    </div>
                  </div>
                </div>

                {/* Role Contribution */}
                <div className="project-role-badge">
                  <strong>My Role:</strong> {project.role}
                </div>
              </div>

              {/* Right Column: Project Details */}
              <div className="project-details">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-tagline">{project.tagline}</p>
                </div>

                <p className="project-summary">{project.summary}</p>

                {/* Problem & Solution Breakdown */}
                <div className="problem-solution-box">
                  <div className="ps-item">
                    <span className="ps-label">The Problem:</span>
                    <p className="ps-text">{project.problem}</p>
                  </div>
                  <div className="ps-item">
                    <span className="ps-label">The Solution:</span>
                    <p className="ps-text">{project.solution}</p>
                  </div>
                </div>

                {/* Key Features */}
                <div className="project-features-list">
                  <div className="features-title">Key Implemented Features</div>
                  <div className="features-grid">
                    {project.features.map((feature, fIdx) => (
                      <div key={fIdx} className="feature-point">
                        <Icon name="CheckCircle" size={16} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="project-tech-tags">
                  {project.technologies.map((tech, tIdx) => (
                    <span key={tIdx} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="project-actions">
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => setSelectedProject(project)}
                  >
                    <Icon name="FileText" size={16} />
                    <span>View Case Study</span>
                  </button>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                    title="Live Demo Preview (Dummy Link)"
                  >
                    <Icon name="ExternalLink" size={16} />
                    <span>Live Demo</span>
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm"
                    title="GitHub Repository (Dummy Link)"
                  >
                    <Icon name="Github" size={16} />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
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
