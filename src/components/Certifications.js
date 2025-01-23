import React from 'react';
import awsLogo from '../assets/images/aws-logo.png';
import databricksLogo from '../assets/images/databricks-logo.png';
import atlassianLogo from '../assets/images/atlassian-logo.png';
import '../styles/Certifications.scss';

const Certifications = () => {
    const certifications = [
        {
            id: 1,
            name: "Databricks Fundamentals Accreditation",
            issuer: "Databricks",
            issueDate: "2024",
            logo: databricksLogo,
            skills: ["Data Engineering", "Data Analytics"]
        },
        {
            id: 2,
            name: "AWS Cloud Practitioner Essentials",
            issuer: "AWS Training",
            issueDate: "2024",
            logo: awsLogo,
            skills: ["AWS Services", "Cloud Architecture"]
        },
        {
            id: 3,
            name: "Jira Fundamentals",
            issuer: "Atlassian",
            issueDate: "2024",
            logo: atlassianLogo,
            skills: ["Project Management", "Agile", "Issue Tracking"]
        }
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