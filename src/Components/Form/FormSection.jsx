import React from "react";
import "./FormSection.css"; // Import the CSS file

const FormSection = () => {
  const googleFormLink = "https://docs.google.com/forms/d/e/1FAIpQLSecLMuJGNp_eAmJWZCBxk669cqn-4KZS-PQbC98_bC_RntobQ/viewform?usp=dialog";

  return (
    <section className="form-section">
      <div className="form-container">
        {/* Left Side: Bold Message */}
        <div className="form-message">
          <h2 className="form-heading">Maximize Your Productivity</h2>
          <p className="form-subheading">
            Life is busy, and we all need a helping hand. Whether you're looking to save time or earn extra income, <strong className="gigbud-highlight">GigBud</strong> connects you to a community that values efficiency and skill. Let’s make life easier, together.
          </p>
        </div>

        {/* Right Side: Google Form Link */}
        <div className="form-box">
          <div className="google-form-container">
            <h3 className="google-form-heading">Share Your Thoughts</h3>
            <p className="google-form-description">
              Your feedback is valuable to us! Click the button below to share your insights through our quick Google Form.
            </p>
            <a
              href={googleFormLink}
              target="_blank"
              rel="noopener noreferrer"
              className="google-form-button"
            >
              Give Feedback
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
