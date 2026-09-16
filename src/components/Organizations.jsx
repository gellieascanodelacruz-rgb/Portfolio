import React from "react";
import { organizationsData } from "../data/portfolioData";
import { Icon } from "./Icons";

export default function Organizations() {
  return (
    <section id="organizations" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Icon name="Users" size={14} />
            Extracurriculars
          </span>
          <h2 className="section-title">Organizations & Activities</h2>
          <p className="section-subtitle">
            Active involvement in collegiate developer communities, hackathons, and technical workshops.
          </p>
          <div style={{ marginTop: "0.75rem" }}>
            <span className="sample-badge">Sample Extracurricular Data</span>
          </div>
        </div>

        <div className="organizations-grid">
          {organizationsData.map((item) => (
            <div key={item.id} className="org-card">
              <div className="card-top-row">
                <div className="card-icon-bubble">
                  <Icon name="Users" size={20} />
                </div>
                <span className="sample-badge">Sample Data</span>
              </div>

              <h3 className="card-title">{item.name}</h3>
              <div className="card-meta">
                Role: {item.role} ({item.period})
              </div>
              <p className="card-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
