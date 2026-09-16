import React from "react";
import { skillsData } from "../data/portfolioData";
import { Icon } from "./Icons";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Icon name="Cpu" size={14} />
            Technical Stack
          </span>
          <h2 className="section-title">Skills & Proficiencies</h2>
          <p className="section-subtitle">
            Categorized technical capabilities developed through academic coursework, laboratory exercises, and personal projects.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="skills-categories-grid">
          {skillsData.categories.map((cat, idx) => (
            <div key={idx} className="skill-category-card">
              <div className="category-header">
                <div className="category-icon">
                  <Icon name={cat.icon} size={20} />
                </div>
                <h3 className="category-title">{cat.title}</h3>
              </div>

              <div className="skill-items-list">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-item">
                    <div className="skill-meta">
                      <span className="skill-name">{skill.name}</span>
                      <span className={`skill-tier-badge tier-${skill.level}`}>
                        {skill.level}
                      </span>
                    </div>
                    <div className="skill-bar-track">
                      <div
                        className={`skill-bar-fill fill-${skill.level}`}
                        style={{ width: `${skill.percent}%` }}
                        role="progressbar"
                        aria-valuenow={skill.percent}
                        aria-valuemin="0"
                        aria-valuemax="100"
                        aria-label={`${skill.name} proficiency level: ${skill.level}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Transparent Student Proficiency Legend */}
        <div className="skills-legend-container">
          <div className="legend-title">Proficiency Framework (Student Level)</div>
          <div className="legend-items">
            {skillsData.levelsLegend.map((legend, lIdx) => (
              <div key={lIdx} className="legend-item">
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span className={`skill-tier-badge tier-${legend.name}`}>{legend.name}</span>
                </div>
                <p className="legend-desc">{legend.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
