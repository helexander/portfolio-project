import React from "react";
import "../styles/HeaderCard.scss";

const HeaderCard = () => {
    const glanceInfo = {
        name: "Jeremy Chee",
        title: "Data Ops Executive | Software Engineer",
        location: "Singapore",
        education: [
            {
                degree: "Masters in International Business",
                institution: "University of Wollongong, Australia"
            },
            {
                degree: "BSc Computer Science",
                institution: "University of Wollongong, Australia"
            }
        ],
        profile: "Data Operations Executive located in Singapore with previous experience as a Software Developer with working experience in Hong Kong, Australia and Malaysia."
    };

    return (
        <div className="header-card">
            <div className="header-main">
                <h1>{glanceInfo.name}</h1>
                <h2>{glanceInfo.title}</h2>
                <p className="location">{glanceInfo.location}</p>
            </div>

            <div className="header-details">
                <div className="profile-section">
                    <h3>Profile</h3>
                    <p>{glanceInfo.profile}</p>
                </div>

                <div className="education-section">
                    <h3>Education</h3>
                    {glanceInfo.education.map((edu, index) => (
                        <div key={index} className="education-item">
                            <h4>{edu.degree}</h4>
                            <p>{edu.institution}</p>
                            {edu.specialization}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HeaderCard;