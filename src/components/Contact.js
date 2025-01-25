import React from 'react';
import resume from '../assets/resume/Jeremy_Resume_2024_SE.pdf';
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
                        href={resume}
                        className="resume-button"
                        download="Jeremy_Resume_2024_SE.pdf"
                    >
                        <i className="fas fa-file-download"></i>
                        Download Resume
                    </a>

                    <div className="contact-links">
                        <a
                            href="jeremychee97@gmail.com"
                            className="contact-link email"
                        >
                            <i className="fas fa-envelope"></i>
                            <span>Email</span>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/jeremy-chee/"
                            className="contact-link linkedin"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-linkedin"></i>
                            <span>LinkedIn</span>
                        </a>

                        <a
                            href="https://github.com/helexander"
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