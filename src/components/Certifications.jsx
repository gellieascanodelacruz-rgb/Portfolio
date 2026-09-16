import React, { useState } from "react";
import { certificationsData } from "../data/portfolioData";
import { Icon } from "./Icons";

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Icon name="Shield" size={14} />
            Credentials
          </span>
          <h2 className="section-title">Certifications & Training</h2>
          <p className="section-subtitle">
            Course completions and technical foundational workshops.
          </p>
          <div style={{ marginTop: "0.75rem" }}>
            <span className="sample-badge">Sample / Mock Certifications for Demo Purposes</span>
          </div>
        </div>

        <div className="certifications-grid">
          {certificationsData.map((cert) => (
            <div key={cert.id} className="cert-card">
              <div className="cert-card-header">
                <div className="cert-icon-wrapper">
                  <Icon name="Award" size={22} />
                </div>
                <span className="sample-badge">Sample Data</span>
              </div>

              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer} • {cert.year}</p>
              <span className="cert-credential-id">Credential ID: {cert.credentialId}</span>

              <div className="cert-skills-tags">
                {cert.skills.map((s, idx) => (
                  <span key={idx} className="cert-skill-tag">
                    {s}
                  </span>
                ))}
              </div>

              <button
                className="btn btn-outline btn-sm"
                onClick={() => setSelectedCert(cert)}
                style={{ width: "100%", marginTop: "auto" }}
              >
                <Icon name="FileText" size={15} />
                <span>View Sample Credential</span>
              </button>
            </div>
          ))}
        </div>

        {/* Certificate Preview Modal */}
        {selectedCert && (
          <div
            className="modal-backdrop"
            onClick={(e) => {
              if (e.target === e.currentTarget) setSelectedCert(null);
            }}
            role="dialog"
            aria-modal="true"
          >
            <div className="modal-content" style={{ maxWidth: "540px" }}>
              <div className="modal-header">
                <div>
                  <span className="sample-badge" style={{ marginBottom: "0.5rem", display: "inline-block" }}>
                    Sample Certificate Preview
                  </span>
                  <h3>{selectedCert.title}</h3>
                </div>
                <button
                  className="modal-close-btn"
                  onClick={() => setSelectedCert(null)}
                  aria-label="Close Preview"
                >
                  <Icon name="X" size={20} />
                </button>
              </div>
              <div className="modal-body" style={{ textAlign: "center", padding: "2.5rem 1.5rem" }}>
                <div
                  style={{
                    border: "2px dashed var(--border-hover)",
                    borderRadius: "var(--radius-md)",
                    padding: "2rem 1.5rem",
                    background: "rgba(10, 14, 23, 0.6)",
                  }}
                >
                  <Icon name="Award" size={48} style={{ color: "var(--accent-primary)", marginBottom: "1rem" }} />
                  <h4 style={{ fontSize: "1.25rem", color: "var(--text-primary)", marginBottom: "0.5rem" }}>
                    Certificate of Completion
                  </h4>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", marginBottom: "1rem" }}>
                    This certifies that <strong>Alex Morgan</strong> has successfully completed the coursework for:
                  </p>
                  <h5 style={{ color: "var(--accent-primary)", fontSize: "1.1rem", marginBottom: "1.25rem" }}>
                    {selectedCert.title}
                  </h5>
                  <div style={{ fontSize: "0.8125rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                    Issuer: {selectedCert.issuer} | {selectedCert.year}
                    <br />
                    ID: {selectedCert.credentialId} (Dummy Credential)
                  </div>
                </div>
                <div style={{ marginTop: "1.5rem" }}>
                  <button className="btn btn-secondary btn-sm" onClick={() => setSelectedCert(null)}>
                    Close Preview
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
