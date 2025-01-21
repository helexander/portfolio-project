import React from "react";
import "../styles/HeaderCard.scss";

const HeaderCard = () => {
    return (
        <div className="card">
            <h2>At a glance</h2>
            <p><strong>Role:</strong> Software Engineer</p>
            <p><strong>Experience:</strong> 5+ years in software development</p>
            <p><strong>Specialization:</strong> Web development, scripting, and automation</p>
        </div>
    );
};

export default HeaderCard;