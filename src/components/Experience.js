import React, { useState, useEffect } from 'react';
import ExperienceModal from './ExperienceModal';
import '../styles/Experience.scss';
import experiences from '../data/experiences';

const Experience = () => {
    const [selectedExp, setSelectedExp] = useState(null);
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1200);
    const visibleExperiences = experiences.slice(0, 5);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth > 1200);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section className="experience-section" id="experience">
            <h2>Professional Experience</h2>
            <div className="timeline-container">
                <div className="timeline">
                    {visibleExperiences.map((exp, index) => (
                        <div
                            key={exp.id}
                            className="timeline-item"
                        >
                            <div className={`timeline-dot ${index === 0 ? 'pulsing' : ''}`}></div>
                            <div className="timeline-content" onClick={() => setSelectedExp(exp)} role="button" tabIndex={0}>
                                {isLargeScreen ? (
                                    <div className="company-logo">
                                        <img src={exp.companyLogo} alt={exp.company} />
                                    </div>
                                ) : null}
                                <h3>{exp.title}</h3>
                                {isLargeScreen ? (
                                    <h4>@ {exp.short_company_name}</h4>
                                ) : (
                                    <h4>{exp.company}</h4>
                                )}
                                <p className="period">{exp.period}</p>
                                <p className="description">{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <ExperienceModal
                experience={selectedExp}
                isOpen={!!selectedExp}
                onClose={() => setSelectedExp(null)}
            />
        </section>
    );
};

export default Experience;