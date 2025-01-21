import React, { useState } from 'react';
import ExperienceModal from './ExperienceModal';
import '../styles/Experience.scss';

const Experience = () => {
    const [selectedExp, setSelectedExp] = useState(null);

    const experiences = [
        {
            id: 1,
            title: "Software Engineer",
            company: "Current Company",
            period: "2020 - Present",
            description: "Key responsibilities and achievements",
            responsibilities: [
                "Led development of key features",
                "Improved system performance by 40%",
            ],
            achievements: [
                "Successfully delivered project ahead of schedule",
                "Reduced bug count by 60%",
            ],
            technologies: ["React", "Node.js", "AWS", "Docker"]
        },
        {
            id: 2,
            period: "2018 - 2020",
            title: "Junior Developer",
            company: "Previous Company",
            description: "Key responsibilities and achievements"
        },
        {
            id: 3,
            period: "2015 - 2018",
            title: "University",
            company: "University Name",
            description: "Relevant coursework and projects"
        },
        {
            id: 4,
            period: "2018 - 2020",
            title: "Junior Developer",
            company: "Previous Company",
            description: "Key responsibilities and achievements"
        },
        {
            id: 5,
            period: "2015 - 2018",
            title: "University",
            company: "University Name",
            description: "Relevant coursework and projects"
        },
        // Add more experiences as needed
    ];

    const visibleExperiences = experiences.slice(0, 5); // Show max 5 items

    return (
        <section className="experience-section" id="experience">
            <h2>Professional Experience</h2>
            <div className="timeline-container">
                <div className="timeline">
                    {visibleExperiences.map((exp, index) => (
                        <div
                            key={exp.id}
                            className={`timeline-item ${index % 2 === 0 ? 'top' : 'bottom'}`}
                        >
                            <div className={`timeline-dot ${index === 0 ? 'pulsing' : ''}`}></div>
                            <div className="timeline-content" onClick={() => setSelectedExp(exp)} role="button" tabIndex={0}>
                                <h3>{exp.title}</h3>
                                <h4>{exp.company}</h4>
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