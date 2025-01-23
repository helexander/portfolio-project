import React from "react";
import "../styles/Footer.scss";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <p>&copy; {currentYear} Jeremy Chee. All rights reserved.</p>
        </footer>
    );
};

export default Footer;