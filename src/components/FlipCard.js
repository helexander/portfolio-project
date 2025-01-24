import React, { useState } from 'react';
import '../styles/FlipCard.scss';

const FlipCard = ({ project }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    const handleLinkClick = (e) => {
        e.stopPropagation();
    };

    return (
        <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <div className="page-curl"></div>
                    <div className="flip-icon-container">
                        <span className="flip-text">Click to flip</span>
                    </div>
                    <h3>{project.title}</h3>
                </div>
                <div className="flip-card-back">
                    <p>{project.description}</p>
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleLinkClick}
                    >
                        View Project
                    </a>
                </div>
            </div>
        </div>
    );
};

export default FlipCard;