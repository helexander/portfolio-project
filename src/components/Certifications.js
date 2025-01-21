import React from 'react';
import '../styles/Certifications.scss';

const Certifications = () => {
    const certifications = [
        {
            id: 1,
            name: "AWS Solutions Architect Associate",
            issuer: "Amazon Web Services",
            issueDate: "Jan 2024",
            logo: "/images/aws-logo.png", // Add your certification logos
            verificationLink: "https://www.credly.com/your-badge-url",
            skills: ["Cloud Architecture", "AWS Services", "Solution Design"]
        },
        // Add more certifications as needed
    ];

    return (
        <section className="certifications-section" id="certifications">
            <h2>Professional Certifications</h2>
            <div className="certifications-grid">
                {certifications.map((cert) => (
                    <div key={cert.id} className="certification-card">
                        <div className="certification-header">
                            <div className="logo-container">
                                <img
                                    src={cert.logo}
                                    alt={`${cert.issuer} logo`}
                                    className="cert-logo"
                                />
                            </div>
                            <div className="certification-title">
                                <h3>{cert.name}</h3>
                                <h4>{cert.issuer}</h4>
                            </div>
                        </div>

                        <div className="certification-details">
                            <div className="date-info">
                                <p>Issued: {cert.issueDate}</p>
                                {cert.expiryDate && (
                                    <p>Expires: {cert.expiryDate}</p>
                                )}
                            </div>

                            <div className="skills-container">
                                {cert.skills.map((skill, index) => (
                                    <span key={index} className="skill-tag">
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            {cert.verificationLink && (
                                <a
                                    href={cert.verificationLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="verify-button"
                                >
                                    Verify Certificate
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Certifications;