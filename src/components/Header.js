// File: src/components/Header.js
import React, { useState, useEffect } from "react";
import HeaderCard from "./HeaderCard";
import "../styles/Header.scss";

const Header = () => {
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolling(window.scrollY > 50); // Change this value to your liking
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header id="home" className={scrolling ? "scrolling" : ""}>
            <div className="header-content">
                <h1 className={scrolling ? "shrink" : ""}>Jeremy Chee</h1>
                <HeaderCard />
            </div>
        </header>
    );
};

export default Header;
