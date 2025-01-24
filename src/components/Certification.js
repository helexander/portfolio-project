import React from 'react';
import '../styles/Certifications.scss';
import certifications from '../data/certifications';

const Certifications = () => {

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
                            </div>

                            <div className="skills-container">
                                {cert.skills.map((skill, index) => (
                                    <span key={index} className="skill-tag">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Certifications;