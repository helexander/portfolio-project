import React from 'react';
import "../styles/ProjectCard.scss"

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
            </a>
        </div>
    )
}

export default ProjectCard;