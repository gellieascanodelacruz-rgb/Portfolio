import React, { useState } from "react";
import { personalInfo } from "../data/portfolioData";
import { Icon } from "./Icons";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (errorMessage) setErrorMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Client-side basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage("Please fill in your name, email, and message.");
      return;
    }

    setIsSubmitting(true);

    // Simulate network submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 600);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Icon name="Mail" size={14} />
            Get In Touch
          </span>
          <h2 className="section-title">Contact Information</h2>
          <p className="section-subtitle">
            Interested in discussing an internship, OJT opportunity, or student project? Feel free to reach out.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Contact Info */}
          <div className="contact-info-panel">
            <p className="contact-intro-text">
              I am actively looking for internship and OJT positions in software development, web development, and database systems. You can reach me directly through any of the channels below.
            </p>

            <div className="contact-cards-stack">
              <a
                href={`mailto:${personalInfo.email}`}
                className="contact-card-item"
                title={`Send an email to ${personalInfo.email}`}
              >
                <div className="contact-card-icon">
                  <Icon name="Mail" size={20} />
                </div>
                <div className="contact-card-text">
                  <span className="contact-card-label">Email Address</span>
                  <span className="contact-card-val">{personalInfo.email}</span>
                </div>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card-item"
                title="View LinkedIn Profile"
              >
                <div className="contact-card-icon">
                  <Icon name="Linkedin" size={20} />
                </div>
                <div className="contact-card-text">
                  <span className="contact-card-label">LinkedIn</span>
                  <span className="contact-card-val">{personalInfo.linkedin.replace(/^https?:\/\//, "")}</span>
                </div>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card-item"
                title="View GitHub Profile"
              >
                <div className="contact-card-icon">
                  <Icon name="Github" size={20} />
                </div>
                <div className="contact-card-text">
                  <span className="contact-card-label">GitHub</span>
                  <span className="contact-card-val">{personalInfo.github.replace(/^https?:\/\//, "")}</span>
                </div>
              </a>

              <div className="contact-card-item" style={{ cursor: "default" }}>
                <div className="contact-card-icon" style={{ color: "var(--accent-emerald)" }}>
                  <Icon name="MapPin" size={20} />
                </div>
                <div className="contact-card-text">
                  <span className="contact-card-label">Location Base</span>
                  <span className="contact-card-val">{personalInfo.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="contact-form-card">
            <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.5rem" }}>
              Send a Message
            </h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", marginBottom: "1.5rem" }}>
              Leave a note for internship inquiries or general collaboration.
            </p>

            {isSubmitted ? (
              <div
                className="form-success-banner"
                style={{
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "1rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <Icon name="CheckCircle" size={24} />
                  <div>
                    <strong style={{ fontSize: "1.05rem" }}>Message Sent Successfully!</strong>
                    <p style={{ fontSize: "0.85rem", marginTop: "0.25rem", color: "#a7f3d0" }}>
                      Thank you for reaching out! I will review your message and get back to you soon.
                    </p>
                  </div>
                </div>

                <button
                  className="btn btn-secondary btn-sm"
                  onClick={() => setIsSubmitted(false)}
                  style={{ marginTop: "0.5rem" }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form" noValidate>
                {errorMessage && (
                  <div
                    style={{
                      background: "rgba(239, 68, 68, 0.1)",
                      border: "1px solid rgba(239, 68, 68, 0.3)",
                      color: "#fca5a5",
                      padding: "0.75rem 1rem",
                      borderRadius: "var(--radius-md)",
                      fontSize: "0.875rem",
                    }}
                  >
                    {errorMessage}
                  </div>
                )}

                <div className="form-group">
                  <label htmlFor="contact-name" className="form-label">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Jane Doe"
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email" className="form-label">
                    Your Email Address *
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. jane@company.com"
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-subject" className="form-label">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. OJT / Internship Inquiry"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message" className="form-label">
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    required
                    className="form-textarea"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isSubmitting}
                  style={{ width: "100%", marginTop: "0.5rem" }}
                >
                  <Icon name="Send" size={16} />
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
