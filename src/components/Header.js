import React from 'react';
import '../styles/Header.scss';

const Header = () => {
    return (
        <div className="profile-container" id="home">
            <div className="header-section">
                <h1>Jeremy Chee</h1>
                <div className="title">
                    Data Ops Executive
                    <span>Software Engineer</span>
                </div>
                <div className="location">
                    <i className="fas fa-map-marker-alt"></i>
                    Singapore
                </div>
            </div>

            <div className="content-section">
                <div className="section">
                    <h2>Profile</h2>
                    <p>
                        Data Operations Executive located in Singapore with
                        previous experience as a Software Developer, working
                        experience in Hong Kong, Australia and Malaysia.
                    </p>
                </div>

                <div className="section">
                    <h2>Education</h2>
                    <div className="education-item">
                        <h3>Masters in International Business</h3>
                        <p>University of Wollongong, Australia</p>
                    </div>
                    <div className="education-item">
                        <h3>BSc Computer Science</h3>
                        <p>University of Wollongong, Australia</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;