import React from 'react';
import "../styles/ProjectCard.scss"

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.link ? (
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                >
                    View Code
                </a>
            ) : (
                <span className="project-link disabled">
                    Coming Soon
                </span>
            )}
        </div>
    )
}

export default ProjectCard;