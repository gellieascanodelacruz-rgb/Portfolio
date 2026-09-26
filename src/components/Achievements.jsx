import React from "react";
import { achievementsData } from "../data/portfolioData";
import { Icon } from "./Icons";

export default function Achievements() {
  return (
    <section id="achievements" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Icon name="Award" size={14} />
            Recognition
          </span>
          <h2 className="section-title">Honors & Achievements</h2>
          <p className="section-subtitle">
            Academic honors and commendations received during undergraduate studies.
          </p>
        </div>

        <div className="achievements-grid" style={{ maxWidth: "700px", margin: "0 auto" }}>
          {achievementsData.map((item) => (
            <div key={item.id} className="achievement-card">
              <div className="card-top-row">
                <div className="card-icon-bubble">
                  <Icon name="Award" size={20} />
                </div>
              </div>

              <h3 className="card-title">{item.title}</h3>
              <div className="card-meta">
                {item.issuer} • {item.period}
              </div>
              <p className="card-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
