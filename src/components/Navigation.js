import React, { useState } from 'react';
import '../styles/Navigation.scss';

const Navigation = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <>
            <button
                className={`nav-toggle ${isDrawerOpen ? 'open' : ''}`}
                onClick={toggleDrawer}
                aria-label="Toggle navigation"
            >
                <div className="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </button>

            {isDrawerOpen && (
                <div
                    className="nav-overlay"
                    onClick={() => setIsDrawerOpen(false)}
                />
            )}

            <nav className={`navigation ${isDrawerOpen ? 'drawer-open' : ''}`}>
                <ul>
                    <li><a href="#home" onClick={() => setIsDrawerOpen(false)}>Home</a></li>
                    <li><a href="#projects" onClick={() => setIsDrawerOpen(false)}>Projects</a></li>
                    <li><a href="#experience" onClick={() => setIsDrawerOpen(false)}>Experience</a></li>
                    <li><a href="#certifications" onClick={() => setIsDrawerOpen(false)}>Certifications</a></li>
                    <li><a href="#contact" onClick={() => setIsDrawerOpen(false)}>Contact Me</a></li>
                </ul>
            </nav>
        </>
    );
};

export default Navigation;