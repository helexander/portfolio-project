import React from 'react';
import Slider from 'react-slick'; // Slick carousel import
import projects from '../data/projects';
import '../styles/ProjectList.scss';
import ProjectCard from './ProjectCard';

const ProjectList = ({ category }) => {
    const filteredProjects = projects.filter(
        (project) => project.category === category
    );

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2, // Show 2 cards on large screens
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024, // Medium screens (less than 1024px)
                settings: {
                    slidesToShow: 1, // Show 1 card
                },
            },
            {
                breakpoint: 768, // Small screens (less than 768px)
                settings: {
                    slidesToShow: 1, // Show 1 card
                },
            },
        ],
    };

    return (
        <section id="projects">
            <h2>{category}</h2>
            <Slider {...settings}>
                {filteredProjects.map((project) => (
                    <div key={project.id} className="project-list">
                        <ProjectCard project={project} />
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default ProjectList;
