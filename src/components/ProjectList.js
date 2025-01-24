import React from 'react';
import Slider from 'react-slick';
import projects from '../data/projects';
import '../styles/ProjectList.scss';
import FlipCard from './FlipCard';

const ProjectList = ({ category }) => {
    const filteredProjects = projects.filter(
        (project) => project.category === category
    );

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        pauseOnHover: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
        ],
    };

    return (
        <Slider {...settings} className='slick-slider'>
            {filteredProjects.map((project) => (
                <div key={project.id} className="project-list">
                    <FlipCard project={project} />
                </div>
            ))}
        </Slider>
    );
};

export default ProjectList;