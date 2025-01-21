import React from 'react';
import '../styles/ExperienceModal.scss';

const ExperienceModal = ({ experience, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>&times;</button>
                <h2>{experience.title}</h2>
                <h3>{experience.company}</h3>
                <p className="modal-period">{experience.period}</p>

                <div className="modal-details">
                    <div className="responsibilities">
                        <h4>Key Responsibilities</h4>
                        <ul>
                            {experience.responsibilities?.map((resp, index) => (
                                <li key={index}>{resp}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="achievements">
                        <h4>Key Achievements</h4>
                        <ul>
                            {experience.achievements?.map((achievement, index) => (
                                <li key={index}>{achievement}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="technologies">
                        <h4>Technologies Used</h4>
                        <div className="tech-tags">
                            {experience.technologies?.map((tech, index) => (
                                <span key={index} className="tech-tag">{tech}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExperienceModal;