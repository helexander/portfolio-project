import React from 'react';
import '../styles/Contact.scss';

const Contact = () => {
    return (
        <section className="contact-section" id="contact">
            <div className="contact-container">
                <h2>Get In Touch</h2>
                <p className="contact-description">
                    I'm currently open to new opportunities. Feel free to reach out!
                </p>

                <div className="contact-options">
                    <a
                        href="/path-to-your-resume.pdf"
                        className="resume-button"
                        download="YourName-Resume.pdf"
                    >
                        <i className="fas fa-file-download"></i>
                        Download Resume
                    </a>

                    <div className="contact-links">
                        <a
                            href="mailto:your.email@example.com"
                            className="contact-link email"
                        >
                            <i className="fas fa-envelope"></i>
                            <span>Email</span>
                        </a>

                        <a
                            href="https://linkedin.com/in/your-profile"
                            className="contact-link linkedin"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-linkedin"></i>
                            <span>LinkedIn</span>
                        </a>

                        <a
                            href="https://github.com/your-username"
                            className="contact-link github"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-github"></i>
                            <span>GitHub</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;