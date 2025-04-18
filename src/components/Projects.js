import React, { useState } from 'react';
import ProjectList from './ProjectList';
import '../styles/Projects.scss'

const Projects = () => {
    const [selectedTab, setSelectedTab] = useState('Scripts');

    const handleTabChange = (category) => {
        setSelectedTab(category);
    };

    return (
        <main >
            <div className="tabs" id="projects">
                <button
                    onClick={() => handleTabChange('Scripts')}
                    className={selectedTab === 'Scripts' ? 'active' : ''}
                >
                    Scripts
                </button>
                <button
                    onClick={() => handleTabChange('Web Applications')}
                    className={selectedTab === 'Web Applications' ? 'active' : ''}
                >
                    Web Applications
                </button>
                <button
                    onClick={() => handleTabChange('Others')}
                    className={selectedTab === 'Others' ? 'active' : ''}
                >
                    Others
                </button>
            </div>

            {selectedTab === 'Scripts' && (
                <ProjectList category="Scripts" />
            )}
            {selectedTab === 'Web Applications' && (
                <ProjectList category="Web Applications" />
            )}
            {selectedTab === 'Others' && (
                <ProjectList category="Others" />
            )}
        </main>
    )
}

export default Projects